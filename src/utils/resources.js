const MIN_PWD = 8;
const MAX_PWD = 15;

const REG_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const REG_PWD_VAR = `^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{${MIN_PWD},${MAX_PWD}}$`;

export { REG_EMAIL, REG_PWD_VAR }