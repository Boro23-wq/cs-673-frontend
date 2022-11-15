export default async function fetchJson<JSON = unknown>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const response = await fetch(input, init)

  // if the server replies, there's always some data in json
  // if there's a network error, it will throw at the previous line
  const data = await response.json()

  // response.ok is true when res.status is 2xx
  // https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
  if (response.ok) {
    return data
  }

  const { message } = data

  throw new FetchError({
    data: message
  })
}

export class FetchError extends Error {
  data: {
    message: string
    type: string
    statusCode: number
  }

  constructor({
    data
  }: {
    data: {
      message: string
      type: string
      statusCode: number
    }
  }) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(data.message)

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetchError)
    }

    this.data = data ?? { data }
  }
}
