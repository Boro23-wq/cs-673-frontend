import Header from '@/components/Header'
import { Layout } from '@/components/Layout'
import { NextHead } from '@/components/NextHead'
import { Button, Checkbox, Label, Textarea, TextInput } from 'flowbite-react'

const Contact = () => {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center">
        <NextHead
          title="Carely - Contact"
          metaName="Carely"
          metaContent="Carely will help you attain goal-oriented, culturally relevant
          and logical steps to assure that you receive services in a supportive, effective, efficient, timely and cost-effective manner."
        />

        <Header
          title="Contact us"
          description="Carely will help you find the right plan and pricing for your health."
        />

        <main className="w-full justify-center flex">
          <form className="w-full md:w-3/5 px-2 mt-6 flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                id="name"
                type="name"
                placeholder="Enter your full name"
                required={true}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="Enter your email address"
                required={true}
                addon="@"
              />
            </div>

            <div id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Your message for us" />
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required={true}
                rows={4}
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">
                Send me an email about Carely products
              </Label>
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </main>
      </div>
    </Layout>
  )
}

export default Contact
