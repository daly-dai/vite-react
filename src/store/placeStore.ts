import generateStore from '@/hooks/useGenerateStore'

const placeStore = generateStore({
  state: {
    healthCode: {
      name: '',
      colorCode: '1212121212',
      qrCode: '',
      qrCodeUrl: '',
      unitName: '',
      goldWire: '',
      codeDescribe: ''
    },
    nucleicAcid: {
      time: '',
      timeUnit: '',
      colorCss: '',
      newPcrStatusDesc: '',
      newPcrStatus: '',
      pcrDisplayStatus: ''
    },
    keyArea: {
      travelInfo: '',
      desensitizePhone: '',
      phoneSec: ''
    },
    communityCode: '1212121212',
    uiStyle: 'normal',
    placeData: {}
  },
  actions: {
    changeHealthCode: (data, state) => {
      state.healthCode = data
    }
  }
  // persist: {
  //   strategies: [
  //     {
  //       storage: sessionStorage,
  //       paths: ["healthCode", "nucleicAcid", "keyArea", "refreshToken"],
  //     },
  //   ],
  // },
})


export default placeStore
