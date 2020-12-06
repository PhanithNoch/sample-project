// happy coding 👻

import { Authentication } from "./home";
class Home extends Authentication {
  constructor() {
    super();
  }

  getInfo() {
    console.log(this.username);
  }
}
let home = new Home();
home.getInfo(); // function
