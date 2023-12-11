import { Component, OnInit, inject  } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-arq',
  templateUrl: './arq.page.html',
  styleUrls: ['./arq.page.scss'],
})

export class ArqPage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);


  loading: boolean = false;





  ngOnInit() {
  }

}
