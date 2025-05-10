<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>哈哈哈哈</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true"> 哈哈哈哈 
    </ion-content>
    <ion-footer>
      <ion-button expand="block" @click="presentAlert">哈哈哈哈</ion-button>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonButton,
  alertController,
} from "@ionic/vue";
const presentAlert = async ():Promise<void> => {
  const alert = await alertController.create({
    header: "哈哈哈哈",
    subHeader: "哈哈哈哈",
    message: "哈哈哈哈",
    buttons: [
      {
        text: "取消",
        role: "cancel",
        handler: () => console.log("取消"),
      },
      {
        text: "确定",
        role: "confirm",
        handler: () => console.log("确定"),
      },
    ],
  });
  await alert.present();
  const { role } = await alert.onWillDismiss();
  console.log(role);
};
</script>
