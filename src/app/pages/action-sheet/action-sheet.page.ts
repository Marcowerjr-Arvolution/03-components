import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  result: string;
  constructor(private actionSheetController: ActionSheetController) {}

  ngOnInit() {}

  onClick() {
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      backdropDismiss: true,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          cssClass: 'red',
          data: {
            action: 'delete',
          },
          handler: () => {
            console.log('%c⧭', 'color: #ff0000', 'Delete clicked');
          },
        },
        {
          text: 'Share',
          icon: 'share-social-outline',
          data: {
            action: 'share',
          },
          handler: () => {
            console.log('%c⧭', 'color: #33ff00', 'Share clicked');
          },
        },
        {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle-outline',
          data: {
            action: 'play',
          },
          handler: () => {
            console.log('%c⧭', 'color: #ff00ff', 'Play clicked');
          },
        },
        {
          text: 'Favorite',
          icon: 'heart-outline',
          data: {
            action: 'favorite',
          },
          handler: () => {
            console.log('%c⧭', 'color: #ff0080', 'Favorite clicked');
          },
        },
        {
          text: 'Cancel',
          icon: 'close-circle-outline',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
          handler: () => {
            console.log('%c⧭', 'color: #0066ff', 'Cancel clicked');
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }
}
