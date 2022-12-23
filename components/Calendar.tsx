import axios from 'axios'
import moment from 'moment'
import { Component } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = momentLocalizer(moment)
var check = moment().format('YYYY-MM')
console.log(check)
export class Cal extends Component<{}, { cal_events: any }> {
  constructor(props: any) {
    super(props)
    this.state = {
      cal_events: []
    }
  }
  componentDidMount() {
    axios
      .get(
        'https://soy-geography-370114.ue.r.appspot.com/schedule/monthlySchedule/' +
          check
      )
      .then((response) => {
        let appointments = response.data

        for (let i = 0; i < appointments.length; i++) {
          console.log(appointments[i].scheduleDate)
          console.log(moment.utc(appointments[i].scheduleDate).toDate())
          appointments[i].start = moment
            .utc(appointments[i].scheduleDate)
            .toDate()
          appointments[i].end = moment
            .utc(appointments[i].scheduleDate)
            .toDate()
        }
        this.setState({
          cal_events: appointments
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  addPost = async (check) => {
    const post = { Calendar: check }
    await axios.post('components/calendar', post, {
      headers: { 'Content-Type': 'application/json' }
    })
  }
  onNavigate = (date, view) => {
    let start, end

    if (view === 'month') {
      start = moment(date).startOf('month').startOf('week')
      console.log(start)
      end = moment(date).endOf('month').endOf('week')
    }

    check = moment(date).format('YYYY-MM')
    console.log(check)
    this.componentDidMount()
    this.monthYear()
    this.addPost(check)

    localStorage.setItem('state', JSON.stringify(check))

    return { check }
  }
  /**
   * monthYear
   */
  public monthYear() {
    return check
  }

  render() {
    const { cal_events } = this.state
    console.log(cal_events)
    console.log(cal_events.start)

    return (
      <div style={{ height: '400px', width: '40%' }}>
        <Calendar
          events={cal_events}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          localizer={localizer}
          views={['month']}
          onNavigate={this.onNavigate}
        />
      </div>
    )
  }
}
