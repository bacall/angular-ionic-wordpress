import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { AlertController } from '@ionic/angular';
import { PostsService } from './services/posts.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [PostsService]
})
export class AppComponent {
  public menus!: any[];
  splash = true;
  splash2 = 0;
  sw!: boolean;

  constructor(private alertCtrl: AlertController, private _postsService: PostsService) {
   
    this.IniatializeApp();
    this.setupListener();
  }
  IniatializeApp() {
    if (this.splash) {
      setTimeout(() => {
        this.splash = false;
        this.splash2 = 1;
      }, 1000);
    }

  }

  async setupListener() {

    App.addListener('backButton', async (data) => {
      console.log('back button click:', JSON.stringify(data));
      if (data.canGoBack) {
        window.history.back();
      } else {
        const alert = await this.alertCtrl.create({
          header: 'Aviso',
          subHeader: 'Salida',
          message: 'Se va ha cerrar la aplicación',
          buttons: [
            {
              text: "Cancelar",
              role: "cancel",
              handler: () => {
                this.sw = false;
              },

            },
            {
              text: "Aceptar",
              handler: () => {
                this.sw = true;
              },
            },
          ],
        });
        alert.present();
        let result: any;
        result =  await alert.onDidDismiss().then((data) => {
          if(data['role'] == 'cancel'){
            this.sw = false;
          }
      });
       
        if (this.sw) {
          App.exitApp();
        }
      }
    });
  }
  ngOnInit(): void {
    this._postsService.getCategories().subscribe(
      {
        next: response => {
          this.menus = Object.values(response);         
          console.log(this.menus);
        },
        error: err => {
          console.log(err.error.msg);
        }
      }
    );

  }
 

}


