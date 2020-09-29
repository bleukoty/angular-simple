import { Cypher } from '@sir_koty/cypher';
import { Component } from '@angular/core';
import { public_key, private_key, decrypt, encrypt } from './keys';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-test';

  crypt(word : string){
    const encrypted = Cypher.encrypt(word, public_key);
    const decrypted = Cypher.decrypt(encrypted, private_key);
    console.log('encrypted : ', encrypted);
    console.log('decrypted : ', decrypted);
  }
}
