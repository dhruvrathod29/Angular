import { Component } from '@angular/core';
import{faGithub} from '@fortawesome/free-brands-svg-icons'
import{faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import{faTwitter} from '@fortawesome/free-brands-svg-icons'
import{faFacebook} from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  Github = faGithub;
  Linkedin = faLinkedinIn;
  Twitter = faTwitter;
  Facebook = faFacebook;
}
