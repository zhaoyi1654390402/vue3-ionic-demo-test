<template>
    <ion-page>
        <ion-content :fullscreen="true">
            tab-2
        </ion-content>
    </ion-page>
</template>

<script>
import {
    IonButtons,
    IonBackButton,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
} from '@ionic/vue';
export default {
    name: 'Tab2',
    components: {
        IonButtons,
        IonBackButton,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonPage,
    }
}
</script>