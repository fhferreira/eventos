<template>
    <div>
        <div class="py-2 text-center"><h2>Categorias</h2></div>

        <div class="row">
            <div class="col-12 col-lg-4">
                <app-table-panel
                    :title="'Tipos de Contato (' + pagination.total + ')'"
                    :add-button="{
                        uri: '/contact-types/create',
                        disabled: cannot('create'),
                    }"
                    :per-page="perPage"
                    :filter-text="filterText"
                    @input-filter-text="filterText = $event.target.value"
                    @set-per-page="perPage = $event"
                >
                    <app-table
                        :pagination="pagination"
                        @goto-page="gotoPage($event)"
                        :columns="['#', 'Nome', 'Código', '']"
                    >
                        <tr
                            @click="select(contactType)"
                            v-for="contactType in contactTypes.data.rows"
                            :class="{
                                'cursor-pointer': true,
                                'bg-primary-lighter text-white': isCurrent(
                                    contactType,
                                    selected,
                                ),
                            }"
                        >
                            <td class="align-middle">{{ contactType.id }}</td>

                            <td class="align-middle">{{ contactType.name }}</td>

                            <td class="align-middle">{{ contactType.code }}</td>

                            <td class="align-middle text-right">
                                <router-link
                                    :to="
                                        '/contact-types/' +
                                            contactType.id +
                                            '/update'
                                    "
                                    tag="button"
                                    class="btn btn-danger btn-sm ml-1 pull-right"
                                    :disabled="cannot('create')"
                                    title="Editar Tipo de Contato"
                                >
                                    <i class="fa fa-edit"></i>
                                </router-link>
                            </td>
                        </tr>
                    </app-table>
                </app-table-panel>
            </div>
        </div>
    </div>
</template>

<script>
import crud from './mixins/crud'
import contactTypes from './mixins/contact-types'
import permissions from './mixins/permissions'

const service = { name: 'contactTypes', uri: 'contact-types' }

export default {
    mixins: [crud, contactTypes, permissions],

    data() {
        return {
            service: service,
        }
    },
}
</script>

<style></style>
