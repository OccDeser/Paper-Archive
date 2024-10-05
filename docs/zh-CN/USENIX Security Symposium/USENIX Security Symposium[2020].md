# USENIX Security Symposium[2020]
## A Formal Analysis of IEEE 802.11's WPA2: Countering the Kracks Caused by Cracking the Counters.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-formal-analysis-of-ieee-802-11s-wpa2-countering-the-kracks-caused-by-cracking-the-counters) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-formal-analysis-of-ieee-802-11s-wpa2-countering-the-kracks-caused-by-cracking-the-counters)**
### 作者
* Cas Cremers, CISPA Helmholtz Center for Information Security
* Benjamin Kiesl, CISPA Helmholtz Center for Information Security
* Niklas Medinger, CISPA Helmholtz Center for Information Security
### 摘要
> IEEE 802.11 WPA2协议广泛用于全球网络连接的保护。该协议在三千多页的规范中规定，并且多年来已经接受了各种修补程序，因此非常复杂，难以分析。特别是它涉及各种以微妙方式相互作用的机制，这使得模块化推理几乎不可能。或许正因为如此，至今没有任何形式或密码学论证表明对核心协议的修补程序确实能够阻止相应的攻击，例如2017年臭名昭著的KRACK攻击。
> 
> 在这项工作中，我们解决了这个问题，并对WPA2协议设计进行了广泛的形式化分析。我们的模型是第一个足够详细以侦测到KRACK攻击的模型；它包括四方握手、组密钥握手、WNM睡眠模式、数据机密协议以及它们复杂的相互作用。
> 
> 我们的分析提供了第一个关于修补后的WPA2协议在面对复杂的现代攻击时是否满足其所声称的安全保证的安全论证，无论在任何形式上。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/cremers](https://www.usenix.org/conference/usenixsecurity20/presentation/cremers)
- **PDF:** [https://www.usenix.org/system/files/sec20-cremers.pdf](https://www.usenix.org/system/files/sec20-cremers.pdf)
## Frankenstein: Advanced Wireless Fuzzing to Exploit New Bluetooth Escalation Targets.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#frankenstein-advanced-wireless-fuzzing-to-exploit-new-bluetooth-escalation-targets) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#frankenstein-advanced-wireless-fuzzing-to-exploit-new-bluetooth-escalation-targets)**
### 作者
* Jan Ruge, Secure Mobile Networking Lab, TU Darmstadt
* Jiska Classen, Secure Mobile Networking Lab, TU Darmstadt
* Francesco Gringoli, Dept. of Information Engineering, University of Brescia
* Matthias Hollick, Secure Mobile Networking Lab, TU Darmstadt
### 摘要
> 无线通信标准和实现在安全方面存在许多问题。由于大多数实现和固件都是闭源的，模糊测试仍然是发现已部署系统中远程代码执行（RCE）漏洞的主要方法之一。通用无线模糊测试存在几个缺点，如速度受限，重复性有限，以及调试能力受限。在本文中，我们介绍了基于先进固件仿真的模糊测试框架Frankenstein，以解决这些问题。Frankenstein使固件转储“复活”，并向芯片的虚拟调制解调器提供模糊输入。我们的新模糊测试方法的加速足以保持与附加操作系统的互操作性，从而引发逼真的全栈行为。我们通过在广泛使用于大多数苹果设备、许多三星智能手机、树莓派等设备中的Broadcom和Cypress蓝牙堆栈中发现了三个零点击漏洞来展示Frankenstein的潜力。
> 
> 在蓝牙芯片上存在RCE的情况下，攻击者可能会超越芯片的边界升级其权限。我们发现了一个Wi-Fi/蓝牙共存问题，可以导致多个操作系统内核崩溃，以及蓝牙5.2规范中的设计缺陷，允许从主机中提取链接密钥。关闭蓝牙并不能完全禁用芯片，这使得防御RCE攻击变得困难。此外，当在这些设备上测试我们基于芯片的漏洞时，我们发现了BlueFrag，这是一个与芯片无关的Android RCE漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/ruge](https://www.usenix.org/conference/usenixsecurity20/presentation/ruge)
## Breaking Secure Pairing of Bluetooth Low Energy Using Downgrade Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#breaking-secure-pairing-of-bluetooth-low-energy-using-downgrade-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#breaking-secure-pairing-of-bluetooth-low-energy-using-downgrade-attacks)**
### 作者
* Yue Zhang, College of Information Science and Technology, Jinan University (Department of Computer Science, University of Central Florida)
* Jian Weng, College of Information Science and Technology, Jinan University
* Rajib Dey, Department of Computer Science, University of Central Florida
* Yier Jin, Department of Electrical and Computer Engineering, University of Florida
* Zhiqiang Lin, Computer Science and Engineering, The Ohio State University
* Xinwen Fu, Department of Computer Science, University of Central Florida
### 摘要
> 为了击败诸如中间人（MITM）攻击之类的安全威胁，蓝牙低功耗（BLE）4.2和5.x引入了仅安全连接（SCO）模式。在此模式下，BLE设备只能接受发起者（如Android手机）的安全配对，如Passkey输入和数字比较。然而，BLE规范并不要求发起者采用SCO模式，并且没有说明BLE编程框架应该如何实现此模式。本文中，我们展示了发起者的BLE编程框架必须正确处理SCO初始化、状态管理、错误处理和绑定管理，否则严重漏洞可以被利用进行降级攻击，迫使BLE配对协议在用户不知情的情况下运行在不安全模式下。为了验证我们的发现，我们使用5部Android手机测试了18个受欢迎的BLE商业产品。我们的实验结果证明了MITM攻击（由于降级）对所有这些产品都是可能的。更重要的是，由于BLE编程框架存在的系统性缺陷，所有Android上的BLE应用程序都容易受到我们的降级攻击。为了抵御我们的攻击，我们在Android开放源代码项目（AOSP）之上建立了一个用于SCO模式的原型。最后，除了Android之外，我们还发现包括iOS、macOS、Windows和Linux在内的所有主要操作系统都没有正确支持SCO模式。我们已向蓝牙特别兴趣小组、谷歌、苹果、德州仪器和微软报告了所发现的BLE配对漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zhang-yue](https://www.usenix.org/conference/usenixsecurity20/presentation/zhang-yue)
- **PDF:** [https://www.usenix.org/system/files/sec20-zhang-yue.pdf](https://www.usenix.org/system/files/sec20-zhang-yue.pdf)
## You Are What You Broadcast: Identification of Mobile and IoT Devices from (Public) WiFi.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#you-are-what-you-broadcast-identification-of-mobile-and-iot-devices-from-public-wifi) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#you-are-what-you-broadcast-identification-of-mobile-and-iot-devices-from-public-wifi)**
### 作者
* Lingjing Yu, Institute of Information Engineering, Chinese Academy of Sciences; School of Cybersecurity, University of the Chinese Academy of Sciences
* Bo Luo, The University of Kansas
* Jun Ma, Tsinghua University
* Zhaoyu Zhou, Institute of Information Engineering, Chinese Academy of Sciences
* Qingyun Liu, Institute of Information Engineering, Chinese Academy of Sciences
### 摘要
> 随着移动设备和WiFi热点的快速增长，安全风险不断出现。在实践中，对企业和公共无线网络的管理员来说，识别连接到网络的设备类型和/或型号非常重要，以设置访问/防火墙规则，检查已知漏洞或相应地配置入侵检测系统（IDS）。当移动设备加入（公共）无线网络时，并不必报告它们的详细身份，而攻击者可以轻易伪造设备属性。在文献中，已经做出了一些工作来利用网络流量特征进行设备识别。在本文中，我们提出了一种针对网络管理员和普通用户的新型设备识别机制——OWL。我们首先从被动接收的广播和组播（BC / MC）数据包中提取网络流量特征。学习嵌入表示以将特征建模为六个独立且互补的视图。然后，我们提出了一种新的多视图宽深度学习（MvWDL）框架，该框架在泛化性能和标签视图交互性能上进行了优化。同时，设计了一种恶意设备检测机制，以评估多视图分类器的一致性，以识别异常。最后，我们通过实验、案例研究和定性分析来展示OWL的性能。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/yu](https://www.usenix.org/conference/usenixsecurity20/presentation/yu)
- **PDF:** [https://www.usenix.org/system/files/sec20-yu.pdf](https://www.usenix.org/system/files/sec20-yu.pdf)
## Call Me Maybe: Eavesdropping Encrypted LTE Calls With ReVoLTE.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#call-me-maybe-eavesdropping-encrypted-lte-calls-with-revolte) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#call-me-maybe-eavesdropping-encrypted-lte-calls-with-revolte)**
### 作者
* David Rupprecht, Ruhr University Bochum
* Katharina Kohls, Ruhr University Bochum
* Thorsten Holz, Ruhr University Bochum
* Christina Pöpper, NYU Abu Dhabi
### 摘要
> Voice over LTE（VoLTE）是一种基于分组的电话服务，无缝集成到长期演进（LTE）标准中，并由大多数电信供应商实际部署。由于广泛使用，成功攻击VoLTE可能会影响全球大量用户。在这项研究中，我们介绍了ReVoLTE，一种利用LTE实现漏洞恢复加密VoLTE通话内容的攻击方法，从而使对手能够窃听电话通话。ReVoLTE利用无线电层上的可预测键流重用，使对手能够以最小的资源解密录音通话。通过一系列初步实验和实际世界实验，我们成功证明了ReVoLTE的可行性，并分析了影响我们在商业网络中进行攻击的各种关键因素。为了缓解ReVoLTE攻击，我们提出并讨论了供应商和设备供应商可以部署的短期和长期对策。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/rupprecht](https://www.usenix.org/conference/usenixsecurity20/presentation/rupprecht)
- **PDF:** [https://www.usenix.org/system/files/sec20-rupprecht.pdf](https://www.usenix.org/system/files/sec20-rupprecht.pdf)
## A Comprehensive Quality Evaluation of Security and Privacy Advice on the Web.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-comprehensive-quality-evaluation-of-security-and-privacy-advice-on-the-web) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-comprehensive-quality-evaluation-of-security-and-privacy-advice-on-the-web)**
### 作者
* Elissa M. Redmiles, University of Maryland
* Noel Warford, University of Maryland
* Amritha Jayanti, University of Maryland
* Aravind Koneru, University of Maryland
* Sean Kross, University of California, San Diego
* Miraida Morales, Rutgers University
* Rock Stevens, University of Maryland
* Michelle L. Mazurek, University of Maryland
### 摘要
> 最终用户从各种渠道学习防御性安全行为，包括大量在线文章中提供的安全建议。人们花费了大量精力来让用户遵循这些建议。令人惊讶的是，关于这些建议的质量很少有人了解：它是否易懂？是否可行？是否有效？为了回答这些问题，我们首先进行了一项大规模的用户驱动测量研究，以确定在1,264篇在线安全与隐私建议文档中包含的374个独特的推荐行为。其次，我们开发并验证了用于评估安全建议质量的测量方法，包括易懂性、可行性和可感知功效。第三，我们使用这些测量方法，在1,586名用户和41名专业安全专家参与的用户研究中评估了这374个独特的安全建议。我们的研究结果表明存在建议优先级的危机。大多数建议被大多数用户认为至少在某种程度上可行，并且在某种程度上易懂。然而，用户和专家都难以确定这些建议的优先级。例如，专家认为数百种研究行为中的89%是有效的，并将其中的118种列为用户应该做的“前五件事”，这使得最终用户必须自行确定优先级并采取行动来保护自己。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/redmiles](https://www.usenix.org/conference/usenixsecurity20/presentation/redmiles)
- **PDF:** [https://www.usenix.org/system/files/sec20-redmiles.pdf](https://www.usenix.org/system/files/sec20-redmiles.pdf)
## Understanding security mistakes developers make: Qualitative analysis from Build It, Break It, Fix It.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#understanding-security-mistakes-developers-make-qualitative-analysis-from-build-it-break-it-fix-it) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#understanding-security-mistakes-developers-make-qualitative-analysis-from-build-it-break-it-fix-it)**
### 作者
* Daniel Votipka, University of Maryland
* Kelsey R. Fulton, University of Maryland
* James Parker, University of Maryland
* Matthew Hou, University of Maryland
* Michelle L. Mazurek, University of Maryland
* Michael Hicks, University of Maryland
### 摘要
> 安全软件开发是一项具有挑战性的任务，需要考虑许多可能的威胁和缓解措施。本文调查了程序员为什么会在有一定安全经验的情况下产生与安全相关的错误。为了做到这一点，我们对参加一个模拟真实约束条件（正确性、性能和安全性）的安全编程竞赛的94个提交进行了深入分析。除了编写安全代码外，参与者还被要求在其他团队的程序中搜索漏洞；总共，团队提交了866个针对我们考虑的提交的攻击。在为期六个月的密集期间，我们使用迭代式的开放编码方法对每个提交的项目和漏洞进行了人工但系统化的表征（包括我们自己发现的漏洞）。我们根据类型、攻击者控制允许程度和易于利用程度为漏洞打上标签，根据安全实施策略为项目打上标签。出现了几种模式。例如，简单错误最不常见：只有21%的项目引入了这样的错误。相反，由于对安全概念的误解而导致的漏洞明显更常见，出现在78%的项目中。我们的研究结果对改进安全编程API、API文档、漏洞发现工具和安全教育具有重要意义。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/votipka-understanding](https://www.usenix.org/conference/usenixsecurity20/presentation/votipka-understanding)
- **PDF:** [https://www.usenix.org/system/files/sec20-votipka-understanding.pdf](https://www.usenix.org/system/files/sec20-votipka-understanding.pdf)
## Empirical Measurement of Systemic 2FA Usability.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#empirical-measurement-of-systemic-2fa-usability) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#empirical-measurement-of-systemic-2fa-usability)**
### 作者
* Joshua Reynolds, University of Illinois at Urbana-Champaign and University of California, Berkeley and International Computer Science Institute
* Nikita Samarin, University of California, Berkeley and International Computer Science Institute
* Joseph Barnes, University of Illinois at Urbana-Champaign
* Taylor Judd, University of Illinois at Urbana-Champaign
* Joshua Mason, University of Illinois at Urbana-Champaign
* Michael Bailey, University of Illinois at Urbana-Champaign
* Serge Egelman, University of California, Berkeley and International Computer Science Institute
### 摘要
> 双因素认证（2FA）加强了组织对用户账户被攻破的防护，但也在组织的关键任务中增加了一个额外步骤。我们研究了对2FA系统操作日志进行定量分析的程度，看是否支持并挑战了最近用户研究和调查所确定的2FA系统可用性挑战的结果。通过使用保存在两所公立大学的数千万个日志和记录，我们量化了强制性2FA实施对组织及其员工的规模影响。我们展示了设备记忆、碎片化的登录服务以及认证超时对用户负担的乘法效应。我们发现用户负担与其他大型组织普遍存在的合规性和风险管理时间要求并没有太大差异。我们调查了超过二十分之一的2FA操作被中止或失败的原因，以及用户体验在不同用户之间的差异。我们希望我们的分析能赋予更多组织使用2FA来保护自身的能力。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/reynolds](https://www.usenix.org/conference/usenixsecurity20/presentation/reynolds)
- **PDF:** [https://www.usenix.org/system/files/sec20-reynolds.pdf](https://www.usenix.org/system/files/sec20-reynolds.pdf)
## What Twitter Knows: Characterizing Ad Targeting Practices, User Perceptions, and Ad Explanations Through Users' Own Twitter Data.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#what-twitter-knows-characterizing-ad-targeting-practices-user-perceptions-and-ad-explanations-through-users-own-twitter-data) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#what-twitter-knows-characterizing-ad-targeting-practices-user-perceptions-and-ad-explanations-through-users-own-twitter-data)**
### 作者
* Mir, University of Washington / University of Chicago
* a Wei, University of Washington / University of Chicago
* Madison Stamos, University of Chicago
* Sophie Veys, University of Chicago
* Nathan Reitinger, University of Maryland
* Justin Goodman, University of Maryland
* Margot Herman, University of Chicago
* Dorota Filipczuk, University of Southampton
* Ben Weinshel, University of Chicago
* Michelle L. Mazurek, University of Maryland
* Blase Ur, University of Chicago
### 摘要
> 虽然有针对性的广告受到隐私研究人员的重视，但仍存在许多关键的实证问题。特别是，目前只有少数几种主要广告平台使用的定向机制被很好地理解，而研究用户对广告定向的看法通常依赖于假设情境。此外，现有的透明度机制，从数据访问权到广告解释，实际上对于其目标用户的服务程度尚不清楚。为了深入了解当前定向广告生态系统，本文使用了231个参与者的个人Twitter数据，包括他们展示的广告和相关的定向标准，进行了测量和用户研究。我们发现在之前的研究中忽视了许多定向机制，包括广告主上传的特定用户列表、类似受众和再营销活动，这些在Twitter上被广泛使用。关键是，参与者发现这些未经研究的实践对隐私的侵犯程度最大。参与者还发现，该研究设计的广告解释比Twitter当前的广告解释更有用、更易理解，并且总体上更受欢迎。我们的研究结果强调了数据访问的好处，描述了未被研究的定向广告方面，并确定了改善定向广告透明度的潜在方向。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/wei](https://www.usenix.org/conference/usenixsecurity20/presentation/wei)
- **PDF:** [https://www.usenix.org/system/files/sec20-wei.pdf](https://www.usenix.org/system/files/sec20-wei.pdf)
## The Impact of Ad-Blockers on Product Search and Purchase Behavior: A Lab Experiment.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-impact-of-ad-blockers-on-product-search-and-purchase-behavior-a-lab-experiment) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-impact-of-ad-blockers-on-product-search-and-purchase-behavior-a-lab-experiment)**
### 作者
* Alisa Frik, International Computer Science Institute / UC Berkeley
* Amelia Havil, Heinz College, Carnegie Mellon University
* Aless, Heinz College, Carnegie Mellon University
* ro Acquisti, Heinz College, Carnegie Mellon University
### 摘要
> 广告拦截应用程序在互联网用户中越来越受欢迎。广告拦截器提供各种隐私和安全增强功能：它们可以减少个人数据收集和恶意广告曝光，帮助保护用户的决策自主权，降低用户成本（通过提高页面加载速度），并提升浏览体验（通过减少视觉干扰）。另一方面，网络广告业声称广告可以通过帮助用户更快地找到更好、更便宜的交易来增加消费者的经济福祉。如果确实如此，使用广告拦截器将会剥夺消费者享受这些好处的机会。然而，关于广告拦截器实际对经济影响的了解很少。
> 
> 我们设计了一个带有真实经济激励的实验室实验（N=212），以了解广告拦截器对消费者产品搜索和购买行为，以及由此产生的消费者结果的影响。我们重点研究拦截情境广告（针对个别、潜在敏感的情境，如搜索引擎中的搜索查询或网页内容）对参与者在线搜索和购买各种产品，以及由此产生的消费者福祉的影响。
> 
> 我们发现，拦截情境广告对参与者选择购买产品的价格、搜索这些产品所花费的时间以及对所选择的产品、价格和感知质量的满意度没有统计学显著影响。因此，我们不拒绝当这些广告被拦截或显示时，消费者行为和结果保持不变的零假设。我们得出结论，在保护隐私和安全方面获得益处的情况下，使用广告拦截器似乎不会损害消费者的经济福祉（根据实验中捕获的指标）。我们讨论了这项工作在终端用户隐私、研究局限性以及未来工作中延伸这些结果方面的意义。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/frik](https://www.usenix.org/conference/usenixsecurity20/presentation/frik)
- **PDF:** [https://www.usenix.org/system/files/sec20-frik.pdf](https://www.usenix.org/system/files/sec20-frik.pdf)
## Symbolic execution with SymCC: Don't interpret, compile!
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#symbolic-execution-with-symcc-dont-interpret-compile) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#symbolic-execution-with-symcc-dont-interpret-compile)**
### 作者
* Sebastian Poeplau, EURECOM
* Aurélien Francillon, EURECOM
### 摘要
> 实用符号执行的一个主要障碍是速度，特别是与模糊测试等接近原生速度的解决方案相比。我们提出了一种编译为基础的符号执行方法，其性能比最先进的实现提高了数个数量级。我们介绍了SymCC，一种基于LLVM的C和C++编译器，可以将符号执行直接嵌入二进制文件中。软件开发人员可以将其作为clang和clang++的替代品使用，并且我们展示了如何轻松地为其他语言添加支持。与KLEE相比，SymCC的速度提高了高达三个数量级，并且平均因子为12。它还优于Qsym，这是一个最近在其他实现上显示出巨大性能改进的系统，其速度提高了高达两个数量级，并且平均因子为10。在真实世界的软件上使用它，我们发现我们的方法始终可以实现更高的覆盖率，并且我们发现了在经过大量测试的OpenJPEG项目中的两个漏洞，这些漏洞已被项目维护人员确认并分配了CVE标识符。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/poeplau](https://www.usenix.org/conference/usenixsecurity20/presentation/poeplau)
- **PDF:** [https://www.usenix.org/system/files/sec20-poeplau.pdf](https://www.usenix.org/system/files/sec20-poeplau.pdf)
## Sys: A Static/Symbolic Tool for Finding Good Bugs in Good (Browser) Code.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#sys-a-static-symbolic-tool-for-finding-good-bugs-in-good-browser-code) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#sys-a-static-symbolic-tool-for-finding-good-bugs-in-good-browser-code)**
### 作者
* Fraser Brown, Stanford University
* Deian Stefan, UC San Diego
* Dawson Engler, Stanford University
### 摘要
> 我们描述并评估了一种可扩展的漏洞发现工具Sys，该工具旨在自动在庞大的代码库中发现安全漏洞，即使易于发现的漏洞已经通过多年的积极自动检查被清理干净。Sys使用两步方法来发现这些棘手的错误。首先，它使用用户可扩展的静态检查器将庞大的系统（数千万行）分解成小块，以快速找到并标记潜在的错误点。其次，它使用用户可扩展的符号执行来深入检查这些潜在的错误点以寻找实际的漏洞。检查器和系统本身都很小（总共6KLOC）。Sys非常灵活，因为用户必须能够利用领域或系统特定的知识来检测错误并消除真实代码库中的误报。Sys在经过充分检查的代码中发现了许多安全漏洞（51个漏洞，43个已确认），包括Chrome和Firefox网页浏览器以及一些符号工具难以处理的FreeBSD操作系统代码。Sys的最有趣的结果包括：在Chrome中发现一个可利用的、有赏金的CVE漏洞，修复只用了7个小时（而补丁在两天内被倒退）；在Firefox中发现了三个有赏金的带有CVE的漏洞；以及在Chrome的音频支持中发现的一个有赏金的漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/brown](https://www.usenix.org/conference/usenixsecurity20/presentation/brown)
- **PDF:** [https://www.usenix.org/system/files/sec20-brown.pdf](https://www.usenix.org/system/files/sec20-brown.pdf)
## Everything Old is New Again: Binary Security of WebAssembly.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#everything-old-is-new-again-binary-security-of-webassembly) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#everything-old-is-new-again-binary-security-of-webassembly)**
### 作者
* Daniel Lehmann, University of Stuttgart
* Johannes Kinder, Bundeswehr University Munich
* Michael Pradel, University of Stuttgart
### 摘要
> WebAssembly是一种越来越受欢迎的编译目标，旨在通过严格分离代码和数据、强制类型以及限制间接控制流，安全地在浏览器和其他平台上运行代码。然而，内存不安全源语言中的漏洞可能会转化为WebAssembly二进制文件中的漏洞。在本文中，我们分析了WebAssembly二进制文件中漏洞的可利用程度，并与本机代码进行了比较。我们发现，许多经典漏洞在本机二进制文件中由于常见的缓解措施而不再可利用，但在WebAssembly中完全暴露。此外，WebAssembly还可以进行独特的攻击，例如覆盖所谓的常量数据或使用堆栈溢出来操纵堆。我们提出了一组攻击原语，使攻击者能够（i）对任意内存进行写入，（ii）覆盖敏感数据，以及（iii）通过改变控制流或操纵宿主环境来触发意外行为。我们提供了一组存在漏洞的概念验证应用程序，以及完整的端到端攻击，涵盖了三个WebAssembly平台。对于编译为WebAssembly的真实世界二进制文件和SPEC CPU程序的经验风险评估显示，我们的攻击原语在实践中很可能是可行的。总体而言，我们的研究结果显示WebAssembly缺乏二进制安全性，这可能令人惊讶。我们讨论了潜在的保护机制来减轻由此产生的风险。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/lehmann](https://www.usenix.org/conference/usenixsecurity20/presentation/lehmann)
- **PDF:** [https://www.usenix.org/system/files/sec20-lehmann.pdf](https://www.usenix.org/system/files/sec20-lehmann.pdf)
## AURORA: Statistical Crash Analysis for Automated Root Cause Explanation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#aurora-statistical-crash-analysis-for-automated-root-cause-explanation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#aurora-statistical-crash-analysis-for-automated-root-cause-explanation)**
### 作者
* Tim Blazytko, Ruhr-Universität Bochum
* Moritz Schlögel, Ruhr-Universität Bochum
* Cornelius Aschermann, Ruhr-Universität Bochum
* Ali Abbasi, Ruhr-Universität Bochum
* Joel Frank, Ruhr-Universität Bochum
* Simon Wörner, Ruhr-Universität Bochum
* Thorsten Holz, Ruhr-Universität Bochum
### 摘要
> 鉴于自动化软件测试技术的巨大成功，实践中发现了大量的崩溃问题。确定崩溃原因是一项耗时的工作，导致在找到崩溃和修复底层软件故障之间存在不均衡。为了解决这个问题，已经提出了各种方法，这些方法依赖于反向执行和后向污点分析等技术。然而，这些技术要么仅限于特定类型的故障，要么仅为分析人员提供汇编指令，而没有上下文信息或关于潜在故障的解释。
> 
> 在本文中，我们提出了一种自动分析方法，不仅可以确定二进制可执行文件给定崩溃输入的根本原因，还可以为分析人员提供关于崩溃输入所特征化的错误行为的上下文信息。从一个崩溃输入开始，我们生成一组多样化的类似输入，这些输入要么也使程序崩溃，要么引起良性行为。然后，我们在执行每个找到的输入时跟踪程序的状态，并生成谓词，即简单布尔表达式，用于捕捉崩溃输入和非崩溃输入之间的行为差异。对所有谓词的统计分析使我们能够识别指向根本原因的谓词，从而不仅揭示根本原因的位置，而且为分析人员提供崩溃在该位置展示的错误行为的解释。我们在名为AURORA的工具中实现了我们的方法，并在25个不同的软件故障上进行了评估。评估结果显示，AURORA能够揭示复杂错误的根本原因。例如，在开发者修复和崩溃位置之间执行了数百万条指令的情况下，它都能够成功。与现有方法相比，AURORA还能够处理根本原因和崩溃之间没有数据依赖关系的错误，例如类型混淆错误。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/blazytko](https://www.usenix.org/conference/usenixsecurity20/presentation/blazytko)
- **PDF:** [https://www.usenix.org/system/files/sec20fall_blazytko_prepub.pdf](https://www.usenix.org/system/files/sec20fall_blazytko_prepub.pdf)
## SmartVerif: Push the Limit of Automation Capability of Verifying Security Protocols by Dynamic Strategies.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#smartverif-push-the-limit-of-automation-capability-of-verifying-security-protocols-by-dynamic-strategies) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#smartverif-push-the-limit-of-automation-capability-of-verifying-security-protocols-by-dynamic-strategies)**
### 作者
* Yan Xiong, University of Science and Technology of China
* Cheng Su, University of Science and Technology of China
* Wenchao Huang, University of Science and Technology of China
* Fuyou Miao, University of Science and Technology of China
* Wansen Wang, University of Science and Technology of China
* Hengyi Ouyang, University of Science and Technology of China
### 摘要
> 目前的正式方法已成功用于发现许多安全协议中的设计缺陷。然而，由于其庞大或无限的状态空间，自动分析协议仍然具有挑战性。本文提出了SmartVerif，一种新颖的通用框架，推动了现有验证方法自动化能力的限制。其主要技术贡献是SmartVerif内部的动态策略，可用于智能搜索证明路径。与现有静态策略的非平凡且容易出错的设计不同，我们的动态策略的设计简单灵活：它可以根据安全协议自动优化，无需人类干预。通过优化后的策略，SmartVerif可以定位并证明支持引理，从而提高验证成功的概率。设计策略的洞察是，当给定随机策略时，表示支持引理的节点在错误的证明路径上的概率较低。因此，我们通过引入强化学习算法围绕这一洞察实现了策略。我们还提出了几种方法来处理SmartVerif实现中的其他技术问题。实验结果表明，SmartVerif可以自动验证本文研究的所有安全协议。案例研究也验证了我们动态策略的效率。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/xiong](https://www.usenix.org/conference/usenixsecurity20/presentation/xiong)
- **PDF:** [https://www.usenix.org/system/files/sec20summer_xiong_prepub.pdf](https://www.usenix.org/system/files/sec20summer_xiong_prepub.pdf)
## BigMAC: Fine-Grained Policy Analysis of Android Firmware.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#bigmac-fine-grained-policy-analysis-of-android-firmware) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#bigmac-fine-grained-policy-analysis-of-android-firmware)**
### 作者
* Grant Hern, University of Florida
* ez, University of Florida
* Dave (Jing) Tian, Purdue University
* Anurag Swarnim Yadav, University of Florida
* Byron J. Williams, University of Florida
* Kevin R.B. Butler, University of Florida
### 摘要
> 安卓操作系统是世界上最主要的移动计算平台。为了防御恶意应用程序和外部攻击，安卓依赖于复杂的自由和强制访问控制机制，包括Linux能力，以保持最小权限。为了理解这些层之间的影响和相互作用，我们创建了一个名为BigMAC的框架，将所有层的策略结合在一起，并在支持数百万条边的细粒度图中实例化。我们的模型过滤掉实际系统中未使用的路径和类型，这些路径和类型仅通过策略分析则被考虑。与之前需要root权限的设备不同，仅使用静态固件和安卓领域知识，我们能够提取和重建运行系统的安全状态，最佳情况下实现了74.7%的进程凭证恢复和超过98%的文件系统DAC和MAC准确性。使用BigMAC，我们开发了攻击查询以发现可以受到不可信应用程序和外部设备影响的对象集合。我们对三星S8+和LG G7固件进行评估，发现了多个策略问题，包括在LG上不可信应用程序能够与内核监控服务进行通信，三星S8+允许不可信应用程序与某些根进程进行IPC，至少有24个具有CAP_SYS_ADMIN能力的进程，以及具有加载内核模块能力的system_server。我们已向相应的供应商报告了我们的发现，并向社区发布了BigMAC。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/hernandez](https://www.usenix.org/conference/usenixsecurity20/presentation/hernandez)
- **PDF:** [https://www.usenix.org/system/files/sec20-hernandez.pdf](https://www.usenix.org/system/files/sec20-hernandez.pdf)
## From Needs to Actions to Secure Apps? The Effect of Requirements and Developer Practices on App Security.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#from-needs-to-actions-to-secure-apps-the-effect-of-requirements-and-developer-practices-on-app-security) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#from-needs-to-actions-to-secure-apps-the-effect-of-requirements-and-developer-practices-on-app-security)**
### 作者
* Charles Weir, Lancaster University
* Ben Hermann, Paderborn University
* Sascha Fahl, Leibniz University Hannover
### 摘要
> 越来越多的移动设备用户因所使用的应用程序存在安全或隐私问题而受到伤害。应用开发者可以帮助防止这种情况发生；现在已经建立了廉价的安全保证技术，但开发者是否使用它们呢？如果使用，这是否反映在更安全的应用程序中呢？通过对335位成功应用开发者的调查，我们得出结论：不到四分之一的专业人士拥有安全专家的支持，不到三分之一定期使用保证技术，少数人在欧洲GDPR法规出台后进行了除了表面性变化以外的修改。令人欣慰的是，我们发现应用开发者在以下情况下更倾向于使用保证技术并进行更频繁的安全更新：（1）他们认为更需要安全性，（2）有安全专家或倡导者的参与。
> 
> 在第二阶段，我们下载了与每份已完成调查对应的应用程序，并分析了其中的SSL问题、加密API滥用和隐私泄漏，结果仅有五分之一的应用程序在我们的工具能够检测的范围内没有缺陷。我们发现，有安全专家或倡导者参与会导致更多的加密API问题，可能是因为使用了更多的加密技术；但是，被测量的缺陷数量与对安全性的需求或使用保证技术并无关系。
> 
> 这为进一步提高在应用程序二进制代码中发现安全问题的能力以及支持增加应用开发者社区中使用保证技术提供了两个重要的研究机会。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/weir](https://www.usenix.org/conference/usenixsecurity20/presentation/weir)
- **PDF:** [https://www.usenix.org/system/files/sec20-weir.pdf](https://www.usenix.org/system/files/sec20-weir.pdf)
## FANS: Fuzzing Android Native System Services via Automated Interface Analysis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fans-fuzzing-android-native-system-services-via-automated-interface-analysis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fans-fuzzing-android-native-system-services-via-automated-interface-analysis)**
### 作者
* Baozheng Liu, Institute of Network Science and Cyberspace, Tsinghua University; Beijing National Research Center for Information Science and Technology
* Chao Zhang, Institute of Network Science and Cyberspace, Tsinghua University; Beijing National Research Center for Information Science and Technology
* Guang Gong, Alpha Lab, 360 Internet Security Center
* Yishun Zeng, Institute of Network Science and Cyberspace, Tsinghua University; Beijing National Research Center for Information Science and Technology
* Haifeng Ruan, Department of Computer Science and Technology, Tsinghua University
* Jianwei Zhuge, Institute of Network Science and Cyberspace, Tsinghua University; Beijing National Research Center for Information Science and Technology
### 摘要
> 安卓的原生系统服务为用户应用提供了必要的支持和基本功能。在安卓安全方面，发现它们的漏洞至关重要。Fuzzing是一种最受欢迎的漏洞发现解决方案之一，但是在应用到安卓的原生系统服务时面临几个挑战。首先，这些服务是通过特殊的进程间通信（IPC）机制（即Binder）通过特定于服务的接口进行调用的。因此，模糊测试工具必须能够自动识别所有接口并生成特定于接口的测试用例。其次，有效的测试用例应该满足每个接口的接口模型。第三，测试用例还应满足语义要求，包括变量依赖和接口依赖。
> 
> 本文提出了一种自动化的生成式Fuzzing解决方案FANS，用于在安卓的原生系统服务中发现漏洞。它首先收集目标服务中的所有接口，并揭示深层嵌套的多层接口以进行测试。然后，它自动从目标接口的抽象语法树（AST）中提取接口模型，包括可行的事务代码和事务数据中的变量名和类型。进一步，它通过变量名和类型知识推断交易中的变量依赖，并通过生成和使用关系推断接口依赖。最后，它利用接口模型和依赖知识生成序列的交易，这些交易具有有效的格式和语义，以测试目标服务的接口。我们从头开始实现了FANS的原型，并在配备了最新版本安卓(android-9.0.0_r46)的六部智能手机上进行了评估，从成千上万次崩溃中发现了30个去重的漏洞，其中20个已被Google确认。令人惊讶的是，在模糊测试过程中，我们还发现了138个独特的Java异常。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/liu](https://www.usenix.org/conference/usenixsecurity20/presentation/liu)
- **PDF:** [https://www.usenix.org/system/files/sec20-liu.pdf](https://www.usenix.org/system/files/sec20-liu.pdf)
## Chaperone: Real-time Locking and Loss Prevention for Smartphones.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#chaperone-real-time-locking-and-loss-prevention-for-smartphones) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#chaperone-real-time-locking-and-loss-prevention-for-smartphones)**
### 作者
* Jiayi Chen, Cheriton School of Computer Science, University of Waterloo
* Urs Hengartner, Cheriton School of Computer Science, University of Waterloo
* Hassan Khan, School of Computer Science, University of Guelph
* Mohammad Mannan, Concordia Institute for Information Systems Engineering, Concordia University
### 摘要
> 智能手机的丢失每年影响数以百万计的用户，造成重大的经济和数据损失。设备追踪服务（例如Google的“找到我的设备”）可以帮助设备所有者确保或找回丢失的设备，但是物理访问（例如打开飞行模式）可以轻易规避这些服务。一种有效的防丢解决方案应该在所有者离开手机之前立即锁定手机并向所有者发出警报。我们提出了一种名为Chaperone的开源实时系统，它不需要额外的硬件设备。Chaperone利用主动声学感应通过追踪内置扬声器和麦克风来检测手机的无人看管状态。它被设计成能够在现实世界的场景下进行可靠运行，包括爆发的高频噪音、熙熙攘攘的人群和多样化的环境布局。我们通过在包括咖啡馆、餐厅、过境站和汽车在内的各种场所进行1,300多次实验，在不同的测试条件下评估了Chaperone。Chaperone为智能手机丢失事件提供了93%的整体精确率和96%的整体召回率。Chaperone对于95%的成功检测案例，在0.5秒内检测到这些事件。我们进行了一项用户研究（n = 17），以调查参与者的智能手机丢失经验，收集使用Chaperone的反馈，并研究不同的警报方法。大多数参与者对Chaperone的性能，包括检测能力、检测准确性和功耗，都表示满意。最后，我们提供了一个独立的Chaperone Android应用程序的实现。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/chen-jiayi](https://www.usenix.org/conference/usenixsecurity20/presentation/chen-jiayi)
- **PDF:** [https://www.usenix.org/system/files/sec20-chen-jiayi.pdf](https://www.usenix.org/system/files/sec20-chen-jiayi.pdf)
## Towards HTTPS Everywhere on Android: We Are Not There Yet.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#towards-https-everywhere-on-android-we-are-not-there-yet) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#towards-https-everywhere-on-android-we-are-not-there-yet)**
### 作者
* Andrea Possemato, EURECOM / IDEMIA
* Yanick Fratantonio, EURECOM
### 摘要
> 现如今，几乎所有移动应用都依赖与网络后端进行通信。鉴于应用与后端之间交换的敏感数据的性质，保障这些网络通信的安全性变得日益重要。近年来，Google为Android应用开发了多种安全机制，从多个密钥库到最近引入的新网络安全策略，即基于XML的配置文件，允许应用定义其网络安全状态。在本文中，我们首次对这些新的网络防御机制进行了全面研究。具体而言，我们对其进行了详细介绍，讨论了它们所抵御的攻击方式以及相关的威胁模型。然后，我们讨论了对这一方面的首次大规模分析。在2019年6月和7月期间，我们爬取了125,419个应用程序，并发现只有16,332个应用采用了这种新的安全特性。然后我们重点研究了这些应用，并发现开发者采用了弱的、潜在易受攻击的网络安全配置。我们注意到，2019年11月，Google加强了默认策略，这将有助于采用新的安全特性。因此，我们选择再次爬取相同的数据集（从2020年4月到6月），并重复实验：虽然更多的应用采用了这种新的安全机制，但其中很大一部分仍没有充分利用它（例如允许使用不安全的协议）。然后，我们着手探索这些弱点的根本原因（即为什么）。我们的分析表明，应用程序开发者通常从热门开发者网站（例如StackOverflow）复制粘贴易受攻击的策略。我们还发现，一些热门广告库要求应用程序削弱其安全策略，关键问题在于广告生态系统的复杂性。作为最后的贡献，我们提出了网络安全策略的新扩展，以便允许应用程序开发者嵌入有问题的广告库，而无需削弱其整个应用的安全性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/possemato](https://www.usenix.org/conference/usenixsecurity20/presentation/possemato)
- **PDF:** [https://www.usenix.org/system/files/sec20-possemato.pdf](https://www.usenix.org/system/files/sec20-possemato.pdf)
## Sunrise to Sunset: Analyzing the End-to-end Life Cycle and Effectiveness of Phishing Attacks at Scale.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#sunrise-to-sunset-analyzing-the-end-to-end-life-cycle-and-effectiveness-of-phishing-attacks-at-scale) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#sunrise-to-sunset-analyzing-the-end-to-end-life-cycle-and-effectiveness-of-phishing-attacks-at-scale)**
### 作者
* Adam Oest, Arizona State University
* Penghui Zhang, Arizona State University
* Brad Wardman, PayPal
* Eric Nunes, PayPal
* Jakub Burgis, PayPal
* Ali Z, Google
* Kurt Thomas, Google
* Adam Doupé, Arizona State University
* Gail-Joon Ahn, Arizona State University, Samsung Research
### 摘要
> 尽管存在一个庞大的反网络钓鱼生态系统，网络钓鱼攻击仍然利用检测漏洞，每天都对大量用户实施攻击。在本文中，我们通过测量大规模网络钓鱼攻击的端到端生命周期，分离和确定这些检测漏洞。我们开发了一种独特的框架——"Golden Hour"，可以在保护数万个账户的同时，被动地测量用户访问网络钓鱼页面的流量。在一年的时间里，我们的网络监控器记录了480万名访问网络钓鱼页面的受害者，不包括爬虫流量。我们利用这些事件和相关数据源，逐步分析网络钓鱼活动的各个环节：从它们首次上线的时间，到电子邮件传播，到用户访问流量，到生态系统的检测，最终到账户被攻破。我们发现，平均攻击活动从开始到最后一个受害者只需要21个小时。至少有7.42%的访问者提供了他们的凭据，并最终经历了被攻破和欺诈交易的过程。此外，一小部分非常成功的攻击活动占据了89.13%的受害者。根据我们的发现，我们提出了可能应对这些复杂攻击的机会。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/oest-sunrise](https://www.usenix.org/conference/usenixsecurity20/presentation/oest-sunrise)
- **PDF:** [https://www.usenix.org/system/files/sec20-oest-sunrise.pdf](https://www.usenix.org/system/files/sec20-oest-sunrise.pdf)
## PhishTime: Continuous Longitudinal Measurement of the Effectiveness of Anti-phishing Blacklists.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#phishtime-continuous-longitudinal-measurement-of-the-effectiveness-of-anti-phishing-blacklists) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#phishtime-continuous-longitudinal-measurement-of-the-effectiveness-of-anti-phishing-blacklists)**
### 作者
* Adam Oest, Arizona State University
* Yeganeh Safaei, Arizona State University
* Penghui Zhang, Arizona State University
* Brad Wardman, PayPal
* Kevin Tyers, PayPal
* Yan Shoshitaishvili, Arizona State University
* Adam Doupé, Arizona State University
* Gail-Joon Ahn, Arizona State University, Samsung Research
### 摘要
> 由于其在现代网络浏览器中的广泛应用，反网络钓鱼黑名单是防范大规模网络钓鱼攻击的关键防御手段。然而，网络钓鱼网站的复杂性（如逃避技术以打击这些黑名单）不断增长。然而，黑名单对于逃避型网站的有效性很难确定，并且从未有系统性的努力在时间上进行此类测量和跟踪，以获得生态系统级别的数据。
> 
> 我们提出了一个框架，用于不断识别野外未减轻的网络钓鱼网站，复制其配置的关键方面，并生成纵向实验来衡量生态系统的保护效果。在为期九个月的六次实验部署中，我们系统地启动并报告了2,862个新的（无害的）网络钓鱼网站，以评估黑名单的性能（速度和覆盖范围）和一致性，目标是改进它们。
> 
> 我们证明了系统性的长期经验测量是主动检测反网络钓鱼生态系统弱点的有效策略。通过我们的实验，我们识别并披露了几种此类弱点，包括一类行为基础的JavaScript逃避，黑名单无法检测到。我们发现，在移动设备上加强保护和扩大基于证据的报告协议是关键的生态系统改进措施，可以更好地保护用户免受常常试图逃避检测基础设施的现代网络钓鱼攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/oest-phishtime](https://www.usenix.org/conference/usenixsecurity20/presentation/oest-phishtime)
- **PDF:** [https://www.usenix.org/system/files/sec20-oest-phishtime.pdf](https://www.usenix.org/system/files/sec20-oest-phishtime.pdf)
## Who's Calling? Characterizing Robocalls through Audio and Metadata Analysis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#whos-calling-characterizing-robocalls-through-audio-and-metadata-analysis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#whos-calling-characterizing-robocalls-through-audio-and-metadata-analysis)**
### 作者
* Sathvik Prasad, North Carolina State University
* Elijah Bouma-Sims, North Carolina State University
* Athishay Kiran Mylappan, North Carolina State University
* Bradley Reaves, North Carolina State University
### 摘要
> 未经请求的电话是当今个人面临的最突出的安全问题之一。尽管关于这个问题的传闻广泛存在，但仍有许多重要问题没有被解答。在本文中，我们首次对一个长达11个月、包含66,606个线路的诱饵机进行了大规模、纵向的未经请求电话分析。通过通话元数据，我们描绘了未经请求电话的长期趋势，开发了第一种测量语音信箱垃圾邮件、wangiri攻击，并识别未解释的高频通话事件的技术。此外，我们对部分接收到的通话尝试进行机械回应，将相关通话按操作活动进行聚类，从而了解这些活动如何使用电话号码。至关重要的是，我们发现回应未经请求的电话不会增加接收到的未经请求电话的数量，推翻了普遍的观点。我们还发现，我们可以可靠地分离出单个通话活动，并在这个过程中揭示了两种不同社会保障诈骗的规模，从经验上证明大多数活动很少重复使用电话号码。这些分析为研究人员、调查人员和困扰不堪的公众提供了强大的新工具和视角。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/prasad](https://www.usenix.org/conference/usenixsecurity20/presentation/prasad)
- **PDF:** [https://www.usenix.org/system/files/sec20-prasad.pdf](https://www.usenix.org/system/files/sec20-prasad.pdf)
## See No Evil: Phishing for Permissions with False Transparency.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#see-no-evil-phishing-for-permissions-with-false-transparency) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#see-no-evil-phishing-for-permissions-with-false-transparency)**
### 作者
* Güliz Seray Tuncay, Google, University of Illinois at Urbana-Champaign
* Jingyu Qian, University of Illinois at Urbana-Champaign
* Carl A. Gunter, University of Illinois at Urbana-Champaign
### 摘要
> Android引入动态权限来向用户提供更多的上下文信息以便做出明智决策，并且在处理权限时提供更细粒度的控制。在这项研究中，我们发现运行时权限模型的正确操作依赖于某些隐含的假设，这些假设可以被对手方便地打破，以非法方式从后台获取权限，同时冒充前台应用。我们将这种不利情景称为虚假透明攻击。这些攻击对Android平台构成严重的安全威胁，因为它们使运行时权限的安全保证失效，使后台应用在请求权限时可以伪装上下文和前台应用的身份，并且允许对手利用用户对其他应用的信任来获取权限。
> 
> 通过我们在亚马逊机械土耳其人上进行的用户研究，我们证明了移动用户对运行时权限的理解使他们容易受到这种攻击方式的影响。我们精心设计了攻击策略，以使其具有说服力，并且通过用户研究验证了我们设计策略的有效性。为了展示我们攻击的可行性，我们在一个真实环境中进行了实验室用户研究，并且证明没有受试者注意到我们的攻击。最后，我们讨论了现有的防御措施在虚假透明攻击背景下对移动网络钓鱼的失败。特别是，我们揭示了在Android 10中添加的一个关键安全机制中存在的安全漏洞。然后，我们提出了一系列应对虚假透明攻击的措施清单，以在Android平台和应用商店上实际应对这种攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/tuncay](https://www.usenix.org/conference/usenixsecurity20/presentation/tuncay)
- **PDF:** [https://www.usenix.org/system/files/sec20-tuncay.pdf](https://www.usenix.org/system/files/sec20-tuncay.pdf)
## A different cup of TI? The added value of commercial threat intelligence.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-different-cup-of-ti-the-added-value-of-commercial-threat-intelligence) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-different-cup-of-ti-the-added-value-of-commercial-threat-intelligence)**
### 作者
* X, Delft University of Technology, the Netherlands
* er Bouwman, Delft University of Technology, the Netherlands
* Harm Griffioen, Hasso Plattner Institute, University of Potsdam, Germany
* Jelle Egbers, Delft University of Technology, the Netherlands
* Christian Doerr, Hasso Plattner Institute, University of Potsdam, Germany
* Bram Klievink, Leiden University, the Netherlands
* Michel van Eeten, Delft University of Technology, the Netherlands
### 摘要
> 商业威胁情报被认为在攻击者行为方面提供无与伦比的覆盖，但由于昂贵的价格标签，许多组织无法接触到它。本文首次对商业威胁情报供应商的服务进行了实证评估。对于两家领先供应商，我们描述了这些服务的内容，并将它们的指标与彼此进行了比较。它们之间几乎没有重叠，也没有与四个大规模开放的威胁情报源重叠。即使对于两家供应商声称跟踪的22个特定威胁行为者，我们发现指标源之间的平均重叠仅为2.5%至4.0%。少数重叠指标在另一供应商的源中出现的延迟平均为一个月。这些发现对付费威胁情报的覆盖范围和及时性提出了疑问。
> 
> 我们还对使用付费威胁情报的安全专业人员进行了14次访谈。我们发现，在这个市场上，价值被理解的方式与先前关于质量指标的工作所假设的不同。对于客户来说，覆盖范围和数据量似乎不是一个大问题。他们似乎在优化他们宝贵的资源——分析师的时间——的工作流程，而不是为了检测威胁。受访者主要通过非正式的流程和启发式方法评估威胁情报，而不是通过研究提出的定量指标。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/bouwman](https://www.usenix.org/conference/usenixsecurity20/presentation/bouwman)
- **PDF:** [https://www.usenix.org/system/files/sec20-bouwman.pdf](https://www.usenix.org/system/files/sec20-bouwman.pdf)
## HybCache: Hybrid Side-Channel-Resilient Caches for Trusted Execution Environments.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#hybcache-hybrid-side-channel-resilient-caches-for-trusted-execution-environments) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#hybcache-hybrid-side-channel-resilient-caches-for-trusted-execution-environments)**
### 作者
* Ghada Dessouky, Technische Universität Darmstadt
* Tommaso Frassetto, Technische Universität Darmstadt
* Ahmad-Reza Sadeghi, Technische Universität Darmstadt
### 摘要
> 现代多核处理器通过共享缓存资源来实现最大化缓存利用率和性能提升。然而，这也使得缓存容易受到侧信道攻击的威胁，即利用共享缓存行为中的时间差异推断受害者的执行模式，并最终泄漏私密信息，如秘密密钥。这些攻击的根本原因在于互不信任的进程共享缓存条目，并以确定性和一致性的方式访问它们。已经提出了各种针对缓存侧信道攻击的防御方法。然而，它们存在严重的缺陷：要么严重降低性能，要么施加不切实际的限制，要么只能打败某些类别的攻击。更重要的是，它们假设在整个执行负载过程中都需要具备抗侧信道的缓存，不允许选择性地仅针对安全关键的工作负载启用缓解措施。
> 
> 我们提出了一种用于灵活和软划分集合关联缓存的通用机制，并提出了一种混合缓存架构，称为HybCache。HybCache可以配置为仅针对隔离的执行域应用抗侧信道的缓存行为，同时为非隔离的执行提供常规缓存行为、容量和性能。隔离域可以包括一个或多个进程、特定代码部分或受信任的执行环境（例如，SGX或TrustZone）。我们展示了，通过最小的硬件修改和内核支持，HybCache可以为隔离执行提供抗侧信道的缓存，性能开销为3.5-5%，而对于其余的执行负载则没有性能开销。我们提供了基于模拟器和硬件实现的HybCache来评估性能和面积开销，并展示了HybCache如何缓解典型的基于访问和竞争的缓存攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/dessouky](https://www.usenix.org/conference/usenixsecurity20/presentation/dessouky)
- **PDF:** [https://www.usenix.org/system/files/sec20-dessouky.pdf](https://www.usenix.org/system/files/sec20-dessouky.pdf)
## CopyCat: Controlled Instruction-Level Attacks on Enclaves.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#copycat-controlled-instruction-level-attacks-on-enclaves) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#copycat-controlled-instruction-level-attacks-on-enclaves)**
### 作者
* Daniel Moghimi, Worcester Polytechnic Institute
* Jo Van Bulck, KU Leuven
* Nadia Heninger, University of California, San Diego, CA, USA
* Frank Piessens, KU Leuven
* Berk Sunar, Worcester Polytechnic Institute
### 摘要
> 被受信任的执行环境（TEE）提出的对抗模型促使研究人员调查不寻常的攻击向量。一类特别强大的可控通道攻击滥用页面表修改以可靠地跟踪隔离内存访问，实现页面级别的粒度。与嘈杂的微架构定时泄漏相比，这种通过确定性可控通道攻击滥用不可或缺的架构接口，因此无法通过调整微架构资源来缓解。
> 
> 我们提出了一种创新的可控通道攻击，名为CopyCat，它在单个隔离代码页面内确定性地计算执行的指令数。我们展示了通过CopyCat收集的指令计数与传统的粗粒度页面级泄漏相结合，可以准确地重建隔离控制流，达到最大指令级的细粒度。CopyCat可以识别页内和高速缓存行内的分支决策，这些决策最终可能只有一条指令的差异，突显即使是极其微小的控制流差异也可以从安全隔离中确定性地泄漏出来。我们在对Intel SGX进行了广泛研究的基础上，展示了CopyCat在单追踪和确定性攻击密码实现上的改进分辨率和实用性，并提供了新颖的算法攻击方法，以利用广泛使用的密码库最新版本中的微小漏洞执行单追踪密钥提取。我们的发现强调了在TEE的背景下，加密实现的严格验证的重要性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/moghimi-copycat](https://www.usenix.org/conference/usenixsecurity20/presentation/moghimi-copycat)
- **PDF:** [https://www.usenix.org/system/files/sec20-moghimi-copycat.pdf](https://www.usenix.org/system/files/sec20-moghimi-copycat.pdf)
## An Off-Chip Attack on Hardware Enclaves via the Memory Bus.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#an-off-chip-attack-on-hardware-enclaves-via-the-memory-bus) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#an-off-chip-attack-on-hardware-enclaves-via-the-memory-bus)**
### 作者
* Dayeol Lee, UC Berkeley
* Dongha Jung, SK Hynix
* Ian T. Fang, UC Berkeley
* Chia-Che Tsai, Texas A&M University
* Raluca Ada Popa, UC Berkeley
### 摘要
> 本文展示了一种攻击者如何通过Membuster打破硬件飞地的机密性，Membuster是一种基于窃听内存总线的芯片外攻击。具有物理访问权限的攻击者可以观察非加密的地址总线，并提取受害者的精细内存访问模式。与之前的芯片内攻击飞地相比，Membuster在性质上有所不同，并且更难以防范。
> 
> 我们强调了Membuster面临的几个挑战。首先，DRAM请求只在最后一级缓存缺失时在内存总线上可见。其次，攻击需要对受害者造成最小的干扰或开销，以防止攻击被检测到。最后，攻击者需要对虚拟、物理和DRAM地址之间的转换进行逆向工程，以进行强有力的攻击。我们引入了三种技术，即关键页面白名单、缓存挤压和基于预测的模糊匹配算法，以增加对攻击有用的内存访问的缓存缺失，对受害者没有可检测的干扰，并将内存访问转换为敏感数据。我们在Intel SGX CPU上展示了Membuster的实例，从Hunspell和Memcached这两个应用程序中泄漏机密数据。我们证明，仅需一次不间断的受害者运行就可以高精度地泄漏大部分敏感数据。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/lee-dayeol](https://www.usenix.org/conference/usenixsecurity20/presentation/lee-dayeol)
- **PDF:** [https://www.usenix.org/system/files/sec20summer_lee-dayeol_prepub.pdf](https://www.usenix.org/system/files/sec20summer_lee-dayeol_prepub.pdf)
## Civet: An Efficient Java Partitioning Framework for Hardware Enclaves.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#civet-an-efficient-java-partitioning-framework-for-hardware-enclaves) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#civet-an-efficient-java-partitioning-framework-for-hardware-enclaves)**
### 作者
* Chia-Che Tsai, Texas A&M University
* Jeongseok Son, UC Berkeley
* Bhushan Jain, The University of North Carolina at Chapel Hill
* John McAvey, Hendrix College
* Raluca Ada Popa, UC Berkeley
* Donald E. Porter, The University of North Carolina at Chapel Hill
### 摘要
> 硬件飞地旨在从不太可信的较大系统中隔离执行敏感代码的小片段或操作敏感数据。将一个庞大的遗留应用程序进行分割需要大量的工作。对于使用托管语言（如Java）编写的应用程序进行分割更具有挑战性，原因在于这种语言具有可变特性、类库中广泛的代码可达性以及必然使用沉重的运行时环境。
> 
> Civet是一个将Java应用程序分割成飞地的框架。Civet通过减少飞地中的代码行数并使用语言级的防御措施，包括深度类型检查和动态污点跟踪，来加固飞地接口。Civet还提供了一种分割的Java运行时设计，包括为飞地的特殊性进行优化的垃圾收集设计。对于数据密集型工作负载，Civet具有高效性；将Hadoop映射器进行分割，将飞地额外开销降低了10倍至16-22％（不进行污点跟踪），或者降低了70-80％（进行污点跟踪）。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/tsai](https://www.usenix.org/conference/usenixsecurity20/presentation/tsai)
- **PDF:** [https://www.usenix.org/system/files/sec20-tsai.pdf](https://www.usenix.org/system/files/sec20-tsai.pdf)
## BesFS: A POSIX Filesystem for Enclaves with a Mechanized Safety Proof.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#besfs-a-posix-filesystem-for-enclaves-with-a-mechanized-safety-proof) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#besfs-a-posix-filesystem-for-enclaves-with-a-mechanized-safety-proof)**
### 作者
* Shweta Shinde, University of California, Berkeley
* Shengyi Wang, National University of Singapore
* Pinghai Yuan, National University of Singapore
* Aquinas Hobor, National University of Singapore & Yale-NUS College
* Abhik Roychoudhury, National University of Singapore
* Prateek Saxena, National University of Singapore
### 摘要
> 新的可信计算原语，如Intel SGX，已经显示出在群体可信处理器上不信任大型操作系统的情况下运行用户级应用程序的可行性。然而，操作系统仍然可以通过篡改系统调用返回值来破坏enclave的完整性。事实上，已经证明这些攻击的子类，即Iago攻击，可以在enclave程序中执行任意逻辑。现有的enclave系统拥有非常庞大的TCB，并且它们在系统调用接口上实施了临时检查，这些检查很难验证是否完整。为此，我们提出了BesFS——第一个可证明保护整个恶意操作系统下enclave完整性的文件系统接口。我们在4625行Coq证明脚本中证明了167个引理和2个关键定理，直接证明了BesFS规范的安全性质。BesFS由15个API组成，具有组合安全性，并且足够表达我们测试的31个真实应用程序。BesFS可以与现有的支持SGX的应用程序集成，对TCB的影响最小。BesFS可以作为手工编码API检查的参考实现。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/shinde](https://www.usenix.org/conference/usenixsecurity20/presentation/shinde)
- **PDF:** [https://www.usenix.org/system/files/sec20-shinde.pdf](https://www.usenix.org/system/files/sec20-shinde.pdf)
## EPIC: Every Packet Is Checked in the Data Plane of a Path-Aware Internet.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#epic-every-packet-is-checked-in-the-data-plane-of-a-path-aware-internet) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#epic-every-packet-is-checked-in-the-data-plane-of-a-path-aware-internet)**
### 作者
* Markus Legner, ETH Zurich
* Tobias Klenze, ETH Zurich
* Marc Wyss, ETH Zurich
* Christoph Sprenger, ETH Zurich
* Adrian Perrig, ETH Zurich
### 摘要
> 近期网络研究的一个激动人心的发现是，路径感知网络架构能够从根本上解决当前互联网存在的许多安全问题，同时提高整体效率，并将路径选择控制权交给终端主机。本文考虑了与这种新的网络范式相关的三个重要问题：首先，网络运营商仍然需要能够实施自己的策略，以排除不经济的路径，并在数据平面上执行这些决策。其次，终端主机应该能够验证网络是否实际遵循其转发决策。最后，中间路由器和接收方都应该能够对数据包的来源进行认证。以前的研究已经考虑到了这些特性，但没有现有的系统能够同时实现强大的安全保证和高效率。
> 
> 我们提出了EPIC，一族数据平面协议，提供越来越强的安全性能，满足上述三个要求。与可比较的系统OPT和ICING相比，EPIC协议的通信开销显著较小：对于实际路径长度，开销比现有技术系统小3-5倍。由于仅使用了少量高效的对称加密操作，在转发过程中，我们的原型实现能够在通用硬件上饱和40 Gbps链路。因此，通过确保每个数据包在每一跳都经过检查，我们迈出了迈向高效安全的未来互联网的重要一步。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/legner](https://www.usenix.org/conference/usenixsecurity20/presentation/legner)
- **PDF:** [https://www.usenix.org/system/files/sec20-legner.pdf](https://www.usenix.org/system/files/sec20-legner.pdf)
## ShadowMove: A Stealthy Lateral Movement Strategy.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#shadowmove-a-stealthy-lateral-movement-strategy) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#shadowmove-a-stealthy-lateral-movement-strategy)**
### 作者
* Amirreza Niakanlahiji, University of Illinois Springfield
* Jinpeng Wei, UNC Charlotte
* Md Rabbi Alam, UNC Charlotte
* Qingyang Wang, Louisiana State University
* Bei-Tseng Chu, UNC Charlotte
### 摘要
> 高级持久威胁（APT）攻击使用各种策略和技术在企业环境中进行横向移动；然而，现有的策略和技术存在一些限制，例如需要提升权限、创建新连接、执行新的身份验证或需要进程注入。基于这些特征，已经提出了许多基于主机和网络的解决方案来防止或检测此类横向移动尝试。在本文中，我们提出了一种新颖的秘密侧向移动策略ShadowMove，它只利用企业网络中系统之间已建立的连接来进行侧向移动。它具有一系列独特的特点，如不需要提升权限、不需要新连接、不需要额外的身份验证和不需要进程注入，使得它对当前先进的检测机制具有隐蔽性。ShadowMove通过一种新颖的套接字复制方法实现，允许恶意进程悄悄滥用由良性进程建立的TCP连接。我们为当前的Windows和Linux操作系统设计和实现了ShadowMove。为验证ShadowMove的可行性，我们构建了几个原型，成功劫持了三种企业协议（FTP、微软SQL和Windows远程管理），执行了侧向移动操作，如将恶意软件复制到下一个目标机器上并在目标机器上启动恶意软件。我们还确认我们的原型不能被现有的主机和网络解决方案所检测，如五个顶级杀毒产品（McAfee、Norton、Webroot、Bitdefender和Windows Defender），四个入侵检测系统（Snort、OSSEC、Osquery和Wazuh）和两个终端检测和响应系统（CrowdStrike Falcon Prevent和Cisco AMP）。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/niakanlahiji](https://www.usenix.org/conference/usenixsecurity20/presentation/niakanlahiji)
- **PDF:** [https://www.usenix.org/system/files/sec20-niakanlahiji.pdf](https://www.usenix.org/system/files/sec20-niakanlahiji.pdf)
## Poison Over Troubled Forwarders: A Cache Poisoning Attack Targeting DNS Forwarding Devices.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#poison-over-troubled-forwarders-a-cache-poisoning-attack-targeting-dns-forwarding-devices) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#poison-over-troubled-forwarders-a-cache-poisoning-attack-targeting-dns-forwarding-devices)**
### 作者
* Xiaofeng Zheng, Tsinghua University; Qi An Xin Technology Research Institute
* Chaoyi Lu, Tsinghua University
* Jian Peng, Tsinghua University
* Qiushi Yang, Qi An Xin Technology Research Institute
* Dongjie Zhou, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Baojun Liu, Tsinghua University
* Keyu Man, University of California, Riverside
* Shuang Hao, University of Texas at Dallas
* Haixin Duan, Tsinghua University; Qi An Xin Technology Research Institute
* Zhiyun Qian, University of California, Riverside
### 摘要
> 在当今的DNS基础架构中，DNS转发器是位于DNS客户端和递归解析器之间的设备。这些设备通常充当DNS客户端的入站服务器，而不是解析查询，而是将DNS请求传递给其他服务器。由于其优势和多个使用案例，DNS转发器被广泛部署，并受到Internet用户的查询。然而，研究表明，DNS转发器可能是DNS基础架构中更容易受攻击的设备。
> 
> 在本文中，我们介绍了一种针对DNS转发器的缓存投毒攻击。通过这种攻击，攻击者可以使用受控域名向任意受害者域名注入恶意记录，并绕过广泛部署的缓存投毒防御措施。通过对流行的家庭路由器型号和DNS软件进行测试，我们发现了几个易受攻击的实现，包括大型供应商的实现（例如D-Link，Linksys，dnsmasq和MS DNS）。此外，通过全国范围的测量，我们估计有多少中国移动客户端正在使用易受攻击的DNS转发器。我们已向受影响的供应商报告了这个问题，并且迄今为止，其中三个供应商给予了积极的反馈。我们的工作进一步证明了DNS转发器可能是DNS基础架构中的一个弱点，并呼吁社区关注以及实施指南。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zheng](https://www.usenix.org/conference/usenixsecurity20/presentation/zheng)
- **PDF:** [https://www.usenix.org/system/files/sec20-zheng.pdf](https://www.usenix.org/system/files/sec20-zheng.pdf)
## Programmable In-Network Security for Context-aware BYOD Policies.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#programmable-in-network-security-for-context-aware-byod-policies) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#programmable-in-network-security-for-context-aware-byod-policies)**
### 作者
* Qiao Kang, Rice University
* Lei Xue, The Hong Kong Polytechnic University
* Adam Morrison, Rice University
* Yuxin Tang, Rice University
* Ang Chen, Rice University
* Xiapu Luo, The Hong Kong Polytechnic University
### 摘要
> 自带设备（BYOD）已成为企业网络的新常态，但BYOD安全仍然是一个首要关注的问题。基于动态运行时环境的上下文感知安全是一种有前景的方法，可以根据动态运行时环境强制访问控制。最近的研究已经开发了SDN解决方案，用于收集设备上下文并在中央控制器上执行访问控制。然而，中央控制器可能成为瓶颈和攻击目标。在远程控制器上处理上下文信号也太慢，无法实时决策更改。
> 
> 我们提出了一种新的范式，即可编程网络安全（Poise），这得益于可编程交换机的出现。Poise的核心是一种新颖的安全原语，可以根据需要在硬件上编程支持各种上下文感知策略。Poise的用户指定简明的策略，Poise将它们编译成P4中的不同原语配置。与传统的SDN防御相比，Poise对控制平面饱和攻击具有弹性，并且它极大地增加了防御能力。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/kang](https://www.usenix.org/conference/usenixsecurity20/presentation/kang)
- **PDF:** [https://www.usenix.org/system/files/sec20-kang.pdf](https://www.usenix.org/system/files/sec20-kang.pdf)
## A Longitudinal and Comprehensive Study of the DANE Ecosystem in Email.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-longitudinal-and-comprehensive-study-of-the-dane-ecosystem-in-email) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-longitudinal-and-comprehensive-study-of-the-dane-ecosystem-in-email)**
### 作者
* Hyeonmin Lee, Seoul National University
* Aniketh Gireesh, Amrita Vishwa Vidyapeetham
* Rol, University of Twente & NLnet Labs
* van Rijswijk-Deij, University of Twente & NLnet Labs
* Taekyoung "Ted" Kwon, Seoul National University
* Taejoong Chung, Rochester Institute of Technology
### 摘要
> DNS基于命名实体（DANE）标准允许客户端和服务器建立TLS连接，无需依赖CA等受信任的第三方机构，而是通过发布TLSA记录来实现。DANE使用域名系统安全扩展（DNSSEC）PKI来实现完整性和真实性。然而，只有在PKI的每个主体都正确执行其职责的情况下，DANE才能正常工作：通过其DNSSEC感知DNS服务器，DANE服务器（例如SMTP服务器）必须发布与其证书一致的TLSA记录。同样地，DANE客户端（例如SMTP客户端）必须验证DANE服务器的TLSA记录，这些记录还用于验证获取的证书。
> 
> DANE在电子邮件生态系统中迅速赢得了人们的青睐，以提高邮件服务器之间的传输安全性。然而，它的安全性益处取决于正确部署DANE。在本文中，我们对DANE标准及其相关协议的部署和管理情况进行了大规模、长期和全面的测量研究。我们在24个月的时间里收集了.com、.net、.org、.nl和.se顶级域名下的所有二级域名的数据，以分析服务器端的部署和管理情况。为了分析客户端的部署和管理情况，我们调查了29个热门电子邮件服务提供商，以及四个热门MTA和十个DNS软件程序。
> 
> 我们的研究揭示了DANE生态系统中普遍存在的管理不善现象。例如，我们发现36％的TLSA记录无法验证，原因是缺少或不正确的DNSSEC记录，其中14.17％的记录与其证书不一致。我们还发现只有四个电子邮件服务提供商同时支持对出站和入站邮件的DANE，但其中两个存在TLSA记录中未检查证书用途的缺点。好在，邮件服务器的管理员可以利用开源MTA和DNS程序来正确支持DANE。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/lee-hyeonmin](https://www.usenix.org/conference/usenixsecurity20/presentation/lee-hyeonmin)
- **PDF:** [https://www.usenix.org/system/files/sec20-lee-hyeonmin.pdf](https://www.usenix.org/system/files/sec20-lee-hyeonmin.pdf)
## NXNSAttack: Recursive DNS Inefficiencies and Vulnerabilities.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#nxnsattack-recursive-dns-inefficiencies-and-vulnerabilities) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#nxnsattack-recursive-dns-inefficiencies-and-vulnerabilities)**
### 作者
* Yehuda Afek, Tel-Aviv University
* Anat Bremler-Barr, IDC
* Lior Shafir, Tel Aviv University
### 摘要
> 本论文揭示了一种新的漏洞并引入了相应的攻击——NoneXistent Name Server Attack（NXNSAttack），该攻击可破坏并可能瘫痪DNS系统，使互联网用户难以或无法访问网站、网络电子邮件、在线视频聊天或任何其他在线资源。NXNSAttack通过DNS解析器和DNS权威名称服务器之间的响应产生了大量的数据包风暴。这种风暴是由解析器对权威名称服务器的无限制引荐响应消息所产生的。该攻击比NXDomain攻击（如Mirai攻击）更具破坏力：i）它使递归解析器交换的数据包数量放大了1620倍以上。ii）除了负缓存之外，该攻击还会饱和解析器缓存的“NS”部分。为了减轻攻击的影响，我们提出了递归解析器算法的增强版MaxFetch(k)，以防止不必要的主动抓取。我们在BIND解析器上实施了MaxFetch(1)的缓解增强，并在真实的DNS查询数据集上进行了测试。我们的结果表明，MaxFetch(1)既不降低递归解析器的吞吐量，也不增加其延迟。在攻击被发现后，进行了负责任的披露程序，并且一些DNS供应商和公共提供商已发布了CVE并修补了其系统。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/afek](https://www.usenix.org/conference/usenixsecurity20/presentation/afek)
- **PDF:** [https://www.usenix.org/system/files/sec20-afek.pdf](https://www.usenix.org/system/files/sec20-afek.pdf)
## Shim Shimmeny: Evaluating the Security and Privacy Contributions of Link Shimming in the Modern Web.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#shim-shimmeny-evaluating-the-security-and-privacy-contributions-of-link-shimming-in-the-modern-web) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#shim-shimmeny-evaluating-the-security-and-privacy-contributions-of-link-shimming-in-the-modern-web)**
### 作者
* Frank Li, Georgia Institute of Technology / Facebook
### 摘要
> 链接包装（也称为URL封装）是网站广泛使用的一种技术，它会将网站上的URL重写，将链接点击导航引导到一个中间终点，然后再重定向到原始目的地。这种URL点击的包装可以提供导航安全、隐私和分析功能，并且已被知名网站（如Facebook、Twitter、Microsoft、Google）在过去十年中部署使用。然而，我们对其所宣称的安全性和隐私保护的贡献缺乏深入了解，特别是在今天的网络生态系统中，现代浏览器提供了潜在的替代机制来保护链接导航而无需付出链接包装的成本。
> 
> 在本文中，我们以Facebook的实际部署为案例研究，对链接包装的安全性和隐私保护贡献进行了大规模的实证评估。我们的结果表明，即使在现代网络中，链接包装仍然可以为用户提供有意义的安全性和隐私保护。对于在以移动为中心的发展中国家等存在大量使用旧版浏览器客户端的人群来说，这些好处尤为显著。我们讨论了这些收益与潜在成本之间的权衡。除了链接包装，我们的研究结果还为推进用户在线保护提供了见解，例如网络生态系统中责任的分布、旧版软件场景以及用户对网站安全警告的反应。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/li-frank](https://www.usenix.org/conference/usenixsecurity20/presentation/li-frank)
- **PDF:** [https://www.usenix.org/system/files/sec20-li-frank.pdf](https://www.usenix.org/system/files/sec20-li-frank.pdf)
## Cached and Confused: Web Cache Deception in the Wild.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#cached-and-confused-web-cache-deception-in-the-wild) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#cached-and-confused-web-cache-deception-in-the-wild)**
### 作者
* Seyed Ali Mirheidari, University of Trento
* Sajjad Arshad, Northeastern University
* Kaan Onarlioglu, Akamai Technologies
* Bruno Crispo, University of Trento, KU Leuven
* Engin Kirda, Northeastern University
* William Robertson, Northeastern University
### 摘要
> Web cache deception (WCD)是一种于2017年提出的攻击手段，攻击者通过欺骗缓存代理错误地存储通过互联网传输的私人信息，并随后非授权地获取缓存数据。由于Web缓存的广泛使用，特别是内容分发网络（CDN）提供商部署的大规模缓存代理网络作为互联网的关键组成部分，WCD使大量互联网用户面临风险。
> 
> 我们进行了首次大规模研究，量化了Alexa排名前5000的340个知名网站中WCD的普遍性。我们的分析揭示了WCD的漏洞，泄露了私人用户数据，以及可以被攻击者利用来进行有损Web应用程序攻击的秘密身份验证和授权令牌。此外，我们将WCD作为攻击路径混淆类的一种实例，从科学框架的角度探索了WCD，并证明了使用攻击路径混淆技术的变体可以利用原始攻击未受影响的网站。我们的发现表明，许多热门网站在WCD公开披露两年后仍然存在安全漏洞。
> 
> 我们对知名CDN提供商的实证实验强调了一个事实，即Web缓存不是即插即用的技术。为了减轻WCD的影响，网站运营者必须对其Web基础设施采取全面的视角，并仔细配置适合其应用程序的缓存设置。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/mirheidari](https://www.usenix.org/conference/usenixsecurity20/presentation/mirheidari)
- **PDF:** [https://www.usenix.org/system/files/sec20-mirheidari.pdf](https://www.usenix.org/system/files/sec20-mirheidari.pdf)
## A Tale of Two Headers: A Formal Analysis of Inconsistent Click-Jacking Protection on the Web.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-tale-of-two-headers-a-formal-analysis-of-inconsistent-click-jacking-protection-on-the-web) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-tale-of-two-headers-a-formal-analysis-of-inconsistent-click-jacking-protection-on-the-web)**
### 作者
* Stefano Calzavara, Università Ca' Foscari Venezia
* Sebastian Roth, CISPA Helmholtz Center for Information Security and Saarbrücken Graduate School of Computer Science
* Alvise Rabitti, Università Ca' Foscari Venezia
* Michael Backes, CISPA Helmholtz Center for Information Security
* Ben Stock, CISPA Helmholtz Center for Information Security
### 摘要
> 现代Web上的点击劫持保护通常通过客户端安全机制来实施，如X-Frame-Options头（XFO）和内容安全策略（CSP）。尽管这些客户端安全机制无疑很有用且有效，但将保护委托给Web浏览器会导致不同浏览器用户之间的安全保证不一致。特别是由于CSP的支持缺失和XFO头的不同实现而可能导致的不一致性。在本文中，我们正式研究了不同浏览器之间的框架控制策略不一致性问题，并基于我们的理论实现了一个自动策略分析器，用于评估Web上的点击劫持保护状态。我们的分析显示，在野外环境中，约10％的（不同的）框架控制策略存在不一致性，并且往往对至少一个浏览器不提供任何级别的保护。因此，我们提出了针对Web开发人员和浏览器供应商的建议，以减轻这个问题。最后，我们设计并实现了一个服务器端代理，用于在Web应用程序中实施安全性的后期改装。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/calzavara](https://www.usenix.org/conference/usenixsecurity20/presentation/calzavara)
- **PDF:** [https://www.usenix.org/system/files/sec20-calzavara.pdf](https://www.usenix.org/system/files/sec20-calzavara.pdf)
## Retrofitting Fine Grain Isolation in the Firefox Renderer.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#retrofitting-fine-grain-isolation-in-the-firefox-renderer) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#retrofitting-fine-grain-isolation-in-the-firefox-renderer)**
### 作者
* Shravan Narayan, UC San Diego
* Craig Disselkoen, UC San Diego
* Tal Garfinkel, Stanford University
* Nathan Froyd, Mozilla
* Eric Rahm, Mozilla
* Sorin Lerner, UC San Diego
* Hovav Shacham, UT Austin
* Deian Stefan, UC San Diego
### 摘要
> Firefox和其他主要浏览器依赖于数十个第三方库来呈现音频、视频、图像和其他内容。这些库经常是漏洞的来源。为了减轻这种威胁，我们正在将Firefox迁移到一种架构，将这些库隔离在轻量级沙箱中，大大降低了被攻击的影响。
> 
> 对隔离进行改造可能非常费时，并且容易出现安全漏洞，还需要高度关注性能。为了提供帮助，我们开发了RLBox，这是一个框架，可以最大程度地减轻将Firefox转换为安全高效使用不受信任代码的负担。为了实现这一点，RLBox采用了静态信息流强制和轻量级的动态检查，直接在C++类型系统中表达。
> 
> RLBox通过软件故障隔离或多核进程隔离来支持高效的沙箱环境。性能开销有限且短暂，对页面延迟只有轻微影响。我们通过对性能敏感的图像解码库（libjpeg和libpng）、视频解码库（libtheora和libvpx）、音频解码库（libvorbis）和zlib解压缩库进行沙箱测试来证明这一点。
> 
> RLBox已经集成到生产版的Firefox中，使用WebAssembly沙箱来隔离libGraphite字体整形库。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/narayan](https://www.usenix.org/conference/usenixsecurity20/presentation/narayan)
- **PDF:** [https://www.usenix.org/system/files/sec20-narayan.pdf](https://www.usenix.org/system/files/sec20-narayan.pdf)
## Zero-delay Lightweight Defenses against Website Fingerprinting.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#zero-delay-lightweight-defenses-against-website-fingerprinting) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#zero-delay-lightweight-defenses-against-website-fingerprinting)**
### 作者
* Jiajun Gong, Hong Kong University of Science and Technology
* Tao Wang, Hong Kong University of Science and Technology
### 摘要
> 网站指纹识别（WF）攻击威胁到匿名网络上用户的隐私，因为网络监视者可以通过从网络流量中提取特征来识别正在访问的网页。已经提出了一些防御方法来减轻WF的威胁，但它们存在缺陷：有些被更强大的WF攻击击败，有些开销太大，而另一些无法实际部署。
> 
> 在这项研究中，我们提出了两种新颖的零延迟轻量级防御方法，即FRONT和GLUE。我们发现WF攻击依赖于特征丰富的跟踪前端，因此FRONT专注于用虚拟数据包对跟踪前端进行混淆。它还随机化了虚拟数据包的数量和分布，以实现跟踪间的随机性，阻碍攻击者的学习过程。GLUE在不同的跟踪之间添加虚拟数据包，使它们在攻击者眼中呈现为一个长连续的跟踪，使攻击者无法找到它们的起点或终点，更不用说对它们进行分类了。我们的实验证明，FRONT以33%的数据开销优于已知最好的轻量级防御方法WTF-PAD，后者具有类似的数据开销。GLUE以大约22%至44%的数据开销，可以将最好的WF攻击的准确性和精确度降低到与最好的重型防御方法相当的程度。这两种防御方法都没有延迟开销。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/gong](https://www.usenix.org/conference/usenixsecurity20/presentation/gong)
- **PDF:** [https://www.usenix.org/system/files/sec20-gong.pdf](https://www.usenix.org/system/files/sec20-gong.pdf)
## Achieving Keyless CDNs with Conclaves.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#achieving-keyless-cdns-with-conclaves) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#achieving-keyless-cdns-with-conclaves)**
### 作者
* Stephen Herwig, University of Maryland
* Christina Garman, Purdue University
* Dave Levin, University of Maryland
### 摘要
> 内容分发网络（CDNs）服务于当今互联网内容的大部分，且其份额不断增长。除了缓存，CDNs为其客户提供各种服务，包括抵御分布式拒绝服务（DDoS）和定向攻击。随着网络从HTTP转向HTTPS，CDNs通过掌握其客户的私钥来继续提供此类服务，从而违反了一个基本的安全原则：私钥只能被其所有者知晓。
> 
> 我们提出了Phoenix的设计和实现，这是第一个真正“无密钥CDN”。Phoenix使用安全环境（特别是Intel SGX）来托管Web内容，存储敏感的密钥材料，应用Web应用防火墙等，以在不受信任的机器上执行。为了支持可扩展性和多租户性，Phoenix建立在一个我们称为conclaves的新架构原语上：enclaves的容器。Conclaves使得部署多进程、可扩展的遗留应用程序变得简单。我们还开发了一个文件系统，将enclave的安全保证扩展到不受信任的存储上。在其最强配置中，Phoenix将边缘服务器的知识减少到传统的路径上的HTTPS对手的水平。我们通过一系列微型和宏观基准测试评估了Phoenix的性能。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/herwig](https://www.usenix.org/conference/usenixsecurity20/presentation/herwig)
- **PDF:** [https://www.usenix.org/system/files/sec20-herwig.pdf](https://www.usenix.org/system/files/sec20-herwig.pdf)
## SENG, the SGX-Enforcing Network Gateway: Authorizing Communication from Shielded Clients.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#seng-the-sgx-enforcing-network-gateway-authorizing-communication-from-shielded-clients) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#seng-the-sgx-enforcing-network-gateway-authorizing-communication-from-shielded-clients)**
### 作者
* Fabian Schwarz, CISPA Helmholtz Center for Information Security
* Christian Rossow, CISPA Helmholtz Center for Information Security
### 摘要
> 网络管理员面临着一个安全关键的困境。虽然他们希望严格控制他们的主机，但通常必须放宽防火墙策略以支持各种各样的应用程序。然而，这样的宽松策略使得未知（且不可信任）的客户端应用程序可以进行数据泄漏。无法将通信准确可靠地归属给应用程序是这个问题的核心所在。防火墙策略仅限于粗粒度的特征，易于回避和模仿，例如协议或端口号。
> 
> 我们提出了SENG，一个网络网关，使防火墙能够可靠地将流量归属给一个应用程序。SENG在一个经过SGX定制的LibOS中保护应用程序，并在SGX enclave和中央网络网关之间透明地建立一个基于证明的DTLS通道。因此，管理员可以完全将流量归属于其源应用程序，并因此在中央防火墙上执行细粒度的针对每个应用程序的通信策略。我们的原型实现证明了SENG的以下功能：（i）允许管理员方便地使用其喜爱的防火墙以基于认证的方式强制执行网络策略，以每个应用程序为单位；（ii）防止本地系统级攻击者干扰受保护应用程序的通信。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/schwarz](https://www.usenix.org/conference/usenixsecurity20/presentation/schwarz)
- **PDF:** [https://www.usenix.org/system/files/sec20-schwarz.pdf](https://www.usenix.org/system/files/sec20-schwarz.pdf)
## APEX: A Verified Architecture for Proofs of Execution on Remote Devices under Full Software Compromise.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#apex-a-verified-architecture-for-proofs-of-execution-on-remote-devices-under-full-software-compromise) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#apex-a-verified-architecture-for-proofs-of-execution-on-remote-devices-under-full-software-compromise)**
### 作者
* Ivan De Oliveira Nunes, UC Irvine
* Karim Eldefrawy, SRI International
* Norrathep Rattanavipanon, UC Irvine and Prince of Songkla University
* Gene Tsudik, UC Irvine
### 摘要
> 现代社会越来越多地被各种各样的网络物理系统（CPS）、物联网（IoT）和智能设备所包围，并且逐渐适应了它们的存在。这些设备通常承担着安全关键的功能，例如个人医疗设备、汽车网络物理系统以及工业和住宅自动化中的传感器报警组合。在这个规模的下限上，这些设备是小型、廉价和专用的传感器和/或执行器。它们往往配备有小型的简单中央处理器，存储空间较小，并运行简单的软件。如果这些设备没有受到保护，伪造的传感器数据或误忽略的执行命令可能会带来灾难性后果，特别是在安全关键的环境中。这引出了以下三个问题：（1）如何相信由一个简单的远程嵌入式设备产生的数据，或者验证命令是否执行？（2）如何将这些行动/结果与预期软件的执行绑定？以及（3）即使设备上的所有软件可以被修改和/或受到攻击，是否仍然能够实现（1）和（2）？
> 
> 在本文中，我们通过设计、展示APEX的安全性，并进行形式验证来回答这些问题：一种用于可证实执行的体系结构。据我们所知，这是针对低端嵌入式系统的首次研究结果。我们的工作具有广泛的应用，尤其是在安全关键系统的背景下，验证传感和可信执行变得越来越重要。APEX是公开可用的，我们的评估表明它的开销非常低，甚至对于基于TI MSP430或AVR ATmega处理器的低端嵌入式设备来说也是可负担的。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/nunes](https://www.usenix.org/conference/usenixsecurity20/presentation/nunes)
- **PDF:** [https://www.usenix.org/system/files/sec20-nunes.pdf](https://www.usenix.org/system/files/sec20-nunes.pdf)
## PARTEMU: Enabling Dynamic Analysis of Real-World TrustZone Software Using Emulation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#partemu-enabling-dynamic-analysis-of-real-world-trustzone-software-using-emulation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#partemu-enabling-dynamic-analysis-of-real-world-trustzone-software-using-emulation)**
### 作者
* Lee Harrison, Samsung Knox, Samsung Research America
* Hayawardh Vijayakumar, Samsung Knox, Samsung Research America
* Rohan Padhye, EECS Department, University of California, Berkeley
* Koushik Sen, EECS Department, University of California, Berkeley
* Michael Grace, Samsung Knox, Samsung Research America
### 摘要
> ARM的TrustZone技术是全球数十亿设备（包括安卓智能手机和物联网设备）安全基础。由于TrustZone能够访问诸如加密密钥等敏感信息，因此在真实设备上，对TrustZone的访问进行了限制：只有通过受信任方身份认证的代码才能在TrustZone中运行。一个副作用是，无法对TrustZone软件进行仪器化或监控。因此，近期在动态分析技术中的反馈驱动模糊测试等进展尚未应用于TrustZone软件。为了解决上述问题，本研究构建了一个模拟器，可以运行四个广泛使用的真实世界TrustZone操作系统（TZOSes）-高通的QSEE，Trustonic的Kinibi，三星的TEEGRI和Linaro的OP-TEE，以及运行在它们上面的受信任应用程序（TAs）。这种方法的传统挑战通常是模拟努力往往不切实际。然而，我们发现TZOSes只依赖于有限的硬件和软件组件子集。通过精心选择一部分组件进行模拟，我们发现工作的可行性。我们在QEMU和PANDA上开发的模块化框架PARTEMU上实现了模拟。我们通过集成使用AFL的反馈驱动模糊测试展示了PARTEMU的实用性，并使用它对来自12个不同安卓智能手机供应商和一家领先物联网供应商的194个独特TA进行了大规模研究，发现了48个TA中以前未知的漏洞，其中几个是可利用的。我们确定了TrustZone开发中独特的开发者错误模式，导致了一些这些漏洞，凸显了对TrustZone特定开发者教育的需求。我们还演示了使用PARTEMU来测试QSEE TZOS本身，在真实设备上通常不会执行的代码路径中发现了崩溃。我们的工作表明，通过模拟对真实世界的TrustZone软件进行动态分析既可行又有益。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/harrison](https://www.usenix.org/conference/usenixsecurity20/presentation/harrison)
- **PDF:** [https://www.usenix.org/system/files/sec20-harrison.pdf](https://www.usenix.org/system/files/sec20-harrison.pdf)
## PHMon: A Programmable Hardware Monitor and Its Security Use Cases.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#phmon-a-programmable-hardware-monitor-and-its-security-use-cases) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#phmon-a-programmable-hardware-monitor-and-its-security-use-cases)**
### 作者
* Leila Delshadtehrani, Boston University
* Sadullah Canakci, Boston University
* Boyou Zhou, Boston University
* Schuyler Eldridge, Boston University
* Ajay Joshi, Boston University
* Manuel Egele, Boston University
### 摘要
> 在硬件行业中，出现了强制执行各种安全策略的复兴趋势。目前的发展趋势是开发专用硬件安全扩展，这个过程不完善、耗时且代价高昂。与此趋势相比，一种灵活的硬件监视器可以有效地执行和增强各种安全策略，以应对安全威胁的演变。现有的硬件监视器通常存在以下缺点之一（或多个）：监视动作集受限、性能和功耗相当大，或具有侵入性设计。在本文中，我们提出了一种最小侵入和高效的可编程硬件监视器（PHMon）的实现，具有表达丰富的监视规则和灵活的细粒度操作。PHMon可以实施各种安全策略，并能帮助检测软件漏洞和安全漏洞。我们在FPGA上的PHMon原型包括硬件监视器及其与RISC-V Rocket处理器的接口以及完整的Linux软件栈。我们通过四个不同的用例展示了PHMon的多功能性和易于采用性：影子堆栈、硬件加速模糊引擎、信息泄漏预防机制和硬件加速调试器。我们的PHMon原型实现平均性能开销为0.9％，而硬件加速模糊引擎相较于最先进的基于软件的实现平均提高了16倍的模糊测试性能。我们的PHMon ASIC实现仅产生5％的功耗开销和13.5％的面积开销。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/delshadtehrani](https://www.usenix.org/conference/usenixsecurity20/presentation/delshadtehrani)
- **PDF:** [https://www.usenix.org/system/files/sec20-delshadtehrani.pdf](https://www.usenix.org/system/files/sec20-delshadtehrani.pdf)
## Horizontal Privilege Escalation in Trusted Applications.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#horizontal-privilege-escalation-in-trusted-applications) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#horizontal-privilege-escalation-in-trusted-applications)**
### 作者
* Darius Suciu, Stony Brook University
* Stephen McLaughlin, Samsung Research America
* Laurent Simon, Samsung Research America
* Radu Sion, Stony Brook University
### 摘要
> 可信执行环境（TEE）使用基于硬件的隔离来保护敏感数据免受传统的单体操作系统的威胁。尽管这种隔离增强了安全性，但它也在TEE与传统操作系统和应用程序之间引入了语义差距。在这项工作中，我们研究了这种语义差距对在流行的TEE中运行的可信应用程序（TA）处理敏感数据的影响。我们发现，TA中的两个属性（多租户和状态性）的结合导致水平特权提升（HPE）的漏洞。这些漏洞可以泄露敏感会话数据或在TEE逻辑中不需要代码执行漏洞时提供加密预言。我们在三个主要的基于ARM TrustZone的受信任操作系统上运行的95个TA中发现了19个HPE漏洞。我们的结果表明HPE攻击可以用于解密DRM受保护的内容，伪造鉴定，并在所有三个评估的操作系统下获取加密密钥。在这里，我们介绍了一种名为HOOPER的基于自动符号执行的HPE漏洞扫描工具，以帮助手动分析并大大减少总体时间。尤其是在Teegris Trusted OS中，HOOPER能够在24小时内识别出24个基于HPE的攻击路径中的19个，而我们原来的手动分析时间大约为四周。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/suciu](https://www.usenix.org/conference/usenixsecurity20/presentation/suciu)
- **PDF:** [https://www.usenix.org/system/files/sec20-suciu.pdf](https://www.usenix.org/system/files/sec20-suciu.pdf)
## TeeRex: Discovery and Exploitation of Memory Corruption Vulnerabilities in SGX Enclaves.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#teerex-discovery-and-exploitation-of-memory-corruption-vulnerabilities-in-sgx-enclaves) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#teerex-discovery-and-exploitation-of-memory-corruption-vulnerabilities-in-sgx-enclaves)**
### 作者
* Tobias Cloosters, University of Duisburg-Essen
* Michael Rodler, University of Duisburg-Essen
* Lucas Davi, University of Duisburg-Essen
### 摘要
> 英特尔的软件保护扩展（SGX）引入了新的指令，将处理器切换到飞地模式，从而保护它免受内省。虽然飞地模式可以强力保护存储器和处理器的状态，但无法抵御飞地代码内部的存储器损坏错误。在本文中，我们展示了SGX飞地的攻击面为飞地开发人员带来了新的挑战，因为易受攻击的存储器损坏漏洞很容易被引入到飞地代码中。我们开发了TeeRex，通过符号执行自动分析飞地二进制代码，以找出在主机到飞地边界引入的漏洞。我们对公共飞地二进制文件的评估显示，其中许多二进制文件存在内存损坏错误，允许攻击者破坏函数指针或执行任意内存写入操作。正如我们将展示的那样，TeeRex具备针对SGX飞地的特定定制框架，以便进行发现漏洞的简单概念验证利用构建。我们的研究结果揭示了多个飞地中的漏洞，包括英特尔、百度和WolfSSL开发的飞地，以及部署在流行笔记本品牌上的生物识别指纹软件。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/cloosters](https://www.usenix.org/conference/usenixsecurity20/presentation/cloosters)
- **PDF:** [https://www.usenix.org/system/files/sec20-cloosters.pdf](https://www.usenix.org/system/files/sec20-cloosters.pdf)
## Stealthy Tracking of Autonomous Vehicles with Cache Side Channels.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#stealthy-tracking-of-autonomous-vehicles-with-cache-side-channels) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#stealthy-tracking-of-autonomous-vehicles-with-cache-side-channels)**
### 作者
* Mulong Luo, Cornell University
* Andrew C. Myers, Cornell University
* G. Edward Suh, Cornell University
### 摘要
> 自动驾驶车辆正变得越来越受欢迎，但它们依赖计算机系统来感知和操作物理世界，这引入了新的安全风险。本文表明，如果定位软件与攻击程序共享硬件平台，自动驾驶车辆的位置隐私可能会受到软件侧信道攻击的威胁。特别地，我们证明了缓存侧信道攻击可以用来推测运行自适应蒙特卡洛定位（AMCL）算法的车辆的路径或位置。本文的主要贡献如下。首先，我们展示了感知和控制算法的自适应行为可能引入新的侧信道漏洞，揭示车辆或其环境的物理属性。其次，我们引入了统计学习模型，通过缓存访问模式推断AMCL算法的状态，并预测车辆的路径或位置。第三，我们使用在城市道路上记录的真实传感器数据，在真实软件堆栈上实施和验证了该攻击。我们的发现表明，自动驾驶软件需要强大的定时信道保护以保护位置隐私。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/luo](https://www.usenix.org/conference/usenixsecurity20/presentation/luo)
- **PDF:** [https://www.usenix.org/system/files/sec20-luo.pdf](https://www.usenix.org/system/files/sec20-luo.pdf)
## Towards Robust LiDAR-based Perception in Autonomous Driving: General Black-box Adversarial Sensor Attack and Countermeasures.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#towards-robust-lidar-based-perception-in-autonomous-driving-general-black-box-adversarial-sensor-attack-and-countermeasures) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#towards-robust-lidar-based-perception-in-autonomous-driving-general-black-box-adversarial-sensor-attack-and-countermeasures)**
### 作者
* Jiachen Sun, University of Michigan
* Yulong Cao, University of Michigan
* Qi Alfred Chen, UC Irvine
* Z. Morley Mao, University of Michigan
### 摘要
> 感知对自动驾驶系统至关重要，它利用像相机和激光雷达（LiDAR）这样的车载传感器来评估周围环境。最近的研究表明，基于LiDAR的感知容易受到欺骗攻击的影响，攻击者通过向受害者的LiDAR传感器发送激光信号，在受害者自动驾驶汽车前面进行伪装。然而，现有的攻击存在有效性和普适性的局限性。在这项工作中，我们进行了第一项研究，探索了当前基于LiDAR的感知架构的普遍脆弱性，并发现LiDAR点云中被忽视的遮挡模式使自动驾驶汽车容易受到欺骗攻击。我们基于我们发现的脆弱性构建了第一个基于黑盒的欺骗攻击，该攻击在所有目标模型上普遍达到约80%的平均成功率。我们进行了第一项防御研究，提出了CARLO来缓解LiDAR欺骗攻击。CARLO通过将被忽视的遮挡模式视为不变的物理特征来检测伪造数据，将平均攻击成功率降低到5.5%。同时，我们迈出了探索鲁棒LiDAR感知通用架构的第一步，提出了将被忽视的物理特征嵌入端到端学习的SVF。SVF进一步将平均攻击成功率降低到约2.3%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/sun](https://www.usenix.org/conference/usenixsecurity20/presentation/sun)
- **PDF:** [https://www.usenix.org/system/files/sec20-sun.pdf](https://www.usenix.org/system/files/sec20-sun.pdf)
## SAVIOR: Securing Autonomous Vehicles with Robust Physical Invariants.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#savior-securing-autonomous-vehicles-with-robust-physical-invariants) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#savior-securing-autonomous-vehicles-with-robust-physical-invariants)**
### 作者
* Raul Quinonez, University of Texas at Dallas
* Jairo Giraldo, University of Utah
* Luis Salazar, University of California, Santa Cruz
* Erick Bauman, University of Texas at Dallas
* Alvaro Cardenas, University of California, Santa Cruz
* Zhiqiang Lin, Ohio State University
### 摘要
> 自动驾驶车辆（AVs）包括飞行器、海上车辆和地面车辆，通过各种传感器和执行器评估其环境，使它们能够执行特定的任务，如导航路线、悬停或避免碰撞。到目前为止，AVs往往倾向于相信传感器提供的信息，以进行导航决策，而不进行数据验证或验证。因此，攻击者可以利用这些限制，通过提供错误的传感器数据来破坏或控制系统。在本文中，我们介绍了SAVIOR：一种用于通过稳健的物理不变量保护自动驾驶车辆的架构。我们在两个流行的开源飞行器和地面车辆控制器上实施和验证我们的提案，并证明其有效性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/quinonez](https://www.usenix.org/conference/usenixsecurity20/presentation/quinonez)
- **PDF:** [https://www.usenix.org/system/files/sec20-quinonez.pdf](https://www.usenix.org/system/files/sec20-quinonez.pdf)
## From Control Model to Program: Investigating Robotic Aerial Vehicle Accidents with MAYDAY.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#from-control-model-to-program-investigating-robotic-aerial-vehicle-accidents-with-mayday) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#from-control-model-to-program-investigating-robotic-aerial-vehicle-accidents-with-mayday)**
### 作者
* Taegyu Kim, Purdue University
* Chung Hwan Kim, University of Texas at Dallas
* Altay Ozen, Purdue University
* Fan Fei, Purdue University
* Zhan Tu, Purdue University
* Xiangyu Zhang, Purdue University
* Xinyan Deng, Purdue University
* Dave (Jing) Tian, Purdue University
* Dongyan Xu, Purdue University
### 摘要
> 随着无人机（RAVs）的广泛应用，它们的事故越来越多，呼吁对这类事故进行深入调查。不幸的是，若无人机崩溃的根本原因在于RAV的控制程序，询问“为什么我的无人机崩溃”往往毫无结果，由于证据和方法上的关键挑战：（1）当前RAVs的飞行日志仅记录高级车辆控制状态和事件，而没有记录控制程序的执行；（2）从控制器异常到程序变量损坏到程序错误位置的“连线”能力缺乏。为了解决这些挑战，我们开发了一个跨领域的事故后调查框架MAYDAY，通过将控制模型映射到控制程序，实现了（1）控制程序执行的飞行日志记录，以及（2）根据控制和程序级别日志追踪导致事故的控制语义错误。我们已将MAYDAY应用于ArduPilot，这是一个运行在各种廉价无人机上的流行开源RAV控制程序。我们对10起由真实的ArduPilot错误引起的RAV事故进行的调查表明，MAYDAY能够以高精度和最小运行时间和存储开销在程序中定位这些事故的根本原因。我们还发现4个最近修复的错误仍然存在漏洞，并向ArduPilot团队发出了警告。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/kim](https://www.usenix.org/conference/usenixsecurity20/presentation/kim)
- **PDF:** [https://www.usenix.org/system/files/sec20-kim.pdf](https://www.usenix.org/system/files/sec20-kim.pdf)
## Drift with Devil: Security of Multi-Sensor Fusion based Localization in High-Level Autonomous Driving under GPS Spoofing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#drift-with-devil-security-of-multi-sensor-fusion-based-localization-in-high-level-autonomous-driving-under-gps-spoofing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#drift-with-devil-security-of-multi-sensor-fusion-based-localization-in-high-level-autonomous-driving-under-gps-spoofing)**
### 作者
* Junjie Shen, University of California, Irvine
* Jun Yeon Won, University of California, Irvine
* Zeyuan Chen, University of California, Irvine
* Qi Alfred Chen, University of California, Irvine
### 摘要
> 对于高级自动驾驶车辆（AV），定位是非常重要的安全问题。GPS欺骗是其中一个直接威胁，但幸运的是，目前AV系统主要使用多传感器融合（MSF）算法，普遍认为这些算法有可能在实践中有效地对抗GPS欺骗。然而，目前还没有研究证明今天的MSF算法在GPS欺骗下是否足够安全，尤其是在AV环境中。在这项研究中，我们首次进行了填补这个关键空白的研究。作为第一项研究，我们重点关注一个生产级别的MSF系统，具有设计和实现层面上的代表性，并确定了两个AV特定的攻击目标：越野攻击和逆行攻击。
> 
> 为了系统地了解安全性能，我们首先分析了上限攻击效果，并发现了一种掌控效应，从根本上破坏了MSF的设计原则。我们进行了原因分析，发现这种漏洞只会动态和非确定性地出现。借助这个洞察，我们设计了FusionRipper，这是一种新颖且通用的攻击方式，可以机会地捕获和利用掌控漏洞。我们在6个真实世界的传感器轨迹上进行评估，发现FusionRipper在所有轨迹的越野攻击和逆行攻击中至少可以达到97%和91.3%的成功率。我们还发现它对于诸如欺骗不准确性等实际因素非常强大。为了改进实用性，我们进一步设计了一种离线方法，可以有效地识别攻击参数，并且在攻击目标上平均成功率达到80％以上，成本最多为半天的时间。我们还讨论了有前景的防御方向。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/shen](https://www.usenix.org/conference/usenixsecurity20/presentation/shen)
- **PDF:** [https://www.usenix.org/system/files/sec20-shen.pdf](https://www.usenix.org/system/files/sec20-shen.pdf)
## Plug-N-Pwned: Comprehensive Vulnerability Analysis of OBD-II Dongles as A New Over-the-Air Attack Surface in Automotive IoT.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#plug-n-pwned-comprehensive-vulnerability-analysis-of-obd-ii-dongles-as-a-new-over-the-air-attack-surface-in-automotive-iot) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#plug-n-pwned-comprehensive-vulnerability-analysis-of-obd-ii-dongles-as-a-new-over-the-air-attack-surface-in-automotive-iot)**
### 作者
* Haohuang Wen, Ohio State University
* Qi Alfred Chen, University of California, Irvine
* Zhiqiang Lin, Ohio State University
### 摘要
> 随着物联网的快速发展，大量无线OBD-II插头被开发出来，可以简单地插入到车辆中，实现远程功能，如复杂的车辆控制和状态监测。然而，由于这些插头直接连接车辆网络，它们可能为车辆打开新的无线攻击面。在本文中，我们对2019年2月在美国亚马逊上可获得的所有无线OBD-II插头进行了首次全面的安全分析，总计有77个。为了系统地进行分析，我们设计并实现了一个自动化工具DongleScope，可以在真实汽车上从所有可能的攻击阶段动态测试这些插头。通过DongleScope，我们已经发现了5种不同类型的漏洞，其中4种是新发现的。我们的研究结果揭示了每个插头都至少存在两种类型的漏洞，这表明当前市场上的无线OBD-II插头面临普遍的漏洞风险。为了展示其严重性，我们进一步构建了4类具体攻击，涉及各种实际影响，如隐私泄露、财产盗窃甚至安全威胁。我们还讨论了根本原因和可行的对策，并做出了相应的负责任披露。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/wen](https://www.usenix.org/conference/usenixsecurity20/presentation/wen)
- **PDF:** [https://www.usenix.org/system/files/sec20-wen.pdf](https://www.usenix.org/system/files/sec20-wen.pdf)
## PCKV: Locally Differentially Private Correlated Key-Value Data Collection with Optimized Utility.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#pckv-locally-differentially-private-correlated-key-value-data-collection-with-optimized-utility) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#pckv-locally-differentially-private-correlated-key-value-data-collection-with-optimized-utility)**
### 作者
* Xiaolan Gu, University of Arizona
* Ming Li, University of Arizona
* Yueqiang Cheng, Baidu X-Lab
* Li Xiong, Emory University
* Yang Cao, Kyoto University
### 摘要
> 本论文研究了局部差分隐私（LDP）下的数据收集，大多数研究都是针对均质数据进行的。现实世界中的应用往往涉及到不同数据类型的混合，比如键值对，其中需要同时估计每个键的频率和值的平均值。对于LDP的键值数据收集，很难在实现良好的效用和隐私权衡方面取得好的结果，因为数据包含两个维度，用户可能拥有多个键值对。键和值之间还存在固有的相关性，如果不加以利用，将导致效用不佳。在本文中，我们提出了一种基于相关扰动以提高效用的局部差分隐私键值数据收集框架。我们通过两个协议PCKV-UE（基于一元编码）和PCKV-GRR（基于广义随机响应）实例化了我们的框架，其中我们设计了一个先进的填充和抽样机制以及一个非交互式的改进均值估计器。由于我们的相关键和值扰动机制，组合隐私预算显示出比键和值的独立扰动更小，这使得我们能够通过预算分配进一步优化扰动参数。对合成和实际数据集的实验结果表明，我们提出的协议在相同的LDP保证下，对于频率和均值估计都比最先进的机制实现了更好的效用。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/gu](https://www.usenix.org/conference/usenixsecurity20/presentation/gu)
- **PDF:** [https://www.usenix.org/system/files/sec20-gu.pdf](https://www.usenix.org/system/files/sec20-gu.pdf)
## Actions Speak Louder than Words: Entity-Sensitive Privacy Policy and Data Flow Analysis with PoliCheck.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#actions-speak-louder-than-words-entity-sensitive-privacy-policy-and-data-flow-analysis-with-policheck) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#actions-speak-louder-than-words-entity-sensitive-privacy-policy-and-data-flow-analysis-with-policheck)**
### 作者
* Benjamin Andow, IBM T.J. Watson Research Center
* Samin Yaseer Mahmud, North Carolina State University
* Justin Whitaker, North Carolina State University
* William Enck, North Carolina State University
* Bradley Reaves, North Carolina State University
* Kapil Singh, IBM T.J. Watson Research Center
* Serge Egelman, U.C. Berkeley; ICSI; AppCensus Inc.
### 摘要
> 过去十年间，通过移动应用程序识别涉及隐私敏感数据泄露一直是研究的焦点。从技术角度来看，如果隐私政策中披露了这些数据流，这些数据流就不被定义为“泄露”。为了解决自动分析中的这种局限性，最近的研究将应用程序的程序分析与隐私政策的分析结合起来，以确定数据流和隐私政策的一致性，从而确定是否存在违规行为。然而，这些先前的研究存在一个根本性的缺陷：它们没有区分接收这些隐私敏感数据的实体（例如第一方和第三方）。在本文中，我们提出了POLICHECK模型，该模型形式化并实现了一个实体敏感的数据流与隐私政策一致性模型。我们使用POLICHECK来研究13,796个应用程序及其隐私政策，并发现高达42.4%的应用程序要么错误地披露隐私敏感数据流，要么省略了对其进行披露。我们的结果还表明，考虑到实体的重要性：如果不考虑实体，先前的方法将错误地将高达38.4%的应用程序分类为其隐私敏感数据流与隐私政策一致。这些错误分类包括将未被披露的数据流传输给第三方（例如，政策只说明第一方收集数据类型），将错误数据流传输给第三方（例如，政策说明第三方不收集数据类型）和存在模糊不清的数据流传输（例如，政策对数据类型的收集有冲突的陈述）。通过定义一种新颖的自动化实体敏感的数据流与隐私政策一致性分析方法，POLICHECK提供了迄今为止确定应用程序是否正确披露其隐私敏感行为的最高精度方法。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/andow](https://www.usenix.org/conference/usenixsecurity20/presentation/andow)
- **PDF:** [https://www.usenix.org/system/files/sec20-andow.pdf](https://www.usenix.org/system/files/sec20-andow.pdf)
## Walking Onions: Scaling Anonymity Networks while Protecting Users.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#walking-onions-scaling-anonymity-networks-while-protecting-users) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#walking-onions-scaling-anonymity-networks-while-protecting-users)**
### 作者
* Chelsea H. Komlo, University of Waterloo
* Nick Mathewson, The Tor Project
* Ian Goldberg, University of Waterloo
### 摘要
> 扩展匿名网络提供了独特的安全挑战，攻击者可以利用网络拓扑的不同视图来进行认识和路径捕获攻击。实际应用中的匿名网络（如Tor）选择以安全为主，要求参与者共享一个全局一致的中继视图，以防止此类攻击。这种方法要求每个用户维护关于每个中继的最新信息，导致每个用户每个时期必须下载的数据总量与中继数量呈线性比例增长。随着客户数量的增加，必须添加更多的中继来提供带宽，进一步加重了网络的总负载。
> 
> 在这项工作中，我们提出了Walking Onions，一组改进匿名网络可扩展性的协议。Walking Onions使得每个用户在每个时期必须下载的信息保持恒定大小，即使网络中的中继数量增长。此外，我们展示了如何将客户端的带宽增长从恒定增长改为对数增长，从而显著改善中继的带宽成本。值得注意的是，Walking Onions提供了与当前需要全局一致网络视图的设计相同的安全性质。我们提出了两种协议变种。第一种对当前的洋葱路由系统只需要进行最小的修改。第二种则提出了更重大的设计变化，从而减少了建立网络路径所需的延迟，并且提供了比以前的构建更好的前向保密性。我们在一个模拟的基于Tor的洋葱路由匿名网络模型中实施和评估Walking Onions，并验证了Walking Onions确实为当前Tor网络大小及以上规模的网络提供了显著的可扩展性改进。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/komlo](https://www.usenix.org/conference/usenixsecurity20/presentation/komlo)
- **PDF:** [https://www.usenix.org/system/files/sec20-komlo.pdf](https://www.usenix.org/system/files/sec20-komlo.pdf)
## Differentially-Private Control-Flow Node Coverage for Software Usage Analysis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#differentially-private-control-flow-node-coverage-for-software-usage-analysis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#differentially-private-control-flow-node-coverage-for-software-usage-analysis)**
### 作者
* Hailong Zhang, The Ohio State University
* Sufian Latif, The Ohio State University
* Raef Bassily, The Ohio State University
* Atanas Rountev, The Ohio State University
### 摘要
> 对于从部署软件中收集使用数据存在重要的隐私问题。我们提出了一种新颖的隐私保护解决方案，用于解决软件使用分析中的一个核心问题：在许多部署软件实例上进行控制流程图覆盖分析。我们的解决方案采用差分隐私及其推广的机制，并提供以下技术贡献：（1）基于控制流程图之间的邻居关系的新型隐私保证概念，防止基于因果关系的推断；（2）基于邻居之间差异的新型敏感性定义，设计差分隐私算法；（3）使用从控制流程图派生的支配者树实现高效算法；（4）通过使用受限敏感性来缩小敏感性界限，采用修剪方法减少噪音水平；（5）基于邻居之间的距离，提出了一种改进的弱不可区分性概念。我们的评估表明，这些技术能够在提供原则性隐私设计保证的同时实现实际准确度。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zhang-hailong](https://www.usenix.org/conference/usenixsecurity20/presentation/zhang-hailong)
## Visor: Privacy-Preserving Video Analytics as a Cloud Service.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#visor-privacy-preserving-video-analytics-as-a-cloud-service) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#visor-privacy-preserving-video-analytics-as-a-cloud-service)**
### 作者
* Rishabh Poddar, UC Berkeley and Microsoft Research
* Ganesh Ananthanarayanan, Microsoft Research
* Srinath Setty, Microsoft Research
* Stavros Volos, Microsoft Research
* Raluca Ada Popa, UC Berkeley
### 摘要
> 视频分析即服务正成为云提供商的重要服务之一。在这类服务中，视频的隐私安全是关键问题。虽然可信执行环境（TEEs）是防止私人视频内容直接泄露的有希望的选择，但它们仍然容易受到侧信道攻击的影响。
> 
> 我们提出了Visor，这是一个系统，在云平台被威胁和不可信租户存在的情况下，为用户的视频流和机器学习模型提供机密性。Visor在CPU和GPU上跨越一个混合TEEs中执行视频流程。它保护了视频模块的数据相关访问模式所引起的侧信道攻击，并解决了CPU-GPU通信通道的信息泄露问题。相较于天真的不知情解决方案，Visor的速度提高了1000倍，其对非知情基准的开销仅限于2倍至6倍。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/poddar](https://www.usenix.org/conference/usenixsecurity20/presentation/poddar)
- **PDF:** [https://www.usenix.org/system/files/sec20-poddar.pdf](https://www.usenix.org/system/files/sec20-poddar.pdf)
## DELF: Safeguarding deletion correctness in Online Social Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#delf-safeguarding-deletion-correctness-in-online-social-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#delf-safeguarding-deletion-correctness-in-online-social-networks)**
### 作者
* Katriel Cohn-Gordon, Facebook
* Georgios Damaskinos, Facebook, EPFL
* Divino Neto, Facebook
* Joshi Cordova, Facebook
* Benoît Reitz, Facebook
* Benjamin Strahs, Facebook
* Daniel Obenshain, Facebook
* Paul Pearce, Facebook, Georgia Tech
* Ioannis Papagiannis, Facebook
### 摘要
> 删除是在线社交网络（OSN）的核心要素。对于用户来说，删除是一种工具，可以删除他们所分享的内容并控制他们的数据。对于OSN来说，强大的删除功能既是对其用户的义务，也是由于开发人员错误不可避免而带来的风险。虽然开发人员能够有效地识别产品中的高级删除要求（例如，用户应能够删除发布的照片），但他们在将高级要求映射为具体操作（例如，删除数据存储中的所有相关项目）方面效果较差。在没有框架支持的情况下，开发人员的错误会导致违反用户隐私的情况，例如保留应该删除的数据、删除错误的数据和可利用的漏洞。
> 
> 我们提出了一种适用于现代OSN的删除框架DELF。在DELF中，开发人员在数据类型定义上指定删除注释，框架将其映射为对后备数据存储进行异步、可靠和可暂时逆转的操作。DELF在静态和动态环境下验证注释，主动标记错误并建议修复措施。
> 
> 我们在三个不同的OSN中部署了DELF，展示了我们方法的可行性。DELF发现、呈现并帮助开发人员纠正了数千个遗漏和数十个错误，同时还在数十个意外删除用户数据的事件中实现了及时恢复。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/cohn-gordon](https://www.usenix.org/conference/usenixsecurity20/presentation/cohn-gordon)
- **PDF:** [https://www.usenix.org/system/files/sec20-cohn-gordon.pdf](https://www.usenix.org/system/files/sec20-cohn-gordon.pdf)
## Datalog Disassembly.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#datalog-disassembly) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#datalog-disassembly)**
### 作者
* Antonio Flores-Montoya, GrammaTech Inc.
* Eric Schulte, GrammaTech Inc.
### 摘要
> 拆卸是二进制分析和改写的基础。我们提出了一种新颖的拆卸技术，可以处理剥离的二进制文件并生成可重组的汇编代码。生成的汇编代码具有准确的符号信息，为分析提供交叉引用，并能够调整代码和数据指针以适应改写。我们的技术采用了多种静态分析和启发式算法，在一个综合的Datalog实现中进行。我们认为Datalog的推理过程特别适合拆卸和所需的分析。我们的实现和实验支持了这一论断。我们已将我们的方法实现为一个名为Ddisasm的开源工具。在广泛的实验中，我们重写了成千上万个x64二进制文件，发现Ddisasm比当前最先进的二进制重组工具Ramblr更快且更准确。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/flores-montoya](https://www.usenix.org/conference/usenixsecurity20/presentation/flores-montoya)
- **PDF:** [https://www.usenix.org/system/files/sec20-flores-montoya.pdf](https://www.usenix.org/system/files/sec20-flores-montoya.pdf)
## KOOBE: Towards Facilitating Exploit Generation of Kernel Out-Of-Bounds Write Vulnerabilities.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#koobe-towards-facilitating-exploit-generation-of-kernel-out-of-bounds-write-vulnerabilities) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#koobe-towards-facilitating-exploit-generation-of-kernel-out-of-bounds-write-vulnerabilities)**
### 作者
* Weiteng Chen, UC Riverside
* Xiaochen Zou, UC Riverside
* Guoren Li, UC Riverside
* Zhiyun Qian, UC Riverside
### 摘要
> 现代操作系统内核的整体性质导致不断发现一系列漏洞。往往不清楚哪些漏洞值得修复，因为只有其中的一部分可能严重到足以导致安全接管（也就是权限提升）。因此，研究人员最近开始开发自动化利用生成技术（用于UAF漏洞），以辅助漏洞分类过程。在本文中，我们研究了Linux内核中的另一种顶级内存漏洞——来自堆的越界（OOB）内存写。我们设计了KOOBE来辅助对此类漏洞的分析，基于两个观察结果：（1）令人惊讶的是，不同的OOB漏洞实例展现出各种能力。（2）内核利用具有多交互性（即，一个利用中涉及多个系统调用），这使得利用构造过程可以模块化。具体而言，我们将重点放在提取OOB漏洞的能力上，这将为随后的易受攻击性评估过程提供信息。我们的系统依赖于几个构建模块，包括一种新颖的能力引导模糊测试解决方案，以发现隐藏的能力，以及一种组合能力以进一步增强成功利用的可能性。在我们的评估中，我们通过透彻分析17个最新的Linux内核OOB漏洞（其中只有5个公开可用的利用程序），证明了KOOBE的适用性。对于其中的11个漏洞，KOOBE成功生成了候选利用策略（其中包括5个甚至没有任何CVE分配的漏洞）。随后，我们能够从这些策略中构建完全可工作的利用程序。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/chen-weiteng](https://www.usenix.org/conference/usenixsecurity20/presentation/chen-weiteng)
- **PDF:** [https://www.usenix.org/system/files/sec20-chen-weiteng.pdf](https://www.usenix.org/system/files/sec20-chen-weiteng.pdf)
## Automatic Techniques to Systematically Discover New Heap Exploitation Primitives.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#automatic-techniques-to-systematically-discover-new-heap-exploitation-primitives) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#automatic-techniques-to-systematically-discover-new-heap-exploitation-primitives)**
### 作者
* Insu Yun, Georgia Institute of Technology
* Dhaval Kapil, Facebook
* Taesoo Kim, Georgia Institute of Technology
### 摘要
> 堆分配器的元数据滥用技术的开发已经得到广泛研究，因为这些技术具有广泛性（即与应用程序无关）和强大性（即绕过现代的缓解措施）。然而，这些技术通常被认为是艺术，因此发现它们的方式仍然是临时的、手动的，并且与分配器相关。
> 
> 在本文中，我们提出了一种自动工具——ArcHeap，以系统地发现未被探索的堆滥用原语，而不考虑它们的底层实现。ArcHeap的关键思想是让计算机自主地探索空间，类似于模糊测试的概念，通过指定一组常见的现代堆分配器设计和漏洞的根本原因作为模型，并提供堆操作和攻击能力作为行动。在探索过程中，ArcHeap检查这些行为的组合是否可以潜在地用于构造滥用原语，例如任意写入或重叠的块。作为证明，ArcHeap生成了能够演示所发现的滥用技术的工作PoC。
> 
> 我们使用ptmalloc2和其他10个分配器对ArcHeap进行了评估，并在ptmalloc2中发现了五种以前未知的滥用技术，以及针对其中七个分配器（包括安全重点分配器DieHarder）的几种技术。为了展示ArcHeap方法在其他领域的有效性，我们还研究了ptmalloc2的不同版本中安全特性和滥用原语的演变。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/yun](https://www.usenix.org/conference/usenixsecurity20/presentation/yun)
- **PDF:** [https://www.usenix.org/system/files/sec20-yun.pdf](https://www.usenix.org/system/files/sec20-yun.pdf)
## The Industrial Age of Hacking.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-industrial-age-of-hacking) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-industrial-age-of-hacking)**
### 作者
* Timothy Nosco, United States Army
* Jared Ziegler, National Security Agency
* Zechariah Clark, United States Navy
* Davy Marrero, United States Navy
* Todd Finkler, United States Air Force
* Andrew Barbarello, United States Navy
* W. Michael Petullo, United States Army
### 摘要
> 黑客社区存在一种认知偏差，即在没有任何先前成功迹象的情况下，选择一款软件并投入大量人力资源来寻找其中的漏洞。我们将这种策略标记为深度优先搜索，并提出了一种替代方法：广度优先搜索。在广度优先搜索中，人们在研究任何特定软件之前，仅需进行最少量的工作以实现对一系列目标的自动化分析，然后再投入额外的时间和精力进行进一步的研究。
> 
> 我们提出了一项可复制的人类研究，利用不同技能水平的团队，并在最大程度上使用自动化。我们的目标是找到漏洞的一个有效过程；有关团队成员的成长、培训和高效利用的明确计划；以及支持可衡量的渐进进展。我们制定了一个流水线流程，改进了之前复杂而手动的工作。我们的工作提供了证据，表明广度优先的方法提高了团队的效率。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/nosco](https://www.usenix.org/conference/usenixsecurity20/presentation/nosco)
- **PDF:** [https://www.usenix.org/system/files/sec20-nosco.pdf](https://www.usenix.org/system/files/sec20-nosco.pdf)
## BScout: Direct Whole Patch Presence Test for Java Executables.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#bscout-direct-whole-patch-presence-test-for-java-executables) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#bscout-direct-whole-patch-presence-test-for-java-executables)**
### 作者
* Jiarun Dai, Fudan University
* Yuan Zhang, Fudan University
* Zheyue Jiang, Fudan University
* Yingtian Zhou, Fudan University
* Junyan Chen, Fudan University
* Xinyu Xing, Pennsylvania State University
* Xiaohan Zhang, Fudan University
* Xin Tan, Fudan University
* Min Yang, Fudan University
* Zhemin Yang, Fudan University
### 摘要
> 为保护终端用户和软件免受已知漏洞的影响，及时应用安全补丁至关重要。为此，提出了一种具有独立调查目标上的补丁应用状态能力的补丁存在测试。现有的补丁存在测试工作采用了基于签名的方法。为了在签名的唯一性和稳定性之间做出折衷，现有的工作被限制在使用小而局部的补丁片段（而不是整个补丁）进行签名生成，因此它们本质上是不可靠的。
> 
> 基于此，我们介绍了BScout，它在不生成签名的情况下直接检查Java可执行文件中整个补丁的存在。BScout采用了几种新技术来弥合源代码和字节码指令之间的语义差距，在测试过程中准确检查整个目标可执行文件中的细粒度补丁语义。我们使用来自Android框架和第三方库的194个CVE评估了BScout。结果显示，它在目标可执行文件中是否存在行号信息（即调试信息）的情况下都能取得显著的准确性。我们进一步将BScout应用于来自7个供应商的2,506个Android系统镜像的大规模补丁应用实践研究中。我们的研究揭示了许多尚未报告的发现。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/dai](https://www.usenix.org/conference/usenixsecurity20/presentation/dai)
- **PDF:** [https://www.usenix.org/system/files/sec20-dai.pdf](https://www.usenix.org/system/files/sec20-dai.pdf)
## MVP: Detecting Vulnerabilities using Patch-Enhanced Vulnerability Signatures.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#mvp-detecting-vulnerabilities-using-patch-enhanced-vulnerability-signatures) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#mvp-detecting-vulnerabilities-using-patch-enhanced-vulnerability-signatures)**
### 作者
* Yang Xiao, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Bihuan Chen, School of Computer Science and Shanghai Key Laboratory of Data Science, Fudan University, China
* Chendong Yu, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Zhengzi Xu, School of Computer Science and Engineering, Nanyang Technological University, Singapore
* Zimu Yuan, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Feng Li, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Binghong Liu, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yang Liu, School of Computer Science and Engineering, Nanyang Technological University, Singapore
* Wei Huo, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Wei Zou, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China and School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Wenchang Shi, Renmin University of China, Beijing, China
### 摘要
> 在现实世界的系统中普遍存在且未被检测到的重复性漏洞，这些漏洞通常是由于代码库的重用或共享代码逻辑所造成的。然而，易受攻击函数和其修复函数之间的潜在小差异以及易受攻击函数和待检测目标函数之间的可能较大差异给基于克隆和函数匹配的方法识别这些重复漏洞带来了挑战，即导致了较高的误报和漏报率。
> 
> 在本文中，我们提出了一种新的方法来检测重复性漏洞，具有较低的误报和漏报率。我们首先使用我们的新颖程序切片技术从易受攻击函数和其修复函数在语法和语义层面提取漏洞和修复标识。然后，如果目标函数与漏洞标识匹配但与修复标识不匹配，则将其标识为潜在易受攻击函数。我们在一个名为MVP的工具中实现了我们的方法。我们对十个开源系统进行了评估，结果显示：i）MVP明显优于最先进的基于克隆和函数匹配的重复性漏洞检测方法；ii）MVP检测到一些通用漏洞检测方法无法检测到的重复性漏洞，即两种基于学习的方法和两个商业工具；iii）MVP检测到了97个新的漏洞，并分配了23个CVE标识符。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/xiao](https://www.usenix.org/conference/usenixsecurity20/presentation/xiao)
- **PDF:** [https://www.usenix.org/system/files/sec20-xiao.pdf](https://www.usenix.org/system/files/sec20-xiao.pdf)
## Shattered Chain of Trust: Understanding Security Risks in Cross-Cloud IoT Access Delegation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#shattered-chain-of-trust-understanding-security-risks-in-cross-cloud-iot-access-delegation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#shattered-chain-of-trust-understanding-security-risks-in-cross-cloud-iot-access-delegation)**
### 作者
* Bin Yuan, School of Cyber Science and Engineering, Huazhong Univ. of Sci. & Tech., China; National Engineering Research Center for Big Data Technology and System, Cluster and Grid Computing Lab, Services Computing Technology and System Lab, and Big Data Security Engineering Research Center, Huazhong Univ. of Sci. & Tech., China; Shenzhen Huazhong University of Science and Technology Research Institute, China; Indiana University Bloomington
* Yan Jia, School of Cyber Engineering, Xidian University, China; National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences, China; Indiana University Bloomington
* Luyi Xing, Indiana University Bloomington
* Dongfang Zhao, Indiana University Bloomington
* XiaoFeng Wang, Indiana University Bloomington
* Deqing Zou, School of Cyber Science and Engineering, Huazhong Univ. of Sci. & Tech., China; National Engineering Research Center for Big Data Technology and System, Cluster and Grid Computing Lab, Services Computing Technology and System Lab, and Big Data Security Engineering Research Center, Huazhong Univ. of Sci. & Tech., China
* Hai Jin, School of Computer Science and Technology, Huazhong Univ. of Sci. & Tech., China; National Engineering Research Center for Big Data Technology and System, Cluster and Grid Computing Lab, Services Computing Technology and System Lab, and Big Data Security Engineering Research Center, Huazhong Univ. of Sci. & Tech., China
* Yuqing Zhang, National Computer Network Intrusion Protection Center, University of Chinese Academy of Sciences, China; School of Cyber Engineering, Xidian University, China
### 摘要
> 物联网云平台促进物联网设备与用户之间的通信，并授权用户访问其设备。在这个范式中，物联网设备通常由设备供应商管理，例如，飞利浦的灯泡由飞利浦Hue云平台管理。如今的主流物联网云平台还支持不同供应商（例如飞利浦Hue、LIFX等）和云服务提供商（例如Google、IFTTT等）之间的设备访问委托：例如，飞利浦Hue和SmartThings云平台支持将设备访问委托给其他云平台，如Google Home，以便用户可以通过Google Home管理来自不同供应商的多个设备。为了实现这一目的，物联网云平台开发和使用了物联网委托机制。我们发现这些机制在实际应用中是异构和临时的，并没有适用于物联网环境的标准化委托协议。
> 
> 本文基于我们开发的半自动验证工具，对现实世界中的物联网访问委托进行了首次系统研究。我们的研究揭示了这些委托机制中安全风险的普遍存在，使得对手（例如Airbnb租户、前雇员）可以未经授权访问受害者的设备（例如智能门锁），或冒充设备触发其他设备。我们通过对这些机制进行端到端的攻击验证了其中存在的重要安全缺陷，并进行了一项度量研究。我们的研究证明了这些攻击的严重后果以及目前构建这些机制的安全隐患。我们将研究结果报告给相关方，并得到了其承认问题的回应。在标准化解决方案得到广泛应用之前，我们进一步提出了开发更安全的跨云物联网委托服务的原则。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/yuan](https://www.usenix.org/conference/usenixsecurity20/presentation/yuan)
- **PDF:** [https://www.usenix.org/system/files/sec20-yuan.pdf](https://www.usenix.org/system/files/sec20-yuan.pdf)
## HALucinator: Firmware Re-hosting Through Abstraction Layer Emulation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#halucinator-firmware-re-hosting-through-abstraction-layer-emulation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#halucinator-firmware-re-hosting-through-abstraction-layer-emulation)**
### 作者
* Abraham A Clements, Sandia National Laboratories
* Eric Gustafson, UC Santa Barbara and Sandia National Laboratories
* Tobias Scharnowski, Ruhr-Universität Bochum
* Paul Grosen, UC Santa Barbara
* David Fritz, Sandia National Laboratories
* Christopher Kruegel, UC Santa Barbara
* Giovanni Vigna, UC Santa Barbara
* Saurabh Bagchi, Purdue University
* Mathias Payer, EPFL
### 摘要
> 鉴于在线嵌入式设备的普及程度日益增加，分析其固件对于安全性、隐私性和安全性至关重要。硬件与固件之间的紧密耦合以及嵌入式系统的多样性使得对固件进行动态分析变得困难。然而，固件开发人员通常使用抽象化工具（如硬件抽象层）简化他们的工作。我们利用这种抽象化工具作为重新托管和分析固件的基础。通过为HAL函数提供高级替代（称为高级模拟 - HLE），我们将硬件与固件解耦。该方法首先通过二进制分析确定固件样本中的库函数，并在全系统模拟器中提供这些函数的通用实现。
> 
> 我们在原型系统HALucinator中提出了这些想法，该系统能够重新托管固件并使虚拟设备正常运行。首先，我们引入了对现有库匹配技术的扩展，以便在二进制固件中识别库函数，减少冲突，并推断出其他函数名称。接下来，我们通过使用简化的处理程序和外围模型演示了重新托管的过程，这使得该过程快速、灵活，并且在不同的固件样本和芯片厂商之间可移植。最后，我们通过将美国模糊龙（American Fuzzy Lop）fuzzer与HALucinator结合使用，演示了HLE在安全分析中的实用性，以定位固件中多个以前未知的漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/clements](https://www.usenix.org/conference/usenixsecurity20/presentation/clements)
- **PDF:** [https://www.usenix.org/system/files/sec20-clements.pdf](https://www.usenix.org/system/files/sec20-clements.pdf)
## Silhouette: Efficient Protected Shadow Stacks for Embedded Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#silhouette-efficient-protected-shadow-stacks-for-embedded-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#silhouette-efficient-protected-shadow-stacks-for-embedded-systems)**
### 作者
* Jie Zhou, University of Rochester
* Yufei Du, University of Rochester
* Zhuojia Shen, University of Rochester
* Lele Ma, University of Rochester and College of William and Mary
* John Criswell, University of Rochester
* Robert J. Walls, Worcester Polytechnic Institute
### 摘要
> 基于微控制器的嵌入式系统越来越多地用于可能在遭到损害时具有严重和直接后果的应用，包括汽车控制系统、智能锁、无人机和植入式医疗设备。由于资源和执行时间的限制，C语言是用于编程这些设备的主要语言。不幸的是，C语言既不是类型安全的，也不是内存安全的，控制流劫持仍然是一种普遍存在的威胁。
> 
> 本文介绍了Silhouette：一种基于编译器的防御机制，它有效地保证了返回地址的完整性，显著减少了控制流劫持的攻击面。Silhouette将一个不可破坏的返回地址阴影栈与正向控制流和内存保护检查相结合，以确保所有函数都返回到正确的动态调用者。为了保护其阴影栈，Silhouette使用存储硬化技术，这是一种针对各种ARM架构的高效的内部地址空间隔离技术，利用了ARM处理器上的特殊存储指令。
> 
> 我们实现了针对ARMv7-M架构的Silhouette，但我们的技术也适用于其他常见的嵌入式ARM架构。我们的评估结果显示，Silhouette对两个基准套件的性能开销的几何平均值分别为1.3％和3.4％。此外，我们还原型化了Silhouette-Invert，Silhouette的另一种实现方式，它只带来0.3％和1.9％的性能开销，但需要进行一些微小的硬件变动。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zhou-jie](https://www.usenix.org/conference/usenixsecurity20/presentation/zhou-jie)
- **PDF:** [https://www.usenix.org/system/files/sec20-zhou-jie.pdf](https://www.usenix.org/system/files/sec20-zhou-jie.pdf)
## P2IM: Scalable and Hardware-independent Firmware Testing via Automatic Peripheral Interface Modeling.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#p2im-scalable-and-hardware-independent-firmware-testing-via-automatic-peripheral-interface-modeling) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#p2im-scalable-and-hardware-independent-firmware-testing-via-automatic-peripheral-interface-modeling)**
### 作者
* Bo Feng, Northeastern University
* Alej, Northeastern University
* ro Mera, Northeastern University
* Long Lu, Northeastern University
### 摘要
> 嵌入式固件的动态测试或模糊测试受到硬件依赖性和可扩展性差的严重限制，这在一定程度上导致了广泛存在的易受攻击的物联网设备。我们提出了一个软件框架，该框架在持续执行给定固件二进制文件的同时，从现成的模糊测试工具中导入输入，实现了独立于硬件且可扩展的固件测试。我们的框架使用一种称为P2IM的新技术，它通过自动生成的模型抽象出多样的外设，并实时处理固件的输入输出。P2IM对外设设计无感知，并适用于各种嵌入式设备的固件实现，因此可以广泛应用。我们对70个样本固件和10个真实设备中的固件（包括无人机、机器人和可编程逻辑控制器）进行了评估。在没有任何手动辅助的情况下，它成功执行了79%的样本固件。我们还对真实固件进行了有限的模糊测试，发现了7个独特的未知错误。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/feng](https://www.usenix.org/conference/usenixsecurity20/presentation/feng)
- **PDF:** [https://www.usenix.org/system/files/sec20-feng.pdf](https://www.usenix.org/system/files/sec20-feng.pdf)
## COUNTERFOIL: Verifying Provenance of Integrated Circuits using Intrinsic Package Fingerprints and Inexpensive Cameras.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#counterfoil-verifying-provenance-of-integrated-circuits-using-intrinsic-package-fingerprints-and-inexpensive-cameras) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#counterfoil-verifying-provenance-of-integrated-circuits-using-intrinsic-package-fingerprints-and-inexpensive-cameras)**
### 作者
* Siva Nishok Dhanuskodi, University of Massachusetts Amherst
* Xiang Li, University of Massachusetts Amherst
* Daniel Holcomb, University of Massachusetts Amherst
### 摘要
> 伪造集成电路每年给半导体行业造成数十亿美元的损失，并危及那些不知情依赖于它们的关键系统的可靠性。伪造零件主要是再循环利用、测试拒绝或合法但重新分级的产品，迄今已在包括关键防御系统在内的多个系统中发现。在这项研究中，我们提出了一种基于注册和验证封装模块固有特征的反伪造系统COUNTERFOIL。我们的系统依赖于计算机可读标签、廉价摄像头、使用OpenCV的图像处理和数字签名，以注册和验证芯片封装。我们在100多个芯片的数据集上演示了我们的方法。我们表明我们的技术在各种环境下验证来源是有效且可靠的，并通过使用不同的图像平台以及在石磨机中使用碳化硅抛光砂磨芯片来评估封装特征的鲁棒性。我们表明，即使对手窃取用于生产注册芯片封装的精确模具，他也将在伪造芯片方面取得有限的成功。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/dhanuskodi](https://www.usenix.org/conference/usenixsecurity20/presentation/dhanuskodi)
- **PDF:** [https://www.usenix.org/system/files/sec20-dhanuskodi.pdf](https://www.usenix.org/system/files/sec20-dhanuskodi.pdf)
## Hall Spoofing: A Non-Invasive DoS Attack on Grid-Tied Solar Inverter.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#hall-spoofing-a-non-invasive-dos-attack-on-grid-tied-solar-inverter) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#hall-spoofing-a-non-invasive-dos-attack-on-grid-tied-solar-inverter)**
### 作者
* Anomadarshi Barua, UC Irvine
* Mohammad Abdullah Al Faruque, UC Irvine
### 摘要
> 网联太阳能逆变器继续迅速增长，以应对日益严峻的环境挑战。现如今，智能传感器和传输器与网联逆变器紧密集成。这种集成打开了一个未知威胁的“潘多拉魔盒”，这些威胁可能来自非常不寻常的途径。本文展示了一种可以通过伪造逆变器霍尔传感器的非侵入式攻击方法。我们展示了攻击者如何伪装攻击工具并将其放置在目标逆变器附近。通过这样做，攻击者可以有意扰乱电网电压和频率，并向电网注入虚假的实际功率和无功功率。我们还展示了这种攻击对德州仪器的商用140瓦网联逆变器模拟电网缩减测试平台的影响。我们能够实现31.52%的输出电压变化，在低频谐波功率方面增加3.16倍(-6dB至-11dB)，实际功率增加3.44倍。此外，我们介绍了一种用于非侵入式敌对控制的占空比变化方法，可以将逆变器电压改变高达34%，实际功率改变高达38%。我们通过讨论来探讨使用100千瓦逆变器的可行性，从而提供了攻击模型普及的见解。另外，我们使用商业电力系统模拟工具Etap 19.0.1来模拟攻击对一个2.3兆瓦电网的影响。据我们所知，这是首次强调这种可能导致电网瘫痪的攻击方法，尤其是在薄弱电网中。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/barua](https://www.usenix.org/conference/usenixsecurity20/presentation/barua)
- **PDF:** [https://www.usenix.org/system/files/sec20-barua.pdf](https://www.usenix.org/system/files/sec20-barua.pdf)
## Updates-Leak: Data Set Inference and Reconstruction Attacks in Online Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#updates-leak-data-set-inference-and-reconstruction-attacks-in-online-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#updates-leak-data-set-inference-and-reconstruction-attacks-in-online-learning)**
### 作者
* Ahmed Salem, CISPA Helmholtz Center for Information Security
* Apratim Bhattacharya, Max Planck Institute for Informatics
* Michael Backes, CISPA Helmholtz Center for Information Security
* Mario Fritz, CISPA Helmholtz Center for Information Security
* Yang Zhang, CISPA Helmholtz Center for Information Security
### 摘要
> 机器学习（ML）在过去十年中取得了快速发展，推动这一发展的主要因素是前所未有的大规模数据。数据生成是一个持续过程，这导致了在线学习情景中，ML模型的所有者频繁使用新收集的数据更新其模型。因此，如果在两个不同的时间点上使用相同的数据样本查询ML模型，将会得到不同的结果。
> 
> 本文研究了黑盒ML模型在更新前后输出的变化是否会泄露进行更新的数据集（即更新集）的信息。这构成了对黑盒ML模型的新攻击面，这种信息泄露可能会危及ML模型所有者的知识产权和数据隐私。我们提出了四种攻击方法，采用编码器-解码器的形式，可以推断出更新集的多样化信息。我们的新攻击借助于最先进的深度学习技术。特别是，我们提出了一种基于生成对抗网络（GANs）但包含重构损失的混合生成模型（CBM-GAN），可以重新构建准确的样本。我们的实验证明了所提出的攻击具有强大的性能。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/salem](https://www.usenix.org/conference/usenixsecurity20/presentation/salem)
- **PDF:** [https://www.usenix.org/system/files/sec20-salem.pdf](https://www.usenix.org/system/files/sec20-salem.pdf)
## Exploring Connections Between Active Learning and Model Extraction.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#exploring-connections-between-active-learning-and-model-extraction) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#exploring-connections-between-active-learning-and-model-extraction)**
### 作者
* Varun Ch, University of Wisconsin-Madison
* rasekaran, University of Wisconsin-Madison
* Kamalika Chaudhuri, University of California San Diego
* Irene Giacomelli, Protocol Labs
* Somesh Jha, University of Wisconsin-Madison
* Songbai Yan, University of California San Diego
### 摘要
> 机器学习正在被个人、研究机构和公司越来越广泛地使用。这导致了机器学习即服务（MLaaS）的激增 - 提供工具和资源来学习模型，并提供用户友好的查询界面以访问模型的云服务。然而，这样的MLaaS系统引发了隐私问题，例如模型提取。在模型提取攻击中，对手利用查询界面恶意窃取模型。更确切地说，在模型提取攻击中，一个通过查询界面与服务器进行交互的不诚实用户可以提取（即学习）服务器拥有的敏感或专有模型的近似模型。这种攻击是由Tramèr等人在2016 USENIX安全研讨会上介绍的，他们展示了对各种模型的实际攻击。我们认为，更好地理解模型提取攻击的有效性对于设计安全的MLaaS系统至关重要。为此，我们首先采取以下步骤：（a）形式化模型提取并讨论可能的防御策略，（b）对模型提取和活动学习领域进行类比。特别是，我们展示了活动学习领域的最新进展可以用于实施强大的模型提取攻击，并探讨可能的防御策略。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/chandrasekaran](https://www.usenix.org/conference/usenixsecurity20/presentation/chandrasekaran)
- **PDF:** [https://www.usenix.org/system/files/sec20-chandrasekaran.pdf](https://www.usenix.org/system/files/sec20-chandrasekaran.pdf)
## Hybrid Batch Attacks: Finding Black-box Adversarial Examples with Limited Queries.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#hybrid-batch-attacks-finding-black-box-adversarial-examples-with-limited-queries) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#hybrid-batch-attacks-finding-black-box-adversarial-examples-with-limited-queries)**
### 作者
* Fnu Suya, University of Virginia
* Jianfeng Chi, University of Virginia
* David Evans, University of Virginia
* Yuan Tian, University of Virginia
### 摘要
> 我们在一个黑盒设置中研究对抗样本，其中对手只能通过API访问目标模型，而每个查询都很昂贵。之前关于黑盒对抗样本的研究采用了以下两种主要策略之一：（1）转移攻击使用白盒攻击在本地模型上找到可转移到目标模型的候选对抗样本，（2）基于优化的攻击对目标模型进行查询，并应用优化技术来搜索对抗样本。我们提出了混合攻击策略，将这两种策略结合起来，使用本地模型的候选对抗样本作为基于优化的攻击的起点，并使用优化攻击中学习到的标签来调整本地模型以寻找可转移的候选样本。我们在MNIST、CIFAR10和ImageNet数据集上进行了实证，证明了我们的混合攻击策略降低了成本并提高了成功率。我们还介绍了一种种子优先级策略，使攻击者能够将资源集中在最有希望的种子上。将混合攻击与我们的种子优先级策略结合起来，可以可靠地使用少量查询找到对抗样本的批处理攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/suya](https://www.usenix.org/conference/usenixsecurity20/presentation/suya)
- **PDF:** [https://www.usenix.org/system/files/sec20-suya.pdf](https://www.usenix.org/system/files/sec20-suya.pdf)
## High Accuracy and High Fidelity Extraction of Neural Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#high-accuracy-and-high-fidelity-extraction-of-neural-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#high-accuracy-and-high-fidelity-extraction-of-neural-networks)**
### 作者
* Matthew Jagielski, Northeastern University, Google Brain
* Nicholas Carlini, Google Brain
* David Berthelot, Google Brain
* Alex Kurakin, Google Brain
* Nicolas Papernot, Google Brain
### 摘要
> 在模型提取攻击中，攻击者在具有神谕预测访问权限的情况下窃取远程部署的机器学习模型的副本。我们将模型提取攻击分类为两个目标：准确性，即在基础学习任务上表现良好，和保真度，即与远程受害者分类器在任何输入上的预测相匹配。
> 
> 为了提取一个高准确性的模型，我们开发了一种基于学习的攻击，利用受害者来监督提取模型的训练。通过分析和实证论证，我们解释了阻止任何基于学习策略从提取一个真正高保真度模型（即在所有可能的输入上其预测与受害者模型完全一致的模型）的固有限制。解决这些限制，我们进一步扩展了之前的工作，开发了直接提取（即无需训练）模型权重的第一个实用的、功能等效的提取攻击。
> 
> 我们在学术数据集和一个训练有10亿专有图像的最先进的图像分类器上进行了实验证明。除了拓宽模型提取研究的范围，我们的工作还展示了对生产级系统的模型提取攻击的可行性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/jagielski](https://www.usenix.org/conference/usenixsecurity20/presentation/jagielski)
- **PDF:** [https://www.usenix.org/system/files/sec20-jagielski.pdf](https://www.usenix.org/system/files/sec20-jagielski.pdf)
## Adversarial Preprocessing: Understanding and Preventing Image-Scaling Attacks in Machine Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#adversarial-preprocessing-understanding-and-preventing-image-scaling-attacks-in-machine-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#adversarial-preprocessing-understanding-and-preventing-image-scaling-attacks-in-machine-learning)**
### 作者
* Erwin Quiring, TU Braunschweig
* David Klein, TU Braunschweig
* Daniel Arp, TU Braunschweig
* Martin Johns, TU Braunschweig
* Konrad Rieck, TU Braunschweig
### 摘要
> 机器学习在过去几年取得了显著进展，然而其成功被不同的攻击所掩盖，这些攻击可能阻碍其正确运行。尽管已经有大量研究对学习算法的攻击进行了研究，但是机器学习预处理中的漏洞却未受到关注。唯一的例外是肖等人最近提出的针对图像缩放的攻击。与之前的工作不同，这些攻击不依赖于学习算法，因此会影响计算机视觉中大多数基于学习的方法。然而，尚未理解这些攻击的机制，因此它们的根本原因仍然未知。
> 
> 在本文中，我们从信号处理的角度对图像缩放攻击进行了首次深入分析，并确定其根本原因是下采样和卷积的相互作用。基于这一发现，我们调查了三个流行的机器学习图像处理库（OpenCV、TensorFlow和Pillow），并确认了这种相互作用在不同缩放算法中的存在。作为解决方案，我们开发了一种新颖的防御方法，可以防止所有可能的攻击变体。我们经验性地证明了该防御方法对非自适应和自适应敌对方的有效性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/quiring](https://www.usenix.org/conference/usenixsecurity20/presentation/quiring)
- **PDF:** [https://www.usenix.org/system/files/sec20-quiring.pdf](https://www.usenix.org/system/files/sec20-quiring.pdf)
## TextShield: Robust Text Classification Based on Multimodal Embedding and Neural Machine Translation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#textshield-robust-text-classification-based-on-multimodal-embedding-and-neural-machine-translation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#textshield-robust-text-classification-based-on-multimodal-embedding-and-neural-machine-translation)**
### 作者
* Jinfeng Li, Zhejiang University, Alibaba Group
* Tianyu Du, Zhejiang University
* Shouling Ji, Zhejiang University, Alibaba-Zhejiang University Joint Research Institute of Frontier Technologies
* Rong Zhang, Alibaba Group
* Quan Lu, Alibaba Group
* Min Yang, Fudan University
* Ting Wang, Pennsylvania State University
### 摘要
> 基于文本的有害内容检测是减少在线社交媒体环境中有害互动的重要工具。然而，其基本机制——基于深度学习的文本分类（DLTC）对恶意构建的对抗文本具有固有的脆弱性。为了缓解这些脆弱性，已经对强化英文DLTC模型进行了大量研究。然而，现有的防御方法对于基于中文的DLTC模型并不有效，因为中文语言的稀疏性、多样性和变异性独特。
> 
> 本文通过提出TextShield来填补这一显著差距，TextShield是一种专门为基于中文的DLTC模型设计的新的对抗性防御框架。TextShield在几个关键方面与以往的工作不同：(i)通用性——它适用于任何基于中文的DLTC模型，无需重新训练；(ii)鲁棒性——即使在自适应攻击的环境下, 它仍然能显著降低攻击成功率；(iii)准确性——它对DLTC模型在合法输入上的性能几乎没有影响。大量评估结果表明，它优于现有方法和业内领先的平台。未来的工作将探索其在更广泛的实际任务中的适用性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/li-jinfeng](https://www.usenix.org/conference/usenixsecurity20/presentation/li-jinfeng)
- **PDF:** [https://www.usenix.org/system/files/sec20-li-jinfeng.pdf](https://www.usenix.org/system/files/sec20-li-jinfeng.pdf)
## Data Recovery from "Scrubbed" NAND Flash Storage: Need for Analog Sanitization.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#data-recovery-from-scrubbed-nand-flash-storage-need-for-analog-sanitization) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#data-recovery-from-scrubbed-nand-flash-storage-need-for-analog-sanitization)**
### 作者
* Md Mehedi Hasan, The University of Alabama in Huntsville
* Biswajit Ray, The University of Alabama in Huntsville
### 摘要
> 闪存非易失性存储系统的数字清洗是一个经过充分研究的课题。由于闪存存储单元以模拟门限电压来存储信息，即使经过数字清洗，闪存单元可能仍保留之前写入数据的痕迹。在本文中，我们展示了使用“擦拭”技术对闪存介质进行清洗时，数据可以部分或完全恢复，这是NAND闪存中常用的页面删除技术。我们发现，对手可以利用存储单元的数据保留特性，通过与存储器的标准数字接口恢复已删除的数据。我们通过在芯片上进行部分擦除操作，演示了对商用闪存芯片进行擦拭后的数据恢复。我们的结果表明，在闪存系统中，需要进行模拟擦拭以安全删除信息。我们提出并实施了基于文件创建时间信息的部分编程操作来实现模拟擦拭。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/hasan](https://www.usenix.org/conference/usenixsecurity20/presentation/hasan)
- **PDF:** [https://www.usenix.org/system/files/sec20-hasan.pdf](https://www.usenix.org/system/files/sec20-hasan.pdf)
## PKU Pitfalls: Attacks on PKU-based Memory Isolation Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#pku-pitfalls-attacks-on-pku-based-memory-isolation-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#pku-pitfalls-attacks-on-pku-based-memory-isolation-systems)**
### 作者
* R. Joseph Connor, University of Tennessee, Knoxville
* Tyler McDaniel, University of Tennessee, Knoxville
* Jared M. Smith, University of Tennessee, Knoxville
* Max Schuchard, University of Tennessee, Knoxville
### 摘要
> 通过在比传统操作系统控制更细粒度的级别上强制实施最低特权，内部进程内存隔离可以提高安全性，并且不会出现进程间通信的切换上下文开销。一个单一进程可以被划分为不同的组件，使得属于一个组件的内存只能被该组件的代码访问。因为进程一直以来都是一个基本的安全边界，所以在安全系统设计中为进程的不同组件分配不同的信任级别是一种基本的变革。然而，至今对于在现有操作系统抽象之上安全实现内部进程隔离的挑战的研究很少。我们发现，尽管提供了强大的内部进程内存隔离，但现有的通用方法忽视了操作系统通过系统对象访问内存和其他进程内部资源的方式。通过使用两种最近提出的内存隔离系统，我们显示出这样的设计容易受到能够绕过内存隔离的通用攻击的攻击。这些攻击利用内核作为一个混乱的代理，利用现有的内核功能，这些功能与进程内存隔离无关。我们认为这个根本原因在于内核抽象和用户级内部进程内存隔离之间存在基本不同的安全模型。最后，我们讨论了潜在的缓解措施，并显示出扩展基于ptrace的沙盒以防止新攻击的性能成本很高，突显了需要更高效的系统调用拦截的需求。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/connor](https://www.usenix.org/conference/usenixsecurity20/presentation/connor)
- **PDF:** [https://www.usenix.org/system/files/sec20-connor.pdf](https://www.usenix.org/system/files/sec20-connor.pdf)
## Medusa: Microarchitectural Data Leakage via Automated Attack Synthesis.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#medusa-microarchitectural-data-leakage-via-automated-attack-synthesis) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#medusa-microarchitectural-data-leakage-via-automated-attack-synthesis)**
### 作者
* Daniel Moghimi, Worcester Polytechnic Institute
* Moritz Lipp, Graz University of Technology
* Berk Sunar, Worcester Polytechnic Institute
* Michael Schwarz, Graz University of Technology
### 摘要
> 2019年5月，一种基于熔断漏洞的短暂执行攻击新类别被披露，名为“微架构数据采样”（MDS）。MDS使得对手能够通过收集共享CPU资源（如数据缓存，填充缓冲区和存储缓冲区）中的数据，跨安全域泄漏机密信息。这些资源可能暂时保存属于其他进程和特权上下文的数据，这些数据可能错误地被转发给攻击者的内存访问。
> 
> 我们使用一种新颖的基于模糊测试的方法对这些熔断漏洞攻击进行了深入分析。我们引入了一种分析工具，名为Transynther，它通过变异现有熔断变种的基本块来生成和评估新的熔断子变种。我们应用Transynther来分析现代CPU，并更好地理解这些攻击的根本原因。结果发现，我们发现了只针对特定内存操作（例如快速字符串复制）的新的MDS变种。
> 
> 根据我们的发现，我们提出了一种新的攻击，名为Medusa，它可以从隐式写组合内存操作中泄漏数据。由于Medusa只适用于特定操作，因此可以用于确定易受攻击的目标。在一个案例研究中，我们将Medusa应用于RSA签名操作的密钥恢复。我们展示了Medusa在base64解码阶段可以泄漏RSA密钥的各个部分。然后，我们使用基于格的密码分析技术构建泄漏模板，并恢复完整的RSA密钥。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/moghimi-medusa](https://www.usenix.org/conference/usenixsecurity20/presentation/moghimi-medusa)
- **PDF:** [https://www.usenix.org/system/files/sec20-moghimi-medusa.pdf](https://www.usenix.org/system/files/sec20-moghimi-medusa.pdf)
## V0LTpwn: Attacking x86 Processor Integrity from Software.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#v0ltpwn-attacking-x86-processor-integrity-from-software) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#v0ltpwn-attacking-x86-processor-integrity-from-software)**
### 作者
* Zijo Kenjar, Technische Universität Darmstadt
* Tommaso Frassetto, Technische Universität Darmstadt
* David Gens, University of California, Irvine
* Michael Franz, University of California, Irvine
* Ahmad-Reza Sadeghi, Technische Universität Darmstadt
### 摘要
> 过去已经证明故障注入攻击是绕过基于硬件的安全措施（如加密散列、特权和访问权限执行以及可信任执行环境）的可靠方式。然而，传统的故障注入攻击需要物理存在，因此在许多实际环境中通常被认为是超出范围的。
> 
> 在本文中，我们展示了这个假设在x86上可能不再成立。我们提出了V0LTpwn，一种新颖的面向硬件但由软件控制的攻击，它可以影响现代x86处理器上几乎任何执行模式中的计算完整性。据我们所知，这是首次对x86平台的完整性进行从软件方面的攻击。我们攻击的关键思想是对物理核心进行降压以强制产生无法恢复的硬件故障。在V0LTpwn攻击下，CPU指令将继续执行，但结果是错误的且不会崩溃，从而可以被利用。与最近提出的利用易受攻击的推测执行的侧信道攻击不同，V0LTpwn不仅限于信息泄露，而且允许对执行产生影响，因此有效地破坏了现代x86平台的完整性目标。在我们的详细评估中，我们成功地从特权进程中对Intel SGX enclave发起了基于软件的攻击，以证明V0LTpwn攻击可以成功地改变在多个CPU版本中对enclave执行的计算结果。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/kenjar](https://www.usenix.org/conference/usenixsecurity20/presentation/kenjar)
- **PDF:** [https://www.usenix.org/system/files/sec20-kenjar.pdf](https://www.usenix.org/system/files/sec20-kenjar.pdf)
## DeepHammer: Depleting the Intelligence of Deep Neural Networks through Targeted Chain of Bit Flips.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#deephammer-depleting-the-intelligence-of-deep-neural-networks-through-targeted-chain-of-bit-flips) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#deephammer-depleting-the-intelligence-of-deep-neural-networks-through-targeted-chain-of-bit-flips)**
### 作者
* Fan Yao, University of Central Florida
* Adnan Siraj Rakin, Arizona State University
* Deliang Fan, Arizona State University
### 摘要
> 由于深度学习在许多安全敏感领域的普遍应用，机器学习的安全性越来越成为一个主要关注的问题。许多先前的研究已经显示出外部攻击（如恶意设计的输入）对DNN（深度神经网络）的完整性进行破坏的对抗性示例。然而，对于DNN模型的内部威胁（即硬件漏洞）的安全影响尚未得到很好的理解。在本文中，我们展示了第一个基于硬件的攻击——DeepHammer，它通过利用rowhammer漏洞，在模型权重中引入确定性的位翻转，以破坏DNN推理。DeepHammer在DNN模型中执行积极的位搜索，以确定在系统限制条件下最易翻转的脆弱位。为了在合理的时间内触发多个页面上的确定性位翻转，我们开发了一些新的系统级技术，包括快速部署受害页面、内存高效的rowhammer攻击和精确翻转目标位。DeepHammer可以故意降低受害DNN系统的推理准确性，使其仅仅与随机猜测一样好，从而完全消减了目标DNN系统的智能。我们系统地展示了我们对11种DNN架构和4个对应不同应用领域的数据集的真实系统进行的攻击。我们的评估结果表明，DeepHammer能够在运行时内几分钟成功干扰DNN推理行为。我们进一步讨论了来自算法和系统层面的几种缓解技术，以保护DNN免受此类攻击。我们的工作凸显了在未来的深度学习系统中加入安全机制以增强对基于硬件的确定性故障注入的鲁棒性的必要性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/yao](https://www.usenix.org/conference/usenixsecurity20/presentation/yao)
- **PDF:** [https://www.usenix.org/system/files/sec20-yao.pdf](https://www.usenix.org/system/files/sec20-yao.pdf)
## SpecFuzz: Bringing Spectre-type vulnerabilities to the surface.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#specfuzz-bringing-spectre-type-vulnerabilities-to-the-surface) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#specfuzz-bringing-spectre-type-vulnerabilities-to-the-surface)**
### 作者
* Oleksii Oleksenko, TU Dresden
* Bohdan Trach, TU Dresden
* Mark Silberstein, Technion
* Christof Fetzer, TU Dresden
### 摘要
> SpecFuzz是第一个能够进行具体执行漏洞（例如Spectre）的动态测试的工具。其关键是一种新颖的猜测暴露概念：程序被仪器化，以模拟软件中的具体执行，通过强制执行因错误预测而触发的代码路径，从而使具体内存访问对完整性检查器（例如AddressSanitizer）可见。结合传统的模糊测试技术，猜测暴露能够更精确地识别潜在漏洞，相比于最先进的静态分析工具。
> 
> 我们的原型用于检测Spectre V1漏洞成功地识别出所有已知的Spectre V1变种，并减少了评估应用程序中的缓解开销，通过提供足够的测试覆盖率，将仪器化分支数量减少了最多77%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/oleksenko](https://www.usenix.org/conference/usenixsecurity20/presentation/oleksenko)
- **PDF:** [https://www.usenix.org/system/files/sec20-oleksenko.pdf](https://www.usenix.org/system/files/sec20-oleksenko.pdf)
## Security Analysis of Unified Payments Interface and Payment Apps in India.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#security-analysis-of-unified-payments-interface-and-payment-apps-in-india) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#security-analysis-of-unified-payments-interface-and-payment-apps-in-india)**
### 作者
* Renuka Kumar, University of Michigan
* Sreesh Kishore; Hao Lu, University of Michigan
* Atul Prakash, University of Michigan
### 摘要
> 自2016年以来，在印度政府的大力推动下，基于智能手机的支付应用已成为主流，2018年通过这些应用的交易金额超过500亿美元。其中许多应用程序使用印度政府引入的一种共同基础架构，称为统一支付接口（UPI），但对支持货币转账的这一关键基础设施尚未进行安全分析。本文使用一种有原则的方法，通过对七个常用的UPI应用程序的设计进行逆向工程，对UPI协议进行了详细的安全分析。我们发现了UPI 1.0版本规范中以前未报告的多因素身份验证设计级缺陷，当与已安装的攻击者控制应用程序相结合时，可能导致重大攻击。在攻击的极端版本中，即使受害者从未使用过UPI应用程序，这些缺陷也可能导致他们的银行账户被关联和清空。这些潜在的攻击具有可伸缩性，可以远程执行。我们讨论了我们的方法论，并详细介绍了我们在逆向工程这个未发布的应用层协议中克服的挑战，包括所有UPI应用在印度都经历了严格的安全审查，并且设计成能抵御分析。此项工作导致了几个CVE，并且我们报告的一个关键攻击向量后来在UPI 2.0中得到了解决。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/kumar](https://www.usenix.org/conference/usenixsecurity20/presentation/kumar)
- **PDF:** [https://www.usenix.org/system/files/sec20-kumar.pdf](https://www.usenix.org/system/files/sec20-kumar.pdf)
## Cardpliance: PCI DSS Compliance of Android Applications.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#cardpliance-pci-dss-compliance-of-android-applications) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#cardpliance-pci-dss-compliance-of-android-applications)**
### 作者
* Samin Yaseer Mahmud, North Carolina State University
* Akhil Acharya, North Carolina State University
* Benjamin Andow, IBM T.J. Watson Research Center
* William Enck, North Carolina State University
* Bradley Reaves, North Carolina State University
### 摘要
> 智能手机及其应用已成为计算的主要方式，它们自然也成为金融交易技术的重要组成部分是理所当然的。然而，以往的研究往往忽视了要求用户输入信用卡号码的应用程序，在普遍的移动应用生态系统中经常报告安全和隐私问题。这类应用程序特别关注安全问题，并受到PCI DSS（Payment Card Industry Data Security Standard）的监管。本文中，我们设计了一个名为Cardpliance的工具，它将图形用户界面的语义与静态程序分析相结合，以满足PCI DSS的相关要求。我们使用Cardpliance来研究来自谷歌Play的358个热门应用程序，这些应用程序要求用户输入信用卡号码。总体而言，我们发现在这358个应用程序中，有1.67%不符合PCI DSS的要求，存在存储信用卡号码和卡片验证码不当的漏洞。这些发现对于普遍使用的Android应用程序的PCI DSS合规状态形成了一个积极的画面。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/mahmud](https://www.usenix.org/conference/usenixsecurity20/presentation/mahmud)
- **PDF:** [https://www.usenix.org/system/files/sec20-mahmud.pdf](https://www.usenix.org/system/files/sec20-mahmud.pdf)
## The Ballot is Busted Before the Blockchain: A Security Analysis of Voatz, the First Internet Voting Application Used in U.S. Federal Elections.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-ballot-is-busted-before-the-blockchain-a-security-analysis-of-voatz-the-first-internet-voting-application-used-in-u-s-federal-elections) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-ballot-is-busted-before-the-blockchain-a-security-analysis-of-voatz-the-first-internet-voting-application-used-in-u-s-federal-elections)**
### 作者
* Michael A. Specter, MIT
* James Koppel, MIT
* Daniel Weitzner, MIT
### 摘要
> 在2018年的中期选举中，西弗吉尼亚成为美国首个允许选民通过名为“Voatz”的专有应用程序在移动电话上投票的州。尽管没有关于Voatz安全模型的公共正式描述，但该公司声称通过使用经许可的区块链、生物识别技术、混合网络和用户设备上的硬件支持密钥存储模块来维护选举安全性和完整性。在这项工作中，我们首次对Voatz进行了公开的安全分析，该分析基于对其Android应用程序和系统中最少可用文档的逆向工程。我们对Voatz服务器进行了清井重新实现，并对从应用程序本身可见的选举过程进行了分析。
> 
> 我们发现Voatz存在漏洞，使不同类别的对手能够更改、停止或暴露用户的投票结果，其中包括一种侧信道攻击，即完全被动的网络对手有可能恢复用户的秘密选票。我们还发现，Voatz在关键应用功能中使用第三方服务存在一些隐私问题。我们的发现具体说明了互联网投票的普遍成见，以及透明对选举合法性的重要性。由于我们的工作成果，西弗吉尼亚州和华盛顿州的一县已经放弃了在2020年初选中使用Voatz的计划。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/specter](https://www.usenix.org/conference/usenixsecurity20/presentation/specter)
- **PDF:** [https://www.usenix.org/system/files/sec20-specter.pdf](https://www.usenix.org/system/files/sec20-specter.pdf)
## VoteAgain: A scalable coercion-resistant voting system.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#voteagain-a-scalable-coercion-resistant-voting-system) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#voteagain-a-scalable-coercion-resistant-voting-system)**
### 作者
* Wouter Lueks, EPFL
* Iñigo Querejeta-Azurmendi, Universidad Carlos III Madrid/ITEFI, CSIC
* Carmela Troncoso, EPFL
### 摘要
> 最强的投票系统威胁模型考虑到抵抗强制性：即保护选民免受强制者强迫修改其选票或弃权。现有的远程投票系统要么不具备此特性；要么需要昂贵的操作进行统计；要么让用户承担存储加密密钥材料和欺骗强制者的责任。我们提出了VoteAgain，一种可扩展的投票方案，它依赖于重新投票范式来提供抵抗强制性的能力。VoteAgain使用新颖的确定性选票填充机制，确保强制者无法看到选票是否已被替换。该机制确保统计过程以准线性时间进行，使VoteAgain成为第一个能处理数百万选民选举的重新投票方案。我们证明VoteAgain具有选票隐私、抵抗强制性和可验证性的特性；并通过其核心密码原语的原型实现来展示其可扩展性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/lueks](https://www.usenix.org/conference/usenixsecurity20/presentation/lueks)
- **PDF:** [https://www.usenix.org/system/files/sec20-lueks.pdf](https://www.usenix.org/system/files/sec20-lueks.pdf)
## Boxer: Preventing fraud by scanning credit cards.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#boxer-preventing-fraud-by-scanning-credit-cards) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#boxer-preventing-fraud-by-scanning-credit-cards)**
### 作者
* Zainul Abi Din, UC Davis
* Hari Venugopalan, UC Davis
* Jaime Park, Bouncer Technologies
* Andy Li, Segment
* Weisu Yin, UC Davis
* Haohui Mai, Hengmuxing Technologies
* Yong Jae Lee, UC Davis
* Steven Liu, Bouncer Technologies
* Samuel T. King, UC Davis and Bouncer Technologies
### 摘要
> 卡不在场呈卡欺诈对企业每年造成数十亿美元损失。在本文中，我们介绍了Boxer，这是一个移动SDK和服务器，它能够通过扫描卡片并验证其真实性，帮助应用程序对抗卡不在场欺诈。Boxer分析这些扫描得到的图像，寻找攻击的特征，同时在现代安全硬件之上引入了一种新的抽象，以提供互补保护。
> 
> 目前，已有323个应用程序集成了Boxer，并且其中数十个应用已经投入生产使用，包括一些大型、热门和国际应用。Boxer已经扫描了超过1000万张真实卡片。在我们对其中一个部署的Boxer进行评估中，我们发现10起真实攻击案例，这是我们基于硬件的新抽象所检测到的。此外，在相同的部署中，Boxer的卡片扫描在不引入任何欺诈的情况下，恢复了由应用程序封锁的89%的良好用户。在对Boxer的另一个评估中，我们对来自真实用户的图像运行图像分析模型，展示了两个模型的准确率分别为96%和100%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/din](https://www.usenix.org/conference/usenixsecurity20/presentation/din)
- **PDF:** [https://www.usenix.org/system/files/sec20-din.pdf](https://www.usenix.org/system/files/sec20-din.pdf)
## Fawkes: Protecting Privacy against Unauthorized Deep Learning Models.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fawkes-protecting-privacy-against-unauthorized-deep-learning-models) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fawkes-protecting-privacy-against-unauthorized-deep-learning-models)**
### 作者
* Shawn Shan, University of Chicago
* Emily Wenger, University of Chicago
* Jiayun Zhang, University of Chicago
* Huiying Li, University of Chicago
* Haitao Zheng, University of Chicago
* Ben Y. Zhao, University of Chicago
### 摘要
> 面对当今强大的人脸识别系统的泛滥，个人隐私面临着真实的威胁。正如Clearview.ai所展示的那样，任何人都可以在互联网上搜罗数据，并训练高度精确的人脸识别模型，而被识别的个人并不知情。我们需要工具来保护我们自己免受未经授权的人脸识别系统的潜在滥用。然而，目前尚不存在实用或有效的解决方案。
> 
> 在本文中，我们提出了Fawkes，一个能够帮助个人对抗未经授权的人脸识别模型的系统。Fawkes通过帮助用户在发布照片之前为自己的照片添加难以察觉的像素级变化（我们称之为“隐形遮罩”）来实现这一目标。当用于训练人脸识别模型时，这些“隐形遮罩”图像会产生功能性模型，这些模型会一致性地导致用户的正常图像被错误识别。我们通过实验证明，无论追踪者如何训练他们的模型，Fawkes都能提供95%以上的用户识别保护。即使是干净、无遮罩的图像被泄露给追踪者并用于训练，Fawkes仍然可以保持80%以上的保护成功率。我们在对抗当今最先进的人脸识别服务的实验中实现了100%的成功率。最后，我们展示了Fawkes对各种试图检测或破坏图像遮罩的对抗手段具有鲁棒性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/shan](https://www.usenix.org/conference/usenixsecurity20/presentation/shan)
- **PDF:** [https://www.usenix.org/system/files/sec20-shan.pdf](https://www.usenix.org/system/files/sec20-shan.pdf)
## Stolen Memories: Leveraging Model Memorization for Calibrated White-Box Membership Inference.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#stolen-memories-leveraging-model-memorization-for-calibrated-white-box-membership-inference) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#stolen-memories-leveraging-model-memorization-for-calibrated-white-box-membership-inference)**
### 作者
* Klas Leino, Carnegie Mellon University
* Matt Fredrikson, Carnegie Mellon University
### 摘要
> 成员推理（MI）攻击利用了机器学习算法有时透露其训练数据信息的事实，通过学习的模型。在这项工作中，我们研究了白盒设置中的成员推理，以利用模型的内部，这在先前的工作中尚未有效利用。借助对深度神经网络过拟合发生的新认识，我们展示了模型对特征的特殊使用方法可以为白盒攻击者提供成员身份的证据，即使模型的黑盒行为似乎具有很好的泛化性能，并证明该攻击优于先前的黑盒方法。考虑到有效攻击应该能够提供自信的正面推理，我们发现以前的攻击往往不能为自信地推断成员身份提供有意义的依据，而我们的攻击能够有效地调整以实现高精度。最后，我们检查了流行的对抗MI攻击的防御方法，发现（1）较小的泛化误差不足以防止对真实模型的攻击，(2)虽然小的ϵ-差分隐私可以减少攻击的效果，但这往往带来了模型准确性的显著损失；对于在实践中有时使用的较大的ϵ（例如，ϵ=16），攻击可以达到与未受保护模型几乎相同的准确性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/leino](https://www.usenix.org/conference/usenixsecurity20/presentation/leino)
- **PDF:** [https://www.usenix.org/system/files/sec20-leino.pdf](https://www.usenix.org/system/files/sec20-leino.pdf)
## Local Model Poisoning Attacks to Byzantine-Robust Federated Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#local-model-poisoning-attacks-to-byzantine-robust-federated-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#local-model-poisoning-attacks-to-byzantine-robust-federated-learning)**
### 作者
* Minghong Fang, Iowa State University
* Xiaoyu Cao, Duke University
* Jinyuan Jia, Duke University
* Neil Gong, Duke University
### 摘要
> 在联邦学习中，多个客户设备共同学习一个机器学习模型：每个客户设备根据本地训练数据集维护一个本地模型，而主设备通过聚合客户设备的本地模型来维护一个全局模型。机器学习社区最近提出了几种声称能够抵御特定客户设备的拜占庭失败（如系统失败、对抗性篡改）的联邦学习方法。在本研究中，我们对联邦学习中的本地模型污染攻击进行了首次系统的研究。我们假设攻击者已经入侵了一些客户设备，并在学习过程中操纵了被入侵客户设备的本地模型参数，以使全局模型具有较高的测试错误率。我们将我们的攻击问题形式化为优化问题，并将我们的攻击应用于四种最近的抵御拜占庭失败的联邦学习方法。我们对四个真实数据集的实证结果表明，我们的攻击可以显著增加联邦学习方法所学习模型的错误率，而这些方法声称能够抵御特定客户设备的拜占庭失败。我们推广了两种数据污染攻击的防御方法，以防范我们的本地模型污染攻击。我们的评估结果表明，在某些情况下，一个防御方法可以有效地防御我们的攻击，但在其他情况下，这些防御方法的效果不够显著，强调了对抵御我们的本地模型污染攻击需要新的防御方法的需求。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/fang](https://www.usenix.org/conference/usenixsecurity20/presentation/fang)
- **PDF:** [https://www.usenix.org/system/files/sec20summer_fang_prepub.pdf](https://www.usenix.org/system/files/sec20summer_fang_prepub.pdf)
## Justinian's GAAvernor: Robust Distributed Learning with Gradient Aggregation Agent.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#justinians-gaavernor-robust-distributed-learning-with-gradient-aggregation-agent) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#justinians-gaavernor-robust-distributed-learning-with-gradient-aggregation-agent)**
### 作者
* Xudong Pan, Fudan University
* Mi Zhang, Fudan University
* Duocai Wu, Fudan University
* Qifan Xiao, Fudan University
* Shouling Ji, Zhejiang University/Ant Financial
* Min Yang, Fudan University
### 摘要
> 分布式学习系统面对拜占庭攻击的隐秘弱点近期进行了研究，幸运的是，已知的一些防御方法在少数工作者受到敌对控制时显示出缓解拜占庭攻击的能力。然而，我们的社区在处理恶意工作者比例达到50%或更高的情况下仍然知之甚少。基于我们对这一开放挑战的初步研究，我们发现在这种更具威胁性的情况下，如果更好地利用学习过程中的辅助信息，可以采取更多措施以恢复对拜占庭容错性的支持。
> 
> 本文中，我们提出了贾斯汀尼安的GAAvernor（GAA），这是一个通过强化学习技术学习如何对抗拜占庭攻击的梯度聚合代理。基本上，GAA依赖于利用与工作者的历史交互作为经验和一个准验证集，这是一个包含少于10个来自相似数据领域的数据样本的小数据集，用于生成策略学习的奖励信号。作为现有防御方法的补充，我们提出的方法不对预期的恶意工作者数量进行限制，并且在更具挑战性的情况下被证明是稳健的。
> 
> 通过对四个基准系统进行广泛评估，并在各种敌对设置下进行评估，我们提出的防御方法显示出理想的稳健性，就像系统没有受到攻击一样，甚至在某些情况下，即使90%的拜占庭工作者由对手控制。与最先进的防御方法相比，我们的方法同时显示出具有相似水平的时间效率。此外，GAA提供了高度可解释的工作者行为副产品，用于进一步缓解使用，例如拜占庭工作者检测和行为模式分析。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/pan](https://www.usenix.org/conference/usenixsecurity20/presentation/pan)
- **PDF:** [https://www.usenix.org/system/files/sec20-pan.pdf](https://www.usenix.org/system/files/sec20-pan.pdf)
## Interpretable Deep Learning under Fire.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#interpretable-deep-learning-under-fire) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#interpretable-deep-learning-under-fire)**
### 作者
* Xinyang Zhang, Pennsylvania State University
* Ningfei Wang, University of California Irvine
* Hua Shen, Pennsylvania State University
* Shouling Ji, Zhejiang University and Alibaba-ZJU Joint Institute of Frontier Technologies
* Xiapu Luo, Hong Kong Polytechnic University
* Ting Wang, Pennsylvania State University
### 摘要
> 提供深度神经网络（DNN）模型的解释对于它们在安全敏感领域中的使用至关重要。已经提出了大量的解释模型来帮助用户理解DNN的内部工作原理：DNN如何对给定的输入做出特定的决策？提高解释性被认为可以通过将人类参与到决策过程中来提供安全感。然而，由于它的数据驱动性质，解释性本身也可能容易受到恶意操纵，目前对此了解甚少。
> 
> 我们通过对可解释性深度学习系统（IDLSes）的安全性进行了首次系统研究来填补这一空白。我们展示了现有的可解释性深度学习系统（IDLSes）存在高度的易受攻击性。具体而言，我们提出了ADV2，一种新型攻击方式，它不仅能够产生误导目标DNN的对抗性输入，还能欺骗其关联的解释模型。通过对基准数据集和安全关键应用（例如皮肤癌诊断）上四种主要类型的IDLSes进行实证评估，我们证明了使用ADV2时攻击者能够任意指定输入的预测和解释。此外，通过分析和实证证据，我们确定了预测-解释差异是这种易受攻击性的根本原因之一 - DNN及其解释模型往往不一致，从而可能同时利用两个模型。最后，我们探讨了针对ADV2的潜在对策，包括利用其低可迁移性并将其纳入对抗性训练框架中。我们的研究结果为设计和运营更安全和信息丰富的IDLSes提供了指导，同时也指引出了几个有前景的研究方向。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zhang-xinyang](https://www.usenix.org/conference/usenixsecurity20/presentation/zhang-xinyang)
- **PDF:** [https://www.usenix.org/system/files/sec20-zhang-xinyang.pdf](https://www.usenix.org/system/files/sec20-zhang-xinyang.pdf)
## Donky: Domain Keys - Efficient In-Process Isolation for RISC-V and x86.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#donky-domain-keys-efficient-in-process-isolation-for-risc-v-and-x86) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#donky-domain-keys-efficient-in-process-isolation-for-risc-v-and-x86)**
### 作者
* David Schrammel, Graz University of Technology
* Samuel Weiser, Graz University of Technology
* Stefan Steinegger, Graz University of Technology
* Martin Schwarzl, Graz University of Technology
* Michael Schwarz, Graz University of Technology
* Stefan Mangard, Graz University of Technology
* Daniel Gruss, Graz University of Technology
### 摘要
> 高效且安全的进程内隔离需求日益增长，这在转向JavaScript和最近对内存保护键的回归中得到了证明。然而，现有的先进系统不提供强大的安全性，或者难以处理频繁的域交叉，并且经常需要侵入性的内核修改。我们提出了Donky，一种基于动态内存保护域的强大进程内隔离的高效硬件-软件协同设计。我们设计的两个组成部分是一个安全软件框架和一个非侵入性的硬件扩展。我们完全在用户空间中进行域切换，从而最大程度地减少切换开销和内核复杂性。我们展示了Donky在三个现实用例中的多用途性，包括安全的V8沙盒、软件保险库和不可信任的第三方库。我们在一台RISC-V Ariane CPU上提供了开源实现，并在x86上提供了基于Intel-MPK的仿真模式。我们评估了我们在FPGA上合成的RISC-V实现的安全性和性能。我们还评估了x86上的性能，并展示了为什么我们的新设计比Intel MPK更安全。Donky不会妨碍域内计算的运行时间。跨域切换的速度比常规进程上下文切换快16-116倍。对mbedTLS加密操作的完全保护仅增加4％的开销。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/schrammel](https://www.usenix.org/conference/usenixsecurity20/presentation/schrammel)
- **PDF:** [https://www.usenix.org/system/files/sec20-schrammel.pdf](https://www.usenix.org/system/files/sec20-schrammel.pdf)
## (Mostly) Exitless VM Protection from Untrusted Hypervisor through Disaggregated Nested Virtualization.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#mostly-exitless-vm-protection-from-untrusted-hypervisor-through-disaggregated-nested-virtualization) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#mostly-exitless-vm-protection-from-untrusted-hypervisor-through-disaggregated-nested-virtualization)**
### 作者
* Zeyu Mi, Shanghai Key Laboratory for Scalable Computing Systems, School of Software, Shanghai Jiao Tong University
* Dingji Li, Shanghai Key Laboratory for Scalable Computing Systems, School of Software, Shanghai Jiao Tong University
* Haibo Chen, Shanghai Key Laboratory for Scalable Computing Systems, School of Software, Shanghai Jiao Tong University
* Binyu Zang, Shanghai Key Laboratory for Scalable Computing Systems, School of Software, Shanghai Jiao Tong University
* Haibing Guan, Shanghai Key Laboratory for Scalable Computing Systems, School of Software, Shanghai Jiao Tong University
### 摘要
> 今天的云租户面临着严重的安全威胁，例如被破坏的虚拟化监控程序，这迫使一个强敌对模型，其中虚拟化监控程序应该被排除在可信计算基中。以往保护宿主机虚拟机的方法或者保护不足，或者由于频繁的虚拟机退出（特别是对于 I/O 操作）而导致性能不佳。本文提出了 CloudVisor-D，一种高效的嵌套虚拟化监控程序设计，既具备强保护性又具备高性能。CloudVisor-D 的核心思想是通过将主要保护逻辑分离到每个宿主机虚拟机旁边的受保护 Guardian-VM 中，从而解构嵌套虚拟化监控程序。Guardian-VM 受到嵌套虚拟化监控程序的安全隔离和保护，并为大多数特权操作（如超级调用、EPT 违规和来自宿主机虚拟机的 I/O 操作）提供安全服务。通过利用最近的硬件特性，宿客虚拟机中的大多数特权操作不需要虚拟机退出到嵌套虚拟化监控程序，这是以前设计中性能减慢的主要原因。我们已经在一台商用机器上实现了 CloudVisor-D，并使用了这些最近的硬件特性。实验评估结果显示，即使在 I/O 密集型基准测试中，CloudVisor-D 也几乎不会产生性能开销，并且在某些情况下由于虚拟机退出数量的减少而表现出色。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/mi](https://www.usenix.org/conference/usenixsecurity20/presentation/mi)
- **PDF:** [https://www.usenix.org/system/files/sec20-mi.pdf](https://www.usenix.org/system/files/sec20-mi.pdf)
## DECAF: Automatic, Adaptive De-bloating and Hardening of COTS Firmware.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#decaf-automatic-adaptive-de-bloating-and-hardening-of-cots-firmware) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#decaf-automatic-adaptive-de-bloating-and-hardening-of-cots-firmware)**
### 作者
* Jake Christensen, Private Machines
* Ionut Mugurel Anghel, Univ. Politehnica Bucharest
* Rob Taglang, Private Machines
* Mihai Chiroiu, Univ. Politehnica Bucharest
* Radu Sion, Private Machines
### 摘要
> 一旦服务器固件被入侵，就可以暗中并永久地控制机器和其上运行的任何堆栈，除非进行硬件级别的干预，否则无法恢复。更糟糕的是，现代固件由于长期的固件供应链在市场和成本优化的同时，包含了数百万行不必要的代码和上百个不必要的模块。因此，现成的主板包含了庞大且不必要复杂的封闭源漏洞表面，可以完全并不可逆地破坏系统安全。
> 
> 在这项研究中，我们通过显著地自动减少漏洞表面来解决这个问题。DECAF 是一个用于自动修剪广泛类别商用 UEFI 固件的可扩展平台。DECAF 智能地对 UEFI 固件进行动态迭代手术，最大限度地删除代码，而对堆栈中更高层次（操作系统、应用程序）的功能和性能没有负面影响。
> 
> DECAF 已成功修剪掉了领先的服务器级主板中超过 70% 的不必要、冗余、可达的固件，而对上层没有任何影响，并提高了系统性能和启动时间。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/christensen](https://www.usenix.org/conference/usenixsecurity20/presentation/christensen)
- **PDF:** [https://www.usenix.org/system/files/sec20-christensen.pdf](https://www.usenix.org/system/files/sec20-christensen.pdf)
## McTiny: Fast High-Confidence Post-Quantum Key Erasure for Tiny Network Servers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#mctiny-fast-high-confidence-post-quantum-key-erasure-for-tiny-network-servers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#mctiny-fast-high-confidence-post-quantum-key-erasure-for-tiny-network-servers)**
### 作者
* Daniel J. Bernstein, University of Illinois at Chicago, Ruhr University Bochum
* Tanja Lange, Eindhoven University of Technology
### 摘要
> 最近的研究结果显示，一些后量子密码系统的加密和解密性能与快速椭圆曲线密码学（ECC）相当甚至更好。然而，这种性能指标只考虑了CPU时间，忽略了带宽和存储。高可信的后量子加密系统比ECC具有更大的密钥。例如，由PQCRYPTO项目推荐的基于代码的密码系统使用1MB的公钥。
> 
> 为了提供“前向保密”功能，快速密钥抹除需要不断传输新的公钥。服务器要么需要不断生成、存储和传输大型密钥，要么需要从客户端接收、存储和使用大型密钥。这对于网络带宽来说可能不是问题，但对于小型网络服务器的存储和计算时间来说是一个问题。所有直接的方法都容易遭受拒绝服务攻击。
> 
> 本文描述了一种适用于当今网络和小型服务器的协议，在该协议中，客户端将基于代码的一次性公钥传输给服务器。服务器从未存储完整的客户端公钥，而是根据客户端提供的部分信息进行操作，无需维护任何每个客户端状态。中间结果以加密的cookie形式在客户端端存储，并最终由服务器组合以获得密文。服务器端的要求非常小：存储一个长期私钥，该私钥比公钥小得多，以及几个小的对称cookie密钥，这些密钥定期更新并在使用后抹除。该协议高度并行，只需要几轮往返，并且涉及的总带宽不比单个公钥大。双方发送的总数据包数为971，每个数据包适配在一个少于1280字节的IPv6数据包中。
> 
> 该协议利用了基于代码的密码学的加密结构，并受益于基于代码的密码学中的小密文。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/bernstein](https://www.usenix.org/conference/usenixsecurity20/presentation/bernstein)
- **PDF:** [https://www.usenix.org/system/files/sec20summer_bernstein_prepub.pdf](https://www.usenix.org/system/files/sec20summer_bernstein_prepub.pdf)
## Temporal System Call Specialization for Attack Surface Reduction.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#temporal-system-call-specialization-for-attack-surface-reduction) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#temporal-system-call-specialization-for-attack-surface-reduction)**
### 作者
* Seyedhamed Ghavamnia, Stony Brook University
* Tapti Palit, Stony Brook University
* Shachee Mishra, Stony Brook University
* Michalis Polychronakis, Stony Brook University
### 摘要
> 通过删除不必要的应用程序功能和代码来减少攻击面，是一种既能提高安全性又不会增加额外负担的有希望的技术。最近的软件去充能技术在提取应用程序代码要求时考虑了应用程序的整个生命周期，并相应地减少了攻击面。
> 
> 在本文中，我们提出了一种称为时间专用化的新方法，根据进程的执行阶段限制可用的系统调用集合。我们的方法针对服务器应用程序进行定制，这些应用程序具有不同的初始化和服务阶段以及不同的系统调用要求。我们提出了用于提高每个执行阶段应用程序调用图提取准确性的新颖静态分析技术，然后使用这些技术来确定每个阶段中使用的系统调用。我们表明，服务器的需求在其生命周期内发生变化，许多危险的系统调用（例如execve）可以在初始化阶段完成后禁用。我们在LLVM编译器的基础上实现了时间专用化的原型，并使用六个热门服务器应用程序评估了其有效性。我们的结果表明，与现有的库专用化方法相比，它能够禁用更多（增加了51%）的安全关键系统调用，同时还能中和13个导致特权升级的Linux内核漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/ghavamnia](https://www.usenix.org/conference/usenixsecurity20/presentation/ghavamnia)
- **PDF:** [https://www.usenix.org/system/files/sec20-ghavamnia.pdf](https://www.usenix.org/system/files/sec20-ghavamnia.pdf)
## Big Numbers - Big Troubles: Systematically Analyzing Nonce Leakage in (EC)DSA Implementations.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#big-numbers-big-troubles-systematically-analyzing-nonce-leakage-in-ec-dsa-implementations) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#big-numbers-big-troubles-systematically-analyzing-nonce-leakage-in-ec-dsa-implementations)**
### 作者
* Samuel Weiser, Graz University of Technology
* David Schrammel, Graz University of Technology
* Lukas Bodner, Graz University of Technology
* Raphael Spreitzer, SGS Digital Trust Services
### 摘要
> 侧信道攻击利用（EC）DSA的nonce泄漏很容易导致完全密钥恢复。尽管（EC）DSA实现已经通过恒定时间范式防止了侧信道泄漏，但攻击和修补的持续进行已成为一种博弈。特别是当前的代码审查容易忽略在调用堆栈中隐藏的不太明显的侧信道。为了解决这个问题，需要对nonce泄漏进行系统研究。我们展示了一种对密码实现中nonce泄漏进行系统分析的方法。特别是，我们扩展了DATA，一个开源的侧信道分析框架，以检测nonce泄漏。我们的分析确定了多个未知的nonce泄漏漏洞，涉及到所有涉及nonce的重要计算步骤。我们发现了在OpenSSL和LibreSSL中的Bignumber实现中固有的问题，会破坏（EC）DSA实现所宣称的恒定时间保证，如果密钥接近一个字边界。我们发现，在OpenSSL和BoringSSL的恒定时间标量乘法中，令人惊讶地发现了一个微小但有表现力的泄漏。此外，在报告和修补过程中，我们还发现了新引入的泄漏，并借助我们的工具支持，从而防止了另一轮攻击和修补循环。我们开源了我们的工具，并开发了一个直观的图形用户界面。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/weiser](https://www.usenix.org/conference/usenixsecurity20/presentation/weiser)
- **PDF:** [https://www.usenix.org/system/files/sec20-weiser.pdf](https://www.usenix.org/system/files/sec20-weiser.pdf)
## Estonian Electronic Identity Card: Security Flaws in Key Management.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#estonian-electronic-identity-card-security-flaws-in-key-management) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#estonian-electronic-identity-card-security-flaws-in-key-management)**
### 作者
* Arnis Parsovs, Software Technology and Applications Competence Center and University of Tartu
### 摘要
> 爱沙尼亚电子身份证（ID卡）被认为是世界上最成功的基于智能卡的国家身份证系统之一。存储在卡上的公钥密码学和私钥使爱沙尼亚ID卡持有者能够访问电子服务，提供具有法律约束力的数字签名，甚至在国家选举中进行i投票。
> 
> 在本文中，我们描述了在ID卡制造过程中发现的几个安全漏洞。通过分析从公开ID卡证书库中收集的公钥证书，我们发现了这些漏洞。特别是，我们发现在某些情况下，与安全要求相反，ID卡制造商在芯片外生成了私钥。在几个案例中，相同私钥的副本被导入到不同持卡人的ID卡中，使他们可以冒充对方。此外，由于制造过程中的一个独立缺陷，证书中包含了损坏的RSA公钥模数，在一个案例中导致了相应私钥的完全恢复。本文描述了这些发现的发现过程以及当局采取的事件响应。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/parsovs](https://www.usenix.org/conference/usenixsecurity20/presentation/parsovs)
- **PDF:** [https://www.usenix.org/system/files/sec20-parsovs.pdf](https://www.usenix.org/system/files/sec20-parsovs.pdf)
## The Unpatchable Silicon: A Full Break of the Bitstream Encryption of Xilinx 7-Series FPGAs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-unpatchable-silicon-a-full-break-of-the-bitstream-encryption-of-xilinx-7-series-fpgas) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-unpatchable-silicon-a-full-break-of-the-bitstream-encryption-of-xilinx-7-series-fpgas)**
### 作者
* Maik Ender, Horst Goertz Institute for IT Security, Ruhr University Bochum, Germany
* Amir Moradi, Horst Goertz Institute for IT Security, Ruhr University Bochum, Germany
* Christof Paar, Max Planck Institute for Cyber Security and Privacy and Horst Goertz Institute for IT Security, Ruhr University Bochum, Germany
### 摘要
> FPGAs安全性是一个关键的话题，因为如果硬件中存在漏洞，并且它们用于安全设计中，就可能会产生严重后果。由于FPGA设计是以比特流的形式进行编码的，保护比特流的安全性至关重要。对手有很多动机来恢复和操纵比特流，包括设计克隆，知识产权盗窃，设计操纵或设计入侵（例如硬件木马）。考虑到FPGA通常是网络物理系统的一部分，例如航空、医疗或工业设备，这甚至可能导致人身伤害。因此，供应商已经引入了比特流加密技术，提供真实性和机密性。尽管先前已经提出了攻击比特流加密的攻击方法，例如侧信道分析和探测，但这些攻击需要先进设备和相当的技术专长。
> 
> 在本论文中，我们介绍了一种针对Xilinx 7系列（和Virtex-6）比特流加密的新型低成本攻击方法，可以导致真实性和机密性的完全丧失。我们利用了一个设计缺陷，会分段泄露解密的比特流。在攻击中，FPGA被用作解密预言机，只需要访问配置接口。这种攻击不需要任何先进的工具，并且取决于目标系统，可能可以远程启动。除了攻击外，我们还讨论了几种对策方法。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/ender](https://www.usenix.org/conference/usenixsecurity20/presentation/ender)
- **PDF:** [https://www.usenix.org/system/files/sec20-ender.pdf](https://www.usenix.org/system/files/sec20-ender.pdf)
## Automating the Development of Chosen Ciphertext Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#automating-the-development-of-chosen-ciphertext-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#automating-the-development-of-chosen-ciphertext-attacks)**
### 作者
* Gabrielle Beck, Johns Hopkins University
* Maximilian Zinkus, Johns Hopkins University
* Matthew Green, Johns Hopkins University
### 摘要
> 在本研究中，我们探究了自动化开发对包含易受格式预言机攻击的系统的自适应选择密文攻击的问题。与以往简单自动执行已知攻击的尝试不同，我们考虑了一个更具挑战性的问题：仅通过可机器读取的明文验证函数描述以及加密方案的易塑性特征来编写一个新的攻击策略。我们提出了一套新的算法，利用SAT和SMT求解器对系统设计进行深入推理，从而生成能够完全解密受保护消息的自动化攻击策略。我们的算法的开发需要我们改进各种研究领域的技术，并探索和开发新技术。我们使用现有的理论求解器实现了我们的算法。结果是一个名为Delphinium的实用工具，可对真实世界和虚构的格式预言机进行成功攻击。据我们所知，这是第一个自动推导出如此复杂的选择密文攻击的研究工作。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/beck](https://www.usenix.org/conference/usenixsecurity20/presentation/beck)
- **PDF:** [https://www.usenix.org/system/files/sec20-beck_0.pdf](https://www.usenix.org/system/files/sec20-beck_0.pdf)
## SHA-1 is a Shambles: First Chosen-Prefix Collision on SHA-1 and Application to the PGP Web of Trust.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#sha-1-is-a-shambles-first-chosen-prefix-collision-on-sha-1-and-application-to-the-pgp-web-of-trust) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#sha-1-is-a-shambles-first-chosen-prefix-collision-on-sha-1-and-application-to-the-pgp-web-of-trust)**
### 作者
* Gaëtan Leurent, Inria, France
* Thomas Peyrin, Nanyang Technological University, Singapore
### 摘要
> SHA-1哈希函数于1995年设计，已在过去的20年中被广泛使用。理论上的碰撞攻击首次在2004年[WYY05]提出，但由于其复杂度较高，直到2017年才在实践中得以实现，使用了一个大型GPU集群[SBK + 17]。最近，对SHA-1提出了一种几乎实际可行的选择前缀碰撞攻击[LP19]。这种更强大的攻击允许构建具有两个任意前缀的碰撞消息，对于实际协议来说更具威胁。在本文中，我们报告了对此攻击的首次实际实现，并对其对实际安全性的影响进行了评估，以及对PGP/GnuPG的冒充攻击。我们成功地显著降低了对SHA-1的碰撞攻击的复杂性：在一台Nvidia GTX 970上，现在可以计算具有相同前缀的碰撞消息，其复杂性（以此GPU上SHA-1等效值表示）为2^61.2而不是2^64.7，并且可以计算出具有复杂度为2^63.4而不是2^67.1的选择前缀碰撞。使用廉价GPU，这相当于碰撞成本为11,000美元，选择前缀碰撞成本为45,000美元，这对于学术研究人员来说是可行的。我们的实际攻击需要使用900个Nvidia GTX 1060 GPU进行两个月的计算。因此，自2009年以来对MD5实用的相同攻击现在也可对SHA-1实用。特别是，选择前缀碰撞可以破坏签名方案和安全通道协议（TLS，SSH）中的握手安全性，如果生成得非常快。我们强烈建议尽快从此类应用程序中移除SHA-1。我们通过创建一对具有不同标识但具有碰撞SHA-1证书的PGP/GnuPG密钥来说明密码分析的例子。因此，第一个密钥的SHA-1证书可以转移到第二个密钥，从而进行冒充攻击。这证明了SHA-1签名在实践中几乎没有安全性。GnuPG的传统分支仍然默认使用SHA-1进行身份认证，但在通知作者后，现代分支现在拒绝SHA-1签名（该问题被跟踪为CVE-2019-14855）。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/leurent](https://www.usenix.org/conference/usenixsecurity20/presentation/leurent)
- **PDF:** [https://www.usenix.org/system/files/sec20-leurent.pdf](https://www.usenix.org/system/files/sec20-leurent.pdf)
## A Spectral Analysis of Noise: A Comprehensive, Automated, Formal Analysis of Diffie-Hellman Protocols.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-spectral-analysis-of-noise-a-comprehensive-automated-formal-analysis-of-diffie-hellman-protocols) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#a-spectral-analysis-of-noise-a-comprehensive-automated-formal-analysis-of-diffie-hellman-protocols)**
### 作者
* Guillaume Girol, CEA, List, Université Paris-Saclay, France
* Lucca Hirschi, Inria & LORIA, France
* Ralf Sasse, Department of Computer Science, ETH Zurich
* Dennis Jackson, University of Oxford, United Kingdom
* Cas Cremers, CISPA Helmholtz Center for Information Security
* David Basin, Department of Computer Science, ETH Zurich
### 摘要
> 噪声规范描述了如何系统地构建一系列基于Diffie-Hellman的密钥交换协议，包括WhatsApp、Lightning和WireGuard使用的安全传输协议。由于规范仅提供非正式的安全性要求，早期的研究工作已经探讨了在噪声框架中协议可能享有的形式安全性属性，但仍有许多重要问题尚未解决。
> 
> 在本研究中，我们提供了迄今为止最全面、系统化的噪声框架分析。我们从第一原理出发，使用自动化分析工具计算了协议在哪种威胁模型下是安全的最强条件，从而实现了协议之间的形式化比较。我们的结果使我们能够客观且自动地将噪声规范中提到的每个非正式安全级别与一项形式安全性要求关联起来。
> 
> 我们还提供了对以前描述为具有类似安全属性的噪声协议进行细致分离的方法，揭示出一些其他噪声协议存在的子类，它们提供了更严格的安全性保证。我们的分析还揭示了噪声规范中缺少的假设和一些令人惊讶的结果，例如，在某些情况下，更高的安全级别会导致更差的安全性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/girol](https://www.usenix.org/conference/usenixsecurity20/presentation/girol)
- **PDF:** [https://www.usenix.org/system/files/sec20-girol_0.pdf](https://www.usenix.org/system/files/sec20-girol_0.pdf)
## An Observational Investigation of Reverse Engineers' Processes.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#an-observational-investigation-of-reverse-engineers-processes) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#an-observational-investigation-of-reverse-engineers-processes)**
### 作者
* Daniel Votipka, University of Maryland
* Seth Rabin, University of Maryland
* Kristopher Micinski, Syracuse University
* Jeffrey S. Foster, Tufts University
* Michelle L. Mazurek, University of Maryland
### 摘要
> 逆向工程是软件安全任务中不可或缺的复杂过程，如漏洞发现和恶意软件分析。大量的研究和工程努力已经投入到开发支持逆向工程师的工具上。然而，很少有研究关注逆向工程师在分析程序时的思维方式，这使得工具开发者只能根据直觉做出接口设计决策。
> 
> 本文首次迈出了更好地理解逆向工程师过程的一步，旨在为改进逆向工程工具的交互设计提供见解。我们通过半结构化的观察性面谈研究逆向工程师（N=16）的方式，展示了研究结果。每次观察都调查了逆向工程师在探测程序时提出的问题、如何回答这些问题以及在整个逆向工程过程中做出的决策。通过面谈回答，我们总结了一个逆向工程过程的模型，分为概览、子组件扫描和有针对性实验三个阶段。每个分析阶段的结果会为下一个阶段提供信息，使得逆向工程师的思维表达更加具体。我们发现，在前两个阶段中，逆向工程师通常使用静态方法，但在最后一个阶段使用动态方法，而经验在每个阶段中的作用大小会有所变化。基于这些结果，我们提供了五条逆向工程工具的交互设计准则。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/votipka-observational](https://www.usenix.org/conference/usenixsecurity20/presentation/votipka-observational)
- **PDF:** [https://www.usenix.org/system/files/sec20-votipka-observational.pdf](https://www.usenix.org/system/files/sec20-votipka-observational.pdf)
## The Tools and Tactics Used in Intimate Partner Surveillance: An Analysis of Online Infidelity Forums.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-tools-and-tactics-used-in-intimate-partner-surveillance-an-analysis-of-online-infidelity-forums) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-tools-and-tactics-used-in-intimate-partner-surveillance-an-analysis-of-online-infidelity-forums)**
### 作者
* Emily Tseng, Cornell University
* Rosanna Bellini, Open Lab, Newcastle University
* Nora McDonald, University of Maryland, Baltimore County
* Matan Danos, Weizmann Institute of Science
* Rachel Greenstadt, New York University
* Damon McCoy, New York University
* Nicola Dell, Cornell Tech
* Thomas Ristenpart, Cornell Tech
### 摘要
> 滥用者越来越多地使用间谍应用、账户被盗和社交工程来监视他们的亲密伴侣，造成严重伤害，可能导致暴力行为。这种被称为“亲密伴侣监视”（IPS）的隐私侵犯问题非常具有挑战性，因为目标与攻击者之间存在着身体接触和信任。虽然以前的研究已经从幸存者的角度探讨了IPS问题，但我们在在线论坛中首次进行了IPS策略和技巧的测量研究。在犯罪网络、儿童虐待和人口贩卖等领域，研究肇事者的在线行为已经带来了更好的威胁情报和对抗攻击的技术。我们的目标是在IPS背景下提供类似的见解。我们确定了五个包含对监控手机和其他监视亲密伴侣手段的讨论的在线论坛，其中三个涉及调查感情不忠。我们对这些论坛进行了定性和定量混合方法的分析，揭示了攻击者用于进行监视的工具和策略。通过对论坛内容的定性分析，我们提出了攻击者使用和推荐的IPS策略的分类法，并总结了对希望遏制IPS蔓延的技术人员的教训。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/tseng](https://www.usenix.org/conference/usenixsecurity20/presentation/tseng)
- **PDF:** [https://www.usenix.org/system/files/sec20-tseng.pdf](https://www.usenix.org/system/files/sec20-tseng.pdf)
## DatashareNetwork: A Decentralized Privacy-Preserving Search Engine for Investigative Journalists.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#datasharenetwork-a-decentralized-privacy-preserving-search-engine-for-investigative-journalists) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#datasharenetwork-a-decentralized-privacy-preserving-search-engine-for-investigative-journalists)**
### 作者
* Kasra Edalatnejad, EPFL
* Wouter Lueks, EPFL
* Julien Pierre Martin; Soline Ledésert, ICIJ
* Anne L'Hôte, ICIJ
* Bruno Thomas, ICIJ
* Laurent Girod, EPFL
* Carmela Troncoso, EPFL
### 摘要
> 调查记者在调查中收集了大量的数字文件。这些文件可以极大地有助于其他记者的工作。然而，许多文件包含敏感信息。因此，拥有此类文件可能会危及记者、他们的报道和消息来源的安全。因此，许多文件仅用于单个本地调查。我们提出了DatashareNetwork，这是一个去中心化且保护隐私的搜索系统，使全球记者能够通过一个专用的节点网络找到文件。DatashareNetwork结合了众所周知的匿名认证机制和匿名通信基元、一种新颖的异步消息系统，以及一种新颖的多集合私有集合交集协议（MS-PSI），形成一个去中心化的点对点私有文档搜索引擎。通过原型实现，我们证明了DatashareNetwork的安全性，并且可以扩展到数千个用户和数百万个文件。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/edalatnejad](https://www.usenix.org/conference/usenixsecurity20/presentation/edalatnejad)
- **PDF:** [https://www.usenix.org/system/files/sec20-edalatnejad_0.pdf](https://www.usenix.org/system/files/sec20-edalatnejad_0.pdf)
## "I am uncomfortable sharing what I can't see": Privacy Concerns of the Visually Impaired with Camera Based Assistive Applications.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#i-am-uncomfortable-sharing-what-i-cant-see-privacy-concerns-of-the-visually-impaired-with-camera-based-assistive-applications) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#i-am-uncomfortable-sharing-what-i-cant-see-privacy-concerns-of-the-visually-impaired-with-camera-based-assistive-applications)**
### 作者
* Taslima Akter, Indiana University Bloomington
* Bryan Dosono, Syracuse University
* Tousif Ahmed, Indiana University Bloomington
* Apu Kapadia, Indiana University Bloomington
* Bryan Semaan, Syracuse University
### 摘要
> 基于摄像头的辅助技术的出现赋予了视力障碍者（VIP）在日常生活中获得独立的能力。流行的服务包括志愿者回答关于照片或视频的问题（例如识别医学处方）。然而，VIP可能（无意中）向这些志愿者透露敏感信息。为了更好地了解关于向不同类型的人类助理（朋友、家人和其他人）披露背景对象所涉及的隐私问题，我们进行了一项在线调查，共有155名视力障碍参与者。总体而言，我们的参与者对不同类型的助理和信息类型有不同的关注。我们发现，当拍摄人物照片时，参与者更关注旁观者的隐私而不是自己的隐私。我们还发现，参与者对自我呈现有所担忧，并且与朋友相比，他们更愿意与家人分享尴尬的信息。我们的发现为未来开发人工辅助问答系统指明了方向。具体而言，我们讨论了如何使这些系统更具人性化，以给人们带来更强的个人安全感。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/akter](https://www.usenix.org/conference/usenixsecurity20/presentation/akter)
- **PDF:** [https://www.usenix.org/system/files/sec20-akter.pdf](https://www.usenix.org/system/files/sec20-akter.pdf)
## 'I have too much respect for my elders': Understanding South African Mobile Users' Perceptions of Privacy and Current Behaviors on Facebook and WhatsApp.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#i-have-too-much-respect-for-my-elders-understanding-south-african-mobile-users-perceptions-of-privacy-and-current-behaviors-on-facebook-and-whatsapp) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#i-have-too-much-respect-for-my-elders-understanding-south-african-mobile-users-perceptions-of-privacy-and-current-behaviors-on-facebook-and-whatsapp)**
### 作者
* Jake Reichel, Princeton University
* Fleming Peck, Princeton University
* Mikako Inaba, Princeton University
* Bisrat Moges, Princeton University
* Brahmnoor Singh Chawla, Princeton University
* Marshini Chetty, University of Chicago
### 摘要
> Facebook在发展中国家的使用正在增长，但我们对如何为资源受限地区的用户定制社交媒体隐私设置知之甚少。为此，我们展示了对南非52名现有移动社交媒体用户的访谈结果。我们发现用户对隐私的主要关注是谁能看到他们的帖子和消息，而不是平台或广告商收集了哪些数据。其次，用户对现有社交媒体隐私设置的了解有一定的差距，并且在隐私保护方面主要依赖于阻止和密码保护。第三，用户的隐私和安全行为受到生活在高犯罪地区的影响。基于这些发现，我们提出了在资源受限地区更好地满足用户隐私和安全需求的未来工作建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/reichel](https://www.usenix.org/conference/usenixsecurity20/presentation/reichel)
- **PDF:** [https://www.usenix.org/system/files/sec20-reichel.pdf](https://www.usenix.org/system/files/sec20-reichel.pdf)
## RELOAD+REFRESH: Abusing Cache Replacement Policies to Perform Stealthy Cache Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#reload-refresh-abusing-cache-replacement-policies-to-perform-stealthy-cache-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#reload-refresh-abusing-cache-replacement-policies-to-perform-stealthy-cache-attacks)**
### 作者
* Samira Briongos, Integrated Systems Laboratory, Universidad Politécnica de Madrid
* Pedro Malagón, Integrated Systems Laboratory, Universidad Politécnica de Madrid
* José M. Moya, Integrated Systems Laboratory, Universidad Politécnica de Madrid
* Thomas Eisenbarth, University of Lübeck and Worcester Polytechnic Institute
### 摘要
> 缓存已成为逻辑隔离界限上意外信息提取的主要方法。它们广泛应用于所有主要的CPU平台，并且作为一个侧信道，缓存提供了很高的分辨率，使其成为Spectre和Meltdown最方便的信道。因此，已经提出了几种检测缓存攻击的方法。观察共存进程的缓存活动是不可能的，这在很大程度上帮助了检测工作，因为这会改变缓存状态，从而迫使被观察进程发生驱逐。在本研究中，我们展示了这种广为流传的假设是不正确的。通过巧妙地使用缓存替换策略，可以在不迫使受害者数据驱逐的情况下跟踪受害者进程的缓存访问。因此，依赖于这些驱逐的在线检测机制可以被规避，因为它们无法检测到引入的RELOAD+REFRESH攻击。该攻击需要对缓存替换策略有深入的理解。我们提出了一种恢复替换策略的方法，并将其应用于intel处理器的最后五代。我们进一步通过实验证明，RELOAD+REFRESH在密码实现上的性能与其他广泛使用的缓存攻击相当，而依赖于L3缓存事件的检测方法则被成功阻挠。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/briongos](https://www.usenix.org/conference/usenixsecurity20/presentation/briongos)
- **PDF:** [https://www.usenix.org/system/files/sec20-briongos_0.pdf](https://www.usenix.org/system/files/sec20-briongos_0.pdf)
## Timeless Timing Attacks: Exploiting Concurrency to Leak Secrets over Remote Connections.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#timeless-timing-attacks-exploiting-concurrency-to-leak-secrets-over-remote-connections) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#timeless-timing-attacks-exploiting-concurrency-to-leak-secrets-over-remote-connections)**
### 作者
* Tom Van Goethem, imec-DistriNet, KU Leuven
* Christina Pöpper, New York University Abu Dhabi
* Wouter Joosen, imec-DistriNet, KU Leuven
* Mathy Vanhoef, New York University Abu Dhabi
### 摘要
> 为了成功进行远程计时攻击，对手通常会收集一系列的网络计时测量，并随后进行统计分析以揭示执行时间的差异。所必须获取的测量数量在很大程度上取决于请求和响应所受到的抖动量。在远程计时攻击中，抖动的一个显著来源是对手与目标服务器之间的网络路径，使得成功利用只有微小执行时间差异的计时侧信道在实践上变得不可行。
> 
> 在本文中，我们引入了一种概念上新颖的计时攻击类型，它利用网络协议的数据包合并和应用程序的并发处理。这种基于并发的计时攻击通过分析响应返回的顺序来推断相对计时差异，因此不依赖于任何绝对计时信息。我们展示了这些攻击相比于在互联网上执行的典型计时攻击提升了100倍，并且能够准确检测到与在本地系统上发起的攻击相似的小至100ns的计时差异。我们描述了这些计时攻击如何成功针对HTTP/2 Web服务器、Tor Onion服务和流行的Wi-Fi身份验证方法EAP-pwd进行部署。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/van-goethem](https://www.usenix.org/conference/usenixsecurity20/presentation/van-goethem)
- **PDF:** [https://www.usenix.org/system/files/sec20-van_goethem.pdf](https://www.usenix.org/system/files/sec20-van_goethem.pdf)
## Cache Telepathy: Leveraging Shared Resource Attacks to Learn DNN Architectures.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#cache-telepathy-leveraging-shared-resource-attacks-to-learn-dnn-architectures) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#cache-telepathy-leveraging-shared-resource-attacks-to-learn-dnn-architectures)**
### 作者
* Mengjia Yan, University of Illinois at Urbana-Champaign
* Christopher W. Fletcher, University of Illinois at Urbana-Champaign
* Josep Torrellas, University of Illinois at Urbana-Champaign
### 摘要
> 深度神经网络（DNN）因其在各种机器学习任务中能够获得良好的准确性而逐渐变得无处不在。DNN的架构（即其超参数）在很大程度上决定了DNN的准确性和性能，并且通常是保密的。攻击云中的DNN以获取其架构可能会带来重大的商业价值。此外，获得DNN的架构还有助于其他已有的DNN攻击。
> 
> 本文提出了一种称为Cache Telepathy的高效机制，通过缓存侧信道帮助获取DNN的架构。该攻击基于这样一个洞察力：DNN推断严重依赖于平铺的GEMM（广义矩阵乘法），而DNN的架构参数决定了GEMM调用的数量和在GEMM函数中使用的矩阵的维度。这些信息可以通过缓存侧信道泄露出来。
> 
> 本文使用Prime+Probe和Flush+Reload来攻击运行OpenBLAS和Intel MKL库的VGG和ResNet DNN。我们的攻击在帮助获得DNN架构方面非常有效，通过大幅减少目标DNN架构的搜索空间。例如，攻击OpenBLAS库时，针对VGG-16的不同层，将搜索空间从超过5.4×1012个架构减少到仅16个；针对ResNet-50的不同模块，将搜索空间从超过6×1046个架构减少到了仅512个。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/yan](https://www.usenix.org/conference/usenixsecurity20/presentation/yan)
- **PDF:** [https://www.usenix.org/system/files/sec20-yan.pdf](https://www.usenix.org/system/files/sec20-yan.pdf)
## Certified Side Channels.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#certified-side-channels) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#certified-side-channels)**
### 作者
* Cesar Pereida García, Tampere University
* Sohaib ul Hassan, Tampere University
* Nicola Tuveri, Tampere University
* Iaroslav Gridin, Tampere University
* Alej, Tampere University and Universidad Tecnológica de la Habana
* ro Cabrera Aldaya, Tampere University and Universidad Tecnológica de la Habana
* Billy Bob Brumley, Tampere University
### 摘要
> 我们展示了持续的私钥格式对侧信道分析（SCA）安全性的影响。通过调查几个广泛部署的软件库，我们研究了它们支持的格式、它们如何解析这些密钥，以及在运行时做出的决策。我们发现了一系列弱点和漏洞，极端情况下，在逻辑上等价的密钥中，我们揭示了在密码系统中产生完全不连续的多精度算术栈。利用这些漏洞，我们设计并实施了密钥恢复攻击，利用了从电磁（EM）辐射到细粒度的微架构缓存时间再到粗略的传统挂钟时间等各种信号。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/garcia](https://www.usenix.org/conference/usenixsecurity20/presentation/garcia)
- **PDF:** [https://www.usenix.org/system/files/sec20-garcia.pdf](https://www.usenix.org/system/files/sec20-garcia.pdf)
## NetWarden: Mitigating Network Covert Channels while Preserving Performance.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#netwarden-mitigating-network-covert-channels-while-preserving-performance) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#netwarden-mitigating-network-covert-channels-while-preserving-performance)**
### 作者
* Jiarong Xing, Rice University
* Qiao Kang, Rice University
* Ang Chen, Rice University
### 摘要
> 网络隐蔽通道是对分布式系统安全性的先进威胁。现有的防御措施都以性能为代价，因此它们在高速网络中实际部署上存在重大障碍。我们提出了NetWarden，一种新颖的防御机制，其关键设计目标是在减轻隐蔽通道的同时保留TCP性能。可编程数据平面的使用使NetWarden能够采用之前仅作为概念证明的防御措施，并在线速上应用它们。此外，NetWarden使用一组性能增强技术，临时提高受隐蔽通道防御影响的连接的性能，最终目标是中和整体性能影响。NetWarden还使用快路径/慢路径架构，将软件的通用性和硬件的效率结合起来，实现有效防御。我们的评估结果显示，NetWarden与复杂应用程序和工作负载平稳配合，并且可以在几乎不影响性能的情况下减轻隐蔽时序和存储通道的影响。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/xing](https://www.usenix.org/conference/usenixsecurity20/presentation/xing)
- **PDF:** [https://www.usenix.org/system/files/sec20-xing.pdf](https://www.usenix.org/system/files/sec20-xing.pdf)
## TPM-FAIL: TPM meets Timing and Lattice Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#tpm-fail-tpm-meets-timing-and-lattice-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#tpm-fail-tpm-meets-timing-and-lattice-attacks)**
### 作者
* Daniel Moghimi, Worcester Polytechnic Institute, Worcester, MA, USA
* Berk Sunar, Worcester Polytechnic Institute, Worcester, MA, USA
* Thomas Eisenbarth, University of Lübeck, Lübeck, Germany
* Nadia Heninger, University of California, San Diego, CA, USA
### 摘要
> 可信平台模块（TPM）作为基于硬件的可信根源，可以保护密码密钥免受特权系统和物理对手的攻击。在这项工作中，我们对部署在商用计算机上的TPM 2.0设备进行了黑盒时序分析。我们的分析揭示了一些设备在椭圆曲线签名生成过程中具有依赖密钥的执行时间。特别地，我们发现了Intel基于固件的TPM以及硬件TPM的时序信息泄露。我们展示了这些信息如何使攻击者能够应用格技术来恢复ECDSA和ECSchnorr签名的256位私钥。在Intel fTPM上，我们的密钥恢复在约1,300次观察中成功，耗时不到两分钟。同样地，在STMicroelectronics制造的经过Common Criteria（CC）EAL 4+认证的硬件TPM上，我们在少于40,000次观察中提取了私有的ECDSA密钥。我们进一步通过对使用TPM生成数字签名进行身份验证的StrongSwan IPsec VPN进行远程攻击来突出这些漏洞的影响。在这次攻击中，远程客户端通过网络连接仅通过45,000次身份验证握手的计时就恢复了服务器的私有身份验证密钥。
> 
> 我们发现的这些漏洞强调了正确实施已知恒定时间技术的困难，并展示了对密码实现进行进化式测试和透明评估的重要性。即使是声称对抗攻击具有抗性的经过认证的设备，也需要由社区和工业界进行额外的审查，以便我们对这些攻击有更多了解。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/moghimi-tpm](https://www.usenix.org/conference/usenixsecurity20/presentation/moghimi-tpm)
- **PDF:** [https://www.usenix.org/system/files/sec20-moghimi-tpm.pdf](https://www.usenix.org/system/files/sec20-moghimi-tpm.pdf)
## Scaling Verifiable Computation Using Efficient Set Accumulators.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#scaling-verifiable-computation-using-efficient-set-accumulators) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#scaling-verifiable-computation-using-efficient-set-accumulators)**
### 作者
* Alex Ozdemir, Stanford University
* Riad Wahby, Stanford University
* Barry Whitehat, Unaffiliated
* Dan Boneh, Stanford University
### 摘要
> 可验证的外包系统将大量计算委托给远程服务器，但要求远程服务器提供一个简洁的证明，称为SNARK，证明服务器正确地执行了计算。这种方法在几个区块链系统中可以找到实际应用，这些系统利用可验证的外包来处理大量离线交易。这将将链上工作减少到仅需验证交易处理是否正确的简洁证明。在实践中，可验证的外包状态更新是通过更新默克尔树的叶节点，重新计算结果的默克尔根，并使用SNARK证明状态更新已经正确执行来完成的。
> 
> 在这项工作中，我们使用一种既有的技术和新颖的技术组合，将RSA累加器实现在SNARK中，并将其作为默克尔树的替代品。我们专门优化了累加器以与SNARK兼容。我们的实验表明，与使用默克尔树提交当前状态的现有方法相比，得到的系统可以显著降低成本。这些结果广泛适用于任何需要将一批状态更新交给远程不受信任的服务器的系统。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/ozdemir](https://www.usenix.org/conference/usenixsecurity20/presentation/ozdemir)
- **PDF:** [https://www.usenix.org/system/files/sec20-ozdemir.pdf](https://www.usenix.org/system/files/sec20-ozdemir.pdf)
## Pixel: Multi-signatures for Consensus.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#pixel-multi-signatures-for-consensus) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#pixel-multi-signatures-for-consensus)**
### 作者
* Manu Drijvers, DFINITY
* Sergey Gorbunov, Algorand and University of Waterloo
* Gregory Neven, DFINITY
* Hoeteck Wee, Algorand and CNRS, ENS, PSL
### 摘要
> 在权益证明（PoS）和受权限限制的区块链中，一个验证委员会同意并签署每个新的交易区块。这些区块被所有网络用户验证、传播和存储。然而，后置损坏对这些设计构成了普遍威胁，因为对手可以在委员会验证者认证了一个区块之后，损坏他们的签名密钥并用于认证一个不同的区块。为PoS区块链设计高效且安全的数字签名可以大幅减少节点的带宽、存储和计算需求，从而实现更高效的应用。
> 
> 我们提出了Pixel，一种基于配对的前向安全多签名方案，专门为区块链使用进行了优化，可以在带宽、存储需求和验证努力方面实现大幅节省。Pixel签名由两个群元素组成，不论签名者数量如何，可以使用三次配对和一次指数运算进行验证，并支持将个体签名非交互聚合为多重签名。Pixel签名也是前向安全的，允许签名者随时间演化他们的密钥，使得新密钥无法用于对旧区块进行签名，从而保护区块链免受后置损坏攻击。我们展示了如何将Pixel整合到任何PoS区块链中。接下来，我们在一个真实的PoS区块链实现中评估了Pixel，结果显示它在存储、带宽和区块验证时间方面实现了显著的节省。具体来说，Pixel签名将包含1500个交易的区块大小减小了35%，将区块验证时间缩短了38%。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/drijvers](https://www.usenix.org/conference/usenixsecurity20/presentation/drijvers)
- **PDF:** [https://www.usenix.org/system/files/sec20-drijvers.pdf](https://www.usenix.org/system/files/sec20-drijvers.pdf)
## SANNS: Scaling Up Secure Approximate k-Nearest Neighbors Search.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#sanns-scaling-up-secure-approximate-k-nearest-neighbors-search) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#sanns-scaling-up-secure-approximate-k-nearest-neighbors-search)**
### 作者
* Hao Chen, Microsoft Research
* Ilaria Chillotti, imec-COSIC KU Leuven & Zama
* Yihe Dong, Microsoft
* Oxana Poburinnaya, Simons Institute
* Ilya Razenshteyn, Microsoft Research
* M. Sadegh Riazi, UC San Diego
### 摘要
> k最近邻搜索（k-NNS）是几个基于云的服务的支柱，例如推荐系统、人脸识别和文本和图像的数据库搜索。在这些服务中，客户端将查询发送到云服务器，并接收相应的响应，其中查询和响应暴露给服务提供商。由于数据的敏感性和/或隐私法律的原因，这种数据披露在几种场景下是不可接受的。
> 
> 在本文中，我们介绍了SANNS，一种用于保持客户端查询和搜索结果机密的安全k-NNS系统。SANNS包括两个协议：一个优化的线性扫描和一个基于新颖的次线性时间聚类算法的协议。我们在标准半诚实模型下证明了这两个协议的安全性。这些协议建立在几个最先进的密码原语之上，例如基于格的加法同态加密、分布式忘记性RAM和伪装电路。我们对每个这些原语都提供了几个贡献，这些贡献适用于其他安全计算任务。我们的两个协议都依赖于一个新的电路，用于从n个数字中选择近似前k个，该电路由O(n + k²)个比较器构建。
> 
> 我们已经实现了我们提出的系统，并在两个不同的计算环境下对四个数据集进行了广泛的实验结果，相对于之前的最优实现协议，展示了超过18-31倍更快的响应时间。此外，SANNS是首个可以扩展到1000万条记录的数据库的研究，将极限推高了两个数量级。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/chen-hao](https://www.usenix.org/conference/usenixsecurity20/presentation/chen-hao)
- **PDF:** [https://www.usenix.org/system/files/sec20-chen-hao.pdf](https://www.usenix.org/system/files/sec20-chen-hao.pdf)
## MIRAGE: Succinct Arguments for Randomized Algorithms with Applications to Universal zk-SNARKs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#mirage-succinct-arguments-for-randomized-algorithms-with-applications-to-universal-zk-snarks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#mirage-succinct-arguments-for-randomized-algorithms-with-applications-to-universal-zk-snarks)**
### 作者
* Ahmed Kosba, Alexandria University
* Dimitrios Papadopoulos, Hong Kong University of Science and Technology
* Charalampos Papamanthou, University of Maryland
* Dawn Song, UC Berkeley
### 摘要
> 近年来，零知识证明系统的部署引起了越来越多的关注，尤其是具有简洁证明和高效验证（zk-SNARKs）的系统。zk-SNARKs广泛应用所面临的主要挑战之一是在不同计算中需要一个可信任的密钥生成阶段，以实现实用的证明性能。现有的零知识证明系统要么不需要可信设置，要么只有一个可信的预处理阶段，但会导致证明大小增加和/或额外的验证开销。另一方面，虽然已经在文献中引入了用于zk-SNARKs的通用电路生成器（可以消除计算前处理的需求），但证明者的性能仍远未达到现实世界应用的实用水平。
> 
> 在本文中，我们首先介绍了一个新的适用于随机算法的zk-SNARK系统，特别是它不在算术电路中编码随机生成，从而实现更实用的证明时间。然后，我们设计了一个通用电路，它接受有限次操作的任何算术电路以及可能的值分配作为输入，并进行随机检查以验证一致性。我们的通用电路与其他通用电路相比是线性的，而不是准线性的。通过将我们的新zk-SNARK系统应用于我们的通用电路，我们构建了MIRAGE，一个具有非常简洁证明的通用zk-SNARK——与Groth（Eurocrypt 2016）的每电路预处理状态-of-the-art zk-SNARK相比，证明仅包含一个附加元素。最后，我们实现了MIRAGE，并在不同电路和隐私保护智能合约的背景下对其性能进行了实验评估。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/kosba](https://www.usenix.org/conference/usenixsecurity20/presentation/kosba)
- **PDF:** [https://www.usenix.org/system/files/sec20-kosba.pdf](https://www.usenix.org/system/files/sec20-kosba.pdf)
## Secure Multi-party Computation of Differentially Private Median.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#secure-multi-party-computation-of-differentially-private-median) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#secure-multi-party-computation-of-differentially-private-median)**
### 作者
* Jonas Böhler, SAP Security Research
* Florian Kerschbaum, University of Waterloo
### 摘要
> 在这项工作中，我们考虑到了分布式的私密学习。为此，公司会收集关于用户的遥测、使用情况和频繁设置的统计数据，且不会披露个别值。我们专注于基于排名的统计数据，具体来说是中位数，相较于均值，它对离群值更具鲁棒性。
> 
> 本地差分隐私通常用于私密学习，其中每个用户与不受信任的服务器共享局部扰动的数据，但其准确性不及中央模型，中央模型只由可信服务器一次性应用噪声。现有的计算差分私密中位数的解决方案，只能在用户数量很多（本地模型）时提供较好的准确性，或通过使用可信第三方（中央模型），或者适用于非常小的数据范围（安全多方计算）。
> 
> 我们提出了一种多方计算方法，能够高效地计算中位数的指数机制，还支持一般的基于排名的统计数据（例如p百分位数、四分位距）和机器学习的凸优化。我们的方法高效（实际运行时间短）、可扩展（与数据范围大小呈次线性关系）且具有较高准确性，即绝对误差小于可比较的方法，且与用户数量无关，因此即使用于少量用户，我们的协议也可使用。在实验中，我们能够使用分布在互联网上的3个半诚实计算方，在3分钟内计算出100万个用户的差分私密中位数。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/boehler](https://www.usenix.org/conference/usenixsecurity20/presentation/boehler)
- **PDF:** [https://www.usenix.org/system/files/sec20-bohler.pdf](https://www.usenix.org/system/files/sec20-bohler.pdf)
## That Was Then, This Is Now: A Security Evaluation of Password Generation, Storage, and Autofill in Browser-Based Password Managers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#that-was-then-this-is-now-a-security-evaluation-of-password-generation-storage-and-autofill-in-browser-based-password-managers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#that-was-then-this-is-now-a-security-evaluation-of-password-generation-storage-and-autofill-in-browser-based-password-managers)**
### 作者
* Sean Oesch, University of Tennessee
* Scott Ruoti, University of Tennessee
### 摘要
> 密码管理器有助于用户更有效地管理他们的密码，并解决围绕基于密码的身份验证的许多问题。然而，先前的研究已经发现现有密码管理器存在重大漏洞，特别是基于浏览器的密码管理器，这也是本文的重点。自那时以来已经过去了五年，目前不清楚密码管理器是否仍然存在漏洞，或者它们是否已经解决了已知的安全问题。为了回答这个问题，我们评估了13个流行的密码管理器，并考虑了密码管理器生命周期的全部三个阶段——密码生成、存储和自动填充。我们的评估是对密码管理器中密码生成的首次分析，发现了几种非随机字符分布，并确定了生成的密码容易受到在线和离线猜测攻击的情况。对于密码存储和自动填充，我们复制了先前的评估结果，证明尽管在过去的五年中密码管理器有所改进，仍然存在重大问题，包括未加密的元数据、不安全的默认设置以及易受点击劫持攻击的漏洞。根据我们的结果，我们确定了应该避免使用的密码管理器，提出了改进现有密码管理器的建议，并确定了未来研究的方向。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/oesch](https://www.usenix.org/conference/usenixsecurity20/presentation/oesch)
- **PDF:** [https://www.usenix.org/system/files/sec20-oesch_0.pdf](https://www.usenix.org/system/files/sec20-oesch_0.pdf)
## Composition Kills: A Case Study of Email Sender Authentication.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#composition-kills-a-case-study-of-email-sender-authentication) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#composition-kills-a-case-study-of-email-sender-authentication)**
### 作者
* Jianjun Chen, International Computer Science Institute
* Vern Paxson, University of California Berkeley and International Computer Science Institute
* Jian Jiang, Shape Security
### 摘要
> 组件化软件设计是构建现代软件系统的一种主要工程方法。然而，这种编程范式会导致安全问题，因为不同组件之间的消息可能会产生不一致的解释。本文利用这种不一致性来识别电子邮件系统中的漏洞。我们识别了一系列技术，能够在电子邮件服务器和客户端之间引入不一致性。我们展示了这些不一致性如何使攻击者能够绕过邮件身份验证，冒充任意发送者，并伪造带有合法站点签名的DKIM邮件。通过手动分析和黑盒模糊测试的组合，我们发现了18种逃避漏洞，并对10个流行的电子邮件提供商和19个电子邮件客户端进行了测试，所有这些系统都存在各种攻击漏洞。在不了解我们的攻击的情况下，即使是使用像Gmail这样的最先进电子邮件提供商服务的认真的安全专业人士，在收到一封电子邮件时也无法确定其是否被伪造。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/chen-jianjun](https://www.usenix.org/conference/usenixsecurity20/presentation/chen-jianjun)
- **PDF:** [https://www.usenix.org/system/files/sec20-chen-jianjun.pdf](https://www.usenix.org/system/files/sec20-chen-jianjun.pdf)
## Detecting Stuffing of a User's Credentials at Her Own Accounts.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#detecting-stuffing-of-a-users-credentials-at-her-own-accounts) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#detecting-stuffing-of-a-users-credentials-at-her-own-accounts)**
### 作者
* Ke Coby Wang, University of North Carolina at Chapel Hill
* Michael K. Reiter, University of North Carolina at Chapel Hill
### 摘要
> 我们提出了一个框架，该框架可以使网站能够协同检测个别用户账户中的凭证滥用问题。我们的检测算法通过利用现代异常检测和仔细跟踪可疑登录来区分正常的登录行为（包括密码重用、在错误的网站输入正确的密码等）与凭证滥用行为。网站使用一种新颖的私有成员测试协议进行协同，从而确保有关密码的信息不会泄露；这种协议具有高度可扩展性，部分原因是它使用了布谷鸟过滤器，并且在我们定义的一个重要指标上比类似的可扩展替代方案更安全。我们使用概率模型检验来估计在一系列操作点上我们的凭证滥用检测准确性。这些方法可能对于它们将形式方法应用于估计我们设计的可用性影响具有独立的兴趣。我们展示了即使是我们框架的最小基础设施部署应该已经支持美国航空、酒店、零售和消费银行业所经历的登录负载的结合。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/wang](https://www.usenix.org/conference/usenixsecurity20/presentation/wang)
- **PDF:** [https://www.usenix.org/system/files/sec20-wang.pdf](https://www.usenix.org/system/files/sec20-wang.pdf)
## Liveness is Not Enough: Enhancing Fingerprint Authentication with Behavioral Biometrics to Defeat Puppet Attacks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#liveness-is-not-enough-enhancing-fingerprint-authentication-with-behavioral-biometrics-to-defeat-puppet-attacks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#liveness-is-not-enough-enhancing-fingerprint-authentication-with-behavioral-biometrics-to-defeat-puppet-attacks)**
### 作者
* Cong Wu, Wuhan University
* Kun He, Wuhan University
* Jing Chen, Wuhan University
* Ziming Zhao, Rochester Institute of Technology
* Ruiying Du, Wuhan University
### 摘要
> 指纹认证在近年来在移动设备上越来越受欢迎。然而，它容易受到呈现攻击的攻击方式，其中包括攻击者使用人工复制品进行欺骗。许多活体检测解决方案被提出来抵御此类呈现攻击；然而，它们都无法防御一种特定类型的呈现攻击，即傀儡攻击，其中攻击者把一个不愿配合的受害者的手指放在指纹传感器上。在本文中，我们提出FINAUTH，这是一种有效而高效的仅使用软件的解决方案，通过使用指尖触摸特征来补充指纹认证，以击败合成欺骗和傀儡攻击。FINAUTH表征了固有的指尖触摸行为，包括合法用户认证时移动设备的加速度和旋转角度。FINAUTH仅利用移动设备上配备的常见传感器，不会给用户增加额外的可用性负担。为了评估FINAUTH的有效性，我们进行了实验，使用了经过IRB批准的从90个主题收集的数据集。结果显示，FINAUTH在使用5个训练数据点时可以实现平均平衡准确率为96.04％，使用100个训练数据点时可以实现99.28％的准确率。安全性实验证明FINAUTH对可能的攻击是有抵抗力的。此外，我们还报告了FINAUTH的可用性分析结果，包括用户认证延迟和开销。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/wu](https://www.usenix.org/conference/usenixsecurity20/presentation/wu)
- **PDF:** [https://www.usenix.org/system/files/sec20-wu.pdf](https://www.usenix.org/system/files/sec20-wu.pdf)
## Human Distinguishable Visual Key Fingerprints.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#human-distinguishable-visual-key-fingerprints) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#human-distinguishable-visual-key-fingerprints)**
### 作者
* Mozhgan Azimpourkivi, Bloomberg
* Umut Topkara, Bloomberg
* Bogdan Carbunar, FIU
### 摘要
> 视觉指纹用于人类身份验证，以提高防范冒充攻击的安全性。验证要求用户确认从可信源获得的视觉指纹图像与从未知源获得的图像相同。我们引入了CEAL，一种新颖的机制，用于构建任意公共字符串的视觉指纹表示生成器。CEAL在三个重要方面突出于现有方法：（1）通过学习一个生成模型来模仿大量样本图像的指纹图像风格和领域，从而消除了手工制定图像生成规则的需要，实现了易于定制化；（2）在人类感知的视觉辨别能力限制范围内操作，使得学习的指纹图像生成器避免映射不可由人类区分的不同键到图像；（3）所得模型能够确定性地从输入向量生成逼真的指纹图像，其中向量分量被指定为控制对人眼易于感知的视觉属性或对准确建模目标图像领域而必要的不可感知属性。
> 
> 与现有的视觉指纹生成器不同，CEAL考虑了人类感知的限制，并将图像的密钥载荷能力推向了其生成模型的极限：我们已经为自然景观图像构建了一个生成网络，可以可靠地在指纹中编码123位熵。我们通过931个参与者对3,996个图像对进行了标注。在对4.02亿组攻击图像对进行的实验中，我们发现通过使用我们构建的人类感知辨别器进行的原像攻击对CEAL的成功率最多为0.0002%。CEAL生成模型体积小（67MB），效率高（在笔记本上生成一个图像指纹仅需2.3秒）。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/azimpourkivi](https://www.usenix.org/conference/usenixsecurity20/presentation/azimpourkivi)
- **PDF:** [https://www.usenix.org/system/files/sec20-azimpourkivi.pdf](https://www.usenix.org/system/files/sec20-azimpourkivi.pdf)
## FuzzGuard: Filtering out Unreachable Inputs in Directed Grey-box Fuzzing through Deep Learning.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fuzzguard-filtering-out-unreachable-inputs-in-directed-grey-box-fuzzing-through-deep-learning) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fuzzguard-filtering-out-unreachable-inputs-in-directed-grey-box-fuzzing-through-deep-learning)**
### 作者
* Peiyuan Zong, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Tao Lv, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Dawei Wang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zizhuang Deng, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Ruigang Liang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Kai Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
### 摘要
> 最近，针对软件测试领域，指导性灰盒模糊测试(DGF)变得流行起来。与以增加代码覆盖率为目标以触发更多bug的基于覆盖率的模糊测试不同，DGF旨在检查一段可能具有bug的代码（例如，字符串操作）是否真的包含bug。理想情况下，DGF生成的所有输入都应该能够到达目标有bug的代码，直到触发bug。当使用无法到达的输入时，这样做就是浪费时间。不幸的是，在实际情况中，大量生成的输入不能让程序执行到目标位置，这对模糊测试的效率产生了很大的影响，特别是当有各种约束条件保护的代码中嵌入了有bug的代码时。
> 
> 在本文中，我们提出了一种基于深度学习的方法来在执行目标程序之前预测输入的可达性（即是否能够到达目标），帮助DGF过滤掉无法到达的输入，提高模糊测试的性能。为了在DGF中应用深度学习，我们设计了一套新技术（例如，前进步骤方法，代表性数据选择）来解决标记数据不平衡和训练过程中时间不足的问题。此外，我们实现了名为FuzzGuard的提出方法，并配备了最先进的DGF（例如，AFLGo）。对45个真实漏洞的评估结果显示，FuzzGuard将原始AFLGo的模糊测试效率提升了17.1倍。最后，为了了解FuzzGuard学习到的关键特征，我们说明了它们与程序中的约束的联系。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zong](https://www.usenix.org/conference/usenixsecurity20/presentation/zong)
- **PDF:** [https://www.usenix.org/system/files/sec20-zong.pdf](https://www.usenix.org/system/files/sec20-zong.pdf)
## FuzzGen: Automatic Fuzzer Generation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fuzzgen-automatic-fuzzer-generation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fuzzgen-automatic-fuzzer-generation)**
### 作者
* Kyriakos Ispoglou, Google Inc.
* Daniel Austin, Google Inc.
* Vishwath Mohan, Google Inc.
* Mathias Payer, EPFL
### 摘要
> Fuzzing（模糊测试）是一种用于发现软件中未知漏洞的测试技术。当将Fuzzing应用于库时，提供随机输入的核心思想保持不变，然而实现良好的代码覆盖率并不简单。库无法作为独立程序运行，而是通过另一个应用程序调用。触发库中深层代码仍然具有挑战性，因为需要特定的API调用序列来建立必要的状态。库是多样化的，并且具有独特的接口，需要独特的Fuzzer来编写，目前这些Fuzzer是由人类分析师编写的。
> 
> 为了解决这个问题，我们提出了FuzzGen，这是一种在给定环境中自动合成复杂库的Fuzzer工具。FuzzGen利用整个系统分析来推断库的接口，并专门为该库合成Fuzzer。FuzzGen不需要人类干预，可以应用于各种库。此外，生成的Fuzzer利用LibFuzzer实现更好的代码覆盖率，并暴露库中深层次的错误。
> 
> 我们对Debian和Android开源项目（AOSP）上选择的7个库进行了FuzzGen的评估。迄今为止，我们已发现17个以前未修复的漏洞，其中6个已分配CVE编号。与手动编写的Fuzzer相比，生成的Fuzzer实现了平均54.94％的代码覆盖率，提高了6.94％，证明了FuzzGen的效果和通用性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/ispoglou](https://www.usenix.org/conference/usenixsecurity20/presentation/ispoglou)
- **PDF:** [https://www.usenix.org/system/files/sec20-ispoglou.pdf](https://www.usenix.org/system/files/sec20-ispoglou.pdf)
## ParmeSan: Sanitizer-guided Greybox Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#parmesan-sanitizer-guided-greybox-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#parmesan-sanitizer-guided-greybox-fuzzing)**
### 作者
* Sebastian Österlund, Vrije Universiteit Amsterdam
* Kaveh Razavi, Vrije Universiteit Amsterdam
* Herbert Bos, Vrije Universiteit Amsterdam
* Cristiano Giuffrida, Vrije Universiteit Amsterdam
### 摘要
> 模糊测试时，一个关键问题是在哪里寻找漏洞。基于覆盖率的模糊测试程序会不加选择地优化覆盖尽可能多的代码，因为漏洞覆盖率通常与代码覆盖率相关。由于代码覆盖率过高估计了漏洞覆盖率，这种方法不理想，并可能导致漏洞的暴露时间（TTE）较长。定向模糊测试器试图通过将模糊测试程序定向到潜在漏洞的基本块来解决这个问题。这种方法可以大大减少特定漏洞的TTE，但特殊目的的模糊测试器可能大大低估整体漏洞覆盖率。
> 
> 在本文中，我们提出了一种新的设计点——基于污点分析的模糊测试，该方法专门优化漏洞覆盖率。为此，我们观察到现有软件污点分析器执行的插桩常用于检测由模糊测试引起的错误条件，但它们还可以作为一种通用有效的机制来识别有趣的基本块，以指导模糊测试程序。我们介绍了ParmeSan的设计和实现，这是一种基于污点分析的新型模糊测试程序。我们证明ParmeSan大大减少了实际漏洞的TTE，并比现有的基于覆盖率的模糊测试程序（Angora）快37%，比定向模糊测试程序（AFLGo）快288%，同时仍然涵盖相同的一组漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/osterlund](https://www.usenix.org/conference/usenixsecurity20/presentation/osterlund)
- **PDF:** [https://www.usenix.org/system/files/sec20fall_osterlund_prepub.pdf](https://www.usenix.org/system/files/sec20fall_osterlund_prepub.pdf)
## EcoFuzz: Adaptive Energy-Saving Greybox Fuzzing as a Variant of the Adversarial Multi-Armed Bandit.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#ecofuzz-adaptive-energy-saving-greybox-fuzzing-as-a-variant-of-the-adversarial-multi-armed-bandit) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#ecofuzz-adaptive-energy-saving-greybox-fuzzing-as-a-variant-of-the-adversarial-multi-armed-bandit)**
### 作者
* Tai Yue, National University of Defense Technology
* Pengfei Wang, National University of Defense Technology
* Yong Tang, National University of Defense Technology
* Enze Wang, National University of Defense Technology
* Bo Yu, National University of Defense Technology
* Kai Lu, National University of Defense Technology
* Xu Zhou, National University of Defense Technology
### 摘要
> 模糊测试是识别安全漏洞最有效的方法之一。作为一种最先进的基于覆盖率的灰盒模糊测试工具，AFL是一种高效且广泛使用的技术。然而，AFL为频繁访问路径分配了过多的能量（即由种子生成的测试用例数量），并且不能自适应地调整能量分配，从而浪费了大量的能量。此外，当前的马尔可夫模型对于建模基于覆盖率的灰盒模糊测试不够深入。本文提出了一种对抗多臂赌博模型的变体，用于建模AFL的功率调度过程。我们首先通过使用生成新路径的测试用例的奖励概率来解释AFL调度算法中的挑战。此外，我们还说明了种子集的三种状态，并开发了一种独特的自适应调度算法和基于概率的搜索策略。这些方法是在EcoFuzz中实现的，EcoFuzz是一个自适应节能的灰盒模糊测试工具，构建在AFL之上。在490个CPU天的时间内，我们对EcoFuzz与其他六种AFL类型的工具在14个真实世界的主题上进行了测试。根据结果，EcoFuzz可以达到AFL路径覆盖率的214%，同时减少了32%的测试用例生成量。此外，EcoFuzz在GNU Binutils和其他软件中发现了12个漏洞。我们还扩展了EcoFuzz来测试一些物联网设备，并在SNMP组件中发现了一个新的漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/yue](https://www.usenix.org/conference/usenixsecurity20/presentation/yue)
- **PDF:** [https://www.usenix.org/system/files/sec20-yue.pdf](https://www.usenix.org/system/files/sec20-yue.pdf)
## MUZZ: Thread-aware Grey-box Fuzzing for Effective Bug Hunting in Multithreaded Programs.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#muzz-thread-aware-grey-box-fuzzing-for-effective-bug-hunting-in-multithreaded-programs) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#muzz-thread-aware-grey-box-fuzzing-for-effective-bug-hunting-in-multithreaded-programs)**
### 作者
* Hongxu Chen, University of Science and Technology of China and Nayang Technological University
* Shengjian Guo, Baidu Security
* Yinxing Xue, University of Science and Technology of China
* Yulei Sui, University of Technology Sydney
* Cen Zhang, Nanyang Technological University
* Yuekang Li, Nanyang Technological University
* Haijun Wang, Ant Financial Services Group
* Yang Liu, Nanyang Technological University
### 摘要
> 灰盒模糊测试因其轻量级的仪器化、快速覆盖反馈和动态调整策略，已经揭示出了现实世界软件中的成千上万个漏洞。然而，直接将灰盒模糊测试应用于依赖输入的多线程程序可能效率极低。在实践中，多线程相关的错误通常隐藏在复杂的程序流程中。与此同时，现有的灰盒模糊测试技术并不关注影响多线程程序执行状态的线程交错。因此，主流的灰盒模糊测试工具无法充分测试多线程软件中的问题片段，尽管它们可能获得了较高的代码覆盖率统计数据。
> 
> 为此，我们提出了一种名为Muzz的新型灰盒模糊测试技术，用于在多线程程序中寻找错误。Muzz拥有三种新颖的线程感知仪器化技术，分别是面向覆盖率的仪器化、线程上下文仪器化和调度干预仪器化。在模糊测试过程中，这些仪器化技术产生运行时反馈，强调由线程交错引起的执行状态。通过在动态种子选择和执行策略中利用这些反馈，Muzz保留了更有价值的在多线程环境下暴露错误的种子。
> 
> 我们在十二个现实世界的多线程程序上评估了Muzz。实验证明，Muzz在多线程相关的种子生成和并发漏洞检测方面优于AFL。此外，通过对生成的种子回放目标程序，Muzz还揭示了比AFL更多的并发错误（例如数据竞争、线程泄漏）。总体而言，Muzz检测到了八个新的并发漏洞和十九个新的并发错误。在撰写本文时，有四个报告的问题已经获得了CVE ID。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/chen-hongxu](https://www.usenix.org/conference/usenixsecurity20/presentation/chen-hongxu)
- **PDF:** [https://www.usenix.org/system/files/sec20-chen-hongxu.pdf](https://www.usenix.org/system/files/sec20-chen-hongxu.pdf)
## On Training Robust PDF Malware Classifiers.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#on-training-robust-pdf-malware-classifiers) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#on-training-robust-pdf-malware-classifiers)**
### 作者
* Yizheng Chen, Columbia University
* Shiqi Wang, Columbia University
* Dongdong She, Columbia University
* Suman Jana, Columbia University
### 摘要
> 虽然最先进的PDF恶意软件分类器可以通过训练几乎完美的测试准确度（99%）和极低的误报率（低于0.1%），但研究表明即使是简单的对手也可以规避它们。一个实用的恶意软件分类器必须能够抵御规避攻击的困扰。然而，实现这种鲁棒性是一个极具挑战性的任务。
> 
> 在本文中，我们首次着手训练具有可验证鲁棒性特性的PDF恶意软件分类器。例如，一个鲁棒性特性可以强制要求，无论将多少个良性文档的页面插入到PDF恶意软件中，分类器仍然必须将其分类为恶意软件。我们演示了如何形式化验证恶意软件分类器在特定鲁棒性特性方面的最坏行为。此外，我们发现，训练满足形式化验证鲁棒性特性的分类器可以通过消除简单的规避攻击，增加无限制（即不受鲁棒性特性限制）攻击者的规避成本。
> 
> 具体而言，我们提出了一种在PDF树结构上操作的新距离度量，并指定了两类鲁棒性特性，包括子树插入和删除。我们利用最先进的可验证鲁棒性训练方法构建鲁棒的PDF恶意软件分类器。我们的结果显示，在三个特性上，我们可以实现92.27%的平均可验证鲁棒准确度，同时保持99.74%的准确度和0.56%的误报率。在简单的鲁棒性特性下，我们的鲁棒模型对无限制白盒攻击比所有基线模型保持着更高的鲁棒准确度（7%）。此外，最先进的和新的自适应进化攻击者需要比基线模型更大10倍的L_0特征距离和21倍的PDF基本变异（例如插入和删除对象）来规避我们的鲁棒模型。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/chen-yizheng](https://www.usenix.org/conference/usenixsecurity20/presentation/chen-yizheng)
- **PDF:** [https://www.usenix.org/system/files/sec20-chen-yizheng.pdf](https://www.usenix.org/system/files/sec20-chen-yizheng.pdf)
## Measuring and Modeling the Label Dynamics of Online Anti-Malware Engines.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#measuring-and-modeling-the-label-dynamics-of-online-anti-malware-engines) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#measuring-and-modeling-the-label-dynamics-of-online-anti-malware-engines)**
### 作者
* Shuofei Zhu, The Pennsylvania State University
* Jianjun Shi, BIT, The Pennsylvania State University
* Limin Yang, University of Illinois at Urbana-Champaign
* Boqin Qin, BUPT, The Pennsylvania State University
* Ziyi Zhang, USTC, The Pennsylvania State University
* Linhai Song, Pennsylvania State University
* Gang Wang, University of Illinois at Urbana-Champaign
### 摘要
> VirusTotal提供了来自大量反恶意软件引擎的恶意软件标签，并且被研究人员大量使用于恶意软件注释和系统评估。由于不同引擎之间常常存在不一致的情况，研究人员已经采用了各种方法来聚合它们的标签。在本文中，我们采用数据驱动的方法来对研究人员使用的常见标记方法进行分类、推理和验证。首先我们对使用VirusTotal的115篇学术论文进行了调查，并确定了共同的方法。然后，我们收集了VirusTotal引擎在一年内超过14,000个文件的每日快照（包括一部分手动验证的地面真实数据）。我们的分析验证了基于阈值的标记聚合在稳定文件标签方面的好处，并指出了选择不当的阈值的影响。我们表明手动选择的“可信任”引擎并不总是表现良好，而且某些引擎组之间存在强相关性，不应该独立对待。最后，我们通过实证研究展示了某些引擎在对提交的文件进行深入分析时无法正常工作，并且容易产生误报。根据我们的研究结果，我们提出了对于未来使用VirusTotal进行数据注释的建议。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zhu](https://www.usenix.org/conference/usenixsecurity20/presentation/zhu)
- **PDF:** [https://www.usenix.org/system/files/sec20-zhu.pdf](https://www.usenix.org/system/files/sec20-zhu.pdf)
## FIRMSCOPE: Automatic Uncovering of Privilege-Escalation Vulnerabilities in Pre-Installed Apps in Android Firmware.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#firmscope-automatic-uncovering-of-privilege-escalation-vulnerabilities-in-pre-installed-apps-in-android-firmware) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#firmscope-automatic-uncovering-of-privilege-escalation-vulnerabilities-in-pre-installed-apps-in-android-firmware)**
### 作者
* Mohamed Elsabagh, Kryptowire
* Ryan Johnson, Kryptowire
* Angelos Stavrou, Kryptowire
* Chaoshun Zuo, The Ohio State University
* Qingchuan Zhao, The Ohio State University
* Zhiqiang Lin, The Ohio State University
### 摘要
> Android设备在其固件中预装了特权应用程序，其中一些是必要的系统组件，其他提供独特的用户体验，用户无法禁用这些预装应用程序。这些预装应用程序被认为是安全的，因为它们是由设备供应商自己挑选或开发，而不是通过第三方。不幸的是，我们发现了大量的Android固件中存在特权提升漏洞的预装应用程序，使得攻击者可以执行未经授权的操作，例如执行任意命令、录制设备音频和屏幕以及访问个人数据等。为了发现这些漏洞，我们构建了FIRMSCOPE，这是一个新颖的静态分析系统，使用高效实用的上下文敏感、流敏感、域敏感和部分对象敏感污点分析来分析Android固件，以揭示预装应用程序中的不需要的功能。我们的实验结果表明，FIRMSCOPE在检测能力和运行时性能方面明显优于现有的Android污点分析解决方案。我们使用FIRMSCOPE扫描了来自100多家Android供应商的2017个Android固件镜像中的331,342个预装应用程序，版本从v4.0到v9.0。其中，FIRMSCOPE发现了850个独特的特权提升漏洞，其中许多是可利用的和0day漏洞。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/elsabagh](https://www.usenix.org/conference/usenixsecurity20/presentation/elsabagh)
- **PDF:** [https://www.usenix.org/system/files/sec20-elsabagh.pdf](https://www.usenix.org/system/files/sec20-elsabagh.pdf)
## Automatic Hot Patch Generation for Android Kernels.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#automatic-hot-patch-generation-for-android-kernels) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#automatic-hot-patch-generation-for-android-kernels)**
### 作者
* Zhengzi Xu, Nanyang Technological University
* Yulong Zhang, Baidu X-Lab
* Longri Zheng, Baidu X-Lab
* Liangzhao Xia, Baidu X-Lab
* Chenfu Bao, Baidu X-Lab
* Zhi Wang, Florida State University
* Yang Liu, Nanyang Technological University
### 摘要
> Android生态系统的快速增长导致了碎片化的问题，市场上存在着广泛的（定制的）Android操作系统版本。这对于Android厂商来说是一个严重的安全问题，因为他们要及时修复其定制的Android内核中的漏洞非常昂贵。最近发展起来的热修补技术为解决这个问题提供了理想的解决方案，因为它可以应用于各种Android内核，而不会影响其正常功能。然而，目前的热修补是由人类专家编写的，可能耗时且容易出错。
> 
> 为此，我们首先研究了从2012年到2016年间的373个Android内核CVE的自动补丁生成的可行性。然后，我们开发了一个自动热修补生成工具，名为VULMET，它通过从官方补丁中学习来生成语义保持的热修补。VULMET的关键思想是使用最弱前置条件推理将官方补丁所做的更改转换为热修补的约束条件。实验表明，VULMET可以为55个真实世界的Android内核CVE生成正确的热修补。这些热修补不会影响内核的稳固性，并且性能开销很低。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/xu](https://www.usenix.org/conference/usenixsecurity20/presentation/xu)
- **PDF:** [https://www.usenix.org/system/files/sec20-xu.pdf](https://www.usenix.org/system/files/sec20-xu.pdf)
## iOS, Your OS, Everybody's OS: Vetting and Analyzing Network Services of iOS Applications.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#ios-your-os-everybodys-os-vetting-and-analyzing-network-services-of-ios-applications) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#ios-your-os-everybodys-os-vetting-and-analyzing-network-services-of-ios-applications)**
### 作者
* Zhushou Tang, Shanghai Jiao Tong University and PWNZEN InfoTech Co., LTD
* Ke Tang, Shanghai Jiao Tong University
* Minhui Xue, The University of Adelaide
* Yuan Tian, University of Virginia
* Sen Chen, Nanyang Technological University
* Muhammad Ikram, Macquarie University
* Tielei Wang, PWNZEN InfoTech Co., LTD
* Haojin Zhu, Shanghai Jiao Tong University
### 摘要
> 智能手机应用程序监听网络连接会给用户带来重大的安全和隐私威胁。本文重点关注iOS应用程序网络服务的审核和分析安全性。为此，我们开发了一个高效可扩展的iOS应用程序收集工具，下载了168,951个野外iOS应用程序。我们研究了一组1,300个应用程序，以了解网络服务漏洞的特征，并确认了一些流行应用程序（如Waze、Now和QQBrowser）中的11个漏洞。根据这些漏洞，我们为168,951个iOS应用程序进行了大规模分析，发现在92个应用程序中，使用某些第三方库监听远程连接是脆弱网络服务的常见来源。这些漏洞使iOS设备面临各种可能的攻击，包括数据泄漏、远程命令执行和拒绝服务攻击。我们已经公开披露了已识别的漏洞，并收到了厂商的确认。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/tang](https://www.usenix.org/conference/usenixsecurity20/presentation/tang)
- **PDF:** [https://www.usenix.org/system/files/sec20-tang.pdf](https://www.usenix.org/system/files/sec20-tang.pdf)
## SEAL: Attack Mitigation for Encrypted Databases via Adjustable Leakage.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#seal-attack-mitigation-for-encrypted-databases-via-adjustable-leakage) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#seal-attack-mitigation-for-encrypted-databases-via-adjustable-leakage)**
### 作者
* Ioannis Demertzis, University of Maryland
* Dimitrios Papadopoulos, Hong Kong University of Science and Technology
* Charalampos Papamanthou, University of Maryland
* Saurabh Shintre, NortonLifeLock Research Group
### 摘要
> 建立具有形式安全保证的表达性加密数据库，能够扩展到大量数据是安全和密码学研究中的一项重要目标。可搜索加密（SE）被认为是实现这一目标的一种有吸引力的选择：它自然地支持基本的数据库查询，如点查询、连接、分组和范围查询，并且在实践中非常实用，但会泄漏一些定义良好的信息，例如搜索和访问模式。然而，最近的攻击利用这些泄漏来恢复明文数据库或提出的查询，使得人们对可搜索加密在加密系统中的有效性产生了怀疑。针对此类信息泄漏攻击的防御通常需要使用匿名RAM或最坏情况填充等对策，但这些对策实际上是不切实际的。为了高效地防御基于可搜索加密的系统中的信息泄漏攻击，我们提出了SEAL，这是一系列具有可调节泄漏的新SE方案。在SEAL中，隐私损失的数量以泄漏的搜索或访问模式的位数来表示，并且可以在设置过程中定义。正如我们的实验证明的那样，当只保护少量泄漏位数（例如，三到四位的访问模式）时，足以使得现有的甚至是新的更激进的攻击失败，SEAL的查询执行时间在实际应用中是可接受的（与传统SE-based加密数据库相比，仅有一到两个数量级的减速）。因此，SEAL可能是构建高效和强大的加密数据库的有希望的方法。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/demertzis](https://www.usenix.org/conference/usenixsecurity20/presentation/demertzis)
- **PDF:** [https://www.usenix.org/system/files/sec20-demertzis.pdf](https://www.usenix.org/system/files/sec20-demertzis.pdf)
## Pancake: Frequency Smoothing for Encrypted Data Stores.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#pancake-frequency-smoothing-for-encrypted-data-stores) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#pancake-frequency-smoothing-for-encrypted-data-stores)**
### 作者
* Paul Grubbs, Cornell Tech
* Anurag Kh, Yale University
* elwal, Yale University
* Marie-Sarah Lacharité, Royal Holloway, University of London
* Lloyd Brown, University of California, Berkeley
* Lucy Li, Cornell Tech
* Rachit Agarwal, Cornell University
* Thomas Ristenpart, Cornell Tech
### 摘要
> 我们提出了PANCAKE，这是第一个通过小的常数带宽开销来保护键值存储免受访问模式泄漏攻击的系统。PANCAKE使用一种称为频率平滑的新方法，将明文访问转换为均匀分布的加密访问，并存储到加密的数据存储中。我们展示了频率平滑通过被动持久敌手攻击的新形式安全模型来防止访问模式泄漏攻击。我们将PANCAKE集成到三个在生产集群中使用的键值存储中，并展示了它的实用性：在标准基准测试中，PANCAKE的吞吐量比非递归路径ORAM高出229倍，与这些键值存储的不安全基线相比仅为3-6倍。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/grubbs](https://www.usenix.org/conference/usenixsecurity20/presentation/grubbs)
- **PDF:** [https://www.usenix.org/system/files/sec20-grubbs.pdf](https://www.usenix.org/system/files/sec20-grubbs.pdf)
## Droplet: Decentralized Authorization and Access Control for Encrypted Data Streams.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#droplet-decentralized-authorization-and-access-control-for-encrypted-data-streams) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#droplet-decentralized-authorization-and-access-control-for-encrypted-data-streams)**
### 作者
* Hossein Shafagh, ETH Zurich
* Lukas Burkhalter, ETH Zurich
* Sylvia Ratnasamy, UC Berkeley
* Anwar Hithnawi, ETH Zurich & UC Berkeley
### 摘要
> 本文介绍了Droplet，一种分散式数据访问控制服务。Droplet使数据所有者能够安全有选择地共享其加密数据，并在未经授权的参与者和受损数据服务器存在的情况下保证数据保密性。Droplet的贡献在于将两个关键思想相结合：(i)对加密数据流进行密码学强制访问控制构建，使用户能够定义细粒度的流特定访问策略；(ii)提供分散式授权服务，为用户定义的访问策略提供服务。在本文中，我们介绍了Droplet的设计、Droplet的参考实施，并结合Droplet部署的三个案例研究应用（Fitbit活动追踪器、Ava健康追踪器和ECOviz智能电表仪表板）的实验结果，展示了Droplet在安全共享物联网数据流方面的适用性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/shafagh](https://www.usenix.org/conference/usenixsecurity20/presentation/shafagh)
- **PDF:** [https://www.usenix.org/system/files/sec20-shafagh.pdf](https://www.usenix.org/system/files/sec20-shafagh.pdf)
## Secure parallel computation on national scale volumes of data.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#secure-parallel-computation-on-national-scale-volumes-of-data) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#secure-parallel-computation-on-national-scale-volumes-of-data)**
### 作者
* Sahar Mazloom, George Mason University
* Phi Hung Le, George Mason University
* Samuel Ranellucci, Unbound Tech
* S. Dov Gordon, George Mason University
### 摘要
> 我们重新审视了进行图平行算法的安全计算问题，重点关注安全外包矩阵分解和直方图的应用。利用最近在低通信安全多方计算方面的成果以及一种安全松弛，允许计算服务器了解有关用户输入的一些差分私有泄漏信息，我们构建了一个新的协议，将总运行时间减少了320倍，AES调用次数减少了750倍，并将总通信量减少了200倍。我们的系统可以在约4分钟内对3亿个项目进行安全直方图计算，并可以在约6分钟内执行稀疏矩阵分解，这在推荐系统中常用。此外，与之前的工作相比，我们的系统对抗恶意对抗者（受到计算服务器之一的破坏）具有安全性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/mazloom](https://www.usenix.org/conference/usenixsecurity20/presentation/mazloom)
- **PDF:** [https://www.usenix.org/system/files/sec20-mazloom.pdf](https://www.usenix.org/system/files/sec20-mazloom.pdf)
## Delphi: A Cryptographic Inference Service for Neural Networks.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#delphi-a-cryptographic-inference-service-for-neural-networks) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#delphi-a-cryptographic-inference-service-for-neural-networks)**
### 作者
* Pratyush Mishra, UC Berkeley
* Ryan Lehmkuhl, UC Berkeley
* Akshayaram Srinivasan, UC Berkeley
* Wenting Zheng, UC Berkeley
* Raluca Ada Popa, UC Berkeley
### 摘要
> 许多公司为用户提供神经网络预测服务，应用范围广泛。然而，现有的预测系统会损害一方的隐私：用户必须将敏感输入发送给服务提供商以进行分类，或者服务提供商必须将其专有的神经网络存储在用户设备上。前者损害用户的个人隐私，而后者则揭示了服务提供商的专有模型。
> 
> 我们设计、实现和评估了Delphi，这是一个安全的预测系统，允许两个参与方在不泄露任何一方数据的情况下运行神经网络推理。Delphi通过同时共同设计密码学和机器学习来解决这个问题。我们首先设计了一个混合加密协议，改进了之前工作中的通信和计算成本。其次，我们开发了一个规划器，自动生成神经网络架构配置，以在我们的混合协议的性能和准确性之间进行权衡。这些技术共同使我们实现了与最先进的先前工作相比预测延迟提高了22倍的效果。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/mishra](https://www.usenix.org/conference/usenixsecurity20/presentation/mishra)
- **PDF:** [https://www.usenix.org/system/files/sec20-mishra_0.pdf](https://www.usenix.org/system/files/sec20-mishra_0.pdf)
## Analysis of DTLS Implementations Using Protocol State Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#analysis-of-dtls-implementations-using-protocol-state-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#analysis-of-dtls-implementations-using-protocol-state-fuzzing)**
### 作者
* Paul Fiterau-Brostean, Uppsala University
* Bengt Jonsson, Uppsala University
* Robert Merget, Ruhr-University Bochum
* Joeri de Ruiter, SIDN Labs
* Konstantinos Sagonas, Uppsala University
* Juraj Somorovsky, Paderborn University
### 摘要
> 近年来，越来越多的协议依赖于UDP。与TCP相比，UDP在性能上具有简单性和较低的延迟优势。这促使其在VoIP、隧道技术、物联网和新型Web协议中得到采用。为了保护这些场景中的敏感数据交换，已经开发了DTLS协议作为TLS的加密变种。DTLS的主要挑战是支持UDP的无状态和不可靠传输。这迫使协议设计者需做出影响DTLS复杂性的选择，并融入一些在众多TLS分析中不需要解决的特性。
> 
> 我们提出了使用协议状态模糊测试对DTLS实现进行第一次全面分析。为此，我们扩展了TLS-Attacker，这是一个用于分析TLS实现的开源框架，以支持针对底层UDP层的无状态和不可靠性的DTLS。我们构建了一个框架，用于在DTLS服务器上应用协议状态模糊测试，并使用它学习了13个DTLS实现的状态机模型。对学习到的状态模型的分析揭示了四个严重的安全漏洞，包括在最新版本的JSSE中完全客户端身份验证绕过，以及若干功能错误和不符合问题。它还揭示了模型之间的显著差异，进一步验证了DTLS状态机的复杂性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/fiterau-brostean](https://www.usenix.org/conference/usenixsecurity20/presentation/fiterau-brostean)
- **PDF:** [https://www.usenix.org/system/files/sec20-fiterau-brostean.pdf](https://www.usenix.org/system/files/sec20-fiterau-brostean.pdf)
## Agamotto: Accelerating Kernel Driver Fuzzing with Lightweight Virtual Machine Checkpoints.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#agamotto-accelerating-kernel-driver-fuzzing-with-lightweight-virtual-machine-checkpoints) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#agamotto-accelerating-kernel-driver-fuzzing-with-lightweight-virtual-machine-checkpoints)**
### 作者
* Dokyung Song, University of California, Irvine
* Felicitas Hetzelt, Technische Universität Berlin
* Jonghwan Kim, KAIST
* Brent Byunghoon Kang, KAIST
* Jean-Pierre Seifert, Technische Universität Berlin
* Michael Franz, University of California, Irvine
### 摘要
> 内核模式驱动程序在漏洞分析方面具有挑战性，但在维护操作系统内核安全方面发挥着关键作用。它们的广泛攻击面通过系统调用接口和外围接口公开，通常被发现是入侵操作系统内核的最直接攻击向量。因此，研究人员提出了许多模糊测试技术来发现内核驱动程序中的漏洞。然而，内核模糊测试工具的性能仍然不足，原因包括内核代码的长时间执行、测试输入之间的干扰以及内核崩溃等。
> 
> 本文提出了轻量级虚拟机检查点作为一种新的基本操作，以实现高吞吐量的内核驱动程序模糊测试。我们的关键洞察是，内核驱动程序模糊测试工具经常连续执行相似的测试用例，并且通过在执行测试用例时动态创建多个检查点并跳过测试用例的部分操作，可以提高它们的性能。我们建立了一个名为Agamotto的系统，围绕虚拟机检查点基本操作进行了评估，并在Linux中模糊测试了USB和PCI驱动程序的外围攻击面。结果令人信服。Agamotto在模糊测试8个USB驱动程序方面，使最新的内核模糊测试工具Syzkaller的性能平均提高了66.6%，在模糊测试4个PCI驱动程序方面，使基于AFL的PCI模糊测试工具的性能提高了21.6%，而无需修改它们的底层输入生成算法。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/song](https://www.usenix.org/conference/usenixsecurity20/presentation/song)
- **PDF:** [https://www.usenix.org/system/files/sec20-song.pdf](https://www.usenix.org/system/files/sec20-song.pdf)
## USBFuzz: A Framework for Fuzzing USB Drivers by Device Emulation.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#usbfuzz-a-framework-for-fuzzing-usb-drivers-by-device-emulation) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#usbfuzz-a-framework-for-fuzzing-usb-drivers-by-device-emulation)**
### 作者
* Hui Peng, Purdue University
* Mathias Payer, EPFL
### 摘要
> 通用串行总线（USB）将外部设备连接到主机。这个接口使操作系统内核和设备驱动程序容易受到恶意设备的攻击。不幸的是，驱动程序是在一种隐含信任连接设备的安全模型下开发的。驱动程序期望有故障的硬件，但不期望有恶意攻击。同样，对驱动程序进行安全测试是具有挑战性的，因为输入必须跨越硬件/软件界限。决策，最常用的错误发现技术，依赖于为程序提供随机数据。然而，由于跨越硬件/软件界限并为测试驱动程序提供随机设备数据的困难，对设备驱动程序进行决策是具有挑战性的。
> 
> 我们提出了USBFuzz，这是一个便携、灵活和模块化的USB驱动程序决策测试框架。USBFuzz的核心是使用软件模拟的USB设备为驱动程序（在它们执行IO操作时）提供随机设备数据。由于模拟的USB设备在设备级别上工作，将其移植到其他平台是直接的。使用USBFuzz框架，我们将(i)覆盖引导的决策应用于Linux内核中的广泛范围的USB驱动程序；(ii)在FreeBSD、MacOS和Windows中进行随机决策，通过由Linux输入所引发的交叉污染；(iii)对USB摄像头驱动程序进行有目的的决策。USBFuzz共发现了26个新错误，包括在各个Linux子系统（USB核心、USB音频和网络）中具有高安全影响的16个内存错误，一个FreeBSD错误，三个MacOS错误（其中两个导致计划外重启，一个导致系统冻结），以及四个Windows 8和Windows 10中的错误（导致蓝屏死机），以及Linux USB主机控制器驱动程序中的一个错误以及USB相机驱动程序中的另一个错误。其中，我们已经修复并上游了11个Linux错误，并获得了10个CVE编号。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/peng](https://www.usenix.org/conference/usenixsecurity20/presentation/peng)
- **PDF:** [https://www.usenix.org/system/files/sec20-peng_0.pdf](https://www.usenix.org/system/files/sec20-peng_0.pdf)
## GREYONE: Data Flow Sensitive Fuzzing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#greyone-data-flow-sensitive-fuzzing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#greyone-data-flow-sensitive-fuzzing)**
### 作者
* Shuitao Gan, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Chao Zhang, Institute for Network Sciences and Cyberspace of Tsinghua University; Beijing National Research Center for Information Science and Technology
* Peng Chen, ByteDance Inc.
* Bodong Zhao, Institute for Network Science and Cyberspace, Tsinghua University
* Xiaojun Qin, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Dong Wu, State Key Laboratory of Mathematical Engineering and Advanced Computing
* Zuoning Chen, National Research Center of Parallel Computer Engineering and Technology
### 摘要
> 数据流分析（例如，动态污点分析）已被证明对引导模糊测试器探索难以到达的代码和发现漏洞很有用。然而，传统的污点分析工作量大、准确性低且速度慢，影响了模糊测试的效率。除了污点之外，几乎没有使用其他数据流特性。
> 
> 在本文中，我们提出了一种数据流敏感的模糊测试解决方案GREYONE。我们首先利用经典的污点特性来引导模糊测试。采用了一种轻量级且准确的模糊测试驱动污点推断（FTI）来推断变量的污点，通过在模糊测试过程中监控它们的值变化来变异输入字节。基于污点，我们提出了一种新颖的输入优先级模型来确定探索哪个分支，如何变异以及变异哪些字节。此外，我们还利用了另一个数据流特性即约束一致性（constraint conformance），即污点变量与未受影响分支中预期值的距离，来调整模糊测试的演化方向。
> 
> 我们实现了GREYONE的原型，并在LAVA数据集和19个真实世界程序上进行了评估。结果显示，在代码覆盖率和漏洞发现方面，它优于各种最先进的模糊测试器。在LAVA数据集中，GREYONE发现了所有列出的漏洞以及336个未列出的漏洞。在真实世界的程序中，GREYONE平均找到了2.12倍的独特程序路径和3.09倍的独特漏洞，超过了包括AFL、VUzzer、CollAFL、Angora和Honggfuzz在内的最先进的进化模糊测试工具。此外，GREYONE平均找到了1.2倍的独特程序路径和1.52倍的独特漏洞，超过了最先进的符号执行辅助模糊测试工具QSYM。总共发现了105个新的安全漏洞，其中41个已被CVE确认。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/gan](https://www.usenix.org/conference/usenixsecurity20/presentation/gan)
- **PDF:** [https://www.usenix.org/system/files/sec20-gan.pdf](https://www.usenix.org/system/files/sec20-gan.pdf)
## Fuzzing Error Handling Code using Context-Sensitive Software Fault Injection.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fuzzing-error-handling-code-using-context-sensitive-software-fault-injection) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#fuzzing-error-handling-code-using-context-sensitive-software-fault-injection)**
### 作者
* Zu-Ming Jiang, Tsinghua University
* Jia-Ju Bai, Tsinghua University
* Kangjie Lu, University of Minnesota
* Shi-Min Hu, Tsinghua University
### 摘要
> 错误处理代码通常是关键但难以在实际中进行测试的。因此，在错误处理代码中存在许多难以发现的错误，一旦触发，可能会引起严重的安全问题。模糊测试现已成为一种广泛使用的软件错误查找技术。模糊测试方法会改变和/或生成各种输入以覆盖不经常执行的代码。然而，现有的模糊测试方法在测试错误处理代码方面非常有限，因为其中一部分代码只能被偶尔出现的错误（如内存不足和网络连接失败）触发，而不是特定的输入。因此，现有的模糊测试方法通常不能有效地测试这种错误处理代码。
> 
> 在本文中，我们提出了一个名为FIFUZZ的新的模糊测试框架，以有效地测试错误处理代码并检测错误。FIFUZZ的核心是一种上下文敏感的软件故障注入（SFI）方法，它可以有效地覆盖不同调用上下文中的错误处理代码，以找到隐藏在复杂上下文中的错误处理代码中的深层错误。我们已经实现了FIFUZZ，并在9个广泛使用的C程序上进行了评估。它报告了317个警报，其中包含50个独特的错误作为根本原因。其中32个错误已经得到相关开发人员的确认。我们还将FIFUZZ与现有的模糊测试工具（包括AFL、AFLFast、AFLSmart和FairFuzz）进行了比较，并发现FIFUZZ找到了这些工具所错过的许多错误。我们相信，FIFUZZ可以有效地增强现有的模糊测试方法，以发现许多以前被忽视的真实错误。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/jiang](https://www.usenix.org/conference/usenixsecurity20/presentation/jiang)
- **PDF:** [https://www.usenix.org/system/files/sec20-jiang.pdf](https://www.usenix.org/system/files/sec20-jiang.pdf)
## Montage: A Neural Network Language Model-Guided JavaScript Engine Fuzzer.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#montage-a-neural-network-language-model-guided-javascript-engine-fuzzer) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#montage-a-neural-network-language-model-guided-javascript-engine-fuzzer)**
### 作者
* Suyoung Lee, KAIST
* HyungSeok Han, KAIST
* Sang Kil Cha, KAIST
* Sooel Son, KAIST
### 摘要
> JavaScript（JS）引擎的漏洞对数十亿个Web浏览器构成了重大安全威胁。尽管模糊测试是一种常见的发现此类漏洞的技术，但是在利用最近的神经网络语言模型（NNLMs）的研究中还很少见。在本文中，我们提出了Montage，这是第一个由NNLM引导的用于发现JS引擎漏洞的模糊测试工具。我们技术的关键方面是将JS抽象语法树（AST）转换为AST子树序列，以直接训练现有的NNLM。我们证明Montage能够生成有效的JS测试，并且显示在找到漏洞方面优于以前的研究。Montage在最新的JS引擎中找到了37个真实世界的漏洞，包括三个CVE漏洞，证明了它在发现JS引擎漏洞方面的有效性。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/lee-suyoung](https://www.usenix.org/conference/usenixsecurity20/presentation/lee-suyoung)
- **PDF:** [https://www.usenix.org/system/files/sec20-lee-suyoung.pdf](https://www.usenix.org/system/files/sec20-lee-suyoung.pdf)
## Light Commands: Laser-Based Audio Injection Attacks on Voice-Controllable Systems.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#light-commands-laser-based-audio-injection-attacks-on-voice-controllable-systems) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#light-commands-laser-based-audio-injection-attacks-on-voice-controllable-systems)**
### 作者
* Takeshi Sugawara, The University of Electro-Communications
* Benjamin Cyr, University of Michigan
* Sara Rampazzi, University of Michigan
* Daniel Genkin, University of Michigan
* Kevin Fu, University of Michigan
### 摘要
> 我们提出了一种新的信号注入攻击微型麦克风的方法，通过物理转换光到声音。我们展示了攻击者如何通过将调幅光瞄准麦克风口来向目标麦克风注入任意音频信号。然后，我们展示了这种效果如何导致远程语音命令注入攻击声控系统。通过检查使用亚马逊的Alexa、苹果的Siri、Facebook的Portal和谷歌助手的各种产品，我们展示了如何利用光线在距离高达110米，以及来自两个不同建筑物的位置获得对这些设备的控制。接下来，我们展示了这些设备上的用户身份验证通常存在缺陷，使得攻击者可以使用注入光音命令来解锁目标受智能锁保护的前门、打开车库门、在目标的费用下在电子商务网站上购物，甚至解锁和启动与目标的谷歌账户连接的各种车辆（例如特斯拉和福特）。最后，我们总结了可能的软件和硬件防御措施来防御我们的攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/sugawara](https://www.usenix.org/conference/usenixsecurity20/presentation/sugawara)
- **PDF:** [https://www.usenix.org/system/files/sec20-sugawara.pdf](https://www.usenix.org/system/files/sec20-sugawara.pdf)
## SkillExplorer: Understanding the Behavior of Skills in Large Scale.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#skillexplorer-understanding-the-behavior-of-skills-in-large-scale) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#skillexplorer-understanding-the-behavior-of-skills-in-large-scale)**
### 作者
* Zhixiu Guo, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Zijin Lin, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Pan Li, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
* Kai Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, China; School of Cyber Security, University of Chinese Academy of Sciences, China
### 摘要
> 近年来，智能音箱在全球范围内广受使用，主要是因为虚拟个人助手（VPA）带来的便利性，通过用户方便的语音命令提供互动功能。除了内置功能外，第三方开发者还可以通过技能进一步扩展VPA服务。与Android和iOS应用市场上的智能手机应用类似，技能也可以在市场上（如亚马逊、谷歌）获取，吸引用户，同时也吸引了一些恶意开发者。最近的研究发现，恶意开发者可以通过创建与合法技能相似名称的技能，未经用户许可将用户的请求导向恶意技能。然而，据我们所知，目前尚无系统研究探索技能的交互行为，主要是由于处理技能的自然语言输入/输出所面临的挑战。本文提出了第一个关于技能行为的系统性研究，通过一系列基于语法的新技术，包括语句提取、问题理解和答案生成，专门为技能设计。我们构建了一个名为SkillExplorer的交互式系统，并分析了亚马逊市场的28,904个技能和谷歌市场的1,897个动作。在这些技能中，我们发现有1,141个技能在没有遵循开发者规范的情况下请求用户的私人信息，而这些信息实际上是市场要求的。68个技能即使在用户发送停止命令之后仍继续窃听用户的私人对话。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/guo](https://www.usenix.org/conference/usenixsecurity20/presentation/guo)
- **PDF:** [https://www.usenix.org/system/files/sec20-guo.pdf](https://www.usenix.org/system/files/sec20-guo.pdf)
## Devil's Whisper: A General Approach for Physical Adversarial Attacks against Commercial Black-box Speech Recognition Devices.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#devils-whisper-a-general-approach-for-physical-adversarial-attacks-against-commercial-black-box-speech-recognition-devices) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#devils-whisper-a-general-approach-for-physical-adversarial-attacks-against-commercial-black-box-speech-recognition-devices)**
### 作者
* Yuxuan Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences; Department of Computer Science, Florida Institute of Technology
* Xuejing Yuan, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
* Jiangshan Zhang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
* Yue Zhao, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
* Shengzhi Zhang, Department of Computer Science, Metropolitan College, Boston University, USA
* Kai Chen, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences; School of Cyber Security, University of Chinese Academy of Sciences
* XiaoFeng Wang, School of Informatics and Computing, Indiana University Bloomington
### 摘要
> 最近的研究表明，当机器学习模型遭受对手攻击时，对"白盒"自动语音识别（ASR）系统来说，对抗性例子（AEs）可能构成严重威胁。然而，商用设备（如Google Home，Cortana，Echo等）的模型并不公开，因此这种威胁对于这些设备来说是否真实尚不清楚。在黑盒子的情况下利用ASR系统背后的学习模型是具有挑战性的，因为在AEs达到模型之前，存在复杂的预处理和特征提取。然而，我们的研究表明这种黑盒攻击是现实的。在本论文中，我们介绍了"Devil's Whisper"，这是一种针对商用ASR系统的通用对抗性攻击。我们的想法是通过一个粗略近似目标黑盒平台的白盒模型增强一个简单的本地模型，这个白盒模型更高级但与目标无关。我们发现这两个模型在预测目标行为方面可以相互有效补充，从而能够对目标进行高度可转移和通用的攻击。使用一种新颖的优化技术，我们展示了只利用1500多个查询构建的本地模型可以通过开源的Kaldi Aspire Chain模型有效地利用商用设备（Google Assistant，Google Home，Amazon Echo和Microsoft Cortana）。对于这些设备的目标指令的98％，我们的方法可以生成至少一个AE来攻击目标设备。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/chen-yuxuan](https://www.usenix.org/conference/usenixsecurity20/presentation/chen-yuxuan)
- **PDF:** [https://www.usenix.org/system/files/sec20-chen-yuxuan.pdf](https://www.usenix.org/system/files/sec20-chen-yuxuan.pdf)
## Void: A fast and light voice liveness detection system.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#void-a-fast-and-light-voice-liveness-detection-system) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#void-a-fast-and-light-voice-liveness-detection-system)**
### 作者
* Muhammad Ejaz Ahmed, Data61, CSIRO
* Il-Youp Kwak, Chung-Ang University
* Jun Ho Huh, Samsung Research
* Iljoo Kim, Samsung Research
* Taekkyung Oh, KAIST and Sungkyunkwan University
* Hyoungshick Kim, Sungkyunkwan University
### 摘要
> 由于语音助手输入通道的开放性，对手可以轻易地记录人们使用语音命令的过程，并将其重播以欺骗语音助手。为了减轻此类欺骗攻击，我们提出了一种高效的语音活体检测解决方案，称为“Void”。Void通过检测真人语音和通过扬声器重放的语音之间的谱功率差异来检测语音欺骗攻击。与使用多个深度学习模型和成千上万个特征的现有方法不同，Void仅使用一个分类模型，具有仅97个特征。
> 
> 我们使用了两个数据集来评估其性能：（1）由120个参与者、15个播放设备和12个录音设备生成的255,173个声音样本，以及（2）由42个参与者、26个播放设备和25个录音设备生成的18,030个公开可用的声音样本。Void在每个数据集中检测语音重播攻击的等错误率分别为0.3%和11.6%。与在该公开数据集中实现7.4%错误率的最先进的基于深度学习的解决方案相比，Void在检测方面使用的内存减少了153倍，速度提高了约8倍。当与一个使用Mel频率倒谱系数（MFCC）作为分类特征的高斯混合模型相结合时——MFCC已经被提取和用作语音识别服务的主要特征——Void在公开数据集上的错误率为8.7%。此外，Void对隐藏语音指令、不可听的语音指令、语音合成、均衡处理攻击以及将重播攻击与真人语音相结合的攻击具有鲁棒性，分别实现了约99.7%，100%，90.2%，86.3%和98.2%的检测率。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/ahmed-muhammad](https://www.usenix.org/conference/usenixsecurity20/presentation/ahmed-muhammad)
- **PDF:** [https://www.usenix.org/system/files/sec20-ahmed-muhammad_0.pdf](https://www.usenix.org/system/files/sec20-ahmed-muhammad_0.pdf)
## Preech: A System for Privacy-Preserving Speech Transcription.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#preech-a-system-for-privacy-preserving-speech-transcription) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#preech-a-system-for-privacy-preserving-speech-transcription)**
### 作者
* Shimaa Ahmed, University of Wisconsin—Madison
* Amrita Roy Chowdhury, University of Wisconsin—Madison
* Kassem Fawaz, University of Wisconsin—Madison
* Parmesh Ramanathan, University of Wisconsin—Madison
### 摘要
> 机器学习的新进展使得自动语音识别（ASR）系统变得实用且可扩展。然而，这些系统带来了严重的隐私威胁，因为语音是敏感的声学和文本信息的丰富来源。虽然离线和开源的ASR消除了隐私风险，但其转录性能相对于云端ASR系统仍存在不足，特别是对于实际应用案例。在本文中，我们提出了Prεεch，一种端到端的语音转录系统，处于隐私效用谱的中间点。它保护演讲者声学特征的同时，相对于离线ASR提供了更好的转录性能。此外，Prεεch提供了几个控制开关，可允许个性化的效用-可用性-隐私权衡。它依赖云端服务，在用户端应用一系列保护隐私的操作后进行语音文件的转录。我们使用多样化的真实世界数据集对Prεεch进行了全面评估，证明了其有效性。Prεεch相对于Deep Speech，在词错误率上提供了2%至32.25%（平均为17.34%）的相对改善，并完全模糊化演讲者的声音生物特征，仅允许对文本内容进行差分隐私保护的查看。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/ahmed-shimaa](https://www.usenix.org/conference/usenixsecurity20/presentation/ahmed-shimaa)
- **PDF:** [https://www.usenix.org/system/files/sec20-ahmed-shimaa.pdf](https://www.usenix.org/system/files/sec20-ahmed-shimaa.pdf)
## BlockSci: Design and applications of a blockchain analysis platform.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#blocksci-design-and-applications-of-a-blockchain-analysis-platform) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#blocksci-design-and-applications-of-a-blockchain-analysis-platform)**
### 作者
* Harry Kalodner, Princeton University
* Malte Möser, Princeton University
* Kevin Lee, Princeton University
* Steven Goldfeder, Cornell Tech
* Martin Plattner, University of Innsbruck
* Alishah Chator, Johns Hopkins University
* Arvind Narayanan, Princeton University
### 摘要
> 区块链数据分析对于科学研究和商业应用都非常有用。我们介绍了一种名为BlockSci的开源软件平台，用于进行区块链分析。BlockSci支持不同区块链和不同的分析任务，非常灵活。它采用了内存中的分析型数据库，相比使用通用图数据库，速度快了许多个数量级。我们描述了BlockSci的设计，并展示了四种分析方法，以展示其在加密货币的安全性、隐私性和经济学方面的能力。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/kalodner](https://www.usenix.org/conference/usenixsecurity20/presentation/kalodner)
- **PDF:** [https://www.usenix.org/system/files/sec20-kalodner.pdf](https://www.usenix.org/system/files/sec20-kalodner.pdf)
## Remote Side-Channel Attacks on Anonymous Transactions.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#remote-side-channel-attacks-on-anonymous-transactions) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#remote-side-channel-attacks-on-anonymous-transactions)**
### 作者
* Florian Tramer, Stanford University
* Dan Boneh, Stanford University
* Kenny Paterson, ETH Zurich
### 摘要
> 隐私保护的加密货币（例如Zcash或Monero）旨在为交易的机密性和不可连接性提供强大的密码保证。在本文中，我们描述了一种旁路攻击，能够让远程对手绕过这些保护措施。
> 
> 我们提出了一类针对接收者隐私的定时旁路攻击和流量分析攻击。这些攻击使得一个主动的远程对手能够识别出Zcash或Monero中任何交易的（秘密的）收款人。这些攻击利用了不同系统组件的实现泄露的旁路信息，违反了这些加密货币的隐私目标。具体而言，我们展示了一个远程方将用户的P2P节点对某些请求的响应时间进行测量后，就可以将所有向该用户发送资金的交易联系起来。由于时间差异足够大，这些攻击可以通过广域网远程进行。我们已经负责地向受影响的项目披露了这些问题，并且他们已经修补了漏洞。
> 
> 我们进一步研究了这些加密货币中用于零知识证明系统的时序旁路渠道的影响。我们观察到，在Zcash的实现中，生成零知识证明的时间取决于秘密交易数据，尤其是交易资金的金额。因此，能够测量证明生成时间的对手可以破坏交易的机密性，尽管证明系统具有零知识属性。
> 
> 我们的攻击突显了匿名加密货币中旁路泄漏的危险，以及系统性地保护它们免受此类攻击的需求。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/tramer](https://www.usenix.org/conference/usenixsecurity20/presentation/tramer)
- **PDF:** [https://www.usenix.org/system/files/sec20-tramer.pdf](https://www.usenix.org/system/files/sec20-tramer.pdf)
## ETHBMC: A Bounded Model Checker for Smart Contracts.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#ethbmc-a-bounded-model-checker-for-smart-contracts) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#ethbmc-a-bounded-model-checker-for-smart-contracts)**
### 作者
* Joel Frank, Ruhr-University Bochum
* Cornelius Aschermann, Ruhr-University Bochum
* Thorsten Holz, Ruhr-University Bochum
### 摘要
> 智能合约的引入大大推进了加密货币技术的发展。智能合约是生活在区块链上的程序，用于管理资金流动。然而，由于可以获得经济利益的承诺，吸引了不法分子，导致了一系列令人瞩目的黑客攻击，损失了数百万价值的货币。为了应对这些问题，开发了几种强大的静态分析工具。我们对八种最近提出的用于以太坊智能合约的静态分析工具进行了调查，并发现它们中没有一种涵盖了以太坊生态系统的所有相关特性。例如，我们发现缺少精确的内存模型，并且只部分支持合约间分析。
> 
> 基于这些发现，我们提出了一种基于符号执行的有界模型检查器的设计和实现，该检查器提供了对以太坊网络的精确模型。我们通过一系列实验展示了它的能力。首先，我们与前述的八种工具进行比较，结果显示即使是相对简单的示例也可以阻碍其他分析器。通过进一步证明精确建模的重要性，我们利用ETHBmc的功能进行自动漏洞扫描。我们对当前在区块链上活跃的大约220万个账户进行了大规模分析，并自动生成了5905个有效输入来触发漏洞。其中，1989个可以任意销毁合约（所谓的自杀合约），其余的可以被对手任意提取资金。最后，我们将我们的大规模分析与两次先前分析进行比较，发现比先前的方法多找到了22.8%的输入。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/frank](https://www.usenix.org/conference/usenixsecurity20/presentation/frank)
- **PDF:** [https://www.usenix.org/system/files/sec20-frank.pdf](https://www.usenix.org/system/files/sec20-frank.pdf)
## TXSPECTOR: Uncovering Attacks in Ethereum from Transactions.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#txspector-uncovering-attacks-in-ethereum-from-transactions) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#txspector-uncovering-attacks-in-ethereum-from-transactions)**
### 作者
* Mengya Zhang, The Ohio State University
* Xiaokuan Zhang, The Ohio State University
* Yinqian Zhang, The Ohio State University
* Zhiqiang Lin, The Ohio State University
### 摘要
> 以太坊智能合约的发明使区块链用户能够在交易中自定义计算逻辑。然而，与传统计算机程序类似，智能合约存在漏洞，可以被利用以导致合约所有者蒙受财务损失。虽然有许多用于检测智能合约字节码中漏洞的软件工具，但很少有工具专注于交易。在本文中，我们提出了一个名为TXSPECTOR的通用、逻辑驱动的框架，用于检测以太坊交易中的攻击。在高层次上，TXSPECTOR会重放历史交易并记录EVM字节码级别的跟踪，并将控制和数据依赖关系编码为逻辑关系。与设置预定义功能的方式不同，TXSPECTOR允许用户指定自定义规则，以揭示交易中各种类型的攻击。我们已经构建了TXSPECTOR的原型，并对其进行了评估，以检测利用以下三种以太坊攻击的攻击：（i）重入漏洞，（ii）未经检查的调用漏洞，以及（iii）自杀漏洞。结果表明，TXSPECTOR能够有效地检测交易中的攻击，并能作为副产品检测出智能合约中相应的漏洞。我们还展示了TXSPECTOR如何用于交易的取证分析，并提出了检测规则，用于检测除三种以太坊攻击之外的其他类型攻击。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zhang-mengya](https://www.usenix.org/conference/usenixsecurity20/presentation/zhang-mengya)
- **PDF:** [https://www.usenix.org/system/files/sec20-zhang-mengya.pdf](https://www.usenix.org/system/files/sec20-zhang-mengya.pdf)
## An Ever-evolving Game: Evaluation of Real-world Attacks and Defenses in Ethereum Ecosystem.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#an-ever-evolving-game-evaluation-of-real-world-attacks-and-defenses-in-ethereum-ecosystem) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#an-ever-evolving-game-evaluation-of-real-world-attacks-and-defenses-in-ethereum-ecosystem)**
### 作者
* Shunfan Zhou, Fudan University
* Zhemin Yang, Fudan University
* Jie Xiang, Fudan University
* Yinzhi Cao, Johns Hopkins University
* Min Yang, Fudan University
* Yuan Zhang, Fudan University
### 摘要
> 智能合约安全引起了广泛关注，原因是发生了许多严重事件，导致大量以太币和代币损失。因此，研究人员提出通过代码分析来检测智能合约漏洞。然而，代码分析只能显示哪些合约可以被攻击，而不能显示哪些已经被攻击，更重要的是，在真实世界中有哪些攻击被阻止了。在本文中，我们提出了第一次全面的测量研究，基于未经处理的以太坊虚拟机（EVM）产生的交易日志，分析真实世界中的攻击和采取的防御措施。具体而言，我们的研究将对抗性交易的两个重要因素分离开来，即（i）利用易受攻击合约的对抗性行动和（ii）由该行动导致的以太币或代币转移的对抗性后果，用于分析攻击和防御。我们的研究结果揭示了大量攻击，超出了现有文献研究的范围，例如针对空投猎取等新的漏洞类型以及针对已知漏洞的零日变体。除了成功的攻击，我们的研究还显示了被防御措施阻止的未遂攻击。作为网络安全的本质，这些防御措施也被规避，主要是由于不完整的防御部署。总结起来，我们认为这是一个不断发展的博弈，双方是追求非法利润的对手和保护自己合约的防御者。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/zhou-shunfan](https://www.usenix.org/conference/usenixsecurity20/presentation/zhou-shunfan)
- **PDF:** [https://www.usenix.org/system/files/sec20-zhou-shunfan.pdf](https://www.usenix.org/system/files/sec20-zhou-shunfan.pdf)
## The 2020 Election: Remote Voting, Disinformation, and Audit.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-2020-election-remote-voting-disinformation-and-audit) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#the-2020-election-remote-voting-disinformation-and-audit)**
### 作者
### 摘要
> 据各种说法，2020年的选举将是历史性的。美国历史上最具情感冲击力的选举可能会在全球大流行病的背景下进行。以前从未有过关于投票过程的错误信息直接来自白宫。选举结果很可能会受到质疑，结果的合法性也会受到质疑。在保障公众对公正和诚信的看法的同时，COVID19将对选举官员顺利进行选举的能力提出更大的挑战。邮寄投票将得到广泛采用，并面临远程电子投票的压力。本专题讨论如何保护选举过程的合法性。专题将与选举官员共享他们与选举官员合作的经验，并讨论诸如端到端投票和风险限制审计等技术。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/panel-voting](https://www.usenix.org/conference/usenixsecurity20/presentation/panel-voting)
## Digital Contact Tracing.
🌍 [English](../../../docs/en/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#digital-contact-tracing) | **[简体中文](../../../docs/zh-CN/USENIX%20Security%20Symposium/USENIX%20Security%20Symposium[2020].md#digital-contact-tracing)**
### 作者
### 摘要
> 新冠病毒肺炎（COVID-19）是由严重急性呼吸系统综合征冠状病毒2（SARS-CoV-2）引起的大流行病，导致了许多死亡，并且使世界经济的大部分陷入停滞。由于该病毒在人与人之间通过密切接触传播，追踪接触者成为抗击COVID-19疫情的主要工具之一，其目的是追踪和隔离与病毒阳性者接触的人员。为了促进这一过程，近期提出并在一些国家部署了数字接触追踪解决方案。谷歌和苹果还在Android和iOS中进一步支持接触追踪。此类大规模追踪基础设施的部署引发了一系列安全、隐私、伦理和法律问题。在论文中，专家们将就这些问题进行讨论，并描述他们在构建和分析数字接触追踪系统方面的经验。

### 链接
- **URL:** [https://www.usenix.org/conference/usenixsecurity20/presentation/panel-contact-tracing](https://www.usenix.org/conference/usenixsecurity20/presentation/panel-contact-tracing)
