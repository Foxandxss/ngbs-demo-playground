import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';

@Component({
  selector: 'demo',
  template: `
    <div>Hello World</div>
  `
})
class Demo {
}

bootstrap(Demo);
