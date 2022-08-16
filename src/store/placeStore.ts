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
    changeUiStyle: (data, state) => {
      state.uiStyle = data
    }
  },
  persist: [
    {
      key: 'placeCode',
      storage: sessionStorage,
      paths: ["healthCode", "communityCode", "uiStyle"],
    },
  ],
})


export default placeStore
