<template>
    <ion-page data-pageid="tabs">
        <ion-content>
            <ion-tabs id="tabs">
                <ion-tab-bar slot="bottom">
                    <ion-tab-button tab="tab1" href="/tabs/tab1">
                        <ion-label>Tab 1</ion-label>
                    </ion-tab-button>

                    <ion-tab-button tab="tab2" href="/tabs/tab2">
                        <ion-label>Tab 2</ion-label>
                    </ion-tab-button>

                    <ion-tab-button tab="tab3" href="/tabs/tab3">
                        <ion-label>Tab 3</ion-label>
                    </ion-tab-button>
                </ion-tab-bar>
            </ion-tabs>
        </ion-content>
    </ion-page>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, reactive } from 'vue';
import {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonPage,
    IonContent,
    IonLabel,
} from '@ionic/vue';

export default defineComponent({
    components: {
        IonTabs, IonTabBar, IonTabButton, IonPage, IonContent,
        IonLabel,
    },
    setup() {
        const beforeTabChange = () => {

        };
        const afterTabChange = () => {

        };
        const goToAboutTab = () => {

        };
        return {
            beforeTabChange,
            afterTabChange,
            goToAboutTab,
        };
    },
});
</script>