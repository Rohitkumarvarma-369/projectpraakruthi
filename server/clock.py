from apscheduler.schedulers.blocking import BlockingScheduler
from backend-server import runFilesendMail
sched = BlockingScheduler()

@sched.scheduled_job('interval', minutes=120)
def scheduled_job():
    runFilesendMail()
sched.start()