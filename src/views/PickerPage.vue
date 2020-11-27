<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/home"/>
                </ion-buttons>
                <ion-title>{{ title }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="ion-padding-start ion-padding-end">
                <ion-button expand="block" @click="openPicker(1,5,defaultColumnOptions)">
                    Open Single Column Picker
                </ion-button>
                <ion-button expand="block" @click="openPicker(2, 5, multiColumnOptions)">
                    Open Multiple Column Picker
                </ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
    pickerController,
    IonPage,
    IonContent,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonBackButton,
    IonButtons,
} from '@ionic/vue';

export default defineComponent({
    components: {
        pickerController,
        IonPage,
        IonContent,
        IonButton,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonBackButton,
        IonButtons,
    },
    setup() {
        const title = 'Picker';
        const defaultColumnOptions = [
            [
                'Dog',
                'Cat',
                'Bird',
                'Lizard',
                'Chinchilla',
            ],
        ];
        const multiColumnOptions = [
            [
                'Minified',
                'Responsive',
                'Full Stack',
                'Mobile First',
                'Serverless',
            ],
            [
                'Tomato',
                'Avocado',
                'Onion',
                'Potato',
                'Artichoke',
            ],
        ];

        function getColumns(numColumns: number, numOptions: number, columnOptions: Array<Array<string>>) {
            const columns = [];
            for (let i = 0; i < numColumns; i++) {
                columns.push({
                    name: `col-${i}`,
                    options: getColumnOptions(i, numOptions, columnOptions),
                });
            }
            return columns;
        }

        function getColumnOptions(columnIndex: number, numOptions: number, columnOptions: Array<Array<string>>) {
            const options = [];
            for (let i = 0; i < numOptions; i++) {
                options.push({
                    text: columnOptions[columnIndex][i % numOptions],
                    value: i,
                });
            }
            return options;
        }

        async function openPicker(numColumns = 1, numOptions = 5, columnOptions: Array<Array<string>>) {
            const picker = await pickerController.create({
                columns: getColumns(numColumns, numOptions, columnOptions),
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'Confirm',
                        handler: (value) => {
                            console.log(`Got Value ${value}`);
                        },
                    },
                ],
            });

            await picker.present();
        }

        return {
            title,
            defaultColumnOptions,
            multiColumnOptions,
            openPicker,
        };
    },
});
</script>

<style lang="scss" scoped>

</style>
