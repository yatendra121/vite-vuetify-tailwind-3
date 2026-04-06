<script setup lang="ts">
import chartInfo from '@/assets/images/cards/chart-info.png'
import creditCardSuccess from '@/assets/images/cards/credit-card-success.png'
import creditCardWarning from '@/assets/images/cards/credit-card-warning.png'
import paypalError from '@/assets/images/cards/paypal-error.png'
import walletPrimary from '@/assets/images/cards/wallet-primary.png'

const transactions = [
  { amount: +82.6,    paymentMethod: 'Paypal',      description: 'Send Money',    icon: paypalError,      color: 'error'   },
  { amount: +270.69,  paymentMethod: 'Wallet',       description: "Mac'D",         icon: walletPrimary,    color: 'primary' },
  { amount: +637.91,  paymentMethod: 'Transfer',     description: 'Refund',        icon: chartInfo,        color: 'info'    },
  { amount: -838.71,  paymentMethod: 'Credit Card',  description: 'Ordered Food',  icon: creditCardSuccess,color: 'success' },
  { amount: +203.33,  paymentMethod: 'Wallet',       description: 'Starbucks',     icon: walletPrimary,    color: 'primary' },
  { amount: -92.45,   paymentMethod: 'Mastercard',   description: 'Ordered Food',  icon: creditCardWarning,color: 'warning' }
]

const formatAmount = (amount: number) => {
  const abs = Math.abs(amount).toFixed(2)
  return amount > 0 ? `+$${abs}` : `-$${abs}`
}
</script>

<template>
  <VCard>
    <VCardItem class="pb-0">
      <VCardTitle class="text-body-1 font-weight-bold">Transactions</VCardTitle>
      <VCardSubtitle>Latest activity</VCardSubtitle>
    </VCardItem>

    <VCardText class="pt-3">
      <VList lines="two" class="pa-0">
        <VListItem
          v-for="item in transactions"
          :key="item.paymentMethod + item.description"
          class="px-0 transaction-item"
        >
          <template #prepend>
            <VAvatar
              rounded="lg"
              variant="tonal"
              :color="item.color"
              :image="item.icon"
              class="me-3"
              size="40"
            />
          </template>

          <VListItemTitle class="text-body-2 font-weight-medium">
            {{ item.description }}
          </VListItemTitle>
          <VListItemSubtitle class="text-caption">
            {{ item.paymentMethod }}
          </VListItemSubtitle>

          <template #append>
            <span
              class="text-body-2 font-weight-semibold"
              :class="item.amount > 0 ? 'text-success' : 'text-error'"
            >
              {{ formatAmount(item.amount) }}
            </span>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.transaction-item {
  border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));

  &:last-child {
    border-bottom: none;
  }
}
</style>
