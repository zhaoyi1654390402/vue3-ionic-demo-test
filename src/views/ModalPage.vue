<template>
    <ion-page ref="page">
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"/>
                </ion-buttons>
                <ion-title>{{ title }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="ion-padding">
                <ion-button expand="block" @click="open">Open Modal</ion-button>
                <ion-button expand="block" @click="open2">Open Modal2</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, Ref } from 'vue';
import { modalController } from '@ionic/vue';
import ModalComponent from '../components/ModalComponent.vue';
import { IonPage, IonContent, IonButton, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/vue';

export default defineComponent({
    components: {
        IonPage, IonContent, IonButton, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
    },
    setup(_: any) {
        const title = 'Modal';
        const vm = getCurrentInstance();
        const page: Ref<typeof IonPage | null> = ref(null);
        const open = () => {
            modalController
                .create({
                    swipeToClose: true,
                    component: ModalComponent,
                    componentProps: {
                        data: {},
                        propsData: {},
                    },
                })
                .then(m => m.present());
        };
        const open2 = () => {
            modalController
                .create({
                    swipeToClose: true,
                    presentingElement: page.value!.$el,
                    component: ModalComponent,
                    componentProps: {
                        data: {},
                        propsData: {},
                    },
                })
                .then(m => m.present());
        };
        return {
            title,
            page,
            open,
            open2,
        };
    },
});
</script>

<style lang="scss" scoped>

</style>
