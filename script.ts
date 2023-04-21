const counterElement = document.getElementById(
  'end-counter'
) as HTMLParagraphElement
const appMain = document.getElementById('app') as HTMLDivElement
const header = appMain.querySelector<HTMLHeadingElement>('h1')!
const progress = document.getElementById('progress') as HTMLProgressElement
appMain.style.transition = '.2s'

const WORK_START_HR = parseInt(
  prompt('Godzina o której rozpoczynasz robotę', '8') ?? '8'
)
const WORK_END_HR =
  parseInt(prompt('Godzina o której kończysz robotę', '16') ?? '16') - 1

progress.setAttribute('max', (WORK_END_HR - WORK_START_HR).toString())

const setStyle = (scale) => {
  appMain.style.transform = 'scale(' + scale + ')'
}

const timeHandler = (localeTime) => {
  const [hour, minute, second] = localeTime.split(':')
  const currentHour = parseInt(hour)
  const currentMinute = parseInt(minute)
  const currentSecond = parseInt(second)

  const currentTimeIsDuringWorkHours =
    currentHour >= WORK_START_HR && currentHour < WORK_END_HR

  if (currentTimeIsDuringWorkHours) {
    const hoursLeft = WORK_END_HR - currentHour
    const minutesLeft = 60 - currentMinute
    const secondsLeft = 60 - currentSecond

    const percentageOfWorkDay =
      (currentHour - WORK_START_HR) / (WORK_END_HR - WORK_START_HR)

    counterElement.innerText = `${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`
    progress.value = percentageOfWorkDay * 10
    return
  }

  counterElement.innerText = 'Nie ma roboty'
}

timeHandler(new Date().toLocaleTimeString())
setInterval(() => {
  timeHandler(new Date().toLocaleTimeString())
}, 1000)
