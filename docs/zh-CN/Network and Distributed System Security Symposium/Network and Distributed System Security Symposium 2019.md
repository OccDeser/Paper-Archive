# Network and Distributed System Security Symposium 2019
## Keynote: Modern Challenges for Cyber Defense.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#keynote-modern-challenges-for-cyber-defense) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#keynote-modern-challenges-for-cyber-defense)**
### 作者
### 摘要
> 网络防御已经发展到超越仅仅通过物理/电子手段保护信息和基础设施免受损害的程度。随着技术的进步创造了一个敌手有更多机会侵入我们的秩序框架的世界，我们将如何迎接这一挑战？
> 
> 
> 
> 
> 
> 
> 
> 个人简介
> 
> 
> 
> 
> 
> 
> 
> 德博拉·弗林克博士（Dr. Deborah Frincke）是美国国家安全局（NSA）研究司的负责人。可以说，作为美国情报界内最大的内部研究机构，她领导下的研究司在网络安全、数学、物理科学、分析学等领域取得了突破性成果，这些成果是NSA应对当前和未来挑战的重要组成部分。作为研究主任，弗林克博士还担任NSA的科学顾问和创新冠军。在担任研究主任之前，弗林克博士曾在国家密码学学院任职一年，担任过NSA培训主任，她在任期间创办了第一家NSA网络学院并推出了GenCyber计划。在担任该职务之前，弗林克博士是研究副主任。在2011年加入NSA之前，弗林克博士的职业生涯分为三个部分，包括学术界（在爱达荷大学担任正教授）、美国能源部太平洋西北国家实验室的网络安全首席科学家以及成功创办了一家网络安全创业公司。弗林克博士在加州大学戴维斯分校获得了博士和硕士学位。她是电气和电子工程师协会（IEEE）的高级会员，并获得了多个奖项，包括2016年的杰出总统级奖。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/auto-draft-49/](https://www.ndss-symposium.org/ndss-paper/auto-draft-49/)
## SANCTUARY: ARMing TrustZone with User-space Enclaves.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#sanctuary-arming-trustzone-with-user-space-enclaves) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#sanctuary-arming-trustzone-with-user-space-enclaves)**
### 作者
* Ferdinand Brasser, Technische Universität Darmstadt
* David Gens, Technische Universität Darmstadt
* Patrick Jauernig, Technische Universität Darmstadt
* Ahmad-Reza Sadeghi, Technische Universität Darmstadt
* Emmanuel Stapf, Technische Universität Darmstadt
### 摘要
> ARM TrustZone是最广泛部署的安全架构之一，提供可信执行环境（Trusted Execution Environments, TEEs）。然而，由于设备供应商强加的限制性部署政策，它的使用和对应用开发人员和最终用户的潜在利益很大程度上受限。限制性部署是为了防止每个可信应用（Trusted App, TA）增加TEE的攻击面：任何有漏洞或恶意的TA都可能危及系统的安全。因此，部署TA需要设备供应商和应用开发人员之间的相互信任，给双方带来了高昂的成本。供应商通过提供对选定TEE功能的接口来解决这个问题，然而，这些接口不足以安全实现像银行等高级移动服务。学术界和工业界对英特尔的SGX技术的广泛讨论揭示了对TEE不受限制使用的需求，然而到目前为止，移动设备的可比安全架构尚不存在。
> 
> 
> 
> 
> 
> 
> 
> 我们提出了SANCTUARY，这是第一个允许在TrustZone生态系统中无限制使用TEE的安全架构。SANCTUARY允许在TrustZone的正常世界内的强隔离区中执行安全敏感的应用程序，类似于SGX的用户空间保护域。具体而言，我们利用当前ARM SoC参考设计中可用的TrustZone多功能地址空间控制器，实施双向硬件级隔离：(i)将安全敏感应用与受损的正常世界操作系统进行隔离，(ii)系统也受到隔离区中可能有的恶意应用的保护。此外，将安全敏感应用程序从TrustZone的安全世界移动到隔离区中，可以将TEE的攻击面最小化。因此，设备供应商和开发者之间的相互信任关系变得不再必要：可以充分利用TEE的全部潜力。
> 
> 
> 
> 
> 
> 
> 
> 我们通过在HiKey 960开发板上使用微基准测试和双因素身份验证一次性密码生成的用例，对SANCTUARY的实用性和真实世界的好处进行了全面评估。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/sanctuary-arming-trustzone-with-user-space-enclaves/](https://www.ndss-symposium.org/ndss-paper/sanctuary-arming-trustzone-with-user-space-enclaves/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01A-1_Brasser_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01A-1_Brasser_paper.pdf)
## Ginseng: Keeping Secrets in Registers When You Distrust the Operating System.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#ginseng-keeping-secrets-in-registers-when-you-distrust-the-operating-system) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#ginseng-keeping-secrets-in-registers-when-you-distrust-the-operating-system)**
### 作者
* Min Hong Yun, Rice University
* Lin Zhong, Rice University
### 摘要
> 许多移动和嵌入式应用程序持有敏感数据或秘密。它们通常选择信任操作系统(OS)并将其秘密保存在内存中。最近的事件表明，内存并不一定安全，因为由于操作系统规模和复杂性所导致的不可避免的漏洞可能导致操作系统受到损害。现有的解决方案通过在Secure world中运行应用逻辑，即由ARM TrustZone技术支持的可信执行环境(TEE)，来保护敏感数据免受不受信任的操作系统的威胁。由于应用逻辑增加了TEE的攻击面，这些解决方案不适用于第三方应用程序。
> 
> 
> 
> 
> 
> 
> 
> 本研究旨在支持第三方应用程序，而无需增加攻击面、大量开发工作或性能开销。我们的解决方案名为Ginseng，通过在编译时将敏感数据分配到寄存器中，并在运行时在进入内存之前对其进行加密，以应对函数调用、异常或物理寄存器短缺的情况。Ginseng不在TEE中运行任何应用逻辑，仅需要对现有应用进行轻微标记。我们基于LLVM、ARM Trusted Firmware (ATF)和HiKey开发板进行了原型实现，并通过微基准测试和保持真实世界中秘密的应用程序进行了评估。
> 
> 
> 
> 
> 
> 
> 
> 我们的评估结果显示，Ginseng可以以低工程成本高效地保护敏感数据。例如，启用Ginseng的Web服务器Nginx可以在没有可测量开销的情况下保护TLS主密钥。我们发现Ginseng的开销与寄存器中的敏感数据需要加密和解密的频率成比例，即在函数调用或寄存器压力较高时溢出和恢复敏感数据。因此，Ginseng最适合保护像密码或社会安全号码等小型敏感数据。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/ginseng-keeping-secrets-in-registers-when-you-distrust-the-operating-system/](https://www.ndss-symposium.org/ndss-paper/ginseng-keeping-secrets-in-registers-when-you-distrust-the-operating-system/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01A-2_Yun_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01A-2_Yun_paper.pdf)
## DroidCap: OS Support for Capability-based Permissions in Android.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#droidcap-os-support-for-capability-based-permissions-in-android) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#droidcap-os-support-for-capability-based-permissions-in-android)**
### 作者
* Abdallah Dawoud, CISPA Helmholtz Center i.G.
* Sven Bugiel, CISPA Helmholtz Center i.G.
### 摘要
> 我们介绍了DroidCap，它是Android中央Binder IPC机制的改造，旨在改变权限在系统中的表示和管理方式。在DroidCap中，权限是每个进程的Binder对象能力。DroidCap的设计消除了Android基于UID的环境权限，并允许在进程之间委托能力，以高效地创建最低特权保护域。通过DroidCap，我们展示了作为底层访问控制模型的对象能力如何自然地与Android的权限模型和应用程序管理兼容。因此，我们的Binder能力为应用程序开发人员提供了一条新的路径，逐步采用应用程序分区化。我们在文献中选择了两个常见的示例来展示：权限分离的广告库和最低特权的应用程序组件。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/droidcap-os-support-for-capability-based-permissions-in-android/](https://www.ndss-symposium.org/ndss-paper/droidcap-os-support-for-capability-based-permissions-in-android/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01A-3_Dawoud_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01A-3_Dawoud_paper.pdf)
## Time Does Not Heal All Wounds: A Longitudinal Analysis of Security-Mechanism Support in Mobile Browsers.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#time-does-not-heal-all-wounds-a-longitudinal-analysis-of-security-mechanism-support-in-mobile-browsers) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#time-does-not-heal-all-wounds-a-longitudinal-analysis-of-security-mechanism-support-in-mobile-browsers)**
### 作者
* Meng Luo, Stony Brook University
* Pierre Laperdrix, Stony Brook University
* Nima Honarmand, Stony Brook University
* Nick Nikiforakis, Stony Brook University
### 摘要
> 最近的市场份额统计显示，移动设备流量已经超过传统桌面电脑。用户在智能手机和平板电脑上花费越来越多的时间，而网络继续成为向用户提供新应用的首选平台。在这种环境下，网络应用需要利用所有可用的工具来保护移动用户免受流行的网络应用攻击。本文中，我们首次研究了流行的网络应用安全机制（如内容安全策略、HTTP 严格传输安全和引荐政策）在移动浏览器中的支持情况。我们设计了395个单独的测试，涵盖了8种不同的安全机制，并利用这些测试来评估安卓上20个最受欢迎的浏览器系列中的安全机制支持情况。此外，通过收集和测试过去七年的浏览器版本，我们对351个独特的浏览器版本进行了评估，针对上述测试收集了超过138K个测试结果。
> 
> 
> 
> 
> 
> 
> 
> 通过分析这些结果，我们发现，尽管移动浏览器随着时间的推移通常支持更多的安全机制，但并非所有浏览器发展方向都一样。我们发现一些下载量众多的流行浏览器并不支持大多数测试的机制，并确定了大多数浏览器采用的设计选择，使得数百个热门网站容易受到点击劫持攻击。此外，我们还发现了流行网站开始使用安全机制和移动浏览器真正实施该机制之间存在多年的漏洞窗口。我们的研究结果强调了对移动网络浏览器进行持续安全测试的必要性，以及服务器端框架需要根据每个浏览器可以保证的安全级别进行调整的需求。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/time-does-not-heal-all-wounds-a-longitudinal-analysis-of-security-mechanism-support-in-mobile-browsers/](https://www.ndss-symposium.org/ndss-paper/time-does-not-heal-all-wounds-a-longitudinal-analysis-of-security-mechanism-support-in-mobile-browsers/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01A-4_Luo_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01A-4_Luo_paper.pdf)
## Geo-locating Drivers: A Study of Sensitive Data Leakage in Ride-Hailing Services.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#geo-locating-drivers-a-study-of-sensitive-data-leakage-in-ride-hailing-services) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#geo-locating-drivers-a-study-of-sensitive-data-leakage-in-ride-hailing-services)**
### 作者
* Qingchuan Zhao, The Ohio State University
* Chaoshun Zuo, The Ohio State University
* Giancarlo Pellegrino, CISPA
### 摘要
> 越来越多的基于移动应用的打车服务已成为一种非常受欢迎的交通方式。由于业务逻辑的处理，这些服务还包含丰富的涉及隐私的信息，如GPS位置、车牌、驾照和付款数据。与许多只有一种类型用户的移动应用不同，打车服务面临两种类型的用户：乘客和司机。虽然大多数工作都集中在乘客隐私的保护上，但不幸的是，我们发现对司机的保护工作几乎没有。为了提高对司机隐私问题的认识，本文首次对打车服务中司机敏感数据泄露进行了系统研究。具体而言，我们选择了20个热门的打车应用，包括Uber和Lyft，并重点研究了一个特定功能，即附近车辆功能。令人惊讶的是，我们的实验结果显示，对于我们研究的所有打车服务来说，都存在对司机的大规模数据收集可能。特别是，攻击者可以高精度地确定司机的隐私敏感信息，包括最常访问的地址（如家庭地址）和日常驾驶行为。同时，攻击者还可以推断出关于打车服务的商业运营和表现的敏感信息，如乘车次数、车辆利用率和在某个地区的活动情况。除了介绍这些攻击，我们还为服务提供商提供了保护司机敏感信息的对策。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/geo-locating-drivers-a-study-of-sensitive-data-leakage-in-ride-hailing-services/](https://www.ndss-symposium.org/ndss-paper/geo-locating-drivers-a-study-of-sensitive-data-leakage-in-ride-hailing-services/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01A-5_Zhao_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01A-5_Zhao_paper.pdf)
## Please Forget Where I Was Last Summer: The Privacy Risks of Public Location (Meta)Data.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#please-forget-where-i-was-last-summer-the-privacy-risks-of-public-location-meta-data) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#please-forget-where-i-was-last-summer-the-privacy-risks-of-public-location-meta-data)**
### 作者
* Kostas Drakonakis, FORTH
### 摘要
> 地理位置数据的暴露给用户构成了重大的隐私风险，因为它可能导致去匿名化、敏感信息的推断，甚至是身体威胁。在本文中，我们介绍了一种名为LPAuditor的工具，它对公共位置元数据引起的隐私损失进行了全面评估。首先，我们展示了我们的系统如何通过识别用户的实际邮政地址来以前所未有的精确度确定用户的关键位置。我们对Twitter数据的评估突出了我们的技术的有效性，对于家庭而言，我们的技术性能优于先前方法的18.9%至91.6%，对于工作场所而言，我们的技术性能优于先前方法的8.7%至21.8%。接下来，我们提出了一种自动化的隐私信息推理的新型探索，揭示了用户曾经访问过的“敏感”位置（涉及健康、宗教和性/夜生活）。我们发现，地理位置元数据可以为推文提供额外的上下文信息，从而导致暴露可能与用户意图不符的私密信息。
> 
> 
> 
> 
> 
> 
> 
> 我们进一步探讨了用户行为与信息暴露之间的不匹配，发现官方Twitter应用的旧版本在元数据中包括精确的GPS坐标，这种暴露的程度更增加了用户对暴露精确位置数据的隐私保护意识。当用户可以明确选择发布哪些位置数据时，带有GPS坐标的推文数量减少了94.6%。作为让用户更多控制其数据的当前努力的一部分，LPAuditor可以被主要服务采用，并作为审计工具提供，向用户提供关于他们（间接）通过位置元数据暴露的敏感信息的信息。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/please-forget-where-i-was-last-summer-the-privacy-risks-of-public-location-metadata/](https://www.ndss-symposium.org/ndss-paper/please-forget-where-i-was-last-summer-the-privacy-risks-of-public-location-metadata/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01A-6_Drakonakis_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01A-6_Drakonakis_paper.pdf)
## Don't Trust The Locals: Investigating the Prevalence of Persistent Client-Side Cross-Site Scripting in the Wild.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#dont-trust-the-locals-investigating-the-prevalence-of-persistent-client-side-cross-site-scripting-in-the-wild) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#dont-trust-the-locals-investigating-the-prevalence-of-persistent-client-side-cross-site-scripting-in-the-wild)**
### 作者
* Marius Steffens, CISPA Helmholtz Center for Information Security
* Christian Rossow, CISPA Helmholtz Center for Information Security
* Martin Johns, TU Braunschweig
* Ben Stock, CISPA Helmholtz Center for Information Security
### 摘要
> Web已经变得高度互动，并成为现代生活的重要驱动力，它实现了信息检索、社交交流和在线购物。从安全的角度来看，跨站脚本攻击(XSS)是针对Web客户端最恶意的攻击之一。研究长期以来一直专注于三类XSS：反射型、持久型和基于DOM的XSS。在本文中，我们认为我们的社区必须考虑至少四个重要的XSS类别，并首次系统研究了由于客户端存储的不安全使用引起的持久性客户端XSS威胁。尽管这一类别的存在已经被认可，尤其是由OWASP等非学术界社区，但之前的研究要么仅发现这些缺陷是其他分析的副作用，要么仅专注于有限的应用进行分析。因此，社区对于持久性客户端XSS在实际环境中的普遍存在程度缺乏深入了解。
> 
> 
> 
> 
> 
> 
> 
> 为了弥补这一研究空白，我们利用污点跟踪来识别来自客户端持久性存储(Web存储、cookies)到危险汇集点(HTML、JavaScript和script.src)的可疑流。我们讨论了两种攻击者模型，它们能够向存储注入恶意荷载，即一个能够“暂时”劫持HTTP通信的网络攻击者(例如，在公共无线网络中)，以及通过汇集到存储或现有的反射型XSS缺陷使其荷载持久化的Web攻击者。基于我们有意识的污点浏览器和这些模型，我们研究了Alexa排名前5000个域中持久性客户端XSS的普遍性。我们发现超过8%的域存在从持久性存储到危险汇集点的未经过滤的数据流，这展示了开发人员对存储内容完整性的固有信任。更糟糕的是，如果我们只考虑使用源于存储的数据的网站，有21%的网站存在漏洞。对于那些存在从存储到汇集点的漏洞流的网站，我们发现至少70%可以被我们的攻击者模型直接利用。最后，调查源于存储的漏洞流使我们能够将它们归类为四个不相交的类别，并提出相应的缓解措施。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/dont-trust-the-locals-investigating-the-prevalence-of-persistent-client-side-cross-site-scripting-in-the-wild/](https://www.ndss-symposium.org/ndss-paper/dont-trust-the-locals-investigating-the-prevalence-of-persistent-client-side-cross-site-scripting-in-the-wild/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01B-1_Steffens_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01B-1_Steffens_paper.pdf)
## Master of Web Puppets: Abusing Web Browsers for Persistent and Stealthy Computation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#master-of-web-puppets-abusing-web-browsers-for-persistent-and-stealthy-computation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#master-of-web-puppets-abusing-web-browsers-for-persistent-and-stealthy-computation)**
### 作者
* Panagiotis Papadopoulos, FORTH-ICS
### 摘要
> 网络应用程序的普及使得现代浏览器本质上成为了小型而强大的操作系统。访问网站时，用户设备会自动运行受信任的脚本代码，其执行范围仅限于浏览器内，以防止对用户系统的任何干扰。然而，最近的JavaScript API提供了高级功能，不仅可以实现功能丰富的Web应用程序，还允许攻击者执行恶意操作，尽管JavaScript代码执行的范围受到限制。在本文中，我们通过介绍MarioNet来展示现代浏览器API为攻击者提供的强大功能：这是一个框架，允许远程恶意实体控制访问者的浏览器，并滥用其资源进行不需要的计算或有害操作，例如加密货币挖掘、密码破解和分布式拒绝服务攻击。MarioNet仅依赖已有的HTML5 API，而无需安装任何额外软件。与之前基于浏览器的僵尸网络相比，MarioNet具有持久性和隐秘性特征，使恶意计算可以在用户关闭最初访问的恶意网站的窗口或标签后继续在浏览器后台进行。我们介绍了我们的原型系统的设计、实现和评估，该系统与所有主要浏览器兼容，并讨论了对抗此类持久性浏览器内攻击威胁的潜在防御策略。我们的主要目标是提高对这一新型攻击的意识，并向未来浏览器API的设计提供信息，以提供更安全的客户端环境用于Web应用程序。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/master-of-web-puppets-abusing-web-browsers-for-persistent-and-stealthy-computation/](https://www.ndss-symposium.org/ndss-paper/master-of-web-puppets-abusing-web-browsers-for-persistent-and-stealthy-computation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01B-2_Papadopoulos_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01B-2_Papadopoulos_paper.pdf)
## Tranco: A Research-Oriented Top Sites Ranking Hardened Against Manipulation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#tranco-a-research-oriented-top-sites-ranking-hardened-against-manipulation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#tranco-a-research-oriented-top-sites-ranking-hardened-against-manipulation)**
### 作者
* Victor Le Pochat, imec-DistriNet
### 摘要
> 为了评估网络中安全和隐私实践的普遍性，研究人员依赖于像Alexa列表这样的网站流行度排名。尽管这些排名的有效性和代表性很少受到质疑，但我们的研究结果表明相反的情况：我们展示了四个主要排名的内在属性（相似性、稳定性、代表性、响应性和良性）如何影响它们的组成，因此可能扭曲了研究中得出的结论。此外，我们发现对于对手来说，操纵这些列表的组成是微不足道的。我们是第一个通过仅一个HTTP请求便能实证验证这些列表中域名的排名容易被更改，对于Alexa而言。这使得对手能够大规模操纵排名，并将恶意域名插入白名单，或者扭曲研究结果以达到其意愿。为了克服这些排名的局限性，我们提出了改进方法，以减少列表组成中的波动，并保证更好的防御措施来防止操纵。为了让研究界能够使用可靠和可重复的排名，我们提供了Tranco，这是一个改进的排名，我们通过一个在线服务提供，网址为https://tranco-list.eu。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/tranco-a-research-oriented-top-sites-ranking-hardened-against-manipulation/](https://www.ndss-symposium.org/ndss-paper/tranco-a-research-oriented-top-sites-ranking-hardened-against-manipulation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01B-3_LePochat_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01B-3_LePochat_paper.pdf)
## JavaScript Template Attacks: Automatically Inferring Host Information for Targeted Exploits.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#javascript-template-attacks-automatically-inferring-host-information-for-targeted-exploits) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#javascript-template-attacks-automatically-inferring-host-information-for-targeted-exploits)**
### 作者
* Michael Schwarz, Graz University of Technology
* Florian Lackner, Graz University of Technology
* Daniel Gruss, Graz University of Technology
### 摘要
> 今天，越来越多的网络浏览器和扩展提供匿名功能以隐藏用户的详细信息。这些功能主要用于避免网站和广告的追踪，但也被犯罪分子用来防止身份被揭示。因此，不仅追踪公司，执法机构也有兴趣发现破坏这些匿名功能的漏洞。例如，为了利用零日漏洞进行有针对性的攻击，尽可能获得目标的更多信息是至关重要的。一次失败的攻击尝试，例如因为错误地猜测操作系统，可能会导致零日漏洞被暴露，有效地对攻击者造成损失。对于侧信道攻击，了解受害者的硬件配置的特定方面，例如指令集架构，也非常重要。此外，对特定环境属性（如操作系统）的了解，可以更好地为网络钓鱼攻击制定更真实的对话。在本文中，我们提出了一种完全自动化的方法，可以找到由于环境而引起的浏览器引擎中的微小差异。此外，我们还提出了两种针对浏览器引擎的新的侧信道攻击，用于检测指令集架构和使用的内存分配器。利用这些差异，我们可以推断出关于系统的信息，包括软件和硬件方面。因此，我们不仅可以简化指纹的创建，而且可以获得更精确的目标攻击图景。我们的方法可以自动化繁琐的手动搜索这些差异。我们收集JavaScript引擎可用的所有数据，并从这些属性中构建模板。如果模板的某个属性在一个系统上保持不变，在另一个系统上有所不同，我们就找到了一个依赖环境的属性。我们在Firefox、Chrome、Edge和移动Tor中发现了依赖环境的属性，从而可以揭示底层操作系统、CPU架构、使用的隐私增强插件以及精确的浏览器版本。我们强调，我们的方法应该在浏览器和隐私扩展的开发中使用，以自动发现实现中的漏洞。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/javascript-template-attacks-automatically-inferring-host-information-for-targeted-exploits/](https://www.ndss-symposium.org/ndss-paper/javascript-template-attacks-automatically-inferring-host-information-for-targeted-exploits/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01B-4_Schwarz_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01B-4_Schwarz_paper.pdf)
## Latex Gloves: Protecting Browser Extensions from Probing and Revelation Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#latex-gloves-protecting-browser-extensions-from-probing-and-revelation-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#latex-gloves-protecting-browser-extensions-from-probing-and-revelation-attacks)**
### 作者
* Alexander Sjösten, Chalmers University of Technology
* Steven Van Acker, Chalmers University of Technology
* Pablo Picazo-Sanchez, Chalmers University of Technology
* Andrei Sabelfeld, Chalmers University of Technology
### 摘要
> 浏览器扩展为当今网络用户提供丰富的体验。由于具有提升的权限，扩展被赋予了超越网页的控制权。因此，网页通常会尝试检测已安装的扩展，有时是为了良性采纳其行为，但有时也可能涉及侵犯隐私的用户指纹识别。研究人员已研究了一类攻击，通过探测包含公共扩展ID的URL中的Web可访问资源（WARs）来实现扩展的检测。鉴于WARs存在的隐私风险，Firefox最近采取了对浏览器扩展的ID进行随机化的措施，促使Chrome团队计划采取相同的路径。然而，随机化的ID并没有缓解问题，相反却加剧了扩展检测问题，使攻击者能够将随机化的ID作为用户的可靠指纹。我们研究了一类扩展揭示攻击，在这种攻击中，扩展通过在网页上注入代码来揭示自己的存在。我们演示了如何通过揭示和探测的组合，尽管存在随机化方案，仍能够独特地识别90%的注入内容扩展。我们进行了一系列大规模研究，以估计这两类攻击的可能影响。作为对策，我们提出了一种基于浏览器的机制，可以控制哪些扩展程序在哪些网页上加载，并提供了一个概念验证实现，可以阻止这两类攻击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/latex-gloves-protecting-browser-extensions-from-probing-and-revelation-attacks/](https://www.ndss-symposium.org/ndss-paper/latex-gloves-protecting-browser-extensions-from-probing-and-revelation-attacks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01B-5_Sjosten_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01B-5_Sjosten_paper.pdf)
## maTLS: How to Make TLS middlebox-aware?
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#matls-how-to-make-tls-middlebox-aware) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#matls-how-to-make-tls-middlebox-aware)**
### 作者
* Hyunwoo Lee, Seoul National University
* Zach Smith, University of Luxembourg
* Junghwan Lim, Seoul National University
* Gyeongjae Choi, Seoul National University
* Selin Chun, Seoul National University
* Taejoong Chung, Rochester Institute of Technology
* Ted "Taekyoung" Kwon, Seoul National University
### 摘要
> 中间盒（MB）广泛部署以增强网络安全和性能。然而，随着TLS通信变得越来越普遍，TLS的端到端通道模型削弱了中间盒的效力。现有的解决方案，如截获TLS会话的`拆分TLS'，往往通过安装自定义根证书或共享私钥引入了重大安全风险。许多研究已经证实了将TLS与中间盒结合使用的漏洞，包括证书验证失败、不受欢迎的内容修改和使用过时的密码套件。为了解决上述问题，我们引入了一种中间盒感知的TLS协议，称为maTLS，允许中间盒以可见和可追溯的方式参与TLS。现在，每个参与的中间盒通过与两个端点合作将一个会话分为两个段，并具有自己的安全参数。然而，由于maTLS协议被设计为实现中间盒的认证、中间盒操作的审计以及段的安全参数的验证，所以会话仍然是安全的。我们进行了基于测试平台的实验证明maTLS以极低的开销实现了上述安全目标。我们还使用了安全验证工具Tamarin证明了maTLS的安全模型。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/matls-how-to-make-tls-middlebox-aware/](https://www.ndss-symposium.org/ndss-paper/matls-how-to-make-tls-middlebox-aware/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01B-6_Lee_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_01B-6_Lee_paper.pdf)
## SABRE: Protecting Bitcoin against Routing Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#sabre-protecting-bitcoin-against-routing-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#sabre-protecting-bitcoin-against-routing-attacks)**
### 作者
* Maria Apostolaki, ETH Zurich
* Gian Marti, ETH Zurich
* Jan Müller, ETH Zurich
* Laurent Vanbever, ETH Zurich
### 摘要
> 如今，互联网路由攻击仍然非常有效，因为现有的对策要么无法提供保护保证，要么难以部署。区块链系统特别容易受到此类攻击的影响，因为它们依赖于全球范围的通信以达成共识。尤其是比特币——最广泛使用的加密货币——可以被任何AS级对手通过BGP劫持一分为二。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了SABRE，一个安全且可扩展的比特币中继网络，通过一组对路由攻击具有弹性的连接全球转发区块。SABRE与现有的对等网络并行运行，并且易于部署。作为一个关键系统，SABRE的设计具有高度的弹性，能够有效处理高带宽负载，包括拒绝服务攻击。
> 
> 
> 
> 
> 
> 
> 
> 我们围绕两个关键技术洞察构建了SABRE。首先，我们利用自治系统间路由(BGP)策略的基本特性来托管中继节点：(i)在本质上受到路由攻击保护的网络中；和(ii)在大多数比特币客户端经济上优先选择的路径上。这些特性是通用的，可以用来保护其他基于区块链的系统。其次，我们利用中继区块是通信密集而不是计算密集的事实。这使得我们能够将大部分中继操作卸载到可编程网络硬件（使用P4编程语言）。由于硬件/软件协同设计，SABRE节点在高负载下可以无缝运行，同时减轻恶意客户端的影响。
> 
> 
> 
> 
> 
> 
> 
> 我们提供了SABRE的完整实现以及广泛的评估。我们的结果表明，即使只部署6个节点，SABRE在防止比特币路由攻击方面也是有效的。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/sabre-protecting-bitcoin-against-routing-attacks/](https://www.ndss-symposium.org/ndss-paper/sabre-protecting-bitcoin-against-routing-attacks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02A-1_Apostolaki_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02A-1_Apostolaki_paper.pdf)
## A Treasury System for Cryptocurrencies: Enabling Better Collaborative Intelligence.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#a-treasury-system-for-cryptocurrencies-enabling-better-collaborative-intelligence) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#a-treasury-system-for-cryptocurrencies-enabling-better-collaborative-intelligence)**
### 作者
* Bingsheng Zhang, Lancaster University
* Roman Oliynykov, IOHK Ltd.
* Hamed Balogun, Lancaster University
### 摘要
> 资金宝库系统是一个由社区控制和分散化的协作决策机制，可用于区块链开发和维护的可持续性资金。在每个资金宝库期间，项目提案被提交、讨论和投票；排名靠前的项目将从宝库中获得资金。Dash治理系统是这类系统的一个现实世界例子。在这项工作中，我们首次对资金宝库系统进行了严格的研究。我们建立了一个可以证明安全，并且与大多数现有的区块链基础设施（如比特币、以太坊等）兼容的宝库系统模型、设计和实现。具体而言，所提出的宝库系统支持液化民主/代议制投票，以提升协作智能。即，利益相关者可以直接对提议项目进行投票，也可以将自己的选票委托给专家。它的核心组成部分是一个分布式全通用安全端到端可验证投票协议。即使所有投票委员会成员被腐败，宝库投票决策的完整性也得到保证。为了进一步提高效率，我们提出了世界上第一个具有对数尺寸通信的诚实验证者零知识证明单位向量加密。这部分结果可能对其他密码协议具有独立的兴趣。我们在Scala上实现了一个试点系统，基于Scorex 2.0框架，并且基准结果表明，所提出的系统可以高效支持成千上万个宝库参与者。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/a-treasury-system-for-cryptocurrencies-enabling-better-collaborative-intelligence/](https://www.ndss-symposium.org/ndss-paper/a-treasury-system-for-cryptocurrencies-enabling-better-collaborative-intelligence/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02A-2_Zhang_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02A-2_Zhang_paper.pdf)
## Fine-Grained and Controlled Rewriting in Blockchains: Chameleon-Hashing Gone Attribute-Based.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#fine-grained-and-controlled-rewriting-in-blockchains-chameleon-hashing-gone-attribute-based) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#fine-grained-and-controlled-rewriting-in-blockchains-chameleon-hashing-gone-attribute-based)**
### 作者
* David Derler, DFINITY
* Kai Samelin, TÜV Rheinland i-sec GmbH
* Daniel Slamanig, AIT Austrian Institute of Technology
* Christoph Striecks, AIT Austrian Institute of Technology
### 摘要
> 区块链技术最近受到了相当大的关注。起初关注的重点主要是在比特币等加密货币的背景下使用区块链的情况，现在应用场景已经远远超出了这个范围。大多数区块链具有一种属性，即一旦某个对象（例如区块或交易）被注册并包含到区块链中，它就会被永久保存，没有方法可以再次修改它。虽然这是大多数区块链场景的一个重要特性，但有时仍然希望能以可控的方式打破这种不可变性——有时甚至可能是法律要求。
> 
> 
> 
> 
> 
> 
> 
> 最近，Ateniese等人（EuroS&P 2017）提出了一个关于区块级别上这个问题的优雅解决方案。在这种解决方案中，作者用所谓的变色哈希（Krawczyk和Rabin，NDSS 2000）取代了标准哈希函数。虽然他们的工作似乎为控制重写区块链的问题提供了一个合适的解决方案，但他们的方法过于粗粒度，只提供了全有或全无的解决方案。我们重新审视这个想法，并引入了基于策略的变色哈希（PBCH）的新概念。PBCH通过给计算哈希的一方赋予将访问策略与生成的哈希关联起来的能力来推广变色哈希的概念。满足策略所需的足够特权的任何人都可以为给定的哈希找到任意的碰撞。然后我们将这个概念应用于区块链内的交易级别重写，从而支持区块链对象的精细和可控的可修改性。
> 
> 
> 
> 
> 
> 
> 
> 除了对PBCH进行建模，我们还提供了PBCH的通用构造（使用我们也引入的具有短暂陷阱门的变色哈希的强化版本），并且严格证明了其安全性，并使用高效的构件进行实例化。我们报告了第一批实施结果。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/fine-grained-and-controlled-rewriting-in-blockchains-chameleon-hashing-gone-attribute-based/](https://www.ndss-symposium.org/ndss-paper/fine-grained-and-controlled-rewriting-in-blockchains-chameleon-hashing-gone-attribute-based/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02A-3_Derler_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02A-3_Derler_paper.pdf)
## YODA: Enabling computationally intensive contracts on blockchains with Byzantine and Selfish nodes.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#yoda-enabling-computationally-intensive-contracts-on-blockchains-with-byzantine-and-selfish-nodes) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#yoda-enabling-computationally-intensive-contracts-on-blockchains-with-byzantine-and-selfish-nodes)**
### 作者
* Sourav Das, Department of Computer Science and Engineering
### 摘要
> 比特币和以太坊等无许可区块链的一个主要缺点是它们不适合运行计算密集型智能合约(CICs)。这阻止了这些区块链运行机器学习算法、零知识证明等可能需要非平凡计算的操作。
> 
> 
> 
> 
> 
> 
> 
> 本文介绍了YODA，据我们所知，它是第一个在拥有拜占庭节点和自私节点的威胁模型下，用于在无许可区块链上高效计算CICs的解决方案。 YODA通过Sortition选择一个或多个执行集(ES)来执行特定的离线CIC。一项关键创新是基于顺序假设检验的MultI-Round Adaptive Consensus using Likelihood Estimation (MiRACLE) 算法。MiRACLE允许执行集保持较小，从而使YODA高效，同时保证了正确的CIC执行。它根据系统中拜占庭节点的集中度自动调整ES集的数量，并在某些情况下使用的ES集的期望数量上是最优的。通过一套经济激励和技术机制，例如新颖的随机插入合约执行(RICE)算法，我们迫使自私节点表现诚实。我们还证明了自私节点的诚实行为是近似纳什平衡。我们介绍了YODA的系统设计和细节，并证明了MiRACLE和RICE的安全性质。我们在以太坊上构建的原型实现展示了YODA的能力，可以运行比以太坊当前支持的每单位时间更高数量级的CICs，并展示了RICE的低开销特性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/yoda-enabling-computationally-intensive-contracts-on-blockchains-with-byzantine-and-selfish-nodes/](https://www.ndss-symposium.org/ndss-paper/yoda-enabling-computationally-intensive-contracts-on-blockchains-with-byzantine-and-selfish-nodes/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02A-4_Das_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02A-4_Das_paper.pdf)
## Giving State to the Stateless: Augmenting Trustworthy Computation with Ledgers.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#giving-state-to-the-stateless-augmenting-trustworthy-computation-with-ledgers) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#giving-state-to-the-stateless-augmenting-trustworthy-computation-with-ledgers)**
### 作者
* Gabriel Kaptchuk, Johns Hopkins University
* Matthew Green, Johns Hopkins University
* Ian Miers, Cornell Tech
### 摘要
> 在这项工作中，我们研究了通过将无状态可信设备与公共账本结合起来实现安全计算的问题。我们考虑了一种混合范式，在其中，客户端设备（例如协处理器或可信飞地）执行安全计算，同时与可能具有恶意的主机计算机通过公共账本进行交互。我们探讨了这种系统的构建性和潜在破坏性影响。我们首先表明，即使设备没有持久存储，这种组合也允许构建有状态交互功能（包括一般计算）；这使我们能够使用廉价的可信硬件或纯加密混淆技术构建复杂的应用程序。我们进一步展示了如何利用这种范式在网络上实现抗审查通信，即使网络通信由可能具有恶意的主机进行中介。最后，我们描述了一些可以实现的实际应用。这些应用包括私有智能合约的同步；受限速强制记录；通过弱密码实现强加密备份；在多方计算中实施公平性；以及破坏性应用，如自主勒索软件，允许进行无在线方的付款。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/giving-state-to-the-stateless-augmenting-trustworthy-computation-with-ledgers/](https://www.ndss-symposium.org/ndss-paper/giving-state-to-the-stateless-augmenting-trustworthy-computation-with-ledgers/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02A-5_Kaptchuk_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02A-5_Kaptchuk_paper.pdf)
## Cracking the Wall of Confinement: Understanding and Analyzing Malicious Domain Take-downs.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#cracking-the-wall-of-confinement-understanding-and-analyzing-malicious-domain-take-downs) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#cracking-the-wall-of-confinement-understanding-and-analyzing-malicious-domain-take-downs)**
### 作者
* Eihal Alowaisheq, Indiana University
### 摘要
> 采取行动的操作旨在打击涉及恶意域名的网络犯罪。在过去的十年中，已经报道了许多成功的采取行动，包括对抗Conficker蠕虫和最近对抗VPNFilter。尽管采取行动在打击网络犯罪方面发挥着重要作用，但该域名采取行动程序仍然异常模糊。似乎对采取行动的工作方式以及是否有尽职调查以确保其安全性和可靠性没有深入了解。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们报告了对域名采取行动的首次系统研究。通过大量的数据，包括各种汇合源和黑名单、跨越六年的被动DNS数据和历史Whois信息，我们的研究得以实现。在这些数据集上，我们建立了一种独特的方法，广泛利用了各种反向查找和其他数据分析技术，以解决识别被采取的域名、汇合操作者和采取时间的挑战。通过对数据应用该方法，我们发现了超过62万个被采取的域名，并对采取过程进行了纵向分析，从而促进对该操作及其弱点的更好理解。我们发现，在过去十个月中，超过14%的被采取域名已被重新释放到域名市场，并且一些已释放的域名在被捕获和扣押之前又被恶意行为者重新购买，无论是通过相同的汇合源还是不同的汇合源。此外，我们还发现，与汇合域名对应的DNS记录的错误配置允许我们劫持了一直被FBI扣押的域名。此外，我们发现，到期的汇合源导致了约3万个被采取的域名的转让，这些域名的流量现在受到新所有者的控制。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/cracking-the-wall-of-confinement-understanding-and-analyzing-malicious-domain-take-downs/](https://www.ndss-symposium.org/ndss-paper/cracking-the-wall-of-confinement-understanding-and-analyzing-malicious-domain-take-downs/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02B-1_Alowaisheq_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02B-1_Alowaisheq_paper.pdf)
## Cleaning Up the Internet of Evil Things: Real-World Evidence on ISP and Consumer Efforts to Remove Mirai.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#cleaning-up-the-internet-of-evil-things-real-world-evidence-on-isp-and-consumer-efforts-to-remove-mirai) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#cleaning-up-the-internet-of-evil-things-real-world-evidence-on-isp-and-consumer-efforts-to-remove-mirai)**
### 作者
* Orcun Cetin, Delft University of Technology
* Carlos Gañán, Delft University of Technology
* Lisette Altena, Delft University of Technology
* Takahiro Kasama, National Institute of Information and Communications Technology
* Daisuke Inoue, National Institute of Information and Communications Technology
* Kazuki Tamiya, Yokohama National University
* Ying Tie, Yokohama National University
* Katsunari Yoshioka, Yokohama National University
* Michel van Eeten, Delft University of Technology
### 摘要
> 随着物联网僵尸网络的崛起，感染设备的处理已成为一项关键任务。由于这些设备中有87%以上位于宽带网络中，这项任务将主要由消费者和互联网服务提供商承担。我们在野外进行了第一项针对物联网恶意软件清除的实证研究，具体而言，是针对一个中型互联网服务提供商网络中Mirai感染的清除。为了测量修复速度，我们将来自观察性研究和随机对照试验的数据与蜜罐和暗网的数据相结合。我们发现，通过构建一个有限制的网络环境并通过电子围栏方式隔离和通知感染的客户（这是一种传统恶意软件的互联网服务提供商僵尸网络处置的最佳做法），可在14天内恢复92%的感染。仅通过电子邮件通知与未发送通知的对照组相比，没有可观察到的影响。我们还测量了对照组和两个未通知用户的参考网络的自然修复率高达58-74%的令人惊讶结果。更令人惊讶的是，再感染率很低。在我们的第一项研究之后的五个月中，只有5%的修复用户再次感染。这与我们的实验室测试结果形成了鲜明对比，实验室测试发现真实物联网设备在几分钟内就会再次感染 - 这种差异的原因有很多可能的解释，但我们没有找到令人满意的答案。我们通过76次电话访谈和互联网服务提供商的通信日志收集了关于客户体验和行动的数据。尽管许多用户操作不正确（例如，在PC上运行反病毒软件来解决物联网设备的感染），但修复仍然成功。尽管隔离感染设备明显非常有效，未来的工作将需要解决一些仍然存在的谜团。此外，由于互联网服务提供商的动力较弱，推广电子围栏解决方案将很困难。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/cleaning-up-the-internet-of-evil-things-real-world-evidence-on-isp-and-consumer-efforts-to-remove-mirai/](https://www.ndss-symposium.org/ndss-paper/cleaning-up-the-internet-of-evil-things-real-world-evidence-on-isp-and-consumer-efforts-to-remove-mirai/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02B-2_Cetin_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02B-2_Cetin_paper.pdf)
## Measurement and Analysis of Hajime, a Peer-to-peer IoT Botnet.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#measurement-and-analysis-of-hajime-a-peer-to-peer-iot-botnet) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#measurement-and-analysis-of-hajime-a-peer-to-peer-iot-botnet)**
### 作者
* Stephen Herwig, University of Maryland
* Katura Harvey, University of Maryland
* Max Planck Institute for Software Systems, MPI-SWS
* George Hughey, University of Maryland
* Richard Roberts, University of Maryland
* Max Planck Institute for Software Systems, MPI-SWS
* Dave Levin, University of Maryland
### 摘要
> 物联网（IoT）对网络计算引入了前所未有的多样性和普遍性。它也引入了新的攻击面，这对攻击者来说是一个福音。最近的Mirai僵尸网络展示了由大量受感染的物联网设备组成的集合体的潜力和威力。一个被称为Hajime的新的僵尸网络针对的是与Mirai相同的设备，但在设计和操作上有明显的不同。Hajime使用一个公共的点对点系统作为其命令与控制基础设施，并定期引入新的漏洞，从而增加其韧性。
> 
> 
> 
> 
> 
> 
> 
> 我们表明，Hajime的分布式设计使其成为更好地理解物联网僵尸网络的有价值工具。例如，Hajime清晰地将其机器人分为不同的对等组，取决于它们底层的硬件架构。通过详细测量 - 对Hajime的点对点基础设施进行主动扫描和被动、纵向收集根DNS回溯流量 - 我们显示Hajime可以作为一个镜像，用来了解物联网僵尸网络的运作方式、它们感染了哪些类型的设备以及哪些国家更容易受到感染（或更少）。我们的结果表明，受影响的物联网设备比先前报道的更多；这些设备使用各种不同的CPU架构，其受欢迎程度因国家而异；物联网设备的流动性很高；新的漏洞可以迅速而显著地增加物联网僵尸网络的规模和能力。我们的代码和数据可用于帮助未来努力以测量和减轻物联网僵尸网络的日益增长的威胁。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/measurement-and-analysis-of-hajime-a-peer-to-peer-iot-botnet/](https://www.ndss-symposium.org/ndss-paper/measurement-and-analysis-of-hajime-a-peer-to-peer-iot-botnet/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02B-3_Herwig_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02B-3_Herwig_paper.pdf)
## Countering Malicious Processes with Process-DNS Association.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#countering-malicious-processes-with-process-dns-association) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#countering-malicious-processes-with-process-dns-association)**
### 作者
* Suphannee Sivakorn, Columbia University
* Kangkook Jee, NEC Labs America
* Yixin Sun, Princeton University
* Lauri Korts-Pärn, Cyber Defense Institute
* Zhichun Li, NEC Labs America
* Cristian Lumezanu, NEC Labs America
* Zhenyu Wu, NEC Labs America
* Lu-An Tang, NEC Labs America
* Ding Li, NEC Labs America
### 摘要
> 现代恶意软件和网络攻击在很大程度上依赖DNS服务，使其运作可靠且难以追踪。监控网络DNS活动并阻断可疑域名已被证明是一种有效对抗此类攻击的技术。然而，最近成功的攻击活动揭示出攻击者通过使用看似良性的域名和公共网络存储服务来隐藏恶意活动的方式进行了调整。此外，最近对加密DNS查询的支持提供给攻击者更容易的手段来从基于网络的DNS监控中隐藏恶意流量。
> 
> 
> 
> 
> 
> 
> 
> 我们提出了PDNS，一种基于网络中每个主机部署的DNS传感器和集中化后端分析服务器的终端DNS监控系统。为了检测此类攻击，PDNS扩展了被监控的DNS活动上下文，并检查引发该活动的进程上下文。具体来说，每个部署的PDNS传感器将域名和与DNS查询相关的IP地址与触发其请求的程序的进程ID、二进制签名、加载的DLL和代码签名信息进行匹配。我们利用从126个企业主机收集的DNS活动数据集及多个恶意软件源的数据对PDNS进行评估。使用包括DNN在内的机器学习分类器，我们的结果在高检测准确率方面胜过大部分之前的工作：真阳性率为98.55%，误报率仅为0.03%。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/countering-malicious-processes-with-process-dns-association/](https://www.ndss-symposium.org/ndss-paper/countering-malicious-processes-with-process-dns-association/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02B-4_Sivakorn_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02B-4_Sivakorn_paper.pdf)
## ExSpectre: Hiding Malware in Speculative Execution.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#exspectre-hiding-malware-in-speculative-execution) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#exspectre-hiding-malware-in-speculative-execution)**
### 作者
* Jack Wampler, University of Colorado Boulder
* Ian Martiny, University of Colorado Boulder
* Eric Wustrow, University of Colorado Boulder
### 摘要
> 近期，Spectre和Meltdown攻击揭示了现代CPU设计中的严重漏洞，允许攻击者从敏感程序中窃取数据。这些漏洞利用了推测执行的特性，迫使处理器执行本不应发生的计算，并通过侧信道将结果信息泄漏给攻击者。
> 
> 
> 
> 
> 
> 
> 
> 在本论文中，我们延伸这些思想，并利用推测执行来隐藏恶意软件，使其无法被静态和动态分析所发现。使用这种技术，恶意程序的关键部分计算可以被屏蔽，即使是通过对程序进行指令级追踪的调试器也无法确定其结果是如何计算得出的。
> 
> 
> 
> 
> 
> 
> 
> 我们引入了ExSpectre，它可以将任意恶意代码编译成看似良性的载荷二进制文件。当一个独立的触发程序在同一台机器上运行时，它会误导CPU的分支预测器，导致载荷程序推测性地执行其恶意载荷，并将推测结果传递给其余的载荷程序，以改变其真实世界的行为。
> 
> 
> 
> 
> 
> 
> 
> 我们研究了可以通过推测执行进行的执行程度和类型，并展示了几种可以隐蔽执行的计算。特别地，在推测执行中，我们能够使用AES-NI指令以超过11 kbps的速度解密内存。在此基础上，我们解密并解释自定义虚拟机语言，以在真实世界中执行任意计算和系统调用。我们通过一个概念验证的召回Shell来展示这一点，在触发被发出后，它只需要几毫秒的时间来执行。我们还展示了我们相应的触发程序可以是系统上已经运行的预先存在的良性应用程序，并通过攻击者远程驱动的OpenSSL来演示这个概念。
> 
> 
> 
> 
> 
> 
> 
> ExSpectre展示了一种新型的恶意软件，可以逃避现有的逆向工程和二进制分析技术。由于其真实功能包含在看似无法到达的无效代码中，并且其控制流程由可能同时运行的任何其他程序外部驱动，ExSpectre对先进的恶意软件分析技术构成了一种新颖的威胁。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/exspectre-hiding-malware-in-speculative-execution/](https://www.ndss-symposium.org/ndss-paper/exspectre-hiding-malware-in-speculative-execution/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02B-5_Wampler_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_02B-5_Wampler_paper.pdf)
## ML-Leaks: Model and Data Independent Membership Inference Attacks and Defenses on Machine Learning Models.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#ml-leaks-model-and-data-independent-membership-inference-attacks-and-defenses-on-machine-learning-models) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#ml-leaks-model-and-data-independent-membership-inference-attacks-and-defenses-on-machine-learning-models)**
### 作者
* Ahmed Salem, CISPA Helmholtz Center for Information Security
* Yang Zhang, CISPA Helmholtz Center for Information Security
* Mathias Humbert, Swiss Data Science Center
### 摘要
> 机器学习 (ML) 已成为许多现实世界应用的核心组成部分，训练数据是推动当前进展的关键因素。这一巨大的成功促使互联网公司将机器学习作为一项服务 (MLaaS) 部署。最近，第一个会员推断攻击表明在这种 MLaaS 环境中可以提取训练集的信息，这对安全和隐私有严重影响。
> 
> 
> 
> 
> 
> 
> 
> 然而，对这种攻击可行性的早期演示在对手方面有许多假设，比如使用多个所谓的影子模型、知道目标模型结构，并拥有与目标模型的训练数据相同分布的数据集。我们放宽了所有这些关键假设，从而证明这种攻击具有广泛的适用性，成本低，并且比以前想象的风险更严重。我们展示迄今为止对这一新兴和发展中的威胁进行的最全面的研究，使用了八个不同的数据集，展示了所提攻击在各领域的可行性。
> 
> 
> 
> 
> 
> 
> 
> 此外，我们提出了首个有效的抵御这种更广泛类别的会员推断攻击的防御机制，并且保持了ML模型的高水平实用性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/ml-leaks-model-and-data-independent-membership-inference-attacks-and-defenses-on-machine-learning-models/](https://www.ndss-symposium.org/ndss-paper/ml-leaks-model-and-data-independent-membership-inference-attacks-and-defenses-on-machine-learning-models/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03A-1_Salem_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03A-1_Salem_paper.pdf)
## MBeacon: Privacy-Preserving Beacons for DNA Methylation Data.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#mbeacon-privacy-preserving-beacons-for-dna-methylation-data) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#mbeacon-privacy-preserving-beacons-for-dna-methylation-data)**
### 作者
* Inken Hagestedt, CISPA Helmholtz Center for Information Security
* Yang Zhang, CISPA Helmholtz Center for Information Security
* Mathias Humbert, Swiss Data Science Center
### 摘要
> 分子分析技术的进步为生物医学研究提供了大量的数据。为促进数据共享，全球基因组与健康联盟建立了Beacon系统，这是一个旨在帮助研究人员找到感兴趣数据集的搜索引擎。尽管当前的Beacon系统仅支持基因组数据，但其他类型的生物医学数据，如DNA甲基化，对于推进我们对这一领域的理解也是至关重要的。在本文中，我们提出了第一个用于DNA甲基化数据共享的Beacon系统：MBeacon。由于当前的基因组Beacon容易受到隐私攻击（如成员推断攻击），而DNA甲基化数据具有高度敏感性，因此我们采用以隐私为设计准则构建MBeacon。首先，我们通过提出针对未受保护的甲基化Beacon的成员推断攻击，演示了隐私威胁。我们的实验结果表明，仅使用100个查询就足以实现AUC（ROC曲线下的面积）大于0.9的成功攻击。为了解决这个问题，我们提出了一种新颖的差分隐私机制，即SVT^2，它是MBeacon的核心组件。对多个数据集进行的大量实验证明，SVT^2能够成功缓解成员隐私风险，而不会对效用造成显著损害。我们还实现了一个完全功能的MBeacon原型，并向研究界提供该原型。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/mbeacon-privacy-preserving-beacons-for-dna-methylation-data/](https://www.ndss-symposium.org/ndss-paper/mbeacon-privacy-preserving-beacons-for-dna-methylation-data/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03A-2_Hagestedt_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03A-2_Hagestedt_paper.pdf)
## Stealthy Adversarial Perturbations Against Real-Time Video Classification Systems.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#stealthy-adversarial-perturbations-against-real-time-video-classification-systems) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#stealthy-adversarial-perturbations-against-real-time-video-classification-systems)**
### 作者
* Shasha Li, University of California Riverside
* Ajaya Neupane, University of California Riverside
* Sujoy Paul, University of California Riverside
* Chengyu Song, University of California Riverside
* Srikanth V. Krishnamurthy, University of California Riverside
* Amit K. Roy Chowdhury, University of California Riverside
* Ananthram Swami, United States Army Research Laboratory
### 摘要
> 最近的研究已经证明了机器学习系统对于对抗性扰动的脆弱性。然而，这些研究大多限于对图像的扰动，更普遍地说是不涉及实时流输入的分类任务。在本文中，我们提出了一个问题：“是否可能对实时视频分类系统造成误分类的对抗性扰动，如果可能的话，它们必须满足什么特性？”实时视频分类系统应用于监控、智能车辆和智能老年护理等领域，因此误分类可能会造成特别严重的后果（例如，可能会发生老年护理机构的意外）。视频分类系统以视频剪辑作为输入，而这些剪辑的边界并不是确定的。我们证明，不考虑“视频分类器输入中剪辑边界的不确定性”的扰动，并不能达到高攻击成功率。我们提出了一种新颖方法来生成3D的对抗性扰动（扰动剪辑），利用生成模型的最新进展，不仅克服了这一关键挑战，还提供隐蔽性。特别是，我们最有效的3D对抗性扰动能够导致视频流中的目标活动以超过80%的误分类率被分类错误。与此同时，它们还确保对其他（非目标的）活动影响较小，使其具有极高的隐蔽性。最后，我们还推导出一种单帧（2D）扰动，可以应用于视频流中的每一帧，在许多情况下，达到极高的误分类率。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/stealthy-adversarial-perturbations-against-real-time-video-classification-systems/](https://www.ndss-symposium.org/ndss-paper/stealthy-adversarial-perturbations-against-real-time-video-classification-systems/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03A-3_Li_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03A-3_Li_paper.pdf)
## NIC: Detecting Adversarial Samples with Neural Network Invariant Checking.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#nic-detecting-adversarial-samples-with-neural-network-invariant-checking) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#nic-detecting-adversarial-samples-with-neural-network-invariant-checking)**
### 作者
* Shiqing Ma, Purdue University
* Yingqi Liu, Purdue University
* Guanhong Tao, Purdue University
* Wen-Chuan Lee, Purdue University
* Xiangyu Zhang, Purdue University
### 摘要
> 深度神经网络（DNN）容易受到对正确分类输入进行扰动以使DNN模型发生误操作（例如错误分类）的对抗样本的影响。这可能在安全敏感的应用中造成灾难性后果。现有的防御和检测技术可以在各种假设下对特定攻击效果良好（例如，已知可能的攻击集）。然而，它们不足以对抗更广泛范围的攻击。在本文中，我们分析了在各种攻击下DNN模型的内部结构，并识别出两个常见的利用通道：来源通道和激活值分布通道。然后，我们提出了一种新颖的技术来提取DNN的不变性，并利用它们进行运行时对抗样本检测。我们在包括ImageNet和13个模型在内的流行数据集上对11种不同类型的攻击进行了实验，结果表明我们的技术可以有效地检测出所有这些攻击（准确率超过90%），并且误报率较低。我们还将其与三种最先进的技术进行了比较，包括基于局部内在维度（LID）的方法，基于去噪器的方法（即MagNet和HGD）和基于预测不一致性的方法（即特征挤压）。我们的实验证明了有希望的结果。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/nic-detecting-adversarial-samples-with-neural-network-invariant-checking/](https://www.ndss-symposium.org/ndss-paper/nic-detecting-adversarial-samples-with-neural-network-invariant-checking/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03A-4_Ma_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03A-4_Ma_paper.pdf)
## TextBugger: Generating Adversarial Text Against Real-world Applications.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#textbugger-generating-adversarial-text-against-real-world-applications) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#textbugger-generating-adversarial-text-against-real-world-applications)**
### 作者
* Jinfeng Li, Zhejiang University
* Shouling Ji, Zhejiang University
* Tianyu Du, Zhejiang University
* Bo Li, University of California
### 摘要
> 基于深度学习的文本理解（DLTU）是许多应用程序（包括问答系统、机器翻译和文本分类）背后的关键技术。尽管DLTU非常流行，但其安全漏洞仍然较为未知，这引起了高度关注，尤其是考虑到其在用户情感分析和有毒内容检测等安全敏感应用中的增加使用。本文表明，DLTU本质上容易受到对抗性文本攻击的影响，即恶意构造的文本触发目标DLTU系统和服务的误行为。具体地，我们提出了TextBugger，一种生成对抗性文本的通用攻击框架。与以往的工作相比，TextBugger在以下几个方面有所不同：（i）有效性，在攻击成功率方面优于现有攻击方法；（ii）逃避性，在保持良性文本实用性方面表现良好，94.9％的对抗性文本能被人类读者正确识别；（iii）高效性，生成对抗性文本的计算复杂度与文本长度呈亚线性关系。我们在一组用于情感分析和有毒内容检测的现实DLTU系统和服务上对TextBugger进行了实证评估，展示了其有效性、逃避性和高效性。例如，TextBugger在Amazon AWS Comprehend上的IMDB数据集上以4.61秒的时间实现了100％的成功率，并保持了97％的语义相似性。我们进一步讨论了可能的防御机制以减轻此类攻击以及对手的潜在对策，这为进一步研究提供了有希望的方向。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/textbugger-generating-adversarial-text-against-real-world-applications/](https://www.ndss-symposium.org/ndss-paper/textbugger-generating-adversarial-text-against-real-world-applications/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03A-5_Li_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03A-5_Li_paper.pdf)
## Digital Healthcare-Associated Infection: A Case Study on the Security of a Major Multi-Campus Hospital System.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#digital-healthcare-associated-infection-a-case-study-on-the-security-of-a-major-multi-campus-hospital-system) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#digital-healthcare-associated-infection-a-case-study-on-the-security-of-a-major-multi-campus-hospital-system)**
### 作者
* Luis Vargas, University of Florida
* Logan Blue, University of Florida
* Vanessa Frost, University of Florida
* Christopher Patton, University of Florida
* Nolen Scaife, University of Florida
* Kevin R.B. Butler, University of Florida
* Patrick Traynor, University of Florida
### 摘要
> 现代医院系统是复杂的环境，依赖于与更大的互联网的高度互联性。随着这种互联性的增加，攻击面也变得庞大。安全研究人员已经花了大量精力来评估医疗设备（如心脏起搏器和胰岛素泵）带来的风险。然而，迄今为止仍没有对现代医院系统进行系统化、全面的分析，可能是由于收集和分析敏感的医疗保健数据的挑战。医院流量需要特别考虑，因为医疗数据可能包含私人信息，或者可能来自负责患者护理的安全关键设备。我们描述了以安全和道德的方式获取网络数据的过程，以帮助拓展未来在这个领域的研究。我们对与医院日常运营相关的网络设备进行分析，而不对医院环境造成任何伤害。我们对一个重要的多校区医疗系统进行了为期六个月的数字医疗相关感染(D-HAI)分析。作为D-HAI分析的一部分，我们对DNS请求和TLS/SSL通信进行了特征化，以更好地了解医院环境中所面临的威胁，同时不干扰运营网络。与过去的假设相反，我们发现医疗设备与外部互联网的接触很少，但日常医院运营所需的医疗支持设备（如服务器、计算机终端）则更容易受到攻击。尽管很多通信看起来是无害的，我们发现了不安全和破碎的加密和配置错误的设备，以及潜在的僵尸网络活动。分析它们所在的网络生态系统让我们了解到医院需要解决的弱点和配置错误，以确保患者的安全和隐私。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/digital-healthcare-associated-infection-a-case-study-on-the-security-of-a-major-multi-campus-hospital-system/](https://www.ndss-symposium.org/ndss-paper/digital-healthcare-associated-infection-a-case-study-on-the-security-of-a-major-multi-campus-hospital-system/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03B-1-1_Vargas_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03B-1-1_Vargas_paper.pdf)
## Mind Your Own Business: A Longitudinal Study of Threats and Vulnerabilities in Enterprises.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#mind-your-own-business-a-longitudinal-study-of-threats-and-vulnerabilities-in-enterprises) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#mind-your-own-business-a-longitudinal-study-of-threats-and-vulnerabilities-in-enterprises)**
### 作者
* Platon Kotzias, IMDEA Software Institute
### 摘要
> 企业拥有互联网连接的主机中的相当比例，并拥有财务数据和知识产权等有价值资产，可能成为攻击者的目标。它们遭受到利用未修补主机和安装恶意软件的攻击，导致损失可能高达数百万。尽管这一现象的规模巨大，但企业的威胁和漏洞形势仍然未受到明确的研究。企业的安全状况仍然不明确，并且不清楚企业是否确实比消费者主机更安全。为了解决这些问题，我们进行了迄今为止规模最大、持续时间最长的企业安全研究。我们的数据覆盖了近3年的时间，收集自28K家企业，属于67个行业，拥有82M个主机和73M个面向公众的服务器。
> 
> 
> 
> 
> 
> 
> 
> 我们的测量包括两个部分：威胁环境分析和企业漏洞修补行为分析。威胁环境分析首先将企业主机中观察到的声誉低下的文件分类为不同家族。然后，它测量了在我们的研究期间，91% - 97%的企业，13% - 41%的企业主机至少遭遇过一个恶意软件或PUP文件；企业遭遇恶意软件的频率远高于PUP；并且像银行和消费金融这样的行业在这方面做得明显更好，遭遇恶意软件和PUP的比率显著低于受影响最严重的行业。漏洞分析检查了企业主机和服务器中12个客户端和112个服务器端应用程序的修补情况。它测量了以下几个方面：在12个客户端应用程序的所有漏洞中，平均需要超过6个月才能修补掉90％的主机数量；与消费者主机相比，企业计算机更快修补漏洞；服务器应用程序的修补情况远不如客户端应用程序。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/mind-your-own-business-a-longitudinal-study-of-threats-and-vulnerabilities-in-enterprises/](https://www.ndss-symposium.org/ndss-paper/mind-your-own-business-a-longitudinal-study-of-threats-and-vulnerabilities-in-enterprises/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03B-1-2_Kotzias_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03B-1-2_Kotzias_paper.pdf)
## NoDoze: Combatting Threat Alert Fatigue with Automated Provenance Triage.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#nodoze-combatting-threat-alert-fatigue-with-automated-provenance-triage) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#nodoze-combatting-threat-alert-fatigue-with-automated-provenance-triage)**
### 作者
* Wajih Ul Hassan, NEC Laboratories America
### 摘要
> 大型企业越来越依赖威胁检测软件（如入侵检测系统）来帮助他们发现可疑活动。这些软件会生成警报，需要由网络分析师进行调查以确定是否为真实攻击。不幸的是，实际情况是，警报的数量超过了网络分析师能够适当调查的范围。这导致了“威胁警报疲劳”或信息超载问题，使得网络分析师在虚假警报的干扰下错过了真实攻击警报。本文介绍了NoDoze，利用企业内生成的威胁警报的上下文和历史信息来应对这一挑战。NoDoze首先生成警报事件的因果依赖图。然后，它为依赖图中的每个事件分配异常分数，该分数基于相关事件在企业中发生的频率。NoDoze然后使用一种新颖的网络扩散算法沿着图的边传播这些分数，并生成一个带有聚合异常分数的子图，用于对警报进行分级处理。我们对我们的数据集中的364个威胁警报进行的评估显示，NoDoze将虚假警报的数量减少了86％，节省了超过90小时的分析师时间，这些时间原本需要用于调查那些虚假警报。此外，NoDoze生成的真实警报的依赖图比传统工具生成的依赖图小两个数量级，而没有牺牲调查所需的重要信息。我们的系统具有较低的运行时间开销，并可以与任何威胁检测软件配合使用。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/nodoze-combatting-threat-alert-fatigue-with-automated-provenance-triage/](https://www.ndss-symposium.org/ndss-paper/nodoze-combatting-threat-alert-fatigue-with-automated-provenance-triage/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03B-1-3_UlHassan_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03B-1-3_UlHassan_paper.pdf)
## The use of TLS in Censorship Circumvention.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#the-use-of-tls-in-censorship-circumvention) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#the-use-of-tls-in-censorship-circumvention)**
### 作者
* Sergey Frolov, University of Colorado Boulder
* Eric Wustrow, University of Colorado Boulder
### 摘要
> TLS（传输层安全）协议已迅速成为互联网上最流行的协议，在Mozilla Firefox中已被用于加载超过70%的网页。由于其普及度，TLS也成为了绕过审查工具（包括Tor和Signal等）中最受欢迎的协议之一。
> 
> 
> 
> 
> 
> 
> 
> 然而，TLS所支持的广泛特性使得可以通过它们支持的密钥套件、椭圆曲线、签名算法和其他扩展来区分不同的实现。审查者已经利用深度数据包检查（DPI）根据TLS实现的指纹来识别和阻止流行的绕过审查工具。
> 
> 
> 
> 
> 
> 
> 
> 为此，许多绕过审查工具试图模仿流行的TLS实现，如浏览器，但这种技术面临一些挑战。首先，跟上快速变化的浏览器TLS实现并知道哪些指纹是好的模仿候选者是很困难的。其次，TLS实现可能难以正确地模仿，因为它们提供了许多轻量级绕过审查工具中不支持的功能。最后，依赖变化和底层库的更新可能会悄无声息地影响应用的TLS指纹，使得工具难以进行控制。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们收集并分析了超过118亿个TLS连接9个月的真实TLS流量，以识别实际在互联网上使用的各种TLS客户端实现。我们利用这些数据分析了几种流行的绕过审查工具（包括Lantern、Psiphon、Signal、Outline、Tapdance和Tor）的TLS实现。我们发现，即使这些工具已经努力模仿流行的TLS实现，它们的TLS配置仍然很容易与试图模仿的真实流量区分开来。
> 
> 
> 
> 
> 
> 
> 
> 为了解决这个问题，我们开发了一个名为uTLS的库，它使工具维护人员能够自动模仿其他流行的TLS实现。利用我们的真实流量数据集，我们观察到我们能够正确地模仿许多流行的TLS实现，而且我们描述了我们的工具如何能够以最小的手动工作适应动态的TLS生态系统。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/the-use-of-tls-in-censorship-circumvention/](https://www.ndss-symposium.org/ndss-paper/the-use-of-tls-in-censorship-circumvention/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03B-2-1_Frolov_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03B-2-1_Frolov_paper.pdf)
## On the Challenges of Geographical Avoidance for Tor.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#on-the-challenges-of-geographical-avoidance-for-tor) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#on-the-challenges-of-geographical-avoidance-for-tor)**
### 作者
* Katharina Kohls, Ruhr-University Bochum
* Kai Jansen, Ruhr-University Bochum
* David Rupprecht, Ruhr-University Bochum
* Thorsten Holz, Ruhr-University Bochum
* Christina Pöpper, New York University Abu Dhabi
### 摘要
> 交通分析攻击是Tor用户面临的一种持续威胁。当审查机构或执法机构试图识别用户时，他们进行交通确认攻击，并监视加密传输以提取元数据 - 结合路由攻击，这些攻击足够强大，能够去匿名化用户。虽然交通分析攻击在实践中很难检测和昂贵的针对，但地理避让提供了一个拒绝可能通过不受信任的地区路由的电路的选择。不幸的是，最近提出的解决方案通过不慎的设计决策引入了严重的安全问题。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们从对地理避让的挑战进行了深入评估开始。这些挑战为合理决策的实际传输特性考虑的经验性避免概念的设计提供了基础。此外，我们解决了不可信任或不透明的真实信息问题，这些问题妨碍了对电路的可靠评估。考虑到这些特点，我们进行了一项经验性模拟研究，并将我们的新型避免概念的性能与现有方法进行比较。我们的结果显示，我们的系统在拒绝电路方面比现有系统表现出22％的改善，从而减少了过度限制避免决策的副作用。在第二次评估步骤中，我们扩展了我们最初的系统概念并实现了原型MultilateraTor。这个原型是第一个满足实际部署要求的，并且保持了Tor的原始安全水平，提供了合理的性能，并克服了现有系统的基本安全缺陷。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/on-the-challenges-of-geographical-avoidance-for-tor/](https://www.ndss-symposium.org/ndss-paper/on-the-challenges-of-geographical-avoidance-for-tor/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03B-2-2_Kohls_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_03B-2-2_Kohls_paper.pdf)
## PeriScope: An Effective Probing and Fuzzing Framework for the Hardware-OS Boundary.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#periscope-an-effective-probing-and-fuzzing-framework-for-the-hardware-os-boundary) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#periscope-an-effective-probing-and-fuzzing-framework-for-the-hardware-os-boundary)**
### 作者
* Dokyung Song, University of California
### 摘要
> 操作系统内核是远程攻击者的有吸引力的目标。一旦被入侵，内核将给予对手完全的系统访问权限，包括安装根工具包、提取敏感信息和执行其他恶意操作，同时能够逃避检测。内核的大部分攻击面位于系统调用边界上。持续的内核保护工作主要集中在加固这一边界上；已经开发了几个具有能力的分析和模糊测试框架以实现此目的。
> 
> 
> 
> 
> 
> 
> 
> 然而，还存在着其他不涉及系统调用的内核入侵路径，正如近期的几次攻击所示。例如，通过入侵外设设备的固件，比如Wi-Fi芯片组，并随后从Wi-Fi芯片组向Wi-Fi驱动程序发送恶意输入，攻击者能够在不调用任何系统调用的情况下控制内核。不幸的是，目前还没有实际应用的侦查和模糊测试框架可以帮助开发人员发现和修复沿硬件-操作系统边界发生的此类漏洞。
> 
> 
> 
> 
> 
> 
> 
> 我们提出了PeriScope，一个基于Linux内核的侦查框架，能够进行设备驱动程序交互的精细分析。PeriScope通过挂钩内核的页错误处理机制来 passively 监控和记录设备驱动程序与对应硬件之间的流量，或者使用一个模糊测试组件PeriFuzz在数据流上实时进行数据变异，从而模拟主动的对抗攻击。PeriFuzz准确地模拟了外设设备上攻击者的能力，以暴露不同类别的漏洞，包括但不限于内存破坏漏洞和双重获取漏洞。为了展示外设设备带来的风险以及我们框架的价值，我们在两个流行芯片供应商的Wi-Fi驱动程序上评估了PeriFuzz，在此过程中发现了15个独特的漏洞，其中9个之前不为人知。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/periscope-an-effective-probing-and-fuzzing-framework-for-the-hardware-os-boundary/](https://www.ndss-symposium.org/ndss-paper/periscope-an-effective-probing-and-fuzzing-framework-for-the-hardware-os-boundary/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04A-1_Song_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04A-1_Song_paper.pdf)
## REDQUEEN: Fuzzing with Input-to-State Correspondence.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#redqueen-fuzzing-with-input-to-state-correspondence) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#redqueen-fuzzing-with-input-to-state-correspondence)**
### 作者
* Cornelius Aschermann, Ruhr-Universität Bochum
* Sergej Schumilo, Ruhr-Universität Bochum
* Tim Blazytko, Ruhr-Universität Bochum
* Robert Gawlik, Ruhr-Universität Bochum
* Thorsten Holz, Ruhr-Universität Bochum
### 摘要
> 基于模糊测试的自动化软件测试近年来经历了一次复兴。特别是基于反馈驱动的模糊测试因其能够高效地执行带有有限输入语料库的随机测试而变得广为人知。尽管取得了很多进展，但两个常见的问题是魔术数和（嵌套）校验和。计算昂贵的方法（如污点追踪和符号执行）通常被用于克服这些障碍。不幸的是，这些方法通常需要访问源代码，相当精确地描述环境（例如库调用的行为或底层操作系统）或平台指令集的确切语义。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们介绍了一种轻量级但非常有效的替代方法，用于促进和优化最先进的反馈模糊测试，以便在大型二进制应用程序和未知环境中轻松扩展。我们观察到在给定程序的执行过程中，输入的部分经常直接（即几乎未修改）地出现在程序状态中。这种输入与状态的对应关系可以利用来创建一种强大的方法，以高效有效地克服常见的模糊测试障碍。我们的原型实现名为REDQUEEN，能够自动解决给定二进制可执行文件中的魔术字节和（嵌套）校验和测试。此外，我们还展示了我们的技术在各种目标上（不同特权级别，包括内核空间和用户空间）表现优于各种最先进的工具，而无需平台特定的代码。REDQUEEN是第一种能够在LAVA-M的所有目标中发现超过100%植入错误的方法。此外，我们能够在多个程序和操作系统内核驱动程序中发现65个新错误并获得16个CVE。最后，我们的评估表明REDQUEEN速度快，适用范围广，并且在性能上超过了并发方法多达三个数量级。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/redqueen-fuzzing-with-input-to-state-correspondence/](https://www.ndss-symposium.org/ndss-paper/redqueen-fuzzing-with-input-to-state-correspondence/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04A-2_Aschermann_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04A-2_Aschermann_paper.pdf)
## NAUTILUS: Fishing for Deep Bugs with Grammars.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#nautilus-fishing-for-deep-bugs-with-grammars) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#nautilus-fishing-for-deep-bugs-with-grammars)**
### 作者
* Cornelius Aschermann, Ruhr-Universität Bochum
* Tommaso Frassetto, Technische Universität Darmstadt
* Thorsten Holz, Ruhr-Universität Bochum
* Patrick Jauernig, Technische Universität Darmstadt
* Ahmad-Reza Sadeghi, Technische Universität Darmstadt
* Daniel Teuchert, Ruhr-Universität Bochum
### 摘要
> 模糊测试是一种有效识别程序中错误的方法。然而，当模糊测试针对需要高度结构化输入的目标（如解释器）时，许多模糊测试方法往往无法通过语法检查。具体而言，解释器通常会对输入进行多个阶段的处理：首先进行语法检查，然后进行语义正确性检查。只有在通过这些检查后，解释器才会执行解释代码。这导致模糊测试无法执行“更深”的代码，因此无法发现潜在更有趣的代码。通常，导致目标应用程序中执行不同功能的两个有效输入需要通过简单的基于变异的模糊测试器进行过多的变异才能发现：例如进行位翻转等小的变化通常只会导致解析引擎中的错误路径执行。所谓的语法模糊测试器可以通过使用上下文无关文法来通过语法检查。使用反馈可以显著提高模糊测试引擎的效率。因此，它经常在不使用文法的最新的变异模糊测试器中使用。然而，语法模糊测试器不使用代码覆盖率，也就是说它们不知道任何输入是否触发了新的功能。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们提出了一种名为NAUTILUS的方法，通过结合使用文法和使用代码覆盖率反馈来有效地进行需要高度结构化输入的程序模糊测试。这使我们能够重新组合学习到的有趣输入的方面，并显著增加任何生成的输入被解析器接受的概率。我们实现了一个概念验证的模糊测试器，并在多个目标上进行了测试，包括ChakraCore（Microsoft Edge的JavaScript引擎），PHP，mruby和Lua。NAUTILUS在所有目标中都发现了多个错误：mruby中有七个错误，PHP中有三个错误，ChakraCore中有两个错误，Lua中有一个错误。报告这些错误获得了2600美元的奖励，并分配了6个CVE编号。我们的实验表明，结合上下文无关文法和反馈驱动的模糊测试在代码覆盖率方面显著优于一流的方法，如American Fuzzy Lop（AFL），超过了文法模糊测试器超过两倍的因素。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/nautilus-fishing-for-deep-bugs-with-grammars/](https://www.ndss-symposium.org/ndss-paper/nautilus-fishing-for-deep-bugs-with-grammars/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04A-3_Aschermann_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04A-3_Aschermann_paper.pdf)
## Analyzing Semantic Correctness with Symbolic Execution: A Case Study on PKCS#1 v1.5 Signature Verification.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#analyzing-semantic-correctness-with-symbolic-execution-a-case-study-on-pkcs-1-v1-5-signature-verification) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#analyzing-semantic-correctness-with-symbolic-execution-a-case-study-on-pkcs-1-v1-5-signature-verification)**
### 作者
* Sze Yiu Chau, Purdue University
* Moosa Yahyazadeh, The University of Iowa
* Omar Chowdhury, The University of Iowa
* Aniket Kate, Purdue University
* Ninghui Li, Purdue University
### 摘要
> 我们讨论了符号执行法如何不仅可以发现低级错误，还可以分析协议实现的语义正确性。为了避免手工精心制作测试用例，我们提出了一种元级搜索策略，该策略利用从输入格式中得出的约束来自动生成共同运行的测试用例。此外，为了帮助根本原因分析，我们开发了约束溯源跟踪（CPT）机制，该机制将路径约束的原子子公式与其相应的源级起源关联起来。我们通过对PKCS#1 v1.5签名验证的案例研究展示了符号分析的能力。利用元级搜索和CPT，我们使用符号执行分析了15个最近的开源实现，并在其中发现了6个语义缺陷。对这些缺陷的进一步分析显示，其中4个实现容易受到新型的Bleichenbacher低指数RSA签名伪造的影响。一个实现容易受到故意制作的签名的拒绝服务攻击的影响。我们将所有发现的问题负责任地与受影响的供应商共享。在发现的缺陷中，有6个新的CVE已经分配给了即时可利用的缺陷。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/analyzing-semantic-correctness-with-symbolic-execution-a-case-study-on-pkcs1-v1-5-signature-verification/](https://www.ndss-symposium.org/ndss-paper/analyzing-semantic-correctness-with-symbolic-execution-a-case-study-on-pkcs1-v1-5-signature-verification/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04A-4_Chau_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04A-4_Chau_paper.pdf)
## Send Hardest Problems My Way: Probabilistic Path Prioritization for Hybrid Fuzzing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#send-hardest-problems-my-way-probabilistic-path-prioritization-for-hybrid-fuzzing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#send-hardest-problems-my-way-probabilistic-path-prioritization-for-hybrid-fuzzing)**
### 作者
* Lei Zhao, Wuhan University
* Yue Duan, University of California
### 摘要
> 混合模糊测试是将模糊测试和共同执行相结合的一种先进的软件漏洞检测技术。基于模糊测试和共同执行互补的观察，最先进的混合模糊测试系统采用了“需求启动”和“最优切换”策略。虽然这些想法听起来很有趣，但我们指出其中存在一些基本局限性，因为它们过于简化了假设。因此，我们提出了一种新颖的“区分调度”策略来更好地利用共同执行的能力。我们设计了一种基于蒙特卡洛的概率路径优化模型来量化每个路径的难度，并将其优先考虑进行共同执行。该模型将模糊测试视为一个随机抽样过程，并根据抽样信息计算每个路径的概率。最后，我们的模型将最困难的路径优先分配给共同执行。我们实现了一个原型系统DigFuzz，并使用两个代表性数据集对我们的系统进行评估。结果显示，DigFuzz中的共同执行在每个主要方面都优于最先进的混合模糊测试系统Driller。特别是，在CQE数据集上，DigFuzz中的共同执行发现了更多的漏洞（12个对比5个），并且产生了更多的代码覆盖率（18.9%对比3.8%）比Driller中的共同执行更加显著。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/send-hardest-problems-my-way-probabilistic-path-prioritization-for-hybrid-fuzzing/](https://www.ndss-symposium.org/ndss-paper/send-hardest-problems-my-way-probabilistic-path-prioritization-for-hybrid-fuzzing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04A-5_Zhao_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04A-5_Zhao_paper.pdf)
## Measuring the Facebook Advertising Ecosystem.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#measuring-the-facebook-advertising-ecosystem) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#measuring-the-facebook-advertising-ecosystem)**
### 作者
* Athanasios Andreou, EURECOM
* Márcio Silva, UFMG
* Fabrício Benevenuto, UFMG
* Oana Goga, Univ. Grenoble Alpes
### 摘要
> 在过去几年中，Facebook广告平台因隐私侵犯、缺乏透明度以及被不诚实的行为者用于歧视或宣传等问题而备受争议。在本研究中，我们旨在更好地了解Facebook广告生态系统，重点关注广告商的使用方式。我们首先分析了广告商群体，然后通过该平台调查了这些广告商是如何针对用户并定制广告的。我们的分析基于我们通过浏览器插件收集的超过600名现实用户的数据，该插件会在用户浏览Facebook时间轴时收集其接收到的广告以及用户接收到这些广告的原因的解释。
> 
> 
> 
> 
> 
> 
> 
> 我们的结果显示，用户受到了各种各样广告商的针对（例如，从热门广告商到小众广告商）；相当一部分广告商属于潜在敏感类别，如新闻和政治、健康或宗教；相当多的广告商采用可能具有侵入性或不透明性的定位策略；许多广告商使用各种定位参数和广告文本。总体而言，我们的工作强调了在社交媒体中审计广告和广告商的机制的必要性，并提供了平台使用概述，可以帮助我们朝着这样的机制迈进。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/measuring-the-facebook-advertising-ecosystem/](https://www.ndss-symposium.org/ndss-paper/measuring-the-facebook-advertising-ecosystem/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04B-1_Andreou_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04B-1_Andreou_paper.pdf)
## We Value Your Privacy ... Now Take Some Cookies: Measuring the GDPR's Impact on Web Privacy.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#we-value-your-privacy-now-take-some-cookies-measuring-the-gdprs-impact-on-web-privacy) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#we-value-your-privacy-now-take-some-cookies-measuring-the-gdprs-impact-on-web-privacy)**
### 作者
* Martin Degeling, Ruhr-Universität Bochum
* Christine Utz, Ruhr-Universität Bochum
* Christopher Lentzsch, Ruhr-Universität Bochum
* Henry Hosseini, Ruhr-Universität Bochum
* Florian Schaub, University of Michigan
* Thorsten Holz, Ruhr-Universität Bochum
### 摘要
> 欧洲联盟的《通用数据保护条例》（GDPR）于2018年5月25日生效。它的隐私规定适用于在欧洲收集或处理个人数据的任何服务和公司。许多公司不得不调整其数据处理流程、同意表单和隐私政策，以符合GDPR的透明度要求。我们通过分析欧洲联盟的28个成员国中受欢迎的网站的变化来监测这一罕见事件。对于每个国家，我们定期检查了其最受欢迎的500个网站（总共6,579个），以观察它们在2017年12月至2018年10月之间的隐私政策的存在和更新情况。虽然许多网站已经有了隐私政策，但我们发现在某些国家，高达15.7%的网站在2018年5月25日之前添加了新的隐私政策，导致84.5%的网站具有隐私政策。72.6%的网站已有的隐私政策在该日期附近进行了更新。在此之后，这一积极发展明显放缓。最明显的是，欧洲现在有62.1%的网站展示了Cookie同意通知，比2018年1月增加了16%。这些通知向用户提供有关网站的Cookie使用和用户跟踪方式的信息。我们对所有观察到的Cookie同意通知进行了分类，并对28种常见实现方式进行了评估，评估它们在技术上符合GDPR规定的同意Cookie的实现情况。我们的分析显示，核心网络安全机制（如同源政策）对于根据GDPR规定实现同意存在问题，并且拒绝第三方Cookie要求第三方的合作。总体而言，我们得出结论，GDPR生效后，网络变得更加透明，但用户在互联网上同意或拒绝处理个人数据的功能和可用机制仍然不足。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/we-value-your-privacy-now-take-some-cookies-measuring-the-gdprs-impact-on-web-privacy/](https://www.ndss-symposium.org/ndss-paper/we-value-your-privacy-now-take-some-cookies-measuring-the-gdprs-impact-on-web-privacy/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04B-2_Degeling_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04B-2_Degeling_paper.pdf)
## How Bad Can It Git? Characterizing Secret Leakage in Public GitHub Repositories.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#how-bad-can-it-git-characterizing-secret-leakage-in-public-github-repositories) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#how-bad-can-it-git-characterizing-secret-leakage-in-public-github-repositories)**
### 作者
* Michael Meli, North Carolina State University
* Matthew R. McNiece, Cisco Systems and North Carolina State University
* Bradley Reaves, North Carolina State University
### 摘要
> GitHub和类似的平台已经使得公共协作软件开发变得普遍。然而，当这些公共代码必须管理身份验证密钥（如API密钥或加密密钥）时，会出现问题。为了安全起见，这些密钥必须保密，然而常见的开发实践（如将这些密钥添加到代码中）会导致意外泄露频繁发生。在本文中，我们首次对GitHub上的秘密泄漏进行了大规模和长期的分析。我们使用两种互补的方法收集了数十亿个文件：对实时公共GitHub提交进行近六个月的扫描，以及覆盖13％开源存储库的公共快照。我们主要关注私钥文件和11个具有独特API密钥格式的高影响平台。这个重点使我们能够开发保守的检测技术，我们对其进行了手动和自动评估，以确保准确的结果。我们发现秘密泄漏不仅普遍存在，影响了超过100,000个存储库，而且每天还有数千个新的独特秘密泄露。我们还使用我们的数据探索可能的泄漏根本原因，并评估潜在的缓解策略。该研究表明，公共存储库平台上的秘密泄漏问题猖獗，并远未得到解决，将开发人员和服务置于持续危险之中，易受到威胁和滥用。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/how-bad-can-it-git-characterizing-secret-leakage-in-public-github-repositories/](https://www.ndss-symposium.org/ndss-paper/how-bad-can-it-git-characterizing-secret-leakage-in-public-github-repositories/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04B-3_Meli_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04B-3_Meli_paper.pdf)
## DNS Cache-Based User Tracking.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#dns-cache-based-user-tracking) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#dns-cache-based-user-tracking)**
### 作者
* Amit Klein, Bar Ilan University
* Benny Pinkas, Bar Ilan University
### 摘要
> 我们描述了一种基于为每个用户分配统计独特的DNS记录的新颖用户跟踪技术。这种新的跟踪技术能够区分具有相同硬件和软件的机器，并且即使用户使用“隐私模式”浏览或者在同一台机器上使用多个浏览器，也能追踪到用户。该技术克服了DNS解析器中DNS答案缓存的问题，并利用客户端的设备级DNS答案缓存。我们通过实验证明，该技术涵盖了互联网用户中使用的大部分技术（包括浏览器、操作系统和DNS解析平台）。我们的技术可以追踪用户的行为长达一天（通常为最佳状态），因此最好与其他更窄但寿命更长的技术（如常规cookie）结合使用，我们简要解释了如何结合这些技术。我们提出了对这种跟踪技术的缓解方法，但指出它不容易被缓解。虽然存在可能的解决方法，但这些方法会增加设置成本、性能成本或便利性成本。要完全缓解该问题，需要对浏览器和解析器软件进行软件修改。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/dns-cache-based-user-tracking/](https://www.ndss-symposium.org/ndss-paper/dns-cache-based-user-tracking/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04B-4_Klein_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04B-4_Klein_paper.pdf)
## Quantity vs. Quality: Evaluating User Interest Profiles Using Ad Preference Managers.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#quantity-vs-quality-evaluating-user-interest-profiles-using-ad-preference-managers) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#quantity-vs-quality-evaluating-user-interest-profiles-using-ad-preference-managers)**
### 作者
* Muhammad Ahmad Bashir, Northeastern University
* Umar Farooq, LUMS Pakistan
* Maryam Shahid, LUMS Pakistan
* Muhammad Fareed Zaffar, LUMS Pakistan
* Christo Wilson, Northeastern University
### 摘要
> 广告平台（例如Facebook）广为报道的隐私问题引起了用户对于收集他们数据的关注。然而，尽管我们对于谁收集用户数据以及追踪如何实施有着全面的了解，但是我们的理解仍存在一个重大差距：广告商实际上对用户推理出了什么信息，而这些信息是否准确？
> 
> 
> 
> 
> 
> 
> 
> 在这项研究中，我们利用广告偏好管理器（APMs）来填补这个差距。APMs是一些广告平台提供的透明度工具，允许用户查看关于他们的兴趣档案。我们招募了220名参与者安装一个经IRB批准的浏览器扩展程序，从四个APMs（谷歌、Facebook、Oracle BlueKai和Neilsen eXelate）收集他们的兴趣档案，同时收集行为和调查数据。我们利用这些数据分析兴趣档案的大小和正确性，比较四个平台上的构成，并调查构成这些档案的数据来源。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/quantity-vs-quality-evaluating-user-interest-profiles-using-ad-preference-managers/](https://www.ndss-symposium.org/ndss-paper/quantity-vs-quality-evaluating-user-interest-profiles-using-ad-preference-managers/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04B-5_Bashir_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04B-5_Bashir_paper.pdf)
## Thunderclap: Exploring Vulnerabilities in Operating System IOMMU Protection via DMA from Untrustworthy Peripherals.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#thunderclap-exploring-vulnerabilities-in-operating-system-iommu-protection-via-dma-from-untrustworthy-peripherals) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#thunderclap-exploring-vulnerabilities-in-operating-system-iommu-protection-via-dma-from-untrustworthy-peripherals)**
### 作者
* A. Theodore Markettos, University of Cambridge
* Colin Rothwell, University of Cambridge
* Brett F. Gutstein, Rice University
* Allison Pearce, University of Cambridge
* Peter G. Neumann, SRI International
* Simon W. Moore, University of Cambridge
* Robert N. M. Watson, University of Cambridge
### 摘要
> 许多年来，直接内存访问（DMA）攻击一直被人们所知：启用DMA的I/O外设具有完全访问计算机状态的能力，并且可以完全破坏计算机，包括读写系统内存。
> 
> 
> 
> 
> 
> 
> 
> 随着Thunderbolt 3和智能内部设备的普及，这些攻击的机会大大增加，仅需要几秒钟的物理访问时间就可以轻松执行。为了应对这一情况，通用硬件和操作系统供应商已经纳入了对输入输出内存管理单元（IOMMU）的支持，这在很大程度上被认为可以保护免受DMA攻击。
> 
> 
> 
> 
> 
> 
> 
> 我们使用一种新颖的I/O安全研究平台，调查了各种操作系统上的IOMMU保护状况，并发现当前的保护措施在面对一个使用其与操作系统之间复杂交互进行恶意行为的网络外设时存在缺陷，分别对macOS、FreeBSD和Linux进行了妥协，尽管这些系统理论上利用IOMMU来保护免受DMA攻击，但Windows仅在有限的情况下使用IOMMU，并仍然容易受到攻击。
> 
> 
> 
> 
> 
> 
> 
> 我们利用我们构建的开源FPGA研究平台Thunderclap，探索了一系列新颖的攻击技术，以揭示新的操作系统漏洞类别。IOMMU暴露给DMA启用外设的共享内存的复杂漏洞空间使攻击者能够在几秒钟内使用USB-C投影仪或电源适配器等设备，提取私密数据（嗅探明文VPN流量）并劫持内核控制流程（启动root shell）。
> 
> 
> 
> 
> 
> 
> 
> 我们与操作系统供应商密切合作，修复了这些漏洞类别，并且他们已经通过我们的工作推出了实质性的功能改进和缓解措施。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/thunderclap-exploring-vulnerabilities-in-operating-system-iommu-protection-via-dma-from-untrustworthy-peripherals/](https://www.ndss-symposium.org/ndss-paper/thunderclap-exploring-vulnerabilities-in-operating-system-iommu-protection-via-dma-from-untrustworthy-peripherals/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05A-1_Markettos_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05A-1_Markettos_paper.pdf)
## One Engine To Serve 'em All: Inferring Taint Rules Without Architectural Semantics.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#one-engine-to-serve-em-all-inferring-taint-rules-without-architectural-semantics) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#one-engine-to-serve-em-all-inferring-taint-rules-without-architectural-semantics)**
### 作者
* Zheng Leong Chua, National University of Singapore
* Yanhao Wang, TCA/SKLCS
### 摘要
> 动态二进制污点分析在商用二进制文件的安全分析中具有广泛的应用。动态二进制分析的一个关键挑战是指定污点规则，以捕捉每个体系结构上的指令如何传播污点信息。大多数现有解决方案使用演绎方法来指定污点规则，即在分析指令语义后手动总结规则。直观上，污点传播反映了指令输入如何影响其输出，因此可以从指令执行中观察到。在这项工作中，我们提出了一种归纳方法用于污点传播，并开发了一种与体系结构无关的通用污点跟踪引擎。我们的污点引擎TAINTINDUCE可以通过观察指令的执行行为来学习污点规则，而不需要太多体系结构知识。为了衡量其正确性并指导污点规则生成，我们在这个新颖的设置中定义了位级污点跟踪准确性的准确概念。在我们的评估中，我们展示了TAINTINDUCE对于4种广泛使用的体系结构（x86、x64、AArch64和MIPS-I）自动学习规则的能力。它可以在Linux和Windows上的数百万条指令中检测到15个应用程序中的24个CVE漏洞，并与其他成熟的现有工具（TEMU [51]、libdft [32]、Triton [42]）相媲美。TAINTINDUCE可以作为独立的污点引擎使用，也可以用来补充现有的污点引擎处理不可处理的指令。此外，它还可以作为交叉引用工具，用于发现污点引擎、仿真实现和ISA文档中的错误。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/one-engine-to-serve-em-all-inferring-taint-rules-without-architectural-semantics/](https://www.ndss-symposium.org/ndss-paper/one-engine-to-serve-em-all-inferring-taint-rules-without-architectural-semantics/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05A-2_Chua_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05A-2_Chua_paper.pdf)
## Automating Patching of Vulnerable Open-Source Software Versions in Application Binaries.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#automating-patching-of-vulnerable-open-source-software-versions-in-application-binaries) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#automating-patching-of-vulnerable-open-source-software-versions-in-application-binaries)**
### 作者
* Ruian Duan, Georgia Institute of Technology
* Ashish Bijlani, Georgia Institute of Technology
* Yang Ji, Georgia Institute of Technology
* Omar Alrawi, Georgia Institute of Technology
* Yiyuan Xiong, Peking University
* Moses Ike, Georgia Institute of Technology
* Brendan Saltaformaggio, Georgia Institute of Technology
* Wenke Lee, Georgia Institute of Technology
### 摘要
> 移动应用程序开发人员在很大程度上依赖开源软件（OSS）来卸载常见功能，例如协议的实现和媒体格式的播放。过去几年中，在流行的开源库（如OpenSSL和FFmpeg）中发现了一些漏洞。包含这些库的移动应用程序继承了这些缺陷，使其易受攻击。幸运的是，开源社区反应迅速，很快提供了补丁。然而，移动应用程序开发人员通常对这些缺陷毫不知情。谷歌的应用程序安全改进计划（ASIP）是一个值得称赞的努力，旨在通知应用程序开发人员有关这些缺陷，但最近的研究表明许多开发人员并未采取行动。
> 
> 
> 
> 
> 
> 
> 
> 我们的研究通过使用OSS维护者提供的源代码补丁进行自动二进制修补来解决易受攻击的移动应用程序问题，而不涉及开发人员。我们提出了新的技术来克服诸如修补可行性分析、源代码到二进制代码匹配和内存中修补等困难挑战。我们的技术使用一种新颖的可变性感知方法，我们将其实现为OSSPatcher。我们使用39个OSS和1,000个Android应用程序的易受攻击版本对OSSPatcher进行了评估。OSSPatcher生成了675个函数级补丁，修复了受影响的移动应用程序而不破坏其二进制代码。此外，我们评估了一些流行应用程序（如Chrome）中的10个漏洞，并使用OSSPatcher成功减轻了它们的利用和阻止了攻击。
> 
> 
> 
> 
> 
> 
> 
> Note: The translation provided is a simplified version and may not accurately capture all nuances and technical terms from the original text.

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/automating-patching-of-vulnerable-open-source-software-versions-in-application-binaries/](https://www.ndss-symposium.org/ndss-paper/automating-patching-of-vulnerable-open-source-software-versions-in-application-binaries/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05A-3_Duan_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05A-3_Duan_paper.pdf)
## CRCount: Pointer Invalidation with Reference Counting to Mitigate Use-after-free in Legacy C/C++.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#crcount-pointer-invalidation-with-reference-counting-to-mitigate-use-after-free-in-legacy-c-c) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#crcount-pointer-invalidation-with-reference-counting-to-mitigate-use-after-free-in-legacy-c-c)**
### 作者
* Jangseop Shin, Seoul National University and Inter-University Semiconductor Research Center
* Donghyun Kwon, Seoul National University and Inter-University Semiconductor Research Center
* Jiwon Seo, Seoul National University and Inter-University Semiconductor Research Center
* Yeongpil Cho, Soongsil University
* Yunheung Paek, Seoul National University and Inter-University Semiconductor Research Center
### 摘要
> 指针失效是许多最近的研究中采用的一种流行方法，用以减轻使用释放后错误。这种方法可以大致分为两种不同的方案：显式失效和隐式失效。前者旨在通过显式地逐个使每个悬空指针失效来消除使用释放后错误的根本原因。相反，后者旨在仅当没有指向它的指针时才释放对象，以防止悬空指针。显式方案的一个缺点是昂贵，因为它需要高成本的算法或大量的空间来始终维护每个对象的指针位置链表的最新列表。隐式失效更加高效，即使没有任何显式努力，它也可以通过在程序执行期间自动消除对象和它们引用的指针之间的所有链接来消除悬空指针。但是，这样的论点只有在该方案确切地知道每个链接何时创建和删除时才成立。引用计数是确定对象和指针之间引用链接存在的传统方法。不幸的是，对于遗留的C/C++代码来说，完美的引用计数在实践中非常难以实现，并且非常昂贵，主要是因为代码中的类型不安全操作。在本文中，我们提出了一个解决方案，称为CRCount，用于解决遗留的C/C++代码中的使用释放后问题。为了有效和高效地解决问题，CRCount配备了指针追踪技术，使我们能够计算出遗留代码中每个指针所引用的每个对象的引用计数，且准确性很高。我们的实验证明，与现有的指针失效解决方案相比，CRCount在性能和空间开销方面减轻了使用释放后错误。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/crcount-pointer-invalidation-with-reference-counting-to-mitigate-use-after-free-in-legacy-c-c/](https://www.ndss-symposium.org/ndss-paper/crcount-pointer-invalidation-with-reference-counting-to-mitigate-use-after-free-in-legacy-c-c/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05A-4_Shin_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05A-4_Shin_paper.pdf)
## CodeAlchemist: Semantics-Aware Code Generation to Find Vulnerabilities in JavaScript Engines.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#codealchemist-semantics-aware-code-generation-to-find-vulnerabilities-in-javascript-engines) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#codealchemist-semantics-aware-code-generation-to-find-vulnerabilities-in-javascript-engines)**
### 作者
* HyungSeok Han, KAIST
* DongHyeon Oh, KAIST
* Sang Kil Cha, KAIST
### 摘要
> JavaScript引擎由于其流行度和灵活性在构建漏洞利用方面成为攻击者的有吸引力的目标。当前最先进的用于发现JavaScript引擎漏洞的模糊测试工具主要侧重于基于预定义的无上下文语法或经过训练的概率语言模型生成语法正确的测试用例。不幸的是，语法上正确的JavaScript语句往往在运行时语义上是无效的。此外，由于JavaScript代码的动态性，静态分析JavaScript代码的语义是具有挑战性的：JavaScript代码在运行时生成，并且JavaScript表达式具有动态类型。为了解决这个挑战，我们提出了一种新颖的测试用例生成算法，我们称之为语义感知汇编，并在一个称为CodeAlchemist的模糊测试工具中实现了它。我们的工具可以生成既语义上正确又语法上正确的任意JavaScript代码片段，并且能够有效地生成能够使JavaScript引擎崩溃的测试用例。我们使用CodeAlchemist发现了最新的JavaScript引擎中的大量漏洞，并向供应商报告了这些漏洞。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/codealchemist-semantics-aware-code-generation-to-find-vulnerabilities-in-javascript-engines/](https://www.ndss-symposium.org/ndss-paper/codealchemist-semantics-aware-code-generation-to-find-vulnerabilities-in-javascript-engines/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05A-5_Han_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05A-5_Han_paper.pdf)
## Oligo-Snoop: A Non-Invasive Side Channel Attack Against DNA Synthesis Machines.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#oligo-snoop-a-non-invasive-side-channel-attack-against-dna-synthesis-machines) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#oligo-snoop-a-non-invasive-side-channel-attack-against-dna-synthesis-machines)**
### 作者
* Sina Faezi, University of California
### 摘要
> 合成生物学正逐渐发展成为一门有前景的科学和工程领域。其中一项对该领域具有推动作用的技术是DNA合成器。它能够让研究人员使用腺嘌呤（A）、鸟嘌呤（G）、胞嘧啶（C）和胸腺嘧啶（T）这四种核碱基，定制构建寡核苷酸序列（短DNA链）。将这些序列整合到生物体中可以提高植物、动物和人类的抗病能力和寿命。因此，许多实验室都在投入大量资金进行研究和开发独特的寡核苷酸序列。然而，这些DNA合成器是完全自动化的系统，包含了网络环境和物理组件。因此，它们可能像其他计算系统一样容易受到安全漏洞的攻击。在我们的工作中，我们提出了一种新颖的声学侧信道攻击方法，可以用于攻破DNA合成器的机密性并窃取有价值的寡核苷酸序列。我们提出的攻击方法在预测每个碱基方面平均准确率达到了88.07%，并且只需在$4^{15}$个可能性中猜测不到21次就能以100%的准确率重建短序列。我们评估了我们的攻击方法对麦克风距离DNA合成器的影响，并展示了我们的攻击方法在麦克风离DNA合成器0.7米的情况下，即使存在常见的房间噪声，也能够达到80%以上的准确率。此外，我们重构了DNA序列，展示了具备生物医学领域知识的攻击者可以如何有效地利用提出的攻击方法推导出序列的预期功能。据我们所知，这是首次提出可能对用于合成DNA分子的系统进行此类攻击的方法。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/oligo-snoop-a-non-invasive-side-channel-attack-against-dna-synthesis-machines/](https://www.ndss-symposium.org/ndss-paper/oligo-snoop-a-non-invasive-side-channel-attack-against-dna-synthesis-machines/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05B-1_Faezi_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05B-1_Faezi_paper.pdf)
## Profit: Detecting and Quantifying Side Channels in Networked Applications.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#profit-detecting-and-quantifying-side-channels-in-networked-applications) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#profit-detecting-and-quantifying-side-channels-in-networked-applications)**
### 作者
* Nicolás Rosner, University of California
### 摘要
> 我们提出了一种黑盒、动态技术，用于检测和量化通过TLS加密流进行通信的网络应用中的侧信道信息泄漏。给定用户提供的输入配置套件，其中一些输入的某些方面被标记为机密，我们在这些输入上运行应用程序并捕获一系列可变长度的网络数据包追踪。捕获的追踪产生了一个庞大的侧信道特征空间，包括每个单独数据包的大小和时间戳，以及它们在每个可能的数据包子集上的聚合（如总时间、中位数大小等）。找到泄漏最多信息的特征是一个困难的问题。
> 
> 
> 
> 
> 
> 
> 
> 我们的方法通过三个步骤来解决这个问题：1）对追踪进行全局分析，对其进行对齐和识别跨追踪的“阶段”；2）使用识别出的阶段进行特征提取；3）通过概率分布估计对信息泄漏进行量化和特征排序。
> 
> 
> 
> 
> 
> 
> 
> 我们在一个名为Profit的工具中具体应用了这种方法，并在DARPA STAC项目的一组应用程序基准上进行了实验评估，这些应用程序旨在评估侧信道分析技术的有效性。我们的实验结果表明，给定适当的配置输入套件，Profit能够成功自动检测应用程序中的信息泄漏特征，并正确对不同泄漏变体的泄漏强度进行排序。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/profit-detecting-and-quantifying-side-channels-in-networked-applications/](https://www.ndss-symposium.org/ndss-paper/profit-detecting-and-quantifying-side-channels-in-networked-applications/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05B-2_Rosner_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05B-2_Rosner_paper.pdf)
## Unveiling your keystrokes: A Cache-based Side-channel Attack on Graphics Libraries.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#unveiling-your-keystrokes-a-cache-based-side-channel-attack-on-graphics-libraries) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#unveiling-your-keystrokes-a-cache-based-side-channel-attack-on-graphics-libraries)**
### 作者
* Daimeng Wang, University of California Riverside
* Ajaya Neupane, University of California Riverside
* Zhiyun Qian, University of California Riverside
* Nael Abu-Ghazaleh, University of California Riverside
* Srikanth V. Krishnamurthy, University of California Riverside
* Edward J. M. Colbert, Virginia Tech
* Paul Yu, U.S. Army Research Lab 
### 摘要
> 操作系统使用共享内存来提高性能。然而，最近的研究表明，攻击者可以利用与共享内存相关的CPU缓存侧信道来提取敏感信息。以前尝试的攻击通常只能检测到某种操作的存在，并需要进行大量手动分析来确定和评估其有效性。此外，很少有攻击目标是常用但难以攻击的图形库。在本文中，我们将共享库的执行时间视为侧信道，并展示了一种完全自动化的技术，用于发现和选择可利用的共享图形库侧信道。实质上，我们首先在离线状态下收集受害进程在不同按键期间访问的缓存行，然后使用机器学习来推断最佳的缓存行（例如，易于测量、对噪声具有鲁棒性、信息泄漏程度高）以进行冲刷和重新加载攻击。我们能够发现有效的策略来分类按下了哪些按键。使用这种方法，我们不仅消除了对代码和追踪的手动分析的需求 - 自动化系统发现了许多先前未知的我们感兴趣的类型的侧信道，而且在推断在桌面和Android平台上输入的敏感信息方面具有高精确度。我们展示了我们的方法比随机猜测要快10000-1000000倍推测密码的小写字母和数字。对于由4到6位数字组成的大部分PIN码，我们能够在20到80次猜测内推断出来。最后，我们提出了缓解这些攻击的方法。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/unveiling-your-keystrokes-a-cache-based-side-channel-attack-on-graphics-libraries/](https://www.ndss-symposium.org/ndss-paper/unveiling-your-keystrokes-a-cache-based-side-channel-attack-on-graphics-libraries/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05B-3_Wang_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05B-3_Wang_paper.pdf)
## Data Oblivious ISA Extensions for Side Channel-Resistant and High Performance Computing.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#data-oblivious-isa-extensions-for-side-channel-resistant-and-high-performance-computing) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#data-oblivious-isa-extensions-for-side-channel-resistant-and-high-performance-computing)**
### 作者
* Jiyong Yu, UIUC
* Lucas Hsiung, UIUC
* Mohamad El'Hajj, UIUC
* Christopher W. Fletcher, UIUC
### 摘要
> 阻止微体系结构（数字）侧信道是当今硬件安全领域最紧迫的挑战之一。最近，人们开始积极努力通过编写程序在数据上校消的方式来阻止这些泄漏。在这个模型中，程序的编写方式旨在避免对共享资源施加敏感数据相关的压力。然而，尽管最近有很多工作，但在现代计算机上运行数据消隐程序仍然存在安全和性能方面的问题。首先，编写程序消隐地假设当今的指令集架构（ISA）不会泄漏隐私，然而当今的ISA和硬件并没有提供这样的保证。其次，以避免数据相关行为的方式编写程序会带来高性能的开销。
> 
> 
> 
> 
> 
> 
> 
> 本文通过提出一种数据消隐ISA扩展（OISA）来解决这个问题的安全性和性能方面。在安全性方面，我们提出了阻止微体系结构侧信道的ISA设计原则，并将这些思想具体化为一个能够安全执行现有数据消隐程序的ISA。在性能方面，我们设计了支持高效内存消隐计算的OISA，并具有允许现代硬件优化（例如乱序推测执行）在普通情况下保持启用的安全特性。
> 
> 
> 
> 
> 
> 
> 
> 我们提供了一个完整的硬件原型，构建在RISC-V乱序推测BOOM处理器之上，并通过对一个抽象BOOM式机器的形式分析证明了OISA能够提供所宣称的安全性。我们评估了支持我们原型所需的硬件机制的面积开销，并提供了性能实验，显示OISA如何加速各种现有的数据消隐代码（包括“常数时间”密码学和内存消隐数据结构），并提高其安全性和可移植性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/data-oblivious-isa-extensions-for-side-channel-resistant-and-high-performance-computing/](https://www.ndss-symposium.org/ndss-paper/data-oblivious-isa-extensions-for-side-channel-resistant-and-high-performance-computing/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05B-4_Yu_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05B-4_Yu_paper.pdf)
## Privacy Attacks to the 4G and 5G Cellular Paging Protocols Using Side Channel Information.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#privacy-attacks-to-the-4g-and-5g-cellular-paging-protocols-using-side-channel-information) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#privacy-attacks-to-the-4g-and-5g-cellular-paging-protocols-using-side-channel-information)**
### 作者
* Syed Rafiul Hussain, Purdue University
* Mitziu Echeverria, University of Iowa
* Omar Chowdhury, University of Iowa
* Ninghui Li, Purdue University
* Elisa Bertino, Purdue University
### 摘要
> 蜂窝寻呼（广播）协议旨在通过允许设备在闲置、低功耗状态下 *仅仅* 周期性地查询待处理服务，以在细节服务质量和能量消耗之间达到平衡。对于给定的蜂窝设备和服务网络，设备查询服务的确切时间段（称为“寻呼时刻”）在4G/5G蜂窝协议中通过设计确定。在本文中，我们展示了暴露固定寻呼时刻的特定性，使得攻击者可以以较低的成本在受害者附近将受害者的软标识（例如电话号码、Twitter账号）与其寻呼时刻关联起来，形成一种名为$mathsf{ToRPEDO}$的攻击。因此，$mathsf{ToRPEDO}$可以使攻击者验证受害者的粗粒度位置信息，注入虚假的寻呼消息，并实施拒绝服务攻击。我们还证明，在4G和5G中，攻击者可以通过用$mathsf{ToRPEDO}$作为攻击子步骤的暴力破解$mathsf{IMSI-Cracking}$攻击，从而检索到受害者设备的持久标识（即IMSI）。我们进一步调查了4G寻呼协议部署中的一个“实现疏忽”，发现了几个网络供应商的漏洞，使得攻击者能够发起一种名为$mathsf{PIERCER}$的攻击，将受害者的电话号码与其IMSI关联起来，进而实现目标用户的位置追踪。我们的所有攻击都经过了实际硬件和软件的验证和评估。最后，我们讨论了对抗这些攻击的潜在对策。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/privacy-attacks-to-the-4g-and-5g-cellular-paging-protocols-using-side-channel-information/](https://www.ndss-symposium.org/ndss-paper/privacy-attacks-to-the-4g-and-5g-cellular-paging-protocols-using-side-channel-information/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05B-5_Hussain_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_05B-5_Hussain_paper.pdf)
## Coconut: Threshold Issuance Selective Disclosure Credentials with Applications to Distributed Ledgers.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#coconut-threshold-issuance-selective-disclosure-credentials-with-applications-to-distributed-ledgers) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#coconut-threshold-issuance-selective-disclosure-credentials-with-applications-to-distributed-ledgers)**
### 作者
* Alberto Sonnino, University College London 
* Mustafa Al-Bassam, University College London 
* Shehar Bano, University College London 
* Sarah Meiklejohn, University College London 
* George Danezis, University College London 
### 摘要
> 椰子是一种新颖的选择性披露凭证方案，支持分布式阈值发行、公开和私密属性、重新随机化以及多个不可链接的选择性属性披露。椰子与区块链集成，即使部分凭证颁发机构是恶意的或离线的，仍可以确保机密性、真实性和可用性。我们实现并评估了适用于Chainspace和以太坊的通用椰子智能合约库，并提出了与匿名支付、电子请愿和分发用于抵抗审查的代理相关的三个应用。椰子使用短且计算效率高的凭证，我们的评估结果显示，大多数椰子密码学原语平均只需几毫秒，其中验证所需时间最长（10毫秒）。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/coconut-threshold-issuance-selective-disclosure-credentials-with-applications-to-distributed-ledgers/](https://www.ndss-symposium.org/ndss-paper/coconut-threshold-issuance-selective-disclosure-credentials-with-applications-to-distributed-ledgers/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06A-1_Sonnino_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06A-1_Sonnino_paper.pdf)
## Distinguishing Attacks from Legitimate Authentication Traffic at Scale.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#distinguishing-attacks-from-legitimate-authentication-traffic-at-scale) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#distinguishing-attacks-from-legitimate-authentication-traffic-at-scale)**
### 作者
* Cormac Herley, Microsoft
* Stuart Schechter, Unaffiliated
### 摘要
> 在线密码服务器的猜测攻击很难应对。对于账户上的重复猜测，限制或阻止猜测次数（例如，三次错误尝试的锁定规则）可以有效抵御深度优先攻击，但对于广度优先攻击，效果甚微，因为广度优先攻击通过广泛猜测可以发送数百万甚至数十亿次猜测而不会触发深度优先防御机制。攻击流量的无标签和非定态性使得应用机器学习技术变得具有挑战性。
> 
> 
> 
> 
> 
> 
> 
> 我们展示了如何准确估计与请求相关的观察值$x$是恶意的几率。我们的主要假设是成功的恶意登录是总体的一小部分，并且合法流量中$x$的分布是定态的或者变化非常缓慢的。基于这些假设，我们展示了如何估计任何一组请求中恶意流量和良性流量的比例；如何识别包含最少（甚至没有）攻击流量的请求数据子集；这些受攻击最少的子集如何使我们能够估计合法数据中$x$值的分布，从而计算几率比值。敏感性分析表明，即使我们未能识别出少量攻击流量的子集，我们的几率比值估计仍然非常稳健。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/distinguishing-attacks-from-legitimate-authentication-traffic-at-scale/](https://www.ndss-symposium.org/ndss-paper/distinguishing-attacks-from-legitimate-authentication-traffic-at-scale/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06A-2_Herley_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06A-2_Herley_paper.pdf)
## Robust Performance Metrics for Authentication Systems.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#robust-performance-metrics-for-authentication-systems) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#robust-performance-metrics-for-authentication-systems)**
### 作者
* Shridatt Sugrim, Rutgers University
* Can Liu, Rutgers University
* Meghan McLean, Rutgers University
* Janne Lindqvist, Rutgers University
### 摘要
> 研究已经提出了许多使用机器学习的认证系统。然而，目前还没有一致的方法来报告性能指标，而且报告的指标是不充分的。在这项工作中，我们展示了一些用于报告性能的常见指标，例如最大准确率（ACC）、等错误率（EER）和受试者工作特征曲线下面积（AUROC）存在固有的缺陷。这些常见指标隐藏了系统实施时必须进行的固有权衡的细节。我们的研究结果表明，当前的指标无法了解系统在设计时理想条件之外的性能退化情况。我们认为，必须提供充分的性能报告以实现有意义的评估，而目前常用的方法在这方面存在缺陷。我们提出了未标准化频率计数（FCS）以展示导致这些缺陷的数学基础，并展示如何避免这些缺陷。FCS可用于增强性能报告，以便以视觉方式比较不同系统。当与接收器操作特征曲线（ROC）一起报告时，这两个指标解决了目前报告的指标的限制。最后，我们展示如何使用FCS和ROC指标来评估和比较不同的认证系统。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/robust-performance-metrics-for-authentication-systems/](https://www.ndss-symposium.org/ndss-paper/robust-performance-metrics-for-authentication-systems/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06A-3_Sugrim_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06A-3_Sugrim_paper.pdf)
## Total Recall: Persistence of Passwords in Android.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#total-recall-persistence-of-passwords-in-android) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#total-recall-persistence-of-passwords-in-android)**
### 作者
* Jaeho Lee, Rice University
* Ang Chen, Rice University
* Dan S. Wallach, Rice University
### 摘要
> 处理敏感数据（如密码）的一种良好安全实践是在数据不再使用时用零覆盖数据缓冲区。这可以防止攻击者通过人员在场的物理攻击或类似熔毁和幽灵漏洞的远程攻击来获得设备物理内存的快照。本文研究了流行应用程序、安全密码管理应用程序甚至锁屏系统进程在安卓手机中不必要地保留密码。我们对安卓框架和各种应用程序进行了全面分析，发现密码可以存留在各种位置，包括用户输入密码的UI小部件、保留密码而不是交换令牌的应用程序、垃圾回收器尚未重用的旧副本以及键盘应用程序中的缓冲区。我们已经开发了能够通过适度的代码更改成功解决这些问题的解决方案。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/total-recall-persistence-of-passwords-in-android/](https://www.ndss-symposium.org/ndss-paper/total-recall-persistence-of-passwords-in-android/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06A-4_Lee_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06A-4_Lee_paper.pdf)
## How to End Password Reuse on the Web.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#how-to-end-password-reuse-on-the-web) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#how-to-end-password-reuse-on-the-web)**
### 作者
* Ke Coby Wang, UNC Chapel Hill
* Michael K. Reiter, UNC Chapel Hill
### 摘要
> 我们提出了一个框架，通过该框架，网站可以协调行动，使用户在这些网站上设置类似的密码变得困难，以打破当今网络上重复使用密码的文化。虽然这样一个框架的设计对用户的安全和隐私存在风险，但我们展示了通过对这样一个框架的目标进行仔细限定和合理设计可以有效地减轻这些风险。我们框架的核心是一个私有的集合成员测试协议，使得一个网站能够判断用户在该网站上设置密码时是否已经在另一个参与的网站上设置了相似的密码，但双方在协议中都不会透露彼此使用的密码。然后，我们在这个协议上添加了一系列技术来减少这种测试所导致的信息泄漏。我们通过概率模型检验验证了这些技术在保持账户安全方面的有效性，并且由于这些机制与当前常见的用户体验一致，我们的框架对于不在网站之间重复使用类似密码的用户（例如使用密码管理器的用户）来说应该是不引人注目的。通过我们框架的工作实现和基于对密码重复使用趋势的洞察优化其参数，我们展示了我们的设计能够满足这种服务面临的可扩展性挑战。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/how-to-end-password-reuse-on-the-web/](https://www.ndss-symposium.org/ndss-paper/how-to-end-password-reuse-on-the-web/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06A-5_Wang_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06A-5_Wang_paper.pdf)
## Component-Based Formal Analysis of 5G-AKA: Channel Assumptions and Session Confusion.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#component-based-formal-analysis-of-5g-aka-channel-assumptions-and-session-confusion) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#component-based-formal-analysis-of-5g-aka-channel-assumptions-and-session-confusion)**
### 作者
* Cas Cremers, CISPA Helmholtz Center for Information Security
* Martin Dehnel-Wild, University of Oxford
### 摘要
> 5G移动通信标准正在接近完成阶段，一旦采用，将被全球数十亿人使用。确保5G通信的安全性非常重要，建立起对日常生活和国家基础设施的关键组成部分的信任。
> 
> 
> 
> 
> 
> 
> 
> 我们对5G的主要身份验证和密钥协议（5G-AKA）进行了细粒度的形式化分析，并提供了首个明确考虑协议规范所定义的所有各方的模型。我们的形式化分析揭示了5G-AKA的安全性在很大程度上依赖于底层通道内部工作方式的未明确说明的假设。实际上，这意味着遵循5G-AKA规范，供应商可以轻松而“正确地”不安全地实现标准，使协议容易受到安全关键的竞争条件的攻击。然后，我们提供了首个考虑5G中组件和信道妥协的模型和分析，结果进一步展示了5G-AKA协议的脆弱性和微妙的信任假设。
> 
> 
> 
> 
> 
> 
> 
> 我们提出了经过正式验证的修复方案，并与3GPP合作确保这些修复方案得到采纳。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/component-based-formal-analysis-of-5g-aka-channel-assumptions-and-session-confusion/](https://www.ndss-symposium.org/ndss-paper/component-based-formal-analysis-of-5g-aka-channel-assumptions-and-session-confusion/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06B-1_Cremers_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06B-1_Cremers_paper.pdf)
## UWB with Pulse Reordering: Securing Ranging against Relay and Physical-Layer Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#uwb-with-pulse-reordering-securing-ranging-against-relay-and-physical-layer-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#uwb-with-pulse-reordering-securing-ranging-against-relay-and-physical-layer-attacks)**
### 作者
* Mridula Singh, ETH Zurich
### 摘要
> 物理层攻击允许攻击者操纵（伪造）测距和定位。这些攻击对现实世界产生了影响，允许汽车盗窃、未经授权的付款执行和导航操纵。UWB脉冲无线电，在802.15.4a、f标准化中得到应用，已成为一种用于精确测距的突出技术，即使在有功率限制的情况下，也能通过传输多脉冲符号实现较远的操作距离。关于UWB测距的安全性（攻击者操纵测量距离的能力）在文献中已有讨论，并且最近也作为新兴的802.15.4z标准的一部分进行了处理。然而，到目前为止的所有研究以及在这一新兴标准中提出的安全增强措施都面临着一个主要限制：它们通过短符号长度来实现安全性并牺牲性能（即限制测量的最大距离），或者使用较长的符号长度，从而牺牲安全性。我们提出了脉冲重新排序的UWB（UWB-PR），这是一种首个调制方案，可以在两个相互信任的设备之间保护距离测量免受所有物理层缩短攻击而不牺牲性能，从而同时实现扩展范围和安全性。我们在完全控制通信通道的攻击者下分析了UWB-PR的安全性，并显示UWB-PR可以抵抗这类强大的攻击者。我们在基于IEEE 802.15.4设备的UWB系统中评估了UWB-PR，并显示它可以实现最高93米的10厘米精度（视距）。因此，UWB-PR是新的802.15.4z低速率脉冲标准的扩展模式的一个很好的选择。最后，UWB-PR表明可以在具有较长符号长度的调制方案上构建安全的距离测量-迄今为止，这被认为是不安全的。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/uwb-with-pulse-reordering-securing-ranging-against-relay-and-physical-layer-attacks/](https://www.ndss-symposium.org/ndss-paper/uwb-with-pulse-reordering-securing-ranging-against-relay-and-physical-layer-attacks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06B-2_Singh_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06B-2_Singh_paper.pdf)
## Nearby Threats: Reversing, Analyzing, and Attacking Google's 'Nearby Connections' on Android.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#nearby-threats-reversing-analyzing-and-attacking-googles-nearby-connections-on-android) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#nearby-threats-reversing-analyzing-and-attacking-googles-nearby-connections-on-android)**
### 作者
* Daniele Antonioli, Singapore University of Technology and Design 
* Nils Ole Tippenhauer, CISPA
* Kasper Rasmussen, University of Oxford
### 摘要
> Google的Nearby Connections API使任何Android（和Android Things）应用都能为用户提供基于接近度的服务，而不受其网络连接的影响。该API使用蓝牙BR/EDR、蓝牙LE和Wi-Fi来让“附近的”客户端（发现者）和服务器（广告者）连接并交换不同类型的有效负载。该API的实现是专有的、闭源的和混淆的。API的更新由Google自动安装在Android的不同版本上，无需用户交互。尽管它存在重大的攻击面，但公开对于API提供的安全保证的了解很少。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们基于对其Android实现的反向工程，首次对Google的Nearby Connections API进行安全分析。我们发现并实施了几种攻击，分为两类：连接操纵（CMA）和范围扩展攻击（REA）。CMA攻击允许攻击者将自己插入到中间人身份，并操纵（甚至与API无关的）连接，并篡改受害者的网络界面和配置。REA攻击允许攻击者将任何附近的连接隧道到远程（非附近）位置，甚至在两个诚实设备之间。我们的攻击是由我们在反向工程API实现过程中开发的工具包REarby实现的。REarby包括一个动态二进制工具、一个数据包解析器以及自定义Nearby Connections客户端和服务器的实现。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/nearby-threats-reversing-analyzing-and-attacking-googles-nearby-connections-on-android/](https://www.ndss-symposium.org/ndss-paper/nearby-threats-reversing-analyzing-and-attacking-googles-nearby-connections-on-android/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06B-3_Antonioli_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06B-3_Antonioli_paper.pdf)
## BadBluetooth: Breaking Android Security Mechanisms via Malicious Bluetooth Peripherals.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#badbluetooth-breaking-android-security-mechanisms-via-malicious-bluetooth-peripherals) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#badbluetooth-breaking-android-security-mechanisms-via-malicious-bluetooth-peripherals)**
### 作者
* Fenghao Xu, The Chinese University of Hong Kong
* Wenrui Diao, Jinan University
* Zhou Li, University of California
### 摘要
> 蓝牙是一种广泛使用的通信技术，尤其在移动计算和物联网场景下。一旦与主机设备配对，蓝牙设备可以与主机交换命令和数据，如语音、键盘/鼠标输入、网络、血压数据等。由于此类数据和命令的敏感性，蓝牙协议已经内置了一些安全措施，如身份验证、加密、授权等。
> 
> 
> 
> 
> 
> 
> 
> 然而，根据我们对蓝牙协议及其在Android系统上的实现的研究，我们发现仍然存在一些设计缺陷，可能导致严重的安全后果。例如，发现蓝牙配置文件上的身份验证过程非常不一致和粗糙：如果配对设备更改配置文件，则会自动获得信任，用户不会收到通知。此外，对蓝牙设备本身提供的信息没有严格的验证，因此恶意设备可以通过更改其名称、配置文件信息和图标来欺骗用户显示在屏幕上。
> 
> 
> 
> 
> 
> 
> 
> 为了更好地理解问题，我们对蓝牙配置文件进行了系统研究，并提出了三种攻击方法来证明此类蓝牙设计缺陷的可行性和潜在危害。这些攻击是在Raspberry Pi 2设备上实施，并在不同的Android操作系统版本（从5.1到最新的8.1）上进行评估。结果显示，对手可以绕过Android现有的保护机制（如权限、隔离等），发起中间人攻击，控制受害者应用程序和系统，窃取敏感信息等。为了缓解此类威胁，提出了一种新的蓝牙验证机制。我们基于AOSP项目实现了原型系统，并在Google Pixel 2手机上部署进行了评估。实验证明我们的解决方案可以有效地防止这些攻击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/badbluetooth-breaking-android-security-mechanisms-via-malicious-bluetooth-peripherals/](https://www.ndss-symposium.org/ndss-paper/badbluetooth-breaking-android-security-mechanisms-via-malicious-bluetooth-peripherals/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06B-4_Xu_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06B-4_Xu_paper.pdf)
## Understanding Open Ports in Android Applications: Discovery, Diagnosis, and Security Assessment.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#understanding-open-ports-in-android-applications-discovery-diagnosis-and-security-assessment) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#understanding-open-ports-in-android-applications-discovery-diagnosis-and-security-assessment)**
### 作者
* Daoyuan Wu, Singapore Management University
* Debin Gao, Singapore Management University
* Rocky K. C. Chang, The Hong Kong Polytechnic University
* En He, China Electronic Technology Cyber Security Co.
### 摘要
> 传统上，开放的TCP/UDP端口被服务器用于提供应用程序服务，但也在许多Android应用程序中找到。在本文中，我们提出了第一个开放端口分析管道，涵盖了Android应用程序中开放端口的发现、诊断和安全评估，以系统地理解这些端口的开放情况以及相关威胁。我们设计并部署了一种新颖的本地众包应用程序及其服务器端分析引擎，以持续监测野外的开放端口。在十个月的时间里，我们从全球136个国家的3293名用户那里收集了超过4000万条端口监控记录，这让我们能够观察到925个热门应用程序和725个内置系统应用程序中开放端口的实际执行情况。众包还为我们提供了一个更准确的Android应用程序中开放端口普遍性的视角，达到了15.3%，远高于之前的估计值6.8%。我们还开发了一个新的静态诊断工具，揭示了61.8%的开放端口应用程序完全是由于嵌入式SDK引起的，而20.7%则存在不安全的API使用。最后，我们对开放端口进行了三项安全评估：（一）漏洞分析，揭示了热门应用程序如Instagram、Samsung Gear、Skype以及广泛嵌入的Facebook SDK等开放端口中的五种漏洞模式；（二）通过众包网络扫描，在224个蜂窝网络和2181个WiFi网络中测量设备间的互连性；（三）实验演示了对移动开放端口的有效拒绝服务攻击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/understanding-open-ports-in-android-applications-discovery-diagnosis-and-security-assessment/](https://www.ndss-symposium.org/ndss-paper/understanding-open-ports-in-android-applications-discovery-diagnosis-and-security-assessment/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06B-5_Wu_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_06B-5_Wu_paper.pdf)
## IoTGuard: Dynamic Enforcement of Security and Safety Policy in Commodity IoT.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#iotguard-dynamic-enforcement-of-security-and-safety-policy-in-commodity-iot) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#iotguard-dynamic-enforcement-of-security-and-safety-policy-in-commodity-iot)**
### 作者
* Z. Berkay Celik, Penn State University
* Gang Tan, Penn State University
* Patrick McDaniel, Penn State University
### 摘要
> 广义上被称为物联网 (IoT) 的概念，将集成物理过程和数字连接的商品设备的增长改变了我们生活、娱乐和工作的方式。迄今为止，保护物联网的传统方法是逐个设备进行处理。然而，在实践中，最近的研究表明设备之间的互动往往是导致安全违规的真正原因。在本文中，我们介绍了IoTGuard，一种基于动态、基于策略的物联网执行系统，通过监控IoT行为和触发-动作平台应用来保护用户免受不安全和不安全的设备状态。IoTGuard分为三个阶段：(a) 实施代码检测器，向应用程序的源代码添加额外逻辑，以便在运行时收集应用程序的信息；(b) 将应用程序的信息存储在动态模型中，代表应用程序的运行时执行行为；(c) 确定物联网安全和安全规范，并对各个应用程序或一组互动应用程序的动态模型强制执行相应规范。我们在20个有缺陷的应用程序上展示了IoTGuard，并发现IoTGuard正确执行了12个违规规则中的12个。此外，我们在模拟智能家居中对35个SmartThings IoT和30个IFTTT触发-动作平台市场应用程序进行了IoTGuard的评估。IoTGuard执行了11个独特的规范，阻止了六个 (17.1%) SmartThings 和五个 (16.6%) IFTTT 应用程序中的16个状态。IoTGuard仅对应用程序产生17.3%的运行时开销，对于五个互动应用程序则为19.8%。通过这一努力，我们引入了一个严密的基于系统的系统，通过系统地识别物联网规范，来确保物联网设备的正确操作，展示了监控IoT应用程序的工具（如IoTGuard）的效果和价值。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/iotguard-dynamic-enforcement-of-security-and-safety-policy-in-commodity-iot/](https://www.ndss-symposium.org/ndss-paper/iotguard-dynamic-enforcement-of-security-and-safety-policy-in-commodity-iot/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07A-1_Celik_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07A-1_Celik_paper.pdf)
## RFDIDS: Radio Frequency-based Distributed Intrusion Detection System for the Power Grid.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#rfdids-radio-frequency-based-distributed-intrusion-detection-system-for-the-power-grid) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#rfdids-radio-frequency-based-distributed-intrusion-detection-system-for-the-power-grid)**
### 作者
* Tohid Shekari, ECE
### 摘要
> 最近，电力系统遭受网络威胁的数量以前所未有的速度增加。例如，2015年12月乌克兰电网普遍停电事件是一个警示，现代电力系统存在许多漏洞，特别是在组成电力网络骨干的变电站中。研究人员一直在努力开发有效的入侵检测系统（IDSs），以防止此类攻击或至少减少其破坏性后果。然而，所有现有技术都需要来自监控控制和数据采集（SCADA）网络组件的某种程度的信任；因此，它们仍然容易受到完全破坏SCADA系统的复杂攻击的影响。本文提出了一种基于无线电频率的分布式入侵检测系统（RFDIDS），即使整个SCADA系统被认为是不可信的，它也仍然可靠。所提出的系统利用无线电频率（RF）辐射来监测电力网变电站的活动。实际上，它利用无线电接收器作为诊断工具，提供有关变电站组件的无线电辐射的隔离、独立和可验证信息，特别是在低频（LF，0.05-50 kHz，或>20 μs周期）方面。模拟和实验结果验证了从电力系统变电站电路的无线电辐射中可以提取四种类型的诊断信息：i）电路电流的谐波内容，ii）电路电流的基频，iii）快速电路电流变化产生的脉冲信号，和iv）来自全球闪电的大气噪声。第一三种诊断的每个或组合可以有效地用于直接检测特定类型的电力网络攻击。同时，最后一种诊断用于检查接收器信号的完整性，因为它编码了全球闪电的准随机分布。模拟和实际实验结果验证了RFDIDS在保护电力网免受复杂攻击方面的有效性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/rfdids-radio-frequency-based-distributed-intrusion-detection-system-for-the-power-grid/](https://www.ndss-symposium.org/ndss-paper/rfdids-radio-frequency-based-distributed-intrusion-detection-system-for-the-power-grid/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07A-2_Shekari_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07A-2_Shekari_paper.pdf)
## A Systematic Framework to Generate Invariants for Anomaly Detection in Industrial Control Systems.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#a-systematic-framework-to-generate-invariants-for-anomaly-detection-in-industrial-control-systems) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#a-systematic-framework-to-generate-invariants-for-anomaly-detection-in-industrial-control-systems)**
### 作者
* Cheng Feng, Imperial College London & Siemens Corporate Technology
* Venkata Reddy Palleti, Singapore University of Technology and Design
* Aditya Mathur, Singapore University of Technology and Design
* Deeph Chana, Imperial College London
### 摘要
> 工业控制系统（ICS）由集成的硬件和软件组件组成，旨在监控和控制各种工业过程，通常部署在水处理厂、电网和天然气管道等关键基础设施中。与传统的IT系统不同，ICS的异常操作可能导致设备、环境甚至人类生命的重大物理损害。主动监测定义了必须为ICS正常运行维持的物理条件的不变规则，可以通过及早检测异常系统状态并采取及时的缓解措施（例如故障检查和系统关闭）来提高这类系统的安全性和可靠性。通常，不变规则在给定ICS构建的设计阶段由系统工程师预先定义。然而，这种手动密集的过程成本高昂、容易出错，并且在通常复杂的系统中是次优的。在本文中，我们提出了一个新颖的框架，旨在利用ICS运行数据日志中包含的信息，结合多种机器学习和数据挖掘技术系统地生成不变规则。我们通过在实际的两个ICS实验平台上进行实验证明了我们方法的有效性：一个是水配送系统，一个是水处理厂。我们展示了通过我们的框架成功推导出比系统工程师定义的不变规则及常用的基于残差误差的ICS异常检测模型更大的不变规则集，并且这些规则可以用于显著改进异常检测。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/a-systematic-framework-to-generate-invariants-for-anomaly-detection-in-industrial-control-systems/](https://www.ndss-symposium.org/ndss-paper/a-systematic-framework-to-generate-invariants-for-anomaly-detection-in-industrial-control-systems/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07A-3_Feng_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07A-3_Feng_paper.pdf)
## DIAT: Data Integrity Attestation for Resilient Collaboration of Autonomous Systems.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#diat-data-integrity-attestation-for-resilient-collaboration-of-autonomous-systems) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#diat-data-integrity-attestation-for-resilient-collaboration-of-autonomous-systems)**
### 作者
* Tigist Abera, Technische Universität Darmstadt
* Raad Bahmani, Technische Universität Darmstadt
* Ferdinand Brasser, Technische Universität Darmstadt
* Ahmad Ibrahim, Technische Universität Darmstadt
* Ahmad-Reza Sadeghi, Technische Universität Darmstadt
* Matthias Schunter, Intel Labs
### 摘要
> 自动协作嵌入式系统网络正在许多应用领域中出现，例如车辆自组织网络、机器人工厂工人、搜索/救援机器人、投递和搜索无人机。为了完成协作任务，参与的设备需要交换各种类型的信息，例如传感器数据、状态信息和命令。为了确保这些复杂系统的正确运行，每个设备都必须能够验证来自其他设备的数据是正确的，且未经恶意更改。
> 
> 
> 
> 
> 
> 
> 
> 本文介绍了DIAT，一种新颖的方法，通过使用控制流验证，验证数据的正确生成和处理，从而验证数据的正确性。DIAT使得自主协作网络中的设备能够安全高效地交互，依赖于最小化的可信计算基（TCB）。它确保从一个设备发送给另一个设备的数据在传输过程中、生成过程中或起始设备上的处理过程中都没有被恶意更改。网络中设备之间交换的数据是经过身份认证的，并且其生成和处理中涉及的所有软件都具有完整性证明。为了实现这一点，嵌入式设备的软件被分解成简单的交互模块，从而减少了需要进行验证的软件的数量和复杂性，即只需要验证处理数据的那些模块。作为概念验证，我们在一种先进的无人机飞行控制器上实现并评估了我们的DIAT方案。此外，我们在模拟环境中评估了我们的方案，以证明其在大规模系统中的可扩展性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/diat-data-integrity-attestation-for-resilient-collaboration-of-autonomous-systems/](https://www.ndss-symposium.org/ndss-paper/diat-data-integrity-attestation-for-resilient-collaboration-of-autonomous-systems/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07A-4_Abera_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07A-4_Abera_paper.pdf)
## ICSREF: A Framework for Automated Reverse Engineering of Industrial Control Systems Binaries.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#icsref-a-framework-for-automated-reverse-engineering-of-industrial-control-systems-binaries) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#icsref-a-framework-for-automated-reverse-engineering-of-industrial-control-systems-binaries)**
### 作者
* Anastasis Keliris, NYU
* Michail Maniatakos, NYU Abu Dhabi
### 摘要
> 过去几年来，工业控制系统（ICS）的安全性引起了越来越多的关注，这主要是因为在工业环境中发现了真正的威胁。尽管受到了关注，但由于ICS供应商使用了专有的编译器，使得自动化ICS可编程逻辑控制器二进制文件的反向工程过程仍然是一个悬而未决的问题。这样的自动化可能是一把双刃剑；一方面，它可以加速数字取证调查和事件响应行动，另一方面，它也可能使恶意ICS负载的动态生成成为可能。在这项工作中，我们提出了一个结构化的方法，可以自动化ICS二进制文件的反向工程过程，考虑到其独特的领域特性。我们应用这个方法来开发模块化的工业控制系统反向工程框架（ICSREF），并为使用CODESYS编译的二进制文件实例化ICSREF模块，CODESYS是一种广泛使用的PLC软件堆栈和编译器。为了评估我们的框架，我们通过收集来自公共代码仓库的真实PLC二进制文件以及在公司内部开发二进制文件来创建一个样本数据库。我们的结果表明，ICSREF可以成功处理不同行业领域的多样化PLC二进制文件，而不受所使用的编程语言的影响。此外，我们在商用智能手机上部署了ICSREF，用于编排和启动针对化学过程测试平台的完全自动化的过程感知攻击。这个动态负载生成的示例展示了ICSREF如何在没有任何先前知识的情况下实现复杂的攻击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/icsref-a-framework-for-automated-reverse-engineering-of-industrial-control-systems-binaries/](https://www.ndss-symposium.org/ndss-paper/icsref-a-framework-for-automated-reverse-engineering-of-industrial-control-systems-binaries/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07A-5_Keliris_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07A-5_Keliris_paper.pdf)
## Balancing Image Privacy and Usability with Thumbnail-Preserving Encryption.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#balancing-image-privacy-and-usability-with-thumbnail-preserving-encryption) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#balancing-image-privacy-and-usability-with-thumbnail-preserving-encryption)**
### 作者
* Kimia Tajik, Oregon State University
* Akshith Gunasekaran, Oregon State University
* Rhea Dutta, Cornell University
* Brandon Ellis, Oregon State University
* Rakesh B. Bobba, Oregon State University
* Mike Rosulek, Oregon State University
* Charles V. Wright, Portland State University
* Wu-Chi Feng, Portland State University
### 摘要
> 在本文中，我们强调了在基于云存储的图像存储服务环境中需要保留某些视觉特征并隐藏所有其他信息的图像加密技术，以平衡隐私和可用性。我们特别介绍了理想或精确的缩略图保护加密（TPE）的概念，这是一种特殊情况下的格式保持加密，并提出了一个具体的构造方法。在TPE中，密文本身是一幅具有与明文（未加密）图像相同缩略图的图像，但可证明不会泄露任何关于明文的信息。我们为该构造方法提供了正式的安全性分析，并通过原型实现展示其与现有服务的兼容性。我们还研究了用户区分TPE保留的缩略图的能力。我们的研究结果表明，TPE是一种平衡图像可用性和隐私问题的有效和有前景的方法。我们的代码和演示可在网址http://photoencryption.org获取。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/balancing-image-privacy-and-usability-with-thumbnail-preserving-encryption/](https://www.ndss-symposium.org/ndss-paper/balancing-image-privacy-and-usability-with-thumbnail-preserving-encryption/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07B-1_Tajik_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07B-1_Tajik_paper.pdf)
## ConcurORAM: High-Throughput Stateless Parallel Multi-Client ORAM.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#concuroram-high-throughput-stateless-parallel-multi-client-oram) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#concuroram-high-throughput-stateless-parallel-multi-client-oram)**
### 作者
* Anrin Chakraborti, Stony Brook University
* Radu Sion, Stony Brook University
### 摘要
> ConcurORAM是一个并行的多客户端无意识RAM（ORAM），它消除了等待并发无状态客户端的需求，并允许整体吞吐量平稳增长，而无需信任的第三方组件（代理）或直接的客户端协调。ConcurORAM背后的关键洞察是，在多客户端数据访问期间，只有一部分同时访问的服务器托管数据结构需要访问隐私保证，其他所有内容都可以安全地实现为无意识数据结构，在ORAM的"驱逐"期间安全高效地同步。此外，由于延迟的主要贡献因素是驱逐过程 - 在该过程中，客户端驻留数据被重排和重新加密后重新插入主服务器数据库 - ConcurORAM还使多个并发客户端能够异步、并行地驱逐（不损害一致性），并在后台进行，而无需阻塞正在进行的查询。结果是，随着并发客户端数量的增加，吞吐量能够良好地扩展，并且受到驱逐过程的影响不大。例如，30个并发客户端可以并行执行大约65个查询每秒，相比最先进技术速度提高了2倍。与单个客户端部署相比，单个客户端的查询访问时间仅增加了2倍。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/concuroram-high-throughput-stateless-parallel-multi-client-oram/](https://www.ndss-symposium.org/ndss-paper/concuroram-high-throughput-stateless-parallel-multi-client-oram/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07B-2_Chakraborti_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07B-2_Chakraborti_paper.pdf)
## Statistical Privacy for Streaming Traffic.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#statistical-privacy-for-streaming-traffic) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#statistical-privacy-for-streaming-traffic)**
### 作者
* Xiaokuan Zhang, The Ohio State University
* Jihun Hamm, The Ohio State University
* Michael K. Reiter, University of North Carolina at Chapel Hill
* Yinqian Zhang, The Ohio State University
### 摘要
> 机器学习赋予了交通分析攻击的能力，这些攻击可以从用户的加密流量中侵犯其隐私。深度学习的最新进展大大加剧了这些威胁。最近展示的一个杰出例子是使用卷积神经网络对视频流进行交通分析攻击。在本文中，我们探讨了先前在对抗性机器学习和差分隐私领域使用的技术在减轻机器学习驱动的流量分析方面的应用。
> 
> 
> 
> 
> 
> 
> 
> 我们的发现有两个。首先，构建对抗样本有效地使对手的预定分类器困惑，但当对手可以通过使用其他分类器或使用对抗样本训练分类器来适应防御时，这种方法的效果较差。其次，差分隐私保证非常有效地防止基于统计推断的流量分析，并且对对手使用的机器学习分类器保持不可知。我们提出了两种机制来对加密的流媒体流量进行差分隐私强制执行，并评估它们的安全性和效用。我们的实证实现和评估表明，所提出的统计隐私方法是底层场景中有前景的解决方案。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/statistical-privacy-for-streaming-traffic/](https://www.ndss-symposium.org/ndss-paper/statistical-privacy-for-streaming-traffic/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07B-4_Zhang_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07B-4_Zhang_paper.pdf)
## rORAM: Efficient Range ORAM with O(log2 N) Locality.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#roram-efficient-range-oram-with-o-log2-n-locality) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#roram-efficient-range-oram-with-o-log2-n-locality)**
### 作者
* Anrin Chakraborti, Stony Brook University
* Adam J. Aviv, United States Naval Academy
* Seung Geol Choi, United States Naval Academy
* Travis Mayberry, United States Naval Academy
* Daniel S. Roche, United States Naval Academy
* Radu Sion, Stony Brook University
### 摘要
> 忘记性RAM协议（ORAMs）允许客户端从不受信任的存储设备访问数据，而无需向该设备透露有关其访问模式的任何信息。通常，通过对数据进行随机洗牌来实现此目标，从而使存储设备无法确定各个块的位置，从而产生高度随机化的访问模式。但是，存储设备通常针对顺序访问进行了优化。在标准ORAM操作过程中进行大量的随机磁盘寻道会导致较大的开销。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们介绍了rORAM，一种特别适用于访问顺序逻辑块范围的ORAM，同时最大限度地减少了随机物理磁盘寻道的次数。与先前的设计（Asharov等人，ePrint 2017，Demertzis等人，CRYPTO 2018）相比，rORAM在渐近效率方面获得了显著的改进，将寻道次数和通信复杂性都减少了乘法因子$mathbb{O}(log N)$倍。对于类似范围查询工作负载的本地HDD，rORAM的原型比Path ORAM快30-50倍，对于本地SSD，快30倍，对于网络块设备，快10倍。rORAM的新颖磁盘布局还可以加快标准ORAM构建的速度，例如，使Path ORAM变种快2倍。重要的是，实验证明rORAM适用于实际应用——与标准Path ORAM相比，运行文件服务器的速度提高了最多5倍，运行范围查询密集型视频服务器工作负载的速度提高了最多11倍。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/roram-efficient-range-oram-with-olog2-n-locality/](https://www.ndss-symposium.org/ndss-paper/roram-efficient-range-oram-with-olog2-n-locality/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07B-3_Chakraborti_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07B-3_Chakraborti_paper.pdf)
## Private Continual Release of Real-Valued Data Streams.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#private-continual-release-of-real-valued-data-streams) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#private-continual-release-of-real-valued-data-streams)**
### 作者
* Victor Perrier, Data61
### 摘要
> 我们提出了一种差分隐私机制，用于显示实值观测数据流（例如移动平均值）的统计信息，其中每个观测值的界限要么过于保守，要么事先不知道。这对于实时数据监测和报告的场景非常相关，例如通过智能电表监测能源数据。我们的重点是真实世界数据流，其分布是轻尾的，即尾部以至少与指数分布一样快地趋近于零。对于这样的数据流，预期每个观测值都是集中在一个未知的阈值以下的。从数据中估计这个阈值可能会违反隐私，因为它会揭示与个人相关的特定事件。另一方面，过于保守的阈值可能通过增加比必要的更多的噪声来影响准确性。我们构建了一个优化效用的差分隐私机制，根据输入流发布这个阈值。与现有算法相比，我们的主要优势在于对流的每个观测值添加的结果噪声按照阈值进行缩放，而不是可能更大的界限；当差异显著时，这将在效用方面产生相当大的收益。使用两个真实世界数据集，我们证明了我们的机制平均提高了第一个数据集3.5倍的效用，并提高了第二个数据集9倍的效用。虽然我们的主要重点是连续发布统计信息，但我们发布阈值的机制可以在其他各种需要（保护隐私的）衡量输入分布规模的应用中使用。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/private-continual-release-of-real-valued-data-streams/](https://www.ndss-symposium.org/ndss-paper/private-continual-release-of-real-valued-data-streams/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07B-5_Perrier_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_07B-5_Perrier_paper.pdf)
## Practical Hidden Voice Attacks against Speech and Speaker Recognition Systems.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#practical-hidden-voice-attacks-against-speech-and-speaker-recognition-systems) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#practical-hidden-voice-attacks-against-speech-and-speaker-recognition-systems)**
### 作者
* Hadi Abdullah, University of Florida
* Washington Garcia, University of Florida
* Christian Peeters, University of Florida
* Patrick Traynor, University of Florida
* Kevin R. B. Butler, University of Florida
* Joseph Wilson, University of Florida
### 摘要
> 语音处理系统（VPS）正成为一种越来越受欢迎的界面。通过应用最近机器学习的进展，这类界面已显著提高了准确性。对抗机器学习也取得了类似的进展，并且已被用于证明这类系统容易受到隐藏命令注入的攻击——通过噪声掩盖的音频，虽然VPS能正确识别但人类不能。然而，此类攻击往往高度依赖于对特定机器学习模型的白盒子知识，并且仅限于特定的麦克风和扬声器，使得它们在不同声学硬件平台上的使用具有限制（实际可行性）。在本文中，我们打破了这些限制，并通过模型无关（黑盒）攻击使隐藏命令攻击更具实用性，这些攻击利用了VPS常用的信号处理算法的知识，用于生成输入到机器学习系统中的数据。具体而言，我们利用事实证明当声学特征提取算法（例如，FFT）转换多个源音频样本时，它们具有相似的特征向量。我们开发了四类扰动，用于生成难以理解的音频，并对12个机器学习模型进行了测试，包括7个专有模型（例如，Google Speech API、Bing Speech API、IBM Speech API、Azure Speaker API等），并成功攻击了所有目标。此外，我们还成功地在多个硬件配置中使用了我们恶意生成的音频样本，证明了其在模型和实际系统中的有效性。通过这样做，我们证明了对音频信号处理的领域特定知识代表一种有效生成隐藏语音命令攻击的实用手段。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/practical-hidden-voice-attacks-against-speech-and-speaker-recognition-systems/](https://www.ndss-symposium.org/ndss-paper/practical-hidden-voice-attacks-against-speech-and-speaker-recognition-systems/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_08-1_Abdullah_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_08-1_Abdullah_paper.pdf)
## Adversarial Attacks Against Automatic Speech Recognition Systems via Psychoacoustic Hiding.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#adversarial-attacks-against-automatic-speech-recognition-systems-via-psychoacoustic-hiding) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#adversarial-attacks-against-automatic-speech-recognition-systems-via-psychoacoustic-hiding)**
### 作者
* Lea Schönherr, Ruhr University Bochum
* Katharina Kohls, Ruhr University Bochum
* Steffen Zeiler, Ruhr University Bochum
* Thorsten Holz, Ruhr University Bochum
* Dorothea Kolossa, Ruhr University Bochum
### 摘要
> 语音界面作为各种设备的输入方法越来越被广泛接受。这一发展得益于自动语音识别（ASR）的快速改进，现在在许多任务中的表现与人类听力相当。这些改进基于深度神经网络（DNNs）作为ASR的计算核心的持续演进。然而，最近的研究结果表明，DNNs容易受到敌对扰动的攻击，攻击者可以强制将转录结果转变为恶意输出。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们介绍了一种基于“心理声学隐藏”的新型敌对示例。我们的攻击利用了基于DNN的ASR系统的特点，我们通过额外的反向传播步骤扩展了原始分析过程。我们利用这个反向传播来学习输入信号敌对扰动的自由度，即我们应用心理声学模型，操纵位于人类感知阈值以下的声学信号。为了进一步减少扰动的可察觉性，我们使用强制对齐来找到原始音频样本和恶意目标转录之间最佳的时间对齐。这些扩展使我们能够将任意音频输入嵌入到恶意语音命令中，然后通过ASR系统进行转录，而音频信号与原始信号几乎无法区分。在实验评估中，我们攻击了最先进的语音识别系统*Kaldi*，并确定了适用于不同类型输入的最佳参数和分析设置。我们的结果显示，在计算工作量不到两分钟的情况下，对于十秒的音频文件，我们成功攻击了高达98％的情况。根据用户研究，我们发现我们的目标转录对人类听众来说都听不见，但他们仍然能够准确理解原始的语音内容。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/adversarial-attacks-against-automatic-speech-recognition-systems-via-psychoacoustic-hiding/](https://www.ndss-symposium.org/ndss-paper/adversarial-attacks-against-automatic-speech-recognition-systems-via-psychoacoustic-hiding/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_08-2_Schonherr_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_08-2_Schonherr_paper.pdf)
## The Crux of Voice (In)Security: A Brain Study of Speaker Legitimacy Detection.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#the-crux-of-voice-in-security-a-brain-study-of-speaker-legitimacy-detection) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#the-crux-of-voice-in-security-a-brain-study-of-speaker-legitimacy-detection)**
### 作者
* Ajaya Neupane, University of California Riverside
* Nitesh Saxena, University of Alabama at Birmingham
* Leanne Hirshfield, Syracuse University
* Sarah Elaine Bratt, Syracuse University
### 摘要
> 新一代的骗局出现了，利用声音模仿获取敏感信息，窃听语音通话并向毫无防备的用户勒索钱财。研究表明，用户容易受到利用当前语音合成技术的声音模仿攻击的影响。在本文中，我们旨在通过神经科学方法揭示人类中心的“声音黑客”现象，并在重要方面支持和扩展传统的行为学研究方法。具体而言，我们通过功能近红外光谱（fNIRS）这一前沿脑成像技术，捕捉时间和空间领域的神经信号，对声音安全的神经基础进行深入研究。我们设计和进行了一项fNIRS研究，以全面调查用户与“说话者合法性检测”相关的心理加工，即声音样本是由目标说话者、其他不同的人类说话者还是模仿说话者渲染的。我们分析与此任务相关的神经活动以及可能控制这种活动的脑区。
> 
> 
> 
> 
> 
> 
> 
> 我们的关键发现是，在人类大脑处理“合法说话者与合成说话者”之间可能没有统计学上的显著差异，而在遇到“合法说话者与其他不同的人类说话者”时则明显不同。这一发现有助于解释用户对合成攻击的易受攻击性，正如行为上自我报告分析所显示的。也就是说，被模仿的合成声音在行为和神经层面上似乎与真实声音无法区分。与此形成鲜明对比的是，以往的研究显示，在其他真实与伪造的艺术品（例如绘画和网站）中，尽管用户在行为上未能注意到这些差异，但在潜意识神经上确实存在差异。总体而言，我们的工作剖析了基于声音不安全性的基本神经模式，并揭示了在生物水平上用户对声音合成攻击的易受攻击性。我们相信，这可能是一个对安全社区的重要见解，表明人类对声音合成攻击的检测可能不会随着时间的推移而改善，特别是考虑到声音合成技术很可能会继续改进，需要设计谨慎的机器辅助技术来帮助人类对抗这些攻击。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/the-crux-of-voice-insecurity-a-brain-study-of-speaker-legitimacy-detection/](https://www.ndss-symposium.org/ndss-paper/the-crux-of-voice-insecurity-a-brain-study-of-speaker-legitimacy-detection/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_08-3_Neupane_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_08-3_Neupane_paper.pdf)
## Life after Speech Recognition: Fuzzing Semantic Misinterpretation for Voice Assistant Applications.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#life-after-speech-recognition-fuzzing-semantic-misinterpretation-for-voice-assistant-applications) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#life-after-speech-recognition-fuzzing-semantic-misinterpretation-for-voice-assistant-applications)**
### 作者
* Yangyong Zhang, Texas A&M University
* Lei Xu, Texas A&M University
* Abner Mendoza, Texas A&M University
* Guangliang Yang, Texas A&M University
* Phakpoom Chinprutthiwong, Texas A&M University
* Guofei Gu, Texas A&M University
### 摘要
> 流行的语音助手（VA）服务，如亚马逊Alexa和谷歌助手，正在快速将其平台应用化，以提供更灵活和多样化的语音控制服务体验。然而，VA设备的普遍部署和第三方应用程序数量的增加引发了安全和隐私方面的担忧。尽管以前的研究，例如隐藏语音攻击，主要研究了VA服务默认的自动语音识别（ASR）组件的问题，但我们的研究分析和评估了ASR之后的后续组件-自然语言理解（NLU）的安全性，NLU在ASR的声音转文本处理之后执行语义解释（即文本到意图）。具体而言，我们关注NLU的意图分类器，该分类器用于为第三方VA应用程序（或vApps）定制机器理解。我们发现，意图分类器的错误语义解释可能导致语义不一致性，从而为攻击者利用一些常见的口语错误精心设计的攻击提供机会，破坏vApp处理的完整性。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们设计了第一个语言模型引导的模糊测试工具，名为LipFuzzer，用于评估意图分类器的安全性，并基于vApp的语音命令模板系统地发现潜在易误解口语错误。为了引导模糊测试，我们利用统计关系学习（SRL）和新兴的自然语言处理（NLP）技术构建对抗性语言模型。在评估中，我们成功验证了LipFuzzer的有效性和准确性。我们还使用LipFuzzer评估了亚马逊Alexa和谷歌助手的vApp平台。根据我们的模糊测试结果，我们发现大部分实际vApp存在漏洞。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/life-after-speech-recognition-fuzzing-semantic-misinterpretation-for-voice-assistant-applications/](https://www.ndss-symposium.org/ndss-paper/life-after-speech-recognition-fuzzing-semantic-misinterpretation-for-voice-assistant-applications/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_08-4_Zhang_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_08-4_Zhang_paper.pdf)
## Cybercriminal Minds: An investigative study of cryptocurrency abuses in the Dark Web.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#cybercriminal-minds-an-investigative-study-of-cryptocurrency-abuses-in-the-dark-web) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#cybercriminal-minds-an-investigative-study-of-cryptocurrency-abuses-in-the-dark-web)**
### 作者
* Seunghyeon Lee, KAIST
### 摘要
> 暗网以成为危害性内容和非法商品的主要分发渠道而声名狼藉。犯罪者还利用加密货币进行非法金融交易，并隐藏自己的身份。之前的研究对暗网的覆盖范围有限且数据陈旧，这促使我们进行深入的调查研究，以了解犯罪者在暗网中如何滥用加密货币。我们设计并实施了一个名为MFScope的新框架，该框架收集暗网数据，提取加密货币信息，并分析其在暗网上的使用特点。具体而言，MFScope收集了超过2700万个暗网页面，并提取了约1000万个比特币、以太坊和门罗币的唯一加密货币地址。然后，它对它们的使用进行分类，以确定非法商品交易，并追踪加密货币资金流动，揭示了在暗网上的黑钱运作。总体而言，使用MFScope，我们发现暗网上超过80%的比特币地址都是用于恶意目的；它们的货币交易量约为1.8亿美元，并将其中大部分资金发送到几个热门的加密货币服务（例如交易服务）。此外，我们还展示了两个真实的非法服务，并演示了它们的比特币交易路径，这有助于理解它们的营销策略以及黑钱运作。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/cybercriminal-minds-an-investigative-study-of-cryptocurrency-abuses-in-the-dark-web/](https://www.ndss-symposium.org/ndss-paper/cybercriminal-minds-an-investigative-study-of-cryptocurrency-abuses-in-the-dark-web/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_09-1_Lee_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_09-1_Lee_paper.pdf)
## Vault: Fast Bootstrapping for the Algorand Cryptocurrency.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#vault-fast-bootstrapping-for-the-algorand-cryptocurrency) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#vault-fast-bootstrapping-for-the-algorand-cryptocurrency)**
### 作者
* Derek Leung, MIT CSAIL
* Adam Suhl, MIT CSAIL
* Yossi Gilad, MIT CSAIL
* Nickolai Zeldovich, MIT CSAIL
### 摘要
> 分散化加密货币依赖参与者来追踪系统状态以验证新交易。随着用户和交易数量的增长，这一要求变得沉重，需要用户下载、验证和存储大量数据来参与其中。
> 
> 
> 
> 
> 
> 
> 
> Vault是一种基于Algorand的新型加密货币设计，它最大程度地减少了参与者的存储和引导成本。Vault的设计基于Algorand的权益证明共识协议，并采用了多种技术来实现其目标。首先，Vault将最近交易的存储与账户余额的存储分离开来，这使得Vault可以删除旧的账户状态。其次，Vault允许在参与者之间分片状态，以保持强大的安全保证。最后，Vault引入了戳记证书的概念，允许新客户端在无需验证每个区块的情况下，在权益证明系统中安全高效地追赶进度。
> 
> 
> 
> 
> 
> 
> 
> 对Vault数据结构的原型实现进行的实验显示，与比特币相比，Vault的设计将加入网络作为完整客户端的带宽成本减少了99.7％，与以太坊相比减少了90.5％，当下载包含5亿次交易的账本时。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/vault-fast-bootstrapping-for-the-algorand-cryptocurrency/](https://www.ndss-symposium.org/ndss-paper/vault-fast-bootstrapping-for-the-algorand-cryptocurrency/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_09-2_Leung_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_09-2_Leung_paper.pdf)
## Sereum: Protecting Existing Smart Contracts Against Re-Entrancy Attacks.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#sereum-protecting-existing-smart-contracts-against-re-entrancy-attacks) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#sereum-protecting-existing-smart-contracts-against-re-entrancy-attacks)**
### 作者
* Michael Rodler, University of Duisburg-Essen
* Wenting Li, NEC Laboratories
### 摘要
> 最近，一些现有的区块链系统在智能合约中出现了重大的错误和漏洞。尽管文献中提出了许多保护智能合约的建议，但这些建议主要集中在证明合约中某种类型的漏洞的正确性或不存在性，但不能保护已部署（遗留）合约免受利用。在本文中，我们针对递归攻击问题，在反向兼容的方式下，提出了一种新颖的智能合约安全技术，名为Sereum（安全以太坊），它通过运行时监控和验证来保护现有的部署合约免受递归攻击。Sereum无需对现有合约进行任何修改或具备任何语义知识。通过使用以太坊区块链的实施和评估，我们展示了Sereum可以准确检测和防止攻击，并且误报率只有0.06%，同时运行时开销可忽略不计。作为附带成果，我们开发了三种高级递归攻击来展示现有离线漏洞分析工具的局限性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/sereum-protecting-existing-smart-contracts-against-re-entrancy-attacks/](https://www.ndss-symposium.org/ndss-paper/sereum-protecting-existing-smart-contracts-against-re-entrancy-attacks/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_09-3_Rodler_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_09-3_Rodler_paper.pdf)
## Anonymous Multi-Hop Locks for Blockchain Scalability and Interoperability.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#anonymous-multi-hop-locks-for-blockchain-scalability-and-interoperability) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#anonymous-multi-hop-locks-for-blockchain-scalability-and-interoperability)**
### 作者
* Giulio Malavolta, Friedrich-Alexander University Erlangen-Nürnberg
* Pedro Moreno Sanchez, TU Wien
* Clara Schneidewind, TU Wien
* Aniket Kate, Purdue University
* Matteo Maffei, TU Wien
### 摘要
> 加密货币的使用大幅增长暴露了无许可区块链技术固有的可扩展性问题。支付通道网络（PCNs）已成为最广泛部署的解决方案，以缓解可扩展性问题，允许两个用户之间的大部分支付在链下进行。不幸的是，根据文献报道并在本文中进一步证明，目前的PCNs未提供有意义的安全和隐私保证[30]，[40]。在这项工作中，我们研究和设计了安全和隐私保护的PCNs。我们首先对现有的PCNs进行安全性分析，报告了一种适用于所有主要PCNs，包括闪电网络的新攻击，使攻击者能够从同一支付路径中的诚实中介人那里窃取费用。然后，我们正式定义了匿名多跳锁定（AMHLs），一种作为安全和隐私保护的PCNs设计基石的新型密码原语。我们提出了几个可证明安全的密码实现，使AMHLs与绝大多数加密货币兼容。特别地，我们证明（线性）同态单向函数足以构造支持脚本语言（例如以太坊）的PCNs的AMHLs。我们还提出了一种基于ECDSA签名的构造，不需要脚本，从而解决了该领域的一个重要开放问题。AMHLs构成一种通用的原语，其用途超出了单个PCN中的多跳支付，我们展示了如何通过这个原语实现原子交换和可互操作的PCNs。最后，我们在一台通用计算机上进行的性能评估发现，即使在最坏的情况下，AMHL操作可以在100毫秒内完成，并且只需要少于500字节的通信开销。事实上，在认可了我们的攻击之后，闪电网络开发人员已经将我们基于ECDSA的AMHLs实现到他们的PCN中。这证明了我们方法的实用性以及对当今加密货币的安全性、隐私性、互操作性和可扩展性的影响。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/anonymous-multi-hop-locks-for-blockchain-scalability-and-interoperability/](https://www.ndss-symposium.org/ndss-paper/anonymous-multi-hop-locks-for-blockchain-scalability-and-interoperability/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_09-4_Malavolta_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_09-4_Malavolta_paper.pdf)
## Constructing an Adversary Solver for Equihash.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#constructing-an-adversary-solver-for-equihash) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#constructing-an-adversary-solver-for-equihash)**
### 作者
* Xiaofei Bai, School of Computer Science
### 摘要
> 区块链网络，尤其是加密货币，严重依赖工作量证明（PoW）系统，通常作为分配奖励的基础。这些系统需要解决特定的难题，应用特定集成电路（ASIC）可以设计出性能或效率优越的解决方案。无论哪种方式，ASIC相比于CPU和GPU的性能要高出几个数量级，并可能对区块链网络造成损害。最近，Equihash被开发出来以抵御使用高内存消耗的ASIC解决方案。尽管其最流行的参数集存在商业ASIC解算器，但这些解算器在更好的参数下无法使用，并且在最佳参数下被认为是不可能的。在本文中，我们通过构建一个与参数无关的对手解算器设计来检查Equihash的ASIC抵抗能力。我们评估了该产品，并预计对于资源丰富的对手来说，至少有10倍的效率优势。我们以两种方式为安全社区做出贡献：（1）揭示了Equihash的局限性并提高了人们对其算法因素的认识，（2）证明了对PoW系统进行安全检查是切实可行且有用的，为未来的研究和发展提供了一个起点。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/constructing-an-adversary-solver-for-equihash/](https://www.ndss-symposium.org/ndss-paper/constructing-an-adversary-solver-for-equihash/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_09-5_Bai_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_09-5_Bai_paper.pdf)
## OBFUSCURO: A Commodity Obfuscation Engine on Intel SGX.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#obfuscuro-a-commodity-obfuscation-engine-on-intel-sgx) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#obfuscuro-a-commodity-obfuscation-engine-on-intel-sgx)**
### 作者
* Adil Ahmad, Purdue
* Byunggill Joe, KAIST
* Yuan Xiao, Ohio State University
* Yinqian Zhang, Ohio State University
* Insik Shin, KAIST
* Byoungyoung Lee, Purdue/SNU
### 摘要
> 程序混淆是一种热门的密码构造方法，具有广泛的用途，例如防止知识产权盗窃。尽管现有的程序混淆的密码解决方案会导致不切实际的高开销，但最近利用可信硬件取得的突破显示出了希望。然而，现有的解决方案基于特殊用途的可信硬件，限制了其用例数量。
> 
> 
> 
> 
> 
> 
> 
> 在本文中，我们首先研究基于常见的可信硬件Intel SGX是否可行进行这种混淆，并观察到某些重要的安全考虑在常见硬件上无法实现。特别地，我们发现直接应用于Intel SGX的现有混淆/遗忘方案在侧信道限制方面存在不安全的问题。为此，我们提出了OBFUSCURO，这是第一个使用常见的可信硬件Intel SGX提供程序混淆的系统。其关键思想是利用ORAM操作进行安全代码执行和数据访问。首先，OBFUSCURO将常规程序布局转换为侧信道安全和ORAM兼容的布局。然后，OBFUSCURO确保其ORAM控制器执行数据遗忘访问，以保护自身免受所有基于内存的侧信道攻击。此外，OBFUSCURO还通过确保程序始终运行在预配置的时间间隔内来保护该程序免受时序攻击。在这个过程中，OBFUSCURO还引入了一种系统优化，如基于寄存器的ORAM存储。我们对OBFUSCURO进行了彻底的安全性分析，并通过实证攻击评估展示了OBFUSCURO可以保护SGX程序执行免受基于访问模式和时间的信道泄漏攻击。我们还提供了详细的性能基准结果，以展示OBFUSCURO的实践方面。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/obfuscuro-a-commodity-obfuscation-engine-on-intel-sgx/](https://www.ndss-symposium.org/ndss-paper/obfuscuro-a-commodity-obfuscation-engine-on-intel-sgx/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_10-1_Ahmad_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_10-1_Ahmad_paper.pdf)
## TEE-aided Write Protection Against Privileged Data Tampering.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#tee-aided-write-protection-against-privileged-data-tampering) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#tee-aided-write-protection-against-privileged-data-tampering)**
### 作者
* Lianying Zhao, Concordia University
* Mohammad Mannan, Concordia University
### 摘要
> 未经授权的数据篡改自恶意软件出现以来即是长期以来的威胁。系统和应用软件可以重新安装，硬件也可以被替换，但在很多情况下用户数据是无价的。尤其是近年来，勒索软件由于其直接变现模式而具有高影响力。现有的先进防御大多基于已知的签名或行为分析，并且需要一个未被入侵的操作系统内核。然而，具有最高软件权限的恶意软件已经显示出了其明显存在。
> 
> 
> 
> 
> 
> 
> 
> 我们提出将当前的检测/恢复机制转变为数据丢失预防，其中重点是为数据提供防护而不是对抗恶意软件。我们的解决方案Inuksuk依赖于当今的可信执行环境(TEE)，其在CPU和存储设备上都可用，以实现可编程写保护。我们随时备份用户选择的文件副本，并通过TEE以安全的方式编写后续更新作为新版本。我们在Windows 7和10以及Linux (Ubuntu)上实现了Inuksuk；我们的核心设计不受操作系统和应用程序的约束，并且不会对应用程序产生运行时性能损失。通过访问模式和可定制的更新策略(例如间隔、粒度)，可以消除或减轻文件传输中的中断。为了使Inuksuk适应现代操作系统，我们还将Flicker (EuroSys 2008)移植到最新的64位Windows，它是用于操作系统特权TEE管理的事实上的标准工具。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/tee-aided-write-protection-against-privileged-data-tampering/](https://www.ndss-symposium.org/ndss-paper/tee-aided-write-protection-against-privileged-data-tampering/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_10-2_Zhao_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_10-2_Zhao_paper.pdf)
## TIMBER-V: Tag-Isolated Memory Bringing Fine-grained Enclaves to RISC-V.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#timber-v-tag-isolated-memory-bringing-fine-grained-enclaves-to-risc-v) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#timber-v-tag-isolated-memory-bringing-fine-grained-enclaves-to-risc-v)**
### 作者
* Samuel Weiser, Graz University of Technology
* Mario Werner, Graz University of Technology
* Ferdinand Brasser, Technische Universität Darmstadt
* Maja Malenko, Graz University of Technology
* Stefan Mangard, Graz University of Technology
* Ahmad-Reza Sadeghi, Technische Universität Darmstadt
### 摘要
> 嵌入式计算设备在新兴的物联网（IoT）中被广泛使用。然而，它们的广泛部署引发了攻击者对这些设备的目标攻击的动机，正如最近的几次攻击所证明的那样。由于物联网设备的长时间使用寿命，需要一些手段来保护存在潜在漏洞的敏感代码，这些漏洞可能在部署后很久才被发现。已经提出了标记内存作为在运行时强制执行各种细粒度安全策略的机制。然而，目前没有任何现有的标记内存方案能够提供高效灵活的隔离执行环境。
> 
> 
> 
> 
> 
> 
> 
> 我们提出了TIMBER-V，一种新的标记内存架构，可以在小型嵌入式系统上灵活高效地隔离代码和数据。我们克服了以前方案的几个局限性。我们利用内存保护单元来隔离单个进程，从而增强了标记隔离，并保持了低内存开销。TIMBER-V显着减少了内存碎片化问题，并改善了跨安全边界的不可信内存的动态重用。TIMBER-V实现了不同安全域之间执行堆栈的新型共享，除了交错堆。TIMBER-V与现有代码兼容，支持实时约束，并且是开源的。我们通过在RISC-V模拟器上评估我们的概念验证实现来展示TIMBER-V的效率。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/timber-v-tag-isolated-memory-bringing-fine-grained-enclaves-to-risc-v/](https://www.ndss-symposium.org/ndss-paper/timber-v-tag-isolated-memory-bringing-fine-grained-enclaves-to-risc-v/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_10-3_Weiser_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_10-3_Weiser_paper.pdf)
## Establishing Software Root of Trust Unconditionally.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#establishing-software-root-of-trust-unconditionally) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#establishing-software-root-of-trust-unconditionally)**
### 作者
* Virgil D. Gligor, Carnegie Mellon University
* Maverick S. L. Woo, Carnegie Mellon University
### 摘要
> Root-of-Trust (RoT)的建立确保不受信任系统的状态只包含由可信本地验证者选择的内容，并且系统代码从该状态开始执行，或者验证者发现未解释的内容的存在。这确保了程序引导到没有持久恶意软件的系统状态。对手不再能够悄悄地控制用户的本地系统。
> 
> 
> 
> 
> 
> 
> 
> 我们无条件地建立RoT，即不依赖于密钥、可信硬件模块和指令，或者对对手计算能力的限制。满足系统芯片组和设备控制器的规范，以及一个外部的真随机数源（比如商用量子真随机数生成器）即可。我们的系统规范是具体的Word Random Access Machine (cWRAM)模型，它是最接近具有大型指令集的真实系统的计算模型。
> 
> 
> 
> 
> 
> 
> 
> 我们定义了RoT建立的要求，并解释了它们与过去attestation协议的区别。然后，我们介绍了一种基于新的计算原语的RoT建立协议，在cWRAM的对抗评估中具有具体的（非渐近）最优空间-时间界限。这个新的原语是一个随机多项式，在一个质数阶域中具有k-独立均匀系数。它的碰撞属性比cWRAM评估中的k-独立（几乎）通用哈希函数更强，并且足以在建立RoT之前证明不存在恶意软件状态。初步测量结果显示，即使对于非常大的k，随机多项式在商品硬件上的性能也是可行的。
> 
> 
> 
> 
> 
> 
> 
> 为了证明随机多项式的具体最优性，我们提出了一个独立复杂性问题的结果：当cWRAM的执行空间和时间同时最小化时，Horner规则程序是唯一最优的。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/establishing-software-root-of-trust-unconditionally/](https://www.ndss-symposium.org/ndss-paper/establishing-software-root-of-trust-unconditionally/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_10-4_Gligor_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_10-4_Gligor_paper.pdf)
## Graph-based Security and Privacy Analytics via Collective Classification with Joint Weight Learning and Propagation.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#graph-based-security-and-privacy-analytics-via-collective-classification-with-joint-weight-learning-and-propagation) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#graph-based-security-and-privacy-analytics-via-collective-classification-with-joint-weight-learning-and-propagation)**
### 作者
* Binghui Wang, Iowa State University
* Jinyuan Jia, Iowa State University
* Neil Zhenqiang Gong, Iowa State University
### 摘要
> 许多安全和隐私问题可以作为图分类问题建模，其中图中的节点通过集体分类同时进行分类。针对基于图的安全和隐私分析，最先进的集体分类方法遵循以下范式：给图的边分配权重，迭代地在加权图中传播节点的声誉分数，并使用最终的声誉分数对图中的节点进行分类。关键挑战是分配边的权重，使得如果两个相应的节点具有相同的标签，则边的权重较大，否则边的权重较小。尽管集体分类已经研究并应用于安全和隐私问题十多年，如何解决这个挑战仍然是一个悬而未决的问题。例如，大多数现有方法仅为所有边设置一个常量权重。
> 
> 
> 
> 
> 
> 
> 
> 在这项工作中，我们提出了一个新颖的集体分类框架来解决这个长期存在的挑战。我们首先将学习边的权重表述为一个优化问题，该问题量化了我们希望实现的最终声誉分数的目标。然而，由于最终的声誉分数与边的权重之间存在非常复杂的关系，所以解决优化问题在计算上是困难的。为了解决计算上的挑战，我们提出了联合学习边的权重和传播声誉分数的方法，这本质上是对优化问题的近似解。我们使用来自不同应用场景的四个大规模真实世界数据集，如社交网络中的Sybil检测、Yelp中的虚假评论检测和属性推理攻击等，将我们的框架与基于图的安全和隐私分析的最先进方法进行比较。我们的结果表明，我们的框架在可接受的计算开销下比最先进的方法实现了更高的准确性。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/graph-based-security-and-privacy-analytics-via-collective-classification-with-joint-weight-learning-and-propagation/](https://www.ndss-symposium.org/ndss-paper/graph-based-security-and-privacy-analytics-via-collective-classification-with-joint-weight-learning-and-propagation/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_11-1_Wang_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_11-1_Wang_paper.pdf)
## Enemy At the Gateways: Censorship-Resilient Proxy Distribution Using Game Theory.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#enemy-at-the-gateways-censorship-resilient-proxy-distribution-using-game-theory) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#enemy-at-the-gateways-censorship-resilient-proxy-distribution-using-game-theory)**
### 作者
* Milad Nasr, University of Massachusetts Amherst
* Sadegh Farhang, Pennsylvania State University
* Amir Houmansadr, University of Massachusetts Amherst
* Jens Grossklags, Technical University of Munich
### 摘要
> 被广泛使用的基于代理的绕过系统（如Tor）所使用的核心技术是在受限制的客户端之间私下和选择性地分布绕过代理的IP地址，以使其对审查者保密。在Tor中，这些私下共享的代理被称为桥接器。这种机制面临的一个关键挑战是内部攻击问题：审查代理可以冒充善意的受限制客户端，以了解（然后阻止）私下共享的绕过代理。为了最大程度降低内部攻击威胁的风险，实际应用中的绕过系统（如Tor）使用各种代理分配机制，以最小化审查者对代理的枚举风险，同时提供对大量受限制客户端的访问。
> 
> 
> 
> 
> 
> 
> 
> 不幸的是，现有的代理分配机制（如Tor所使用的机制）基于临时启发式方法，没有提供理论保证，并且在实践中容易被规避。在本文中，我们采用系统化的方法来解决绕过系统中的代理分配问题，并建立了一个博弈论框架。我们将代理分配问题建模为绕过系统操作者与审查者之间的博弈，并使用博弈论来推导各方的最优策略。利用我们的框架，我们推导出在最强审查对手采取最佳审查行动的情况下，像Tor这样的绕过系统的最佳（最优）代理分配机制。
> 
> 
> 
> 
> 
> 
> 
> 我们进行了大量模拟实验，评估了我们的最优代理分配算法在各种对抗和网络设置下的性能。我们展示了该算法相对于现有技术的优越性能，即使在面对最强审查对手时也能提供更强大的抗审查能力。我们的研究建立了一个通用的最优代理分配框架，可应用于各种类型的绕过系统和各种威胁模型。我们通过总结经验和建议的方式，为基于代理的绕过系统的设计提供了指导。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/enemy-at-the-gateways-censorship-resilient-proxy-distribution-using-game-theory/](https://www.ndss-symposium.org/ndss-paper/enemy-at-the-gateways-censorship-resilient-proxy-distribution-using-game-theory/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_11-2_Nasr_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_11-2_Nasr_paper.pdf)
## Neuro-Symbolic Execution: Augmenting Symbolic Execution with Neural Constraints.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#neuro-symbolic-execution-augmenting-symbolic-execution-with-neural-constraints) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#neuro-symbolic-execution-augmenting-symbolic-execution-with-neural-constraints)**
### 作者
* Shiqi Shen, National University of Singapore
* Shweta Shinde, National University of Singapore
* Soundarya Ramesh, National University of Singapore
* Abhik Roychoudhury, National University of Singapore
* Prateek Saxena, National University of Singapore
### 摘要
> 符号执行是程序分析的一种强大技术。然而，在实际可行性方面存在许多限制：路径爆炸问题限制了可扩展性，需要特定语言的实现，无法处理复杂依赖关系以及底层可满足性检查器支持的理论表达能力有限。通常，变量之间的关系无法直接表达为纯符号约束。为此，我们提出了一种新方法——神经符号执行——它通过神经网络学习程序中感兴趣的值之间的关系的近似表示。我们开发了一种混合约束的可满足性检查过程，涉及符号表达式和神经表示。我们将这种新方法实现为一个名为NeuEx的工具，作为KLEE的扩展，KLEE是一种最先进的动态符号执行引擎。NeuEx在12小时内在7个程序的基准测试中找到了33个漏洞。这相比于纯粹的KLEE，提高了94%的错误发现效力。我们展示了这种新方法推动执行通过KLEE和其他DSE扩展无法解决的困难路径，消除了纯SMT技术的限制。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/neuro-symbolic-execution-augmenting-symbolic-execution-with-neural-constraints/](https://www.ndss-symposium.org/ndss-paper/neuro-symbolic-execution-augmenting-symbolic-execution-with-neural-constraints/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_11-3_Shiqi_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_11-3_Shiqi_paper.pdf)
## Neural Machine Translation Inspired Binary Code Similarity Comparison beyond Function Pairs.
🌍 [English](../../../docs/en/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#neural-machine-translation-inspired-binary-code-similarity-comparison-beyond-function-pairs) | **[简体中文](../../../docs/zh-CN/Network%20and%20Distributed%20System%20Security%20Symposium/Network%20and%20Distributed%20System%20Security%20Symposium%202019.md#neural-machine-translation-inspired-binary-code-similarity-comparison-beyond-function-pairs)**
### 作者
* Fei Zuo, University of South Carolina
* Xiaopeng Li, University of South Carolina
* Patrick Young, Temple University
* Lannan Luo, University of South Carolina
* Qiang Zeng, University of South Carolina
* Zhexin Zhang, University of South Carolina
### 摘要
> 二进制代码分析可以在没有访问相应源代码的情况下对二进制代码进行分析。它被广泛应用于漏洞发现、恶意代码剖析、攻击调查等方面。二进制代码在反汇编后以汇编语言表示。这启发我们可以借鉴自然语言处理（NLP）的思想和技术来进行二进制分析，NLP是一个专注于处理不同自然语言文本的丰富领域。我们注意到二进制代码分析和NLP有很多相似的主题，比如语义提取、总结和分类。本研究利用这些思想来解决两个重要的代码相似性比较问题：（一）给定不同指令集架构的基本块对，确定它们的语义是否相似；（二）给定一个感兴趣的代码片段，确定它是否包含在另一个不同架构的汇编代码中。这两个问题的解决方案有许多应用，如跨架构代码抄袭检测、恶意代码识别和漏洞发现。
> 
> 
> 
> 
> 
> 
> 
> 尽管问题一显然很重要，但现有的解决方案要么效率低下，要么不精确。受到神经机器翻译（NMT）的启发，这是一种能够很好地处理不同自然语言文本的新方法，我们将指令视为单词，基本块视为句子，并提出了一种新的跨（汇编）语言深度学习方法来解决第一个问题，在效率和准确性方面取得了较高的成果。
> 
> 
> 
> 
> 
> 
> 
> 至于问题二，最近已经提出了许多解决方案来解决函数级别的问题。然而，进行跨架构代码相似性比较远远超出了函数对的范畴，是一项新的、更具挑战性的任务。采用我们的跨架构基本块比较技术，我们提出了问题二的一个有效解决方案。我们实现了一个原型系统并进行了全面评估。我们的方法与现有解决方案在问题一方面进行了比较，结果显示我们的系统在准确性、效率和可扩展性方面优于它们。而利用系统进行的案例研究表明，我们对问题二的解决方案是有效的。此外，本研究展示了如何将NLP的思想和技术应用于大规模二进制代码分析。

### 链接
- **URL:** [https://www.ndss-symposium.org/ndss-paper/neural-machine-translation-inspired-binary-code-similarity-comparison-beyond-function-pairs/](https://www.ndss-symposium.org/ndss-paper/neural-machine-translation-inspired-binary-code-similarity-comparison-beyond-function-pairs/)
- **PDF:** [https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_11-4_Zuo_paper.pdf](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_11-4_Zuo_paper.pdf)
