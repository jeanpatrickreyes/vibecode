import { useLanguage } from '@/contexts/language-context';
import { PageLayout } from '@/components/pages/page-layout';
import { useParams, Link } from 'react-router';

// Legal content components
function PrivacyContent() {
	const { language } = useLanguage();

	if (language === 'ar') {
		return (
			<div className="space-y-6">
				<p className="text-gray-600">
					تلتزم Wasf AI بحماية خصوصيتك وبياناتك الشخصية. توضح هذه السياسة أنواع
					المعلومات التي نجمعها وكيفية استخدامها ومشاركتها وحمايتها. نحن نتبع
					اللوائح العالمية مثل اللائحة العامة لحماية البيانات (GDPR) وقانون حماية
					خصوصية المستهلك في كاليفورنيا (CCPA) حيثما ينطبق ذلك، كما نحترم
					القوانين المحلية للبلدان التي نعمل فيها.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">المعلومات التي نجمعها</h2>
				<p className="text-gray-600 mb-4">قد نقوم بجمع أنواع البيانات التالية عند استخدامك لموقعنا أو خدماتنا:</p>
				<ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
					<li>
						<strong>معلومات التعريف الشخصية:</strong> مثل الاسم وعنوان البريد
						الإلكتروني ورقم الهاتف عند إنشاء حساب أو الاشتراك في خدماتنا.
					</li>
					<li>
						<strong>بيانات الاستخدام:</strong> تتضمن معلومات حول كيفية استخدامك
						للموقع، مثل الصفحات التي تزورها، ووقت الزيارة، ونوع الجهاز ونظام
						التشغيل، لتطوير وتحسين تجربتك.
					</li>
					<li>
						<strong>ملفات تعريف الارتباط (Cookies):</strong> نستخدم ملفات تعريف
						الارتباط وتقنيات مماثلة لتخصيص تجربتك، وتحليل الأداء، وتذكر تفضيلاتك.
						يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.
					</li>
					<li>
						<strong>معلومات الدفع:</strong> عند الاشتراك في خطة مدفوعة، قد نجمع
						معلومات الدفع الضرورية لمعالجة المعاملات عبر مزودي خدمة الدفع الآمنين.
					</li>
				</ul>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">كيفية استخدام المعلومات</h2>
				<p className="text-gray-600 mb-4">نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
				<ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
					<li>تقديم الخدمات وتحسينها وصيانتها وتشغيلها.</li>
					<li>إنشاء حسابك وإدارته وتزويدك بالدعم الفني وخدمة العملاء.</li>
					<li>إرسال إشعارات مهمة تتعلق بحسابك أو تحديثات الخدمة.</li>
					<li>تحليل الاتجاهات والاهتمامات لتطوير منتجات وميزات جديدة.</li>
					<li>
						التسويق المخصص (بموافقتك)، مثل إرسال رسائل إلكترونية حول العروض أو
						المقالات أو الميزات الجديدة.
					</li>
					<li>الامتثال للالتزامات القانونية والتنظيمية.</li>
				</ul>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">مشاركة المعلومات</h2>
				<p className="text-gray-600 mb-4">
					لا نبيع معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك فقط في
					الحالات التالية:
				</p>
				<ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
					<li>
						<strong>مقدمو الخدمات:</strong> نعمل مع مزودي خدمات موثوقين (مثل
						شركات معالجة المدفوعات وخدمات الاستضافة) الذين يحتاجون إلى استخدام
						معلوماتك لتقديم الخدمات نيابة عنا مع الالتزام الصارم بسرية البيانات.
					</li>
					<li>
						<strong>الامتثال القانوني:</strong> قد نفصح عن بياناتك إذا طلب منا
						ذلك بموجب القانون، أو لحماية حقوقنا أو حقوق الآخرين.
					</li>
					<li>
						<strong>النقل التجاري:</strong> إذا تم دمج Wasf AI أو الاستحواذ
						عليها، فقد تُنقل البيانات كجزء من تلك المعاملة وفقًا للقانون.
					</li>
				</ul>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">حقوقك وخياراتك</h2>
				<p className="text-gray-600">
					لديك حقوق معينة فيما يتعلق بمعلوماتك الشخصية، بما في ذلك الحق في
					الوصول إلى بياناتك أو تصحيحها أو حذفها. يمكنك أيضًا الاعتراض على
					استخدامنا لبياناتك أو طلب تقييد معالجتها. إذا كنت ترغب في ممارسة أي من
					هذه الحقوق، يرجى التواصل معنا عبر البريد الإلكتروني المذكور أدناه.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">الأمان وحماية البيانات</h2>
				<p className="text-gray-600">
					نستخدم إجراءات وتقنيات أمنية مناسبة لحماية معلوماتك من الوصول أو
					الاستخدام أو الكشف غير المصرح به. ومع ذلك، لا يمكن ضمان الأمان الكامل
					للإنترنت، لذا لا نستطيع تقديم ضمان مطلق.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">الاحتفاظ بالبيانات</h2>
				<p className="text-gray-600">
					نحتفظ بمعلوماتك طالما كان ذلك ضرورياً لتقديم خدماتنا أو الامتثال
					لالتزامات قانونية أو لحل النزاعات. عند عدم الحاجة إليها، نقوم بحذف أو
					إتلاف المعلومات بأمان.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">ملفات تعريف الارتباط</h2>
				<p className="text-gray-600 mb-4">
					تستخدم Wasf AI ملفات تعريف الارتباط وتقنيات مشابهة لتقديم وتحسين
					خدماتنا، مثل حفظ تفضيلاتك وفهم كيفية تفاعلك مع الموقع. يمكنك التحكم
					في ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك. يؤدي تعطيل
					بعض الملفات إلى انخفاض وظائف الموقع.
				</p>
				<ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
					<li><strong>الملفات الضرورية:</strong> ضرورية لتشغيل الموقع ولا يمكن تعطيلها لأنها تتيح ميزات أساسية مثل تسجيل الدخول.</li>
					<li><strong>ملفات الأداء:</strong> تساعدنا في فهم كيفية استخدامك لخدماتنا لتحسين الأداء وتجربة المستخدم.</li>
					<li><strong>ملفات الاستهداف:</strong> تُستخدم لإظهار محتوى أو إعلانات مخصصة بناءً على اهتماماتك.</li>
				</ul>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">نقل البيانات الدولية</h2>
				<p className="text-gray-600">
					قد تتم معالجة بياناتك على خوادم تقع خارج بلد إقامتك. عند نقل البيانات
					عبر الحدود، نلتزم بضمان توفير مستوى كافٍ من الحماية للبيانات وفقاً
					للقوانين المحلية والدولية، بما في ذلك استخدام الاتفاقيات التعاقدية
					القياسية أو آليات الاعتماد الأخرى.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">حقوق المقيمين في السعودية والخليج</h2>
				<p className="text-gray-600">
					إذا كنت مقيماً في المملكة العربية السعودية أو في إحدى دول مجلس
					التعاون الخليجي، فقد يكون لك حقوق إضافية بموجب التشريعات المحلية مثل
					نظام حماية البيانات الشخصية السعودي. يشمل ذلك الحق في معرفة كيف
					يتم جمع بياناتك واستخدامها، والحق في طلب تصحيح البيانات غير
					الدقيقة، والحق في الاعتراض على معالجة بياناتك لأغراض تسويقية.
					لمزيد من المعلومات حول حقوقك وكيفية ممارستها، يرجى التواصل معنا.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">خصوصية الأطفال</h2>
				<p className="text-gray-600">
					لا نقدم خدماتنا للأطفال دون سن 13 عاماً. إذا كنت ولي أمر وتعتقد أن
					طفلك قد زودنا بمعلومات شخصية دون موافقتك، يرجى التواصل معنا حتى نتمكن
					من إزالة هذه المعلومات.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">التغييرات على هذه السياسة</h2>
				<p className="text-gray-600">
					قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتلبية التغييرات في
					القوانين أو خدماتنا. سننشر أي تغييرات على هذه الصفحة وسنحدّث تاريخ
					"آخر تحديث" أعلاه. نوصي بمراجعة هذه السياسة بشكل دوري.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">الاتصال بنا</h2>
				<p className="text-gray-600 mb-4">
					إذا كان لديك أي أسئلة أو طلبات متعلقة بخصوصيتك أو إذا أردت ممارسة
					أي من حقوقك، يمكنك التواصل معنا عبر:
				</p>
				<p className="text-gray-600">
					البريد الإلكتروني: <a href="mailto:support@wasfai.com" className="text-[#1976d2] hover:underline">support@wasfai.com</a><br />
					العنوان البريدي: جدة، منطقة مكة المكرمة، المملكة العربية السعودية
				</p>
			</div>
		);
	}

	// English version
	return (
		<div className="space-y-6">
			<p className="text-gray-600">
				Wasf AI is committed to protecting your privacy and personal data. This policy outlines the types
				of information we collect and how we use, share, and protect it. We follow global regulations such
				as the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA) where
				applicable, and respect local laws in the countries where we operate.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Information We Collect</h2>
			<p className="text-gray-600 mb-4">We may collect the following types of data when you use our website or services:</p>
			<ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
				<li>
					<strong>Personal Identification Information:</strong> such as name, email address, and phone number
					when creating an account or subscribing to our services.
				</li>
				<li>
					<strong>Usage Data:</strong> includes information about how you use the website, such as pages visited,
					visit time, device type and operating system, to develop and improve your experience.
				</li>
				<li>
					<strong>Cookies:</strong> we use cookies and similar technologies to personalize your experience,
					analyze performance, and remember your preferences. You can control cookies through your browser settings.
				</li>
				<li>
					<strong>Payment Information:</strong> when subscribing to a paid plan, we may collect payment information
					necessary to process transactions through secure payment service providers.
				</li>
			</ul>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">How We Use Information</h2>
			<p className="text-gray-600 mb-4">We use the information we collect for the following purposes:</p>
			<ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
				<li>To provide, improve, maintain, and operate our services.</li>
				<li>To create and manage your account and provide technical support and customer service.</li>
				<li>To send important notifications related to your account or service updates.</li>
				<li>To analyze trends and interests to develop new products and features.</li>
				<li>
					Personalized marketing (with your consent), such as sending emails about offers, articles, or new features.
				</li>
				<li>To comply with legal and regulatory obligations.</li>
			</ul>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Sharing Information</h2>
			<p className="text-gray-600 mb-4">
				We do not sell your personal information to third parties. We may share your information only in the following cases:
			</p>
			<ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
				<li>
					<strong>Service Providers:</strong> we work with trusted service providers (such as payment processors
					and hosting services) who need to use your information to provide services on our behalf with strict
					data confidentiality obligations.
				</li>
				<li>
					<strong>Legal Compliance:</strong> we may disclose your data if required by law or to protect our rights
					or the rights of others.
				</li>
				<li>
					<strong>Business Transfer:</strong> if Wasf AI is merged or acquired, data may be transferred as part
					of that transaction in accordance with the law.
				</li>
			</ul>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Your Rights and Choices</h2>
			<p className="text-gray-600">
				You have certain rights regarding your personal information, including the right to access, correct, or delete
				your data. You may also object to our use of your data or request restriction of its processing. If you wish
				to exercise any of these rights, please contact us via the email address below.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Security and Data Protection</h2>
			<p className="text-gray-600">
				We use appropriate security measures and technologies to protect your information from unauthorized access,
				use, or disclosure. However, complete security on the internet cannot be guaranteed, so we cannot provide
				absolute assurance.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Data Retention</h2>
			<p className="text-gray-600">
				We retain your information for as long as necessary to provide our services, comply with legal obligations,
				or resolve disputes. When no longer needed, we securely delete or destroy the information.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Cookies</h2>
			<p className="text-gray-600 mb-4">
				Wasf AI uses cookies and similar technologies to provide and improve our services, such as saving your
				preferences and understanding how you interact with the website. You can control cookies through your browser
				settings. Disabling some cookies may reduce website functionality.
			</p>
			<ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
				<li><strong>Essential Cookies:</strong> necessary for the website to function and cannot be disabled as they enable basic features like login.</li>
				<li><strong>Performance Cookies:</strong> help us understand how you use our services to improve performance and user experience.</li>
				<li><strong>Targeting Cookies:</strong> used to show personalized content or advertisements based on your interests.</li>
			</ul>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">International Data Transfer</h2>
			<p className="text-gray-600">
				Your data may be processed on servers located outside your country of residence. When transferring data across
				borders, we commit to ensuring adequate protection of data in accordance with local and international laws,
				including the use of standard contractual clauses or other certification mechanisms.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Rights of Residents in Saudi Arabia and GCC</h2>
			<p className="text-gray-600">
				If you are a resident of the Kingdom of Saudi Arabia or one of the Gulf Cooperation Council countries,
				you may have additional rights under local legislation such as the Saudi Personal Data Protection Law.
				This includes the right to know how your data is collected and used, the right to request correction of
				inaccurate data, and the right to object to processing of your data for marketing purposes.
				For more information about your rights and how to exercise them, please contact us.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Children's Privacy</h2>
			<p className="text-gray-600">
				We do not provide our services to children under the age of 13. If you are a parent and believe your child
				has provided us with personal information without your consent, please contact us so we can remove this information.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Changes to This Policy</h2>
			<p className="text-gray-600">
				We may update this privacy policy from time to time to reflect changes in laws or our services. We will
				publish any changes on this page and update the "Last updated" date above. We recommend reviewing this policy periodically.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Contact Us</h2>
			<p className="text-gray-600 mb-4">
				If you have any questions or requests related to your privacy or if you wish to exercise any of your rights,
				you can contact us via:
			</p>
			<p className="text-gray-600">
				Email: <a href="mailto:support@wasfai.com" className="text-[#1976d2] hover:underline">support@wasfai.com</a><br />
				Mailing Address: Jeddah, Makkah Region, Kingdom of Saudi Arabia
			</p>
		</div>
	);
}

function TermsContent() {
	const { language } = useLanguage();

	if (language === 'ar') {
		return (
			<div className="space-y-6">
				<p className="text-gray-600">
					تشكل هذه البنود اتفاقاً قانونياً بينك وبين Wasf AI، وتحدد القواعد التي
					تحكم استخدامك لخدماتنا. يرجى قراءة البنود التالية بعناية قبل استخدام
					المنصة أو أي من منتجاتنا أو خدماتنا.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">وصف الخدمة</h2>
				<p className="text-gray-600">
					توفر Wasf AI منصة «برمجة بالأسلوب» لإنشاء مواقع إلكترونية باستخدام
					الذكاء الاصطناعي، بالإضافة إلى أدوات استضافة المواقع، إدارة المحتوى،
					والإحصاءات. قد تتضمن الخدمة ميزات تجريبية أو إضافية يتم توفيرها
					للمستخدمين بشكل تدريجي.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">التغييرات على الخدمة</h2>
				<p className="text-gray-600">
					نحتفظ بالحق في تعديل أو تحديث أو إيقاف جزء من الخدمة أو كلها في أي
					وقت، مع أو بدون إشعار مسبق. تشمل هذه التغييرات تحديث الأسعار، إضافة
					أو إزالة ميزات، أو تحسين الأداء. سنبذل جهداً لإعلامك عبر البريد
					الإلكتروني أو إعلان على الموقع إذا كانت التغييرات جوهرية.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">الرسوم والدفع</h2>
				<p className="text-gray-600">
					بعض خدمات Wasf AI مدفوعة. عندما تقوم بالاشتراك في خطة مدفوعة، فإنك
					توافق على دفع الرسوم المعروضة في صفحة التسعير. يتم تحصيل الرسوم عبر
					بوابات دفع آمنة ويمكن أن تكون شهرية أو سنوية حسب اختيارك. قد يتم
					تعليق حسابك إذا لم يتم السداد في الوقت المحدد.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">حقوق الملكية الفكرية</h2>
				<p className="text-gray-600">
					تحتفظ Wasf AI بجميع الحقوق والملكية والمصلحة في الخدمة، بما في ذلك
					البرمجيات، والواجهات، والشعارات، والعلامات التجارية. يمنحك هذا
					الاتفاق ترخيصاً محدوداً وغير حصري وغير قابل للترخيص من الباطن
					لاستخدام الخدمة فقط بما يتوافق مع هذه البنود. يظل المحتوى الذي تنشئه
					باستخدام الخدمة ملكاً لك، إلا إذا تم إنشاؤه من خلال نماذج تعلم الآلة
					التي قد تستخدم مصادر عامة.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">قيود الاستخدام</h2>
				<p className="text-gray-600 mb-4">بالإضافة إلى ما ورد في الشروط والأحكام، لا يجوز لك القيام بما يلي:</p>
				<ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
					<li>إعادة إنتاج أو توزيع أو بيع أو تأجير أي جزء من الخدمة.</li>
					<li>محاولة عكس هندسة أو تفكيك أو تعديل الشفرة المصدرية للخدمة.</li>
					<li>
						استخدام الخدمة بطريقة قد تتسبب في ضرر أو تعطيل للخدمة أو الشبكة أو
						البنية التحتية.
					</li>
					<li>تقديم معلومات خاطئة أو مضللة عند التسجيل أو استخدام الخدمة.</li>
				</ul>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">إخلاء المسؤولية</h2>
				<p className="text-gray-600">
					يتم توفير الخدمة «كما هي» و«كما هي متاحة» دون أي ضمانات من أي نوع، سواء
					كانت صريحة أو ضمنية، بما في ذلك ضمانات الصلاحية لغرض معين. لا تضمن
					Wasf AI أن الخدمة ستكون خالية من الأخطاء أو الانقطاع أو أن النتائج
					التي يتم الحصول عليها ستكون دقيقة أو موثوقة.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">إنهاء الخدمة</h2>
				<p className="text-gray-600">
					يمكنك إيقاف استخدام الخدمة في أي وقت. كما يحق لـ Wasf AI إنهاء أو تعليق
					حسابك فوراً وبدون إشعار إذا قمت بانتهاك هذه البنود أو في حال وجود
					نشاط غير مشروع أو إساءة استخدام.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">التعديلات على البنود</h2>
				<p className="text-gray-600">
					قد نقوم بتعديل بنود الخدمة هذه من وقت لآخر لتعكس التغييرات في القانون
					أو الخدمة أو سياساتنا. سننشر النسخة المحدثة على هذه الصفحة مع تاريخ
					"آخر تحديث". استمرارك في استخدام الخدمة بعد نشر التعديلات يعني موافقتك
					عليها.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">الاتصال بنا</h2>
				<p className="text-gray-600">
					لأي استفسارات حول هذه البنود أو إذا كنت ترغب في إنهاء حسابك، يرجى
					الاتصال بنا عبر البريد الإلكتروني: <a href="mailto:support@wasfai.com" className="text-[#1976d2] hover:underline">support@wasfai.com</a>.
				</p>
			</div>
		);
	}

	// English version
	return (
		<div className="space-y-6">
			<p className="text-gray-600">
				These terms form a legal agreement between you and Wasf AI, and establish the rules
				governing your use of our services. Please read the following terms carefully before
				using the platform or any of our products or services.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Service Description</h2>
			<p className="text-gray-600">
				Wasf AI provides a "vibe coding" platform for creating websites using artificial intelligence,
				along with website hosting tools, content management, and analytics. The service may include
				experimental or additional features provided to users gradually.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Changes to the Service</h2>
			<p className="text-gray-600">
				We reserve the right to modify, update, or discontinue part or all of the service at any time,
				with or without prior notice. These changes include price updates, adding or removing features,
				or performance improvements. We will make an effort to inform you via email or a site announcement
				if the changes are substantial.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Fees and Payment</h2>
			<p className="text-gray-600">
				Some Wasf AI services are paid. When you subscribe to a paid plan, you agree to pay the fees
				displayed on the pricing page. Fees are collected through secure payment gateways and can be
				monthly or annual based on your choice. Your account may be suspended if payment is not made on time.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Intellectual Property Rights</h2>
			<p className="text-gray-600">
				Wasf AI retains all rights, ownership, and interest in the service, including software, interfaces,
				logos, and trademarks. This agreement grants you a limited, non-exclusive, non-transferable license
				to use the service only in accordance with these terms. Content you create using the service remains
				yours, except if created through machine learning models that may use public sources.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Usage Restrictions</h2>
			<p className="text-gray-600 mb-4">In addition to the terms and conditions, you may not:</p>
			<ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
				<li>Reproduce, distribute, sell, or rent any part of the service.</li>
				<li>Attempt to reverse engineer, disassemble, or modify the service's source code.</li>
				<li>
					Use the service in a way that may cause damage or disruption to the service, network, or infrastructure.
				</li>
				<li>Provide false or misleading information when registering or using the service.</li>
			</ul>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Disclaimer</h2>
			<p className="text-gray-600">
				The service is provided "as is" and "as available" without warranties of any kind, whether express or
				implied, including warranties of fitness for a particular purpose. Wasf AI does not guarantee that the
				service will be error-free or uninterrupted, or that the results obtained will be accurate or reliable.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Service Termination</h2>
			<p className="text-gray-600">
				You may stop using the service at any time. Wasf AI also has the right to terminate or suspend your
				account immediately and without notice if you violate these terms or in case of illegal activity or abuse.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Modifications to Terms</h2>
			<p className="text-gray-600">
				We may modify these terms of service from time to time to reflect changes in the law, service, or our policies.
				We will publish the updated version on this page with the "Last updated" date. Your continued use of the service
				after the modifications are published means you agree to them.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Contact Us</h2>
			<p className="text-gray-600">
				For any inquiries regarding these terms or if you wish to cancel your account, please contact us via email:
				<a href="mailto:support@wasfai.com" className="text-[#1976d2] hover:underline"> support@wasfai.com</a>.
			</p>
		</div>
	);
}

function CookiesContent() {
	const { language } = useLanguage();

	if (language === 'ar') {
		return (
			<div className="space-y-6">
				<p className="text-gray-600">
					تشرح هذه السياسة كيفية استخدام Wasf AI لملفات تعريف الارتباط (الكوكيز)
					والتقنيات المشابهة عند زيارة موقعنا أو استخدام خدماتنا. نحن ملتزمون
					بالشفافية بشأن ما يتم جمعه وكيفية استخدامه، ونلتزم بالقوانين
					واللوائح السارية بما في ذلك اللائحة العامة لحماية البيانات (GDPR).
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">ما هي ملفات تعريف الارتباط؟</h2>
				<p className="text-gray-600">
					ملفات تعريف الارتباط هي ملفات نصية صغيرة يضعها المتصفح على جهازك
					لتخزين معلومات حول تفضيلاتك وأسلوب استخدامك للموقع. تساعدنا
					ملفات تعريف الارتباط في تحسين أدائنا وتوفير تجربة مخصصة وتذكر
					إعداداتك المفضلة.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">أنواع ملفات تعريف الارتباط التي نستخدمها</h2>
				<ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
					<li>
						<strong>ملفات ضرورية تماماً:</strong>
						ضرورية لعمل الموقع ولا يمكن تعطيلها في أنظمتنا. تشمل هذه الملفات
						ميزات مثل تسجيل الدخول والحفاظ على أمان الموقع.
					</li>
					<li>
						<strong>ملفات الأداء:</strong>
						تساعدنا في فهم كيفية تفاعلك مع الموقع، مثل الصفحات التي تزورها
						والأخطاء التي قد تواجهها، بهدف تحسين الأداء وتطوير التجربة.
					</li>
					<li>
						<strong>ملفات الوظائف:</strong>
						تتيح للموقع تذكر اختياراتك السابقة مثل اللغة أو المنطقة، وتوفر
						ميزات محسنة وشخصية.
					</li>
					<li>
						<strong>ملفات الاستهداف أو الإعلانات:</strong>
						قد تُستخدم لتقديم محتوى أو عروض مخصصة بناءً على اهتماماتك. نحن
						لا نستخدم الإعلانات المستهدفة إلا بموافقتك حيثما ينطبق.
					</li>
				</ul>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">كيف نستخدم ملفات تعريف الارتباط</h2>
				<p className="text-gray-600 mb-4">نستخدم ملفات تعريف الارتباط للوظائف التالية:</p>
				<ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
					<li>تذكر معلومات تسجيل الدخول ومنع النشاط الاحتيالي.</li>
					<li>تحليل استخدام الموقع وتحديد الأقسام الأكثر زيارة.</li>
					<li>تخصيص المحتوى والرسائل التسويقية (بموافقتك).</li>
					<li>تقديم دعم فني وحل المشكلات بسرعة.</li>
				</ul>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">إدارة ملفات تعريف الارتباط</h2>
				<p className="text-gray-600">
					يمكنك إدارة أو حذف ملفات تعريف الارتباط من خلال إعدادات المتصفح في
					أي وقت. يتيح لك معظم المتصفحات إمكانية حظر أو حذف ملفات تعريف
					الارتباط، ولكن قد يؤدي ذلك إلى تقليل وظائف بعض أجزاء الموقع.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">ملفات تعريف الارتباط من أطراف ثالثة</h2>
				<p className="text-gray-600">
					قد نستخدم خدمات خارجية (مثل أدوات التحليل) والتي تضع ملفات تعريف
					الارتباط نيابة عنا لتحليل الأداء أو توفير ميزات إضافية. نحن نحرص على
					أن تكون هذه الجهات ملتزمة بالخصوصية وأن تستخدم البيانات فقط للأغراض
					التي نحددها.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">التغييرات على سياسة ملفات تعريف الارتباط</h2>
				<p className="text-gray-600">
					قد نقوم بتحديث هذه السياسة من وقت لآخر لتعكس التغييرات في القوانين
					أو في خدماتنا. سننشر أي تحديثات على هذه الصفحة ونُحدث تاريخ "آخر
					تحديث" أعلاه. نوصي بمراجعة هذه السياسة بشكل دوري.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">الاتصال بنا</h2>
				<p className="text-gray-600">
					إذا كان لديك أي أسئلة أو مخاوف حول استخدامنا لملفات تعريف الارتباط،
					يمكنك التواصل معنا عبر البريد الإلكتروني: <a href="mailto:support@wasfai.com" className="text-[#1976d2] hover:underline">support@wasfai.com</a>
				</p>
			</div>
		);
	}

	// English version
	return (
		<div className="space-y-6">
			<p className="text-gray-600">
				This policy explains how Wasf AI uses cookies and similar technologies when you visit
				our website or use our services. We are committed to transparency about what is collected
				and how it is used, and we comply with applicable laws and regulations including the General
				Data Protection Regulation (GDPR).
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">What Are Cookies?</h2>
			<p className="text-gray-600">
				Cookies are small text files that the browser places on your device to store information about
				your preferences and how you use the website. Cookies help us improve our performance, provide
				a personalized experience, and remember your preferred settings.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Types of Cookies We Use</h2>
			<ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
				<li>
					<strong>Strictly Necessary Cookies:</strong>
					Essential for the website to function and cannot be disabled in our systems. These cookies
					include features such as login and maintaining website security.
				</li>
				<li>
					<strong>Performance Cookies:</strong>
					Help us understand how you interact with the website, such as pages you visit and errors
					you may encounter, with the aim of improving performance and developing the experience.
				</li>
				<li>
					<strong>Functional Cookies:</strong>
					Allow the website to remember your previous choices such as language or region, and provide
					enhanced and personalized features.
				</li>
				<li>
					<strong>Targeting or Advertising Cookies:</strong>
					May be used to deliver personalized content or offers based on your interests. We do not use
					targeted advertising except with your consent where applicable.
				</li>
			</ul>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">How We Use Cookies</h2>
			<p className="text-gray-600 mb-4">We use cookies for the following functions:</p>
			<ul className="list-disc list-inside space-y-2 text-gray-600 mb-6 ml-4">
				<li>Remember login information and prevent fraudulent activity.</li>
				<li>Analyze website usage and identify the most visited sections.</li>
				<li>Personalize content and marketing messages (with your consent).</li>
				<li>Provide technical support and resolve issues quickly.</li>
			</ul>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Managing Cookies</h2>
			<p className="text-gray-600">
				You can manage or delete cookies through your browser settings at any time. Most browsers allow
				you to block or delete cookies, but this may reduce the functionality of some parts of the website.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Third-Party Cookies</h2>
			<p className="text-gray-600">
				We may use external services (such as analytics tools) that place cookies on our behalf to analyze
				performance or provide additional features. We ensure that these entities are committed to privacy
				and use data only for the purposes we specify.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Changes to Cookie Policy</h2>
			<p className="text-gray-600">
				We may update this policy from time to time to reflect changes in laws or our services. We will
				publish any updates on this page and update the "Last updated" date above. We recommend reviewing
				this policy periodically.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Contact Us</h2>
			<p className="text-gray-600">
				If you have any questions or concerns about our use of cookies, you can contact us via email:
				<a href="mailto:support@wasfai.com" className="text-[#1976d2] hover:underline"> support@wasfai.com</a>
			</p>
		</div>
	);
}

function GDPRContent() {
	const { language } = useLanguage();

	if (language === 'ar') {
		return (
			<div className="space-y-6">
				<p className="text-gray-600">
					تلتزم Wasf AI بحماية حقوق مستخدميها فيما يتعلق ببياناتهم الشخصية.
					تمنحك اللائحة العامة لحماية البيانات الأوروبية (GDPR) وغيرها من
					القوانين المحلية حقوقاً واضحة بشأن كيفية جمع ومعالجة معلوماتك
					الشخصية. فيما يلي نظرة عامة على هذه الحقوق وكيفية ممارسة كل منها.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">الحق في الإعلام</h2>
				<p className="text-gray-600">
					يحق لك معرفة كيف نجمع ونستخدم ونشارك معلوماتك الشخصية. نوضح هذه
					التفاصيل في سياسة الخصوصية الخاصة بنا وفي هذا المستند. إذا كان لديك
					أي استفسار إضافي، يمكنك التواصل معنا للحصول على توضيحات.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">حق الوصول</h2>
				<p className="text-gray-600">
					يمكنك طلب نسخة من البيانات الشخصية التي نحتفظ بها عنك. سنوفر لك
					المعلومات ذات الصلة بصيغة مفهومة خلال فترة زمنية معقولة، ما لم يحظر
					القانون ذلك أو يقتضي ذلك حماية حقوق الآخرين.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">حق التصحيح</h2>
				<p className="text-gray-600">
					إذا كانت البيانات التي نحتفظ بها عنك غير دقيقة أو غير مكتملة، يحق
					لك طلب تحديثها أو تصحيحها. سنراجع طلبك ونتخذ الإجراءات اللازمة بأسرع
					وقت ممكن.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">حق الحذف (الحق في النسيان)</h2>
				<p className="text-gray-600">
					يتيح لك هذا الحق طلب حذف بياناتك الشخصية في ظروف معينة، مثل عدم
					الحاجة إلى البيانات للأغراض التي تم جمعها من أجلها أو إذا سحبت
					موافقتك على المعالجة. قد لا نتمكن من حذف بعض البيانات إذا كان
					الاحتفاظ بها مطلوباً بموجب القانون أو لأغراض قانونية مشروعة.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">حق تقييد المعالجة</h2>
				<p className="text-gray-600">
					في بعض الحالات، يمكنك طلب تقييد معالجة بياناتك الشخصية، مثل عند
					الاعتراض على دقة البيانات أو اعتراضك على المعالجة. سنحتفظ بالبيانات
					ولكن لن نقوم بمعالجتها إلا في حالات معينة.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">حق الاعتراض</h2>
				<p className="text-gray-600">
					لديك الحق في الاعتراض على معالجة بياناتك لأسباب تتعلق بوضعك الشخصي،
					خاصة إذا كانت المعالجة تعتمد على المصلحة المشروعة أو لأغراض
					التسويق المباشر. سنوقف المعالجة ما لم نثبت وجود أسباب مشروعة قوية
					للاستمرار.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">حق نقل البيانات</h2>
				<p className="text-gray-600">
					يمكنك طلب نقل بياناتك الشخصية إليك أو إلى جهة أخرى بصيغة رقمية
					شائعة الاستخدام. ينطبق هذا الحق على البيانات التي قدمتها لنا والتي
					تتم معالجتها بوسائل مؤتمتة بناءً على موافقتك أو عقد مبرم بيننا.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">الحقوق المتعلقة باتخاذ القرارات المؤتمتة</h2>
				<p className="text-gray-600">
					نحن لا نتخذ قرارات تعتمد حصرياً على المعالجة المؤتمتة والتي قد يكون
					لها تأثيرات قانونية أو مشابهة عليك. إذا تغير هذا في المستقبل،
					سنبلغك ونوضح لك خياراتك.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">كيفية ممارسة حقوقك</h2>
				<p className="text-gray-600">
					لممارسة أي من الحقوق المذكورة أعلاه، يرجى التواصل معنا عبر البريد
					الإلكتروني أو العنوان الموضحين في قسم الاتصال أدناه. قد نطلب منك
					إثبات هويتك قبل تنفيذ الطلب لحماية خصوصيتك.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">الشكوى لدى هيئة حماية البيانات</h2>
				<p className="text-gray-600">
					إذا كنت تعتقد أننا لم نتعامل مع طلبك بشكل صحيح أو انتهكنا قوانين
					حماية البيانات، يمكنك تقديم شكوى إلى الهيئة المعنية بحماية البيانات
					في بلد إقامتك. نحن نسعى دائماً لحل أي مشكلة ودياً ونوصيك بالتواصل
					معنا أولاً.
				</p>

				<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">الاتصال بنا</h2>
				<p className="text-gray-600 mb-4">
					لأي استفسار أو طلب متعلق بحماية بياناتك، يمكنك التواصل معنا عبر:
				</p>
				<p className="text-gray-600">
					البريد الإلكتروني: <a href="mailto:support@wasfai.com" className="text-[#1976d2] hover:underline">support@wasfai.com</a><br />
					العنوان البريدي: جدة، منطقة مكة المكرمة، المملكة العربية السعودية
				</p>
			</div>
		);
	}

	// English version
	return (
		<div className="space-y-6">
			<p className="text-gray-600">
				Wasf AI is committed to protecting the rights of its users regarding their personal data.
				The European General Data Protection Regulation (GDPR) and other local laws grant you clear
				rights regarding how your personal information is collected and processed. Below is an overview
				of these rights and how to exercise each one.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Right to Be Informed</h2>
			<p className="text-gray-600">
				You have the right to know how we collect, use, and share your personal information. We explain
				these details in our privacy policy and in this document. If you have any additional questions,
				you can contact us for clarification.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Right of Access</h2>
			<p className="text-gray-600">
				You can request a copy of the personal data we hold about you. We will provide you with relevant
				information in an understandable format within a reasonable time, unless prohibited by law or
				required to protect the rights of others.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Right to Rectification</h2>
			<p className="text-gray-600">
				If the data we hold about you is inaccurate or incomplete, you have the right to request its update
				or correction. We will review your request and take the necessary action as soon as possible.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Right to Erasure (Right to Be Forgotten)</h2>
			<p className="text-gray-600">
				This right allows you to request deletion of your personal data in certain circumstances, such as when
				the data is no longer needed for the purposes for which it was collected or if you withdraw your consent
				to processing. We may not be able to delete some data if retention is required by law or for legitimate
				legal purposes.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Right to Restrict Processing</h2>
			<p className="text-gray-600">
				In some cases, you can request restriction of processing of your personal data, such as when objecting
				to data accuracy or objecting to processing. We will retain the data but will not process it except in
				specific cases.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Right to Object</h2>
			<p className="text-gray-600">
				You have the right to object to processing of your data for reasons related to your personal situation,
				especially if processing is based on legitimate interest or for direct marketing purposes. We will stop
				processing unless we demonstrate compelling legitimate grounds for continuing.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Right to Data Portability</h2>
			<p className="text-gray-600">
				You can request transfer of your personal data to you or to another party in a commonly used digital format.
				This right applies to data you provided to us that is processed by automated means based on your consent
				or a contract between us.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Rights Related to Automated Decision-Making</h2>
			<p className="text-gray-600">
				We do not make decisions based solely on automated processing that may have legal or similar effects on you.
				If this changes in the future, we will notify you and explain your options.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">How to Exercise Your Rights</h2>
			<p className="text-gray-600">
				To exercise any of the rights mentioned above, please contact us via email or the address shown in the
				contact section below. We may request proof of identity before processing the request to protect your privacy.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Complaint to Data Protection Authority</h2>
			<p className="text-gray-600">
				If you believe we have not handled your request correctly or violated data protection laws, you can file
				a complaint with the data protection authority in your country of residence. We always seek to resolve any
				issue amicably and recommend contacting us first.
			</p>

			<h2 className="text-xl font-semibold text-[#e53935] mt-8 mb-4">Contact Us</h2>
			<p className="text-gray-600 mb-4">
				For any inquiry or request related to data protection, you can contact us via:
			</p>
			<p className="text-gray-600">
				Email: <a href="mailto:support@wasfai.com" className="text-[#1976d2] hover:underline">support@wasfai.com</a><br />
				Mailing Address: Jeddah, Makkah Region, Kingdom of Saudi Arabia
			</p>
		</div>
	);
}

export default function LegalPage() {
	const { t, language } = useLanguage();
	const { type } = useParams<{ type: 'terms' | 'privacy' | 'cookies' | 'gdpr' }>();

	const legalType = type || 'terms';

	const renderContent = () => {
		switch (legalType) {
			case 'privacy':
				return <PrivacyContent />;
			case 'terms':
				return <TermsContent />;
			case 'cookies':
				return <CookiesContent />;
			case 'gdpr':
				return <GDPRContent />;
			default:
				return <TermsContent />;
		}
	};

	return (
		<PageLayout>
			<div className="max-w-4xl mx-auto">
				<div className="bg-white rounded-lg p-6 sm:p-8 shadow-sm">
					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1976d2] mb-4 text-center">
						{t(`pages.legal.${legalType}.h1`)}
					</h1>
					<p className="text-sm text-gray-500 mb-8 text-center">
						{t(`pages.legal.${legalType}.lastUpdated`)}: 3 يناير 2026
					</p>

					<div className="prose prose-lg max-w-none">
						{renderContent()}
					</div>

					<div className="mt-12 pt-6 border-t border-gray-200">
						<Link to="/" className="text-[#1976d2] hover:underline">
							{language === 'ar' ? 'العودة إلى الصفحة الرئيسية' : 'Return to Homepage'}
						</Link>
					</div>
				</div>
			</div>
		</PageLayout>
	);
}
