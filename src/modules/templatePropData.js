// 액션 타입 정의
const INSERT = "templatePropData/INSERT";
const ACTIVE_PROP_TAB = "templatePropData/ACTIVE_PROP_TAB";

// 액션 생성 함수
export const insert = templateDatas => ({
  type: INSERT,
  templateDatas
});

export const setActivePropTab = activeTabDatas => ({
  type: ACTIVE_PROP_TAB,
  activeTabDatas
});

// 초기 상태
const initialState = {
  templateDatas: {
    id: "",
    name: "",
    description: "",
    width: 0,
    height: 0
  },
  activeTabDatas: {
    tabActive: false,
    tabIndex: 0
  }
};

// 리듀서
function templatePropData(state = initialState, action) {
  switch (action.type) {
    case INSERT:
      return {
        ...state,
        templateDatas: {
          id: action.templateDatas.id,
          name: action.templateDatas.name,
          description: action.templateDatas.description,
          width: action.templateDatas.width,
          height: action.templateDatas.height
        }
      };
    case ACTIVE_PROP_TAB:
      return {
        ...state,
        activeTabDatas: {
          tabActive: action.activeTabDatas.tabActive,
          tabIndex: action.activeTabDatas.tabIndex
        }
      };
    default:
      return state;
  }
}

export default templatePropData;
