<template>
    <div>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ title }}</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="closeModal">
                        <span class="text">关闭</span>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            !!注意modal组件this上没有$store
        </ion-content>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { modalController } from '@ionic/vue';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/vue';

export default defineComponent({
    components: {
        IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
    },
    setup() {
        return {
            title: 'ModalComponent',
            closeModal() {
                modalController.dismiss();
            },
        };
    },
});
</script>

<style lang="scss" scoped>

</style>
