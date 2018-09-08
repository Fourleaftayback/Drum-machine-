export const BOARD_ON = "BOARD_ON";
export const BOARD_OFF = "BOARD_OFF";
export const VOLUME = "VOLUME";
export const BOARD_A = "BOARD_A";
export const BOARD_B = "BOARD_B";
export const MESSAGE = "MESSAGE";


export const boardOnAc = () => {
  return {
    type: BOARD_ON
  }
}

export const boardOffAc = () => {
  return {
    type: BOARD_OFF
  }
}

export const boardTypeA = () => {
  return {
    type: BOARD_A
  }
}

export const boardTypeB = () => {
  return {
    type: BOARD_B
  }
}

export const setVolume = (e) => {
  return {
    type: VOLUME , payload: e.target.value
  }
}
