import ora from 'ora';

const spinner = ora('Searching… Please be patient :)\n').start();

export function logInfo(message) {
  spinner.info(message);
}

export function logStart(message) {
  spinner.start(message);
}

export function logSuccess(message) {
  spinner.succeed(message);
}

export function logFailure(message) {
  spinner.fail(message);
}

export function updateSpinner(message) {
  if (process.stdout.isTTY) {
    spinner.text = message;
  } else {
    spinner.info(message);
  }
}
