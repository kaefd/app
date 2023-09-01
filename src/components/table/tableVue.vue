<script>
export default {
  props: ['headers', 'items', 'search'],
  data() {
    return {
        item : ''
    }
  },
}
</script>
<template>
    <v-table fixed-header height="80vh" class="vw-100" density="compact">
    <thead>
      <tr>
        <th v-for="head, h in headers" :key="h" class="text-left">
          {{ head.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in items"
        :key="item.name"
      >
        <td>{{ item.symbol}}</td>
        <td>{{ item.name}}</td>
        <td>{{ item.price}}</td>
        <td>{{ item.btcPrice}}</td>
        <td>{{ item.change}}</td>
        <td>{{ item.rank}}</td>
        <td>
            <v-img
            :width="20"
            :src="item.iconUrl"
            ></v-img>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
