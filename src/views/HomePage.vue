<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ title }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list class="home-list">
                <template v-for="item in components" :key="item.name">
                    <ion-item
                        @click="$router.push({name:item.id})">
                        <ion-icon slot="start" name="shapes-outline"></ion-icon>
                        <ion-label>{{ item.name }}</ion-label>
                    </ion-item>
                </template>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonIcon, IonLabel, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonItem,
        IonIcon,
        IonLabel,
        IonList
    },
    setup() {
        return {
            title: 'Ionic Framework',
            components: [
                {name: 'Action Sheet', id: 'action-sheet'},
                {name: 'Alert', id: 'alert'},
                {name: 'Button', id: 'button'},
                {name: 'Checkbox', id: 'checkbox'},
                {name: 'Content', id: 'content'},
                {name: 'Date & Time Picker', id: 'datetime'},
                {name: 'Floating Action Button', id: 'fab'},
                {name: 'Icons', id: 'icons'},
                {name: 'Infinite Scroll', id: 'infinite-scroll'},
                {name: 'Loading', id: 'loading'},
                {name: 'Menu', id: 'menu'},
                {name: 'Modal', id: 'modal'},
                {name: 'Picker', id: 'picker'},
                {name: 'Popover', id: 'popover'},
                {name: 'Tabs', id: 'tabs'},
                {name: 'Toast', id: 'toast'},
                {name: 'Toggle', id: 'toggle'},
            ],
        };
    },
});
</script>


