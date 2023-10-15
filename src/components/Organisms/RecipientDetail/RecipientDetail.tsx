import { StyleSheet, View } from 'react-native'
import PaymentDetail from '../../Molecules/PaymentDetail/PaymentDetail'
import Text from '../../Atoms/Text/Text'

const RecipientDetail = () => {
  const paymentDetailData = [
    {
      label: 'Payment Type',
      value: 'DuitNow Transfer',
    },
    {
      label: 'Reference ID',
      value: '908345679',
    },
    {
      label: 'Recipient Reference',
      value: 'Lunch',
    },
    {
      label: 'Other Payment Details',
      value: 'Nasi Lemak',
    },
    {
      label: 'Date & Time',
      value: '22 Aug 2023, 10:00 AM',
    },
  ]
  const customerDataDetail = [
    {
      label: 'Name',
      value: 'Justin Julius',
    },
    {
      label: 'Mobile Number',
      value: '+6011 23243164',
      veriv: true,
    },
    {
      label: 'Amount',
      value: 'RM 16.90',
      veriv: true,
    },
    {
      label: 'Date & Time',
      value: '22 Aug 2023, 10:00 AM',
    },
    {
      label: 'Transfer Type',
      value: 'Pay to Mobile',
    },
  ]
  const recipientDetail = [
    {
      label: 'Recipient Reference',
      value: 'Lunch',
    },
    {
      label: 'Other Payment Details',
      value: 'Nasi Lemak',
    },
  ]
  return (
    <View>
      <Text fontStyle="extra-bold" className="text-primary m-5">
        [FULL WIDTH] REFERENCE LIST
      </Text>
      <View style={styles.paymentDetail}>
        {paymentDetailData.map((detail, idx) => {
          return (
            <PaymentDetail
              key={idx}
              label={detail.label}
              value={detail.value}
              lastIndex={paymentDetailData.length - 1 === idx}
            />
          )
        })}
      </View>
     <Text fontStyle="extra-bold" className="text-primary mt-10 ml-5">
        [FULL WIDTH] REFERENCE LIST
      </Text>
      <View style={styles.customerDetail}>
        {customerDataDetail.map((detail, idx) => {
          return (
            <PaymentDetail
              key={idx}
              label={detail.label}
              value={detail.value}
              veriv={detail?.veriv}
              lastIndex={customerDataDetail.length - 1 === idx}
            />
          )
        })}
      </View>
      <View style={styles.recipientDetail}>
        {recipientDetail.map((detail, idx) => {
          return (
            <PaymentDetail
              key={idx}
              label={detail.label}
              value={detail.value}
            />
          )
        })}
      </View>
    </View>
  )
}
export default RecipientDetail

const styles = StyleSheet.create({
  paymentDetail: {
    rowGap: 16,
    marginTop: 16,
    marginLeft: 20,
    width: 342,
  },
  customerDetail: {
    flexDirection: 'column',
    rowGap: 24,
    backgroundColor: '#FFFFFF',
    paddingTop: 24,
    paddingBottom: 40,
    paddingHorizontal: 16,
    marginLeft: 20,
    marginTop: 40,
    borderRadius: 8,
    width: 310,
  },
  recipientDetail: {
    flexDirection: 'column',
    rowGap: 24,
    backgroundColor: '#FFFFFF',
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 16,
    marginHorizontal: 20,
    marginTop: 40,
    borderRadius: 8,
    width: 310,
  },
})
