function send(spaceship: { pilot: string; copilot?: string }) {
  //any logic
}

send({ pilot: 'Han Solo', copilot: 'Chewbacca' });

send({ pilot: 'Luke' });

// let input: unknown;
let input: any;

input = 'Test';
input = 1;
input = [];

let text: string;
text = input;

function verification(test) {
  if (test) {
  } else {
    let _check: never;

    let text = _check;
    text = '';
    return _check;
  }
}
