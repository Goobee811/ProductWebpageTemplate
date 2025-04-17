// src/data/icon10CSData.ts

import { ProductInfo, FeatureDetail, UserGroup, UsageProcess, UsageEnvironment, FAQ, Document, ResearchProof, ProductDocument } from '../types/product';

export const productInfo: ProductInfo = {
  id: 'icon-10cs-62-5ml',
  name: 'Icon 10CS Gói 62.5ml',
  tagline: 'Bảo vệ gia đình khỏi muỗi và kiến ba khoang suốt 3 tháng',
  status: 'ACTIVE',
  lastUpdated: '2025-04-16',
  category: 'Hóa chất diệt côn trùng',
  purpose: 'Diệt muỗi và kiến ba khoang trong nhà ở',
  authorisationNumber: 'XXXX/BYT-QLDS', // Cần cập nhật số đăng ký thực tế
  packSize: '62.5ml',
  composition: 'Lambda-cyhalothrin 10% w/v (100g/L)',
  chemicalFamily: 'Pyrethroid',
  activityGroup: 'Modulator kênh natri',
  formulation: 'Dạng huyền phù vi nang (CS)',
  modeOfAction: 'Tác động lên hệ thần kinh của côn trùng, gây tê liệt và tử vong',
  description: 'Thuốc diệt muỗi và kiến ba khoang công nghệ vi nang, hiệu quả đến 3 tháng',
  primaryImage: '/images/icon-10cs-62-5ml.jpg',
  imageUrl: '/images/icon-10cs-62-5ml.jpg',
  endDate: '2028-12-31', // Cần cập nhật ngày hết hạn thực tế
  relatedProducts: []
};

export const productFeatures: FeatureDetail[] = [
  {
    id: 'feature-1',
    feature: 'Công nghệ vi nang (CS) tiên tiến',
    details: 'Hoạt chất Lambda-Cyhalothrin 10% được bao bọc trong hàng nghìn viên nang polymer siêu nhỏ, cho phép giải phóng từ từ và kéo dài hiệu quả bảo vệ',
    benefits: 'Bảo vệ hoạt chất khỏi ánh nắng, nhiệt độ và độ ẩm, tăng thời gian hiệu lực',
    title: 'Công nghệ Vi nang Tiên tiến',
    description: 'Vi nang polymer bảo vệ hoạt chất Lambda-Cyhalothrin, giải phóng từ từ theo thời gian, tạo hiệu quả bảo vệ dài lâu đến 3 tháng theo nghiên cứu thực địa',
    icon: 'icon-technology'
  },
  {
    id: 'feature-2',
    feature: 'Hiệu quả tồn lưu dài lâu',
    details: 'Duy trì hiệu quả diệt muỗi và kiến ba khoang trong 2-3 tháng sau một lần phun xịt theo nghiên cứu khoa học',
    benefits: 'Tiết kiệm thời gian và chi phí, giảm số lần phun xịt cần thiết',
    title: 'Bảo Vệ Lâu Dài',
    description: 'Một lần phun xịt bảo vệ gia đình bạn đến 3 tháng, giảm đáng kể tần suất xử lý lặp lại so với các sản phẩm thông thường',
    icon: 'icon-duration'
  },
  {
    id: 'feature-3',
    feature: 'Tác động nhanh chóng',
    details: 'Lambda-cyhalothrin tác động nhanh lên hệ thần kinh côn trùng với LT50 khoảng 20 phút trong điều kiện phòng thí nghiệm',
    benefits: 'Kiểm soát nhanh chóng muỗi và kiến ba khoang, mang lại hiệu quả bảo vệ tức thì',
    title: 'Tác Động Nhanh Chóng',
    description: 'Bắt đầu diệt côn trùng ngay khi tiếp xúc, với thời gian tác động nhanh đã được chứng minh qua nghiên cứu khoa học',
    icon: 'icon-fast-action'
  },
  {
    id: 'feature-4',
    feature: 'An toàn cho gia đình',
    details: 'Được WHO phân loại vào nhóm 3 - "không gây nguy hiểm cấp tính trong điều kiện sử dụng thông thường"',
    benefits: 'An tâm sử dụng trong không gian sống khi tuân thủ hướng dẫn',
    title: 'An Toàn Khi Sử Dụng Đúng Cách',
    description: 'Khi sử dụng theo hướng dẫn, Icon 10CS an toàn cho gia đình, giảm thiểu rủi ro nhờ công nghệ vi nang giúp giảm sự bay hơi và tiếp xúc với hóa chất đậm đặc',
    icon: 'icon-safety'
  },
  {
    id: 'feature-5',
    feature: 'Dễ dàng sử dụng',
    details: 'Gói 62.5ml tiện lợi, pha chế đơn giản với 8 lít nước, đủ xử lý khoảng 200m²',
    benefits: 'Không cần thiết bị chuyên dụng, dễ dàng sử dụng tại nhà',
    title: 'Tiện Lợi Và Dễ Sử Dụng',
    description: 'Gói nhỏ gọn, dễ bảo quản, hướng dẫn pha chế rõ ràng, không cần chuyên môn cao vẫn có thể sử dụng hiệu quả',
    icon: 'icon-easy-use'
  }
];

export const productUserGroups: UserGroup[] = [
  {
    id: 'user-group-1',
    title: 'Gia đình có trẻ em',
    description: 'Gia đình có trẻ em cần môi trường sống an toàn, không có muỗi truyền bệnh và kiến ba khoang gây đau rát',
    benefits: [
      { id: 'benefit-1', title: 'Bảo vệ trẻ em khỏi sốt xuất huyết', details: 'Giảm nguy cơ mắc bệnh truyền qua muỗi như sốt xuất huyết, đặc biệt nguy hiểm cho trẻ em' },
      { id: 'benefit-2', title: 'Phòng tránh vết cắn đau rát', details: 'Bảo vệ làn da nhạy cảm của trẻ khỏi vết cắn đau rát và phản ứng dị ứng do kiến ba khoang' },
      { id: 'benefit-3', title: 'Giấc ngủ ngon không bị quấy rầy', details: 'Không còn tiếng vo ve của muỗi, giúp cả gia đình có giấc ngủ sâu và ngon giấc' },
      { id: 'benefit-4', title: 'Giảm lo lắng cho cha mẹ', details: 'Không cần lo lắng về côn trùng gây hại mỗi ngày, tạo môi trường sống an tâm' }
    ]
  },
  {
    id: 'user-group-2',
    title: 'Gia đình ở khu vực có nguy cơ sốt xuất huyết',
    description: 'Những hộ gia đình sống ở khu vực có tỷ lệ mắc sốt xuất huyết cao hoặc đã từng có ca bệnh',
    benefits: [
      { id: 'benefit-5', title: 'Phòng chống dịch hiệu quả', details: 'Góp phần ngăn chặn sự lây lan của dịch bệnh trong cộng đồng thông qua kiểm soát muỗi truyền bệnh' },
      { id: 'benefit-6', title: 'Bảo vệ dài hạn, không gián đoạn', details: 'Hiệu quả kéo dài đến 3 tháng giúp bảo vệ liên tục, không bỏ sót thời điểm bùng phát dịch' },
      { id: 'benefit-7', title: 'Giảm chi phí y tế', details: 'Phòng ngừa sốt xuất huyết giúp tiết kiệm chi phí điều trị và các chi phí liên quan đến bệnh tật' },
      { id: 'benefit-8', title: 'An tâm trong mùa dịch', details: 'Tạo tâm lý an tâm cho cả gia đình trong những đợt cao điểm của bệnh sốt xuất huyết' }
    ]
  }
];

export const productUsageProcesses: UsageProcess[] = [
  {
    id: 'process-1',
    title: 'Chuẩn bị và pha chế',
    steps: [
      { id: 'step-1-1', title: 'Đeo trang bị bảo hộ', instruction: 'Đeo găng tay, khẩu trang và kính bảo vệ mắt trước khi pha chế thuốc' },
      { id: 'step-1-2', title: 'Chuẩn bị dụng cụ', instruction: 'Chuẩn bị bình phun sạch dung tích 8 lít và đong 4 lít nước sạch vào bình' },
      { id: 'step-1-3', title: 'Pha thuốc đúng tỷ lệ', instruction: 'Mở gói Icon 10CS 62.5ml, đổ toàn bộ vào bình nước, đậy nắp và lắc đều. Sau đó thêm nước đến đủ 8 lít và lắc đều lại' }
    ]
  },
  {
    id: 'process-2',
    title: 'Phun xịt hiệu quả',
    steps: [
      { id: 'step-2-1', title: 'Chuẩn bị khu vực', instruction: 'Di chuyển thực phẩm, đồ dùng cá nhân ra khỏi khu vực phun. Đưa trẻ em và vật nuôi ra ngoài trong thời gian phun' },
      { id: 'step-2-2', title: 'Phun đúng cách', instruction: 'Phun đều lên các bề mặt nơi muỗi và kiến ba khoang thường xuất hiện: góc tường, chân tường, dưới gầm giường, sau tủ, sau rèm cửa, với liều lượng 40ml dung dịch đã pha/m²' },
      { id: 'step-2-3', title: 'Sau khi phun', instruction: 'Để khô tự nhiên trong 2-3 giờ, đảm bảo thông thoáng trước khi cho người và vật nuôi quay lại. Rửa sạch dụng cụ và tay sau khi sử dụng' }
    ]
  }
];

export const productEnvironments: UsageEnvironment[] = [
  {
    id: 'env-1',
    name: 'Phòng ngủ',
    description: 'Bảo vệ không gian nghỉ ngơi khỏi muỗi và kiến ba khoang, tạo giấc ngủ ngon không bị quấy rầy',
    image: '/images/bedroom-environment.jpg'
  },
  {
    id: 'env-2',
    name: 'Phòng khách',
    description: 'Đảm bảo không gian sinh hoạt chung của gia đình không bị côn trùng gây hại quấy nhiễu',
    image: '/images/living-room-environment.jpg'
  },
  {
    id: 'env-3',
    name: 'Hành lang và ban công',
    description: 'Tạo vùng đệm bảo vệ, ngăn chặn côn trùng từ bên ngoài xâm nhập vào nhà',
    image: '/images/corridor-environment.jpg'
  },
  {
    id: 'env-4',
    name: 'Góc khuất trong nhà',
    description: 'Xử lý những nơi tối, ẩm - nơi muỗi và kiến ba khoang thường ẩn nấp và sinh sản',
    image: '/images/hidden-corner-environment.jpg'
  }
];

export const productFAQs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'Sản phẩm có an toàn cho gia đình tôi không?',
    answer: 'Icon 10CS được WHO phân loại vào nhóm 3 - "không gây nguy hiểm cấp tính trong điều kiện sử dụng thông thường". Tuy nhiên, như với bất kỳ sản phẩm diệt côn trùng nào, việc tuân thủ nghiêm ngặt hướng dẫn sử dụng là rất quan trọng. Không phun trực tiếp lên thực phẩm, đồ dùng cá nhân; để trẻ em và vật nuôi tránh xa khu vực xử lý cho đến khi bề mặt khô hoàn toàn; rửa tay kỹ sau khi sử dụng; và bảo quản sản phẩm nơi khô ráo, thoáng mát, xa tầm tay trẻ em.'
  },
  {
    id: 'faq-2',
    question: 'Hiệu quả có thực sự kéo dài đến 3 tháng không?',
    answer: 'Nghiên cứu thực địa đã chứng minh Icon 10CS duy trì hiệu quả diệt muỗi trong 2-3 tháng sau một lần phun xịt. Tuy nhiên, hiệu quả thực tế có thể thay đổi tùy thuộc vào nhiều yếu tố như mức độ nhiễm côn trùng, điều kiện vệ sinh môi trường, loại bề mặt phun xịt và điều kiện thời tiết (đặc biệt là độ ẩm cao). Việc duy trì vệ sinh môi trường và loại bỏ các nguồn nước đọng sẽ giúp tăng cường hiệu quả của sản phẩm.'
  },
  {
    id: 'faq-3',
    question: 'Bao lâu sau khi phun mới có thể vào khu vực đã xử lý?',
    answer: 'Nên đợi bề mặt đã phun khô hoàn toàn, thường là 2-3 giờ, trước khi cho người và vật nuôi quay lại khu vực đã xử lý. Trong thời tiết ẩm ướt, thời gian này có thể kéo dài hơn. Đảm bảo thông gió tốt sau khi phun để hạn chế mùi và tăng tốc độ khô. Nếu có thể, hãy mở cửa sổ và sử dụng quạt để cải thiện lưu thông không khí.'
  },
  {
    id: 'faq-4',
    question: 'Một gói 62.5ml đủ xử lý diện tích bao nhiêu?',
    answer: 'Một gói Icon 10CS 62.5ml pha với 8 lít nước đủ để xử lý khoảng 200m² diện tích bề mặt. Đối với một căn hộ hoặc nhà phố điển hình ở Việt Nam (60-100m² sàn), một gói thường đủ để xử lý các bề mặt chính nơi muỗi và kiến ba khoang thường xuất hiện như tường, góc nhà, chân tường, sau đồ nội thất. Lưu ý, diện tích bề mặt xử lý thường lớn hơn diện tích sàn do tính cả tường và các bề mặt khác.'
  },
  {
    id: 'faq-5',
    question: 'Làm thế nào để phun xịt hiệu quả nhất?',
    answer: 'Để đạt hiệu quả tối ưu, hãy phun đều lên các bề mặt nơi muỗi và kiến ba khoang thường đậu và di chuyển như góc tường, chân tường, dưới gầm giường, sau tủ, khung cửa sổ, sau rèm cửa. Phun với mật độ đều đặn, không quá ướt nhưng đủ để bao phủ bề mặt. Tập trung vào những nơi tối, ẩm - là nơi côn trùng thường ẩn nấp. Thực hiện phun vào thời điểm thích hợp như đầu mùa mưa hoặc khi phát hiện sự xuất hiện của muỗi và kiến ba khoang trong nhà.'
  }
];

export const productResearchProofs: ResearchProof[] = [
  {
    id: 'research-1',
    title: 'Nghiên cứu thực địa về hiệu quả tồn lưu',
    description: 'Nghiên cứu thực địa tại ba vùng sinh thái khác nhau ở Ấn Độ đã chứng minh Icon 10CS duy trì hiệu quả diệt muỗi Anopheles culicifacies trong thời gian từ 2 đến 3 tháng sau khi phun, vượt trội hơn so với các dạng công thức WP thông thường.',
    source: 'K. Raghavendra et al., Journal of Vector Borne Diseases, vol. 48, no. 1, pp. 18–26, 2011',
    link: 'https://www.researchgate.net/publication/50398778_Field_evaluation_of_lambda-cyhalothrin_ICON_10_CS_indoor_residual_spraying_against_Anopheles_culicifacies_in_India'
  },
  {
    id: 'research-2',
    title: 'Nghiên cứu phòng thí nghiệm về tốc độ tác động',
    description: 'Nghiên cứu phòng thí nghiệm đã chứng minh Lambda-cyhalothrin có thời gian tác động với LT50 (thời gian để diệt 50% quần thể côn trùng thử nghiệm) là khoảng 20 phút, nhanh hơn so với nhiều pyrethroid khác trong cùng điều kiện thí nghiệm.',
    source: 'D. J. Pinto et al., Journal of Medical Entomology, vol. 43, no. 3, pp. 377-385, 2006',
    link: 'https://pubmed.ncbi.nlm.nih.gov/17195676/'
  },
  {
    id: 'research-3',
    title: 'Đánh giá của WHO về an toàn và hiệu quả',
    description: 'Lambda-cyhalothrin CS đã được WHO khuyến cáo sử dụng trong các chiến dịch phun tồn lưu trong nhà (IRS) nhằm kiểm soát muỗi truyền bệnh. Sản phẩm Icon 10CS đáp ứng các tiêu chuẩn kỹ thuật và chất lượng nghiêm ngặt do WHO và FAO ban hành (Tiêu chuẩn WHO 463/CS).',
    source: 'World Health Organization, WHO Specifications for Public Health Pesticides: Lambda-cyhalothrin, 2021',
    link: 'https://extranet.who.int/pqweb/sites/default/files/vcp-documents/WHOVC-SP_Lambda-cyhalothrin_2021.pdf'
  }
];

export const productDocuments: ProductDocument[] = [
  {
    id: 'doc-1',
    title: 'Hướng dẫn sử dụng Icon 10CS',
    type: 'PDF',
    link: '/documents/icon-10cs-user-guide.pdf',
    description: 'Hướng dẫn chi tiết về cách pha chế và sử dụng Icon 10CS một cách an toàn, hiệu quả',
    filename: 'icon-10cs-user-guide.pdf',
    fileSize: '1.2 MB',
    url: '/documents/icon-10cs-user-guide.pdf'
  },
  {
    id: 'doc-2',
    title: 'Bảng dữ liệu an toàn (MSDS)',
    type: 'PDF',
    link: '/documents/icon-10cs-msds.pdf',
    description: 'Thông tin an toàn đầy đủ về sản phẩm, bao gồm thành phần, rủi ro sức khỏe và biện pháp khẩn cấp',
    filename: 'icon-10cs-msds.pdf',
    fileSize: '0.8 MB',
    url: '/documents/icon-10cs-msds.pdf'
  },
  {
    id: 'doc-3',
    title: 'Nghiên cứu về hiệu quả Icon 10CS',
    type: 'PDF',
    link: '/documents/icon-10cs-efficacy-study.pdf',
    description: 'Báo cáo tóm tắt các nghiên cứu khoa học về hiệu quả của Icon 10CS trong kiểm soát côn trùng',
    filename: 'icon-10cs-efficacy-study.pdf',
    fileSize: '1.5 MB',
    url: '/documents/icon-10cs-efficacy-study.pdf'
  },
  {
    id: 'doc-4',
    title: 'Hướng dẫn phòng chống muỗi truyền bệnh',
    type: 'PDF',
    link: '/documents/mosquito-prevention-guide.pdf',
    description: 'Tài liệu hướng dẫn tổng hợp về các biện pháp phòng chống muỗi truyền bệnh trong gia đình',
    filename: 'mosquito-prevention-guide.pdf',
    fileSize: '2.0 MB',
    url: '/documents/mosquito-prevention-guide.pdf'
  }
];

// Export mặc định cho tất cả các mẫu dữ liệu
export default {
  productInfo: productInfo,
  features: productFeatures,
  userGroups: productUserGroups,
  usageProcesses: productUsageProcesses,
  environments: productEnvironments,
  faqs: productFAQs,
  researchProofs: productResearchProofs,
  documents: productDocuments
};