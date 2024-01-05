# ACM Conference on Computer and Communications Security 2019
## 1 Trillion Dollar Refund: How To Spoof PDF Signatures.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#1-trillion-dollar-refund-how-to-spoof-pdf-signatures) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#1-trillion-dollar-refund-how-to-spoof-pdf-signatures)**
### 作者
* Vladislav Mladenov, Ruhr University Bochum, Bochum, Germany
* Christian Mainka, Ruhr University Bochum, Bochum, Germany
* Karsten Meyer zu Selhausen, Hackmanit GmbH, Bochum, Germany
* Martin Grothe, Ruhr University Bochum, Bochum, Germany
* Jörg Schwenk, Ruhr University Bochum, Bochum, Germany
### 摘要
> 便携式文档格式（PDF）是全球文档交换的事实标准。为了确保文档的真实性和完整性，使用数字签名。许多公共和私人服务机构，包括政府、公共企业、银行和支付服务，都依赖PDF签名的安全性。本文首次对PDF中的数字签名进行了全面的安全评估。我们介绍了三种新型攻击类型，绕过数字签名PDF文件的加密保护，使攻击者能够篡改签名PDF的内容。我们分析了22种不同的PDF查看器，发现其中21种存在漏洞，包括如Adobe Reader DC和Foxit等知名和广泛使用的应用程序。我们还对八个在线验证服务进行了评估，发现其中六个存在漏洞。这些结果的可能解释是缺乏一个标准算法来验证PDF签名--每个客户端以不同的方式验证签名，攻击可以针对这些差异进行定制。因此，我们建议标准化一种安全的验证算法，并在本文中进行了描述。所有发现都已经得到负责任的披露，并在修复问题期间支持受影响的供应商。因此，每个攻击类型都发布了三个通用的CVE编号[50-52]。我们关于PDF签名的研究以及更多信息也可以在https://www.pdf-insecurity.org/上在线获取。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3339812](https://doi.org/10.1145/3319535.3339812)
## Practical Decryption exFiltration: Breaking PDF Encryption.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#practical-decryption-exfiltration-breaking-pdf-encryption) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#practical-decryption-exfiltration-breaking-pdf-encryption)**
### 作者
* Jens Müller, Ruhr University Bochum, Bochum, Germany
* Fabian Ising, Münster University of Applied Sciences, Münster, Germany
* Vladislav Mladenov, Ruhr University Bochum, Bochum, Germany
* Christian Mainka, Ruhr University Bochum, Bochum, Germany
* Sebastian Schinzel, Münster University of Applied Sciences, Münster, Germany
* Jörg Schwenk, Ruhr University Bochum, Bochum, Germany
### 摘要
> 便携文档格式（Portable Document Format，简称PDF）是全球使用最广泛的文档格式之一，为确保信息的机密性，该文件格式支持文档加密。在本论文中，我们分析了PDF加密，并展示了两种突破加密文档机密性的新技术。首先，我们滥用PDF部分加密文档的功能，将文档的加密部分包装在受攻击者控制的内容中，从而在合法用户打开文档时窃取明文。其次，我们滥用PDF加密规范中的一个缺陷，任意操纵加密内容。唯一的要求是需要一个已知明文块，我们展示了这一设计上的满足条件。我们的攻击通过基于标准兼容PDF属性的泄漏通道，可以还原加密文档的全部明文。我们在27个广泛使用的PDF查看器上评估了我们的攻击，发现它们全都存在漏洞。我们负责地披露了这些漏洞，并支持供应商修复问题。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354214](https://doi.org/10.1145/3319535.3354214)
## A Machine-Checked Proof of Security for AWS Key Management Service.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#a-machine-checked-proof-of-security-for-aws-key-management-service) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#a-machine-checked-proof-of-security-for-aws-key-management-service)**
### 作者
* José Bacelar Almeida, University of Minho and INESC TEC, Braga, Portugal
* Manuel Barbosa, University of Porto (FCUP) and INESC TEC, Porto, Portugal
* Gilles Barthe, IMDEA Software Institute and MPI-SP, Madrid, Spain
* Matthew Campagna, Amazon Web Services, Seattle, WA, USA
* Ernie Cohen, Amazon Web Services, New York, NY, USA
* Benjamin Gregoire, Inria, Sophia-Antipolis, France
* Vitor Pereira, University of Porto (FCUP) and INESC TEC, Porto, Portugal
* Bernardo Portela, University of Porto (FCUP) and INESC TEC, Porto, Portugal
* Pierre-Yves Strub, École Polytechnique, Palaiseau, France
* Serdar Tasiran, Amazon Web Services, New York, NY, USA
### 摘要
> 我们提出了Amazon Web Services（AWS）的KMS（密钥管理服务）域管理协议安全性的机器验证证明。域管理是AWS KMS的核心，它管理着在AWS中加密服务安全性的顶层密钥。我们展示了该协议在标准密码学假设下安全地实现了一个理想的分布式加密机制。该证明通过EasyCrypt证明助手进行了机器验证，并且是迄今为止最大的EasyCrypt开发。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354228](https://doi.org/10.1145/3319535.3354228)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354228](https://dl.acm.org/doi/pdf/10.1145/3319535.3354228)
## Mitigating Leakage in Secure Cloud-Hosted Data Structures: Volume-Hiding for Multi-Maps via Hashing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#mitigating-leakage-in-secure-cloud-hosted-data-structures-volume-hiding-for-multi-maps-via-hashing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#mitigating-leakage-in-secure-cloud-hosted-data-structures-volume-hiding-for-multi-maps-via-hashing)**
### 作者
* Sarvar Patel, Google LLC, New York, NY, USA
* Giuseppe Persiano, University of Salerno, Salerno, Italy
* Kevin Yeo, Google LLC, New York, NY, USA
* Moti Yung, Google LLC and Columbia University, New York, NY, USA
### 摘要
> 卷泄漏最近被Kellaris等人[CCS'16]（另见Grubbs等人[CCS'18]和Lacharité等人[S&amp;P'18]的攻击）确定为对加密云数据结构安全的主要威胁。在这项工作中，我们专注于Kamara和Moataz[Eurocrypt'19]最早考虑的体积隐藏实现的加密多重映射。加密多重映射包括将多重映射的存储外包给不可信的服务器（如云存储系统），同时保持进行私有查询的能力。体积隐藏的加密多重映射确保对于任何查询的响应数量（体积）对攻击性服务器保持隐藏。因此，体积隐藏方案可以防止泄露攻击，这些攻击利用对查询响应数量的了解危害隐私。我们提出了关于体积隐藏泄露函数的概念和算法贡献。在设计方面，我们介绍了第一个体积隐藏的加密多重映射dprfMM，其存储和查询复杂性都是渐近最优的。此外，我们通过实验证明了我们的方案在实际中的高效性。我们的服务器存储比最佳先前方案更小，同时将查询复杂性提高了10-16倍。此外，我们引入了差分隐私体积隐藏泄露函数的概念，它在隐私和效率之间取得了更好的可调平衡。为了配合我们的新概念，我们提出了一种差分隐私体积隐藏的加密多重映射dpMM，其查询复杂度是被查询键的体积加上一个额外的对数因子。与所有先前的体积隐藏方案相比，这是一个重大改进，这些方案的查询开销是任何键的最大体积。在自然环境中，即使考虑到ε=0.2的小隐私预算，我们的方案相对于之前最好的体积隐藏方案将平均查询开销提高了150-240倍。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354213](https://doi.org/10.1145/3319535.3354213)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354213](https://dl.acm.org/doi/pdf/10.1145/3319535.3354213)
## The Next 700 Policy Miners: A Universal Method for Building Policy Miners.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#the-next-700-policy-miners-a-universal-method-for-building-policy-miners) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#the-next-700-policy-miners-a-universal-method-for-building-policy-miners)**
### 作者
* Carlos Cotrini, ETH Zürich, Zürich, Switzerland
* Luca Corinzia, ETH Zürich, Zürich, Switzerland
* Thilo Weghorn, ETH Zürich, Zürich, Switzerland
* David Basin, ETH Zürich, Zürich, Switzerland
### 摘要
> 一系列的访问控制策略语言被提出并不断被提出。为每种语言设计策略挖掘器是一项具有挑战性的任务，需要专门的机器学习和组合算法。我们提出了一种替代方法，即通用访问控制策略挖掘(Unicorn)。我们展示了如何利用这种方法简化了对各种各样的策略语言进行策略挖掘器的设计，包括ABAC、RBAC、带用户属性约束的RBAC、带时空约束的RBAC和XACML的一个表达性片段。对于后两者，以前还没有已知的策略挖掘器。要使用Unicorn设计一个策略挖掘器，需要一个策略语言和一个量化策略与权限分配的拟合程度的指标。基于这些，我们构建了一个策略挖掘器作为一个搜索算法，该算法计算出最适合给定权限分配的策略。我们在来自亚马逊的日志和其他公司的访问控制矩阵上对使用Unicorn构建的策略挖掘器进行了实验评估。尽管我们的方法具有通用性，但我们的策略挖掘器在某些情况下与专门的先进策略挖掘器相比具有竞争力，甚至更好。我们挖掘的策略的真阳性率与市场现有策略挖掘的策略相差只有5％，而假阳性率始终低于5％。在ABAC的情况下，它甚至超过了市场现有策略挖掘的状况。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354196](https://doi.org/10.1145/3319535.3354196)
## Oh, the Places You've Been! User Reactions to Longitudinal Transparency About Third-Party Web Tracking and Inferencing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#oh-the-places-youve-been-user-reactions-to-longitudinal-transparency-about-third-party-web-tracking-and-inferencing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#oh-the-places-youve-been-user-reactions-to-longitudinal-transparency-about-third-party-web-tracking-and-inferencing)**
### 作者
* Ben Weinshel, University of Chicago, Chicago, IL, USA
* Miranda Wei, University of Chicago, Chicago, IL, USA
* Mainack Mondal, IIT Kharagpur and University of Chicago, Kharagpur, India
* Euirim Choi, University of Chicago, Chicago, IL, USA
* Shawn Shan, University of Chicago, Chicago, IL, USA
* Claire Dolin, University of Chicago, Chicago, IL, USA
* Michelle L. Mazurek, University of Maryland, College Park, MD, USA
* Blase Ur, University of Chicago, Chicago, IL, USA
### 摘要
> 互联网公司追踪用户的在线活动，以便推断他们的兴趣，并用于定向广告和个性化网络体验。此前的研究表明，现有的保护隐私工具只能给用户提供有限的理解和不完整的在线追踪画面。我们提出了一种名为“追踪透明度”的隐私保护浏览器扩展，可以将用户浏览情况中潜在的长期纵向信息可视化展示出来，以展示第三方追踪器可能从用户浏览中推断出的例证。该扩展使用客户端主题建模算法对用户访问的页面进行分类，并将此与随时间遭遇到的网络追踪器的数据结合起来创建这些可视化展示。我们进行了一项纵向实地研究，有425名参与者在一周内使用我们扩展的六个变体之一。我们发现，在使用该扩展后，参与者对追踪程度的感知更准确，并且也有意采取保护隐私的行动。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363200](https://doi.org/10.1145/3319535.3363200)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363200](https://dl.acm.org/doi/pdf/10.1145/3319535.3363200)
## Page Cache Attacks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#page-cache-attacks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#page-cache-attacks)**
### 作者
* Daniel Gruss, Graz University of Technology, Graz, Austria
* Erik Kraft, Graz University of Technology, Graz, Austria
* Trishita Tiwari, Boston University, Boston, MA, USA
* Michael Schwarz, Graz University of Technology, Graz, Austria
* Ari Trachtenberg, Boston University, Boston, MA, USA
* Jason Hennessey, NetApp, Sunnyvale, CA, USA
* Alex Ionescu, CrowdStrike, Sunnyvale, CA, USA
* Anders Fogh, Intel Corporation, Santa Clara, CA, USA
### 摘要
> 我们提出了一种新的侧信道攻击，针对现代计算机系统中最基本的软件缓存之一：操作系统页面缓存。页面缓存是一个纯软件缓存，包含了所有磁盘支持的页面，包括程序二进制文件、共享库和其他文件。在Windows上，动态页面也是该缓存的一部分，也可以被攻击，例如数据、堆和堆栈等。我们的侧信道允许非特权监视其他进程对这些页面的访问，空间分辨率为4KB，在Linux上的时间分辨率为2μs（每秒≤6.7个度量值），在Windows 10上为466ns（每秒≤223个度量值）。我们通过展示不同的硬件无关本地攻击系统地分析了这个侧信道，包括一个绕过沙盒的高速隐蔽通道、Windows 10上的ASLR破解，以及可用于有针对性的勒索、垃圾邮件攻击等的各种信息泄漏，还直接展示了针对用户界面重定向攻击。我们还展示了与硬件缓存攻击类似，我们可以攻击易受攻击的加密实现中临时密码的生成。我们提出的硬件无关攻击可以通过我们提出的安全补丁来减轻，但基本的侧信道仍然可通过时间测量进行利用。我们通过一个通过无害服务器请求从串通的进程中提取信息的远程隐蔽通道来证明这一点。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3339809](https://doi.org/10.1145/3319535.3339809)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3339809](https://dl.acm.org/doi/pdf/10.1145/3319535.3339809)
## Hardware-Backed Heist: Extracting ECDSA Keys from Qualcomm's TrustZone.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#hardware-backed-heist-extracting-ecdsa-keys-from-qualcomms-trustzone) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#hardware-backed-heist-extracting-ecdsa-keys-from-qualcomms-trustzone)**
### 作者
* Keegan Ryan, University of California, San Diego & NCC Group, La Jolla, CA, USA
### 摘要
> 被广泛使用于移动设备和嵌入式设备的受信执行环境（TEE）如ARM TrustZone，用于保护敏感秘密，并与不可信代码共享相同的计算硬件。虽然在这个领域的研究有限，但是对ARM TrustZone的微架构攻击威胁尚未得到充分研究。这不适用于其他TEE，如Intel SGX，学术界多次违反了TEE的安全承诺，展示了利用侧信道攻击可以详细了解受信代码的微架构行为。在这项工作中，我们展示了TrustZone容易受到类似的攻击，并演示了能够以高时间精度、高空间精度和低噪声进行缓存攻击的能力。这些工具使监测TrustZone代码的数据流和代码流变得很容易，并且我们应用这些技术来调查一个真实应用程序的安全性。我们研究了高通在Android硬件支持密钥库中的ECDSA签名，并识别出一系列漏洞，通过共享的微架构结构泄露了敏感的加密信息。通过使用本文中开发的强大攻击，我们能够成功提取这些敏感信息，并完全恢复出高通版本的硬件支持密钥库中的256位私钥。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354197](https://doi.org/10.1145/3319535.3354197)
## Neural Network Inversion in Adversarial Setting via Background Knowledge Alignment.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#neural-network-inversion-in-adversarial-setting-via-background-knowledge-alignment) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#neural-network-inversion-in-adversarial-setting-via-background-knowledge-alignment)**
### 作者
* Ziqi Yang, National University of Singapore, Singapore, Singapore
* Jiyi Zhang, National University of Singapore, Singapore, Singapore
* Ee-Chien Chang, National University of Singapore, Singapore, Singapore
* Zhenkai Liang, National University of Singapore, Singapore, Singapore
### 摘要
> 深度学习技术的广泛应用引发了关于训练数据和测试数据的新安全问题。在这项工作中，我们研究了在对抗环境下的模型反演问题，其中对手旨在从模型的预测值中推断目标模型的训练数据和测试数据的信息。我们提出了一个解决方案，即训练一个作为目标模型的反演的第二个神经网络来进行反演。反演模型可以通过黑盒方式访问目标模型进行训练。我们在对抗环境下提出了两种主要的技术来训练反演模型。首先，我们利用对手的背景知识来构建一个辅助集合，用于训练反演模型，这不需要访问原始的训练数据。其次，我们设计了一种基于截断的技术，将反演模型与目标模型进行对齐，从而能够有效地从对手在受害用户数据上获取的部分预测中反演出目标模型。我们在多个图像数据集上系统地评估了我们的方法在各种机器学习任务和模型架构中的表现。我们还在亚马逊Rekognition上验证了我们的结果，这是一个提供“机器学习即服务”的商业预测API。我们证明，即使对于黑盒模型的训练数据只有部分了解，并且只有部分的预测值，我们的反演方法仍然能够准确地进行目标模型的反演，并且超过先前的方法。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354261](https://doi.org/10.1145/3319535.3354261)
## MemGuard: Defending against Black-Box Membership Inference Attacks via Adversarial Examples.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#memguard-defending-against-black-box-membership-inference-attacks-via-adversarial-examples) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#memguard-defending-against-black-box-membership-inference-attacks-via-adversarial-examples)**
### 作者
* Jinyuan Jia, Duke University, Durham, NC, USA
* Ahmed Salem, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Yang Zhang, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Neil Zhenqiang Gong, Duke University, Durham, NC, USA
### 摘要
> 在成员推断攻击中，攻击者旨在推断一个数据样本是否属于目标分类器的训练数据集。具体而言，攻击者通过黑盒访问目标分类器，训练一个二元分类器，该分类器以目标分类器预测的数据样本置信度向量作为输入，并预测数据样本是目标分类器训练数据集的成员还是非成员。成员推断攻击对训练数据集构成严重的隐私和安全威胁。目前大多数现有的防御方法在训练目标分类器时利用差分隐私或对目标分类器的训练过程进行正则化。然而这些防御方法存在两个关键限制：1）它们对置信度向量没有形式上的效用损失保证，2）它们在隐私效用权衡方面达不到最优。在这项研究中，我们提出了MemGuard，这是第一个对黑盒成员推断攻击具有形式上的效用损失保证的防御方法。与破坏目标分类器的训练过程不同，MemGuard为目标分类器预测的每个置信度向量添加噪声。我们的关键观察是攻击者使用分类器来预测成员或非成员，而这个分类器容易受到对抗性样本的攻击。基于这一观察，我们提出在置信度向量中添加精心设计的噪声向量，将其变为一个对抗性样本，从而误导攻击者的分类器。具体而言，MemGuard分为两个阶段。在第一阶段，MemGuard找到一个精心设计的噪声向量，可以将置信度向量变为对抗性样本，进而可能误导攻击者的分类器随机猜测成员或非成员。我们通过一种新方法设计了这样的精心制作噪声向量，以满足噪声向量的唯一效用损失约束。在第二阶段，MemGuard以一定的概率将噪声向量添加到置信度向量中，该概率的选择满足对置信度向量的给定效用损失预算。我们在三个数据集上的实验结果表明，MemGuard可以有效抵御成员推断攻击，并实现比现有防御方法更好的隐私效用权衡。我们的工作是第一个表明对抗性样本可以用作防御机制来对抗成员推断攻击的工作。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363201](https://doi.org/10.1145/3319535.3363201)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363201](https://dl.acm.org/doi/pdf/10.1145/3319535.3363201)
## Procedural Noise Adversarial Examples for Black-Box Attacks on Deep Convolutional Networks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#procedural-noise-adversarial-examples-for-black-box-attacks-on-deep-convolutional-networks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#procedural-noise-adversarial-examples-for-black-box-attacks-on-deep-convolutional-networks)**
### 作者
* Kenneth T. Co, Imperial College London, London, United Kingdom
* Luis Muñoz-González, Imperial College London, London, United Kingdom
* Sixte de Maupeou, Imperial College London, London, United Kingdom
* Emil C. Lupu, Imperial College London, London, United Kingdom
### 摘要
> 深度卷积网络（DCNs）已被证明容易受到对抗性示例的攻击，这些攻击是专门设计的扰动输入，旨在在测试时产生故意的学习算法错误。现有的对抗性扰动虽然不依赖输入，但展现出一些有趣的视觉模式，目前尚未得到解释。在本文中，我们引入了一种使用过程噪声函数生成通用对抗扰动（UAPs）的结构化方法。我们的方法揭示了流行的DCN模型（如Inception v3和YOLO v3）的系统性脆弱性，单个噪声模式能够欺骗数据集中高达90%的模型。过程噪声使我们能够仅使用少量参数生成具有高普遍逃避率的UAPs分布。此外，我们提出贝叶斯优化来高效学习过程噪声参数，以构建廉价的非针对性黑盒攻击。我们证明它可以实现每次成功攻击少于10次查询的平均值，相比现有方法提高了100倍。我们进一步提出使用与输入无关的防御方法，以增强模型对抗性扰动的稳定性。我们的攻击的普遍性表明，DCN模型可能对低级别非特定类别特征的聚合敏感。这些发现为了解某些通用对抗扰动的性质以及如何在其他应用中生成它们提供了见解。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345660](https://doi.org/10.1145/3319535.3345660)
## Efficient Two-Round OT Extension and Silent Non-Interactive Secure Computation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#efficient-two-round-ot-extension-and-silent-non-interactive-secure-computation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#efficient-two-round-ot-extension-and-silent-non-interactive-secure-computation)**
### 作者
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Geoffroy Couteau, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Niv Gilboa, Ben Gurion University, Be'er Sheva, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Lisa Kohl, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Peter Rindal, Visa Research, Palo Alto, CA, USA
* Peter Scholl, Aarhus University, Aarhus, Denmark
### 摘要
> 我们考虑安全生成有用的双方相关实例的问题，例如许多独立的随机漠视转让（OT）相关实例，使用少量通信。这个问题的动机是通过安静的预处理实现安全计算，在低通信的独立输入设置后，通过本地（“静默”）计算，在已知输入之后启用轻量级的“非加密”在线阶段。Boyle等人的最近工作（CCS 2018、Crypto 2019）在不同变体的带噪学习奇偶校验（LPN）假设下，利用少量的“基础”漠视转让，为有用的双方相关提供了良好的具体效率，包括OT相关。Boyle等人的协议有几个局限性。首先，它们需要大量的通信轮次。其次，它们只对半诚实方安全。最后，他们的具体效率估计没有实际实现的支持。在这项工作中，我们解决了这些限制，做出了三个主要贡献：消除互动。在相同的假设下，我们获得了第一个在半诚实安全模型中具体有效的2轮协议，用于生成有用的相关性，包括OT相关性。这意味着任何类型的有效2轮OT扩展协议以及更一般地满足静默预处理特性的非交互式安全计算（NISC）协议。恶意安全。我们提供了针对恶意方的安全性，不需要额外的互动，并且只有适度的开销；在我们的工作之前，没有已知具有任何轮次的类似协议。实施。最后，我们实施、优化和进行了我们的2轮OT扩展协议的基准测试，证明在许多实际场景中它提供了比Ishai等人的OT扩展协议（Crypto 2003）更具吸引力的替代方案。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354255](https://doi.org/10.1145/3319535.3354255)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354255](https://dl.acm.org/doi/pdf/10.1145/3319535.3354255)
## Efficient Multi-Key Homomorphic Encryption with Packed Ciphertexts with Application to Oblivious Neural Network Inference.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#efficient-multi-key-homomorphic-encryption-with-packed-ciphertexts-with-application-to-oblivious-neural-network-inference) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#efficient-multi-key-homomorphic-encryption-with-packed-ciphertexts-with-application-to-oblivious-neural-network-inference)**
### 作者
* Hao Chen, Microsoft Research, Redmond, WA, USA
* Wei Dai, Microsoft Research, Redmond, WA, USA
* Miran Kim, UT Health Science Center at Houston, Houston, TX, USA
* Yongsoo Song, Microsoft Research, Redmond, WA, USA
### 摘要
> 同态加密（HE）是一种支持对加密数据进行计算的密码系统。Ló pez-Alt等人（STOC 2012）提出了一种称为多密钥同态加密（MKHE）的广义HE概念，能够在不同密钥下对密文执行算术运算。本文提出了两种具有打包密文的多密钥HE方案的多密钥变体。我们提出了比Chen等人（TCC 2017）先前方法更简单更快的新重新线性化算法。然后我们将同态加密的引导技术推广到获得多密钥完全同态加密方案。我们使用Microsoft SEAL提供了两个MKHE方案的概念验证实现。例如，当基环维度为8192时，关联四个参与方的多密钥BFV（resp. CKKS）密文之间进行同态乘法，接着进行重新线性化大约需要116（resp. 67）毫秒。我们的MKHE方案在多个数据提供者之间的安全计算中具有广泛的应用。作为基准，我们使用预训练的神经网络模型对图像进行同态分类，其中输入数据和模型是使用不同密钥加密的。我们的实现需要约1.8秒来评估来自MNIST数据集的加密图像上的一个卷积层后跟两个全连接层。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363207](https://doi.org/10.1145/3319535.3363207)
## Traceback for End-to-End Encrypted Messaging.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#traceback-for-end-to-end-encrypted-messaging) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#traceback-for-end-to-end-encrypted-messaging)**
### 作者
* Nirvan Tyagi, Cornell University, Ithaca, NY, USA
* Ian Miers, Cornell Tech & University of Maryland, New York City, NY, USA
* Thomas Ristenpart, Cornell Tech, New York City, NY, USA
### 摘要
> 消息系统被用于传播误导信息和其他恶意内容，往往造成严重后果。端到端加密提高了隐私保护，但阻碍了基于内容的管理，并特别模糊了恶意内容的原始来源。我们引入了消息追踪的概念，这是一种新的密码学方法，使平台能够同时提供端到端加密，并能够追踪用户报告的恶意内容的来源。我们为消息追踪规定了功能和安全目标，并详细介绍了两种构建方式，可以揭示一系列转发的消息（路径追溯）或整个转发树（树追溯）。我们实现和评估了我们的追溯方案的原型，以凸显其实用性，并提供了部署方面的讨论。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354243](https://doi.org/10.1145/3319535.3354243)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354243](https://dl.acm.org/doi/pdf/10.1145/3319535.3354243)
## SICO: Surgical Interception Attacks by Manipulating BGP Communities.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#sico-surgical-interception-attacks-by-manipulating-bgp-communities) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#sico-surgical-interception-attacks-by-manipulating-bgp-communities)**
### 作者
* Henry Birge-Lee, Princeton University, Princeton, NJ, USA
* Liang Wang, Princeton University, Princeton, NJ, USA
* Jennifer Rexford, Princeton University, Princeton, NJ, USA
* Prateek Mittal, Princeton University, Princeton, NJ, USA
### 摘要
> 边界网关协议（BGP）是互联网骨干网络的主要路由协议，但它缺乏足够的安全机制。简单的BGP劫持攻击仅涉及对目标互联网流量进行劫持，而更复杂和具有挑战性的拦截攻击要求攻击者拦截受害者的流量并将其转发给受害者。如果拦截攻击启动不正确，攻击者的攻击将中断与受害者的路由，使其无法转发数据包。为了克服这些障碍，我们引入了SICO攻击（使用社群进行外科拦截）：一种新颖的发动拦截攻击的方法，利用BGP社群来确定攻击者的攻击范围并确保通向受害者的路由。然后，我们展示了如何将SICO攻击针对特定的源IP地址，以减少攻击成本。此外，我们在真实的互联网骨干上道德地执行SICO攻击，以评估其可行性和有效性。结果表明，即使之前提出的攻击不可行，SICO攻击仍然可以实现拦截，并且通过吸引额外16%的互联网主机（最坏情况）和58%的互联网主机（最好情况）的流量来优于它们。最后，我们分析互联网拓扑，发现至少83%的多家接入自治系统能够发动这些攻击。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363197](https://doi.org/10.1145/3319535.3363197)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363197](https://dl.acm.org/doi/pdf/10.1145/3319535.3363197)
## Just the Tip of the Iceberg: Internet-Scale Exploitation of Routers for Cryptojacking.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#just-the-tip-of-the-iceberg-internet-scale-exploitation-of-routers-for-cryptojacking) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#just-the-tip-of-the-iceberg-internet-scale-exploitation-of-routers-for-cryptojacking)**
### 作者
* Hugo L. J. Bijmans, TU Delft, Delft, Netherlands
* Tim M. Booij, TU Delft, Delft, Netherlands
* Christian Doerr, TU Delft, Delft, Netherlands
### 摘要
> 2017年Coinhive推出了一款高效的基于浏览器的加密货币挖矿程序，迅速在网络中蔓延开来，既作为网站的新收入来源，又在黑客和恶意广告的背景下被利用。几项研究对Alexa排名前100万的网站进行了分析发现，有380-3,200个网站（占比0.038%-0.32%）在积极地进行挖矿，其中排名前10的罪犯每个月估计获得4.1万美元的收入。虽然将加密货币挖矿程序放置在热门网站上可以从访问者的网络浏览器中获得可观的回报，但它只在有客户访问页面时产生收入。尽管大型热门网站吸引了数百万访客，但开采网站数量相对较低，限制了可以获得的总收入。在本文中，我们报道了一种新的攻击向量，它大大超越了迄今发现的所有加密货币挖矿活动。通过MikroTik路由器中的固件漏洞，网络犯罪分子能够重写出站用户流量，并嵌入加密货币挖矿代码在每个出站的网络连接中。因此，任何使用被感染路由器的用户访问的每个网页都会为罪犯产生挖矿利润。基于Tier 1网络上记录的NetFlows、半周爬行和望远镜流量，我们在10个月的时间内追踪了他们的活动，并报告了罪犯的作案手法和协调基础设施，他们在这段时间内控制了高达140万个路由器，约占全球所有部署的MikroTik设备的70%。我们观察到对手之间有不同程度的技术水平，从个人安装到涉及大量路由器的攻击活动。我们的研究结果表明，通过中间人攻击进行加密货币挖矿是非常有利可图的，比之前的攻击向量高出30倍。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354230](https://doi.org/10.1145/3319535.3354230)
## Intriguer: Field-Level Constraint Solving for Hybrid Fuzzing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#intriguer-field-level-constraint-solving-for-hybrid-fuzzing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#intriguer-field-level-constraint-solving-for-hybrid-fuzzing)**
### 作者
* Mingi Cho, Yonsei University, Seoul, South Korea
* Seoyoung Kim, Yonsei University, Seoul, South Korea
* Taekyoung Kwon, Yonsei University, Seoul, South Korea
### 摘要
> 混合模糊测试是一种将模糊测试和共享符号执行相结合的有前途的方法，尤其是在共享符号引擎性能改进的最近情况下。我们观察到仍有改进的空间：符号仿真仍然较慢，不必要的约束占据了解决时间，资源过度分配，并且很难触发的错误被忽略。为了解决这些问题，我们提出了一种新的混合模糊测试工具，名为Intriguer。Intriguer的关键理念是基于字段级约束求解，通过利用字段级知识来优化符号执行。Intriguer执行指令级的污点分析，并记录执行轨迹，但不包括数据传输指令如mov。然后，Intriguer将针对访问广泛的输入字节的受污染指令缩减执行轨迹，并推断输入字段来构建字段过渡树。通过这些优化，Intriguer可以高效地执行符号仿真，仅针对复杂约束调用求解器。我们的评估结果表明，Intriguer胜过了最先进的模糊测试工具：Intriguer在LAVA-M(5h)基准数据集中找到了所有的错误以达到真实性能，还在七个实际程序中发现了43个新的安全漏洞。我们已经报告了这些漏洞，并获得了23个新的CVE。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354249](https://doi.org/10.1145/3319535.3354249)
## Learning to Fuzz from Symbolic Execution with Application to Smart Contracts.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#learning-to-fuzz-from-symbolic-execution-with-application-to-smart-contracts) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#learning-to-fuzz-from-symbolic-execution-with-application-to-smart-contracts)**
### 作者
* Jingxuan He, ETH Zurich, Zurich, Switzerland
* Mislav Balunović, ETH Zurich, Zurich, Switzerland
* Nodar Ambroladze, ETH Zurich, Zurich, Switzerland
* Petar Tsankov, ETH Zurich, Zurich, Switzerland
* Martin Vechev, ETH Zurich, Zurich, Switzerland
### 摘要
> 模糊测试和符号执行是发现软件漏洞的两种互补技术。模糊测试速度快、可扩展，但当无法随机选择正确的输入时可能无效。符号执行彻底但速度慢，通常不能处理具有复杂路径条件的深层程序路径。在这项工作中，我们提出了一种通过将学习任务置于模仿学习框架中，从符号执行中学习出一种有效且快速的模糊测试器的方法。在学习过程中，符号执行专家生成了大量优质输入，提高了成千上万个程序的覆盖率。然后，通过适当的神经网络架构来表示的模糊测试策略在生成的数据集上进行训练。学习到的策略可以用于对新程序进行模糊测试。我们将我们的方法应用于智能合约的模糊测试问题，这是一个合约经常实现相似功能（有助于学习）且安全性至关重要的领域。我们提出了一个端到端系统ILF（基于模仿学习的模糊测试器）并在超过18K个合约上进行了广泛评估。我们的结果表明ILF是有效的：（i）它速度快，每秒生成148个交易；（ii）它优于现有的模糊测试器（例如，实现了33%更高的覆盖率）；（iii）它比以太坊现有的模糊测试和符号执行工具能够检测到更多的漏洞。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363230](https://doi.org/10.1145/3319535.3363230)
## Efficient Publicly Verifiable 2PC over a Blockchain with Applications to Financially-Secure Computations.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#efficient-publicly-verifiable-2pc-over-a-blockchain-with-applications-to-financially-secure-computations) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#efficient-publicly-verifiable-2pc-over-a-blockchain-with-applications-to-financially-secure-computations)**
### 作者
* Ruiyu Zhu, Indiana University, Bloomington, IN, USA
* Changchang Ding, Indiana University, Bloomington, IN, USA
* Yan Huang, Indiana University, Bloomington, IN, USA
### 摘要
> 我们提出了一种新的高效的两方安全计算协议，允许诚实方以公开可验证、不可抵赖的证据捕获不诚实行为（如果有的话），同时不牺牲诚实方的保密性。与同类现有最佳协议相比，我们的协议需要一个更简单的裁判算法，并且能够以两个数量级更快的速度处理电路评估者的输入线。此外，我们提出了一个自动化的、分散化的裁判，作为一个区块链智能合约来实现。通过将我们的两方公开可验证协议与分散化裁判相结合，我们提出了金融安全计算的概念，这在许多实际情况下可以用来考虑理性对手。我们对原型实现进行了实验评估，证明了2PC协议的高效性，以及裁判对抗理性攻击者的成本非常合理。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363215](https://doi.org/10.1145/3319535.3363215)
## 5GReasoner: A Property-Directed Security and Privacy Analysis Framework for 5G Cellular Network Protocol.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#5greasoner-a-property-directed-security-and-privacy-analysis-framework-for-5g-cellular-network-protocol) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#5greasoner-a-property-directed-security-and-privacy-analysis-framework-for-5g-cellular-network-protocol)**
### 作者
* Syed Rafiul Hussain, Purdue University, West Lafayette, IN, USA
* Mitziu Echeverria, University of Iowa, Iowa City, IA, USA
* Imtiaz Karim, Purdue University, West Lafayette, IN, USA
* Omar Chowdhury, University of Iowa, Iowa City, IA, USA
* Elisa Bertino, Purdue University, West Lafayette, IN, USA
### 摘要
> 本文提出了5GReasoner，这是一个跨越5G协议栈多个层次的控制平面协议属性导向形式验证的框架。5GReasoner所进行的底层分析可以看作是在对抗环境中进行模型检验问题的一个实例。通过在我们手动提取的5G协议中有效地使用行为特定抽象，5GReasoner的分析可以推广之前对蜂窝协议的分析，不仅关注数据包负载属性，而且关注多层协议的交互。我们使用了两个模型检验器和一个密码协议验证器来实例化5GReasoner，并通过抽象-细化原则将它们进行延迟组合。通过对包含5G协议栈两个层次上的6个关键控制层协议的提取模型进行5GReasoner的分析，我们发现了11个设计弱点，导致了同时涉及安全性和隐私影响的攻击。我们的分析还发现了5G继承自4G的5个先前的设计弱点，并且可以被利用来违反其安全性和隐私保证。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354263](https://doi.org/10.1145/3319535.3354263)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354263](https://dl.acm.org/doi/pdf/10.1145/3319535.3354263)
## Verified Verifiers for Verifying Elections.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#verified-verifiers-for-verifying-elections) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#verified-verifiers-for-verifying-elections)**
### 作者
* Thomas Haines, Norwegian University of Science and Technology, Trondheim, Norway
* Rajeev Goré, Australian National University, Canberra, Australia
* Mukesh Tiwari, Australian National University, Canberra, Australia
### 摘要
> 选举的安全性和可信度对于民主至关重要；然而，确保选举的安全性是非常困难的。已经开发了强大的密码学技术来验证电子投票的完整性，并且越来越常见。大多数这些技术声称的安全保证已经在形式上得到证明。然而，利用这些技术实现密码验证程序是一个技术性且容易出错的过程，而且经常导致实现和形式验证设计之间出现关键错误。我们通过使用机器检查的证明和代码提取将理论与实践之间的差距显著缩小，从而产生了自身经过正式验证的密码验证程序。我们通过使用我们的技术制作了一个经过正式验证的验证者，并用它来检查2018年国际密码研究协会(IACR)的理事会选举的可行性。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354247](https://doi.org/10.1145/3319535.3354247)
## Differentially Private Nonparametric Hypothesis Testing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#differentially-private-nonparametric-hypothesis-testing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#differentially-private-nonparametric-hypothesis-testing)**
### 作者
* Simon Couch, Reed College, Portland, OR, USA
* Zeki Kazan, Reed College, Portland, OR, USA
* Kaiyan Shi, Reed College, Portland, OR, USA
* Andrew Bray, Reed College, Portland, OR, USA
* Adam Groce, Reed College, Portland, OR, USA
### 摘要
> 假设检验是数据挖掘中至关重要的统计工具，也是许多领域科学研究的主要工具。在这里，我们研究了分别基于类别变量和连续变量之间的差分隐私独立性检验。我们以传统的非参数检验为起点，这些检验不需要对数据分布（如正态分布）做出任何分布假设。我们提出了Kruskal-Wallis、Mann-Whitney、Wilcoxon符号秩检验以及参数化的单样本t检验的隐私模拟。这些检验使用了专为隐私环境开发的新颖检验统计量。我们将我们的检验与之前的工作进行了比较，包括参数化和非参数化检验。我们发现，在所有情况下，我们的新非参数检验即使在满足参数化检验假设的情况下，也能显著提高统计功效。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3339821](https://doi.org/10.1145/3319535.3339821)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3339821](https://dl.acm.org/doi/pdf/10.1145/3319535.3339821)
## Fallout: Leaking Data on Meltdown-resistant CPUs.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#fallout-leaking-data-on-meltdown-resistant-cpus) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#fallout-leaking-data-on-meltdown-resistant-cpus)**
### 作者
* Claudio Canella, Graz University of Technology, Graz, Austria
* Daniel Genkin, University of Michigan, Ann Arbor, MI, USA
* Lukas Giner, Graz University of Technology, Graz, Austria
* Daniel Gruss, Graz University of Technology, Graz, Austria
* Moritz Lipp, Graz University of Technology, Graz, Austria
* Marina Minkin, University of Michigan, Ann Arbor, MI, USA
* Daniel Moghimi, Worcester Polytechnic Institute, Worcester, MA, USA
* Frank Piessens, imec-DistriNet, KU Leuven, Leuven, Belgium
* Michael Schwarz, Graz University of Technology, Graz, Austria
* Berk Sunar, Worcester Polytechnic Institute, Worcester, MA, USA
* Jo Van Bulck, imec-DistriNet, KU Leuven, Leuven, Belgium
* Yuval Yarom, University of Adelaide & Data61, Adelaide, Australia
### 摘要
> Meltdown和Spectre通过各种侧信道攻击从内存中任意泄露数据。对于Meltdown的短期软件缓解措施只是一种临时解决方案，但会带来显著的性能开销。由于硬件修复，这些缓解措施在最近的处理器上被禁用。在本文中，我们展示了即使在不受Meltdown影响的最近的CPU上，仍然可能发生类似Meltdown的攻击。我们确定了存储缓冲区的两种行为，即微架构资源，用于减少数据存储的延迟，从而实现强大的攻击。第一种行为，Write Transient Forwarding，即使加载地址与存储地址不同，也将数据从存储转发到后续加载。第二种行为，Store-to-Leak，利用TLB和存储缓冲区之间的交互来泄露存储地址上的元数据。基于这些，我们开发了多种攻击并展示了数据泄露、控制流恢复以及对ASLR的攻击。我们的论文表明，类似于Meltdown的攻击仍然可能发生，并且仍然需要软件修复措施以确保内核与用户空间之间的适当隔离，尽管可能会带来显著的性能开销。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363219](https://doi.org/10.1145/3319535.3363219)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363219](https://dl.acm.org/doi/pdf/10.1145/3319535.3363219)
## Atomic Multi-Channel Updates with Constant Collateral in Bitcoin-Compatible Payment-Channel Networks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#atomic-multi-channel-updates-with-constant-collateral-in-bitcoin-compatible-payment-channel-networks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#atomic-multi-channel-updates-with-constant-collateral-in-bitcoin-compatible-payment-channel-networks)**
### 作者
* Christoph Egger, Friedrich-Alexander University Erlangen-Nuremberg, Erlangen-Nuremberg, Germany
* Pedro Moreno-Sanchez, TU Wien, Wien, Austria
* Matteo Maffei, TU Wien, Wien, Austria
### 摘要
> 当前加密货币的交易吞吐量严重受限，明显不足以满足其日益增长的采用需求。支付通道网络（PCNs）已成为解决可扩展性问题的有趣方案，并已被比特币和以太坊等热门加密货币实施。虽然PCNs通过离线处理支付并只将区块链用作争议仲裁者来增加交易吞吐量，但不幸的是，它们需要高额保证金（即在支付路径上把硬币锁定一段非恒定时间），并且仅限于发送方到接收方的路径支付。这些问题在实践中具有严重后果。高额保证金使得否认服务攻击妨碍了PCN的吞吐量和实用性。此外，有限的功能限制了当前PCNs在许多重要应用场景中的适用性。不幸的是，目前的提议没有解决这些问题，或者它们需要图灵完备语言支持，这严重限制了它们的适用性。在这项工作中，我们提出了AMCU，这是与比特币（以及具备降低脚本能力的其他加密货币）兼容的原子多通道更新和减少保证金的第一个协议。我们在通用组合性框架中提供了一个正式模型，并展示了AMCU的实现，从而证明了AMCU实现了原子性和价值隐私。此外，减少的保证金缓解了PCNs中攻击行为的后果，而AMCU实现的（多支付）原子性为信用再平衡和众筹等新应用打开了大门，否则这是不可能的。此外，我们的评估结果表明，AMCU的性能与闪电网络（最广泛部署的PCN）相当，因此可以在实践中使用。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345666](https://doi.org/10.1145/3319535.3345666)
## Erlay: Efficient Transaction Relay for Bitcoin.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#erlay-efficient-transaction-relay-for-bitcoin) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#erlay-efficient-transaction-relay-for-bitcoin)**
### 作者
* Gleb Naumenko, University of British Columbia, Vancouver, BC, Canada
* Gregory Maxwell, Independent, None, CA, USA
* Pieter Wuille, Blockstream, Mountain View, CA, USA
* Alexandra Fedorova, University of British Columbia, Vancouver, BC, Canada
* Ivan Beschastnikh, University of British Columbia, Vancouver, BC, Canada
### 摘要
> 比特币是一种排名靠前的加密货币，经历了巨大的增长并成功应对多次攻击。构成比特币的协议必须适应网络的增长并确保安全。比特币网络的安全性取决于节点之间的连接性。较高的连接性可以提供更好的安全性。在本文中，我们提出两个观察结果：（1）当前比特币网络的连接性对于实现最佳安全性来说太低；（2）与此同时，增加连接性将显著增加交易传播协议所使用的带宽，使比特币节点的运营成本过高。目前用于运营比特币节点的总带宽的一半仅用于公告交易。与区块传输不同，交易传播在之前的工作中受到很少的关注。我们提出了一种新的交易传播协议Erlay，假设当前连接性，它不仅可以减少40%的带宽消耗，还可以保持随着连接性增加的带宽使用几乎不变。相比之下，现有的协议会带来与连接数呈线性增长的带宽消耗。通过以较小的成本允许更多的连接，Erlay改善了比特币网络的安全性。并且，正如我们所证明的，Erlay还增强了网络防御试图了解交易源节点的攻击的能力。比特币社区目前正在调查Erlay的用于比特币协议的未来使用。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354237](https://doi.org/10.1145/3319535.3354237)
## Power Adjusting and Bribery Racing: Novel Mining Attacks in the Bitcoin System.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#power-adjusting-and-bribery-racing-novel-mining-attacks-in-the-bitcoin-system) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#power-adjusting-and-bribery-racing-novel-mining-attacks-in-the-bitcoin-system)**
### 作者
* Shang Gao, The Hong Kong Polytechnic University, Hong Kong, Hong Kong
* Zecheng Li, The Hong Kong Polytechnic University, Hong Kong, Hong Kong
* Zhe Peng, The Hong Kong Polytechnic University, Hong Kong, Hong Kong
* Bin Xiao, The Hong Kong Polytechnic University, Hong Kong, Hong Kong
### 摘要
> 挖矿攻击可以让攻击者通过偏离比特币系统中的诚实挖矿策略而获得不公平的挖矿奖励份额。其中最知名的是区块隐藏（BWH）、隐藏后分叉（FAW）和自私挖矿。在本文中，我们提出了两种新策略：功率调整和贿赂竞赛，并引入了两种新型挖矿攻击——功率调整隐藏（PAW）和贿赂自私挖矿（BSM），采用了这两种新策略。这两种攻击都可以增加攻击者的收益。此外，我们展示了PAW可以避免BWH攻击中的“矿工困境”。BSM引入了一个新的“卖国矿工困境”，导致所有目标（贿赂者）愿意帮助攻击者，但最终获得的奖励较少。我们进行了定量分析和模拟来验证我们攻击的有效性。我们提出了一些应对措施来减轻这些新攻击，但实际上的高效解决方案仍然是一个未解决的问题。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354203](https://doi.org/10.1145/3319535.3354203)
## Practical Fully Secure Three-Party Computation via Sublinear Distributed Zero-Knowledge Proofs.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#practical-fully-secure-three-party-computation-via-sublinear-distributed-zero-knowledge-proofs) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#practical-fully-secure-three-party-computation-via-sublinear-distributed-zero-knowledge-proofs)**
### 作者
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Niv Gilboa, Ben-Gurion University, Beer Sheva, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Ariel Nof, Bar-Ilan University, Ramat-Gan, Israel
### 摘要
> 安全多方计算使一组参与方能够在不泄露除输出以外的私有输入的情况下进行联合计算。一个特别有动力的情景是存在一个独立的腐败方的三方计算（以下简称3PC）。3PC情景之所以特别吸引人，有两个主要原因：（1）它允许使用比其他标准设置下更高效的多方计算协议；（2）它原则上允许实现完全安全（和公平性）。在这一设置中，存在着对抗半诚实敌手的高效协议；然而，这些协议与对抗恶意敌手具有更强安全性的协议之间仍存在显著差距。本文旨在在具体有效的协议中缩小这一差距。更具体地说，我们的贡献如下：具体高效的恶意3PC协议。我们提出了一个经过优化的3PC协议，适用于带环的算术电路，其(摊销)每个乘法门每个参与方的通信量为1个环元素，与最佳半诚实协议相匹配。该协议也适用于布尔电路，在小电路上相比先前的协议有显着改进。我们的协议建立在Boneh等人（Crypto 2019）针对分布式数据的亚线性零知识证明的最新技术和基于复制秘密分配（Araki等人，CCS 2016）的高效半诚实协议之上。我们对通信和计算成本进行了具体分析，包括几个优化。例如，对于40位统计安全性和一个包含一百万（非线性）门的布尔电路，与半诚实协议相比，整个电路的通信开销可以不到0.5KB，计算开销主要由每个门处的大约30次乘法在F247域中主导。另外，我们对不同电路大小实施了协议并进行了基准测试。完全安全性。我们扩展了3PC协议以进一步提供完全安全（并保证输出传递），同时每个参与方每个乘法门的摊销1个环元素的通信，几乎不对具体效率产生任何影响。这与文献中最佳的先前3PC协议形成对比，这些协议允许腐败方进行不可检测的拒绝服务攻击。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363227](https://doi.org/10.1145/3319535.3363227)
## Post-Collusion Security and Distance Bounding.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#post-collusion-security-and-distance-bounding) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#post-collusion-security-and-distance-bounding)**
### 作者
* Sjouke Mauw, University of Luxembourg & SnT, Esch-sur-Alzette, Luxembourg
* Zach Smith, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Jorge Toro-Pozo, ETH Zurich, Zurich, Switzerland
* Rolando Trujillo-Rasua, School of Information Technology, Deakin University, Melbourne, Australia
### 摘要
> 传统上，加密协议的验证是基于参与者未透露其长期密钥的假设构建的。然而，在某些情况下，参与者可能共谋以达到某些安全目标，而不透露他们的长期秘密。我们基于多重集重写开发了一个模型，用于推理安全协议中的共谋。我们引入了事后共谋安全的概念，用于验证在共谋发生后启动的会话中所声称的安全属性。我们使用事后共谋安全性来分析用于保护物理接近性的协议，即距离绑定协议上的恐怖分子欺诈行为。在恐怖分子欺诈攻击中，代理人共谋伪造接近性证明，而无法在没有进一步共谋的情况下发出进一步的虚假接近性证据。我们使用我们的定义和Tamarin证明器开发了一个模块化框架，用于验证距离绑定协议，该框架涵盖了文献中的所有攻击类型。我们对超过25个协议进行了调查，其中包括工业协议，如万事达卡的非接触式支付PayPass和NXP的MIFARE Plus与接近性检查。对于工业协议，我们确认了攻击，提出了修复方案，并提供了修复版本的计算机可验证的安全证明。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345651](https://doi.org/10.1145/3319535.3345651)
## Moving Beyond Set-It-And-Forget-It Privacy Settings on Social Media.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#moving-beyond-set-it-and-forget-it-privacy-settings-on-social-media) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#moving-beyond-set-it-and-forget-it-privacy-settings-on-social-media)**
### 作者
* Mainack Mondal, IIT Kharagpur & University of Chicago, Kharagpur, India
* Günce Su Yilmaz, University of Chicago, Chicago, IL, USA
* Noah Hirsch, University of Chicago, Chicago, IL, USA
* Mohammad Taha Khan, University of Illinois at Chicago, Chicago, IL, USA
* Michael Tang, University of Chicago, Chicago, IL, USA
* Christopher Tran, University of Illinois at Chicago, Chicago, IL, USA
* Chris Kanich, University of Illinois at Chicago, Chicago, IL, USA
* Blase Ur, University of Chicago, Chicago, IL, USA
* Elena Zheleva, University of Illinois at Chicago, Chicago, IL, USA
### 摘要
> 当用户在社交媒体上发布内容时，他们通过选择很少重新访问的访问控制设置来保护他们的隐私。用户生活和关系的变化，以及社交媒体平台本身，可能导致发布内容的实际隐私设置与期望的设置不匹配。管理这种设置的重要性结合潜在好友-发布对的高数量评估要求半自动化方法。我们通过用户研究和自动推断潜在不匹配隐私设置的方法来解决这个问题。共有78名Facebook用户重新评估了他们五个Facebook发布的隐私设置，并指示某些朋友是否能访问每个发布内容。他们还解释了他们的决策。根据这些用户数据，我们设计了一个分类器来识别当前具有错误分享设置的发布内容。与基于好友互动的基准分类器相比，该分类器显示了317%的改进。我们还发现，许多最有用的特征可以在不需要用户干预的情况下收集到，并且我们确定了提高分类器准确性的方向。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354202](https://doi.org/10.1145/3319535.3354202)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354202](https://dl.acm.org/doi/pdf/10.1145/3319535.3354202)
## Binary Control-Flow Trimming.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#binary-control-flow-trimming) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#binary-control-flow-trimming)**
### 作者
* Masoud Ghaffarinia, University of Texas at Dallas, Richardson, TX, USA
* Kevin W. Hamlen, University of Texas at Dallas, Richardson, TX, USA
### 摘要
> 介绍了一种新的自动减少二进制软件攻击面的方法，使代码使用者能够在特定部署环境中删除不需要或未使用的功能。该方法针对没有源衍生元数据或符号的剥离二进制本机代码，可以删除语义功能，无论是否被代码开发人员所期望或已知，并且预计使用者能够通过单元测试等方式展示所需功能，但可能不知道具体不需要的功能的存在，并且缺乏代码语义的任何正式规范。通过运行时跟踪、机器学习、内联参考监控和上下文控制流完整性执行的结合，证明在这些约束下自动化代码功能删除仍然是可行的，即使对于编译器和服务器等复杂程序也是如此。该方法还可以适应没有展示所需功能完整性的使用者；可调节的熵基度量检测覆盖不足，并保留未执行但可能需要的路径。Intel x86-64的原型实现显示了对精简二进制的低运行时开销（约为1.87%），案例研究表明基于使用者的控制流修整可以成功消除零日漏洞。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345665](https://doi.org/10.1145/3319535.3345665)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3345665](https://dl.acm.org/doi/pdf/10.1145/3319535.3345665)
## Program-mandering: Quantitative Privilege Separation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#program-mandering-quantitative-privilege-separation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#program-mandering-quantitative-privilege-separation)**
### 作者
* Shen Liu, Pennsylvania State University, University Park, PA, USA
* Dongrui Zeng, Pennsylvania State University, University Park, PA, USA
* Yongzhe Huang, Pennsylvania State University, University Park, PA, USA
* Frank Capobianco, Pennsylvania State University, University Park, PA, USA
* Stephen McCamant, University of Minnesota, Twin Cities, MN, USA
* Trent Jaeger, Pennsylvania State University, University Park, PA, USA
* Gang Tan, Pennsylvania State University, University Park, PA, USA
### 摘要
> 特权分离是提高软件安全性的一种有效技术。然而，过去的分区系统并未允许程序员在安全性和性能之间进行量化的权衡。本文中，我们描述了我们的工具链，名为PM。它可以自动找到程序分区中的最佳边界。这是通过解决一个整数规划模型来实现的，该模型优化用户选择的度量标准，同时满足其他度量标准上的安全性和性能约束。我们选择安全性度量来推理计算分区如何强制执行信息流控制，以保护程序免受低完整性输入的影响，或防止程序秘密泄露。因此，在敏感模块中位于最佳分区边界上的函数会自动识别出解密必要的位置。我们使用PM对一组真实世界的程序进行了实验，以保护机密性和完整性；结果显示，通过适度的用户指导，PM可以找到安全性和性能之间平衡更好的分区，而不需要手动解密的先前工具找到的分区。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354218](https://doi.org/10.1145/3319535.3354218)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354218](https://dl.acm.org/doi/pdf/10.1145/3319535.3354218)
## Flexible Byzantine Fault Tolerance.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#flexible-byzantine-fault-tolerance) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#flexible-byzantine-fault-tolerance)**
### 作者
* Dahlia Malkhi, Calibra, Menlo Park, CA, USA
* Kartik Nayak, Duke University, Durham, NC, USA
* Ling Ren, University of Illinois at Urbana-Champaign, Urbana, IL, USA
### 摘要
> 本文介绍了一种名为灵活BFT的新的BFT共识解决方案设计方法，主要围绕两个支柱展开，即更强的容错性和多样性。第一个支柱，更强的容错性，涉及到一种被称为alive-but-corrupt故障的新的错误模型。alive-but-corrupt副本可以任意偏离协议，以试图破坏协议的安全性。然而，如果它们无法破坏安全性，它们将不会试图阻止协议的活性。通过将alive-but-corrupt故障纳入模型，灵活BFT相对于纯拜占庭错误模型能够承受更高级别的故障。第二个支柱，多样性，设计了一种共识解决方案，其协议记录可用于在不同的信念下进行不同的提交决策。有了这种分离，同一个灵活BFT解决方案可以支持同步和异步信念，以及不同的容错性阈值组合，包括拜占庭错误和alive-but-corrupt故障。在技术层面上，灵活BFT通过引入一种同步BFT协议来实现上述结果，其中只有提交步骤需要知道网络延迟边界，因此副本可以在没有任何同步假设的情况下执行协议。其次，它通过剖析现有共识协议中不同quorum的作用引入了一种名为灵活拜占庭quorum的概念。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354225](https://doi.org/10.1145/3319535.3354225)
## Distributed Vector-OLE: Improved Constructions and Implementation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#distributed-vector-ole-improved-constructions-and-implementation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#distributed-vector-ole-improved-constructions-and-implementation)**
### 作者
* Phillipp Schoppmann, Humboldt-Universität zu Berlin, Berlin, Germany
* Adrià Gascón, Google, London, United Kingdom
* Leonie Reichert, Humboldt-Universität zu Berlin, Berlin, Germany
* Mariana Raykova, Google, New York, NY, USA
### 摘要
> 我们研究了分布式向量（Vector-OLE）上的具体高效协议。Boyle等人（CCS 2018）提出了一种使用亚线性通信的安全分布式伪随机Vector-OLE生成协议，但他们没有提供实现。他们的构建基于LPN假设的一种变体，并假设用于单点函数秘密分配（FSS）的分布式密钥生成协议，以及一种获取多点FSS的高效批处理方案。我们表明，可以放宽这一要求，从而得到FSS的较弱变体，并为其提供一个高效的协议。这使我们能够使用最近由Angel等人（S&amp;P 2018）用于批量PIR的高效概率批处理码。我们从我们的协议中构建了一个完整的Vector-OLE生成器，并与替代方法进行了实验比较。我们的实现具有很好的并行化，并且在实践中具有较低的通信开销。对于生成大小为$2^20 $的VOLE，我们的实现只需32个核心的$0.52$秒。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363228](https://doi.org/10.1145/3319535.3363228)
## Houdini's Escape: Breaking the Resource Rein of Linux Control Groups.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#houdinis-escape-breaking-the-resource-rein-of-linux-control-groups) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#houdinis-escape-breaking-the-resource-rein-of-linux-control-groups)**
### 作者
* Xing Gao, University of Memphis, Memphis, TN, USA
* Zhongshu Gu, IBM Research, YORKTOWN HEIGHTS, NY, USA
* Zhengfa Li, Independent Researcher, Memphis, TN, USA
* Hani Jamjoom, IBM Research, YORKTOWN HEIGHTS, NY, USA
* Cong Wang, Old Dominion University, Norfolk, VA, USA
### 摘要
> Linux控制组（cgroups）是实现操作系统级容器化的关键构建模块。cgroups机制将进程分组为层次结构，并应用不同的控制器来管理系统资源，包括CPU、内存、块I/O等。新创建的子进程会自动从父进程继承cgroups属性以实施资源控制。然而，通过进程创建继承cgroups约束并不能始终保证一致和公正的资源核算。在本文中，我们设计了一组利用策略，通过取消进程与其原始进程组的关联来生成带外工作负载。这种工作负载消耗的系统资源将不会计入相应的cgroups。为了进一步证明可行性，我们在Docker容器中展示了五个实例研究，演示了如何在现实场景中突破cgroups对资源的限制。更糟糕的是，通过利用多租户容器环境中的这些cgroups不足，恶意容器能够极大地增加所消耗的资源量，显著降低同一主机上其他容器的速度，并对系统资源获得额外的不公平优势。我们在本地测试环境和亚马逊EC2云专用服务器上进行了大量实验。实验结果表明，一个容器可以以其限制的200倍消耗系统资源（例如CPU），并将其他同居容器中特定工作负载的计算和I/O性能降低95%。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354227](https://doi.org/10.1145/3319535.3354227)
## Insecure Until Proven Updated: Analyzing AMD SEV's Remote Attestation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#insecure-until-proven-updated-analyzing-amd-sevs-remote-attestation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#insecure-until-proven-updated-analyzing-amd-sevs-remote-attestation)**
### 作者
* Robert Buhren, Technische Universität Berlin, Berlin, Germany
* Christian Werling, Hasso Plattner Institute, Potsdam, Germany
* Jean-Pierre Seifert, Technische Universität Berlin, Berlin, Germany
### 摘要
> 云计算是托管互联网服务的最重要技术之一，但不幸的是，它也导致了数据泄漏风险的增加。云服务的客户必须信任云提供商，因为他们控制着构成云的基本组件。这包括使多个租户共享单个硬件平台的虚拟化管理程序。作为在更高特权CPU模式下执行的程序，虚拟化管理程序可以直接访问虚拟机的内存。虽然可以使用众所周知的磁盘加密方法来保护静止数据，但驻留在主内存中的数据仍处于潜在的恶意云提供商的威胁之下。AMD的安全加密虚拟化（SEV）在此类云场景中声称提供了新的保护水平。AMD SEV使用虚拟机特定密钥加密虚拟机的主内存，从而阻止了更高特权的虚拟化管理程序访问客户虚拟机的内存。为了使云客户能够验证其虚拟机的正确部署，SEV还引入了远程认证协议。该协议是SEV技术的关键组成部分，可以证明SEV保护已经生效，并且虚拟机没有被篡改。本文分析了在当前AMD Epyc Naples CPU系列上实现SEV远程认证协议的固件组件。我们证明了可以提取关键的CPU特定密钥，这些密钥对于远程认证协议的安全至关重要。基于这些提取的密钥，我们提出了一些攻击，允许恶意云提供商完全绕过SEV保护机制。虽然AMD已经修复了底层固件问题，但我们证明当前的AMD Epyc CPU系列（即Naples系列）无法阻止先前固件版本的安装。我们证明了我们提出的攻击的严重性非常高，因为纯软件的缓解措施是不可能的。这有效地使当前的AMD Epyc CPU上的SEV技术在面对不受信任的云提供商时变得无用。为了克服这些问题，我们还提出了对SEV设计的强化改进，以使未来一代SEV技术能够缓解所提出的攻击。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354216](https://doi.org/10.1145/3319535.3354216)
## Triplet Fingerprinting: More Practical and Portable Website Fingerprinting with N-shot Learning.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#triplet-fingerprinting-more-practical-and-portable-website-fingerprinting-with-n-shot-learning) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#triplet-fingerprinting-more-practical-and-portable-website-fingerprinting-with-n-shot-learning)**
### 作者
* Payap Sirinam, Navaminda Kasatriyadhiraj Royal Air Force Academy, Bangkok, Thailand
* Nate Mathews, Rochester Institute of Technology, Rochester, NY, USA
* Mohammad Saidur Rahman, Rochester Institute of Technology, Rochester, NY, USA
* Matthew Wright, Rochester Institute of Technology, Rochester, NY, USA
### 摘要
> 网站指纹识别（WF）攻击对用户的在线隐私构成严重威胁，包括Tor匿名系统的用户。通过利用深度学习领域的最新进展，深度指纹识别（DF）等WF攻击已经达到了98%的准确率。然而，DF攻击需要大量的训练数据，并需要定期更新，这在WF中被假定为较弱的攻击模型，使其在实践中不太实用。此外，WF攻击的研究也因未能在更现实和更具挑战性的场景下证明攻击效果而受到批评。大多数WF攻击的研究假设测试和训练数据具有相似的分布，并且是在大致相同时期从同一类型的网络中收集的。本文研究了攻击者如何利用N-shot学习这一机器学习技术来减少收集和训练大规模WF数据集的工作量，并缓解处理不同网络条件的不利影响。特别是，我们提出了一种新的WF攻击方法，称为三元指纹识别（TF），它使用三元网络进行N-shot学习。我们在具有挑战性的设置中评估了此次攻击，例如在不同网络上多年后收集的训练和测试数据，我们发现TF攻击在这些设置中仍然具有85%或更高的准确率。我们还展示了TF攻击在开放世界中的有效性，且优于传统的迁移学习。此外，该攻击仅需要五个示例来识别一个网站，在许多实际场景中都具有危险性，因为在完整数据集上进行收集和训练是不切实际的。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354217](https://doi.org/10.1145/3319535.3354217)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354217](https://dl.acm.org/doi/pdf/10.1145/3319535.3354217)
## QUOTIENT: Two-Party Secure Neural Network Training and Prediction.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#quotient-two-party-secure-neural-network-training-and-prediction) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#quotient-two-party-secure-neural-network-training-and-prediction)**
### 作者
* Nitin Agrawal, University of Oxford, Oxford, United Kingdom
* Ali Shahin Shamsabadi, Queen Mary University of London, London, United Kingdom
* Matt J. Kusner, University of Oxford & The Alan Turing Institute, London, United Kingdom
* Adrià Gascón, University of Warwick & The Alan Turing Institute, London, United Kingdom
### 摘要
> 最近，在机器学习任务的安全协议设计方面投入了大量的努力。其中许多工作致力于实现从高度准确的深度神经网络（DNNs）中进行安全预测。然而，由于DNNs是基于数据进行训练的，一个关键问题是如何实现这些模型的安全训练。以前关于安全DNN训练的研究要么着重于为现有的训练算法设计定制协议，要么着重于开发专门的训练算法，然后应用通用的安全协议。在这项工作中，我们研究了同时设计训练算法和新颖安全协议的优势，并在两个方面进行了优化。我们提出了一种名为QUOTIENT的新的DNN离散训练方法，并为其定制了一个安全的两方协议。QUOTIENT包括了最先进的DNN训练的关键组件，如层归一化和自适应梯度方法，并在两方计算中改进了最先进的DNN训练方法。与以前的工作相比，我们在广域网时间上获得了50倍的改进和6%的绝对准确性提高。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3339819](https://doi.org/10.1145/3319535.3339819)
## Make Some ROOM for the Zeros: Data Sparsity in Secure Distributed Machine Learning.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#make-some-room-for-the-zeros-data-sparsity-in-secure-distributed-machine-learning) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#make-some-room-for-the-zeros-data-sparsity-in-secure-distributed-machine-learning)**
### 作者
* Phillipp Schoppmann, Humboldt-Universität zu Berlin, Berlin, Germany
* Adrià Gascón, The Alan Turing Institute / University of Warwick, London, United Kingdom
* Mariana Raykova, Google, New York, NY, USA
* Benny Pinkas, Bar-Ilan University, Ramat Gan, Israel
### 摘要
> 数据稀疏性的利用对于许多数据分析任务的可扩展性至关重要。然而，虽然对于分布式机器学习的高效安全计算协议越来越感兴趣，但到目前为止，在这种情景中还没有以原则性的方式考虑数据稀疏性。我们提出了稀疏数据结构及其对应的安全计算协议，以解决常见的数据分析任务并充分利用数据稀疏性。特别地，我们定义了一个用于访问稀疏结构中元素的只读无视映射原语（ROOM），并提出了几种具有不同权衡的该原语实例。然后，利用ROOM作为构建模块，我们提出了基本线性代数运算的协议，如聚集、散布以及多种稀疏矩阵乘法的变体。我们的协议通过使用秘密分享可以轻松组合。我们利用这一点来构建非参数模型（最近邻和朴素贝叶斯分类）和参数模型（逻辑回归）的安全协议，以便在高维数据集上进行安全分析。我们的协议实现的实验评估表明，在所有应用程序中，与现有技术相比，在效率方面有了多倍的改进。我们的系统的设计和构建与科学计算和机器学习框架中的模块化架构相一致，并受到稀疏BLAS标准的启发。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3339816](https://doi.org/10.1145/3319535.3339816)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3339816](https://dl.acm.org/doi/pdf/10.1145/3319535.3339816)
## PIEs: Public Incompressible Encodings for Decentralized Storage.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#pies-public-incompressible-encodings-for-decentralized-storage) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#pies-public-incompressible-encodings-for-decentralized-storage)**
### 作者
* Ethan Cecchetti, Cornell University, Ithaca, NY, USA
* Ben Fisch, Stanford University, Stanford, CA, USA
* Ian Miers, Cornell Tech, New York, NY, USA
* Ari Juels, Jacobs Institute, Cornell Tech, New York, NY, USA
### 摘要
> 我们提出了一种在分布式存储网络（DSNs）中支持文件复制的新原语，称为公共不可压缩编码（PIE）。 PIEs在具有挑战性的公共DSN设置中运行，其中文件必须使用公共随机性（即无加密）进行编码和解码，并且冗余数据的保留必须是可以公开验证的。它们防止了不可检测的数据压缩，可以使DSNs利用货币奖励或处罚来激励经济合理的服务器正确复制数据。它们的定义还排除了通过ASIC和其他定制硬件的并行攻击的关键已证实的攻击。我们的PIE构造是第一个经过实验证实的接近最优性能的构造，按照一种度量标准，性能比最优性能高不超过4倍。与其他类似的构造方式不同，它还允许解码速度比编码速度快几个数量级。我们通过一种称为Dagwood Sandwich Graph（DSaG）的图构造实现了这种高安全性和性能，该图构造是通过深度稳健图和超集中器的新型交错构建而成的。PIEs的性能使它们在DSNs中具有吸引力，例如拟议中的Filecoin系统和以太坊数据分片。相反，它们的接近最优性能为DSNs允许任意数据的实际财务和能源成本设定了令人关切的界限。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354231](https://doi.org/10.1145/3319535.3354231)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354231](https://dl.acm.org/doi/pdf/10.1145/3319535.3354231)
## Peeves: Physical Event Verification in Smart Homes.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#peeves-physical-event-verification-in-smart-homes) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#peeves-physical-event-verification-in-smart-homes)**
### 作者
* Simon Birnbach, University of Oxford, Oxford, United Kingdom
* Simon Eberz, University of Oxford, Oxford, United Kingdom
* Ivan Martinovic, University of Oxford, Oxford, United Kingdom
### 摘要
> 随着智能设备（例如智能恒温器、灯光、锁等）的日益普及，它们越来越多地被组合成“智能家居”。智能家居的一个关键组成部分是报告物理事件（例如门开启或灯光打开）的事件传感器，它们可以由系统自动触发或用户手动触发。然而，这些传感器收集的数据并不总是可靠的。事件传感器的故障和积极攻击者的干预都可能导致报告未发生的事件（事件欺骗）。这一点特别重要，因为智能家居可以在不需要用户干预的情况下触发事件链（例如在打开窗户时关闭暖气）。本文的目标是使用智能家居中常见的传感器数据（如加速度计或气压传感器）验证物理事件。这种方法既可以防止事件传感器的故障，也可以防范复杂的攻击者。为了验证我们系统的性能，我们在办公环境中设置了一个“智能家居”。在两周的时间里，我们使用48个传感器识别出22种事件类型。通过使用物理传感器的数据，我们验证了事件传感器提供的事件流。我们考虑了两种威胁模型：一种是零努力攻击者，他会在任意时间伪造事件；另一种是机会主义攻击者，他可以访问传感器数据的实时流以更好地选择攻击时机。我们在22个事件中有9个事件实现了完美分类，并且在15个事件中实现了0%的误报率，检测率超过99.9%。我们还展示了，即使是强有力的机会主义攻击者也只能伪造少数几个选择的事件，并且这样做需要长时间的等待。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354254](https://doi.org/10.1145/3319535.3354254)
## Balance: Dynamic Adjustment of Cryptocurrency Deposits.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#balance-dynamic-adjustment-of-cryptocurrency-deposits) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#balance-dynamic-adjustment-of-cryptocurrency-deposits)**
### 作者
* Dominik Harz, Imperial College London, London, United Kingdom
* Lewis Gudgeon, Imperial College London, London, United Kingdom
* Arthur Gervais, Imperial College London, London, United Kingdom
* William J. Knottenbelt, Imperial College London, London, United Kingdom
### 摘要
> 金融存款对于加密经济协议的安全性至关重要，因为它们作为对代理人潜在不当行为的保险。然而，当选择存款金额时，协议设计者和其代理人面临着一种权衡。虽然大额存款可能增加协议的安全性，例如通过最小化敌对行为的影响或货币波动的风险，但锁定的资本会产生机会成本。此外，一些协议在预期未来事件和代理人恶意意图时要求过度抵押。我们提出了Balance系统，这是一个与应用无关的系统，可以在不影响协议安全的情况下减少过度抵押。在Balance中，一旦降低了恶意代理人的存款，他们就不会因作弊而获得额外的效用。与此同时，诚实和理性的代理人因存款的机会成本降低而增加了表现诚实的效用。Balance是一种基于轮次的机制，代理人需要不断执行所期望的动作。我们明确地对代理人的激励和行为进行建模，证明了激励兼容的条件。在给定诚实、理性和恶意代理人分布的情况下，Balance可以提高社会福利。此外，我们将Balance与跨链互操作协议XCLAIM集成，将存款减少了10%，同时保持了诚实行为的相同效用。我们的实现允许更新所有代理人的得分最多需要55,287个gas（约0.07美元），更新所有代理人分配到层级的成本为54,948个gas（约0.07美元）。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354221](https://doi.org/10.1145/3319535.3354221)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354221](https://dl.acm.org/doi/pdf/10.1145/3319535.3354221)
## TokenScope: Automatically Detecting Inconsistent Behaviors of Cryptocurrency Tokens in Ethereum.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#tokenscope-automatically-detecting-inconsistent-behaviors-of-cryptocurrency-tokens-in-ethereum) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#tokenscope-automatically-detecting-inconsistent-behaviors-of-cryptocurrency-tokens-in-ethereum)**
### 作者
* Ting Chen, University of Electronic Science and Technology of China, Chengdu, China
* Yufei Zhang, University of Electronic Science and Technology of China, Chengdu, China
* Zihao Li, University of Electronic Science and Technology of China, Chengdu, China
* Xiapu Luo, The Hong Kong Polytechnic University, Hong Kong, Hong Kong
* Ting Wang, Pennsylvania State University, University Park, PA, USA
* Rong Cao, University of Electronic Science and Technology of China, Chengdu, China
* Xiuzhuo Xiao, University of Electronic Science and Technology of China, Chengdu, China
* Xiaosong Zhang, University of Electronic Science and Technology of China, Chengdu, China
### 摘要
> 受比特币成功的启发，出现了许多加密货币，其中大多数以以太坊为基础实现智能合约并被称为代币。为了规范这些代币与用户以及第三方工具（如钱包、交易市场等）之间的交互，提出了几种代币合约实现的标准。尽管现有代币涉及大量资金，但我们很少了解它们的行为是否与相关标准一致。不一致的行为可能导致用户困惑和财务损失，因为用户/第三方工具通过调用标准接口和监听标准事件与代币合约进行交互。在这项工作中，我们首次尝试研究与 ERC-20 标准最为流行的代币一致性相关的不一致行为。我们提出了一种新的方法来自动检测这种不一致性，通过对比来自三个不同来源的行为，包括记录代币持有者及其份额的核心数据结构的操作、标准接口指示的行为以及标准事件建议的行为。我们在一个名为 TokenScope 的新工具中实现了我们的方法，并用它来检查发送给已部署代币的所有交易。我们检测到触发不一致行为的 3,259,001 笔交易，这些行为来源于 7,472 个代币。通过对所有（2,353 个）存在不一致行为的开源代币进行人工检查，我们发现 TokenScope 的准确率超过 99.9%。此外，我们揭示了导致不一致行为的 11 个主要原因，例如存在缺陷的代币、缺少标准方法、缺乏标准事件等。特别是，我们发现了 50 个未报告的存在缺陷的代币。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345664](https://doi.org/10.1145/3319535.3345664)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3345664](https://dl.acm.org/doi/pdf/10.1145/3319535.3345664)
## Tesseract: Real-Time Cryptocurrency Exchange Using Trusted Hardware.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#tesseract-real-time-cryptocurrency-exchange-using-trusted-hardware) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#tesseract-real-time-cryptocurrency-exchange-using-trusted-hardware)**
### 作者
* Iddo Bentov, Cornell Tech, New York, NY, USA
* Yan Ji, Cornell Tech, New York, NY, USA
* Fan Zhang, Cornell Tech, New York, NY, USA
* Lorenz Breidenbach, ETH Zürich & Cornell Tech, Zurich, Swaziland
* Philip Daian, Cornell Tech, New York, NY, USA
* Ari Juels, Cornell Tech, New York, NY, USA
### 摘要
> 我们提出了Tesseract，一种安全的实时加密货币交易服务。现有的中心化交易所设计容易遭受资金盗窃，而去中心化交易所无法提供实时跨链交易。当前部署的所有交易所也容易受到“前面交易”攻击。Tesseract通过使用受信任的执行环境，克服了这些缺陷并实现了最佳的两全设计。将最近的交易数据提交到独立的加密货币系统中是一个全对全公平性的问题，我们提出了理论上的理想解决方案和实际解决方案。Tesseract不仅支持实时跨链加密货币交易，还支持加密资产的安全代币化。例如，Tesseract代币化的比特币可以在以太坊区块链上流通，用于智能合约。我们提供了Tesseract的演示实现，支持比特币、以太坊和类似的加密货币。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363221](https://doi.org/10.1145/3319535.3363221)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363221](https://dl.acm.org/doi/pdf/10.1145/3319535.3363221)
## Efficient MPC via Program Analysis: A Framework for Efficient Optimal Mixing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#efficient-mpc-via-program-analysis-a-framework-for-efficient-optimal-mixing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#efficient-mpc-via-program-analysis-a-framework-for-efficient-optimal-mixing)**
### 作者
* Muhammad Ishaq, University of Edinburgh, Edinburgh, Scotland Uk
* Ana L. Milanova, Rensselaer Polytechnic Institute, Troy, NY, USA
* Vassilis Zikas, University of Edinburgh, Edinburgh, Scotland Uk
### 摘要
> 多方计算（MPC）协议已经通过广泛的优化努力，开始在实践中得到应用，并且已经开始取得成果。选择使用哪种MPC协议取决于我们要执行的计算。协议混合是一种有效的黑箱方法，可以优化性能。然而，尽管近年来取得了相当大的进展，现有的工作依然是启发式的，并且要么没有提供任何保证，要么需要指数级（穷举）搜索才能找到最优分配，而有人猜测这个问题是NP难题。我们提供了一个理论上有根据的方法来进行最优（MPC）协议分配，即最优混合，并证明在温和和自然的假设下，无论是理论上还是实践上，这个问题都是可处理的，用于计算最佳的三选二组合。具体来说，对于两个协议的情况，我们利用程序分析技术（我们专门针对MPC量身定制的技术）来定义一个新的整数规划，我们称之为最优协议分配（简称OPA）问题，其解决方案是这两个协议的最优（混合）协议分配。最重要的是，我们证明了与OPA松弛相对应的线性规划的解是整数解，因此也是OPA的解。由于线性规划可以高效地解决，这就得到了第一个高效的协议混合器。我们通过将OPA求解器应用于混合文献中的标准基准测试来展示我们的OPA求解器的质量。我们的OPA求解器可以应用于任何三选二协议组合，以获得最佳的三选二协议分配。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3339818](https://doi.org/10.1145/3319535.3339818)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3339818](https://dl.acm.org/doi/pdf/10.1145/3319535.3339818)
## Two-Thirds Honest-Majority MPC for Malicious Adversaries at Almost the Cost of Semi-Honest.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#two-thirds-honest-majority-mpc-for-malicious-adversaries-at-almost-the-cost-of-semi-honest) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#two-thirds-honest-majority-mpc-for-malicious-adversaries-at-almost-the-cost-of-semi-honest)**
### 作者
* Jun Furukawa, NEC Israel Research Center, Tel Aviv, Israel
* Yehuda Lindell, Bar-Ilan University & Unbound Tech, Ramat Gan, Israel
### 摘要
> 安全多方计算（MPC）使一组参与方能够在不透露除输出之外的任何东西的情况下，安全地进行联合计算。对于半诚实的对手，只要被腐败的参与方运行指定的协议并确保传输中没有泄漏，就能够保证安全性。相比之下，对于恶意对手，只要能够运行任何攻击策略，就能够保证安全性。实际上，通常需要保证对于恶意对手的安全性（并且总是首选的），但是代价很大。在本文中，我们提出了一个针对三分之二诚实多数的协议，以几乎与半诚实对手的最佳已知协议完全相同的代价实现了对于恶意对手的安全性。我们的构建不是一个通用的转换，因此可能会有更好的半诚实协议被构建出来，不支持我们的转换。尽管如此，根据目前的最新技术（基于Shamir分享），我们的协议每次乘法门只需调用一次最佳的半诚实乘法协议（加上一些可以忽略不计的本地计算），具体来说，我们的协议的最佳版本要求每个参与方平均发送刚好2 2/3个元素给每个乘法门（当乘法门数量至少等于参与方数量时）。对于小领域来说，这比Barak等人（ACM CCS 2018）的最佳协议快四倍，对于大领域来说，这比Chida等人（CRYPTO 2018）的最佳协议快两倍。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3339811](https://doi.org/10.1145/3319535.3339811)
## Signed Cryptographic Program Verification with Typed CryptoLine.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#signed-cryptographic-program-verification-with-typed-cryptoline) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#signed-cryptographic-program-verification-with-typed-cryptoline)**
### 作者
* Yu-Fu Fu, Academia Sinica, Taipei, Taiwan Roc
* Jiaxiang Liu, Shenzhen University, Shenzhen, China
* Xiaomu Shi, Shenzhen University, Shenzhen, China
* Ming-Hsien Tsai, Academia Sinica, Taipei, Taiwan Roc
* Bow-Yaw Wang, Academia Sinica, Taipei, Taiwan Roc
* Bo-Yin Yang, Academia Sinica, Taipei, Taiwan Roc
### 摘要
> 我们开发了一种自动形式技术，用于在密码程序中指定和验证有符号计算。除了新的指令外，我们还引入了一种类型系统，用于检测程序中的类型错误。我们还提供了一种类型推理算法，用于推断密码程序中的类型和指令变体。为了验证有符号密码 C 程序，我们开发了一个从 GCC 中间表示到我们语言的转换器。通过使用我们的技术，我们已经验证了密码库中包括 NaCl、wolfSSL、bitcoin、OpenSSL 和 BoringSSL 在内的82个 C 函数。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354199](https://doi.org/10.1145/3319535.3354199)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354199](https://dl.acm.org/doi/pdf/10.1145/3319535.3354199)
## PrivDPI: Privacy-Preserving Encrypted Traffic Inspection with Reusable Obfuscated Rules.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#privdpi-privacy-preserving-encrypted-traffic-inspection-with-reusable-obfuscated-rules) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#privdpi-privacy-preserving-encrypted-traffic-inspection-with-reusable-obfuscated-rules)**
### 作者
* Jianting Ning, Fujian Normal University & National University of Singapore, Fuzhou China & Singapore, Singapore
* Geong Sen Poh, Trustwave & NUS-Singtel Cyber Security Lab, Singapore, Singapore
* Jia-Ch'ng Loh, NUS-Singtel Cyber Security Lab, Singapore, Singapore
* Jason Chia, NUS-Singtel Cyber Security Lab, Singapore, Singapore
* Ee-Chien Chang, National University of Singapore, Singapore, Singapore
### 摘要
> 网络中间箱执行深度数据包检查（DPI）以检测网络流量中的异常和可疑活动。然而，越来越多的流量被加密，中间箱无法理解它们。Sherry等人（SIGCOMM 2015）最近提出的一个方案，名为BlindBox，使中间箱能够以保护隐私的方式执行检查。BlindBox部署混淆电路以生成用于直接检查加密流量的加密规则。然而，混淆电路所引起的设置延迟（据报道，在一组规则为3,000时可能达到97秒）和开销大小很高。由于通信只能在生成加密规则之后开始，这种延迟在许多实时应用中是无法容忍的。在这项工作中，我们提出了PrivDPI，它可以减少设置延迟，同时保持相似的隐私保证。与BlindBox相比，对于一组规则为3,000，我们的加密规则生成速度比BlindBox快288倍，并且在第一次会话中需要的开销小了290,227倍，而在连续的20次会话中，速度更快了1,036倍，并且开销小了3424,505倍。性能的提升基于一种新的生成加密规则的技术，以及在后续会话中重用前一个会话中生成的中间结果的思想。这与BlindBox不同，后者在每个会话中都会从头开始生成加密规则。然而，我们的实现中，PrivDPI在生成加密流量令牌方面要慢6倍，但每秒可以加密17,271个令牌的速率对于许多实时应用来说已经足够。此外，每个会话中生成的中间值可以在后续会话中重复使用以加快令牌的加密。总的来说，我们的实验证明PrivDPI是实用的，特别适用于短流的连接。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354204](https://doi.org/10.1145/3319535.3354204)
## Updatable Anonymous Credentials and Applications to Incentive Systems.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#updatable-anonymous-credentials-and-applications-to-incentive-systems) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#updatable-anonymous-credentials-and-applications-to-incentive-systems)**
### 作者
* Johannes Blömer, Paderborn University, Paderborn, Germany
* Jan Bobolz, Paderborn University, Paderborn, Germany
* Denis Diemert, Paderborn University, Paderborn, Germany
* Fabian Eidens, Paderborn University, Paderborn, Germany
### 摘要
> 我们介绍了可更新的匿名凭证系统（UACS），并利用它们构建了一个新的保护隐私的激励系统。在UACS中，持有证书证明某些属性的用户可以与相应的颁发者进行交互以更新其属性。在此过程中，颁发者知道运行的更新函数，但不会了解用户的先前属性。因此，更新过程保护了用户的匿名性。一类更新函数的例子是整数属性的加法更新，其中颁发者通过某个已知值k将未知整数属性值v递增。这种更新类型是基于UACS应用于激励系统的动机。在激励系统中，用户可以匿名地积累积分，例如在结账时，在以后可以用于折扣。本文中，我们（1）正式定义了UACS及其安全性，（2）提供了支持任意更新函数的UACS的通用构建方法，以及（3）利用UACS构建了一个新的激励系统，该系统在提供离线双重消费保护和部分消费的同时效率高。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354223](https://doi.org/10.1145/3319535.3354223)
## Hardware-assisted Trusted Execution Environments: Look Back, Look Ahead.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#hardware-assisted-trusted-execution-environments-look-back-look-ahead) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#hardware-assisted-trusted-execution-environments-look-back-look-ahead)**
### 作者
* N. Asokan, University of Waterloo, Waterloo, Canada
### 摘要
> 过去20年来，基于硬件的隔离执行环境，通常被称为“可信执行环境”（Trusted Execution Environments，简称TEE），已经得到广泛应用[1,2,3,4]。然而，对于其漏洞（如Foreshadow攻击[5]）和滥用潜力的担忧一直存在，并近年来变得越发突出。在本次讲座中，我将讨论（移动）TEE的历史[6]，阐述它们设计和大规模部署的动机，以及它们在过去20年间的演变。随后我将讨论一些它们的不足之处，并提出克服这些不足的潜在方法。我还将简要介绍处理器制造商推出的其他类型的硬件安全原语，以及它们为保护计算提供的机会。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3364969](https://doi.org/10.1145/3319535.3364969)
## Gollum: Modular and Greybox Exploit Generation for Heap Overflows in Interpreters.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#gollum-modular-and-greybox-exploit-generation-for-heap-overflows-in-interpreters) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#gollum-modular-and-greybox-exploit-generation-for-heap-overflows-in-interpreters)**
### 作者
* Sean Heelan, University of Oxford, Oxford, United Kingdom
* Tom Melham, University of Oxford, Oxford, United Kingdom
* Daniel Kroening, University of Oxford, Oxford, United Kingdom
### 摘要
> 我们提出了自动利用生成器中对于解释器中堆溢出的第一种方法。这也是任何一类整合了对于自动堆布局操作的解决方案的程序的利用生成的第一种方法。该方法的核心是一种新颖的探索利用原语的方法，即目标程序的输入，导致了敏感操作，例如函数调用或内存写入，利用了攻击者注入的数据。为了从堆溢出漏洞中产生一个利用原语，我们必须发现一个目标数据结构来破坏，确保该数据结构的一个实例与堆上溢出源相邻，并确保溢出后的破坏数据被攻击者所需的方式使用。我们的系统以自动的、灰盒的和模块化的方式处理了这三个任务。我们的实现被称为GOLLUM，并通过在PHP和Python解释器中的10个独特漏洞中生成利用来展示其能力，其中有5个漏洞目前没有公开的利用程序。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354224](https://doi.org/10.1145/3319535.3354224)
## SLAKE: Facilitating Slab Manipulation for Exploiting Vulnerabilities in the Linux Kernel.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#slake-facilitating-slab-manipulation-for-exploiting-vulnerabilities-in-the-linux-kernel) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#slake-facilitating-slab-manipulation-for-exploiting-vulnerabilities-in-the-linux-kernel)**
### 作者
* Yueqi Chen, Pennsylvania State University, State College, PA, USA
* Xinyu Xing, Pennsylvania State University, State College, PA, USA
### 摘要
> 为了确定内核漏洞的可利用性，安全分析师通常需要操作内核内存分配器（slab），从而展示获取程序计数器控制权或执行特权提升的能力。然而，这个过程往往很繁琐，因为（1）分析师通常对于哪些对象和系统调用对内核漏洞利用有用毫无线索，（2）他缺乏操作内存分配器和获取所需布局的知识。过去，研究人员提出了各种技术来促进漏洞利用的开发。不幸的是，这些技术都无法轻松应用来应对这些挑战。一方面，这是因为Linux内核非常复杂。另一方面，这是由于内存分配器变化的动态和非确定性。在这项工作中，我们从两个角度解决上述挑战。首先，我们使用静态和动态分析技术探索内核对象以及对利用有用的相应系统调用。其次，我们建立了一个技术方法来促进内存分配器布局的调整，并对常用的利用方法进行建模。通过扩展LLVM和Syzkaller，我们实施了这些技术，并将它们的组合命名为SLAKE。我们使用27个真实世界的内核漏洞进行SLAKE的评估，结果表明它不仅可以多样化内核利用的方式，还有时能提高内核漏洞的可利用性。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363212](https://doi.org/10.1145/3319535.3363212)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363212](https://dl.acm.org/doi/pdf/10.1145/3319535.3363212)
## SecTEE: A Software-based Approach to Secure Enclave Architecture Using TEE.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#sectee-a-software-based-approach-to-secure-enclave-architecture-using-tee) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#sectee-a-software-based-approach-to-secure-enclave-architecture-using-tee)**
### 作者
* Shijun Zhao, Institute of Software Chinese Academy of Sciences, Beijing, China
* Qianying Zhang, Capital Normal University, Beijing, China
* Yu Qin, Institute of Software Chinese Academy of Sciences, Beijing, China
* Wei Feng, Institute of Software Chinese Academy of Sciences, Beijing, China
* Dengguo Feng, Institute of Software Chinese Academy of Sciences, Beijing, China
### 摘要
> 安全隔离提供了一种实用的安全计算解决方案，当前的安全隔离方法是通过将硬件安全机制扩展到CPU架构来实现的。因此，如果一个平台的CPU架构没有配备任何安全隔离功能，那么它很难提供安全计算。不幸的是，主宰手机设备并在云市场上势头增长的ARM CPU并没有提供任何安全机制，实现与现代安全隔离架构相当的安全性。在本文中，我们提出了SecTEE，这是一种基于CPU隔离机制的软件型安全隔离架构，不需要CPU架构中专门的安全硬件，如内存加密引擎。SecTEE即使与基于硬件的安全隔离架构相比，也能实现较高水平的安全性：抵抗特权主机软件攻击、轻量级物理攻击和基于内存访问的侧信道攻击。此外，SecTEE为隔离环境提供了丰富的可信计算基元：完整性测量、远程证明、数据封存、密钥分配和生命周期管理。我们基于ARM TrustZone技术实现了SecTEE原型，但我们的方法也可以应用于具有隔离机制的其他CPU架构。评估结果显示，大部分开销源于软件加密，由可信计算基元带来的运行时开销是可以接受的。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363205](https://doi.org/10.1145/3319535.3363205)
## A Tale of Two Worlds: Assessing the Vulnerability of Enclave Shielding Runtimes.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#a-tale-of-two-worlds-assessing-the-vulnerability-of-enclave-shielding-runtimes) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#a-tale-of-two-worlds-assessing-the-vulnerability-of-enclave-shielding-runtimes)**
### 作者
* Jo Van Bulck, KU Leuven, Leuven, Belgium
* David Oswald, University of Birmingham, Birmingham, United Kingdom
* Eduard Marin, University of Birmingham, Birmingham, United Kingdom
* Abdulla Aldoseri, University of Birmingham, Birmingham, United Kingdom
* Flavio D. Garcia, University of Birmingham, Birmingham, United Kingdom
* Frank Piessens, University of Birmingham, Leuven, United Kingdom
### 摘要
> 这篇论文分析了可信执行环境（TEE）中的漏洞空间，当受信任的飞地应用与不受信任的、潜在有恶意的代码进行接口交互时产生。大量的研究和工业努力已经投入到开发TEE运行时库，旨在透明地保护飞地应用代码免受敌对环境的影响。然而，我们的分析揭示出，在现实世界的TEE运行时实现中，人们对保护要求的理解普遍不够清晰。我们揭示了在应用二进制接口（ABI）和应用编程接口（API）层面上存在几个需要清理的漏洞，这些漏洞可能导致编译后的飞地出现可利用的内存安全和侧信道漏洞。缓解这些漏洞不像简单地确保指针在飞地内存之外那样简单。事实上，我们证明了，即使是像Intel的edger8r、Microsoft的“深拷贝传输”或内存安全语言Rust这样的最新缓解技术，也无法完全消除这种攻击面。我们的分析揭示了在Intel SGX、RISC-V和Sancus TEE等8个主要开源保护框架中存在35个飞地接口清理漏洞。我们在几个攻击场景中实际利用了这些漏洞，从飞地泄露了秘钥，或启用了远程代码重用。我们已经负责任地公开了我们的发现，导致了5个指定的CVE记录和许多漏洞开源项目的安全补丁，包括Intel SGX-SDK，Microsoft Open Enclave，Google Asylo和Rust编译器。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363206](https://doi.org/10.1145/3319535.3363206)
## zkay: Specifying and Enforcing Data Privacy in Smart Contracts.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#zkay-specifying-and-enforcing-data-privacy-in-smart-contracts) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#zkay-specifying-and-enforcing-data-privacy-in-smart-contracts)**
### 作者
* Samuel Steffen, ETH Zurich, Zurich, Switzerland
* Benjamin Bichsel, ETH Zurich, Zurich, Switzerland
* Mario Gersbach, ETH Zurich, Zurich, Switzerland
* Noa Melchior, ETH Zurich, Zurich, Switzerland
* Petar Tsankov, ETH Zurich, Zurich, Switzerland
* Martin Vechev, ETH Zurich, Zurich, Switzerland
### 摘要
> 智能合约的隐私问题是阻碍其广泛采用的主要障碍。保护私密数据的一种有希望的方法是使用加密原语隐藏数据，然后通过非交互式零知识（NIZK）证明来强制执行状态更新的正确性。不幸的是，NIZK语句的表达能力不及智能合约，这强迫开发者将一些功能保留在合约中。这导致逻辑分散，分散在合约代码和NIZK语句中，并且隐私保证不明确。为了解决这些问题，我们提出了zkay语言，引入了定义私有值所有者的隐私类型。zkay合约经过静态类型检查，以确保它们可通过NIZK证明实现，并防止意外的信息泄漏。此外，zkay合约的逻辑可以通过忽略隐私类型来轻松理解。为了执行zkay合约，我们将其自动转换为在公共区块链上具有相同隐私和功能的合约。我们在一个概念验证实现上评估了我们的方法，并使用zkay实现了10个有趣的示例合约。我们的结果表明zkay是实用的：转换后合约的链上执行成本约为每笔交易1M gas（约为0.50美元），离链执行成本适中。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363222](https://doi.org/10.1145/3319535.3363222)
## Log2vec: A Heterogeneous Graph Embedding Based Approach for Detecting Cyber Threats within Enterprise.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#log2vec-a-heterogeneous-graph-embedding-based-approach-for-detecting-cyber-threats-within-enterprise) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#log2vec-a-heterogeneous-graph-embedding-based-approach-for-detecting-cyber-threats-within-enterprise)**
### 作者
* Fucheng Liu, Institute of Information Engineering, CAS & School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yu Wen, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Dongxue Zhang, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Xihe Jiang, Institute of Information Engineering, CAS & School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Xinyu Xing, The Pennsylvania State University & JD Security Research Center, University Park, PA, USA
* Dan Meng, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
### 摘要
> 内部员工的常规攻击和新兴的高级持续性威胁(APT)都是组织信息系统面临的主要威胁。现有的检测方法主要集中在用户行为上，通常分析记录在信息系统中的操作日志。总的来说，大部分方法考虑了日志条目之间的顺序关系，并对用户的顺序行为进行建模。然而，它们忽略了其他关系，必然导致在各种攻击场景下表现不佳。我们提出了log2vec，一种基于异构图嵌入的模块化方法。首先，它采用启发式方法，根据它们之间的多种关系将日志条目转化为一个异构图。接下来，它利用一种适用于上述异构图的改进图嵌入方法，可以自动将每个日志条目表示为一个低维向量。log2vec的第三个组成部分是一种实用的检测算法，能够将恶意和良性的日志条目分别归类到不同的簇中，并识别出恶意的日志条目。我们实现了一个log2vec的原型。我们的评估结果表明，log2vec在性能上明显优于深度学习和隐马尔可夫模型(HMM)等最先进的方法。此外，log2vec在各种攻击场景中展示了检测恶意事件的能力。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363224](https://doi.org/10.1145/3319535.3363224)
## Privacy Aspects and Subliminal Channels in Zcash.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#privacy-aspects-and-subliminal-channels-in-zcash) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#privacy-aspects-and-subliminal-channels-in-zcash)**
### 作者
* Alex Biryukov, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Daniel Feher, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Giuseppe Vitto, University of Luxembourg, Esch-sur-Alzette, Luxembourg
### 摘要
> 在本文中，我们分析了面向隐私的加密货币Zcash的两个隐私和安全问题。首先，我们研究了隐蔽交易，并展示了指纹用户交易的方法，包括主动攻击。我们介绍了两种新攻击，分别称为Danaan-gift攻击和Dust攻击。在最近的Zcash协议Sapling更新之后，我们研究了新的和旧的zk-SNARK协议之间的交互以及它们对交易隐私的影响。在论文的第二部分中，我们检查了zk-SNARK协议和Pedersen承诺中是否存在潜在渠道。我们展示了高效的70位渠道的存在，这些渠道可以用于标记隐蔽交易，从而允许攻击者（恶意交易验证者）将由恶意修改的zk-SNARK证明者发行的交易与诚实验证者/用户的常规交易相连。我们讨论了针对这些隐私问题的对策。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345663](https://doi.org/10.1145/3319535.3345663)
## Effective and Light-Weight Deobfuscation and Semantic-Aware Attack Detection for PowerShell Scripts.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#effective-and-light-weight-deobfuscation-and-semantic-aware-attack-detection-for-powershell-scripts) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#effective-and-light-weight-deobfuscation-and-semantic-aware-attack-detection-for-powershell-scripts)**
### 作者
* Zhenyuan Li, Zhejiang University, Hangzhou, China
* Qi Alfred Chen, University of California, Irvine, Irvine, CA, USA
* Chunlin Xiong, Zhejiang University, Hangzhou, China
* Yan Chen, Northwestern University, Evanston, IL, USA
* Tiantian Zhu, Zhejiang University of Technology, Hangzhou, China
* Hai Yang, MagicShield Inc, Hangzhou, China
### 摘要
> 近年来，PowerShell 被越来越多地用于各种网络攻击，包括高级持续性威胁、勒索软件、钓鱼邮件、加密货币挖矿、金融威胁和无文件攻击。然而，由于 PowerShell 语言的动态特性和不同层级上的脚本构建能力，现有的基于静态分析的 PowerShell 攻击检测方法在面对混淆时容易受到攻击。为了解决这个问题，本文设计了第一种有效且轻量级的 PowerShell 脚本去混淆方法。为了精确识别可恢复的脚本片段，我们设计了一种新颖的基于子树的去混淆方法，该方法在 PowerShell 脚本的抽象语法树的子树级别上执行混淆检测和仿真恢复。在这个新的去混淆方法的基础上，我们进一步设计了第一个基于语义的 PowerShell 攻击检测系统。为了实现基于语义的检测，我们利用经典的面向对象关联挖掘算法，新鲜地识别出了 31 个 PowerShell 攻击的语义特征。我们对一组 2342 个良性样本和 4141 个恶意样本进行了评估，并发现我们的去混淆方法平均只需不到 0.5 秒，同时将混淆和原始脚本之间的相似性从仅有 0.5% 增加到约为 80%，因此既有效又轻量级。此外，应用我们的去混淆方法后，Windows Defender 和 VirusTotal 的攻击检测率分别大幅提高到 75.0% 和 90.0%，而且我们的语义感知攻击检测系统在应用去混淆后平均真阳性率为 92.3%，假阳性率为 0%，表现优于 Windows Defender 和 VirusTotal。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363187](https://doi.org/10.1145/3319535.3363187)
## MalMax: Multi-Aspect Execution for Automated Dynamic Web Server Malware Analysis.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#malmax-multi-aspect-execution-for-automated-dynamic-web-server-malware-analysis) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#malmax-multi-aspect-execution-for-automated-dynamic-web-server-malware-analysis)**
### 作者
* Abbas Naderi-Afooshteh, University of Virginia, Charlottesville, VA, USA
* Yonghwi Kwon, University of Virginia, Charlottesville, VA, USA
* Anh Nguyen-Tuong, University of Virginia, Charlottesville, VA, USA
* Ali Razmjoo-Qalaei, ZDResearch, Charlottesville, VA, USA
* Mohammad-Reza Zamiri-Gourabi, ZDResearch, Charlottesville, VA, USA
* Jack W. Davidson, University of Virginia, Charlottesville, VA, USA
### 摘要
> 本文介绍了MalMax，一种新颖的系统，用于检测经常采用复杂的多态逃避运行时代码生成技术的服务器端恶意软件。当MalMax遇到一个呈现多个可能执行路径的执行点（例如，通过谓词和/或动态代码），它通过在隔离的执行环境中进行反事实执行来探索这些路径。此外，MalMax的一个独特特征是其合作隔离执行模型，其中一个执行上下文中的未解决的构件（例如变量、函数和类）可以使用其他执行上下文中的值进行具体化。这种合作大大扩大了反事实执行的范围。以Wordpress为例，合作使得代码覆盖率增加了63%。反事实执行和合作隔离执行的组合使得MalMax能够准确有效地识别恶意行为。我们使用一家商业网络托管公司收集的大型（1TB）现实世界的PHP Web应用程序数据集对MalMax进行了广泛评估。我们通过将其检测恶意软件的能力与聚合了许多不同扫描器的恶意软件检测器VirusTotal进行比较来评估MalMax的有效性。我们的评估结果显示，MalMax在暴露复杂多态恶意软件中的恶意行为方面非常有效。即使在野外7个月后，MalMax还能够识别出1,485个其他现有尖端工具未检测到的恶意软件样本。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363199](https://doi.org/10.1145/3319535.3363199)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363199](https://dl.acm.org/doi/pdf/10.1145/3319535.3363199)
## Where Does It Go?: Refining Indirect-Call Targets with Multi-Layer Type Analysis.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#where-does-it-go-refining-indirect-call-targets-with-multi-layer-type-analysis) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#where-does-it-go-refining-indirect-call-targets-with-multi-layer-type-analysis)**
### 作者
* Kangjie Lu, University of Minnesota, Twin Cities, Minneapolis, MN, USA
* Hong Hu, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 系统软件通常使用间接调用来实现动态程序行为。然而，间接调用也会给构建精确控制流图带来挑战，而精确的控制流图是许多静态程序分析和系统加固技术的标准前提条件。不幸的是，识别间接调用目标是一个困难的问题。特别是，现代编译器默认情况下不识别间接调用目标。现有方法通过类型分析来识别间接调用目标，匹配函数指针和地址被取函数的类型。然而，这种方法的一个问题是误报率较高，因为许多不相关的函数可能共享相同的类型。本文提出了一种新的方法，称为多层次类型分析（MLTA），用于有效地细化C/C++程序的间接调用目标。MLTA依赖于一个观察结果，即函数指针通常存储在类型具有多层次类型层次结构的对象中；在进行间接调用之前，函数指针将从具有相同类型层次结构的对象中加载。通过匹配函数指针和函数的多层次类型，MLTA可以显著细化间接调用目标。MLTA是有效的，因为多层次类型比单层次类型更为限制性。它通过保守地跟踪多层次类型之间的目标传播，不会引入误报。而且，分层设计使得MLTA可以在某个层次的分析变得不可行时安全地回退。我们在基于LLVM的系统TypeDive中实现了MLTA，并对Linux内核、FreeBSD内核和Firefox浏览器进行了广泛评估。评估结果显示，与现有方法相比，TypeDive可以消除86%至98%的更多间接调用目标，而不引入新的误报。我们还证明了TypeDive不仅提高了静态分析的可扩展性，还有助于语义错误的检测。通过TypeDive，在Linux内核中发现了35个新的深层次语义错误。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354244](https://doi.org/10.1145/3319535.3354244)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354244](https://dl.acm.org/doi/pdf/10.1145/3319535.3354244)
## Succinct Arguments for Bilinear Group Arithmetic: Practical Structure-Preserving Cryptography.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#succinct-arguments-for-bilinear-group-arithmetic-practical-structure-preserving-cryptography) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#succinct-arguments-for-bilinear-group-arithmetic-practical-structure-preserving-cryptography)**
### 作者
* Russell W. F. Lai, Friedrich-Alexander University Erlangen-Nuremberg, Erlangen, Germany
* Giulio Malavolta, Carnegie Mellon University, Pittsburgh, PA, USA
* Viktoria Ronge, Friedrich-Alexander University Erlangen-Nuremberg, Erlangen, Germany
### 摘要
> 在Groth和Sahai的著名工作中，他们构建了通用双线性群算法关系的非交互零知识（NIZK）证明[Eurocrypt’08，SICOMP’12]，从而催生了整个结构保护密码学的子领域。密码学理论的这一分支专注于先进加密原语的模块化设计。尽管Groth和Sahai的证明系统是一个强大的工具包，但当证人的大小很大时，其效率会受到限制，因为证明大小与证人的大小成线性关系。在这项工作中，我们重新审视了在零知识条件下证明通用双线性群算术关系的问题。具体来说，我们构建了一个精简的零知识论证，其中通信复杂度与证人的整数和源群元素的对数成关系。我们的论证具有公共硬币设置和验证器，因此可以使用随机预言机模型中的Fiat-Shamir转化变为非交互式。对于仅含整数未知数的非双线性群算术关系的特殊情况，我们的系统可以在非双线性群中实例化。在许多应用中，我们的论证系统可以作为Groth-Sahai证明的即插即用替代品，将结构保护密码学的现有先进原语转化为具有短证明的实际高效系统。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354262](https://doi.org/10.1145/3319535.3354262)
## LegoSNARK: Modular Design and Composition of Succinct Zero-Knowledge Proofs.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#legosnark-modular-design-and-composition-of-succinct-zero-knowledge-proofs) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#legosnark-modular-design-and-composition-of-succinct-zero-knowledge-proofs)**
### 作者
* Matteo Campanelli, IMDEA Software Institute, Madrid, Spain
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Anaïs Querol, IMDEA Software Institute & Universidad Politécnica de Madrid, Madrid, Spain
### 摘要
> 我们研究通过轻量级方式链接小而专业化的“gadget”SNARKs来模块化构建非交互式证明系统的问题。我们的动机既是理论的，也是实际的。在理论方面，模块化的SNARK设计将是灵活和可重用的。此外，先前的研究（例如，Geppetto）已经成功地应用于先前的工作（引用之前的论文）。然而，这些方法往往是特殊情况的，并且是重复发明轮子。我们提出填补这一空白。在实践中，专门的SNARKs有可能比绝大多数现有工作关注的通用方案更高效。如果一个计算自然地呈现不同的“组件”（例如一个算术电路和一个布尔电路），通用方案将会将它们同质化为单一表示，从而导致性能上的成本。通过模块化方法，可以利用计算的微妙之处，并为每个组件选择最佳的小工具。我们的贡献是LegoSNARK，一种适用于承诺证明零知识SNARKs（CP-SNARKs）的“工具箱”（或框架），包括：1）一般组合工具：从用于基本关系的证明小工具构建新的CP-SNARKs。形式化了cc-SNARK的概念。2）一种“提升”工具：一种编译器，可以高效地为广泛类别的现有zkSNARKs添加承诺和证明能力。这使它们可以在同一计算中相互操作（可链接）。例如，一个基于QAP的方案可以用来证明一个组件；另一个基于GKR的方案可以用来证明另一个组件。3）一系列精简证明小工具，适用于各种关系。此外，通过我们的框架和小工具，我们能够获得新的精简证明系统。值得注意的是：-- LegoGro16是Groth16 zkSNARK的一种承诺和证明版本，它使用经典Pedersen向量承诺对数据进行运算，并在证明时间上实现了5000倍的加速。-- LegoUAC是一种基于配对的用于算术电路的SNARK，具有一个通用的、独立于电路的CRS，以及与电路门数呈线性关系的证明时间（与Groth等人的最近方案相比，后者具有二次CRS和准线性的证明时间）。-- LegoMM是一种用于矩阵乘法的CP-SNARK，实现了最佳的证明复杂性。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3339820](https://doi.org/10.1145/3319535.3339820)
## Efficient Zero-Knowledge Arguments in the Discrete Log Setting, Revisited.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#efficient-zero-knowledge-arguments-in-the-discrete-log-setting-revisited) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#efficient-zero-knowledge-arguments-in-the-discrete-log-setting-revisited)**
### 作者
* Max Hoffmann, Ruhr-University Bochum, Bochum, Germany
* Michael Klooß, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Andy Rupp, Karlsruhe Institute of Technology, Karlsruhe, Germany
### 摘要
> 零知识证明已经变得实用并广泛应用，尤其在区块链领域，例如在Zcash中。本研究重新审查了离散对数设置中的零知识证明。首先，我们确定并提取了这个设置中优化证明的基本技术（部分在之前隐式使用），特别是协议的线性组合是获得零知识和/或减少通信的有用工具。利用这些技术，我们能够设计出Bootle等人（EUROCRYPT '16）和Bünz等人（S&P '18）的对数通信证明的零知识变体，几乎不增加额外的开销。然后，我们构建了一个概念上简单的提交和证明论证，证明了一组二次方程的可满足性。与以前的工作不同，我们不限于排名1约束系统（R1CS）。据我们所知，这是第一项证明一般二次约束（而不仅仅是R1CS）在离散对数或理想线性承诺设置中是自然的关系的工作。这为优化提供了新的可能性，例如，任何n2次多项式f（X）现在可以通过至多2n个二次约束进行“求值”。我们的协议是模块化的。我们轻松构建了一个高效的对数规模洗牌证明，可用于电子投票。此外，我们对定量安全度量进行了更详细的研究，例如提取器的效率。我们形式化了短路提取，使我们能够给出提取器效率的更紧密界限。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354251](https://doi.org/10.1145/3319535.3354251)
## Sonic: Zero-Knowledge SNARKs from Linear-Size Universal and Updatable Structured Reference Strings.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#sonic-zero-knowledge-snarks-from-linear-size-universal-and-updatable-structured-reference-strings) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#sonic-zero-knowledge-snarks-from-linear-size-universal-and-updatable-structured-reference-strings)**
### 作者
* Mary Maller, University College London, London, United Kingdom
* Sean Bowe, Electric Coin Company, Denver, CO, USA
* Markulf Kohlweiss, University of Edinburgh & IOHK, Edinburgh, United Kingdom
* Sarah Meiklejohn, University College London, London, United Kingdom
### 摘要
> 自从引入以来，零知识证明已成为解决各种应用中的隐私和可扩展性问题的重要工具。在许多系统中，每个客户端都需要下载和验证每个新的证明，因此证明必须小且便宜以进行验证。最实用的方案要么需要一个可信的设置（如预处理的 zk-SNARKs），要么需要验证复杂度与关系复杂度成线性关系（如 Bulletproofs）。大多数 zk-SNARK 方案所需的结构化参考字符串可以通过多方计算协议构造，但其结果参数是特定于个别关系的。Groth等人发现了一种具有通用结构化参考字符串且可更新的 zk-SNARK 协议，但该字符串与支持的关系大小成二次关系扩展。在这里，我们描述了一种零知识 SNARK，Sonic，它支持通用且持续可更新的结构化参考字符串，其大小成线性扩展。我们还描述了一种通用的技术，即在不可信的“助手”情况下，可以计算可以使一批证明更高效地被验证的建议。Sonic 证明的大小是恒定的，并且在“助手”批量验证上下文中，验证的边际成本与文献中效率最高的 SNARK 几乎相当。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3339817](https://doi.org/10.1145/3319535.3339817)
## The SPHINCS+ Signature Framework.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#the-sphincs-signature-framework) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#the-sphincs-signature-framework)**
### 作者
* Daniel J. Bernstein, University of Illinois at Chicago & Ruhr University Bochum, Chicago, IL, USA
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, Netherlands
* Stefan Kölbl, Cybercrypt, Copenhagen, Denmark
* Ruben Niederhagen, Fraunhofer SIT, Darmstadt, Darmstadt, Germany
* Joost Rijneveld, Radboud University, Nijmegen, Netherlands
* Peter Schwabe, Radboud University, Nijmegen, Netherlands
### 摘要
> 我们介绍了SPHINCS+，这是一种无状态的基于哈希的签名框架。从速度、签名大小和安全性等方面来看，SPHINCS+相对于当前的最新技术有重要优势，并且是NIST PQC标准化项目第二轮中九种剩余的签名方案之一。在这种背景下，我们的主要贡献之一是一个新的少次数签名方案，我们称之为FORS。我们的第二个主要贡献是引入了可调整哈希函数，并展示了它们如何允许对基于哈希的签名方案进行统一安全性分析。我们使用这个抽象为SPHINCS+提供了安全降低，并根据结果导出了安全参数。最后，我们展示了我们优化实现的SPHINCS+的速度结果，并与SPHINCS-256、Gravity-SPHINCS和Picnic进行了比较。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363229](https://doi.org/10.1145/3319535.3363229)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363229](https://dl.acm.org/doi/pdf/10.1145/3319535.3363229)
## Membership Privacy for Fully Dynamic Group Signatures.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#membership-privacy-for-fully-dynamic-group-signatures) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#membership-privacy-for-fully-dynamic-group-signatures)**
### 作者
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security & Stanford University, Saarbrücken, Germany
* Jonas Schneider-Bensch, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 群签名在传统数字签名的目标和签名者隐私需求之间达成了一个妥协，可以创建出在群组成员身份之外不透露实际签名者身份的不可伪造签名。当前流行的模型中缺少的一个重要考虑因素是，群组成员本身可能是敏感信息，特别是如果群组成员具有动态性，即成员身份可能随时间变化。我们通过引入与完全动态群签名方案的成员隐私的形式概念来解决这个问题，这可以很容易地与迄今为止最具表现力的群签名安全模型进行整合。然后，我们提出了一个基于具有灵活公钥签名（SFPK）和等价类上的签名（SPSEQ）的具有成员隐私的完全动态群签名方案的通用构建方法。最后，我们设计了一种针对SFPK的新颖技术，以构建一个高效的标准模型方案（即不使用随机预言机），其提供比目前业界非隐私方案更短的签名。这表明，虽然我们引入的严格更强的安全概念在完全动态群签名研究中尚未被充分探索，但实际上它们并不会增加额外的成本。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354257](https://doi.org/10.1145/3319535.3354257)
## Geneva: Evolving Censorship Evasion Strategies.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#geneva-evolving-censorship-evasion-strategies) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#geneva-evolving-censorship-evasion-strategies)**
### 作者
* Kevin Bock, University of Maryland, College Park, MD, USA
* George Hughey, University of Maryland, College Park, MD, USA
* Xiao Qiang, University of California, Berkeley, Berkeley, CA, USA
* Dave Levin, University of Maryland, College Park, MD, USA
### 摘要
> 研究人员和审查制度长期以来一直进行猫鼠游戏，导致了越来越复杂的互联网规模审查技术以及逃避这些技术的方法。在本文中，我们从先前的手动逃避-检测循环中彻底转变，通过开发自动发现绕过审查策略的技术来实现。我们提出了一种名为Geneva的新型遗传算法，它可以演化出基于数据包操作的绕过国家级审查的策略。Geneva通过四种基本的数据包操作原语（丢弃、篡改标头、复制和分割）进行组合、突变和演化，形成复杂的策略。通过在实验室和中国、印度和哈萨克斯坦等多个真实审查者进行的实验，我们证明Geneva能够快速独立地重新推导出之前工作中的大部分策略，并产生出新的亚种和全新的数据包操作策略。此外，Geneva发现了之前的研究认为无效的成功策略，并将已经灭绝的策略演化成新的可行变体。我们分析Geneva创建的新策略，以推断审查者以前未知的行为。Geneva是自动化规避审查的第一步；为此，我们已经公开了我们的代码和数据。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363189](https://doi.org/10.1145/3319535.3363189)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363189](https://dl.acm.org/doi/pdf/10.1145/3319535.3363189)
## Conjure: Summoning Proxies from Unused Address Space.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#conjure-summoning-proxies-from-unused-address-space) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#conjure-summoning-proxies-from-unused-address-space)**
### 作者
* Sergey Frolov, University of Colorado Boulder, Boulder, CO, USA
* Jack Wampler, University of Colorado Boulder, Boulder, CO, USA
* Sze Chuen Tan, University of Illinois at Urbana-Champaign, Urbana-Champaign, IL, USA
* J. Alex Halderman, University of Michigan, Ann Arbor, MI, USA
* Nikita Borisov, University of Illinois at Urbana-Champaign, Urbana-Champaign, IL, USA
* Eric Wustrow, University of Colorado Boulder, Boulder, CO, USA
### 摘要
> 透明网络（前身为“诱骗路由”）已成为绕过互联网审查的有前途的下一代方法。与试图将个别规避代理服务器隐藏在审查者视线之外不同，代理功能在网络核心，即友邦国家的合作ISP中实现。任何经过这些ISP的连接都可能成为信息自由流动的通道，因此审查者不能轻易阻止访问而不阻止许多合法网站。虽然最近在ISP规模上部署了一种透明方案TapDance，但它存在一些问题：在实际部署中，“诱骗”网站数量有限，技术复杂度高，并且在性能和审查者可观测性之间存在不可取的权衡。这些挑战可能妨碍更广泛的部署，并最终允许审查者阻止此类技术。我们提出了Conjure，一种改进的透明网络方法，通过利用部署ISP的未使用地址空间来解决这些限制。我们的方案不使用真实网站作为代理连接的诱饵目标，而是连接到不存在网络服务器的IP地址，利用网络核心的代理功能。这些幻主机对于审查者很难与真实主机区分，但客户端可以将其用作代理。我们定义了Conjure协议，分析了其安全性，并使用一个ISP测试平台评估了一个原型。我们的结果表明，Conjure比TapDance更难阻止，维护和部署更简单，并且提供了更好的网络性能。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363218](https://doi.org/10.1145/3319535.3363218)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363218](https://dl.acm.org/doi/pdf/10.1145/3319535.3363218)
## You Shall Not Join: A Measurement Study of Cryptocurrency Peer-to-Peer Bootstrapping Techniques.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#you-shall-not-join-a-measurement-study-of-cryptocurrency-peer-to-peer-bootstrapping-techniques) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#you-shall-not-join-a-measurement-study-of-cryptocurrency-peer-to-peer-bootstrapping-techniques)**
### 作者
* Angelique Faye Loe, Royal Holloway, University of London, London, United Kingdom
* Elizabeth Anne Quaglia, Royal Holloway, University of London, London, United Kingdom
### 摘要
> 加密货币是依赖于分布式对等网络的数字资产。新同行最初加入对等网络所使用的方法被称为引导引导。在没有使用集中资源的情况下引导引导的能力是一个未解决的挑战。在本文中，我们调查了74种加密货币使用的引导引导技术，并发现受审查风险较高的方法，如DNS播种和IP硬编码，是最常见的。针对这一发现，我们测试了两种对审查不太敏感的引导引导技术，即Tor和ZMap，以确定它们是否是更具鲁棒性、在操作上可行的替代方案。我们利用分布式RIPE Atlas网络对42个国家的92个DNS种子进行全球测量研究，提供了每种加密货币的对等网络拓扑的详细信息，并突出显示影响引导引导过程的DNS故障和查询操纵的实例。我们的研究还揭示了所研究的加密货币的源代码仅来自五个主要仓库，从而解释了遗留的引导引导方法的继承。最后，我们讨论了研究结果的影响，并提出了减轻风险的建议。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345649](https://doi.org/10.1145/3319535.3345649)
## SAMPL: Scalable Auditability of Monitoring Processes using Public Ledgers.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#sampl-scalable-auditability-of-monitoring-processes-using-public-ledgers) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#sampl-scalable-auditability-of-monitoring-processes-using-public-ledgers)**
### 作者
* Gaurav Panwar, New Mexico State University, Las Cruces, NM, USA
* Roopa Vishwanathan, New Mexico State University, Las Cruces, NM, USA
* Satyajayant Misra, New Mexico State University, Las Cruces, NM, USA
* Austin Bos, New Mexico State University, Las Cruces, NM, USA
### 摘要
> 有组织的监视，尤其是来自政府的监视，对个人隐私构成了重大挑战，这是由于政府拥有的资源以及可能出现的过度干预的可能性。鉴于侵入性监控的影响，在大多数民主国家中，政府监视在理论上是受到监控和公众监督的，以防止违规行为。然而，实践中，保护个人隐私权利并避免削弱国家安全调查效力之间存在着难以把握的微妙平衡，正如政府监视项目的报告所揭示的，这些报告引起了公众的争议，并受到了公民和隐私权利组织的质疑。监视通常是通过一种机制进行的，即联邦机构向联邦或州法官（例如美国外国情报监视法庭，加拿大最高法院）获取令状，以传唤公司或服务提供商（例如Google、Microsoft）的客户数据。法院提供关于这些请求（接受、拒绝）的年度统计数据，而公司则提供年度透明度报告供公众审计。然而，在实践中，法院和公司提供的统计信息非常抽象、泛化，是事后发布的，并且不足以对操作进行审计。这往往归因于缺乏可扩展的报告和透明的审计机制。在本文中，我们提出了SAMPL，这是一个创新的审计框架，它利用密码学机制（如零知识证明、Pedersen承诺、Merkle树和公共分类账）来创建一个可扩展的机制，用于审计涉及多个参与方的电子监视过程。SAMPL是第一个可以识别违反法院指令限定范围的参与方（如机构和公司）的框架。我们通过实验演示了SAMPL处理并发监控过程的可扩展性，同时不损害其保密性和可审计性。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354219](https://doi.org/10.1145/3319535.3354219)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354219](https://dl.acm.org/doi/pdf/10.1145/3319535.3354219)
## LibreCAN: Automated CAN Message Translator.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#librecan-automated-can-message-translator) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#librecan-automated-can-message-translator)**
### 作者
* Mert D. Pesé, University of Michigan, Ann Arbor, MI, USA
* Troy Stacer, University of Michigan, Ann Arbor, MI, USA
* C. Andrés Campos, University of Michigan, Ann Arbor, MI, USA
* Eric Newberry, University of Michigan, Ann Arbor, MI, USA
* Dongyao Chen, University of Michigan, Ann Arbor, MI, USA
* Kang G. Shin, University of Michigan, Ann Arbor, MI, USA
### 摘要
> 现代连接和自动驾驶车辆（CAVs）配备了越来越多的电子控制单元（ECUs），其中许多ECUs产生大量数据。数据通过车辆内部网络在ECU之间交换，其中控制区域网络（CAN）总线是当代车辆中的事实标准。此外，CAVs不仅具有物理接口，还通过其遥测控制单元（TCUs）与互联网增加的数据连接，使得可以通过移动设备进行远程访问。还可以窃取并从CAN总线读取/写入数据，因为CAN总线上传输的数据没有加密。这自然引发了对汽车网络安全性的担忧。到目前为止，最多数车辆安全攻击的共同点是它们最终需要对CAN总线进行写入操作。为了对车辆行为进行有针对性和有意的更改，恶意的CAN注入攻击需要了解CAN消息格式。然而，由于这种格式是原始设备制造商（OEM）专有的，甚至在同一车型的不同车辆中也可能不同，因此必须手动逆向工程化每个目标车辆的CAN消息格式 —— 这是一个耗时且繁琐的过程，无法扩展。为了解决这个困难，我们开发了LibreCAN，可以以最小的努力翻译大多数CAN消息。我们在多辆车上进行了广泛评估，证明了LibreCAN在准确性、覆盖率、所需手动工作和对任何车辆的可扩展性方面的高效性。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363190](https://doi.org/10.1145/3319535.3363190)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363190](https://dl.acm.org/doi/pdf/10.1145/3319535.3363190)
## Trick or Heat?: Manipulating Critical Temperature-Based Control Systems Using Rectification Attacks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#trick-or-heat-manipulating-critical-temperature-based-control-systems-using-rectification-attacks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#trick-or-heat-manipulating-critical-temperature-based-control-systems-using-rectification-attacks)**
### 作者
* Yazhou Tu, University of Louisiana at Lafayette, Lafayette, LA, USA
* Sara Rampazzi, University of Michigan, Ann Arbor, MI, USA
* Bin Hao, University of Louisiana at Lafayette, Lafayette, LA, USA
* Angel Rodriguez, University of Michigan, Ann Arbor, MI, USA
* Kevin Fu, University of Michigan, Ann Arbor, MI, USA
* Xiali Hei, University of Louisiana at Lafayette, Lafayette, LA, USA
### 摘要
> 温度感知和控制系统广泛应用于闭环控制关键流程中，如维持患者的热稳定性或检测与温度相关的危险的警报系统。然而，这些系统的安全性仍未完全探索，存在潜在的攻击面，可以被利用来控制关键系统。在本文中，我们从安全和安全角度研究基于温度的控制系统的可靠性。我们展示了如何通过对模拟温度感测器组件进行物理级攻击引发意外后果和安全风险。例如，我们演示了敌对行为者如何远程操纵婴儿孵化器的温度传感器测量结果，从而可能引发安全问题，而无需篡改受害系统或触发自动温度警报。这种攻击利用了操作放大器和仪表放大器中可能引发的非预期整流效应，控制传感器输出，欺骗受害系统的内部控制回路进行加热或冷却。此外，我们还展示了如何利用这种硬件级漏洞可能影响共享类似信号调理过程的不同类别的模拟传感器。我们的实验结果表明，通常部署在这些系统中的常规防御措施不足以应对威胁，因此我们提出了一个低成本异常检测器的原型设计，用于关键应用，以确保温度传感器信号的完整性。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354195](https://doi.org/10.1145/3319535.3354195)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354195](https://dl.acm.org/doi/pdf/10.1145/3319535.3354195)
## OPERA: Open Remote Attestation for Intel's Secure Enclaves.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#opera-open-remote-attestation-for-intels-secure-enclaves) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#opera-open-remote-attestation-for-intels-secure-enclaves)**
### 作者
* Guoxing Chen, Ohio State University, Columbus, OH, USA
* Yinqian Zhang, Ohio State University, Columbus, OH, USA
* Ten-Hwang Lai, Ohio State University, Columbus, OH, USA
### 摘要
> Intel软件保护扩展（SGX）远程证明允许enclave对其所运行的硬件进行认证，并向远程方证明其enclave内存的完整性。为了强制实施对证明的直接控制，Intel要求通过Intel的证明服务对证明进行验证。然而，这种以Intel为中心的证明模型既不保护隐私，也在需要分布式和频繁的证明时效率低下。本文介绍了OPERA，一种用于enclave远程证明的开放平台。在进行证明时，OPERA不涉及Intel的证明服务，虽然它依赖于Intel建立一个基于SGX硬件根源的信任链。OPERA是开放的，因为其证明服务的实现完全开放，允许任何enclave开发者运行自己的OPERA服务，并且其执行是公开可验证的，因此值得信赖；OPERA是隐私保护的，因为证明服务不会了解到底正在进行证明的enclave是哪个或证明是何时进行的；OPERA是高效的，因为它不依赖于单点验证，同时减少了验证的延迟。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354220](https://doi.org/10.1145/3319535.3354220)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354220](https://dl.acm.org/doi/pdf/10.1145/3319535.3354220)
## Towards Memory Safe Enclave Programming with Rust-SGX.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#towards-memory-safe-enclave-programming-with-rust-sgx) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#towards-memory-safe-enclave-programming-with-rust-sgx)**
### 作者
* Huibo Wang, Baidu X-Lab & The University of Texas at Dallas, Richardson, TX, USA
* Pei Wang, Baidu X-Lab, Sunnyvale, CA, USA
* Yu Ding, Baidu X-Lab, Sunnyvale, CA, USA
* Mingshen Sun, Baidu X-Lab, Sunnyvale, CA, USA
* Yiming Jing, Baidu X-Lab, Sunnyvale, CA, USA
* Ran Duan, Baidu X-Lab, Beijing, China
* Long Li, Baidu X-Lab, Beijing, China
* Yulong Zhang, Baidu X-Lab, Sunnyvale, CA, USA
* Tao Wei, Baidu X-Lab, Sunnyvale, CA, USA
* Zhiqiang Lin, Ohio State University, Columbus, OH, USA
### 摘要
> Intel Software Guard eXtension (SGX) 是一种硬件支持的受信任执行环境（TEE），旨在保护安全关键应用程序。然而，由于 enclave 内部运行的软件仍然是使用不安全类型语言如 C/C++ 开发的，因此它并不能终止传统的内存损坏漏洞。本文提出了 RUST-SGX，一种高效且分层的方法，用于消除在 SGX enclave 内部运行的软件的内存损坏问题。其关键思想是使用一种高效的内存安全系统语言 Rust 和 RUST-SGX SDK 来开发 enclave 程序，解决如何使 SGX 软件内存安全以及与 Intel 提供的 SDK 相比如何保持高效的关键挑战。因此，我们提议在 Intel SGX SDK 之上构建 RUST-SGX，并使用形式化证明的内存安全技术来驯服不安全的组件。我们已经实现了 RUST-SGX，并对一系列基准测试程序进行了测试。我们的评估结果显示，与由 Intel SGX SDK 开发的软件相比，RUST-SGX 对 SGX 特定功能和服务的额外开销很小（少于 5%），同时具有更强的内存安全性。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354241](https://doi.org/10.1145/3319535.3354241)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354241](https://dl.acm.org/doi/pdf/10.1145/3319535.3354241)
## CHURP: Dynamic-Committee Proactive Secret Sharing.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#churp-dynamic-committee-proactive-secret-sharing) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#churp-dynamic-committee-proactive-secret-sharing)**
### 作者
* Sai Krishna Deepak Maram, Cornell Tech, New York, NY, USA
* Fan Zhang, Cornell Tech, New York, NY, USA
* Lun Wang, University of California, Berkeley, Berkeley, CA, USA
* Andrew Low, University of California, Berkeley, Berkeley, CA, USA
* Yupeng Zhang, Texas A&M, College Station, TX, USA
* Ari Juels, Cornell Tech, New York, NY, USA
* Dawn Song, University of California, Berkeley, Berkeley, CA, USA
### 摘要
> 我们介绍了CHURP（CHUrn-Robust Proactive 秘密共享）。CHURP在动态环境中实现了安全的秘密共享，其中存储秘密的节点委员会会随时间变化。CHURP专为区块链设计，与先前方案相比具有更低的通信复杂度：在乐观情况下，没有节点故障，链上复杂度为$O(n)$，链下复杂度为$O(n^2)$。CHURP包括几个技术创新：一种高效的新型前瞻化方案，一个使用非对称双变量多项式的技术，用于高效改变秘密共享的阈值，并在高效多项式承诺方案中防范设置故障。我们还介绍了一种针对无许可区块链的点对点网络的低成本链下通信的通用新技术。我们对CHURP的安全性进行了正式证明，报告了实现情况，并提供了性能测量数据。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363203](https://doi.org/10.1145/3319535.3363203)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363203](https://dl.acm.org/doi/pdf/10.1145/3319535.3363203)
## Efficient Verifiable Secret Sharing with Share Recovery in BFT Protocols.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#efficient-verifiable-secret-sharing-with-share-recovery-in-bft-protocols) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#efficient-verifiable-secret-sharing-with-share-recovery-in-bft-protocols)**
### 作者
* Soumya Basu, Cornell University & IC3, Ithaca, NY, USA
* Alin Tomescu, Massachusetts Institute of Technology, Cambridge, MA, USA
* Ittai Abraham, VMware Research, Herzliya, Israel
* Dahlia Malkhi, Calibra, Menlo Park, CA, USA
* Michael K. Reiter, University of North Carolina at Chapel Hill & VMware Research, Chapel Hill, NC, USA
* Emin Gün Sirer, Cornell University & IC3, Ithaca, NY, USA
### 摘要
> 拜占庭容错状态机复制（SMR）提供了强大的完整性保证，但没有提供任何隐私保证。一种添加隐私保证的自然方法是通过秘密共享状态而不是完全复制它。这种组合可以解决一些困难问题，如公平交换或分布式认证机构。然而，将秘密共享状态纳入传统的拜占庭容错（BFT）SMR协议中存在独特的挑战。BFT协议通常使用具有一定程度异步性的网络模型，使可验证秘密共享（VSS）不合适。然而，完全异步VSS（AVSS）也是不必要的，因为BFT算法提供了广播通道。我们首先介绍了VSS与共享恢复问题，这是将秘密共享状态纳入BFT引擎所需的AVSS的子问题。然后，我们提供了第一个VSS与共享恢复解决方案KZG-VSSR，在其中，无故障共享仅产生每个副本的恒定数量的加密操作。最后，我们展示了如何在只产生恒定开销的情况下，有效地将VSSR的任何实例集成到BFT复制协议中。使用先前的AVSS协议实例化VSSR需要对于单个共享值的二次通信成本，并且在纳入BFT复制时产生线性开销。我们通过使用BFT复制和两个VSSR实例KZG-VSSR和Ped-VSSR构建的私有键值存储来展示我们的端到端解决方案，并呈现其评估结果。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354207](https://doi.org/10.1145/3319535.3354207)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354207](https://dl.acm.org/doi/pdf/10.1145/3319535.3354207)
## Two-party Private Set Intersection with an Untrusted Third Party.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#two-party-private-set-intersection-with-an-untrusted-third-party) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#two-party-private-set-intersection-with-an-untrusted-third-party)**
### 作者
* Phi Hung Le, George Mason University, Fairfax, VA, USA
* Samuel Ranellucci, Unbound Tech, Petach Tikva, Israel
* S. Dov Gordon, George Mason University, Fairfax, VA, USA
### 摘要
> 我们构建了一种新的协议，使得两个参与方能够安全地对其交集中的项进行计算。我们的协议利用了一个没有输入的不受信任的第三方。使用这个第三方的方式使我们能够构建高效的协议，能够抵御单一的恶意损坏。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345661](https://doi.org/10.1145/3319535.3345661)
## The Art and Craft of Fraudulent App Promotion in Google Play.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#the-art-and-craft-of-fraudulent-app-promotion-in-google-play) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#the-art-and-craft-of-fraudulent-app-promotion-in-google-play)**
### 作者
* Mizanur Rahman, Amazon, Seattle, WA, USA
* Nestor Hernandez, Florida International University, Miami, FL, USA
* Ruben Recabarren, Florida International University, Miami, FL, USA
* Syed Ishtiaque Ahmed, University of Toronto, Toronto, Canada
* Bogdan Carbunar, Florida International University, Miami, FL, USA
### 摘要
> 黑帽应用搜索优化（ASO）以伪造评论和马甲账户的形式在同行意见网站上很常见，例如应用商店，对用户的数字和实际生活产生了负面影响。为了检测和过滤欺诈行为，越来越多的研究提供了关于欺诈发布活动各个方面的见解，并根据在线数据对欺诈者的工作流程进行了假设。然而，这些假设往往缺乏实际欺诈者的经验证据。为了解决这个问题，在本文中，我们展示了一项定性研究的结果，我们从5个自由职业网站招募了18名ASO工作者，研究了他们在Google Play上的活动，并进行了一项定量调查，收集了其他39名与欺诈相关的数据。我们揭示了关于ASO工作者能力和行为各个方面的发现，包括对他们工作模式的新见解，并对一些已有假设提供了支持证据。此外，我们发现并报告了参与者透露的绕过谷歌强制验证的技术，避免被检测的具体策略，甚至利用欺诈检测来提高欺诈效果的策略。我们报告了一个谷歌网站漏洞，使我们能够推断出在Google Play中发布了超过1.98亿条评论的移动设备型号，其中包括9942条伪造评论。我们讨论了我们发现的更深层次的影响，包括它们在开发下一代欺诈检测和预防系统方面的潜在用途。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345658](https://doi.org/10.1145/3319535.3345658)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3345658](https://dl.acm.org/doi/pdf/10.1145/3319535.3345658)
## CryptoGuard: High Precision Detection of Cryptographic Vulnerabilities in Massive-sized Java Projects.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#cryptoguard-high-precision-detection-of-cryptographic-vulnerabilities-in-massive-sized-java-projects) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#cryptoguard-high-precision-detection-of-cryptographic-vulnerabilities-in-massive-sized-java-projects)**
### 作者
* Sazzadur Rahaman, Virginia Tech, Blacksburg, VA, USA
* Ya Xiao, Virginia Tech, Blacksburg, VA, USA
* Sharmin Afrose, Virginia Tech, Blacksburg, VA, USA
* Fahad Shaon, University of Texas at Dallas, Dallas, TX, USA
* Ke Tian, Virginia Tech, Blacksburg, VA, USA
* Miles Frantz, Virginia Tech, Blacksburg, VA, USA
* Murat Kantarcioglu, University of Texas at Dallas, Dallas, TX, USA
* Danfeng (Daphne) Yao, Virginia Tech, Blacksburg, VA, USA
### 摘要
> 密码API的错误使用，比如暴露秘密、可预测的随机数和易受攻击的证书验证，严重威胁软件安全。自动筛选大规模（例如数百万行代码）程序中的密码API调用的愿景并不新鲜。然而，由于在不损害分析质量的情况下降低错误警报的实际困难，这一目标尚未实现。CryptoGuard是一组检测算法，通过识别语言特定的无关元素来完善程序切片。这些完善减少了我们实验中76%至80%的错误警报。在46个高影响的大规模Apache项目和6,181个Android应用程序上运行我们的工具CryptoGuard，产生了许多安全洞察。我们的研究结果帮助了多个热门Apache项目加固他们的代码，包括Spark、Ranger和Ofbiz。我们还在这个领域的分析科学方面取得了进展，包括手动分析了1,295个Apache警报，确认了1,277个真阳性（98.61%的精度），并与CrySL、SpotBugs和Coverity等领先解决方案进行了深入比较。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345659](https://doi.org/10.1145/3319535.3345659)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3345659](https://dl.acm.org/doi/pdf/10.1145/3319535.3345659)
## Certificate Transparency in the Wild: Exploring the Reliability of Monitors.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#certificate-transparency-in-the-wild-exploring-the-reliability-of-monitors) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#certificate-transparency-in-the-wild-exploring-the-reliability-of-monitors)**
### 作者
* Bingyu Li, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
* Jingqiang Lin, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
* Fengjun Li, University of Kansas, Lawrence, KS, USA
* Qiongxiao Wang, Chinese Academy of Sciences, Beijing, China
* Qi Li, Tsinghua University, Beijing, China
* Jiwu Jing, University of Chinese Academy of Sciences, Beijing, China
* Congli Wang, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 为了检测伪造的TLS服务器证书并提高认证机构（CAs）的责任，提出了证书透明度（CT）来记录证书在公开可见的日志中，监视器从中获取所有证书并查看可疑证书。然而，如果监视器（无论是域名所有者自己还是第三方服务）未能返回为感兴趣的域名颁发的完整证书集，可能的伪造证书就无法被检测到，然后CT框架变得不太可靠。本文首次对CT监视器进行了系统研究。我们分析了88个公共日志中的数据以及5个活跃的第三方监视器关于6000个选定的Alexa Top-1M网站的3000431个证书的服务。我们发现，尽管CT允许普通域名所有者充当监视器，但他们自己进行可靠的处理是不实际的，因为公共日志中证书的数量迅速增加（例如，平均每天需要监视的最小日志集的记录为500万条或28.29 GB）。此外，我们的研究揭示了以下情况：（a）没有第三方监视器保证返回一个域的完整证书集，（b）对于一些域，即使是五个第三方监视器返回的证书的并集也可能是不完整的。因此，即使CT采用了功能良好的日志，被CT启用的浏览器接受的证书对于声称的域名所有者来说也不完全可见。公共日志中看不见的伪造证书的风险对CT的可靠性产生了质疑。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345653](https://doi.org/10.1145/3319535.3345653)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3345653](https://dl.acm.org/doi/pdf/10.1145/3319535.3345653)
## POSTER: Detecting Audio Adversarial Example through Audio Modification.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-detecting-audio-adversarial-example-through-audio-modification) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-detecting-audio-adversarial-example-through-audio-modification)**
### 作者
* Hyun Kwon, Korea Advanced Institute of Science and Technology, Daejeon, Republic of Korea
* Hyunsoo Yoon, Korea Advanced Institute of Science and Technology, Daejeon, Republic of Korea
* Ki-Woong Park, Sejong University, Seoul, Republic of Korea
### 摘要
> 深度神经网络（DNN）在图像识别、语音识别、模式分析和入侵检测等领域表现良好。然而，DNN对于将少量噪声添加到原始样本中的对抗性样本容易受到攻击。这些对抗性示例主要在图像领域研究，但它们对音频领域的影响目前备受关注。例如，将难以被人类识别的微小失真添加到原始样本中可以创建出音频对抗性示例，使人类能够无错误地听到，但只会让机器产生误解。因此，我们需要一种对抗音频对抗性示例的防御方法，因为它对音频领域构成威胁。在本文中，我们提出了一种检测音频对抗性示例的方法。该方法的关键点是使用音频修改来添加新的低级失真，以使对抗性示例的分类结果敏感地改变。另一方面，对于低级失真，原始样本的分类结果几乎没有变化。利用这个特点，我们提出了一种检测音频对抗性示例的方法。为了验证所提出的方法，我们使用了Mozilla Common Voice数据集和DeepSpeech模型作为目标模型。根据实验结果，发现对抗性示例的准确性在大约12 dB时降低到6.21%。与初始音频样本相比，它可以检测到音频对抗性示例。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363246](https://doi.org/10.1145/3319535.3363246)
## POSTER: Traffic Splitting to Counter Website Fingerprinting.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-traffic-splitting-to-counter-website-fingerprinting) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-traffic-splitting-to-counter-website-fingerprinting)**
### 作者
* Wladimir De la Cadena, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Asya Mitseva, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Jan Pennekamp, RWTH Aachen University, Aachen, Germany
* Jens Hiller, RWTH Aachen University, Aachen, Germany
* Fabian Lanze, Huf Secure Mobile GmbH, Velbert, Germany
* Thomas Engel, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Klaus Wehrle, RWTH Aachen University, Aachen, Germany
* Andriy Panchenko, Brandenburg University of Technology, Cottbus, Germany
### 摘要
> 网站指纹识别（WFP）是一种特殊类型的流量分析，旨在推测用户访问的网站。最近的研究表明，WFP针对Tor用户的效果比以前预期的更好。与此同时，最先进的防御已被证明效果较差。为此，我们提出了一种新颖的WFP防御方法，将流量分配到多个入口节点，以限制单个恶意入口可以使用的数据。在这里，我们探索了几种流量分配策略来分发用户流量。我们确定，我们的加权随机策略将四种最先进的WFP攻击的准确率从近95％降低到不到35％，而不需要任何人为延迟或虚拟流量。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363249](https://doi.org/10.1145/3319535.3363249)
## Force vs. Nudge: Comparing Users' Pattern Choices on SysPal and TinPal.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#force-vs-nudge-comparing-users-pattern-choices-on-syspal-and-tinpal) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#force-vs-nudge-comparing-users-pattern-choices-on-syspal-and-tinpal)**
### 作者
* Harshal Tupsamudre, TCS Research, Pune, India
* Sukanya Vaddepalli, TCS Research, Pune, India
* Vijayanand Banahatti, TCS Research, Pune, India
* Sachin Lodha, TCS Research, Pune, India
### 摘要
> Android的3X3图形图案锁方案是智能手机设备上广泛使用的认证方法之一。然而，用户只能在所有可能的389,112个图案中选择3X3图案的一个小子空间。Cho等人提出的SysPal和作者提出的TinPal这两个最近提出的界面表明，在现有界面上进行微小修改可以影响用户的3X3图案选择。虽然SysPal强制用户在其图案中包含一个、两个或三个系统分配的随机点，而TinPal则通过突出显示机制来向用户提供当前选择点可到达的点集信息。这两个界面都在不影响可用性的同时提高了3X3图案的安全性，但SysPal和TinPal之间没有进行比较。为了填补这一空白，我们进行了一项涉及147名参与者的新用户研究，并在三个SysPal界面上收集了图案，分别是1点、2点和3点的图案。我们使用一系列安全性和可用性指标来比较SysPal和TinPal的图案，包括图案长度、笔画长度、可猜测性、回忆时间和登录尝试次数。总体而言，我们发现在TinPal上创建的图案明显更长，并且更具抵抗猜测攻击的能力更强。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363250](https://doi.org/10.1145/3319535.3363250)
## Poster: A Proof-of-Stake (PoS) Blockchain Protocol using Fair and Dynamic Sharding Management.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-a-proof-of-stake-pos-blockchain-protocol-using-fair-and-dynamic-sharding-management) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-a-proof-of-stake-pos-blockchain-protocol-using-fair-and-dynamic-sharding-management)**
### 作者
* Daehwa Rayer Lee, Sungkyunkwan University, Suwon, Republic of Korea
* Yunhee Jang, Sungkyunkwan University, Suwon, Republic of Korea
* Hyoungshick Kim, CSIRO Data61, Sydney, Australia
### 摘要
> 基于分片的共识协议被引入以实现对区块链系统的共识工作和存储进行并行化。然而，现有的基于分片的共识算法在公平且安全地将矿工和交易分配到分片上方面设计不足，使得区块链系统容易受到多种攻击。为了克服现有基于分片的共识协议的这些局限性，我们提出了一种基于分片的公平且动态管理的权益证明（PoS）区块链协议。为了展示所提议的共识协议的安全性，我们对攻击概率进行了数值分析，发现当分片数量小于或等于6时，所提议的协议是安全的。此外，所提议的协议在真实参数设置下，与以太坊相比效率约高出186倍。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363254](https://doi.org/10.1145/3319535.3363254)
## Kerberoid: A Practical Android App Decompilation System with Multiple Decompilers.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#kerberoid-a-practical-android-app-decompilation-system-with-multiple-decompilers) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#kerberoid-a-practical-android-app-decompilation-system-with-multiple-decompilers)**
### 作者
* Heejun Jang, Sungkyunkwan University, Suwon, Republic of Korea
* Beomjin Jin, Sungkyunkwan University, Suwon, Republic of Korea
* Sangwon Hyun, Myongji University, Yongin, Republic of Korea
* Hyoungshick Kim, Sungkyunkwan University and CSIRO Data61, Suwon, Republic of Korea
### 摘要
> 反编译经常用于分析二进制程序。然而，在Android中，由于其独特的特点，反编译器在不同的应用程序上表现出不同的结果。显然，没有一个通用的解决方案适用于所有情况。基于此观察，我们提出了一种实用的Android应用程序反编译系统（称为Kerberoid），它可以自动将多个反编译器的结果拼接在一起，以最大程度地提高反编译代码的覆盖范围和准确性。我们使用151个Android应用程序对Kerberoid的性能进行评估，这些应用程序的相应源代码是公开可用的。Kerberoid完全恢复了17%的应用程序的所有函数，并且在40%的应用程序上获得了超过50%的相似度得分，与最好的现有反编译器相比，分别增加了7%和9%。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363255](https://doi.org/10.1145/3319535.3363255)
## Poster: Attacking Malware Classifiers by Crafting Gradient-Attacks that Preserve Functionality.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-attacking-malware-classifiers-by-crafting-gradient-attacks-that-preserve-functionality) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-attacking-malware-classifiers-by-crafting-gradient-attacks-that-preserve-functionality)**
### 作者
* Raphael Labaca-Castro, Bundeswehr University Munich, Munich, Bavaria, Germany
* Battista Biggio, University of Cagliari, Cagliari, Italy
* Gabi Dreo Rodosek, Bundeswehr University Munich, Munich, Bavaria, Germany
### 摘要
> 机器学习已被证明是一种有希望的技术，可以确定软件是恶意的还是良性的。然而，这种方法的准确性有时是以稳健性为代价的，并且探究这些系统对抗性示例的能力并不总是优先考虑的。在这项工作中，我们提出了一种基于梯度的方法，可以谨慎地生成被最先进检测器分类为良性的有效可执行的恶意文件。初步结果表明，我们的方法能够以更高效的方式自动找到最优的对抗性示例，这对于未来构建更稳健的模型提供了良好的支持。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363257](https://doi.org/10.1145/3319535.3363257)
## Poster: Towards a Framework for Assessing Vulnerabilities of Brainwave Authentication Systems.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-towards-a-framework-for-assessing-vulnerabilities-of-brainwave-authentication-systems) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-towards-a-framework-for-assessing-vulnerabilities-of-brainwave-authentication-systems)**
### 作者
* Karen Becker, University of Mannheim, Mannheim, Germany
* Patricia Arias-Cabarcos, University of Mannheim, Mannheim, Germany
* Thilo Habrich, University of Mannheim, Mannheim, Germany
* Christian Becker, University of Mannheim, Mannheim, Germany, Mannheim, Germany
### 摘要
> 在探索寻求新的替代基于密码的身份验证方法的过程中，行为生物特征技术由于其不引人注目的特性而变得越来越有吸引力。其中一种生物特征是脑电波，如今可以很容易地测量和用于证明一个人的身份。考虑到这项技术在不久的将来有可能被采用，分析其安全性影响变得十分重要。另外，脑机接口的最新进展使得使用脑电波证明用户身份成为可能。本研究提出了一个全面评估脑电波身份验证系统漏洞的框架，包括针对脑生物特征的特定特征的新攻击向量。在这个理论基础上，我们分析了现有的关于攻击和对策的文献，确定了差距并为未来的研究提供了基础。此外，我们评估了通过这个框架确定的一部分攻击，并报告了我们的初步结果。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363260](https://doi.org/10.1145/3319535.3363260)
## Poster: Network Message Field Type Recognition.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-network-message-field-type-recognition) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-network-message-field-type-recognition)**
### 作者
* Stephan Kleber, Ulm University, Ulm, Germany
* Frank Kargl, Ulm University, Ulm, Germany
### 摘要
> 现有的基于流量追踪的网络协议逆向工程方法缺乏全面的方法来确定二进制协议消息中的段的数据类型，例如浮点数、时间戳或地址。我们提出了一种新颖的方法，用于分析未知协议消息以揭示这些消息中包含的数据类型。因此，我们将消息拆分成字节段，并将其解释为字节值的向量。基于向量解释，我们可以确定特定数据类型的相似性和特征。这些可以用于将段分类为相同类型的簇，并识别它们的数据类型以进行先前训练的数据类型。我们对我们的方法的不同应用进行了初步评估，结果显示出令人期待的数据类型识别精度高达100%。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363261](https://doi.org/10.1145/3319535.3363261)
## Poster: Towards a Data Centric Approach for the Design and Verification of Cryptographic Protocols.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-towards-a-data-centric-approach-for-the-design-and-verification-of-cryptographic-protocols) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-towards-a-data-centric-approach-for-the-design-and-verification-of-cryptographic-protocols)**
### 作者
* Luca Arnaboldi, Newcastle University, Newcastle Upon Tyne, United Kingdom
* Roberto Metere, Newcastle University & The Alan Turing Institute, Newcastle Upon Tyne, United Kingdom
### 摘要
> 我们提出MetaCP，一个元密码协议验证工具，作为一种通过图形界面简化安全协议设计的自动化工具。图形界面可以看作是一个非关系型数据库的现代编辑器，其数据是协议。协议的信息以XML形式存储，具有固定的格式和语法，旨在包含指定任何类型的协议所需的所有信息。这个XML可以看作是一个几乎没有语义的语言，在不同的插件的严格语义建模下，将协议模型转化为各种后端验证语言。在本文中，我们展示了这种新方法的有效性，通过演示如何使用MetaCP轻松地从图形设计到使用Tamarin证明器插件正式验证协议的设计和验证过程。虽然过去已经提出了类似的方法，最著名的是AVISPA工具，但以前的方法都没有提供如此小的学习曲线和易用性，即使对于非安全专业人士也是如此，同时还具备与先进验证工具集成的灵活性。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363262](https://doi.org/10.1145/3319535.3363262)
## Poster: Towards Robust Open-World Detection of Deepfakes.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-towards-robust-open-world-detection-of-deepfakes) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-towards-robust-open-world-detection-of-deepfakes)**
### 作者
* Saniat Javid Sohrawardi, Rochester Institute of Technology, Rochester, NY, USA
* Akash Chintha, Rochester Institute of Technology, Rochester, NY, USA
* Bao Thai, Rochester Institute of Technology, Rochester, NY, USA
* Sovantharith Seng, Rochester Institute of Technology, Rochester, NY, USA
* Andrea Hickerson, University of South Carolina, Columbia, SC, USA
* Raymond Ptucha, Rochester Institute of Technology, Rochester, NY, USA
* Matthew Wright, Rochester Institute of Technology, Rochester, NY, USA
### 摘要
> 近年来，对故意发布虚假新闻的关注日益增加。最近，所谓的“深度伪造”视频和图像经过人工智能技术的修改或生成后变得更加逼真且更易制作。这些技术可以用来制作公众人物发布的虚假公告或事件并未发生的视频，以危险的方式误导大众观众。尽管一些最近的研究已经研究了深度伪造的准确检测方法，但这些方法在现实世界中的应用效果不佳，并且不以对公众有效的形式发布。在这个项目中，我们提出了一个系统，该系统能够稳健高效地帮助用户判断在线发布的视频是否是深度伪造。我们从记者的角度来解决这个问题，并致力于开发一个与他们的工作流程无缝融合的工具。结果表明，在内部和不匹配的数据集上都能准确检测出深度伪造。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363269](https://doi.org/10.1145/3319535.3363269)
## Poster: A First Look at the Privacy Risks of Voice Assistant Apps.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-a-first-look-at-the-privacy-risks-of-voice-assistant-apps) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-a-first-look-at-the-privacy-risks-of-voice-assistant-apps)**
### 作者
* Atsuko Natatsuka, Waseda University, Tokyo, Japan
* Ryo Iijima, Waseda University & NICT, Tokyo, Japan
* Takuya Watanabe, NTT Secure Platform Laboratories & Waseda University, Tokyo, Japan
* Mitsuaki Akiyama, NTT Secure Platform Laboratories, Tokyo, Japan
* Tetsuya Sakai, Waseda University, Tokyo, Japan
* Tatsuya Mori, Waseda University, NICT & RIKEN AIP, Tokyo, Japan
### 摘要
> 在这项研究中，我们进行了首次对语音助手（VA）应用程序的分析研究。我们首先从VA应用程序目录中收集了VA应用程序的元数据并对其进行分析。接下来，我们通过相应的语音指令调用VA应用程序，并通过分析应用程序的响应来检查它们如何识别用户。我们发现大约一半的VA应用程序通过某种方式进行用户识别。我们还发现，有几个应用程序通过语音对话来获取个人信息，例如出生日期、年龄或血型。由于这些数据将存储在云中，我们需要一种机制来确保最终用户可以以可用的方式检查/控制这些数据。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363274](https://doi.org/10.1145/3319535.3363274)
## Poster: SDN-based System to Filter Out DRDoS Amplification Traffic in ISP Networks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-sdn-based-system-to-filter-out-drdos-amplification-traffic-in-isp-networks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-sdn-based-system-to-filter-out-drdos-amplification-traffic-in-isp-networks)**
### 作者
* Priyanka Dodia, Qatar Computing Research Institute, HBKU, Doha, Qatar
* Yury Zhauniarovich, Perfect Equanimity, Minsk, Byelarus
### 摘要
> 分布式反射式拒绝服务（DRDoS）攻击仍然是排干受害者网络带宽的最受欢迎的技术之一。尽管攻击的目标是干扰特定受害者的网络服务，但间接地，这些攻击会影响到大量善意的互联网用户。特别是，易受放大攻击的服务的所有者不得不浪费资源来处理传入的请求。此外，由于放大攻击产生的大量攻击流量会浪费互联网服务提供商（ISP）的资源、带宽和金钱，导致客户的服务质量（QoS）降低并增加订阅费用。在这项工作中，我们展示了一种基于软件定义网络（SDN）的系统，用于过滤ISP网络中的垃圾流量。我们使用一种特殊类型的蜜罐来收集有关正在进行的DRDoS攻击的信息。从这些数据推导出的防火墙规则用于阻止传入的放大请求达到位于提供者网络内的放大器，从而保护易受攻击的服务免受滥用。反过来，这可以防止垃圾流量生成，节省ISP的资金并改善QoS。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363277](https://doi.org/10.1145/3319535.3363277)
## Poster: Recovering the Input of Neural Networks via Single Shot Side-channel Attacks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-recovering-the-input-of-neural-networks-via-single-shot-side-channel-attacks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-recovering-the-input-of-neural-networks-via-single-shot-side-channel-attacks)**
### 作者
* Lejla Batina, Radboud University, Nijmegen, Netherlands
* Shivam Bhasin, Nanyang Technological University, Singapore, Singapore, Singapore
* Dirmanto Jap, Nanyang Technological University, Singapore, Singapore, Singapore
* Stjepan Picek, Delft University of Technology, Delft, Netherlands
### 摘要
> 机器学习和安全之间的相互作用日益突出。使用机器学习的新应用也带来了新的安全风险。在这篇论文中，我们展示了在攻击者了解所使用的神经网络架构的情况下，仅通过一次侧信道测量就可以逆向工程神经网络的输入是可能的。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363280](https://doi.org/10.1145/3319535.3363280)
## Poster: Challenges of Accurately Measuring Churn in P2P Botnets.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-challenges-of-accurately-measuring-churn-in-p2p-botnets) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-challenges-of-accurately-measuring-churn-in-p2p-botnets)**
### 作者
* Leon Böck, Technische Universität Darmstadt, Darmstadt, Germany
* Shankar Karuppayah, Technische Universität Darmstadt & Universiti Sains Malaysia, Darmstadt, Germany
* Kory Fong, RBC Research Institute, Toronto, ON, Canada
* Max Mühlhäuser, Technische Universität Darmstadt, Darmstadt, Germany
* Emmanouil Vasilomanolakis, Aalborg University, Aalborg, Denmark
### 摘要
> 点对点（P2P）僵尸网络被认为是高度抵御摧毁尝试的。这类尝试通常通过利用僵尸通信协议的漏洞进行。然而，一次失败的摧毁尝试可能会警示僵尸控制者，并使他们有机会修补漏洞以阻挠随后的尝试。作为一种有前景的解决方案，可以在仿真环境中评估摧毁行动，然后再在现实世界中尝试。为了确保这样的仿真尽可能逼真，必须准确理解和测量僵尸网络的流失行为。本文讨论了在实时P2P僵尸网络中测量流失时可能遇到的潜在陷阱，并提出了一种用于统一数据收集和流失测量的僵尸网络监控框架。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363281](https://doi.org/10.1145/3319535.3363281)
## Poster: Let History not Repeat Itself (this Time) - Tackling WebAuthn Developer Issues Early On.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-let-history-not-repeat-itself-this-time-tackling-webauthn-developer-issues-early-on) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-let-history-not-repeat-itself-this-time-tackling-webauthn-developer-issues-early-on)**
### 作者
* Aftab Alam, Saarland University, Saarbrücken, Germany
* Katharina Krombholz, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Sven Bugiel, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 由FIDO联盟和W3C共同开发的FIDO2开放认证标准为最终解决网络用户身份验证不安全问题提供了一种方法，用户可以使用公钥密码术而不是基于文本的密码进行身份验证。其WebAuthn协议已经被所有主要的浏览器供应商采纳，并且最近也被主要的服务提供商采纳（例如Google、GitHub、Dropbox、Microsoft等）。因此，FIDO2是解决网络用户身份验证问题的一个非常强大的竞争者。然而，FIDO2的成功仍然面临一些待解决的问题。在这篇海报中，我们专门关注如何安全地在web服务中推出WebAuthn以及在此任务中需要解决哪些问题，过去的经验不幸地表明，软件开发人员在正确实施或使用安全关键API（如TLS / SSL、密码存储或密码学API）方面存在困难。我们在这里报道正在进行的工作，调查潜在的问题领域和对WebAuthn的采用者的具体难题，并试图制定一个我们的社区如何帮助开发人员的计划。我们相信，提高对可预见的开发人员问题的认识，并呼吁早期支持开发者的行动，对于确立FIDO2作为事实上的身份认证解决方案的路径至关重要。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363283](https://doi.org/10.1145/3319535.3363283)
## Poster: Towards Automated Quantitative Analysis and Forecasting of Vulnerability Discoveries in Debian GNU/Linux.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-towards-automated-quantitative-analysis-and-forecasting-of-vulnerability-discoveries-in-debian-gnu-linux) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-towards-automated-quantitative-analysis-and-forecasting-of-vulnerability-discoveries-in-debian-gnu-linux)**
### 作者
* Nikolaos Alexopoulos, Technische Universität Darmstadt, Darmstadt, Germany
* Rolf Egert, Technische Universität Darmstadt, Darmstadt, Germany
* Tim Grube, Technische Universität Darmstadt, Darmstadt, Germany
* Max Mühlhäuser, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> 软件漏洞发现的定量分析和预测对于修补成本和时间的估计、安全度量和风险评估方法的输入至关重要。然而，就目前而言，定量研究(a)需要相当多的人工工作量，(b)利用嘈杂的数据集，(c)尤其难以复制。在这个展板的摘要中，我们描述了我们关于Debian GNU/Linux软件包漏洞定量分析方面的持续工作。我们重点关注将过程自动化和重复性达到最大化，并收集分析所需的高质量数据的挑战。然后，我们提出了一系列有趣的假设可以进行调查，并呈现初步结果。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363285](https://doi.org/10.1145/3319535.3363285)
## Poster: Effective Layers in Coverage Metrics for Deep Neural Networks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-effective-layers-in-coverage-metrics-for-deep-neural-networks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-effective-layers-in-coverage-metrics-for-deep-neural-networks)**
### 作者
* Leo Hyun Park, Yonsei University, Seoul, Republic of Korea
* Sangjin Oh, Yonsei University, Seoul, Republic of Korea
* Jaeuk Kim, Yonsei University, Seoul, Republic of Korea
* Soochang Chung, Yonsei University, Seoul, Republic of Korea
* Taekyoung Kwon, Yonsei University, Seoul, Republic of Korea
### 摘要
> 深度神经网络（DNNs）作为一种有效的机器学习算法在近年来越来越受欢迎，但其高复杂性导致模型解释性不足，并且在深度学习的验证方面存在困难。模糊测试是一种自动化软件测试技术，最近被应用于DNNs来解决这些问题，其遵循基于覆盖率的模糊测试趋势。然而，新的DNNs覆盖度指标可能引发对在DNNs中测量覆盖度的哪个层面的问题。在本海报中，我们通过实证评估现有覆盖度指标的性能。通过对实验结果的比较分析，我们确定了每个覆盖度指标的最有效层，并讨论了DNN模糊测试的未来方向。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363286](https://doi.org/10.1145/3319535.3363286)
## CPS-SPC 2019: Fifth Workshop on Cyber-Physical Systems Security and PrivaCy.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#cps-spc-2019-fifth-workshop-on-cyber-physical-systems-security-and-privacy) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#cps-spc-2019-fifth-workshop-on-cyber-physical-systems-security-and-privacy)**
### 作者
* Nils Ole Tippenhauer, CISPA Helmholtz Center for Information Security, Saarbrucken, Germany
* Avishai Wool, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 网络物理系统（CPS）对社会的福祉变得越来越关键（例如，电力的产生和分配、水处理、植入式医疗设备等）。虽然在这些系统中，计算、通信和物理控制的融合在效率和便利性方面带来了好处，但由于这种融合所产生的攻击面，同时也存在着独特的安全和隐私挑战。这些系统代表了网络风险的新领域。CPS-SPC 是一个年度论坛，今年是第五届，旨在为研究社区提供一个始于全面和多学科角度解决 CPS 安全和隐私挑战的焦点，并与其他努力并肩前行，建立一个全面的研究路线图。相关的研讨会论文集可在 ACM DL 上获取，网址为：https://dl.acm.org/citation.cfm?id=3338499

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3353549](https://doi.org/10.1145/3319535.3353549)
## SSR'19: The 5th Conference on Security Standardisation Research.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#ssr19-the-5th-conference-on-security-standardisation-research) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#ssr19-the-5th-conference-on-security-standardisation-research)**
### 作者
* Maryam Mehrnezhad, Newcastle University, Newcastle upon Tyne, United Kingdom
* Thyla van der Merwe, Mozilla, London, United Kingdom
* Feng Hao, University of Warwick, Warwick, United Kingdom
### 摘要
> 第五届安全标准化研究会议（SSR'19）将于2019年11月11日在英国伦敦举行，与2019年ACM计算机与通信安全会议（CCS'19）同期举行。该会议旨在提供一个首选的论坛，讨论与安全标准化相关的所有主题，涵盖理论和实践。今年的议程包括两个特邀主题演讲，从工业和学术角度阐明安全标准化的问题，一个关于区块链标准化的专题讨论以及七篇从二十个投稿中选出的原创研究论文的展示。SSR'19会议论文集可在ACM DL上获取：https://dl.acm.org/citation.cfm?id=3338500。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3353551](https://doi.org/10.1145/3319535.3353551)
## TIS'19: Theory of Implementation Security Workshop 2019.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#tis19-theory-of-implementation-security-workshop-2019) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#tis19-theory-of-implementation-security-workshop-2019)**
### 作者
* Begül Bilgin, Rambus-Cryptography Research, Rotterdam, Netherlands
* Svetla Nikova, KU Leuven, Leuven, Belgium
* Vincent Rijmen, KU Leuven, Leuven, Belgium
### 摘要
> 在这个研讨会上，我们关注物理攻击及其对策。随着物联网的出现，对嵌入式加密系统和这些系统的物理攻击的兴趣在学术界和工业界持续增长。已经建立了复杂的安全认证和评估方法，通过独立评估和测试来确保安全性声明。但是，安全认证的方法耗时且昂贵。需要进一步开发可证明安全的保护方法和自动化验证工具，同时还要通过整合这些工具和方法来提高认证的效率和质量。所有这些挑战都更加激发了对实施安全理论的研究。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3353552](https://doi.org/10.1145/3319535.3353552)
## 18th Workshop on Privacy in the Electronic Society (WPES 2019).
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#18th-workshop-on-privacy-in-the-electronic-society-wpes-2019) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#18th-workshop-on-privacy-in-the-electronic-society-wpes-2019)**
### 作者
* Josep Domingo-Ferrer, Universitat Rovira i Virgili, Tarragona, Spain
### 摘要
> 2019年11月11日，第18届电子社会隐私研讨会（WPES 2019）与第26届ACM计算机与通信安全会议（CCS 2019）一同在英国伦敦举行。WPES的目标是汇聚隐私研究人员和从业者，讨论互联社会中出现的隐私问题及其解决方案。研讨会的议程包括14篇完整论文和5篇短篇论文，从67篇投稿中选出。议程涵盖的具体主题包括安全计算、安全通信、移动设备隐私、基因组数据隐私、隐私社会方面、数据匿名化以及物联网、区块链和Web上的隐私增强技术。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3353555](https://doi.org/10.1145/3319535.3353555)
## ASHES 2019: 3rd Workshop on Attacks and Solutions in Hardware Security.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#ashes-2019-3rd-workshop-on-attacks-and-solutions-in-hardware-security) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#ashes-2019-3rd-workshop-on-attacks-and-solutions-in-hardware-security)**
### 作者
* Chip Hong Chang, NTU Singapore, Singapore, Singapore
* Daniel E. Holcomb, University of Massachusetts at Amherst, Amherst, MA, USA
* Francesco Regazzoni, University of Lugano, Lugano, Switzerland
* Ulrich Rührmair, LMU Munich, Munich, Germany
* Patrick Schaumont, Virginia Tech, Blacksburg, VA, USA
### 摘要
> “硬件安全中的攻击与解决方案”研讨会（ASHES）欢迎任何关于硬件安全的理论和实践工作，包括任何攻击、解决方案、对策、证明、分类、形式化和实施。除了主流研究，ASHES还着重关注新兴的场景，包括物联网、核武器检查、军控、汽车安全、消费者和基础设施安全以及供应链安全等。ASHES还欢迎关于特定目的硬件的专门工作，例如轻量、低成本和节能设备，或非电子安全系统。该研讨会共有四个不同的论文类别：除了常规和短篇论文外，还包括系统化知识领域（所谓的“系统化知识”论文）和所谓的“疯狂而狂野”论文（WaC），后者在概念初期分发开创性的想法。这个摘要简要介绍了2019年11月15日在伦敦（英国）举行的研讨会的第三届，作为ACM CCS的一天后续会议卫星工作坊。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3353557](https://doi.org/10.1145/3319535.3353557)
## 1st Workshop on Cyber-Security Arms Race (CYSARM 2019).
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#1st-workshop-on-cyber-security-arms-race-cysarm-2019) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#1st-workshop-on-cyber-security-arms-race-cysarm-2019)**
### 作者
* Thanassis Giannetsos, Technical University of Denmark, Copenhagen, Denmark
* Daniele Sgandurra, Royal Holloway, University of London, London, United Kingdom
### 摘要
> CYSARM研讨会的目标是促进研究人员和实践者之间的合作，讨论网络安全的各个方面和权衡取舍。特别是新技术和算法可能如何影响现有或未来模型和系统的网络安全。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3353558](https://doi.org/10.1145/3319535.3353558)
## IoT S&P 2019: 2nd Workshop on the Internet of Things Security and Privacy.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#iot-s-p-2019-2nd-workshop-on-the-internet-of-things-security-and-privacy) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#iot-s-p-2019-2nd-workshop-on-the-internet-of-things-security-and-privacy)**
### 作者
* Peng Liu, Penn State University, Penn State, PA, USA
* Yuqing Zhang, University of Chinese Academy of Sciences, China, BeiJing, China
### 摘要
> 第二届互联网物联网安全与隐私研讨会将于2019年11月15日在英国伦敦举行，与ACM计算机与通信安全会议（CCS）同期举行。这次研讨会旨在解决新兴物联网领域的安全与隐私挑战。研讨会旨在汇集学术界和工业界的研究人员，在此基础上，我们组建了一个令人兴奋的程序，提供了当前和潜在挑战的混合内容。研讨会还将呈现8篇论文、2个海报和一个邀请主题演讲。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3353560](https://doi.org/10.1145/3319535.3353560)
## Omniring: Scaling Private Payments Without Trusted Setup.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#omniring-scaling-private-payments-without-trusted-setup) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#omniring-scaling-private-payments-without-trusted-setup)**
### 作者
* Russell W. F. Lai, Friedrich-Alexander University Erlangen-Nuremberg, Erlangen, Germany
* Viktoria Ronge, Friedrich-Alexander University Erlangen-Nuremberg, Erlangen, Germany
* Tim Ruffing, Blockstream, none, Germany
* Dominique Schröder, Friedrich-Alexander University Erlangen-Nuremberg, Erlangen, Germany
* Sri Aravinda Krishnan Thyagarajan, Friedrich-Alexander University Erlangen-Nuremberg, Erlangen, Germany
* Jiafan Wang, Chinese University of Hong Kong, Hong Kong, Hong Kong
### 摘要
> Monero是具有内置密码隐私功能的最大加密货币。交易使用零知识消费证明进行验证，通过在一组其他账户中隐藏资金发送的源账户，提供一定程度的匿名性。由于其与环签名的相似性，该核心密码组件被称为环保密交易（RingCT）。由于其实践相关性，有几项工作试图分析RingCT的安全性。由于RingCT相当复杂，其中大多数要么是非正式的，要么遗漏了基本功能，要么引入了不良的可信设置假设。就效率而言，Monero目前采用的方案是消费证明的大小与环大小成正比。这限制了环的大小只能是几个账户，这反过来显著限制了获得的匿名性，并促使了去匿名化攻击。作为解决这些问题的解决方案，我们首次对RingCT进行了严格的形式化。然后，我们提出了RingCT的通用构建，并在我们的形式安全模型中证明其安全性。通过使用新的高效零知识证明来实现我们的通用构建，我们获得了Omniring，这是一个完整的RingCT方案，它在离散对数设置中提供了迄今为止最高的具体和渐近效率。Omniring是第一个不需要可信设置或配对友好的椭圆曲线的RingCT方案，其证明大小与环大小的对数成正比，并且允许在交易中的所有源账户之间共享同一个环，从而在不牺牲性能的情况下显著提高隐私水平。我们的零知识证明依赖于对Bulletproofs框架（S&P 2018）的新颖改进，我们认为这是独立有趣的。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345655](https://doi.org/10.1145/3319535.3345655)
## WI Is Not Enough: Zero-Knowledge Contingent (Service) Payments Revisited.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#wi-is-not-enough-zero-knowledge-contingent-service-payments-revisited) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#wi-is-not-enough-zero-knowledge-contingent-service-payments-revisited)**
### 作者
* Georg Fuchsbauer, Inria, École normale supérieure, CNRS and PSL, Paris, France
### 摘要
> 虽然公平交换的货物在没有可信方的情况下是不可能的，但加密货币中的智能合约通过对货币系统的信任来绕过这些可信方。它们允许卖方出售数字货物，只有在买方付款的情况下才能获取。零知识条件支付（zkCP）证明，尽管其脚本语言的表现力有限，但比特币使用零知识证明仍然可能。在CCS'17上，Campanelli，Gennaro，Goldfeder和Nizzardo证明了zkCP协议存在缺陷，即买方可以在未付款的情况下获取有关货物的信息。他们提出了修复zkCP的对策，并且观察到当销售服务时不能使用zkCP。他们引入了基于不可区分证明系统的服务ZK条件支付的概念，并给出了一个实例化。我们通过对其修复的zkCP方案进行攻击，表明他们提出的某些对策是不够的。我们还表明，他们对于服务的zkCP实现是不安全的，因为买方可以在未付款的情况下得到所需的信息（即服务是否已提供）；特别地，我们表明使用的证明系统的WI是不够的。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354234](https://doi.org/10.1145/3319535.3354234)
## Towards Continuous Access Control Validation and Forensics.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#towards-continuous-access-control-validation-and-forensics) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#towards-continuous-access-control-validation-and-forensics)**
### 作者
* Chengcheng Xiang, University of California, San Diego, San Diego, CA, USA
* Yudong Wu, University of California, San Diego, San Diego, CA, USA
* Bingyu Shen, University of California, San Diego, San Diego, CA, USA
* Mingyao Shen, University of California, San Diego, San Diego, CA, USA
* Haochen Huang, University of California, San Diego, San Diego, CA, USA
* Tianyin Xu, University of Illinois Urbana-Champaign, Urbana, IL, USA
* Yuanyuan Zhou, University of California, San Diego, San Diego, CA, USA
* Cindy Moore, University of California, San Diego, San Diego, CA, USA
* Xinxin Jin, Whova, Inc., San Diego, CA, USA
* Tianwei Sheng, Whova, Inc., San Diego, CA, USA
### 摘要
> 访问控制常常因系统管理员（sysadmins）引入流行的策略配置错误而被认为是“非常脆弱”的。 鉴于资源和数据共享的动态性，访问控制策略需要持续更新。不幸的是，人非圣贤-系统管理员在更改访问控制策略时经常犯错误，例如过度授予权限。由于目前对持续验证的工具支持有限，这些错误可能长时间不被察觉，直到攻击者最终利用它们，导致严重的安全事件。我们提出了P-DIFF，一个实用的工具，用于监控访问控制行为，以帮助系统管理员及早发现意外的访问控制策略变更，并在安全攻击发生后进行事后鉴定分析。P-DIFF持续监控访问日志并从中推断访问控制策略。为了应对策略演变的挑战，我们设计了一种新颖的时间变化决策树，有效地表示访问控制策略变更，并配以一种新的学习算法，从访问日志中推断出该树。P-DIFF向系统管理员提供推断的策略和检测到的变更，以协助完成以下两项任务：（1）验证访问控制变更是否是有意的；（2）确定给定安全攻击的历史变更。我们使用从五个真实系统收集的各种数据集对P-DIFF进行评估，其中包括两个工业公司的数据。P-DIFF能够检测到86% -100%的访问控制策略变更，并具有89%的平均精度。对于鉴定分析，P-DIFF可以在评估案例的85% -98%中确定允许目标访问的根本原因变更。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363191](https://doi.org/10.1145/3319535.3363191)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363191](https://dl.acm.org/doi/pdf/10.1145/3319535.3363191)
## Watching You Watch: The Tracking Ecosystem of Over-the-Top TV Streaming Devices.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#watching-you-watch-the-tracking-ecosystem-of-over-the-top-tv-streaming-devices) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#watching-you-watch-the-tracking-ecosystem-of-over-the-top-tv-streaming-devices)**
### 作者
* Hooman Mohajeri Moghaddam, Princeton University, Princeton, NJ, USA
* Gunes Acar, Princeton University, Princeton, NJ, USA
* Ben Burgess, Princeton University, Princeton, NJ, USA
* Arunesh Mathur, Princeton University, Princeton, NJ, USA
* Danny Yuxing Huang, Princeton University, Princeton, NJ, USA
* Nick Feamster, Princeton University & University of Chicago, Princeton, NJ, USA
* Edward W. Felten, Princeton University, Princeton, NJ, USA
* Prateek Mittal, Princeton University, Princeton, NJ, USA
* Arvind Narayanan, Princeton University, Princeton, NJ, USA
### 摘要
> 互联网电视设备的数量近年来显著增长，尤其是Over-the-Top（OTT）流媒体设备，如Roku TV和Amazon Fire TV。OTT设备提供了对多渠道电视订阅服务的替代方案，并且通常通过行为广告实现盈利。为了揭示这类平台的隐私实践，我们开发了一个可以自动下载OTT应用程序（也称为频道）并与其进行交互的系统，同时拦截网络流量并进行最大努力的TLS拦截。我们使用这个智能爬虫访问了两个流行的OTT平台（即Roku和Amazon Fire TV）上的2000多个频道。我们的结果显示，无论是Roku频道还是Amazon Fire TV频道，跟踪都是普遍存在的，在69%的Roku频道和89%的Amazon Fire TV频道上存在与已知跟踪器的流量。我们还发现了广泛的收集和传输唯一标识符的做法，例如设备ID、序列号、WiFi MAC地址和SSID，有时是通过未加密的连接进行的。最后，我们证明了这些设备上可用的对抗措施，如限制广告跟踪选项和广告拦截，在实际中是无效的。根据我们的研究结果，我们向研究人员、监管机构、决策者和平台/应用开发者提出了建议。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354198](https://doi.org/10.1145/3319535.3354198)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354198](https://dl.acm.org/doi/pdf/10.1145/3319535.3354198)
## VoltJockey: Breaching TrustZone by Software-Controlled Voltage Manipulation over Multi-core Frequencies.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#voltjockey-breaching-trustzone-by-software-controlled-voltage-manipulation-over-multi-core-frequencies) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#voltjockey-breaching-trustzone-by-software-controlled-voltage-manipulation-over-multi-core-frequencies)**
### 作者
* Pengfei Qiu, Tsinghua University & University of Maryland, Beijing, China
* Dongsheng Wang, Tsinghua University, Beijing, China
* Yongqiang Lyu, Tsinghua University, Beijing, China
* Gang Qu, University of Maryland, College Park, MD, USA
### 摘要
> ARM TrustZone构建了一个基于硬件分离概念的可信执行环境。它在防御各种软件攻击方面非常成功，并迫使攻击者探索接口设计和侧信道的漏洞。最近报道的CLKscrew攻击通过超频CPU来生成硬件故障来破解TrustZone。然而，超频使处理器以非常高的频率运行，相对容易被检测和预防，例如通过硬件频率锁定。在本文中，我们提出了一种创新的基于软件控制硬件故障的攻击方法——VoltJockey，用于采用动态电压和频率调节（DVFS）技术进行能效提升的多核处理器。与CLKscrew不同，我们通过DVFS单元操纵电压而不是频率，在受害核心上生成硬件故障，这使得VoltJockey比CLKscrew更加隐蔽和难以预防。我们刻意控制故障生成以促进差分故障分析来破解TrustZone。整个攻击过程都基于软件，没有涉及任何硬件。我们在一款基于ARM的Krait处理器上实现了VoltJockey，并展示了如何从TrustZone中获取AES密钥以及如何破坏基于RSA的TrustZone身份验证。这些结果表明，VoltJockey在获取TrustZone保护的凭证方面具有与侧信道相当的效率，同时具有绕过基于RSA验证将不受信任的应用程序加载到TrustZone中的潜力。我们还讨论了基于硬件和基于软件的对策及其局限性。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354201](https://doi.org/10.1145/3319535.3354201)
## Principled Unearthing of TCP Side Channel Vulnerabilities.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#principled-unearthing-of-tcp-side-channel-vulnerabilities) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#principled-unearthing-of-tcp-side-channel-vulnerabilities)**
### 作者
* Yue Cao, University of California, Riverside, Riverside, CA, USA
* Zhongjie Wang, University of California, Riverside, Riverside, CA, USA
* Zhiyun Qian, University of California, Riverside, Riverside, CA, USA
* Chengyu Song, University of California, Riverside, Riverside, CA, USA
* Srikanth V. Krishnamurthy, University of California, Riverside, Riverside, CA, USA
* Paul Yu, U.S. Army Combat Capabilities Development Command Army Research Laboratory, Adelphi, MD, USA
### 摘要
> 最近的研究展示了现代操作系统中微小的TCP侧信道的存在，这些信道可以被路径外的对手利用来发动恶意攻击，如劫持连接。不幸的是，迄今为止的大部分研究都是关于手动发现这种侧信道，并随后修补它们。在这项工作中，我们问：“我们能否开发一种有原则的方法，能够自动发现这些难以找到的TCP侧信道？”我们确定这种侧信道存在的关键问题是同时进行TCP连接时违反了非干扰属性，即存在情况下其中一个连接的状态变化会隐式地泄露一些信息给另一个连接（可能由攻击者控制）。为了发现这种非干扰属性的违反，我们认为模型验证是一个自然选择。然而，由于其可伸缩性的局限性，使用模型验证存在许多挑战。具体而言，这些挑战涉及（a）使TCP代码库自成一体且适合模型验证，（b）限制模型验证的搜索空间，同时实现合理的代码覆盖率。我们开发了一个名为SCENT（用于侧信道挖掘的工具）的工具，以大部分自动化的方式解决了这些挑战。SCENT的核心是一个自动降频组件，以一种一致的方式转换TCP代码库，以减少模型验证遇到的状态空间复杂性，并减少验证所需的输入数量和类型。我们的广泛评估表明，SCENT在Linux和FreeBSD内核中发现了12个新的侧信道漏洞。特别是，对一类漏洞的实际验证表明，路径外的攻击者能够在平均略多于1分钟的时间内推断出两个任意主机是否正在通信。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354250](https://doi.org/10.1145/3319535.3354250)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354250](https://dl.acm.org/doi/pdf/10.1145/3319535.3354250)
## Privacy Risks of Securing Machine Learning Models against Adversarial Examples.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#privacy-risks-of-securing-machine-learning-models-against-adversarial-examples) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#privacy-risks-of-securing-machine-learning-models-against-adversarial-examples)**
### 作者
* Liwei Song, Princeton University, Princeton, NJ, USA
* Reza Shokri, National University of Singapore, Singapore, Singapore
* Prateek Mittal, Princeton University, Princeton, NJ, USA
### 摘要
> 近年来，在安全和隐私领域中，攻击和防御机器学习模型之间的军备竞赛已成为焦点。然而，以往研究的一个重大局限是安全领域和隐私领域通常被单独考虑。因此，不清楚一个领域中的防御方法是否会对另一个领域产生任何意外影响。在本文中，我们试图解决这个局限，将这两个领域结合起来。具体而言，我们对六种最新的防御方法进行成员推断攻击的成功度量，这些方法减少了敌对样本（即逃避攻击）的风险。成员推断攻击确定个别数据记录是否属于模型的训练集。此类攻击的准确性反映了训练算法对训练集成员个体的信息泄漏程度。对抗敌对样本的防御方法会影响模型的决策边界，使模型对每个输入的小区域内的预测保持不变。然而，这一目标是在训练数据上进行优化的。因此，训练集中的个别数据记录对鲁棒模型有重要影响，使模型更容易受到推断攻击。为了进行成员推断攻击，我们利用现有的基于模型预测的推断方法。我们还提出了两种利用鲁棒模型在敌对干扰数据上的结构属性的新推断方法。实验评估表明，与自然训练（未防御）方法相比，对抗防御方法确实可以增加目标模型对成员推断攻击的风险。当使用对抗防御方法来训练鲁棒模型时，成员推断优势相比于自然未防御模型增加了4.5倍。除了揭示对抗防御的隐私风险外，我们还进一步研究了影响成员信息泄漏的因素，如模型容量。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354211](https://doi.org/10.1145/3319535.3354211)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354211](https://dl.acm.org/doi/pdf/10.1145/3319535.3354211)
## Updatable Oblivious Key Management for Storage Systems.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#updatable-oblivious-key-management-for-storage-systems) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#updatable-oblivious-key-management-for-storage-systems)**
### 作者
* Stanislaw Jarecki, University of California, Irvine, Irvine, CA, USA
* Hugo Krawczyk, Algorand Foundation, New York, NY, USA
* Jason Resch, Independent, Chicago, IL, USA
### 摘要
> 我们介绍了一种基于遗忘式伪随机函数（OPRF）的遗忘式密钥管理系统（KMS），作为传统基于包装的KMS的更安全选择，这些KMS构成了大规模数据存储部署中密钥管理的核心。这个新系统隐藏了密钥和对象标识符，为密钥传输提供了无条件的安全性，提供了密钥可验证性，减少了存储等。此外，我们展示了如何在分布式阈值实现中提供所有这些功能，以增强对服务器妥协的保护。我们通过添加可更新的加密功能来扩展该系统，以支持密钥更新（称为密钥轮换），因此在KMS服务器定期更改OPRF密钥时，一个非常高效的更新程序允许KMS服务的客户端将其所有加密数据更新为只能由新密钥解密。这增强了正面和事后妥协安全性，即针对客户端的OPRF密钥在KMS持有的将来和过去的妥协安全性。另外，与传统的KMS相比，我们的解决方案支持公钥加密，并且在数据加密方面不需要与KMS进行任何交互（只有客户端解密需要进行此类通信）。我们的解决方案建立在最近有关可更新加密的工作基础上，但在远程KMS环境中具有显着的改进。除了关键的安全改进之外，我们的设计高效并且已经可以实际使用。我们报告了实验实现和性能情况。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363196](https://doi.org/10.1145/3319535.3363196)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363196](https://dl.acm.org/doi/pdf/10.1145/3319535.3363196)
## Network Hygiene, Incentives, and Regulation: Deployment of Source Address Validation in the Internet.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#network-hygiene-incentives-and-regulation-deployment-of-source-address-validation-in-the-internet) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#network-hygiene-incentives-and-regulation-deployment-of-source-address-validation-in-the-internet)**
### 作者
* Matthew Luckie, University of Waikato, Hamilton, New Zealand
* Robert Beverly, Naval Postgraduate School, Monterey, CA, USA
* Ryan Koga, University of California, San Diego, La Jolla, CA, USA
* Ken Keys, University of California, San Diego, La Jolla, CA, USA
* Joshua A. Kroll, Naval Postgraduate School, Monterey, CA, USA
* k claffy, University of California, San Diego, La Jolla, CA, USA
### 摘要
> Spoofer项目自2005年以来收集了有关互联网上IP源地址验证的部署和特性的数据。该项目的数据来自安装在后台运行的主动探测客户端的参与者。该客户端会定期自动运行测试，并在检测到新的网络连接点时进行测试。我们通过多个维度对Spoofer测试的丰富数据进行分析：时间、网络、自治系统、国家和互联网协议版本。根据我们截至2019年8月的数据，在至少四分之一的经过测试的自治系统中，没有用于验证具有欺骗性源地址的数据包离开其网络的过滤机制。我们发现，执行网络地址转换的路由器并不总是过滤欺骗性数据包，因为在截至2019年8月的一年中，至少6.4%的IPv4/24没有进行过滤。更糟糕的是，至少有三分之二的经过测试的自治系统不会过滤源地址声称来自其网络内部，但实际来自其网络外部的数据包进入其网络。我们探索了多种促进修复的方法以及评估其影响的挑战。虽然我们已经成功修复了352个IPv4/24，但我们发现还有更多未修复的IPv4/24数量，尽管采取了多种修复策略，其中21%的网络已经超过六个月未修复。我们的分析提供了迄今为止对这个长期漏洞的互联网易受攻击性的最全面和有信心的画面。虽然目前还没有简单的解决方案来解决尚未修复网络的长尾问题，但我们总结讨论了可能的非技术干预方法，并展示了平台如何支持随时间评估这些干预措施的影响。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354232](https://doi.org/10.1145/3319535.3354232)
## Security Certification in Payment Card Industry: Testbeds, Measurements, and Recommendations.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#security-certification-in-payment-card-industry-testbeds-measurements-and-recommendations) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#security-certification-in-payment-card-industry-testbeds-measurements-and-recommendations)**
### 作者
* Sazzadur Rahaman, Virginia Tech, Blacksburg, VA, USA
* Gang Wang, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Danfeng (Daphne) Yao, Virginia Tech, Blacksburg, VA, USA
### 摘要
> 大规模的支付卡行业（PCI）涉及到各种实体，如商家、发卡银行、收单银行和卡品牌。为所有处理支付卡信息的实体保证安全是一项具有挑战性的任务。PCI安全标准委员会要求所有实体符合PCI数据安全标准（DSS），该标准规定了一系列安全要求。然而，关于PCI DSS在实践中的执行情况知之甚少。在本文中，我们采用一种测量方法对电子商务网站的PCI DSS认证过程进行系统评估。我们开发了一个名为BuggyCart的电子商务网站测试平台，该平台可以灵活地增加或删除35个与PCI DSS相关的漏洞。然后，我们使用该测试平台来检查PCI扫描仪的能力和限制以及认证过程的严格性。我们发现安全标准与实际执行之间存在令人担忧的差距。我们测试的6个PCI扫描仪都不符合PCI扫描准则，给仍存在重大漏洞的商家发放证书。为了进一步检查现实中电子商务网站的合规状态，我们建立了一个名为PciCheckerLite的新型轻量级扫描工具，并扫描了来自各个业务领域的1,203个电子商务网站。结果证实，86%的网站至少存在一个PCI DSS违规行为，本应将其视为不合规。我们深入的准确性分析还显示，PciCheckerLite的输出比w3af更准确。我们联系了PCI安全委员会，分享我们的研究结果以改善实际执行中的情况。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363195](https://doi.org/10.1145/3319535.3363195)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363195](https://dl.acm.org/doi/pdf/10.1145/3319535.3363195)
## Matryoshka: Fuzzing Deeply Nested Branches.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#matryoshka-fuzzing-deeply-nested-branches) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#matryoshka-fuzzing-deeply-nested-branches)**
### 作者
* Peng Chen, ByteDance AI Lab, Beijing, China
* Jianzhong Liu, ShanghaiTech University, Shanghai, China
* Hao Chen, University of California, Davis, Davis, CA, USA
### 摘要
> 近年来，灰盒模糊测试在过去基于启发式的随机突变的基础上取得了显著进展，发展出了解决单个分支约束的方法。然而，它们在解决涉及深层嵌套条件语句的路径约束方面存在困难，而这在图像和视频解码器、网络数据包分析器和校验工具中很常见。我们提出了一种解决这个问题的方法。首先，我们确定目标条件语句所有依赖于控制流的条件语句。接下来，我们选择依赖于污点流的条件语句。最后，我们使用三种策略找到一个同时满足所有条件语句的输入。我们在一个名为Matryoshka的工具中实现了这种方法，并将其与其他最先进的模糊测试工具在13个开源程序上的效果进行了比较。Matryoshka在累积的代码行和分支覆盖率上比AFL、QSYM和Angora显著高。我们对Matryoshka发现的崩溃进行了手动分类，发现了41个独特的新错误和12个CVE编号。我们的评估还揭示了导致Matryoshka卓越性能的关键技术：它仅收集可能导致目标条件语句不可达的嵌套约束，这大大简化了它需要解决的路径约束。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363225](https://doi.org/10.1145/3319535.3363225)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363225](https://dl.acm.org/doi/pdf/10.1145/3319535.3363225)
## HyperService: Interoperability and Programmability Across Heterogeneous Blockchains.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#hyperservice-interoperability-and-programmability-across-heterogeneous-blockchains) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#hyperservice-interoperability-and-programmability-across-heterogeneous-blockchains)**
### 作者
* Zhuotao Liu, University of Illinois at Urbana-Champaign & HyperService Consortium, Champaign, IL, USA
* Yangxi Xiang, Beijing University of Posts and Telecommunications, Beijing, China
* Jian Shi, Case Western Reserve University, Cleveland, OH, USA
* Peng Gao, University of California, Berkeley, Berkeley, CA, USA
* Haoyu Wang, Beijing University of Posts and Telecommunications, Beijing, China
* Xusheng Xiao, Case Western Reserve University & HyperService Consortium, Cleveland, OH, USA
* Bihan Wen, Nanyang Technological University, Singapore, Singapore
* Yih-Chun Hu, University of Illinois at Urbana-Champaign & HyperService Consortium, Champaign, IL, USA
### 摘要
> 区块链互操作性是促进区块链广泛应用的关键功能，它允许不同区块链网络之间的状态转换。现有的互操作性协议主要集中在区块链之间的原子令牌交换上。然而，随着区块链从被动分布式账本升级为可编程状态机（得益于智能合约），区块链互操作性的范围远远超出了仅仅是令牌交换。在本文中，我们介绍了 HyperService，这是第一个在异构区块链之间提供互操作性和可编程性的平台。HyperService 由两个创新设计驱动：（i）一个面向开发者的编程框架，允许开发者在统一的编程模型中构建跨链应用程序；（ii）一个安全的面向区块链的加密协议，可以证明实现这些应用程序在区块链上。我们使用约 35,000 行代码实现了 HyperService 的原型，以展示其实用性。我们的实验表明：（i）HyperService 对于跨链应用程序的 end-to-end 执行施加了合理的延迟，大约为秒级；（ii）HyperService 平台可扩展，可以持续集成新的大规模生产区块链。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3355503](https://doi.org/10.1145/3319535.3355503)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3355503](https://dl.acm.org/doi/pdf/10.1145/3319535.3355503)
## MatRiCT: Efficient, Scalable and Post-Quantum Blockchain Confidential Transactions Protocol.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#matrict-efficient-scalable-and-post-quantum-blockchain-confidential-transactions-protocol) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#matrict-efficient-scalable-and-post-quantum-blockchain-confidential-transactions-protocol)**
### 作者
* Muhammed F. Esgin, Monash University & Data61, CSIRO, Clayton, Australia
* Raymond K. Zhao, Monash University, Clayton, Australia
* Ron Steinfeld, Monash University, Clayton, Australia
* Joseph K. Liu, Monash University, Clayton, Australia
* Dongxi Liu, Data61, CSIRO, Marsfield, Australia
### 摘要
> 我们引入了MatRiCT，这是一种高效的用于区块链保密交易的RingCT协议，其安全性基于“后量子”（模）格基假设。该协议的证明长度要比现有的后量子提案短两个数量级，而且能有效地扩展到大规模匿名集合，这与现有的提案不同。此外，我们提供了第一个完整实现的后量子RingCT，展示了我们方案的实用性。特别是，一个典型的交易可以在不到一秒的时间内生成，并且在标准个人电脑上可以在大约23毫秒内验证。此外，我们展示了如何扩展我们的方案以提供可审计性，用户可以从一组机构中选择一个特定的机构来揭示自己的身份。用户还可以选择不进行审计，所有这些审计选项都可以在同一个环境中共存。MatRiCT中引入的关键要素有：1）基于标准格基假设的迄今为止最短可扩展环签名，无需高斯采样；2）一种新颖的均衡零知识证明；3）一种从（模）格基中提取可验证性的新颖承诺方案。我们认为这些要素在其他隐私保护应用（如安全电子投票）中具有独立的兴趣。尽管允许交易金额具有64位精度，我们的新均衡证明和协议并不需要在广泛范围（如32位或64位范围）上进行范围证明，这一直是高效格基解决方案面临的主要障碍。此外，我们为类似RingCT的协议提供了新的形式定义，更贴近真实世界的区块链环境。这些定义适用于一般情况，并且有望对未来的保密交易协议的发展做出贡献（不仅限于格基环境）。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354200](https://doi.org/10.1145/3319535.3354200)
## Prism: Deconstructing the Blockchain to Approach Physical Limits.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#prism-deconstructing-the-blockchain-to-approach-physical-limits) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#prism-deconstructing-the-blockchain-to-approach-physical-limits)**
### 作者
* Vivek Bagaria, Stanford University, Palo Alto, CA, USA
* Sreeram Kannan, University of Washington at Seattle, Seattle, WA, USA
* David Tse, Stanford University, Palo Alto, CA, USA
* Giulia Fanti, Carnegie Mellon University, Pittsburgh, PA, USA
* Pramod Viswanath, University of Illinois at Urbana-Champaign, Champaign, IL, USA
### 摘要
> 区块链的概念是由中本聪发明的，用于维护分布式账本。除了安全性之外，区块链协议的重要性能指标是交易吞吐量和确认延迟。在分散设置中，这些指标受到两个底层物理网络属性的限制：通信容量和光速传播延迟。在这项工作中，我们引入了Prism，一种新的工作量证明区块链协议，它可以实现以下目标：1）对抗性哈希能力高达50％时的安全性；2）可达到网络容量C的最大吞吐量；3）诚实交易的确认延迟与传播延迟D成比例，并且在带宽延迟乘积CD指数小的情况下具有确认错误概率；4）最终对所有交易进行总排序。我们设计该协议的方法基于将中本聪的区块链分解为其基本功能，并系统地扩展这些功能以接近它们的物理限制。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363213](https://doi.org/10.1145/3319535.3363213)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363213](https://dl.acm.org/doi/pdf/10.1145/3319535.3363213)
## Securely Sampling Biased Coins with Applications to Differential Privacy.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#securely-sampling-biased-coins-with-applications-to-differential-privacy) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#securely-sampling-biased-coins-with-applications-to-differential-privacy)**
### 作者
* Jeffrey Champion, Northeastern University, Boston, MA, USA
* abhi shelat, Northeastern University, Boston, MA, USA
* Jonathan Ullman, Northeastern University, Boston, MA, USA
### 摘要
> 我们设计了一种高效的方法，用于对具有给定偏差 p∈[0,1] 的大批量独立硬币进行抽样。传统的安全计算方法需要每个硬币的通信和计算量为 O(lambda + log d)，才能实现总统计差异 2-lambda。我们提出了一种改进传统方法的指数级方法，当抽样d个硬币以达到总统计差异 2-lambda时，每个硬币只需使用 O(log(lambda+log d)) 个门。我们提出了我们工作的一个变种，该变种在实践中使用的参数lambda≥60时，也确实超过了传统方法。我们的新技术依赖于使用特别设计的遗忘数据结构来实现有偏硬币样本，每个样本需要期望2个随机比特来抽样。使用我们的新抽样技术，我们将差分隐私报告-噪声最大机制（庆祝指数机制的更实际的实现）作为一种安全多方计算进行了实现。我们的基准测试显示，我们可以在6秒内对大小为d=212的域运行这个机制，在14分钟内对大小为d=219的域运行。据我们所知，这是这些机制的首个完整分布式实现。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354256](https://doi.org/10.1145/3319535.3354256)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354256](https://dl.acm.org/doi/pdf/10.1145/3319535.3354256)
## Stormy: Statistics in Tor by Measuring Securely.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#stormy-statistics-in-tor-by-measuring-securely) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#stormy-statistics-in-tor-by-measuring-securely)**
### 作者
* Ryan Wails, U.S. Naval Research Laboratory, Washington, DC, USA
* Aaron Johnson, U.S. Naval Research Laboratory, Washington, DC, USA
* Daniel Starin, Perspecta Labs, Silver Spring, MD, USA
* Arkady Yerukhimovich, George Washington University, Washington, DC, USA
* S. Dov Gordon, George Mason University, Fairfax, VA, USA
### 摘要
> Tor是一个用于互联网隐私的工具，每天有数百万用户使用。Tor系统从关于其网络运行的信息中获得许多好处。测量结果指导运营商诊断问题，指引开发人员的工作，向用户解释他们获得的隐私水平，并向决策者提供关于Tor影响的信息。然而，数据收集和报告可能会损害用户的隐私，与Tor的目标相抵触。现有的测量Tor的方法存在能力有限和安全性弱点的问题。我们提出了Stormy，一种通用的、保护隐私的测量系统，克服了这些限制。Stormy使用安全多方计算（MPC）来计算Tor中继器所做观察的任何功能，同时保持这些观察的保密性。Stormy利用现有的在恶意模型下安全的高效MPC协议，并包括一种新颖的输入共享协议，该协议安全、高效且容错。该协议是非交互式的，与继电器当前提交测量的方式保持一致，并且允许继电器在提交输入后离线，同时确保诚实的继电器不会被排除或修改输入。输入共享协议与在认证值上计算的MPC协议兼容，并可能具有独立的研究意义。我们展示了Stormy如何在两个现实模型中部署：（1）由一小组专门的机构主要运行，或者（2）在Tor网络的继电器之间分散运行。Stormy在Tor的数千个中继器上高效扩展，并容忍网络变动，提供的安全性仅依赖于Tor现有的至少一个机构是诚实的信任假设（在第一模型中），或现有的中继器带宽的大部分是诚实的假设（在第二模型中）。我们演示了如何使用该系统计算两个广泛适用的统计数据：继电器输入的中位数和继电器之间集合并的基数。我们实现了Stormy并对系统性能进行了实验评估。当Stormy在机构之间运行时，我们可以在一天内对7,000个继电器输入进行151次中位数计算或533次集合并基数计算。当在中继器之间运行时，Stormy每天可以执行36次中位数计算或134次集合并基数计算。因此，这两种部署都可以在Tor网络中安全地计算非平凡的分析。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345650](https://doi.org/10.1145/3319535.3345650)
## A Formal Treatment of Deterministic Wallets.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#a-formal-treatment-of-deterministic-wallets) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#a-formal-treatment-of-deterministic-wallets)**
### 作者
* Poulami Das, TU Darmstadt, Darmstadt, Germany
* Sebastian Faust, TU Darmstadt, Darmstadt, Germany
* Julian Loss, Ruhr-University Bochum, Bochum, Germany
### 摘要
> 在比特币或以太坊等加密货币中，用户通过秘密密钥控制资金。为了将资金从一个用户转移到另一个用户，资金的所有者签署一个新的交易，将资金转移到新的接收者。这使得秘密密钥成为攻击的高度吸引目标，并导致了一些著名的例子，数百万美元的加密货币被盗。为了防止这些攻击，一种被广泛使用的方法是所谓的热/冷钱包。在热/冷钱包系统中，热钱包始终与网络连接，而冷钱包存储秘密密钥，并且不连接网络。在这项工作中，我们提出了针对热/冷钱包的首个全面安全模型，并开发了在这些模型中可证安全的钱包方案。在技术层面上，我们的主要贡献是提供了一个新的基于ECDSA的可证安全的热/冷钱包方案，可以集成到像比特币这样的传统加密货币中。我们的构造和安全分析采用模块化方法，展示了如何从具有密钥再随机化属性的签名方案中通用地构建安全的热/冷钱包。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354236](https://doi.org/10.1145/3319535.3354236)
## Analyzing Subgraph Statistics from Extended Local Views with Decentralized Differential Privacy.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#analyzing-subgraph-statistics-from-extended-local-views-with-decentralized-differential-privacy) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#analyzing-subgraph-statistics-from-extended-local-views-with-decentralized-differential-privacy)**
### 作者
* Haipei Sun, Qatar Computing Research Institute, Doha, Qatar
* Xiaokui Xiao, National University of Singapore, Singapore, Singapore
* Issa Khalil, Qatar Computing Research Institute, Doha, Qatar
* Yin Yang, Hamad Bin Khalifa University, Doha, Qatar
* Zhan Qin, Zhejiang University, Zhejiang, China
* Hui (Wendy) Wang, Stevens Institute of Technology, Hoboken, NJ, USA
* Ting Yu, Qatar Computing Research Institute, Doha, Qatar
### 摘要
> 许多现实世界的社交网络本质上是去中心化的，分析这样的网络的唯一方法是从个体参与者那里收集社交图的局部视图。由于局部视图可能包含敏感信息，通常希望在数据收集过程中应用差分隐私，以提供强大严格的隐私保证。在许多实际情况下，参与者的局部视图不仅包含她自己的连接，还包含她邻居的连接，这些连接对邻居来说是私密且敏感的，但对参与者本人来说不是直接相关的。我们将这种超出直接连接的信息称为扩展局部视图（ELV），并研究与ELV相关的两个基本问题：首先，在ELV存在的情况下，我们如何正确地强制实施差分隐私以保护所有参与者的隐私？其次，数据收集者如何利用ELV获得准确的全局图属性估计？本文指出，在收集ELV时，将实践中常用的局部差分隐私（LDP）直接应用于保护所有网络参与者的隐私是不足够的。主要问题是，一个对抗性数据收集者可以从受害者的多个邻居那里累积关于特定受害者的私密信息；即使从每个邻居收集的数据在LDP下被扰动过，它们的聚合仍然可能违反受害者的隐私。为了防止这种攻击，我们制定了一种新的分散差分隐私（DDP）方案，要求每个参与者不仅考虑自己的隐私，还考虑与其ELV相关的邻居的隐私。然而，DDP的严格隐私要求使得设计有效的数据收集机制具有挑战性。为了达到这个目标，我们设计了一个新的多阶段框架，在DDP下使分析员能够准确估计子图计数，这是社交图的一个重要属性。主要思想是，分析员首先询问个体的最小噪声规模，而不是直接收集子图计数，因为直接收集会引入过多的噪声；个体的最小噪声规模是私密信息，因为它取决于局部图结构，因此必须在DDP下执行。对于某些类型的子图，这个过程被递归地应用，即分析员询问关于注入到保护子图计数的最小本地噪声规模的私密信息所需的噪声。作为案例研究，我们为三种常见的子图模式：三角形、三跳路径和k-团实例化了所提出的框架。使用真实数据进行的大量实验表明，所提出的方案导致准确的全局子图计数估计，而基线解决方案未能获得有意义的结果效用。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354253](https://doi.org/10.1145/3319535.3354253)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354253](https://dl.acm.org/doi/pdf/10.1145/3319535.3354253)
## How to Accurately and Privately Identify Anomalies.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#how-to-accurately-and-privately-identify-anomalies) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#how-to-accurately-and-privately-identify-anomalies)**
### 作者
* Hafiz Asif, Rutgers University, Newark, NJ, USA
* Periklis A. Papakonstantinou, Rutgers University, Newark, NJ, USA
* Jaideep Vaidya, Rutgers University, Newark, NJ, USA
### 摘要
> 识别数据中的异常对于科学、国家安全和金融的进展至关重要。然而，隐私问题限制了我们分析数据的能力。我们能否解除这些限制，在不损害那些贡献数据的个人隐私的情况下准确地识别异常？我们针对最具实际意义的情况来回答这个问题，即一个记录与其他记录相比被认为是异常的情况。我们作出了四个贡献。首先，我们引入了敏感隐私的概念，这个概念概括了私密地识别异常的含义。敏感隐私推广了重要概念“差分隐私”，并且易于分析。重要的是，敏感隐私允许算法构建，提供强大且实际有意义的隐私和效用保证。其次，我们证明了差分隐私本质上无法准确和私密地识别异常；在这个意义上，我们的推广是必要的。第三，我们提供了一个通用编译器，它以差分隐私机制为输入（对异常识别效用很差），并将其转换为一个敏感隐私机制。这个主要具有理论重要性的编译器显示，它的效用大大优于输入机制的效用。作为我们的第四个贡献，我们提出了一种流行的异常定义（(β,r)-异常）的机制，这些机制(i)保证敏感隐私，(ii)具有可证明的效用保证，(iii)通过一系列数据集和评价标准的实证研究表明其性能极其准确。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363209](https://doi.org/10.1145/3319535.3363209)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363209](https://dl.acm.org/doi/pdf/10.1145/3319535.3363209)
## ZombieLoad: Cross-Privilege-Boundary Data Sampling.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#zombieload-cross-privilege-boundary-data-sampling) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#zombieload-cross-privilege-boundary-data-sampling)**
### 作者
* Michael Schwarz, Graz University of Technology, Graz, Austria
* Moritz Lipp, Graz University of Technology, Graz, Austria
* Daniel Moghimi, Worcester Polytechnic Institute, Worcester, MA, USA
* Jo Van Bulck, imec-DistriNet, KU Leuven, Leuven, Belgium
* Julian Stecklina, Cyberus Technology, Dresden, Germany
* Thomas Prescher, Cyberus Technology, Dresden, Germany
* Daniel Gruss, Graz University of Technology, Graz, Austria
### 摘要
> 在2018年初，Meltdown首次展示了如何利用短暂指令的副作用从用户空间读取任意内核内存。尽管通过加强用户空间和内核空间之间的隔离边界来减轻了此种攻击，但Meltdown激发了一整个新型的基于故障驱动的短暂执行攻击。尤其是过去一年，Meltdown类型的攻击已扩展到不仅从L1缓存中泄漏数据，还从其他各种微架构结构中泄漏数据，包括FPU寄存器文件和存储缓冲区。本文介绍了ZombieLoad攻击，它揭示了处理器填充缓冲逻辑中一种新型的Meltdown类型效应。我们的分析表明，故障加载指令（即需要重新发出的加载指令）可能会暂时地取消之前由当前或同一逻辑CPU导入填充缓冲区的未经授权的目标的引用。与填充缓冲区的并发攻击相比，我们是首次报告在Meltdown和MDS抗攻击处理器上甚至跨逻辑核心泄漏最近加载和存储的陈旧值的数据。因此，尽管英特尔声称硬件修复在新的CPU上已足够，我们证明这并不足够。我们展示了ZombieLoad在多种实际攻击场景中的有效性，包括CPU特权环、操作系统进程、虚拟机和SGX隔离区。我们讨论了短期和长期的缓解方法，并得出结论：禁用超线程是预防当前处理器上至少最强大的跨超线程攻击场景的唯一可行方法，因为英特尔的软件修复是不完整的。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354252](https://doi.org/10.1145/3319535.3354252)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354252](https://dl.acm.org/doi/pdf/10.1145/3319535.3354252)
## SMoTherSpectre: Exploiting Speculative Execution through Port Contention.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#smotherspectre-exploiting-speculative-execution-through-port-contention) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#smotherspectre-exploiting-speculative-execution-through-port-contention)**
### 作者
* Atri Bhattacharyya, EPFL, Lausanne, Switzerland
* Alexandra Sandulescu, IBM Research - Zurich, Zurich, Switzerland
* Matthias Neugschwandtner, IBM Research - Zurich, Zurich, Switzerland
* Alessandro Sorniotti, IBM Research - Zurich, Zurich, Switzerland
* Babak Falsafi, EPFL, Lausanne, Switzerland
* Mathias Payer, EPFL, Lausanne, Switzerland
* Anil Kurmus, IBM Research - Zurich, Zurich, Switzerland
### 摘要
> Spectre、Meltdown和相关攻击已经证明内核、虚拟化系统、可信执行环境和浏览器容易通过微架构漏洞泄露信息。然而，尚不清楚其他应用程序在多大程度上会受到影响，特别是那些不加载攻击者提供的代码的应用程序。目前还不清楚这些攻击在多大程度上依赖基于缓存的侧信道。我们提出了SMoTherSpectre，这是一种推测性代码复用攻击，利用同时多线程处理器（SMoTher）中的端口争用作为侧信道来从受害进程中泄露信息。SMoTher是一种细粒度的侧信道，它基于单个受害指令来检测争用。为了发现真实世界中的gadget，我们描述了一种方法，并构建了一个工具，可以在流行的库中定位SMoTher-gadget。在对glibc进行评估时，我们发现了数百个可以用来泄露信息的gadget。最后，我们演示了针对OpenSSH服务器的概念验证攻击，创建了用于确定四个主机密钥位的预言，以及针对使用OpenSSL库进行加密的应用程序的攻击，通过libcrypto和glibc中的gadget创建了一种可以区分出明文位的预言。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363194](https://doi.org/10.1145/3319535.3363194)
## (Un)informed Consent: Studying GDPR Consent Notices in the Field.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#un-informed-consent-studying-gdpr-consent-notices-in-the-field) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#un-informed-consent-studying-gdpr-consent-notices-in-the-field)**
### 作者
* Christine Utz, Ruhr-Universität Bochum, Bochum, Germany
* Martin Degeling, Ruhr-Universität Bochum, Bochum, Germany
* Sascha Fahl, Ruhr-Universität Bochum, Bochum, Germany
* Florian Schaub, University of Michigan, Ann Arbor, MI, USA
* Thorsten Holz, Ruhr-Universität Bochum, Bochum, Germany
### 摘要
> 自2018年5月起，欧洲超过60%的热门网站在其访客页面上显示了关于Cookie同意的通知，这迅速导致用户对隐私通知感到疲倦，并促使了那些能够在多个网站或浏览器中一起进行同意的解决方案的需求。在本研究中，我们确定了同意通知的图形用户界面的共同特点，并在德国的一个网站上进行了三个实验，参与者总数超过80,000人，以研究通知位置、选择类型和内容框架对同意的影响。我们发现用户更倾向于与显示在屏幕下部（左侧）的通知进行交互。在二元选择的情况下，相比于要求用户为每个类别或公司单独允许Cookie使用的机制，更多的用户愿意接受跟踪。我们还指出，"nudging"的普遍实践对用户的选择产生了很大的影响。我们的实验表明，看似微小的实施决策可以对用户与同意通知的互动产生重大影响。我们的研究结果表明，规定不仅需要要求同意，还需要为获取同意提供明确的要求或指导，以确保用户能够自由和明智地做出选择。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354212](https://doi.org/10.1145/3319535.3354212)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354212](https://dl.acm.org/doi/pdf/10.1145/3319535.3354212)
## An In-depth Look Into SDN Topology Discovery Mechanisms: Novel Attacks and Practical Countermeasures.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#an-in-depth-look-into-sdn-topology-discovery-mechanisms-novel-attacks-and-practical-countermeasures) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#an-in-depth-look-into-sdn-topology-discovery-mechanisms-novel-attacks-and-practical-countermeasures)**
### 作者
* Eduard Marin, University of Birmingham (UK) and imec-COSIC, KU Leuven (Belgium), Birmingham, United Kingdom
* Nicola Bucciol, University of Padua, Padua, Italy
* Mauro Conti, University of Padua, Padua, Italy
### 摘要
> 软件定义网络（SDN）是一种新型的网络方法，通过解耦控制平面和数据平面，改变了现有的网络架构。研究人员已经表明，SDN网络对安全攻击非常容易受到攻击。例如，攻击者可以篡改控制器的网络拓扑视图，用来劫持主机的位置或者创建虚假的交换机连接。这些攻击可以出于不同的目的，从冒充主机到绕过中间箱或拦截网络流量。已经提出了许多针对拓扑攻击的对策，但到目前为止，对它们提供的安全程度还没有进行全面的分析。对现有解决方案的可能限制进行批判性分析是更好地理解问题和构建对拓扑攻击更强防御能力的重要步骤。在本文中，我们评估了SDN中现有的网络拓扑发现机制的实际安全性。我们的分析揭示了目前最先进的拓扑攻击对策中存在的6个漏洞：TopoGuard，<>, <>TopoGuard+，<>SPV<>和SecureBinder<>。我们展示了这些漏洞在实践中可以被利用来操纵控制器的网络拓扑视图。此外，我们提出了两种新型的拓扑攻击，称为Topology Freezing<>和Reverse Loop<>，利用了广泛使用的Floodlight控制器中的漏洞。我们已经负责地向Floodlight披露了这些漏洞。虽然我们证明完全消除这些攻击是困难的，但我们提出了修复措施来减轻它们的影响。针对我们的研究结果，我们在本文中详细介绍了进一步改进现有对策的实际方法。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354194](https://doi.org/10.1145/3319535.3354194)
## Proof-Carrying Network Code.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#proof-carrying-network-code) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#proof-carrying-network-code)**
### 作者
* Christian Skalka, University of Vermont, Burlington, VT, USA
* John Ring, University of Vermont, Burlington, VT, USA
* David Darais, University of Vermont, Burlington, VT, USA
* Minseok Kwon, Rochester Institute of Technology, Rochester, NY, USA
* Sahil Gupta, Rochester Institute of Technology, Rochester, NY, USA
* Kyle Diller, Rochester Institute of Technology, Rochester, NY, USA
* Steffen Smolka, Cornell University, Ithaca, NY, USA
* Nate Foster, Cornell University, Ithaca, NY, USA
### 摘要
> 计算机网络通常作为针对恶意攻击的第一道防线。尽管在软件定义网络（SDN）中有越来越多用于定义和执行安全策略的工具，但大多数假设单一控制点，并且无法处理多个管理域中出现的挑战。例如，用户可能希望允许他们的家庭物联网网络由设备供应商进行配置，这引发了安全和隐私问题。在本文中，我们提出了一个名为Proof-Carrying Network Code（PCNC）的框架，用于指定和强制执行具有相互作用管理域的SDN中的安全性。与Proof-Carrying Authorization（PCA）类似，PCNC提供了管理授权域的方法；与Proof-Carrying Code（PCC）类似，PCNC提供了对网络程序行为属性的执行方法。我们为PCNC开发了理论基础，并在模拟和真实网络环境中对其进行了评估，包括一个考虑家庭健康监测物联网网络安全性的案例研究。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363214](https://doi.org/10.1145/3319535.3363214)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363214](https://dl.acm.org/doi/pdf/10.1145/3319535.3363214)
## DeMiCPU: Device Fingerprinting with Magnetic Signals Radiated by CPU.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#demicpu-device-fingerprinting-with-magnetic-signals-radiated-by-cpu) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#demicpu-device-fingerprinting-with-magnetic-signals-radiated-by-cpu)**
### 作者
* Yushi Cheng, Zhejiang University, Hangzhou, China
* Xiaoyu Ji, Zhejiang University, Hangzhou, China
* Juchuan Zhang, Zhejiang University, Hangzhou, China
* Wenyuan Xu, Zhejiang University, Hangzhou, China
* Yi-Chao Chen, University of Texas at Austin, Austin, TX, USA
### 摘要
> 使用智能设备日益普及，设备认证受到了广泛关注。一种常见的设备认证方法是利用内部测量的设备指纹，例如设备标识、基于软件或硬件的特征。在本文中，我们提出了一种基于刺激响应的设备指纹技术DeMiCPU，该技术依赖于外部测量的信息，即由CPU模块发出的磁感应（MI）信号，该模块包括CPU芯片及其附属的电源电路。DeMiCPU的关键洞见是CPU模块之间存在硬件差异，因此相应的MI信号可作为有希望的设备指纹，难以修改或模仿。我们设计了一种刺激和差异提取方案，并使用90个移动设备（包括70台笔记本电脑（其中30台完全相同的CPU和操作系统）和20台智能手机）对其进行评估。结果显示，DeMiCPU的平均精确度和召回率均可达到99.1％，30台相同设备的精确度和召回率为98.6％，指纹识别时间为0.6秒。此外，通过多轮指纹识别，性能可以进一步提高至99.9％。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3339810](https://doi.org/10.1145/3319535.3339810)
## Multisketches: Practical Secure Sketches Using Off-the-Shelf Biometric Matching Algorithms.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#multisketches-practical-secure-sketches-using-off-the-shelf-biometric-matching-algorithms) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#multisketches-practical-secure-sketches-using-off-the-shelf-biometric-matching-algorithms)**
### 作者
* Rahul Chatterjee, University of Wisconsin--Madison, Madison, WI, USA
* M. Sadegh Riazi, University of California San Diego, San Diego, CA, USA
* Tanmoy Chowdhury, George Mason University, Washington DC, DC, USA
* Emanuela Marasco, George Mason University, Washington DC, DC, USA
* Farinaz Koushanfar, University of California San Diego, San Diego, CA, USA
* Ari Juels, Cornell Tech, New York, NY, USA
### 摘要
> 生物特征认证在大规模人员认证和识别中越来越被广泛应用，这增加了在数据库泄露的情况下泄漏数百万用户的生物特征信息的风险。强大的“模糊”生物特征模板保护的加密技术，如安全草图，在原理上可能有所帮助，但在实践中却很少使用。这是因为它们需要新的生物特征匹配算法，可能会大幅降低准确度。我们引入了一种称为多草图的新原语，它是安全草图的一种推广形式。多草图可以与现有的生物特征匹配算法配合使用，可可靠地从生物特征数据中生成强加密密钥。多草图适用于包含多个生物特征（例如多个指纹）的生物特征数据库，该数据库包含一定规模的用户（例如几千人）。它隐藏了用户与其生物特征模板之间的对应关系，防止攻击者在被破坏的情况下了解用户的生物特征数据，但允许在成功的用户认证后生成用户特定的秘密密钥。我们设计了一个称为TenSketch的十指指纹多草图。我们报告了TenSketch的原型实现，展示了其在实践中的可行性。我们探究了对TenSketch数据库可能的几种攻击，并通过使用真实的十指指纹数据集进行模拟，证明了攻击者必须进行大量计算才能从窃取的TenSketch数据库中获得任何有意义的信息。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363208](https://doi.org/10.1145/3319535.3363208)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363208](https://dl.acm.org/doi/pdf/10.1145/3319535.3363208)
## 28 Blinks Later: Tackling Practical Challenges of Eye Movement Biometrics.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#28-blinks-later-tackling-practical-challenges-of-eye-movement-biometrics) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#28-blinks-later-tackling-practical-challenges-of-eye-movement-biometrics)**
### 作者
* Simon Eberz, University of Oxford, Oxford, United Kingdom
* Giulio Lovisotto, University of Oxford, Oxford, United Kingdom
* Kasper B. Rasmussen, University of Oxford, Oxford, United Kingdom
* Vincent Lenders, armasuisse, Bern, Switzerland
* Ivan Martinovic, University of Oxford, Oxford, United Kingdom
### 摘要
> 在这项工作中，我们解决了基于眼动生物特征的连续身份验证系统中三个被忽视的实际挑战：（i）光照条件的变化，（ii）任务依赖特征和（iii）需要准确的校准阶段。我们收集了22名参与者的眼动数据。为了评估这三个挑战的影响，我们在不同的实验条件下收集数据：用户执行四个不同的任务，光照条件在会话过程中发生变化，并且我们收集与准确（用户特定）和不准确（通用）校准相关的数据。为了解决光照条件的变化，我们识别了两个主要的光源，即屏幕亮度和环境光，并提出了一种基于瞳孔直径校正机制。我们发现这种机制可以准确地调整瞳孔根据光线的变化而收缩或扩张。为了解决不准确的校准问题，我们利用双眼跟踪在先前已知的特征集基础上增加了新的特征。我们证明了即使使用通用校准，这些特征也可以非常具有区分性。我们进一步应用了基于人群数据的跨任务映射函数，系统地解决了特征对任务的依赖性问题（例如，阅读文本和浏览网站导致不同的眼动动力学）。通过这些改进，即使放宽对实验条件的假设，我们的系统与之前的工作相比在错误率上显著降低。对于任务内的身份验证，在无用户特定校准、变化的屏幕亮度和环境光照条件下，我们只需要两分钟的训练数据就可以达到3.93%的等错误率。对于相同的设置，但屏幕亮度保持不变（例如阅读任务），我们可以实现低至1.88%的等错误率。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354233](https://doi.org/10.1145/3319535.3354233)
## Velody: Nonlinear Vibration Challenge-Response for Resilient User Authentication.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#velody-nonlinear-vibration-challenge-response-for-resilient-user-authentication) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#velody-nonlinear-vibration-challenge-response-for-resilient-user-authentication)**
### 作者
* Jingjie Li, University of Wisconsin-Madison, Madison, WI, USA
* Kassem Fawaz, University of Wisconsin-Madison, Madison, WI, USA
* Younghyun Kim, University of Wisconsin-Madison, Madison, WI, USA
### 摘要
> 生物特征识别已被广泛应用于增强用户认证，通过利用人类的生理或行为特征中普遍存在且可收集的独特特征，提高了可用性。然而，已经报告了针对“静态”生物特征，如指纹的成功攻击，其中对手秘密获取用户的生物特征并破坏非弹性的生物特征。为了减轻静态生物特征的漏洞，我们利用手表面振动响应的独特且非线性的特点，设计了一个名为Velody的系统，用于抵御各种攻击，包括重放和合成攻击。Velody系统依赖于手表面振动响应中的两个主要特性：独特性，由人类手部的生理特征贡献，和非线性性，其复杂性防止攻击者预测对未见挑战的响应。Velody采用挑战-响应协议。通过改变振动挑战，系统引发了与输入相关的非线性“症状”和振动响应中的独特的频谱时间特征，从而阻止了重放和合成攻击。此外，可以在注册过程中被动地收集大量的一次性挑战-响应对，用于每日认证会话。我们使用现成的振动扬声器和加速度计构建了Velody的原型，通过全面的用户实验验证了其可用性和安全性。我们的结果表明，Velody在对抗仿冒攻击方面表现出良好的安全性和长期一致性，误差率（EER）只有5.8%，同时能够正确拒绝包括重放和合成攻击在内的其他所有攻击，且只需使用非常短的振动挑战。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354242](https://doi.org/10.1145/3319535.3354242)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354242](https://dl.acm.org/doi/pdf/10.1145/3319535.3354242)
## The Catcher in the Field: A Fieldprint based Spoofing Detection for Text-Independent Speaker Verification.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#the-catcher-in-the-field-a-fieldprint-based-spoofing-detection-for-text-independent-speaker-verification) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#the-catcher-in-the-field-a-fieldprint-based-spoofing-detection-for-text-independent-speaker-verification)**
### 作者
* Chen Yan, Zhejiang University, Hangzhou, China
* Yan Long, Zhejiang University, Hangzhou, China
* Xiaoyu Ji, Zhejiang University, Hangzhou, China
* Wenyuan Xu, Zhejiang University, Hangzhou, China
### 摘要
> 验证语音输入的身份对于敏感操作越来越重要。传统的方法是通过声谱图特征（如声纹）区分个人身份，但无法应对伪造攻击，即恶意攻击者使用与受害者几乎相同的声纹合成声音或简单地重放声音。本文提出了CaField，一种无需文本依赖的说话者验证方法，旨在检测基于扬声器的声音伪造攻击，并实现看似矛盾的两个要求：可用性和安全性。CaField的关键看法是利用嵌入在声场中的声学生物识别信息构造“场纹”，即作为声音在空气中传播时产生的声能的物理场，类似于“声纹”。我们发现，场纹可以区分说话者（无论是人类还是扬声器），因此我们可以从真实用户中检测出用于伪造攻击的说话者。我们在一个包含20个人和8个扬声器的数据集上进行评估，结果显示，在用户与智能手机交谈时，CaField依靠两个板载麦克风采样声场，实现了99.16%的检测准确率和0.85%的等误差率（EER），并适用于多个会话和各种声音输入。CaField支持8~kHz的低音频采样率，并对手机位移、用户姿势、录音环境等各种因素具有稳健性。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354248](https://doi.org/10.1145/3319535.3354248)
## Quantitative Verification of Neural Networks and Its Security Applications.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#quantitative-verification-of-neural-networks-and-its-security-applications) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#quantitative-verification-of-neural-networks-and-its-security-applications)**
### 作者
* Teodora Baluta, National University of Singapore, Singapore, Singapore
* Shiqi Shen, National University of Singapore, Singapore, Singapore
* Shweta Shinde, University of California, Berkeley, Berkeley, CA, USA
* Kuldeep S. Meel, National University of Singapore, Singapore, Singapore
* Prateek Saxena, National University of Singapore, Singapore, Singapore
### 摘要
> 神经网络越来越多地被应用于安全关键的领域。这引起了对验证或认证神经网络逻辑编码属性的兴趣。以前的研究主要集中在检查存在性属性，目标是检查是否存在任何违反给定兴趣属性的输入。然而，神经网络训练是一个随机过程，其分析中出现的许多问题需要概率和定量推理，即估计有多少输入满足给定属性。为此，我们的论文提出了一种新的和有原则的框架，用于定量验证指定在神经网络上的逻辑属性。我们的框架是第一个提供PAC风格的可靠性保证，即其定量估计与真实计数之间有一个可控和有界的误差。我们通过构建一个名为NPAQ的原型工具来实现我们的算法框架，该工具能够检查二值化神经网络上的丰富属性。我们展示了新兴安全性分析如何在三个应用领域中利用我们的框架：量化对抗性输入的稳健性，特洛伊攻击的有效性以及给定神经网络的公平性/偏见。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354245](https://doi.org/10.1145/3319535.3354245)
## ABS: Scanning Neural Networks for Back-doors by Artificial Brain Stimulation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#abs-scanning-neural-networks-for-back-doors-by-artificial-brain-stimulation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#abs-scanning-neural-networks-for-back-doors-by-artificial-brain-stimulation)**
### 作者
* Yingqi Liu, Purdue University, West Lafayette, IN, USA
* Wen-Chuan Lee, Purdue University, West Lafayette, IN, USA
* Guanhong Tao, Purdue University, West Lafayette, IN, USA
* Shiqing Ma, Rutgers University, New Brunswick, NJ, USA
* Yousra Aafer, Purdue University, West Lafayette, IN, USA
* Xiangyu Zhang, Purdue University, West Lafayette, IN, USA
### 摘要
> 本论文提出了一种扫描基于神经网络的人工智能模型以确定其是否被木马感染的技术。预先训练的人工智能模型可能包含通过训练或转换内部神经元权重注入的后门。这些被感染的模型在提供常规输入时会正常运行，并在输入被标记为特定模式（称为木马触发器）的情况下误分类为特定输出标签。我们开发了一种新颖的技术，通过确定在向神经元引入不同程度的刺激时输出激活如何变化，分析内部神经元行为。对于不论所提供的输入如何都会显著提高特定输出标签激活的神经元被认为可能受到了威胁。然后，通过使用刺激分析结果进行优化程序进行反向工程，确认神经元是否真正受到了威胁，并确定了木马触发器。我们评估了我们的系统ABS在177个被感染模型上的表现，这些模型被不同攻击方法感染，攻击对象包括输入空间和特征空间，木马触发器的大小和形状也各不相同。同时，我们还评估了144个良性模型，这些模型使用不同的数据和初始权重值进行训练。这些模型属于7种不同的模型结构和6个不同的数据集，其中包括一些复杂的数据集，如ImageNet、VGG-Face和ResNet110。我们的结果显示，ABS具有高效能，当每个输出标签仅提供一个输入样本时，可以在大多数情况下达到90%以上的检测率（甚至很多达到100%）。它明显优于需要大量输入样本和小的木马触发器才能达到良好性能的最先进技术Neural Cleanse。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363216](https://doi.org/10.1145/3319535.3363216)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363216](https://dl.acm.org/doi/pdf/10.1145/3319535.3363216)
## Lifelong Anomaly Detection Through Unlearning.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#lifelong-anomaly-detection-through-unlearning) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#lifelong-anomaly-detection-through-unlearning)**
### 作者
* Min Du, University of California, Berkeley, Berkeley, CA, USA
* Zhi Chen, University of California, Berkeley, Berkeley, CA, USA
* Chang Liu, Citadel Securities, Chicago, IL, USA
* Rajvardhan Oak, University of California, Berkeley, Berkeley, CA, USA
* Dawn Song, University of California, Berkeley, Berkeley, CA, USA
### 摘要
> 异常检测对于确保系统安全性和可靠性至关重要。借助不断生成的系统数据，深度学习已被发现具有高效灵活的特点，能够在没有太多领域知识的情况下提取模式。现有的异常检测研究主要关注一种被称为零正样本的场景，即检测模型仅针对正常（即负）数据进行训练。在实际应用场景中，在系统部署后可能会提供额外的手动检查过的正样本数据。我们将这种情况称为终身异常检测。然而，我们发现现有方法不容易将新知识应用于提高系统性能。在这项工作中，我们首次探索了终身异常检测问题，并提出了新的方法来应对相应的挑战。特别是，我们提出了一个称为"遗忘"的框架，可以在标记出假阴性（或假阳性）时有效地纠正模型。为此，我们开发了几种新技术来解决所谓的爆炸性损失和灾难性遗忘这两个挑战。此外，我们基于生成模型提出了一个理论框架。在该框架下，我们的遗忘方法可以以通用方式呈现，应用于大多数基于零正样本深度学习的异常检测算法，将它们转化为对应的终身异常检测解决方案。我们使用两种最先进的零正样本深度学习异常检测架构和三个真实世界任务来评估我们的方法。结果表明，通过遗忘，我们的方法能够显著减少假阳性和假阴性的数量。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363226](https://doi.org/10.1145/3319535.3363226)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363226](https://dl.acm.org/doi/pdf/10.1145/3319535.3363226)
## Transparency Logs via Append-Only Authenticated Dictionaries.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#transparency-logs-via-append-only-authenticated-dictionaries) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#transparency-logs-via-append-only-authenticated-dictionaries)**
### 作者
* Alin Tomescu, Massachusetts Institute of Technology, Cambridge, MA, USA
* Vivek Bhupatiraju, Lexington High School & MIT PRIMES, Lexington, MA, USA
* Dimitrios Papadopoulos, Hong Kong University of Science and Technology, Hong Kong, Hong Kong
* Charalampos Papamanthou, University of Maryland, College Park, DC, USA
* Nikos Triandopoulos, Stevens Institute of Technology, Hoboken, NJ, USA
* Srinivas Devadas, Massachusetts Institute of Technology, Cambridge, MA, USA
### 摘要
> 透明度日志允许用户审核潜在的恶意服务，为更加负责任的互联网铺平道路。例如，证书透明度（CT）使域名所有者能够审核证书颁发机构（CA）并检测身份冒充攻击。然而，为了实现它们的完整潜力，透明度日志在被用户查询时必须具备带宽效率。具体而言，每个人都应能够高效地通过密钥查找日志条目，并高效地验证日志的追加性。不幸的是，在没有额外信任假设的情况下，当前的透明度日志无法同时提供小型查找证明和小型追加性证明。事实上，其中一个证明总是需要与日志的大小成线性关系的带宽，使得每个人查询日志变得昂贵。在本文中，我们通过一个名为追加性认证字典（AAD）的新原语来解决这一差距。我们的构建是第一个在证明类型上实现（多项式）对数大小的，并有助于减少透明度日志的带宽消耗。但这是以增加追加时间和高内存使用的代价为前提的，这两个方面仍有待改进，以使实际部署成为可能。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345652](https://doi.org/10.1145/3319535.3345652)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3345652](https://dl.acm.org/doi/pdf/10.1145/3319535.3345652)
## pFilter: Retrofitting Legacy Applications for Data Privacy.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#pfilter-retrofitting-legacy-applications-for-data-privacy) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#pfilter-retrofitting-legacy-applications-for-data-privacy)**
### 作者
* Manish Shukla, TCS Research Lab, Pune, India
* Kumar Vidhani, TCS Research Lab, Pune, India
* Gangadhara Sirigireddy, TCS Research Lab, Pune, India
* Vijayanand Banahatti, TCS Research Lab, Pune, India
* Sachin Lodha, TCS Research Lab, Pune, India
### 摘要
> 企业需要处理客户数据以为他们提供量身定制的服务，然而，这些数据通常包含敏感和可以识别个人身份的信息。这导致企业在处理敏感数据的必要性与保护隐私的要求之间需要保持平衡，这个问题在几乎没有隐私控制措施的旧应用程序中更为突出。对旧应用程序进行改造的一种经过良好研究的技术是，在将敏感内容呈现在屏幕上之前，使用基于路径的方法对其进行屏蔽。在这项工作中，我们展示了现有技术水平存在的差距，并描述了一个动态系统，该系统利用上下文来执行基于位置的搜索和敏感内容屏蔽。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363259](https://doi.org/10.1145/3319535.3363259)
## ÆGIS: Smart Shielding of Smart Contracts.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#gis-smart-shielding-of-smart-contracts) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#gis-smart-shielding-of-smart-contracts)**
### 作者
* Christof Ferreira Torres, University of Luxembourg, Luxembourg, Luxembourg
* Mathis Baden, University of Luxembourg, Luxembourg, Luxembourg
* Robert Norvill, University of Luxembourg, Luxembourg, Luxembourg
* Hugo Jonker, Open University of the Netherlands & Radbound University, Heerlen, Netherlands
### 摘要
> 近年来，智能合约遭遇了严重的漏洞，导致损失数百万美元。与传统程序不同，一旦部署，智能合约就无法更新。尽管有各种工具提出来检测有漏洞的智能合约，但它们都无法保护已经部署在区块链上的合约。此外，它们只关注漏洞，而不解决诈骗问题（例如，蜜罐）。在这项工作中，我们引入了Æ GIS，这是一种可以保护在区块链上的智能合约和用户不受利用的工具。为了实现这个目标，ÆGIS通过模式匹配实时地撤销交易。这些模式编码了检测触发漏洞或诈骗的恶意交易。新的模式通过智能合约进行投票和存储，从而利用了区块链提供的防篡改和透明性的好处。通过允许其保护功能的更新，智能合约就像一个智能护盾。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363263](https://doi.org/10.1145/3319535.3363263)
## Nickel to Lego: Using Foolgle</> to Create Adversarial Examples to Fool Google Cloud Speech-to-Text API.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#nickel-to-lego-using-foolgle-to-create-adversarial-examples-to-fool-google-cloud-speech-to-text-api) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#nickel-to-lego-using-foolgle-to-create-adversarial-examples-to-fool-google-cloud-speech-to-text-api)**
### 作者
* Joon Kuy Han, The State University of New York, Incheon, Republic of Korea
* Hyoungshick Kim, Sungkyunkwan University & CSIRO Data61, Suwon, Republic of Korea
* Simon S. Woo, Sungkyunkwan University, Suwon, Republic of Korea
### 摘要
> 许多公司提供自动语音识别或语音转文本的API，用于各种应用。然而，采用深度神经网络（DNNs）训练的音频分类算法有时会对对抗样本进行错误分类，给关键应用带来重大威胁。本文提出了一种使用遗传算法创建对抗性音频样本的新方法。我们的算法通过反复向原始音频信号中添加扰动来创建对抗性样本。与大多数白盒对抗性样本生成不同，我们的方法不需要了解目标DNN模型和参数（黑盒）以及强大的GPU计算资源。为了展示所提出的想法的可行性，我们使用遗传算法实现了一个名为Foolgle的工具，该工具通过非定向攻击创建对抗性音频样本，并使用最先进的Google Cloud语音转文本API对其进行评估。我们的初步实验结果表明，Foolgle以86%的成功率欺骗了API。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363264](https://doi.org/10.1145/3319535.3363264)
## Poster: Using Generative Adversarial Networks for Secure Pseudorandom Number Generation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-using-generative-adversarial-networks-for-secure-pseudorandom-number-generation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-using-generative-adversarial-networks-for-secure-pseudorandom-number-generation)**
### 作者
* Rajvardhan Oak, University of California, Berkeley, Berkeley, CA, USA
* Chaitanya Rahalkar, University of Pune, Pune, India
* Dhaval Gujar, University of Pune, Pune, India
### 摘要
> 安全随机数的生成一直是设计和开发安全计算机系统的一个具有挑战性的问题。在密码学领域，随机数在方案的安全性上起着重要作用，其依赖于密钥的随机性。在计算机中实现真正的随机性是不可行的，因此我们依赖伪随机数生成器（PRNGs）生成接近真实随机性的数值。PRNGs使用一个数学函数，该函数依赖于一个种子（生成数值所需的预设值），它生成满足随机性测试并对于没有生成器函数知识的用户表现为随机的数值。由于这些伪随机函数源自于数学函数，它们有其缺点。生成永远无法被观察者预测的随机数，需要一种因果非确定性的过程，其中事件不完全由先前状态决定。由于获取足够信息以预测此类事件的结果在物理上是不可能的，所以其结果对所有人都是随机的。多年来，已经采用了各种生成伪随机性的方法，包括使用数学函数、用户的键盘输入延迟、网络延迟、内存延迟等作为生成随机数的源。在这项工作中，我们提出了使用生成对抗网络（GAN）生成伪随机数的新方法。我们证明了GAN可以作为具有密码学安全性的伪随机数生成器（CPRNG），通过97％的国家标准与技术研究所（NIST）测试。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363265](https://doi.org/10.1145/3319535.3363265)
## Poster: Proofs of Retrievability with Low Server Storage.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-proofs-of-retrievability-with-low-server-storage) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-proofs-of-retrievability-with-low-server-storage)**
### 作者
* Michael Hanling, United States Naval Academy, Annapolis, MD, USA
* Gaspard Anthoine, Laboratoire Jean Kuntzmann, Grenoble, France
* Jean-Guillaume Dumas, Laboratoire Jean Kuntzmann, Grenoble, France
* Aude Maignan, Laboratoire Jean Kuntzmann, Grenoble, France
* Clément Pernet, Laboratoire Jean Kuntzmann, Grenoble, France
* Daniel S. Roche, United States Naval Academy, Annapolis, MD, USA
### 摘要
> 为了保证不可信任服务器上存储数据的完整性，已经提出了可检索性证明（PoR）和可证明数据拥有（PDP）方案。成功的PoR审计可高概率地确保服务器可恢复每一块存储数据。大多数提出的PoR方案关注带宽和计算成本，但在某些部署场景中，远程存储的大小可能是最昂贵的因素。我们提出了一种简单的PoR方案，它是对某些现有PDP工作的变体。与现有的审计例程相比，服务器的计算成本和带宽更高，但服务器的存储成本很低。我们的初步工作表明，在商业云环境中，根据成本结构和审计频率，部署这种方案可能更经济。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363266](https://doi.org/10.1145/3319535.3363266)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363266](https://dl.acm.org/doi/pdf/10.1145/3319535.3363266)
## Data Quality for Security Challenges: Case Studies of Phishing, Malware and Intrusion Detection Datasets.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#data-quality-for-security-challenges-case-studies-of-phishing-malware-and-intrusion-detection-datasets) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#data-quality-for-security-challenges-case-studies-of-phishing-malware-and-intrusion-detection-datasets)**
### 作者
* Rakesh M. Verma, University of Houston, Houston, TX, USA
* Victor Zeng, University of Houston, Houston, TX, USA
* Houtan Faridi, University of Houston, Houston, TX, USA
### 摘要
> 数据科学中的技术正日益被研究人员应用于安全挑战中。然而，安全领域独特的挑战需要对模型进行仔细的验证和稳健性保证。本文中，我们解释了与安全相关的数据质量的关键维度，并结合几个流行的钓鱼、入侵检测和恶意软件数据集进行说明，指出了确保数据质量的操作方法，并希望激发观众生成高质量的安全挑战数据集。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363267](https://doi.org/10.1145/3319535.3363267)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363267](https://dl.acm.org/doi/pdf/10.1145/3319535.3363267)
## Poster: Finding JavaScript Name Conflicts on the Web.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-finding-javascript-name-conflicts-on-the-web) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-finding-javascript-name-conflicts-on-the-web)**
### 作者
* Mingxue Zhang, Chinese University of Hong Kong, Sha Tin, Hong Kong
* Wei Meng, Chinese University of Hong Kong, Sha Tin, Hong Kong
* Yi Wang, Southern University of Science and Technology, Shenzhen, China
### 摘要
> 在开发Web应用程序时，包含来自许多不同主机的JavaScript代码是一种流行的做法。例如，要包含像Facebook Like按钮这样的社交插件，Web开发人员只需要在她/他的网页中包含来自facebook.net的脚本。然而，在Web浏览器中，同一框架中加载的脚本中的所有标识符（即变量名和函数名）共享单个全局命名空间。因此，一个脚本可以覆盖另一个脚本中定义的任何全局变量和/或全局函数，从而导致意外行为。在这项工作中，我们开发了一个基于浏览器的动态分析框架，用于监视和记录对JavaScript全局变量和全局函数的任何写操作。我们的工具能够覆盖运行时中执行的所有代码。在Alexa排名前1000个网站中，我们检测到778个冲突。我们的结果表明全局名称冲突确实会给Web应用程序带来安全风险。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363268](https://doi.org/10.1145/3319535.3363268)
## Poster: Understanding User's Decision to Interact with Potential Phishing Posts on Facebook using a Vignette Study.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-understanding-users-decision-to-interact-with-potential-phishing-posts-on-facebook-using-a-vignette-study) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-understanding-users-decision-to-interact-with-potential-phishing-posts-on-facebook-using-a-vignette-study)**
### 作者
* Sovantharith Seng, Rochester Institute of Technology, Rochester, NY, USA
* Huzeyfe Kocabas, Utah State University, Logan, UT, USA
* Mahdi Nasrullah Al-Ameen, Rochester Institute of Technology, Logan, UT, USA
* Matthew Wright, Rochester Institute of Technology, Rochester, NY, USA
### 摘要
> Facebook仍然是互联网上最大的社交媒体平台，拥有超过10亿每月活跃用户。平台上分享了各种个人和敏感数据，使其成为攻击者的首要目标。越来越多的网络钓鱼攻击利用用户缺乏安全知识，通过使用虚假或被入侵的账户来分享恶意帖子来欺骗受害者。这些攻击可能会逃避Facebook的防御系统的监测，使用户可能受到网络钓鱼攻击，或者设备通过驱动下载和恶意软件受到感染。至今只有少数研究来了解用户在Facebook上如何与此类攻击互动。在我们之前的工作中，我们使用模拟界面和思考协议进行了一项研究来解决这个挑战。在这项研究中，我们希望通过一项情景研究，鼓励参与者思考他们可能面临的现实场景，进一步了解不同因素对用户在社交媒体中点击决策的影响。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363270](https://doi.org/10.1145/3319535.3363270)
## Poster: Adversarial Examples for Hate Speech Classifiers.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-adversarial-examples-for-hate-speech-classifiers) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-adversarial-examples-for-hate-speech-classifiers)**
### 作者
* Rajvardhan Oak, University of California, Berkeley, Berkeley, CA, USA
### 摘要
> 随着互联网的出现，社交媒体平台已成为人们越来越受欢迎的交流媒介。像Twitter和Quora这样的平台允许人们大规模表达自己的观点。然而，这些平台常常受到仇恨言论和有毒内容的困扰。这类内容通常与性别歧视、恐同或种族歧视有关。自动文本分类可以在一定程度上过滤出有毒内容。本文讨论了对仇恨言论分类器的对抗攻击。我们展示了通过轻微修改文本，可以欺骗分类器将有毒评论误判为可接受的情况。我们使用已知攻击对仇恨言论分类器进行攻击，并引入了四种新攻击方式。我们发现我们的方法可以将一个随机森林分类器的性能降低20%。我们希望我们的研究能揭示文本分类器的弱点，并为进一步研究此主题的开展提供契机。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363271](https://doi.org/10.1145/3319535.3363271)
## Poster: Evaluating Security Metrics for Website Fingerprinting.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-evaluating-security-metrics-for-website-fingerprinting) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-evaluating-security-metrics-for-website-fingerprinting)**
### 作者
* Nate Mathews, Rochester Institute of Technology, Rochester, NY, USA
* Mohammad Saidur Rahman, Rochester Institute of Technology, Rochester, NY, USA
* Matthew Wright, Rochester Institute of Technology, Rochester, NY, USA
### 摘要
> 网站指纹攻击允许资源有限的攻击者破坏像Tor这样的隐私增强工具所提供的隐私保证。作为反应，研究人员提出了旨在混淆攻击者使用的分类工具的防御方法。随着新的、更强大的攻击技术的不断发展，纯攻击精确度已被证明不足以作为评估这些防御方法的唯一指标。为此，提出了两个安全度量指标，允许根据经常在攻击中使用的手工特征来评估防御方法。然而，最新的攻击技术使用能够自动学习抽象特征表示的深度学习模型，因此现有的度量指标再次不足以满足需求。在本研究中，我们研究了两个安全度量指标，并且：（1）展示了如何扩展这些方法以评估基于深度学习的网站指纹攻击，（2）比较了安全度量指标并确定它们的缺点。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363272](https://doi.org/10.1145/3319535.3363272)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363272](https://dl.acm.org/doi/pdf/10.1145/3319535.3363272)
## Poster: Video Fingerprinting in Tor.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-video-fingerprinting-in-tor) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-video-fingerprinting-in-tor)**
### 作者
* Mohammad Saidur Rahman, Rochester Institute of Technology, Rochester, NY, USA
* Nate Matthews, Rochester Institute of Technology, Rochester, NY, USA
* Matthew Wright, Rochester Institute of Technology, Rochester, NY, USA
### 摘要
> 每天有超过800万用户依赖Tor网络来保护他们在网络上的匿名性。不幸的是，Tor已经被证明对网站指纹攻击具有漏洞，这使得攻击者可以根据流量模式来推测用户正在访问的网站。目前最先进的攻击利用深度学习来使用原始数据包信息实现高分类准确率。然而，迄今为止的工作只考察了在Tor网络上传输的一种媒体类型：网页，而且主要只是站点的主页。在本研究中，我们相反地调查了通过Tor传输的视频内容的指纹识别能力。我们收集了一个大型的新数据集，其中包含50个长度相似的YouTube视频的网络跟踪数据。我们进行的初步实验使用了之前提出的卷积神经网络模型，并取得了令人鼓舞的分类结果，准确率达到了55%。这显示了揭示用户在Tor上观看的具体视频的潜力，进一步加剧了在抵御网站指纹攻击时需要考虑的隐私挑战。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363273](https://doi.org/10.1145/3319535.3363273)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363273](https://dl.acm.org/doi/pdf/10.1145/3319535.3363273)
## Poster: Directed Hybrid Fuzzing on Binary Code.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-directed-hybrid-fuzzing-on-binary-code) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-directed-hybrid-fuzzing-on-binary-code)**
### 作者
* Juhwan Kim, Sejong University, Seoul, Republic of Korea
* Joobeom Yun, Sejong University, Seoul, Republic of Korea
### 摘要
> 混合模糊测试器结合了模糊测试和共同执行的能力，希望模糊测试器能够快速探索输入空间，并通过共同执行来解决复杂的路径条件。然而，现有的混合模糊测试器（如Driller）无法有效地指导，例如指向不安全的系统调用或可疑位置，或者指向报告的漏洞的调用栈中的函数以进行复现。在本海报中，我们提出了DrillerGO，一种定向的混合模糊测试系统，以解决这个问题。它主要由静态分析模块和动态分析模块组成。在静态分析中，它在恢复的控制流图（CFG）中搜索可疑的API调用字符串。在针对一些可疑的API调用行之后，它将共同执行与路径引导结合起来。路径引导通过反向路径查找来帮助，这是一种从目标到main()函数起点反向查找路径的新技术。此外，我们将通过实验结果展示，DrillerGo可以比Driller更快地找到崩溃点。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363275](https://doi.org/10.1145/3319535.3363275)
## Endemic Oblivious Transfer.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#endemic-oblivious-transfer) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#endemic-oblivious-transfer)**
### 作者
* Daniel Mansy, VISA Research, San Francisco, CA, USA
* Peter Rindal, VISA Research, San Francisco, CA, USA
### 摘要
> 混淆传输在安全多方计算的设计中起着至关重要的作用。然而，没有很多实际的解决方案能够同时实现基于仿真的安全和能够根据不同假设进行实例化。在这项工作中，我们考虑了一种我们称之为地方性安全的基于仿真的安全概念。我们展示了如何在随机预言模型中构建高效的混淆传输，以在广泛的假设范围内实现地方性安全，其中包括DDH、CDH、LWE和基于编码的假设。我们构建了基于DDH的安全混淆传输，只需要一轮通信，这可以显著提高性能。我们还使用Crystals.Kyber密钥协定实例化了我们的混淆传输。我们的实现表明，这两种实例化可以在一毫秒内计算完成。此外，我们重新审视、纠正和改进了现有的混淆传输扩展技术。我们在理想密码模型中提供了一个主动安全的混淆传输扩展协议的实现，每秒处理高达2300万个混淆传输，并且比先前的安全实现快10倍。我们还展示了我们的框架可以在只有两轮的情况下计算地方性安全的混淆传输扩展和基本混淆传输。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354210](https://doi.org/10.1145/3319535.3354210)
## LevioSA: Lightweight Secure Arithmetic Computation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#leviosa-lightweight-secure-arithmetic-computation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#leviosa-lightweight-secure-arithmetic-computation)**
### 作者
* Carmit Hazay, Bar-Ilan University, Ramat-Gan, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Antonio Marcedone, Keybase Inc, New-York, NY, USA
* Muthuramakrishnan Venkitasubramaniam, University of Rochester, Rochester, NY, USA
### 摘要
> 我们研究了在存在恶意参与方的情况下，算术电路的安全两方计算问题。这个问题是由保护隐私的数值计算所驱动的，例如机器学习训练和分类以及阈值密码方案中产生的计算。在这项工作中，我们设计、优化和实现了用于安全两方算术计算的主动安全协议。我们协议的一个显著特点是可以完全模块化地使用任何被动安全的忽略线性函数评估（OLE）的实现。OLE是安全算术计算中常用的原语，类似于在布尔电路的安全计算中两倍传送的作用。对于典型的（大型但不太窄的）电路，我们的协议每个乘法门大约需要4次被动安全OLE的调用。这相比于最近的TinyOLE协议（Döttling等，ACM CCS 2017），在一般情况下需要22次主动安全OLE的调用，或者44次特定的基于代码的被动安全OLE的调用，有了显著的改进。我们的协议遵循IPS编译器（Ishai等人，CRYPTO 2008，TCC 2009）的高层方法，并通过多种方式进行优化。特别地，我们采用了在实际零知识论证系统Ligero（Ames等，ACM CCS 2017）的背景下使用的优化思想，将其应用到更一般的安全计算中，并探索了通过采用“泄漏”的被动安全OLE协议来提高效率的可能性。后者是受到最近（被动安全）基于格的OLE实现的启发，在这种情况下允许这种泄漏可以提高效率。我们通过将我们的协议的实现应用于几种有用的安全算术计算实例来展示其性能。在“宽”电路上，例如计算许多不同输入上的固定功能的电路，我们的协议比最先进的Overdrive协议（Keller等，Eurocrypt 2018）快5倍，并传输的数据量少4倍。我们的基准测试包括一个通用的从被动到主动OLE编译器，"Beaver三元组"的身份验证生成以及用于安全地外包神经网络分类的系统。后者是其类别中第一个主动安全实现，增强了最近相关工作（Mohassel和Zhang，IEEE S&P 2017；Juvekar等，USENIX 2018）提供的被动安全性能。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354258](https://doi.org/10.1145/3319535.3354258)
## Onion Ring ORAM: Efficient Constant Bandwidth Oblivious RAM from (Leveled) TFHE.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#onion-ring-oram-efficient-constant-bandwidth-oblivious-ram-from-leveled-tfhe) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#onion-ring-oram-efficient-constant-bandwidth-oblivious-ram-from-leveled-tfhe)**
### 作者
* Hao Chen, Microsoft Research, Redmond, WA, USA
* Ilaria Chillotti, KU Leuven, Leuven, Belgium
* Ling Ren, University of Illinois at Urbana-Champaign, Urbana-Champaign, IL, USA
### 摘要
> 玩忽视RAM（ORAM）是一种加密原语，允许客户端隐藏其数据加密并存储在远程服务器上的访问模式。传统上，ORAM算法假设服务器纯粹作为存储设备。在此假设下，ORAM对N个数据条目至少具有对数级的带宽扩大。经过三十年的改进，ORAM算法已经达到了最佳的对数级带宽扩大。尽管如此，在许多实际应用案例中，恒定带宽开销是可取的。为了实现这个目的，Devadas等人（TCC 2016）为ORAM形成了服务器计算模型，并提出了基于同态计算的Onion ORAM以实现恒定的最坏情况带宽扩大。这一领域的工作一般被认为是纯理论的，因为同态计算的开销很大。在本文中，我们提出了Onion Ring ORAM，这是单服务器模型下第一个高效的恒定带宽ORAM方案，基于Onion ORAM构建和Chillotti等人的TFHE方案的阶层版本。我们提出了一系列改进，最重要的是包括更高效的同态置换协议。我们实现了Onion Ring ORAM，并展示了在网络吞吐量有限的情况下，它可以胜过最先进的对数级带宽ORAM，如Path ORAM和Ring ORAM。在一个设置下，我们的构造将每次访问的货币成本降低了40％，端到端延迟降低了35％。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354226](https://doi.org/10.1145/3319535.3354226)
## Encrypted Databases: New Volume Attacks against Range Queries.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#encrypted-databases-new-volume-attacks-against-range-queries) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#encrypted-databases-new-volume-attacks-against-range-queries)**
### 作者
* Zichen Gui, University of Bristol, Bristol, United Kingdom
* Oliver Johnson, University of Bristol, Bristol, United Kingdom
* Bogdan Warinschi, University of Bristol & Dfinity, Bristol, United Kingdom
### 摘要
> 我们提出了一系列利用加密数据库范围查询的答案数量信息的新攻击方法。我们的攻击依赖于一种简单但强大有效的策略。我们通过多种方式展示了我们策略的强大性。我们展示了如何i) 适应多种基本使用场景的攻击变体 ii) 打败旨在挫败我们基本攻击前提的对策，以及 iii) 在唯一重建在信息理论上不可能的情况下进行部分重建秘密数据。此外，与现有技术相比，我们的攻击需要更少数量的查询。我们展示了如何在假定对手知道一些部分信息的情况下进一步改进攻击。我们通过对真实医疗数据进行大量实验来验证我们所有攻击，并从理论上证明了我们策略在基本攻击场景中的有效性。我们的新攻击进一步凸显了在加密数据库中实现适当的功能安全权衡的困难性。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363210](https://doi.org/10.1145/3319535.3363210)
## A High-Assurance Evaluator for Machine-Checked Secure Multiparty Computation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#a-high-assurance-evaluator-for-machine-checked-secure-multiparty-computation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#a-high-assurance-evaluator-for-machine-checked-secure-multiparty-computation)**
### 作者
* Karim Eldefrawy, SRI International, Menlo Park, CA, USA
* Vitor Pereira, INESC TEC & FC Universidade do Porto, Porto, Portugal
### 摘要
> 安全多方计算（MPC）使一组不信任的n个参与方能够共同使用私有输入计算函数。如果有不超过阈值t的参与方被破坏，MPC可保证计算的正确性和输入的保密性。主动式MPC（PMPC）解决了更强的威胁模型，即移动对手控制一组变化的参与方（但每次最多不超过t个），并可能在长时间内最终破坏所有n个参与方。本文首次尝试开发（P）MPC的高保证实现。我们在一个名为\EasyCrypt的工具辅助框架中对秘密分享和（P）MPC协议的几个抽象和可重用变体进行了形式化。使用这些变体，我们证明了一系列主动式背景下的抽象定理。我们在\EasyCrypt中实现并进行计算机验证的安全证明，证明了所需（抽象）协议的具体实例化。我们还开发了一个新的工具链，用于从\EasyCrypt中提取高可信的协议可执行实现。我们的工具链使用\Why作为中间工具，使我们能够从我们的（P）MPC形式化中提取可执行代码。我们通过将提取出的可执行文件的性能与使用基于\textsfPython -based \textsfCharm框架进行原型设计的手工实现版本的性能进行比较来进行评估。我们认为我们的高保证可执行文件的小开销是为了对其正确性和安全性的增加信心所支付的合理代价。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354205](https://doi.org/10.1145/3319535.3354205)
## HoneyBadgerMPC and AsynchroMix: Practical Asynchronous MPC and its Application to Anonymous Communication.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#honeybadgermpc-and-asynchromix-practical-asynchronous-mpc-and-its-application-to-anonymous-communication) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#honeybadgermpc-and-asynchromix-practical-asynchronous-mpc-and-its-application-to-anonymous-communication)**
### 作者
* Donghang Lu, Purdue University, West Lafayette, IN, USA
* Thomas Yurek, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Samarth Kulshreshtha, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Rahul Govind, University of Illinois at Urbana-Champaign, Urbana, IL, USA
* Aniket Kate, Purdue University, West Lafayette, IN, USA
* Andrew Miller, University of Illinois at Urbana-Champaign, Urbana, IL, USA
### 摘要
> 多方计算作为一种服务（MPSaaS）是构建保护隐私的通信系统的一种有前途的方法。然而，在本文中，我们认为现有的多方计算实现对于这个应用是不足的，因为它们没有解决公平性，更不用说鲁棒性了。即使一个恶意的服务器可以在看到输出的同时导致协议中止，在匿名通信服务的背景下，这将造成针对审查和去匿名化攻击的漏洞。为了解决这个问题，我们提出了一种新的多方计算实现，HoneyBadgerMPC，它将一个强健的在线阶段与一个乐观的离线阶段相结合，后者足够高效以连续运行在线阶段。我们使用HoneyBadgerMPC开发了一个应用案例研究，名为AsynchroMix，提供匿名广播功能。AsynchroMix具有一种新颖的多方计算程序，可以在多种设置下在计算和通信之间进行权衡，实现低延迟的消息混合。在一个基于云的分布式基准测试中，我们演示了在约20秒的时间内混合512条消息，以及在约两分钟的时间内混合最多4096条消息。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354238](https://doi.org/10.1145/3319535.3354238)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354238](https://dl.acm.org/doi/pdf/10.1145/3319535.3354238)
## Exploiting Symmetries When Proving Equivalence Properties for Security Protocols.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#exploiting-symmetries-when-proving-equivalence-properties-for-security-protocols) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#exploiting-symmetries-when-proving-equivalence-properties-for-security-protocols)**
### 作者
* Vincent Cheval, INRIA Nancy Grand-Est & LORIA, Nancy, France
* Steve Kremer, INRIA Nancy Grand-Est & LORIA, Nancy, France
* Itsaka Rakotonirina, INRIA Nancy Grand-Est & LORIA, Nancy, France
### 摘要
> 在主动对抗环境中验证密码协议的隐私属性，在并发过程计算中建模为行为等价关系，具有高计算复杂性。虽然在一般情况下是不可判定的，但对于一些常见密码原语的类别，当诚实参与者的数量有界时，该问题是coNEXP完全的。在本文中，我们开发了用于验证等价性的优化技术，利用研究中的两个过程之间的对称性。我们证明这些技术在实际中提供了显著的（数个数量级）加速，从而可以自动完全分析更大的协议规模。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354260](https://doi.org/10.1145/3319535.3354260)
## Are These Pairing Elements Correct?: Automated Verification and Applications.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#are-these-pairing-elements-correct-automated-verification-and-applications) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#are-these-pairing-elements-correct-automated-verification-and-applications)**
### 作者
* Susan Hohenberger, Johns Hopkins University, Baltimore, MD, USA
* Satyanarayana Vusirikala, University of Texas at Austin, Austin, TX, USA
### 摘要
> 利用一组配对乘积方程（PPE）来验证一个不可信的配对元素集合与另一组可信元素的正确性具有许多密码学应用。这些应用包括基本签名方案和结构保持签名方案的设计，利用“盲”IBE构建混淆传输方案，发现新的可验证随机函数，并使IBE / ABE授权机构对用户“负责”。一个自然的问题是：文献中所有的可信-不可信配对元素群组都可以通过PPE进行测试吗？我们提供了一些原始观察结果，表明答案是否定的，而且确定是否存在一组可以验证某些配对元素的PPE可以是非平凡的。许多IBE方案具有PPE可测试的私钥（相对于公共参数），而基于双系统加密的方案等则可以被证明不能。为了帮助那些希望在密码系统中使用基于PPE的元素验证的人，我们制定了规则来系统地搜索一组可以将不可信元素与一组可信元素进行验证的PPE。我们证明了每个规则的正确性，并将它们合并成一个主要的搜索算法，我们也证明了算法的正确性。我们在一个名为AutoPPE的新软件工具中实现了这个算法。在超过两打案例研究中进行测试，AutoPPE通常只需要几秒钟就能找到一组PPE（在存在的方案中）。这项工作是通过计算机自动化迈向改进基于配对的密码设计速度和准确性的更大目标的重要一步。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3339808](https://doi.org/10.1145/3319535.3339808)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3339808](https://dl.acm.org/doi/pdf/10.1145/3319535.3339808)
## Five Years of the Right to be Forgotten.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#five-years-of-the-right-to-be-forgotten) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#five-years-of-the-right-to-be-forgotten)**
### 作者
* Theo Bertram, Google, Inc., Mountain View, CA, USA
* Elie Bursztein, Google, Inc., Mountain View, CA, USA
* Stephanie Caro, Google, Inc., Mountain View, CA, USA
* Hubert Chao, Google, Inc., Mountain View, CA, USA
* Rutledge Chin Feman, Google, Inc., Mountain View, CA, USA
* Peter Fleischer, Google, Inc., Mountain View, CA, USA
* Albin Gustafsson, Google, Inc., Mountain View, CA, USA
* Jess Hemerly, Google, Inc., Mountain View, CA, USA
* Chris Hibbert, Google, Inc., Mountain View, CA, USA
* Luca Invernizzi, Google, Inc., Mountain View, CA, USA
* Lanah Kammourieh Donnelly, Google, Inc., Mountain View, CA, USA
* Jason Ketover, Google, Inc., Mountain View, CA, USA
* Jay Laefer, Google, Inc., Mountain View, CA, USA
* Paul Nicholas, Google, Inc., Mountain View, CA, USA
* Yuan Niu, Google, Inc., Mountain View, CA, USA
* Harjinder Obhi, Google, Inc., Mountain View, CA, USA
* David Price, Google, Inc., Mountain View, CA, USA
* Andrew Strait, Google, Inc., Mountain View, CA, USA
* Kurt Thomas, Google, Inc., Mountain View, CA, USA
* Al Verney, Google, Inc., Mountain View, CA, USA
### 摘要
> “遗忘权”是指一项隐私规定，使欧洲人有权撤除与他们姓名相关的搜索结果中的某些链接。为了阐明这项规定对信息获取的影响，我们对谷歌搜索上的320万个URL进行了一项回顾性测量研究，这些URL在过去五年中被请求撤除。我们的分析揭示了产生最大请求量的国家和匿名申请方（仅有1000个申请方占申请总量的16%）；被最频繁请求撤除的新闻、政府、社交媒体和目录网站（17%的撤除与申请者的法律历史、包括犯罪和不当行为有关）；以及境外请求的普遍存在。我们的研究结果极大地增加了对“遗忘权”的透明度，并揭示了在解决在互联网上出现的多方隐私冲突时，如何权衡个人隐私与公众利益的复杂性。我们的调查结果已经被添加到谷歌的透明报告中。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354208](https://doi.org/10.1145/3319535.3354208)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354208](https://dl.acm.org/doi/pdf/10.1145/3319535.3354208)
## Probabilistic Data Structures in Adversarial Environments.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#probabilistic-data-structures-in-adversarial-environments) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#probabilistic-data-structures-in-adversarial-environments)**
### 作者
* David Clayton, University of Florida, GAINESVILLE, FL, USA
* Christopher Patton, University of Florida, GAINESVILLE, FL, USA
* Thomas Shrimpton, University of Florida, GAINESVILLE, FL, USA
### 摘要
> 概率数据结构使用空间高效的数据表示来（近似地）响应有关数据的查询。传统上，这些结构伴随着对查询响应误差的概率边界。这些边界隐含地假设了良性攻击模型，其中数据和查询输入是非自适应选择的，并且独立于用于构建表示的随机性。然而，在可能违反这些假设的环境中，概率数据结构越来越多地被用于各种场景。本研究在对抗性环境中提供了概率数据结构的可证明安全处理。我们提供了一种语法，能够捕捉到各种使用中的结构，并且我们的安全概念支持在强大攻击存在的情况下开发错误边界。具体来说，我们主要关注广泛使用的Bloom过滤器，同时考虑到计数（Bloom）过滤器和计数最小化草图数据结构。对于这些传统版本，我们的安全发现主要是负面的；然而，我们展示了简单的改进（例如使用盐或秘密密钥）可以产生提供可证明安全性且开销较小的结构。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354235](https://doi.org/10.1145/3319535.3354235)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354235](https://dl.acm.org/doi/pdf/10.1145/3319535.3354235)
## How to (not) Share a Password: Privacy Preserving Protocols for Finding Heavy Hitters with Adversarial Behavior.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#how-to-not-share-a-password-privacy-preserving-protocols-for-finding-heavy-hitters-with-adversarial-behavior) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#how-to-not-share-a-password-privacy-preserving-protocols-for-finding-heavy-hitters-with-adversarial-behavior)**
### 作者
* Moni Naor, Weizmann Institute of Science, Rehovot, Israel
* Benny Pinkas, Bar-Ilan University, Ramat-Gan, Israel
* Eyal Ronen, Tel Aviv University & KU Leuven, Tel Aviv, Israel
### 摘要
> 密码选择不当是一个普遍的问题。选择弱密码的用户不仅会危及自己，还会威胁整个生态系统。例如，黑客利用物联网设备中的常见和默认密码创建僵尸网络，并对大型互联网服务进行严重攻击，例如Mirai僵尸网络的分布式拒绝服务攻击。我们提出了一种方法来帮助保护互联网免受此类大规模攻击。我们的方法可以让服务器识别常用密码（重点关注），并发布一个必须避免使用的过度流行密码列表。此过滤器可确保没有一个密码可以用来威胁大部分用户。该列表是动态的，可以随着新增用户或当前用户更改密码而变化。我们应用恶意安全的两方计算和差分隐私来保护用户的密码隐私。我们的解决方案不需要额外的硬件或费用，并且对用户来说是透明的。我们的私人重点关注构造甚至可以在试图操纵协议以隐藏攻击者正在利用的某些密码的流行度的恶意设备联盟下保持安全。它还可以在持续观察黑名单随时间变化的情况下确保差分隐私。作为实际检验，我们进行了三个测试：计算系统与几个公开可用数据库的保证，对这些数据库进行完整模拟，并在物联网设备上实施和分析了一个概念验证。我们的构建还可以在存在积极恶意对手的情况下，在其他环境中私下了解重点关注。例如，了解Tor网络访问最常见的网站。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363204](https://doi.org/10.1145/3319535.3363204)
## Protocols for Checking Compromised Credentials.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#protocols-for-checking-compromised-credentials) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#protocols-for-checking-compromised-credentials)**
### 作者
* Lucy Li, Cornell University, Ithaca, NY, USA
* Bijeeta Pal, Cornell University, Ithaca, NY, USA
* Junade Ali, Cloudflare Inc., London, United Kingdom
* Nick Sullivan, Cloudflare Inc., San Francisco, CA, USA
* Rahul Chatterjee, University of Wisconsin-Madison & Cornell Tech, Madison, WI, USA
* Thomas Ristenpart, Cornell Tech, New York, NY, USA
### 摘要
> 为了防止凭据填充攻击，业界最佳实践现在会主动检查用户凭据是否在已知的数据泄露中。最近，一些网络服务，例如HaveIBeenPwned（HIBP）和Google密码检查（GPC），已开始提供API来检查密码是否已遭泄露。我们将这类服务称为已泄露凭据检查（C3）服务。我们首次对C3服务进行了正式描述，详细说明了不同设置和运行要求，并提供了相关的威胁模型。一个关键的安全要求是用户的被检查密码的机密性。目前广泛部署的C3服务要求用户共享用户密码的一个小前缀的哈希值。我们提供了一个框架来经验性地分析这种协议的泄露情况，并显示在某些情况下，知道哈希值前缀会导致远程猜测攻击的效果增加12倍。我们提出了两个提供更强密码保护的新协议，实现了它们，并通过实验证明它们的实际部署仍然可行。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354229](https://doi.org/10.1145/3319535.3354229)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354229](https://dl.acm.org/doi/pdf/10.1145/3319535.3354229)
## User Account Access Graphs.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#user-account-access-graphs) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#user-account-access-graphs)**
### 作者
* Sven Hammann, ETH Zurich, Zurich, Switzerland
* Saša Radomirović, University of Dundee, Dundee, United Kingdom
* Ralf Sasse, ETH Zurich, Zurich, Switzerland
* David Basin, ETH Zurich, Zurich, Switzerland
### 摘要
> 用户账户的主要身份验证方法很少是访问该账户的唯一方式。账户通常可以通过其他账户、恢复方法、密码管理器或单点登录进行访问。这增加了每个账户的攻击面，引发了一些微妙的安全问题。这些问题无法通过独立考虑每个账户来检测，而需要分析用户账户之间的链接。此外，为了准确评估账户的安全性，还必须考虑现实世界的因素。例如，一个可以访问物理邮箱的攻击者可能会获取通过邮件发送的凭据。尽管理解这些相互关系及其引发的安全问题的重要性表面上很高，但目前不存在先前的方法来以精确的方式执行其分析。为了解决这个需求，我们引入了账户访问图，这是第一个能够全面建模和分析用户整个配置的形式化方法，包括用户账户、设备、凭据、密钥和文档之间的所有连接。账户访问图支持系统地识别用户账户中的安全漏洞和锁定风险。我们提供了分析算法，并通过一个案例研究来说明它们的有效性，我们在这个案例研究中自动检测到了用户配置中的重要弱点，并提出了改进选项。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354193](https://doi.org/10.1145/3319535.3354193)
## Detecting Fake Accounts in Online Social Networks at the Time of Registrations.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#detecting-fake-accounts-in-online-social-networks-at-the-time-of-registrations) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#detecting-fake-accounts-in-online-social-networks-at-the-time-of-registrations)**
### 作者
* Dong Yuan, Tsinghua University, Beijing, China
* Yuanli Miao, Tsinghua University, Beijing, China
* Neil Zhenqiang Gong, Duke University, Durhamn, NC, USA
* Zheng Yang, Tsinghua University, Beijing, China
* Qi Li, Tsinghua University, Beijing, China
* Dawn Song, University of California, Berkeley, Berkeley, CA, USA
* Qian Wang, Wuhan University, Wuhan, China
* Xiao Liang, Tencent, Shenzhen, China
### 摘要
> 在线社交网络受到虚假信息的困扰。尤其是使用大量的虚假账户（也称为Sybil）时，攻击者可以通过传播垃圾邮件、恶意软件和虚假信息来破坏良性用户的安全和隐私。现有的Sybil检测方法依赖于由Sybil生成的丰富内容、行为和/或社交图。这些方法的关键限制在于它们在捕获Sybil时会产生显著的延迟，即在被检测到时，Sybil可能已经进行了许多恶意活动。在这项工作中，我们提出了一种名为Ianus的Sybil检测方法，它利用账户注册信息。Ianus的目标是在Sybil注册后立即捕获它们。首先，我们使用来自微信（中国最大的在线社交网络）的带有标记Sybil的真实注册数据集进行测量研究，以描述Sybil和良性用户的注册模式。我们发现Sybil倾向于具有同步和异常的注册模式。其次，基于我们的测量结果，我们将Sybil检测建模为一个图推理问题，从而可以整合异构特征。特别地，我们为每对账户提取同步和异常特征，使用这些特征构建一个图，其中Sybil之间密集连接，而良性用户与其他良性用户和Sybil之间则是孤立或稀疏连接，最后通过分析图的结构来检测Sybil。我们使用微信的真实注册数据集评估了Ianus。此外，微信已经每天部署了Ianus，也就是微信使用Ianus来分析每天新注册的账户并检测Sybil。通过微信安全团队的手动验证，我们发现Ianus每天可以检测到每百万个新注册账户约40万个，并且平均精确度超过96%。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363198](https://doi.org/10.1145/3319535.3363198)
## Charting the Attack Surface of Trigger-Action IoT Platforms.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#charting-the-attack-surface-of-trigger-action-iot-platforms) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#charting-the-attack-surface-of-trigger-action-iot-platforms)**
### 作者
* Qi Wang, University of Illinois at Urbana-Champaign, Champaign, IL, USA
* Pubali Datta, University of Illinois at Urbana-Champaign, Champaign, IL, USA
* Wei Yang, University of Texas at Dallas, Dallas, TX, USA
* Si Liu, University of Illinois at Urbana-Champaign, Champaign, IL, USA
* Adam Bates, University of Illinois at Urbana-Champaign, Champaign, IL, USA
* Carl A. Gunter, University of Illinois at Urbana-Champaign, Champaign, IL, USA
### 摘要
> 物联网（IoT）部署正变得越来越自动化和复杂。通过触发-动作规则等编程抽象，最终用户现在可以通过互连设备和其他在线服务轻松创建新功能。然而，当同时启用多个规则时，会出现复杂的系统行为，很难理解或诊断。历史告诉我们，这种情况是容易被利用的，但目前触发-动作型IoT部署的安全状态大部分是未知的。在这项工作中，我们对触发-动作规则之间的交互进行了全面分析，以识别安全风险。首先，我们利用IFTTT作为示例平台，列举了触发-动作平台内部存在的规则间漏洞。为了帮助用户识别这些危险，我们还提出了iRuler，这是一个执行可满足性模型论（SMT）求解和模型检测的系统，以发现物联网部署中的规则间漏洞。iRuler基于抽象的信息流模型进行操作，该模型表示物联网部署的攻击面，但实际上我们发现，由于物联网平台的封闭性，很难获得这样的模型。为了解决这个问题，我们开发了帮助推断基于自然语言处理的触发-动作信息流的方法。我们开发了一种新颖的评估方法，通过安装了315,393个IFTTT应用的数量来近似合理真实世界的物联网部署，并确定IFTTT生态系统中66%的合成部署存在规则间漏洞的潜在可能性。综合起来，这些努力为理解物联网部署配置错误的真实世界的危险提供了洞察力。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345662](https://doi.org/10.1145/3319535.3345662)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3345662](https://dl.acm.org/doi/pdf/10.1145/3319535.3345662)
## Automatic Fingerprinting of Vulnerable BLE IoT Devices with Static UUIDs from Mobile Apps.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#automatic-fingerprinting-of-vulnerable-ble-iot-devices-with-static-uuids-from-mobile-apps) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#automatic-fingerprinting-of-vulnerable-ble-iot-devices-with-static-uuids-from-mobile-apps)**
### 作者
* Chaoshun Zuo, Ohio State University, Columbus, OH, USA
* Haohuang Wen, Ohio State University, Columbus, OH, USA
* Zhiqiang Lin, Ohio State University, Columbus, OH, USA
* Yinqian Zhang, Ohio State University, Columbus, OH, USA
### 摘要
> 作为一种易于部署和成本低廉的低功耗无线解决方案，蓝牙低功耗（BLE）已广泛应用于物联网（IoT）设备。在典型的物联网场景中，物联网设备首先需要与其伴侣移动应用程序连接，用作其互联网访问的网关。为了建立连接，设备首先向附近的智能手机应用程序广播带有UUID的广告数据包。利用这些UUID，伴侣应用程序能够识别设备，进行配对和绑定，并允许进一步的数据通信。然而，我们展示了目前BLE设备与其伴侣移动应用程序之间通信协议的设计和实现存在根本性缺陷，允许攻击者通过应用程序的静态UUID准确识别BLE设备。同时，我们还发现许多BLE物联网设备采用了“仅适用于工作”配对方式，如果没有应用级身份验证，攻击者就可以主动连接这些设备。更糟糕的是，这种漏洞也可以直接从移动应用程序中发现。此外，我们还发现有大量的易受攻击的应用级身份验证应用程序，这意味着由这些应用程序连接的设备可以被攻击者直接控制。为了提高公众对物联网设备指纹识别的认识，并在攻击者之前发现这些易受攻击的BLE物联网设备，我们开发了一种自动化移动应用程序分析工具BLESCOPE，并在Google Play商店中对所有免费的BLE物联网应用程序进行评估。我们的工具总共识别出1,757个易受攻击的移动应用程序。我们还在一个1.28平方英里的区域进行了现场测试，识别出5,822个真实的BLE设备，其中5,509个（94.6%）可以被攻击者识别，431个（7.4%）容易受到未经授权的访问。我们已经向相应的应用程序开发者进行了负责任的披露，并向蓝牙特别兴趣小组报告了指纹识别问题。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354240](https://doi.org/10.1145/3319535.3354240)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354240](https://dl.acm.org/doi/pdf/10.1145/3319535.3354240)
## Fast Actively Secure Five-Party Computation with Security Beyond Abort.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#fast-actively-secure-five-party-computation-with-security-beyond-abort) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#fast-actively-secure-five-party-computation-with-security-beyond-abort)**
### 作者
* Megha Byali, Indian Institute of Science, Bangalore, India
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Arpita Patra, Indian Institute of Science, Bangalore, India
* Swati Singla, Indian Institute of Science, Bangalore, India
### 摘要
> 小规模人口和诚实多数的安全多方计算(MPC)由于在技术定制和效率方面的灵活性而受到关注。在这项工作中，我们研究了五方设定下的多种安全概念，容忍两个活动腐败。由于常数轮次，我们的协议最适合实时、高延迟的网络，比如互联网。在一套最低限度的成对私有通道设置中，我们提供了具有一致中止(要么所有诚实方获得输出，要么所有诚实方都没有获得输出)和公平性(只有当所有诚实方也接收到输出时，敌对方才获得其输出)的高效实例。在存在额外的广播通道(已知是必要的)的情况下，我们提供了一个具有保证输出传递的构造(任何敌对行为都无法阻止诚实方接收输出)。广播通信是最小的，并且与电路大小无关。在性能(通信和运行时间)方面，我们的协议与Chandran等人(ACM CCS 2016)的最佳已知协议相比，在选择性中止的最低安全性上只有最小的开销。此外，我们的公平和一致中止协议可以扩展到最多√n个腐败的n方，类似于Chandran等人的工作。超越了三方中有一个腐败的最受欢迎的诚实多数设置，我们的结果证明了在不牺牲太多最低安全性的情况下实现更多活动腐败的更强安全概念的可行性。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345657](https://doi.org/10.1145/3319535.3345657)
## Machine-Checked Proofs for Cryptographic Standards: Indifferentiability of Sponge and Secure High-Assurance Implementations of SHA-3.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#machine-checked-proofs-for-cryptographic-standards-indifferentiability-of-sponge-and-secure-high-assurance-implementations-of-sha-3) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#machine-checked-proofs-for-cryptographic-standards-indifferentiability-of-sponge-and-secure-high-assurance-implementations-of-sha-3)**
### 作者
* José Bacelar Almeida, Universidade do Minho & INESC-TEC, Braga, Portugal
* Cécile Baritel-Ruet, Université Côte d'Azur & Inria Sophia-Antipolis, Sophia-Antipolis, France
* Manuel Barbosa, Universidade do Porto & INESC-TEC, Porto, Portugal
* Gilles Barthe, MPI-SP & IMDEA Software Institute, Bochum, Germany
* François Dupressoir, University of Surrey & University of Bristol, Bristol, United Kingdom
* Benjamin Grégoire, Inria Sophia-Antipolis, Sophia-Antipolis, France
* Vincent Laporte, Inria, Rennes, France
* Tiago Oliveira, Universidade do Porto & INESC-TEC & FCUP, Porto, Portugal
* Alley Stoughton, Boston University, Boston, MA, USA
* Pierre-Yves Strub, École Polytechnique, Paris, France
### 摘要
> 我们提出了一个SHA-3哈希函数的高可靠性和高速度实现。我们的实现采用Jasmin编程语言编写，并在EasyCrypt证明助手中进行了形式验证以确保其功能正确性、可证明的安全性和抗时序攻击能力。我们的实现是第一个同时实现了四个理想特性（高效性、正确性、可证明的安全性和侧信道保护）的非平凡的密码原语。具体而言，我们的机械化证明表明：1) SHA-3哈希函数与随机预言不可区分，因此能够抵抗碰撞、第一和第二原像攻击；2) SHA-3哈希函数在矢量化x86实现中被正确地实现。此外，我们的实现在理想化的时序泄漏模型中经证明能够抵御时序攻击。这些证明包括了EasyCrypt的新的库，包括可编程随机预言和模块化不可区分性证明的独立兴趣。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363211](https://doi.org/10.1145/3319535.3363211)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363211](https://dl.acm.org/doi/pdf/10.1145/3319535.3363211)
## VeriSketch: Synthesizing Secure Hardware Designs with Timing-Sensitive Information Flow Properties.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#verisketch-synthesizing-secure-hardware-designs-with-timing-sensitive-information-flow-properties) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#verisketch-synthesizing-secure-hardware-designs-with-timing-sensitive-information-flow-properties)**
### 作者
* Armaiti Ardeshiricham, University of California, San Diego, San Diego, CA, USA
* Yoshiki Takashima, University of California, San Diego, San Diego, CA, USA
* Sicun Gao, University of California, San Diego, San Diego, CA, USA
* Ryan Kastner, University of California, San Diego, San Diego, CA, USA
### 摘要
> 我们提出了VeriSketch，这是一个面向安全的程序综合框架，用于开发具有功能和安全规范形式保证的硬件设计。VeriSketch定义了一种综合语言，一种用于指定和推断时间敏感信息流属性的代码插框架，并使用专门的基于约束的综合来生成强制执行规范的HDL代码。我们通过安全关键的硬件设计示例展示了VeriSketch的强大能力，包括缓存控制器、线程调度器和片上系统仲裁器，它们具有无时间侧信道、机密性和隔离性等安全属性的形式保证。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354246](https://doi.org/10.1145/3319535.3354246)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354246](https://dl.acm.org/doi/pdf/10.1145/3319535.3354246)
## SEEMless: Secure End-to-End Encrypted Messaging with less</> Trust.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#seemless-secure-end-to-end-encrypted-messaging-with-less-trust) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#seemless-secure-end-to-end-encrypted-messaging-with-less-trust)**
### 作者
* Melissa Chase, Microsoft Research, Redmond, WA, USA
* Apoorvaa Deshpande, Brown University, Providence, RI, USA
* Esha Ghosh, Microsoft Research, Redmond, WA, USA
* Harjasleen Malvai, Cornell University, Ithaca, NY, USA
### 摘要
> 端到端加密的消息传递（E2E）只有在参与者有办法获取所需收信人的正确公钥时才是安全的。然而，为了使这些系统可用，用户必须能够更换他们的密钥（例如当他们丢失或重置设备，或重新安装应用程序时），而且我们不能假设任何加密手段来验证新的密钥。在当前的E2E系统中，服务提供商管理其注册用户的公钥目录；这使得受到威胁或被强迫的服务提供商可以引入自己的密钥并执行中间人攻击。基于CONIKS的方法（Melara等人，USENIX Security Symposium '15），我们形式化了隐私保护可验证密钥目录（VKD）的概念：一种允许用户监控服务代表他们分发的密钥的系统。然后，我们提出了一种新的VKD方案，称为SEEMless，它在隐私性和可扩展性方面改进了之前的工作。特别是，我们的新方法允许密钥更改几乎立即生效；我们实验证明我们的方案容易支持少于一分钟的延迟，与之前提出一个小时延迟的工作形成对比。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363202](https://doi.org/10.1145/3319535.3363202)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363202](https://dl.acm.org/doi/pdf/10.1145/3319535.3363202)
## POIROT: Aligning Attack Behavior with Kernel Audit Records for Cyber Threat Hunting.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poirot-aligning-attack-behavior-with-kernel-audit-records-for-cyber-threat-hunting) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poirot-aligning-attack-behavior-with-kernel-audit-records-for-cyber-threat-hunting)**
### 作者
* Sadegh M. Milajerdi, University of Illinois at Chicago, Chicago, IL, USA
* Birhanu Eshete, University of Michigan-Dearborn, Dearborn, MI, USA
* Rigel Gjomemo, University of Illinois at Chicago, Chicago, IL, USA
* V.N. Venkatakrishnan, University of Illinois at Chicago, Chicago, IL, USA
### 摘要
> 网络威胁情报（CTI）被用于寻找长时间未被发现的企业网络遭受攻击的迹象。为了进行更有效的分析，CTI开放标准已经纳入了描述关系，展示了指示器或可观察物之间的关系。然而，这些关系在信息收集中要么完全被忽视，要么不用于威胁搜索。在本文中，我们提出了一个名为POIROT的系统，利用这些关联来揭示成功攻击活动的步骤。我们使用内核审计作为可靠的信息来源，涵盖系统实体之间的所有因果关系和信息流，并将威胁搜索建模为一种不精确的图模式匹配问题。我们的技术方法基于一种新颖的相似度度量，评估基于CTI关联构建的查询图与基于内核审计日志记录构建的溯源图之间的对齐程度。我们将POIROT应用于公开发布的真实事件报告，以及由DARPA设计的对抗性参与报告，其中包括针对Linux、FreeBSD和Windows等不同操作系统平台的十个不同攻击活动。我们的评估结果表明，POIROT能够在包含数百万节点的图中搜索，并在几分钟内定位攻击，结果表明CTI关联可以作为威胁搜索的强大可靠的证据。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363217](https://doi.org/10.1145/3319535.3363217)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363217](https://dl.acm.org/doi/pdf/10.1145/3319535.3363217)
## Different is Good: Detecting the Use of Uninitialized Variables through Differential Replay.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#different-is-good-detecting-the-use-of-uninitialized-variables-through-differential-replay) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#different-is-good-detecting-the-use-of-uninitialized-variables-through-differential-replay)**
### 作者
* Mengchen Cao, Orion Security Lab, Alibaba Group, Hangzhou, China
* Xiantong Hou, Orion Security Lab, Alibaba Group, Hangzhou, China
* Tao Wang, Orion Security Lab, Alibaba Group, Hangzhou, China
* Hunter Qu, Orion Security Lab, Alibaba Group, Hangzhou, China
* Yajin Zhou, Zhejiang University, Hangzhou, China
* Xiaolong Bai, Orion Security Lab, Alibaba Group, Hangzhou, China
* Fuwei Wang, Orion Security Lab, Alibaba Group, Hangzhou, China
### 摘要
> 使用未初始化的变量是一个常见的问题。它可能导致内核信息泄漏，从而打破了广泛部署的安全防御措施，即内核地址空间布局随机化（KASLR）。尽管最近一个名为Bochspwn Reloaded的系统在Windows内核中报告了多个内存泄漏问题，但如何有效地检测这个问题仍然远远落后。在本文中，我们提出了一种新技术，即差异回放，可以有效地检测使用未初始化的变量。具体来说，它在多个实例中记录和重放程序的执行。一个实例是使用原始内存，另一个实例改变（或污染）从堆栈和堆中分配的变量的值。然后，它比较程序的状态，以找到对未初始化变量的引用。其思想是，如果一个变量被正确初始化，它将覆盖污染值，并且两个运行实例中的程序状态应该是相同的。在检测到差异后，我们的系统利用符号污染分析进一步确定变量分配位置。这有助于我们确定根本原因，促进真正的利用程序的开发。我们实现了一个名为TimePlayer的原型。将其应用于Windows 7和Windows 10内核（x86 / x64）后，它成功地确认了34个新问题，以及其他85个已经修补过的问题（其中一些是公开未知的）。在这34个新问题中，有17个被Microsoft确认为零日漏洞。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345654](https://doi.org/10.1145/3319535.3345654)
## HideNoSeek: Camouflaging Malicious JavaScript in Benign ASTs.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#hidenoseek-camouflaging-malicious-javascript-in-benign-asts) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#hidenoseek-camouflaging-malicious-javascript-in-benign-asts)**
### 作者
* Aurore Fass, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Michael Backes, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
* Ben Stock, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
### 摘要
> 在恶意软件领域，基于学习的系统已经成为检测新恶意变种的流行方法。然而，具有特定和内部知识的攻击者可能能够生成被错误分类的输入样本。在实践中，假设存在强大的攻击者是不现实的，因为这意味着可以获得内部信息。相反，我们提出了一种新颖且通用的隐蔽攻击方法HideNoSeek，可以规避基于语法特征的所有检测器，而不需要任何关于试图规避的系统的信息。我们的攻击方法包括更改恶意JavaScript样本的结构，以复制良性语法。为此，我们自动重写恶意JavaScript输入的抽象语法树（AST）为现有的良性语法树。具体而言，HideNoSeek使用恶意种子，寻找种子与传统良性脚本之间的同构子图。特别是，它用恶意等价物（具有相同的语法结构）替换良性子AST，并调整良性数据依赖关系，以保持恶意语义，而不改变AST。在实践中，我们利用23个恶意种子生成了91,020个恶意脚本，完美地复制了Alexa排名前10,000个网页的AST。此外，我们可以平均生成14个具有与每个Alexa排名前10相同AST的恶意样本。总体而言，使用HideNoSeek输入的标准训练分类器具有99.98%的误报率，而针对此类样本训练的分类器具有超过88.74%的误报率，使得目标静态检测器不可靠。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3345656](https://doi.org/10.1145/3319535.3345656)
## Your Cache Has Fallen: Cache-Poisoned Denial-of-Service Attack.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#your-cache-has-fallen-cache-poisoned-denial-of-service-attack) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#your-cache-has-fallen-cache-poisoned-denial-of-service-attack)**
### 作者
* Hoai Viet Nguyen, Cologne University of Applied Sciences, Cologne, Germany
* Luigi Lo Iacono, Cologne University of Applied Sciences, Cologne, Germany
* Hannes Federrath, University of Hamburg, Hamburg, Germany
### 摘要
> 网页缓存使HTTP响应能够被重复利用，旨在减少到达源服务器的请求数量、由资源请求导致的网络流量以及用户感知的资源访问延迟。因此，缓存是现代分布式系统中的关键组件，它使应用程序能够大规模扩展。除了优化性能指标外，缓存还能提供额外的防止拒绝服务（DoS）攻击的保护。在本文中，我们介绍并分析了一类新的网页缓存污染攻击。通过在源服务器上引发一个中间缓存系统未检测到的错误，缓存被毒化为服务器生成的错误页面，并被配置为提供这些无用内容而不是预期的内容，从而导致受害服务不可用。在对十五种网页缓存解决方案进行广泛研究的过程中，我们分析了缓存污染拒绝服务（CPDoS）攻击的负面影响，我们给它起了这个名字。我们通过发现一个代理缓存产品和五个CDN服务易受CPDoS攻击的脆弱性来展示其实际相关性。其中包括一些重要的解决方案，这些解决方案又缓存了高价值的网站。后果是严重的，因为一个简单的请求足以瘫痪一个大地理区域内的受害网站。对于研究人员来说，对新引入的CPDoS攻击的认识非常有价值，以获得对原因和对策的全面理解；对于从事实施强大而安全的分布式系统的从业人员来说，它也是非常有价值的。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354215](https://doi.org/10.1145/3319535.3354215)
## "I don't see why I would ever want to use it": Analyzing the Usability of Popular Smartphone Password Managers.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#i-dont-see-why-i-would-ever-want-to-use-it-analyzing-the-usability-of-popular-smartphone-password-managers) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#i-dont-see-why-i-would-ever-want-to-use-it-analyzing-the-usability-of-popular-smartphone-password-managers)**
### 作者
* Sunyoung Seiler-Hwang, University of Mannheim, Mannheim, Germany
* Patricia Arias-Cabarcos, University of Mannheim, Mannheim, Germany
* Andrés Marín, University Carlos III of Madrid, Leganés, Spain
* Florina Almenares, University Carlos III of Madrid, Leganés, Spain
* Daniel Díaz-Sánchez, University Carlos III of Madrid, Leganés, Spain
* Christian Becker, University of Mannheim, Mannheim, Germany
### 摘要
> 密码是一种常见的身份验证机制，尽管还有其他可替代的方式。在智能手机的情况下，由于交互发生在小屏幕和多层键盘上，可用性问题变得更加严重。虽然密码管理器（PMs）可以改善这种情况并有助于加强安全性，但它们的普及程度还远远不够。为了了解其中的原因，我们进行了首次实证可用性研究，涵盖了定量和定性评估两个方面的内容，研究了移动设备上的PMs。我们的研究结果表明，流行的PMs仅能勉强符合标准系统可用性评估，且存在三个关键改进领域：与外部应用的集成，安全性和用户指导与交互。我们基于收集到的证据提出了填补这一空白的建议。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354192](https://doi.org/10.1145/3319535.3354192)
## Matched and Mismatched SOCs: A Qualitative Study on Security Operations Center Issues.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#matched-and-mismatched-socs-a-qualitative-study-on-security-operations-center-issues) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#matched-and-mismatched-socs-a-qualitative-study-on-security-operations-center-issues)**
### 作者
* Faris Bugra Kokulu, Arizona State University, Tempe, AZ, USA
* Ananta Soneji, Arizona State University, Tempe, AZ, USA
* Tiffany Bao, Arizona State University, Tempe, AZ, USA
* Yan Shoshitaishvili, Arizona State University, Tempe, AZ, USA
* Ziming Zhao, Rochester Institute of Technology, Rochester, NY, USA
* Adam Doupé, Arizona State University, Tempe, AZ, USA
* Gail-Joon Ahn, Arizona State University and Samsung Research, Tempe, AZ, USA
### 摘要
> 组织，如公司和政府，创建了安全运营中心（SOCs），以防御计算机安全攻击。SOCs是专注于安全事件管理的中央防御组织，具备监控、防护、响应和报告等能力。它们是现代组织防御的最关键组成部分之一。尽管对组织的重要性以及报告的安全事件频率很高，但只有少数研究着眼于SOC特定的问题。在本研究中，为了了解和确定SOC存在的问题，我们对来自不同行业部门的SOC分析师和经理进行了18次半结构化采访。通过对访谈数据的分析，我们确定了存在于SOC中的技术和非技术问题。此外，我们发现SOC经理与分析师之间存在固有的分歧，如果不加以解决，可能会对SOC的效率和效力构成风险。我们将这些问题总结成适用于未来学术研究和SOC管理的要点。我们认为研究应该致力于提高SOC的效率和效力。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354239](https://doi.org/10.1145/3319535.3354239)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354239](https://dl.acm.org/doi/pdf/10.1145/3319535.3354239)
## A Usability Evaluation of Let's Encrypt and Certbot: Usable Security Done Right.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#a-usability-evaluation-of-lets-encrypt-and-certbot-usable-security-done-right) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#a-usability-evaluation-of-lets-encrypt-and-certbot-usable-security-done-right)**
### 作者
* Christian Tiefenau, University of Bonn, Bonn, Germany
* Emanuel von Zezschwitz, University of Bonn & Fraunhofer FKIE, Bonn, Germany
* Maximilian Häring, University of Bonn & Fraunhofer FKIE, Bonn, Germany
* Katharina Krombholz, CISPA Helmholtz Center, Saarbrücken, Germany
* Matthew Smith, University of Bonn & Fraunhofer FKIE, Bonn, Germany
### 摘要
> 正确配置HTTPS是一组复杂的任务，许多管理员过去一直在努力解决这个问题。Let's Encrypt和电子前沿基金会的Certbot旨在通过提供免费可信证书（Let's Encrypt）和提供用户友好的支持来配置和加固TLS（Certbot）来改善TLS生态系统。尽管采用率有所增加，但到目前为止，对于这种半自动化方法实际可用性和安全性的科学证据仍然很少。因此，我们进行了一项随机对照试验，以评估Let's Encrypt和Certbot的可用性与传统证书颁发机构方法的比较。我们进行了一项参与者为内部实验室研究，共有31名参与者。这项研究揭示了Let's Encrypt和Certbot提供的安全性和可用性改进。我们强调了针对管理员的可用性改进对安全性的重要影响，并讨论了Certbot和其他安全相关任务的关键点。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363220](https://doi.org/10.1145/3319535.3363220)
## Seeing isn't Believing: Towards More Robust Adversarial Attack Against Real World Object Detectors.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#seeing-isnt-believing-towards-more-robust-adversarial-attack-against-real-world-object-detectors) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#seeing-isnt-believing-towards-more-robust-adversarial-attack-against-real-world-object-detectors)**
### 作者
* Yue Zhao, Institute of Information Engineering, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
* Hong Zhu, Institute of Information Engineering, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
* Ruigang Liang, Institute of Information Engineering, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
* Qintao Shen, Institute of Information Engineering, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
* Shengzhi Zhang, Metropolitan College, Boston University, Boston, MA, USA
* Kai Chen, Institute of Information Engineering, Chinese Academy of Sciences & University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 最近，对欺骗深度学习模型的对抗样本（AEs）进行了激烈的研究。与数字空间中的AEs相比，物理对抗攻击被认为是对面部识别认证、自动驾驶汽车中的目标检测等应用的更严重威胁。特别是实际上欺骗物体检测器更具挑战性，因为物体与检测器之间的相对位置可能会发生变化。现有攻击物体检测器的研究在不同场景下仍然非常有限，例如不同的距离和角度等。在本文中，我们提出了系统性的解决方案，构建针对真实世界物体检测器的强健且实用的对抗样本。特别是对于隐藏攻击（HA），我们提出了特征干扰增强（FIR）方法和增强的逼真约束生成（ERG）方法来增强健壮性；对于出现攻击（AA），我们提出了嵌套对抗样本（nested-AE），结合两个对抗样本来攻击长距离和短距离的物体检测器。我们还设计了多种风格的对抗样本，使AA更具隐蔽性。评估结果表明，我们的对抗样本可以以高达92.4%的成功率攻击最先进的实时物体检测器（即YOLO V3和faster-RCNN），距离从1米到25米，角度从-60º到60º不等。我们的对抗样本还被证明具有高度的可传递性，能够以很高的成功率攻击另外三个最先进的黑盒模型。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354259](https://doi.org/10.1145/3319535.3354259)
## AdVersarial: Perceptual Ad Blocking meets Adversarial Machine Learning.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#adversarial-perceptual-ad-blocking-meets-adversarial-machine-learning) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#adversarial-perceptual-ad-blocking-meets-adversarial-machine-learning)**
### 作者
* Florian Tramèr, Stanford University, Stanford, CA, USA
* Pascal Dupré, CISPA Helmholtz Center for Information Security, Saarbrucken, Germany
* Gili Rusak, Stanford University, Stanford, CA, USA
* Giancarlo Pellegrino, Stanford University, CISPA Helmholtz Center for Information Security, Saarbrucken, Germany
* Dan Boneh, Stanford University, Stanford, CA, USA
### 摘要
> 感知广告屏蔽是一种基于视觉内容检测在线广告的新型方法。与传统的过滤列表相比，使用感知信号被认为不太容易卷入与网络出版商和广告网络的军备竞赛。然而，我们证明了这并非如此。我们描述了对多种感知广告屏蔽技术的攻击，并揭示了一个新的军备竞赛，可能不利于广告屏蔽软件。出乎意料的是，感知广告屏蔽还可能引入新的漏洞，使攻击者可以绕过网络安全边界并进行DDoS攻击。首先，我们分析了感知广告屏蔽器的设计空间，并提出了一个统一的架构，融合了先前的学术和商业工作。然后，我们探索了对广告屏蔽器检测流程的各种攻击，使出版商或广告网络能够逃避或检测到广告屏蔽，甚至滥用其高特权级别来绕过网络安全边界。一方面，我们展示了感知广告屏蔽必须在视觉上对渲染的网页内容进行分类，以逃避围绕页面标记的混淆的军备竞赛。另一方面，我们在真实网页环境中构建对视觉广告屏蔽器的攻击实例，创建扰动广告、广告标识标志和迷惑感知广告屏蔽器的本地网页内容，成功率达到100%。在我们的一次攻击中，我们演示了如何上传恶意内容，例如在Facebook帖子中上传扰乱的图像，使广告屏蔽器将其他用户的非广告内容删除。除了Web和视觉领域之外，我们还为AdblockRadio构建了攻击实例，AdblockRadio是一个开源的广播客户端，使用机器学习在原始音频流中检测广告。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354222](https://doi.org/10.1145/3319535.3354222)
## Attacking Graph-based Classification via Manipulating the Graph Structure.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#attacking-graph-based-classification-via-manipulating-the-graph-structure) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#attacking-graph-based-classification-via-manipulating-the-graph-structure)**
### 作者
* Binghui Wang, Duke University, Durham, NC, USA
* Neil Zhenqiang Gong, Duke University, Durham, NC, USA
### 摘要
> 基于图的分类方法广泛用于安全分析。粗略地说，基于图的分类方法包括集体分类和图神经网络。攻击基于图的分类方法使攻击者能够在安全分析中逃避检测。然而，现有的对抗机器学习研究主要集中在非图数据的机器学习上。只有少数几项最近的研究涉及对抗基于图的分类方法。然而，他们主要关注图神经网络，对集体分类几乎没有涉及。我们旨在填补这一空白。我们认为攻击者的目标是通过操纵图结构来逃避检测。我们将我们的攻击形式化为一个基于图的优化问题，解决这个问题将产生攻击者需要操纵的边，以实现其攻击目标。然而，精确解决这个优化问题在计算上具有挑战性。为了应对这个挑战，我们提出了几种近似技术来解决这个优化问题。我们使用四个图数据集评估了我们的攻击，并将其与最近针对图神经网络设计的攻击进行了比较。我们的结果表明，我们的攻击可以有效地逃避基于图的分类方法。此外，我们的攻击在逃避集体分类方法和某些图神经网络方法方面优于现有的攻击方法。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354206](https://doi.org/10.1145/3319535.3354206)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354206](https://dl.acm.org/doi/pdf/10.1145/3319535.3354206)
## Latent Backdoor Attacks on Deep Neural Networks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#latent-backdoor-attacks-on-deep-neural-networks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#latent-backdoor-attacks-on-deep-neural-networks)**
### 作者
* Yuanshun Yao, University of Chicago, Chicago, IL, USA
* Huiying Li, University of Chicago, Chicago, IL, USA
* Haitao Zheng, University of Chicago, Chicago, IL, USA
* Ben Y. Zhao, University of Chicago, Chicago, IL, USA
### 摘要
> 最近的研究提出了对深度神经网络(DNNs)进行后门攻击的概念，即将误分类规则隐藏在正常模型中，只有在特定输入触发时才会启动。然而，这些“传统”的后门攻击假设用户从头开始训练自己的模型，这在实践中很少发生。相反，用户通常通过一种称为迁移学习的过程来自定义已经由像谷歌这样的提供者预训练的“教师”模型。这个自定义过程引入了对模型的重大改变，并破坏了隐藏的后门，极大地降低了实际中后门的影响。在本文中，我们描述了潜在后门，这是一种更强大和隐蔽的后门攻击变体，适用于迁移学习。潜在后门是嵌入到“教师”模型中的不完整后门，并通过迁移学习自动继承给多个“学生”模型。如果任何学生模型包括后门所针对的标签，则其自定义过程将完成后门并使其激活。我们展示了潜在后门在各种应用环境中都可以非常有效，并通过针对交通标志识别、志愿者虹膜识别和公众人物(政治家)面部识别的真实攻击来验证其实用性。最后，我们评估了4种可能的防御措施，并发现只有一种能够有效地破坏潜在后门，但可能会在分类准确性上付出一定的代价。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3354209](https://doi.org/10.1145/3319535.3354209)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3354209](https://dl.acm.org/doi/pdf/10.1145/3319535.3354209)
## GALACTICS: Gaussian Sampling for Lattice-Based Constant- Time Implementation of Cryptographic Signatures, Revisited.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#galactics-gaussian-sampling-for-lattice-based-constant-time-implementation-of-cryptographic-signatures-revisited) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#galactics-gaussian-sampling-for-lattice-based-constant-time-implementation-of-cryptographic-signatures-revisited)**
### 作者
* Gilles Barthe, MPI-SP and IMDEA Software Institute, Bochum, Germany
* Sonia Belaïd, CryptoExperts, Paris, France
* Thomas Espitau, Sorbonne Université, PARIS, France
* Pierre-Alain Fouque, Université de Rennes, Rennes, France
* Mélissa Rossi, Thales, ENS Paris, CNRS, PSL University, INRIA, Paris, France
* Mehdi Tibouchi, NTT Corporation, Paris, Japan
### 摘要
> 在这篇论文中，我们提出了BLISS基于格的签名方案的恒定时间实现。BLISS可能是迄今为止提出的最高效的基于格的签名方案，其性能水平与广泛使用的前量子原语（如ECDSA）相当。它是为数不多的几个后量子签名方案之一，已在strongSwan VPN软件套件中实际应用。BLISS签名方案的出色性能很大程度上源于其对离散高斯分布的依赖，这使得它具备更好的参数和安全性减小。然而，这个优势也被证明是它致命弱点，因为离散高斯分布在安全实现方面存在严重挑战。迄今为止的BLISS实现包括了依赖于秘密的分支和内存访问，这既作为离散高斯采样的一部分，也是签名生成中基本拒绝采样步骤的一部分。这些缺陷导致了多个毁灭性的时序攻击，并且是BLISS未被提交给NIST后量子标准化工作的一个重要原因。事实上，几乎所有实际候选方案都选择远离高斯分布，尽管它们具备高效性优势，原因是对实现安全性存在严重担忧。此外，简单的对策通常不足以解决问题：我们展示了先前的工作中建议的一个看起来合理的对策来保护BLISS拒绝采样，但这又可以通过新颖的时序攻击被击败，其中时序信息被输入到相位恢复机器学习算法中，以实现完全密钥恢复。幸运的是，我们还提出了细致的实现技术，使我们能够描述一个具有完全时序攻击保护的BLISS实现，其效率水平与原始的无保护代码相同，而不依赖浮点算术或平台特定的优化，如AVX指令集。这些技术，包括对超越函数多项式逼近的新方法，也可以应用于BLISS签名方案的掩码，有望实现基于格密码学的更高效和安全的实现。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363223](https://doi.org/10.1145/3319535.3363223)
## Seems Legit: Automated Analysis of Subtle Attacks on Protocols that Use Signatures.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#seems-legit-automated-analysis-of-subtle-attacks-on-protocols-that-use-signatures) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#seems-legit-automated-analysis-of-subtle-attacks-on-protocols-that-use-signatures)**
### 作者
* Dennis Jackson, University of Oxford, Oxford, United Kingdom
* Cas Cremers, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Katriel Cohn-Gordon, Independent Scholar, London, United Kingdom
* Ralf Sasse, ETH Zurich, Zurich, Switzerland
### 摘要
> 数字签名的标准安全定义——存在性不可伪造性——并不能确保协议设计人员期望的某些属性。例如，在许多现代签名方案中，一个签名可以对多个不同的公钥进行验证。协议设计人员需要确保这些属性的缺失不会导致攻击。现代自动化协议分析工具能够可靠地排除诸如TLS 1.3和5G之类的复杂现实世界协议上的大量攻击。然而，它们对签名的抽象（隐含地）假设比存在性不可伪造性更多，从而错过了几类实际攻击。我们给出了一系列新的形式模型，用于捕捉签名方案中的这些微妙之处，从而使我们能够分析以前无法通过符号分析获得的（常常是意想不到的）现实世界协议行为。我们在Tamarin Prover中实现了我们的模型，从而自动执行这些分析的第一种方式，并在几个案例研究中验证了它们。在这个过程中，我们发现了DRKey和SOAP的WS-Security上的新攻击，这两个协议在传统符号模型中被证明是安全的。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3339813](https://doi.org/10.1145/3319535.3339813)
## Adversarial Sensor Attack on LiDAR-based Perception in Autonomous Driving.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#adversarial-sensor-attack-on-lidar-based-perception-in-autonomous-driving) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#adversarial-sensor-attack-on-lidar-based-perception-in-autonomous-driving)**
### 作者
* Yulong Cao, University of Michigan, Ann Arbor, MI, USA
* Chaowei Xiao, University of Michigan, Ann Arbor, MI, USA
* Benjamin Cyr, University of Michigan, Ann Arbor, MI, USA
* Yimeng Zhou, University of Michigan, Ann Arbor, MI, USA
* Won Park, University of Michigan, Ann Arbor, MI, USA
* Sara Rampazzi, University of Michigan, Ann Arbor, MI, USA
* Qi Alfred Chen, University of California, Irvine, Irvine, CA, USA
* Kevin Fu, University of Michigan, Ann Arbor, MI, USA
* Z. Morley Mao, University of Michigan, Ann Arbor, MI, USA
### 摘要
> 在自动驾驶车辆（AV）中，知觉是一个基础支柱，利用摄像头和激光雷达等传感器来理解驾驶环境。由于其对道路安全的直接影响，已经进行了多次研究以研究其知觉系统的安全性。与以往专注于基于摄像头的知觉的研究不同，在这项工作中，我们首次对基于激光雷达的AV知觉进行安全研究，这是非常重要但未被探索的领域。我们将激光雷达欺骗攻击作为威胁模型，并将攻击目标设定为欺骗靠近受害者AV前方的障碍物。我们发现，简单应用激光雷达欺骗并不能实现这个目标，因为基于机器学习的目标检测过程的存在。因此，我们进一步探索了有策略地控制被欺骗攻击以愚弄机器学习模型的可能性。我们将这个任务表述为一个优化问题，并设计了输入扰动函数和目标函数的建模方法。我们还确定了直接使用优化求解问题的固有限制，并设计了一种将优化和全局抽样相结合的算法，将攻击成功率提高到大约75％。作为了解攻击对AV驾驶决策水平影响的案例研究，我们构建并评估了两种可能损害道路安全和可行性的攻击场景。我们还讨论了在AV系统、传感器和机器学习模型层面上的防御方向。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3339815](https://doi.org/10.1145/3319535.3339815)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3339815](https://dl.acm.org/doi/pdf/10.1145/3319535.3339815)
## LightBox: Full-stack Protected Stateful Middlebox at Lightning Speed.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#lightbox-full-stack-protected-stateful-middlebox-at-lightning-speed) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#lightbox-full-stack-protected-stateful-middlebox-at-lightning-speed)**
### 作者
* Huayi Duan, City University of Hong Kong and City University of Hong Kong Shenzhen Research Institute, Hong Kong, Hong Kong
* Cong Wang, City University of Hong Kong and City University of Hong Kong Shenzhen Research Institute, Hong Kong, Hong Kong
* Xingliang Yuan, Monash University, Clayton, Australia
* Yajin Zhou, Zhejiang University & Alibaba-Zhejiang University Joint Institute of Frontier, Hangzhou, China
* Qian Wang, Wuhan University, Wuhan, China
* Kui Ren, Zhejiang University & Alibaba-Zhejiang University Joint Institute of Frontier, Hangzhou, China
### 摘要
> 在第三方服务提供商运行离线软件中间盒已经成为一种流行的做法。然而，将可能携带敏感信息的大量原始流量路由到远程站点进行处理引发了严重的安全问题。先前的解决方案通常将与真实部署有关的重要因素进行了抽象。特别是，它们忽视了元数据保护和有状态处理的重要性。未受保护的流量元数据，如低级头部、大小和计数，可以被利用以了解所谓加密应用内容。同时，在实际网络部署的生产级中间盒中，同时跟踪数十万个流的状态通常是必不可少的。我们提出了LightBox，这是第一个能够以接近本机速度进行有状态处理并提供到目前为止最全面保护的离线中间盒系统。LightBox基于通用可信硬件Intel SGX的开发，是我们通过系统研究如何利用领域知识和定制化来克服安全隔离的固有限制的成果。首先，我们引入了一种优雅的虚拟网络接口，可以方便地以线速访问完全受保护的数据包，就像来自可信源网络一样，而不离开安全隔离区域。其次，我们为高度受限的安全隔离区域量身定制了一组数据结构和算法，提供了完整的流状态管理，以实现高效的有状态处理。广泛的评估表明，LightBox在保证所有安全性好处的同时，可以实现10Gbps的数据包输入/输出，并通过三个有状态中间盒的案例研究证明，它可以以接近本机速度运行。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3339814](https://doi.org/10.1145/3319535.3339814)
## DeepIntent: Deep Icon-Behavior Learning for Detecting Intention-Behavior Discrepancy in Mobile Apps.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#deepintent-deep-icon-behavior-learning-for-detecting-intention-behavior-discrepancy-in-mobile-apps) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#deepintent-deep-icon-behavior-learning-for-detecting-intention-behavior-discrepancy-in-mobile-apps)**
### 作者
* Shengqu Xi, Nanjing University, Nanjing, China
* Shao Yang, Case Western Reserve University, Cleveland, OH, USA
* Xusheng Xiao, Case Western Reserve University, Cleveland, OH, USA
* Yuan Yao, Nanjing University, Nanjing, China
* Yayuan Xiong, Nanjing University, Nanjing, China
* Fengyuan Xu, Nanjing University, Nanjing, China
* Haoyu Wang, Beijing University of Posts and Telecommunications, Beijing, China
* Peng Gao, University of California, Berkeley, Berkeley, CA, USA
* Zhuotao Liu, University of Illinois at Urbana-Champaign, Urbana-Champaign, IL, USA
* Feng Xu, Nanjing University, Nanjing, China
* Jian Lu, Nanjing University, Nanjing, China
### 摘要
> 在我们日常生活中，移动应用成为了不可或缺的一部分。然而，存在许多潜在有害的应用程序，可能会利用用户的隐私数据，例如收集用户信息或在后台发送消息。将这些不受欢迎的应用从市场中排除是一个持续的挑战。尽管现有的工作提供了确定应用程序行为的技术，例如泄露信息，但很少有研究来回答：应用程序的行为是否符合其用户界面反映的意图？在这项工作中，我们探索了深度学习和程序分析的协同合作，作为解决这一挑战的第一步。具体而言，我们专注于响应用户交互的用户界面小部件，检查它们的用户界面反映的意图是否与其权限使用相一致。我们提出了DeepIntent，这是一个使用全新的深度图标行为学习的框架，从大量流行应用中学习图标行为模型并检测意图行为的差异。具体而言，DeepIntent提供了程序分析技术，将意图（即图标和上下文文本）与用户界面小部件的程序行为关联起来，并根据程序行为推断用户界面小部件的标签（即权限使用），从而实现了大规模高质量训练数据集的构建。基于静态分析的结果，DeepIntent使用深度学习技术联合建模图标和它们的上下文文本，学习图标行为模型，并通过计算基于学习模型的异常值得分来检测意图行为的差异。我们在一个大规模数据集上评估了DeepIntent（9,891个良性应用和16,262个恶意应用）。在使用80%的良性应用进行训练，剩余部分进行评估的情况下，DeepIntent在良性应用和恶意应用上分别达到了AUC评分0.8656和0.8839的差异检测，相对于现有方法取得了39.9%和26.1%的相对改进。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363193](https://doi.org/10.1145/3319535.3363193)
## Let's Encrypt: An Automated Certificate Authority to Encrypt the Entire Web.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#lets-encrypt-an-automated-certificate-authority-to-encrypt-the-entire-web) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#lets-encrypt-an-automated-certificate-authority-to-encrypt-the-entire-web)**
### 作者
* Josh Aas, Let's Encrypt, San Francisco, CA, USA
* Richard Barnes, Cisco, San Jose, CA, USA
* Benton Case, Stanford University, Palo Alto, CA, USA
* Zakir Durumeric, Stanford University, Palo Alto, CA, USA
* Peter Eckersley, Electronic Frontier Foundation, San Francisco, CA, USA
* Alan Flores-López, Stanford University, Palo Alto, CA, USA
* J. Alex Halderman, University of Michigan, Ann Arbor, MI, USA
* Jacob Hoffman-Andrews, Electronic Frontier Foundation, San Francisco, CA, USA
* James Kasten, University of Michigan, Ann Arbor, MI, USA
* Eric Rescorla, Mozilla, San Francisco, CA, USA
* Seth Schoen, Electronic Frontier Foundation, San Francisco, CA, USA
* Brad Warren, Electronic Frontier Foundation, San Francisco, CA, USA
### 摘要
> Let's Encrypt是一个免费、开放和自动化的HTTPS证书颁发机构（CA），旨在推动整个网络对HTTPS的采用。自2015年末推出以来，Let's Encrypt已成长为全球最大的HTTPS CA，其有效证书数量超过所有其他受信任浏览器CA的总和。截至2019年1月，它已为2.23亿个域名发行了超过5.38亿张证书。我们描述了如何构建Let's Encrypt，包括CA软件系统（Boulder）的架构和其运营组织（ISRG）的结构，并从经验中总结了教训。我们还描述了ACME的设计，这是我们创建的IETF标准协议，用于自动化CA-服务器交互和证书颁发，并对ACME客户端的多样化生态系统进行了调研，其中包括Certbot，这是我们创建的用于自动化HTTPS部署的软件代理。最后，我们测量了Let's Encrypt对Web和CA生态系统的影响。我们希望Let's Encrypt的成功可以为Web PKI的进一步提升和未来的互联网安全基础设施提供一个模型。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363192](https://doi.org/10.1145/3319535.3363192)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363192](https://dl.acm.org/doi/pdf/10.1145/3319535.3363192)
## You Are Who You Appear to Be: A Longitudinal Study of Domain Impersonation in TLS Certificates.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#you-are-who-you-appear-to-be-a-longitudinal-study-of-domain-impersonation-in-tls-certificates) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#you-are-who-you-appear-to-be-a-longitudinal-study-of-domain-impersonation-in-tls-certificates)**
### 作者
* Richard Roberts, University of Maryland, College Park, MD, USA
* Yaelle Goldschlag, University of Maryland, College Park, MD, USA
* Rachel Walter, University of Maryland, College Park, MD, USA
* Taejoong Chung, Rochester Institute of Technology, Rochester, NY, USA
* Alan Mislove, Northeastern University, Boston, MA, USA
* Dave Levin, University of Maryland, College Park, MD, USA
### 摘要
> 公钥基础设施（PKI）提供了认证的基本属性：用户可以在在线交流中知道他们正在与谁进行通信。PKI通过验证一系列证书来确保端到端的真实性，但真正的端到端认证的最后一步是用户验证网站是否符合他们的期望。为此，用户需要评估域名，但各种“域名冒充”攻击威胁到了他们这样做的能力。事实上，如果用户很容易被骗认为amazon.com-offers.com实际上是amazon.com，再配合安全指示（如锁图标），用户可能会认为他们与亚马逊建立了安全连接。我们研究了端到端认证的这一威胁：（1）我们引入了一种新的冒充攻击（我们称之为目标嵌入）的分类方法，它使用一个或多个子域来嵌入整个目标域名，且保持不变。（2）我们进行了一项用户研究，旨在了解用户是否会受到目标嵌入的影响，以及它与其他常见冒充攻击（如错字冒充、组合冒充和同形字冒充）的有效性相比如何。我们发现目标嵌入对现代浏览器的影响最大。（3）我们使用Censys收集的所有HTTPS证书对目标嵌入冒充进行了纵向分析，研究了冒充证书的发放者、托管域名的位置、经济瓶颈等问题。最后，我们讨论了对抗这种不断增长的威胁的对策。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363188](https://doi.org/10.1145/3319535.3363188)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363188](https://dl.acm.org/doi/pdf/10.1145/3319535.3363188)
## Poster: Fuzzing IoT Firmware via Multi-stage Message Generation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-fuzzing-iot-firmware-via-multi-stage-message-generation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-fuzzing-iot-firmware-via-multi-stage-message-generation)**
### 作者
* Bo Yu, National University of Defense Technology, Changsha, China
* Pengfei Wang, National University of Defense Technology, Changsha, China
* Tai Yue, National University of Defense Technology, Changsha, China
* Yong Tang, National University of Defense Technology, Changsha, China
### 摘要
> 在这项工作中，我们介绍了IoTHunter，这是第一个用于在物联网固件中模糊状态协议的灰盒模糊测试工具。IoTHunter基于对物联网固件进行运行时监控的多阶段消息生成机制，解决了状态调度问题。我们通过一组真实世界的程序对IoTHunter进行了评估，结果显示IoTHunter在功能覆盖率、块覆盖率和边缘覆盖率方面均优于黑盒模糊测试工具boofuzz，分别增加了2.2倍、2.0倍和2.5倍。IoTHunter还在家庭路由器Mikrotik的固件中发现了五个新的漏洞，并已向供应商报告。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363247](https://doi.org/10.1145/3319535.3363247)
## Snout: An Extensible IoT Pen-Testing Tool.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#snout-an-extensible-iot-pen-testing-tool) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#snout-an-extensible-iot-pen-testing-tool)**
### 作者
* John Mikulskis, Boston University, Boston, MA, USA
* Johannes K. Becker, Boston University, Boston, MA, USA
* Stefan Gvozdenovic, Boston University, Boston, MA, USA
* David Starobinski, Boston University, Boston, MA, USA
### 摘要
> 面向基于IP的网络设计的网络映射工具通常无法访问物联网设备使用的非IP无线协议，如Zigbee和蓝牙LE。我们提出了Snout，一种多功能可扩展的基于软件定义无线电的物联网网络映射和渗透测试工具。Snout针对传统网络枚举工具（如Nmap）无法访问的各种物联网协议进行了优化。该工具允许进行设备枚举、漏洞评估，以及用于Zigbee协议的数据包重放和欺骗等更具攻击性的技术演示。Snout基于开源技术栈构建，并设计为可扩展支持其他物联网协议和功能。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363248](https://doi.org/10.1145/3319535.3363248)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363248](https://dl.acm.org/doi/pdf/10.1145/3319535.3363248)
## Poster: Framework for Semi-Private Function Evaluation with Application to Secure Insurance Rate Calculation.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-framework-for-semi-private-function-evaluation-with-application-to-secure-insurance-rate-calculation) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-framework-for-semi-private-function-evaluation-with-application-to-secure-insurance-rate-calculation)**
### 作者
* Daniel Günther, TU Darmstadt, Darmstadt, Germany
* Ágnes Kiss, TU Darmstadt, Darmstadt, Germany
* Lukas Scheidel, TU Darmstadt, Darmstadt, Germany
* Thomas Schneider, TU Darmstadt, Darmstadt, Germany
### 摘要
> 私有功能评估（PFE）允许两个参与方共同计算由一方提供的私有函数，该函数基于另一方的秘密输入。然而，在许多应用中，不需要隐藏整个函数，这被称为半私有功能评估（SPFE）。在这项工作中，我们开发了一个SPFE的框架，可以将函数分为公共部分和私有部分。我们通过开发用于计算用户特定费率的汽车保险应用程序来展示使用SPFE在现实世界场景中的可行性。我们在这个具体示例中评估了我们的SPFE框架的性能，结果是一个由377032个AND门组成的电路，相比PFE提高了9倍的效率。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363251](https://doi.org/10.1145/3319535.3363251)
## Poster: Deployment-quality and Accessible Solutions for Cryptography Code Development.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-deployment-quality-and-accessible-solutions-for-cryptography-code-development) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-deployment-quality-and-accessible-solutions-for-cryptography-code-development)**
### 作者
* Sazzadur Rahaman, Virginia Tech, Blacksburg, VA, USA
* Ya Xiao, Virginia Tech, Blacksburg, VA, USA
* Sharmin Afrose, Virginia Tech, Blacksburg, VA, USA
* Ke Tian, Virginia Tech, Blacksburg, VA, USA
* Miles Frantz, Virginia Tech, Blacksburg, VA, USA
* Na Meng, Virginia Tech, Blacksburg, VA, USA
* Barton P. Miller, University of Wisconsin-Madison, Madison, WI, USA
* Fahad Shaon, University of Texas at Dallas, Dallas, TX, USA
* Murat Kantarcioglu, University of Texas at Dallas, Dallas, TX, USA
* Danfeng (Daphne) Yao, Virginia Tech, Blacksburg, VA, USA
### 摘要
> 密码学API的误用严重威胁着软件安全。多年来，自动筛查密码学误用漏洞一直是研究的热点和重要方向。然而，迄今为止仍未实现开发者可以常规使用以筛查数百万行代码的可扩展检测工具的愿景。我们的主要技术目标是通过专门的程序分析实现高精度和高吞吐量的方法。具体而言，我们设计了基于新的按需流程、上下文和字段敏感数据流分析的跨过程程序切片。我们当前的原型CryptoGuard能够在复杂的Apache Software Foundation项目（包括Spark、Ranger和Ofbiz等）的评估中，以98.61%的精度检测到各种Java密码学API的误用。我们对6,181个Android应用程序进行的评估也产生了许多安全洞察。我们创建了一个全面的基准测试集，命名为CryptoAPI-Bench，其中包含40个基本案例和131个高级案例，以与领先的解决方案（例如SpotBugs、CrySL、Coverity等）进行深入比较。为了使CryptoGuard广泛可用，我们正在将其与软件保障市场（SWAMP）集成。SWAMP是一个受欢迎的无费服务，用于持续软件保障和静态代码分析。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363252](https://doi.org/10.1145/3319535.3363252)
- **PDF:** [https://dl.acm.org/doi/pdf/10.1145/3319535.3363252](https://dl.acm.org/doi/pdf/10.1145/3319535.3363252)
## Medical Protocol Security: DICOM Vulnerability Mining Based on Fuzzing Technology.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#medical-protocol-security-dicom-vulnerability-mining-based-on-fuzzing-technology) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#medical-protocol-security-dicom-vulnerability-mining-based-on-fuzzing-technology)**
### 作者
* Zhiqiang Wang, Beijing Eletronic Science and Technology Institute, State Key Laboratory of Cryptology, & State Information Center, Beijing, China
* Quanqi Li, Beijing Eletronic Science and Technology Institute, Beijing, China
* Yazhe Wang, Beijing Eletronic Science and Technology Institute, Beijing, China
* Biao Liu, Beijing Eletronic Science and Technology Institute, Beijing, China
* Jianyi Zhang, Beijing Eletronic Science and Technology Institute, Beijing, China
* Qixu Liu, Key laboratory of network assessment technology of Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
### 摘要
> DICOM是医学图像和相关信息的国际标准，是一种可用于数据交换的医学图像格式。该协议在放射学和心血管成像等医学领域广泛应用。然而，由于DICOM库在协议实现中考虑安全性较少，存在大量安全风险。针对DICOM库的安全问题，本文对DICOM开源库的漏洞挖掘技术进行了研究，提出了基于Fuzzing技术的漏洞挖掘框架，并实现了名为DICOM-Fuzzer的原型系统，其中包括初始化、测试用例生成、自动测试、异常监测等模块。最后，选择开源库DCMTK进行测试，发现当接收文件的内容超过7080行时会发生数据溢出，导致PACS系统拒绝服务的漏洞。综上所述，DICOM协议确实存在风险，其信息安全还需要进一步提高。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363253](https://doi.org/10.1145/3319535.3363253)
## Poster: A Reliable and Accountable Privacy-Preserving Federated Learning Framework using the Blockchain.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-a-reliable-and-accountable-privacy-preserving-federated-learning-framework-using-the-blockchain) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-a-reliable-and-accountable-privacy-preserving-federated-learning-framework-using-the-blockchain)**
### 作者
* Sana Awan, University of Kansas, Lawrence, KS, USA
* Fengjun Li, University of Kansas, Lawrence, KS, USA
* Bo Luo, University of Kansas, Lawrence, KS, USA
* Mei Liu, University of Kansas Medical Center, Kansas City, KS, USA
### 摘要
> 联邦学习（FL）在支持涉及大规模数据集、分布广泛的数据所有者和不可靠网络连接的协作学习应用方面具有潜力。为了保护数据隐私，现有的FL方法采用（k，n）阈值秘密共享方案，基于对客户的半诚实假设，以实现本地模型更新交换中的安全多方计算，以应对随机客户中断，但代价是增加数据大小。这些方法采用了对客户的半诚实假设，因此容易受到恶意客户的攻击。在本研究中，我们提出了一种基于区块链的隐私保护联邦学习（BC-based PPFL）框架，利用区块链的不可篡改性和分散信任属性，提供模型更新的溯源。我们基于该框架实现了一个概念验证，展示了在联邦学习环境中安全聚合本地模型更新的可行性。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363256](https://doi.org/10.1145/3319535.3363256)
## simFIDO: FIDO2 User Authentication with simTPM.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#simfido-fido2-user-authentication-with-simtpm) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#simfido-fido2-user-authentication-with-simtpm)**
### 作者
* Dhiman Chakraborty, CISPA Helmholtz Center for Information Security & Saarland University, Saarbruecken, Germany
* Sven Bugiel, CISPA Helmholtz Center for Information Security, Saarbruecken, Germany
### 摘要
> WebAuthn作为FIDO2的一部分，是一种用于网络服务的双因素甚至无密码用户认证的新标准。主流浏览器，如Google Chrome、Microsoft Edge和Mozilla Firefox，都支持WebAuthn API。不幸的是，支持FIDO2认证的硬件认证器仍然主要集中在台式电脑上，而对于移动设备，用户只能选择有限的适用认证器（具有无线连接的少数漫游认证器，甚至在移动设备上内置的平台认证器更少）。这对用户造成了困扰，特别是对于缺乏平台认证器和正确连接性的旧设备代。在这篇海报中，我们介绍了simFIDO的概念，即使用最近开发的simTPM作为（平台）认证器的FIDO2设置，用于移动设备，甚至作为移动设备提供给连接的计算机的漫游认证器。simTPM的密钥存储的可移动性属性使得用户在设备之间的凭证可移植性更加容易。特别是，通过手机将simTPM与非移动设备无缝集成，将有助于创建一种使用FIDO2的通用认证设置。尽管我们展示了基于SIM卡的FIDO2认证器的具体设计和实现，但我们希望这个海报能够为关于如何以及以何种形式向用户提供硬件认证器的讨论做出贡献。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363258](https://doi.org/10.1145/3319535.3363258)
## Poster: On the Application of NLP to Discover Relationships between Malicious Network Entities.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-on-the-application-of-nlp-to-discover-relationships-between-malicious-network-entities) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-on-the-application-of-nlp-to-discover-relationships-between-malicious-network-entities)**
### 作者
* Giuseppe Siracusano, NEC Laboratories Europe, Heidelberg, Germany
* Martino Trevisan, Politecnico di Torino, Torino, Italy
* Roberto Gonzalez, NEC Laboratories Europe, Heidelberg, Germany
* Roberto Bifulco, NEC Laboratories Europe, Heidelberg, Germany
### 摘要
> 网络流量量的增加使得安全分析工具的可扩展性面临挑战。本文介绍了NetLearn，一种从大量网络流量数据中识别潜在恶意网络实体的解决方案。NetLearn应用最近开发的自然语言处理算法，发现观测到的网络实体之间的安全相关关系，例如域名和IP地址，而无需外部信息来源进行分析。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363276](https://doi.org/10.1145/3319535.3363276)
## Poster: GRANDPA Finality Gadget.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-grandpa-finality-gadget) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-grandpa-finality-gadget)**
### 作者
* Alistair Stewart, Web3 Foundation, Zug, Switzerland
### 摘要
> 我们提出了GRANDPA，它是一种最终性设备，可用于为区块链提供可证明的最终性。它与块生产机制和链选择规则一起工作，但单独使用这两个机制只能提供最终一致性。GRANDPA的设计旨在尽可能清晰地分离这两个协议，并为最终性设备获得形式上的保证。GRANDPA试图对$2/3$的选民共识的前缀链进行最终确认，无论是一个还是数千个区块。Parity Technologies已经实现了GRANDPA，并在Polkadot协议的大型测试网络上部署了它。我们还介绍了GRANDPA实现的属性，并回顾了GRANDPA在灵活性方面相对于类似协议的优势。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363278](https://doi.org/10.1145/3319535.3363278)
## Poster: Towards Characterizing and Limiting Information Exposure in DNN Layers.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-towards-characterizing-and-limiting-information-exposure-in-dnn-layers) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-towards-characterizing-and-limiting-information-exposure-in-dnn-layers)**
### 作者
* Fan Mo, Imperial College London, London, United Kingdom
* Ali Shahin Shamsabadi, Queen Mary University of London, London, United Kingdom
* Kleomenis Katevas, Imperial College London, London, United Kingdom
* Andrea Cavallaro, Queen Mary University of London, London, United Kingdom
* Hamed Haddadi, Imperial College London, London, United Kingdom
### 摘要
> 预训练的深度神经网络（DNN）模型越来越多地用于智能手机和其他用户设备中，以实现预测服务，从而导致这些模型内部捕获的训练数据（敏感信息）有可能被披露。基于泛化误差的概念，我们提出了一个框架来衡量DNN每一层中记忆的敏感信息量。我们的结果显示，就单独考虑而言，最后的层从训练数据中编码了比前面的层更多的信息量。我们发现，使用不同数据集训练的同一DNN架构每层的曝光情况相似。我们评估了一种架构，将最敏感的层保护在设备内的可信执行环境（TEE）中，以防止潜在的白盒成员推断攻击，而不会带来显著的计算开销。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363279](https://doi.org/10.1145/3319535.3363279)
## Poster: TCLP: Enforcing Least Privileges to Prevent Containers from Kernel Vulnerabilities.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-tclp-enforcing-least-privileges-to-prevent-containers-from-kernel-vulnerabilities) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-tclp-enforcing-least-privileges-to-prevent-containers-from-kernel-vulnerabilities)**
### 作者
* Suyeol Lee, Korea Advanced Institute of Science and Technology, Daejeon, South Korea
* Junsik Seo, Korea Advanced Institute of Science and Technology, Daejeon, South Korea
* Jaehyun Nam, Korea Advanced Institute of Science and Technology, Daejeon, South Korea
* Seungwon Shin, Korea Advanced Institute of Science and Technology, Daejeon, South Korea
### 摘要
> 尽管容器化已成为一种轻量级的方法，以资源高效的方式打包、部署和运行传统应用程序，但容器使用的共享内核资源模型引入了关键的安全问题。特别是被篡改的容器滥用系统调用可能触发主机内核的安全漏洞。尽管现有的解决方案提供了强大的保护机制来防止这类问题，但如何定义容器的能力仍然由操作员决定。在本研究中，我们引入了TCLP，这是一个动态分析系统，可以帮助操作员配置容器的最小能力，不仅保护自身，也保护主机。TCLP在运行时监控容器触发的系统调用，并根据收集到的系统调用来确定运行容器所需的最小能力。最后，操作员根据TCLP发现的最小能力来配置他们的容器，降低内核漏洞的风险。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363282](https://doi.org/10.1145/3319535.3363282)
## Poster: When Adversary Becomes the Guardian - Towards Side-channel Security With Adversarial Attacks.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-when-adversary-becomes-the-guardian-towards-side-channel-security-with-adversarial-attacks) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-when-adversary-becomes-the-guardian-towards-side-channel-security-with-adversarial-attacks)**
### 作者
* Stjepan Picek, Delft University of Technology, Delft, Netherlands
* Dirmanto Jap, Nanyang Technological University, Singapore, Singapore
* Shivam Bhasin, Nanyang Technological University, Singapore, Singapore
### 摘要
> 机器学习算法容易受到对抗性示例的攻击。由于分析侧信道攻击快速采用基于机器学习的方法，甚至能够打败常用的侧信道防御措施，我们研究了对抗性示例作为一种防御机制的潜力。我们展示了对抗性示例有潜力作为一种抗击基于机器学习的侧信道攻击的防御措施。此外，我们利用可传递性属性表明一个通用的对抗性示例可以充当一系列基于机器学习的侧信道分类器的防御措施。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363284](https://doi.org/10.1145/3319535.3363284)
## Poster: Detecting WebAssembly-based Cryptocurrency Mining.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-detecting-webassembly-based-cryptocurrency-mining) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-detecting-webassembly-based-cryptocurrency-mining)**
### 作者
* Weikang Bian, Chinese University of Hong Kong, Sha Tin, Hong Kong
* Wei Meng, Chinese University of Hong Kong, Sha Tin, Hong Kong
* Yi Wang, Southern University of Science and Technology, Shenzhen, China
### 摘要
> 在浏览器中的加密货币挖矿成为网络用户面临的新兴威胁。攻击者可以滥用用户的计算资源进行挖矿，而不需要得到他们的同意。此外，新的Web功能——WebAssembly(Wasm)能够有效地在浏览器中进行加密货币挖矿，并且已经在挖矿应用程序中广泛使用。在这项研究中，我们使用动态Wasm指令执行追踪来模拟不同Wasm应用程序的行为。我们观察到，加密货币挖矿的Wasm程序与其他Wasm程序（例如游戏）呈现出非常不同的执行追踪。基于我们的发现，我们提出了一种新颖的基于浏览器的方法来检测浏览器中基于Wasm的加密货币挖矿。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363287](https://doi.org/10.1145/3319535.3363287)
## Poster: Evaluating Code Coverage for System Call Fuzzers.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-evaluating-code-coverage-for-system-call-fuzzers) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#poster-evaluating-code-coverage-for-system-call-fuzzers)**
### 作者
* Seoyoung Kim, Yonsei University, Seoul, Republic of Korea
* Seyeon Jeong, Yonsei University, Seoul, Republic of Korea
* Mingi Cho, Yonsei University, Seoul, Republic of Korea
* Soochang Chung, Yonsei University, Seoul, Republic of Korea
* Taekyoung Kwon, Yonsei University, Seoul, Republic of Korea
### 摘要
> 操作系统内核具有完整的系统特权，也是攻击者吸引的目标。为了减少这种威胁，我们需要在攻击者之前找出内核中的安全漏洞，而系统调用模糊测试是一种广泛使用的技术。然而，许多系统调用模糊测试工具的覆盖率性能尚未经过评估，而这是模糊测试中的重要指标。在本海报中，我们提出了一种方法来评估使用虚拟化和英特尔处理器跟踪（PT）策略的系统调用模糊测试工具的代码覆盖性能。首先，我们提取所有可以通过系统调用执行的内核函数。然后，我们在宿主操作系统上使用目标系统调用模糊测试工具进行模糊测试，并通过利用英特尔PT记录覆盖信息。最后，我们通过将与系统调用相关的函数列表与在模糊测试中由英特尔PT记录的执行函数进行比较来评估系统调用模糊测试工具。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3363288](https://doi.org/10.1145/3319535.3363288)
## CCSW'19 Workshop Summary: 2019 Cloud Computing Security Workshop.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#ccsw19-workshop-summary-2019-cloud-computing-security-workshop) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#ccsw19-workshop-summary-2019-cloud-computing-security-workshop)**
### 作者
* Radu Sion, Stony Brook University, Stony Brook, NY, USA
* Charalampos Papamanthou, University of Maryland, College Park, MD, USA
### 摘要
> 云计算和大规模计算基础设施开始主导计算，并且在可预见的未来可能继续如此。主要的云计算运营商现在拥有数百万核心，托管着大量的企业和政府IT基础设施。CCSW是世界上首屈一指的论坛，聚集了云中心和外包计算安全各个方面的研究人员和实践者。CCSW特别鼓励那些不在上述列表中的新颖范式和有争议的想法。这个研讨会一直以来都是一个富有创造性的辩论和云计算影响下计算安全敏感领域互动的良好平台。今年是CCSW的十周年纪念。在过去的十年中，CCSW对我们的研究社区产生了重要影响。截至2019年8月，在包括CCSW的ACM CCS的Google学术指标中，前20篇被引用最多的论文中有20%来自CCSW。一个角度来看，作者在CCSW发表一篇前20篇论文的可能性与在CCS发表相当甚至更高！今年，CCSW收到了40份投稿，其中有15篇全文论文（37%）和2篇快速摘要被接受。CCSW网站：https://ccsw.io

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3353548](https://doi.org/10.1145/3319535.3353548)
## MTD 2019: The 6th ACM Workshop on Moving Target Defense.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#mtd-2019-the-6th-acm-workshop-on-moving-target-defense) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#mtd-2019-the-6th-acm-workshop-on-moving-target-defense)**
### 作者
* Zhuo Lu, University of South Florida, Tampa, FL, USA
### 摘要
> 当前计算系统的静态性使其易受攻击且难以防御。移动目标防御（MTD）的概念是通过使系统动态化，从而增加攻击者的不对称劣势，从而使其更难探索和预测。该研讨会旨在解决MTD研究中的挑战和方法，以提高安全性。我们组织了一个激动人心的活动，包括八篇论文和一个特邀主题演讲。摘要中的一些文本摘自以前MTD版本的摘要。相关研讨会论文可以在ACM DL上获得，链接为：https://dl.acm.org/citation.cfm?id=3338468

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3353550](https://doi.org/10.1145/3319535.3353550)
## AISec'19: 12th ACM Workshop on Artificial Intelligence and Security.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#aisec19-12th-acm-workshop-on-artificial-intelligence-and-security) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#aisec19-12th-acm-workshop-on-artificial-intelligence-and-security)**
### 作者
* Sadia Afroz, UC Berkeley, Berkeley, CA, USA
* Battista Biggio, University of Cagliari, Cagliari, Italy
* Nicholas Carlini, Google Brain, San Francisco, Bay Area, CA, USA
* Yuval Elovici, Ben-Gurion University of the Negev, Beersheba, Israel
* Asaf Shabtai, Ben-Gurion University of the Negev, Beersheba, Israel
### 摘要
> 近年来，人工智能（AI）和机器学习（ML）在安全与隐私问题的应用中出现了显著增长。这些技术所提供的分析工具和智能行为使得AI和ML在富于数据或需要对不断变化的情况迅速做出反应的领域中，越来越重要用于自主实时分析和决策。在安全敏感领域中使用学习方法，对手可能会试图误导或逃避智能机器，为安全研究开辟了新的前沿。最近广泛采用的深度学习技术，其安全属性很难直接推理，使得这项研究的重要性更加凸显。此外，数据挖掘和机器学习技术引发了丰富的隐私问题，这归因于数据的丰富和易获取性。第12届ACM人工智能与安全研讨会（AISec）是一个历史悠久、领先的场所，用于展示和讨论安全与隐私与AI和ML相交的新发展。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3353556](https://doi.org/10.1145/3319535.3353556)
## PLAS 2019: ACM SIGSAC Workshop on Programming Languages and Analysis for Security.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#plas-2019-acm-sigsac-workshop-on-programming-languages-and-analysis-for-security) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#plas-2019-acm-sigsac-workshop-on-programming-languages-and-analysis-for-security)**
### 作者
* Piotr Mardziel, Carnegie Mellon University, Pittsburgh, PA, USA
* Niki Vazou, IMDEA Software Institute, Madrid, Spain
### 摘要
> 第14届ACM SIGSAC安全编程语言和分析研讨会（PLAS 2019）与第25届ACM计算机与通信安全会议（ACM CCS 2019）同期举行。PLAS为研究人员和实践者提供一个独特的交流平台，以改进软件系统的安全性为目标，交流编程语言和程序分析技术的思想。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3353561](https://doi.org/10.1145/3319535.3353561)
## PPML '19: Privacy Preserving Machine Learning.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#ppml-19-privacy-preserving-machine-learning) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#ppml-19-privacy-preserving-machine-learning)**
### 作者
* Borja Balle, DeepMind, London, United Kingdom
* Adrià Gascón, Google, London, United Kingdom
* Olya Ohrimenko, Microsoft Research, Cambridge, United Kingdom
* Mariana Raykova, Google, New York, NY, USA
* Phillipp Schoppmmann, Humboldt-Universität zu Berlin, Berlin, Germany
* Carmela Troncoso, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
### 摘要
> 随着实践中隐私保护机器学习领域的不断重要性增长，学术界和产业界对该主题的兴趣也日益增加。近年来，我们通过众多发表和开发的论文和系统来见证这一点，以应对该领域的挑战。在这一空间中提出的解决方案利用了来自机器学习、密码学和安全领域的许多不同方法和技术。因此，本研讨会旨在成为一个统一不同观点并就每种方法的相对优点展开讨论的论坛。它还将成为一个让来自不同社区对这个问题感兴趣的人们进行交流的场所，并有望促进富有成果的长期合作关系的发展。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3353562](https://doi.org/10.1145/3319535.3353562)
## 3rd International Workshop on Software Protection (SPRO 2019).
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#3rd-international-workshop-on-software-protection-spro-2019) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#3rd-international-workshop-on-software-protection-spro-2019)**
### 作者
* Paolo Falcarin, University of East London, London, United Kingdom
* Michael MiZu Zunke, Thales Group, Munich, Germany
### 摘要
> 软件保护技术旨在保护面临与应用程序执行主机和访问权限共享的对手的软件应用的机密性和完整性。这种情况通常被称为防止“MATE（Man-At-The-End）”攻击。这是一个对工业界越来越重要的领域：在许多情况下，采用这些技术是确保业务连续性至关重要的。继第二届SPRO研讨会与CCS-2016在奥地利维也纳同期举行后，第三届旨在建立一种传统，使软件保护领域的学术界和工业界专家能够共同应对设计更强大的保护措施和更好地与工业软件开发生命周期要求进行集成的挑战。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3353563](https://doi.org/10.1145/3319535.3353563)
## WAHC'19: 7th Workshop on Encrypted Computing & Applied Homomorphic Cryptograph.
🌍 [English](../../../docs/en/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#wahc19-7th-workshop-on-encrypted-computing-applied-homomorphic-cryptograph) | **[简体中文](../../../docs/zh-CN/ACM%20Conference%20on%20Computer%20and%20Communications%20Security/ACM%20Conference%20on%20Computer%20and%20Communications%20Security%202019.md#wahc19-7th-workshop-on-encrypted-computing-applied-homomorphic-cryptograph)**
### 作者
* Michael Brenner, Leibniz Universität Hannover, Hannover, NY, Germany
* Tancrède Lepoint, Google, New York, NY, USA
* Kurt Rohloff, New Jersey Institute of Technology and Duality Technologies, Newark, NJ, USA
### 摘要
> 第七届加密计算与应用同态密码学研讨会（WAHC）将于2019年11月11日在英国伦敦与ACM计算机与通信安全会议（CCS）同时举办。WAHC 2019研讨会的目的是汇集来自学术界、工业界和政府的专业人士、研究人员和从业者，展示、讨论和共享加密计算领域的最新进展。加密计算是计算机安全和应用密码学领域的一个特定子领域，对同态加密、多方计算、功能加密、安全功能评估、私密信息检索和可搜索加密等实际应用感兴趣。研讨会将包括一次邀请演讲，讨论先进密码学在实践中的应用，一个同态加密评估平台的演示，以及6个关于不同加密计算主题的精彩演讲：同态加密标准化、多方计算和应用。

### 链接
- **URL:** [https://doi.org/10.1145/3319535.3353554](https://doi.org/10.1145/3319535.3353554)
