<template>
    <div v-if="can('read', 'receptive')">
        <div class="py-2 text-center">
            <h2><i class="fas fa-cogs"></i> Painel de Controle</h2>
        </div>

        <div class="row">
            <div class="col-12">
                <div v-if="eventsHappening().length > 0 || true">
                    <div class="card-deck mb-3 text-center">
                        <div
                            v-for="subEvent in eventsHappening()"
                            class="card mb-4 shadow-sm bg-info"
                        >
                            <div class="card-header bg-info">
                                <h4
                                    class="my-0 mb-3 font-weight-normal text-white"
                                >
                                    {{ subEvent.event.name }}
                                </h4>
                            </div>

                            <div class="card-body">
                                <button
                                    @click="receptive(subEvent)"
                                    class="btn btn-sm btn-block btn-danger bnt-lg"
                                >
                                    <h4 class="mb-1">RECEPCIONAR CONVIDADOS</h4>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="can('read')">
            <div class="col-12">
                <div class="container">
                    <div class="card-deck mb-3 text-center">
                        <div
                            v-for="item in dashboard"
                            class="card mb-4 shadow-sm"
                        >
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">
                                    <span class="d-sm-none mobile-count">{{
                                        item.count
                                    }}</span>
                                    {{ item.name }}
                                </h4>
                            </div>
                            <div class="card-body">
                                <h1
                                    class="card-title pricing-card-title d-none d-sm-block"
                                >
                                    {{ item.count }}
                                </h1>
                                <router-link
                                    :to="item.route"
                                    tag="button"
                                    class="btn btn-sm btn-block btn-primary"
                                >
                                    ver
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="row" v-if="can('read')"> -->
        <!-- <div class="col-12"> -->
        <!-- <app-table-panel -->
        <!-- v-if="subEventsDashBoard.data.links" -->
        <!-- :title=" -->
        <!-- 'Eventos a serem iniciados (' + -->
        <!-- subEventsDashBoard.data.rows.length + -->
        <!-- ')' -->
        <!-- " -->
        <!-- :filter-text="subEventsDashboardFilterText" -->
        <!-- @input-filter-text=" -->
        <!-- subEventsDashboardFilterText = $event.target.value -->
        <!-- " -->
        <!-- &gt; -->
        <!-- <app-table -->
        <!-- :columns="[ -->
        <!-- '#', -->
        <!-- 'Evento', -->
        <!-- 'Sub-evento', -->
        <!-- 'Setor', -->
        <!-- 'Dia', -->
        <!-- 'Horário', -->
        <!-- ]" -->
        <!-- &gt; -->
        <!-- <router-link -->
        <!-- :to="'/receptive/' + eventDashBoard.event.id" -->
        <!-- tag="tr" -->
        <!-- :disabled="cannot('update')" -->
        <!-- v-for="eventDashBoard in subEventsDashBoard.data -->
        <!-- .rows" -->
        <!-- style="cursor: pointer;" -->
        <!-- :key="eventDashBoard.id" -->
        <!-- &gt; -->
        <!-- <td -->
        <!-- @click="selectEventDashBoard(eventDashBoard)" -->
        <!-- class="align-middle" -->
        <!-- &gt; -->
        <!-- {{ eventDashBoard.id }} -->
        <!-- </td> -->
        <!-- <td -->
        <!-- @click="selectEventDashBoard(eventDashBoard)" -->
        <!-- class="align-middle" -->
        <!-- &gt; -->
        <!-- {{ eventDashBoard.event.name }} -->
        <!-- </td> -->
        <!-- <td -->
        <!-- @click="selectEventDashBoard(eventDashBoard)" -->
        <!-- class="align-middle" -->
        <!-- &gt; -->
        <!-- {{ eventDashBoard.name }} -->
        <!-- </td> -->
        <!-- <td -->
        <!-- @click="selectEventDashBoard(eventDashBoard)" -->
        <!-- class="align-middle" -->
        <!-- &gt; -->
        <!-- {{ eventDashBoard.sector.name }} -->
        <!-- </td> -->
        <!-- <td -->
        <!-- @click="selectEventDashBoard(eventDashBoard)" -->
        <!-- class="align-middle" -->
        <!-- &gt; -->
        <!-- {{ eventDashBoard.date }} -->
        <!-- </td> -->
        <!-- <td -->
        <!-- @click="selectEventDashBoard(eventDashBoard)" -->
        <!-- class="align-middle" -->
        <!-- &gt; -->
        <!-- {{ eventDashBoard.time }} -->
        <!-- </td> -->
        <!-- </router-link> -->
        <!-- </app-table> -->
        <!-- </app-table-panel> -->
        <!-- </div> -->
        <!-- </div> -->
    </div>
</template>

<script>
import crud from './mixins/crud'
import permissions from './mixins/permissions'
import { mapState, mapActions } from 'vuex'
import subEventsDashBoard from '../store/modules/subEventsDashBoard'

export default {
    mixins: [crud, subEventsDashBoard, permissions],

    data() {
        return {
            service: { name: 'dashboard', uri: 'dashboard' },
        }
    },

    methods: {
        ...mapActions('dashboard', ['selectEventDashBoard', 'clearForm']),

        receptive(subEvent) {
            this.selectEventDashBoard(subEvent)

            this.$router.push({ path: '/receptive/' + subEvent.event.id })
        },

        eventsHappening() {
            return _.uniqBy(
                _.filter(this.subEventsDashBoard.data.rows, subEvent => {
                    return subEvent.is_happening
                }),
                'event_id',
            )
        },
    },

    computed: {
        ...mapState({
            dashboard: state => state.dashboard.data.rows,

            subEventsDashBoard: state => state.subEventsDashBoard,
        }),

        subEventsDashboardFilterText: {
            get() {
                return this.$store.state['subEventsDashBoard'].data.filter.text
            },

            set(filter) {
                return this.$store.dispatch(
                    'subEventsDashBoard/mutateSetQueryFilterText',
                    filter,
                )
            },
        },
    },

    mounted() {
        this.$store.dispatch('subEventsDashBoard/load')
    },
}
</script>

<style></style>
