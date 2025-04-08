// Dữ liệu mẫu cho sản phẩm Icon 100CS

import { 
  MainProduct, 
  ProductFeature, 
  UserGroup, 
  UsageProcess, 
  UsageEnvironment, 
  FAQ, 
  ProductDocument, 
  ResearchProof, 
  RelatedProduct 
} from '../types/product';

// Thông tin cơ bản về sản phẩm
export const iconProductInfo: MainProduct = {
  id: 'icon-100cs',
  name: 'Icon 100CS',
  tagline: 'Long lasting residual insecticide',
  description: 'Icon 100CS là một loại thuốc diệt côn trùng vi nang với hiệu lực tồn dư kéo dài, hiệu quả cao trong kiểm soát muỗi và nhiều loại côn trùng gây hại.',
  primaryImage: '/images/products/icon-100cs-main.jpg',
  category: 'INSECTICIDE',
  status: 'ACTIVE',
  composition: 'Lambda-cyhalothrin 10%',
  chemicalFamily: 'Synthetic Pyrethroid',
  activityGroup: 'Group 3A: Sodium Channel Modulators',
  formulation: 'Capsule Suspension (CS)',
  modeOfAction: 'Tác động lên hệ thần kinh côn trùng gây tê liệt và chết',
};

// Đặc tính nổi bật - Tab Tổng Quan
export const iconFeatures: ProductFeature[] = [
  {
    id: "feature-1",
    title: 'Phổ tác động rộng',
    description: 'Kiểm soát hiệu quả nhiều loại côn trùng như muỗi, ruồi và gián',
    icon: 'broad-spectrum-icon'
  },
  {
    id: "feature-2",
    title: 'Công nghệ ICAP',
    description: 'Công nghệ vi nang bảo vệ hoạt chất khỏi ánh sáng và nhiệt độ',
    icon: 'icap-technology-icon'
  },
  {
    id: "feature-3",
    title: 'Hiệu quả với liều lượng thấp',
    description: 'Hiệu quả cao ngay cả khi sử dụng liều lượng thấp',
    icon: 'low-dose-icon'
  },
  {
    id: "feature-4",
    title: 'Tác động lâu dài',
    description: 'Duy trì hiệu quả kiểm soát trong nhiều tháng',
    icon: 'long-lasting-icon'
  },
  {
    id: "feature-5",
    title: 'Mùi nhẹ, không ố vàng',
    description: 'Không để lại vết ố vàng trên bề mặt, mùi nhẹ sau khi phun',
    icon: 'odorless-icon'
  }
];

// Thông tin về lợi ích cho người dùng - Tab Ứng Dụng
export const iconUserGroups: UserGroup[] = [
  {
    name: 'Chuyên gia diệt côn trùng',
    description: 'Các công ty dịch vụ diệt côn trùng chuyên nghiệp sẽ tìm thấy nhiều lợi ích từ Icon 100CS:',
    benefits: [
      { 
        title: 'Thời gian tác dụng kéo dài', 
        details: 'Giảm số lần phun xịt, tiết kiệm thởi gian và chi phí nhân công' 
      },
      { 
        title: 'Hiệu quả với nhiều loài côn trùng', 
        details: 'Không cần mang theo nhiều loại thuốc khác nhau cho mỗi loại côn trùng' 
      },
      { 
        title: 'Sự hài lòng của khách hàng', 
        details: 'Không mùi khó chịu, không ố vàng, giúp tăng sự hài lòng của khách hàng' 
      },
      { 
        title: 'An toàn khi sử dụng đúng cách', 
        details: 'Đảm bảo an toàn khi tuân thủ hướng dẫn sử dụng' 
      }
    ]
  },
  {
    name: 'Quản lý cơ sở y tế',
    description: 'Các cơ sở y tế như bệnh viện và phòng khám cần giải pháp kiểm soát côn trùng hiệu quả:',
    benefits: [
      { 
        title: 'Kiểm soát côn trùng truyền bệnh', 
        details: 'Hiệu quả cao đối với muỗi và các véc-tơ truyền bệnh khác' 
      },
      { 
        title: 'Tác động lâu dài', 
        details: 'Duy trì môi trường sạch sẽ trong thởi gian dài' 
      },
      { 
        title: 'Không gây ô nhiễm', 
        details: 'Không để lại dư lượng có hại trên các bề mặt tiếp xúc' 
      },
      { 
        title: 'Linh hoạt sử dụng', 
        details: 'Phù hợp với nhiều khu vực khác nhau trong cơ sở y tế' 
      }
    ]
  }
];

// Thông tin về hướng dẫn sử dụng - Tab Ứng Dụng
export const iconUsageProcesses: UsageProcess[] = [
  {
    title: 'Pha chế và chuẩn bị',
    steps: [
      { 
        title: 'Chuẩn bị dụng cụ', 
        instruction: 'Đeo găng tay, kính bảo hộ và khẩu trang trước khi pha chế' 
      },
      { 
        title: 'Pha loãng', 
        instruction: 'Pha 5-10ml Icon 100CS với 1 lít nước sạch, tùy theo mức độ nhiễm côn trùng' 
      },
      { 
        title: 'Khuấy đều', 
        instruction: 'Khuấy đều hỗn hợp trước khi cho vào bình phun' 
      }
    ]
  },
  {
    title: 'Phun xịt hiệu quả',
    steps: [
      { 
        title: 'Chọn thởi điểm', 
        instruction: 'Phun vào buổi sáng sớm hoặc chiều muộn để đạt hiệu quả tốt nhất' 
      },
      { 
        title: 'Kỹ thuật phun', 
        instruction: 'Phun đều lên bề mặt, chú ý các góc khuất, khe nứt nơi côn trùng ẩn nấp' 
      },
      { 
        title: 'Lượng phun', 
        instruction: 'Phun với áp lực vừa phải, ướt đều bề mặt nhưng không chảy nhỏ giọt' 
      }
    ]
  }
];

// Thông tin về môi trường sử dụng - Tab Ứng Dụng
export const iconEnvironments: UsageEnvironment[] = [
  { 
    id: "env-1",
    name: 'Nhà ở dân dụng', 
    description: 'Phù hợp cho các khu vực trong nhà như phòng khách, phòng ngủ, bếp, nhà vệ sinh',
    image: '/images/environments/residential.jpg'
  },
  { 
    id: "env-2",
    name: 'Văn phòng và không gian làm việc', 
    description: 'An toàn cho văn phòng, phòng họp, khu vực tiếp khách khi sử dụng đúng cách',
    image: '/images/environments/office.jpg'
  },
  { 
    id: "env-3",
    name: 'Cơ sở y tế', 
    description: 'Phù hợp cho bệnh viện, phòng khám, phòng chờ và các khu vực chung',
    image: '/images/environments/hospital.jpg'
  },
  { 
    id: "env-4",
    name: 'Nhà hàng và khu vực chế biến thực phẩm', 
    description: 'Có thể sử dụng trong khu vực chế biến thực phẩm khi tuân thủ nghiêm ngặt hướng dẫn',
    image: '/images/environments/restaurant.jpg'
  }
];

// Thông tin FAQ - Tab Ứng Dụng
export const iconFAQs: FAQ[] = [
  { 
    id: "faq-1",
    question: 'Icon 100CS có an toàn cho trẻ em và thú cưng không?', 
    answer: 'Icon 100CS có thể sử dụng an toàn trong môi trường có trẻ em và thú cưng khi tuân thủ hướng dẫn sử dụng. Nên để trẻ em và thú cưng tránh xa khu vực vừa phun xịt cho đến khi khô hoàn toàn. Sau khi phun 2-3 giờ và đã khô, khu vực đã xử lý có thể an toàn cho người và vật nuôi.' 
  },
  { 
    id: "faq-2",
    question: 'Thời gian hiệu lực của Icon 100CS là bao lâu?', 
    answer: 'Icon 100CS có thởi gian hiệu lực kéo dài từ 3-6 tháng tùy thuộc vào điều kiện môi trường và mức độ nhiễm côn trùng. Trong điều kiện bình thường, hiệu quả kiểm soát có thể duy trì đến 4 tháng. Những khu vực có nhiều ánh nắng trực tiếp hoặc thường xuyên vệ sinh bằng nước, hiệu quả có thể giảm xuống còn 2-3 tháng.' 
  },
  { 
    id: "faq-3",
    question: 'Icon 100CS có hiệu quả với những loài côn trùng nào?', 
    answer: 'Icon 100CS có phổ tác động rộng, hiệu quả với nhiều loại côn trùng gây hại. Sản phẩm đặc biệt hiệu quả đối với muỗi (bao gồm muỗi Anopheles truyền bệnh sốt rét), ruồi, gián (đặc biệt là gián Đức Blatella germanica), kiến, bọ chét, và nhiều loại côn trùng bò sát khác. Đối với một số loài có lớp vỏ cứng, có thể cần liều lượng cao hơn.' 
  }
];

// Thông tin nghiên cứu hiệu quả - Tab Tài Liệu
export const iconResearchProofs: ResearchProof[] = [
  { 
    id: "research-1",
    title: 'Thử nghiệm hiệu quả kiểm soát muỗi Anopheles', 
    results: 'Thí nghiệm tại các khu vực có nguy cơ cao sốt rét cho thấy Icon 100CS duy trì tỷ lệ diệt muỗi trên 95% trong 4 tháng sau khi phun, cao hơn đáng kể so với các sản phẩm thông thường (60-70%).',
    link: '/documents/mosquito-control-study.pdf'
  },
  { 
    id: "research-2",
    title: 'Đánh giá độ bền vững trên các bề mặt khác nhau', 
    results: 'Các thí nghiệm chứng minh hiệu quả kéo dài trên nhiều loại bề mặt: 5-6 tháng trên tường xi măng, 4-5 tháng trên gỗ, và 3-4 tháng trên bề mặt sơn hoặc gạch men.',
    link: '/documents/surface-durability-study.pdf'
  },
  { 
    id: "research-3",
    title: 'Khảo sát mức độ chấp nhận của người dùng', 
    results: 'Khảo sát với 500 hộ gia đình cho thấy trên 90% hài lòng với hiệu quả sản phẩm, 85% đánh giá cao về mùi nhẹ, và 95% ghi nhận không có vết ố vàng sau khi sử dụng.',
    link: '/documents/user-acceptance-survey.pdf'
  }
];

// Thông tin tài liệu tham khảo - Tab Tài Liệu
export const iconDocuments: ProductDocument[] = [
  {
    id: "doc-1",
    title: 'Brochure Icon 100CS',
    filename: 'icon-100cs_brochure.pdf',
    fileSize: '1.34 MB',
    url: '/documents/icon-100cs_brochure.pdf'
  },
  {
    id: "doc-2",
    title: 'Nhãn sản phẩm Icon 100CS',
    filename: 'Icon_100CS_label.pdf',
    fileSize: '441.88 KB',
    url: '/documents/Icon_100CS_label.pdf'
  },
  {
    id: "doc-3",
    title: 'Bảng dữ liệu an toàn (MSDS)',
    filename: 'msds_icon_100cs_2018.pdf',
    fileSize: '131.26 KB',
    url: '/documents/msds_icon_100cs_2018.pdf'
  }
];

// Thông tin sản phẩm liên quan
export const relatedProducts: RelatedProduct[] = [
  {
    id: 'actellic-300cs',
    name: 'Actellic 300CS',
    category: 'INSECTICIDE',
    composition: '300 gr/L Methyl pirimiphos CS (Microencapsulated)',
    imageUrl: '/images/actellic-300cs.png',
    status: 'ACTIVE',
    url: '/product/crop-protection/actellic-300cs'
  },
  {
    id: 'advion-cockroach',
    name: 'Advion Cockroach 0,6 RB',
    category: 'INSECTICIDE',
    composition: '0.6% Indoxacarb Ready Bait',
    imageUrl: '/images/advion-cockroach.png',
    status: 'ACTIVE',
    url: '/product/crop-protection/advion-cockroach-06-rb'
  },
  {
    id: 'zyroxfly',
    name: 'ZyroxFly 0,5RB',
    category: 'INSECTICIDE',
    composition: '0.5% Cyantraniliprole Ready Bait',
    imageUrl: '/images/zyroxfly.png',
    status: 'ACTIVE',
    url: '/product/crop-protection/zyroxfly-05rb'
  },
  {
    id: 'optigard-cockroach',
    name: 'Optigard Cockroach Gel Bait',
    category: 'INSECTICIDE',
    composition: '0.1% Emamectin Benzoat Gel Bait',
    imageUrl: '/images/optigard-cockroach.png',
    status: 'ACTIVE',
    url: '/product/crop-protection/optigard-cockroach-gel-bait'
  }
];