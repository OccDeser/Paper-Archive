# Asiacrypt[2023-6]
## Amortized Bootstrapping Revisited: Simpler, Asymptotically-Faster, Implemented.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#amortized-bootstrapping-revisited-simpler-asymptotically-faster-implemented) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#amortized-bootstrapping-revisited-simpler-asymptotically-faster-implemented)**
### 作者
* Antonio Guimarães, Institute of Computing, University of Campinas, Campinas, Brazil
* Hilder V. L. Pereira, Institute of Computing, University of Campinas, Campinas, Brazil
* Barry van Leeuwen, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> Micciancio和Sorrel（ICALP 2018）提出了一个自举算法，可以通过每个消息的亚线性数量的同态操作一次刷新多个消息。然而，尽管渐进代价具有吸引力，但尚不清楚他们的算法是否可能实用，这降低了他们结果的影响力。在这项工作中，我们遵循他们的通用框架，但提出了一种分摊自举程序，其概念更简单且渐进成本更低。我们将每个刷新消息的同态乘法数量从\(O(3^\rho \cdot n^{1/\rho } \cdot \log n)\)降至\(O(\rho \cdot n^{1/\rho })\)，将噪声开销从\(\widetilde{O}(n^{2 + 3 \cdot \rho })\)降至\(\widetilde{O}(n^{1 + \rho })\)，其中n是安全级别，\(\rho \ge 1\)是一个自由参数。我们还使它更一般化，通过处理非二进制消息并应用可编程自举来处理。为了获得我们自举算法的具体实现，我们描述了GSW方案的双CRT（又名RNS）版本，包括一种称为shrinking的新操作，用于通过减小密文的维数和密文模数来加快同态操作。我们还提供了我们的算法的C ++实现，从而首次展示了分摊自举的实用性。此外，它与现有的自举算法竞争力强，甚至比我们自举的等效非分摊版本快约3.4倍。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_1](https://doi.org/10.1007/978-981-99-8736-8_1)
## Rotation Key Reduction for Client-Server Systems of Deep Neural Network on Fully Homomorphic Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#rotation-key-reduction-for-client-server-systems-of-deep-neural-network-on-fully-homomorphic-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#rotation-key-reduction-for-client-server-systems-of-deep-neural-network-on-fully-homomorphic-encryption)**
### 作者
* Joon-Woo Lee, School of Computer Science and Engineering, Chung-Ang University, Seoul, Republic of Korea
* Eunsang Lee, Department of Software, Sejong University, Seoul, Republic of Korea
* Young-Sik Kim, Department of Electrical Engineering and Computer Science, DGIST, Daegu, Republic of Korea
* Jong-Seon No, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Republic of Korea
### 摘要
> 在本文中，我们提出了一种新的分层旋转密钥的概念，用于同态加密，以减少客户端和服务器在完全同态加密方案（如Cheon-Kim-Kim-Song（CKKS）和Brakerski/Fan-Vercauteran（BFV）方案）上的负担。使用这个概念，客户端只需生成并传输一小组旋转密钥给服务器，服务器就可以从公钥和客户端发送的较小的旋转密钥集中生成任何需要的旋转密钥。这种方法显著减少了客户端和服务器的通信成本，以及客户端的计算成本。例如，如果我们使用CKKS方案为ImageNet数据集实现标准的ResNet-18网络，服务器需要617个旋转密钥。对于个人电脑的客户端，生成整个旋转密钥需要145.1秒，总大小为115.7GB。如果使用所提出的两级分层旋转密钥系统，由客户端生成和传输的旋转密钥集的大小可以从115.7GB减少到2.91GB（1/39.8倍），客户端旋转密钥生成时间缩短为3.74秒（38.8倍），而不需要对密文进行任何同态操作。如果使用三级分层旋转密钥系统，由客户端生成和传输的旋转密钥集的大小可以进一步减少为1.54GB（1/75.1倍），客户端旋转密钥生成时间可以进一步缩短为1.93秒（75.2倍），只需要在离线阶段稍微增加密钥切换操作和进一步的计算。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_2](https://doi.org/10.1007/978-981-99-8736-8_2)
## Homomorphic Polynomial Evaluation Using Galois Structure and Applications to BFV Bootstrapping.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#homomorphic-polynomial-evaluation-using-galois-structure-and-applications-to-bfv-bootstrapping) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#homomorphic-polynomial-evaluation-using-galois-structure-and-applications-to-bfv-bootstrapping)**
### 作者
* Rachel Player, Royal Holloway, University of London, London, UK
* Simon Pohmann, Royal Holloway, University of London, London, UK
* Hiroki Okada, KDDI Research, Fujimino, Japan
### 摘要
> BGV和BFV是最广泛使用的全同态加密（FHE）方案之一。这两种方案具有共同的明文空间，并且拥有丰富的代数结构。我们的主要贡献是展示如何利用这种结构来更有效地同态地评估多项式。换句话说，只需要\(3\log (d)\)（在某些情况下只需要\(2\log (d)\)）次密文-密文乘法和自同构评估，就可以同态地评估一个次数为d的多项式，其中d由环度限定。换言之，只要多项式的次数受限，与现有技术相比，我们实现了指数级的速度提升。特别地，这种方法也改善了\(2\sqrt{d}\)次密文-密文乘法的理论下限，如果自同构不可用的话。
> 
> 我们研究了如何将我们改进的多项式评估应用于BFV的引导程序，并表明我们能够显著提高其性能。我们通过使用微软SEAL库提供了我们改进的BFV引导程序的实现来证明这一点。更具体地说，与Chen和Han（Eurocrypt 2018）所提供的之前实现相比，我们实现了1.6倍的速度提升。这些技术独立于，且可以与Geelen等人（Eurocrypt 2023）最近提出的更多优化相结合。
> 
> 作为额外的贡献，我们展示了FHEW和TFHE等方案中使用的引导方法如何在BFV的背景下应用。特别是，我们证明了可以实现BFV的可编程引导。此外，我们展示了如何改进BFV背景下的这种引导方法，以更好地利用其Galois结构。然而，我们估计其复杂度大约比BFV引导的传统方法慢三个数量级。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_3](https://doi.org/10.1007/978-981-99-8736-8_3)
## Amortized Functional Bootstrapping in Less than 7 ms, with Õ(1) Polynomial Multiplications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#amortized-functional-bootstrapping-in-less-than-7-ms-with-1-polynomial-multiplications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#amortized-functional-bootstrapping-in-less-than-7-ms-with-1-polynomial-multiplications)**
### 作者
* Zeyu Liu, Yale University, New Haven, USA
* Yunhao Wang, Yale University, New Haven, USA
### 摘要
> 分摊启动提供了一种同时更有效地刷新完全同态加密方案中的多个密文的方法，而不是一次性刷新一个密文。Micciancio和Sorrell（ICALP 2018）首次提出了该技术，以同时启动n个LWE密文，将总成本从\(\tilde{O}(n^2)\)降低到\(\tilde{O}(3^\epsilon n^{1+\frac{1}{\epsilon }})\)，适用于任意\(\epsilon > 0\)。最近的几个作品进一步提高了渐近成本。尽管在理论效率方面取得了惊人的进展，但这些作品中没有一个证明了批处理LWE密文启动的实用性。此外，这些作品中的大多数只支持有限的函数启动，即只支持在进行启动时评估某些特定类型的函数。
> 
> 在本文中，我们提出了一个建设性，它不仅是渐近有效的（只需要\(\tilde{O}(n)\)次多项式乘法来启动n个LWE密文），而且是实际有效的。我们将我们的方案实现为C ++库，并展示它为二元门启动的LWE密文仅需要<5毫秒的时间，这比在OpenFHE上实现LWE密文启动的最先进的C ++实现快一个数量级。此外，我们的构造支持批处理任意功能启动。对于9位消息空间，我们的方案需要\({\sim }6.7\)毫秒来评估带启动的任意函数的每个LWE密文，这比所有实现类似功能和消息空间的现有方案快大约两到三个数量级。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_4](https://doi.org/10.1007/978-981-99-8736-8_4)
## Sender-Anamorphic Encryption Reformulated: Achieving Robust and Generic Constructions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#sender-anamorphic-encryption-reformulated-achieving-robust-and-generic-constructions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#sender-anamorphic-encryption-reformulated-achieving-robust-and-generic-constructions)**
### 作者
* Yi Wang, School of Computer, National University of Defense Technology, Changsha, China
* Rongmao Chen, School of Computer, National University of Defense Technology, Changsha, China
* Xinyi Huang, The Hong Kong University of Science and Technology (Guangzhou), Guangzhou, China
* Moti Yung, Google LLC, New York, NY, USA
* Moti Yung, Columbia University, New York, USA
### 摘要
> 由于某个叫做“独裁者”的实体违反了安全通信中的两个基本假设——接收者隐私和发送者自由，Persiano等人在公钥加密系统（EUROCRYPT 2022）中引入了变形加密（Anamorphic Encryption，AME）的概念。具体而言，他们分别提出了接收者/发送者-AME，直接针对接收者隐私和发送者自由假设被破坏的情况。在接收者-AME中，实体们共享一个双重密钥以变形方式进行通信，这引发了在线分发双重密钥而不被“独裁者”检测到的担忧。没有共享密钥的发送者-AME是密钥分发的潜在候选方案。然而，唯一已知的这种方案（即LWE和Dual LWE加密）具有固有局限性，无法实现可靠的分发。
> 
> 在此，我们重新制定发送者-AME，提出概念\(\ell\)-发送者-AME，并正式规范了（强）安全和鲁棒性的属性。鲁棒性是指保证将重复信息传递到预定接收者，以确保以变形方式解密普通密文或用错误的重复密钥解密变形密文会导致显式的中止信号。我们首先提出了一个伪随机且具有鲁棒性的公钥加密简单构造，与von Ahn和Hopper的公钥隐形系统（EUROCRYPT 2004）类似。然后，受Chen等人针对密钥封装机制（KEM）的恶意算法替换攻击（ASA）（ASIACRYPT 2020）的启发，我们给出了一个通用构造，涵盖了ElGamal和Cramer-Shoup加密系统等著名方案的混合PKE。
> 
> \(\ell\)-发送者-AME的构造促使我们探索AME、PKE上的ASA和公钥隐形系统之间的关系。结果表明，强安全的\(\ell\)-发送者-AME是一个如此强大的原始类型，它意味着重新制定的接收者-AME、公钥隐形系统和广义PKE上的ASA。通过扩大发送者变形加密的范围并确立其鲁棒性，以及探索现有概念之间的联系，我们推进了在具有挑战性的操作条件下的安全通信协议。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_5](https://doi.org/10.1007/978-981-99-8736-8_5)
## Efficient Secure Storage with Version Control and Key Rotation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#efficient-secure-storage-with-version-control-and-key-rotation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#efficient-secure-storage-with-version-control-and-key-rotation)**
### 作者
* Long Chen, Institute of Software Chinese Academy of Sciences, Beijing, China
* Hui Guo, The State Key Laboratory of Cryptology, Beijing, China
* Ya-Nan Li, The University of Sydney, Sydney, Australia
* Qiang Tang, The University of Sydney, Sydney, Australia
### 摘要
> 定期密钥轮换是一种广泛使用的技术，可增强密钥妥协的弹性。可更新加密（UE）方案提供了一种高效的密钥轮换方法，确保在机密性和完整性方面获得后妥协安全性。然而，由于存在恶意服务器诱导客户端接受文件的旧版本而不是最新版本的风险，这些UE技术无法直接应用于频繁更新的数据库。
> 
> 为解决这一问题，我们提出了一种称为可更新安全存储（USS）的方案，为动态数据库提供了安全且可更新的解决方案。 USS确保数据的保密性和完整性，即使在密钥受到妥协的情况下也是如此。通过使用高效的密钥轮换和文件更新程序，这些操作的通信成本与数据库的大小无关。这使得USS特别适用于具有安全版本控制功能的大型和经常更新的数据库管理。与现有的UE方案不同，USS提供的完整性即使在服务器了解当前秘密密钥并故意违反密钥更新协议时也能保持。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_6](https://doi.org/10.1007/978-981-99-8736-8_6)
## Fine-Grained Proxy Re-encryption: Definitions and Constructions from LWE.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#fine-grained-proxy-re-encryption-definitions-and-constructions-from-lwe) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#fine-grained-proxy-re-encryption-definitions-and-constructions-from-lwe)**
### 作者
* Yunxiao Zhou, School of Cyber Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shuai Han, School of Cyber Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yunxiao Zhou, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shuai Han, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Haibin Zhang, Beijing Institute of Technology, Beijing, 100081, China
### 摘要
> 代理重加密（PRE）允许具有重加密密钥的代理将用于Alice（委托方）的密文转换为用于Bob（受托方）的另一个密文，而不会揭示底层消息。然而，使用PRE，Bob可以从重加密的密文中获取整个消息，而Alice无法灵活控制传输给Bob的消息的程度。
> 
> 在本文中，我们提出了一种新的PRE变体，称为精细PRE（FPRE），以支持精细的重加密。FPRE与一个函数族\(\mathcal{F}\)相关联，每个重加密密钥\(rk_{A\rightarrow B}^f\)与一个函数\(f\in\mathcal{F}\)相关联。有了FPRE，Alice现在可以通过向代理发出由她自己选择的\(rk_{A\rightarrow B}^f\)来授权重加密能力。然后，代理可以使用这样一个精细的重加密密钥将加密m的密文翻译为加密f(m)的Bob的密文，并且Bob只能获取消息m的一个函数。通过这种方式，Alice可以通过指定函数来灵活控制消息的传播。
> 
> 对于FPRE，我们正式定义其语法并形式化安全概念，包括CPA安全性、密文伪随机性、单向性、非传递性、多用户设置下的适应性腐化下的勾结安全性。此外，我们提出了一种名为密文不可链接性的新安全概念，它模糊了密文与其重加密密文之间的连接，以隐藏用户之间的代理连接。我们建立了这些安全概念之间的关系。
> 
> 至于构造，我们提出了两种FPRE方案，一种用于有界线性函数，另一种用于删除函数，基于学习与错误（LWE）假设。我们的FPRE方案在标准模型中实现了所有前述理想的安全性。据我们所知，我们的方案为具有适应性腐化下的标准模型安全性的PRE提供了第一个解决方案。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_7](https://doi.org/10.1007/978-981-99-8736-8_7)
## Injection-Secure Structured and Searchable Symmetric Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#injection-secure-structured-and-searchable-symmetric-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#injection-secure-structured-and-searchable-symmetric-encryption)**
### 作者
* Ghous Amjad, Google, Menlo Park, USA
* Seny Kamara, MongoDB, New York, USA
* Tarik Moataz, MongoDB, New York, USA
* Seny Kamara, Brown University, Providence, USA
### 摘要
> 近年来，对于动态结构化和可搜索对称加密的研究主要集中在实现前向隐私的概念上。这主要是因为前向隐私可以防止自适应文件注入攻击（Zhang，Katz，Papamanthou，Usenix Security，2016）。在这项工作中，我们在几个方面重新审视了前向隐私的概念。首先，我们观察到，如果某个方案揭示了其他泄漏模式（例如查询等式），前向隐私不一定能够保证防止自适应文件注入攻击。然后，我们提出了一种称为相关安全的安全概念，它拓展了前向隐私。接着，我们展示了如何利用相关安全形式定义防止不同类型注入攻击的安全。我们随后提出了第一个注入安全的多映射加密方案，并将其用作设计第一个注入安全的可搜索对称加密（SSE）方案的构建块。为了实现这一点，我们还提出了一种新的完全动态的体积隐藏多映射加密方案，这也可能具有独立的利益。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_8](https://doi.org/10.1007/978-981-99-8736-8_8)
## Hermes: I/O-Efficient Forward-Secure Searchable Symmetric Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#hermes-i-o-efficient-forward-secure-searchable-symmetric-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#hermes-i-o-efficient-forward-secure-searchable-symmetric-encryption)**
### 作者
* Brice Minaud, École Normale Supérieure, PSL University, CNRS, Inria, Paris, France
* Michael Reichle, ETH Zürich, Zurich, Switzerland
### 摘要
> 动态对称可搜索加密(SSE)允许用户将加密数据库的存储外包给不可信的服务器，同时保留了对外包数据库的私有搜索和更新的能力。 SSE方案的性能瓶颈通常来自其I/O效率。在过去的十年中，一系列工作已大大提高了这一瓶颈。然而，所有现有的I/O有效SSE方案都有一个共同限制：它们不具有前向安全性。自从Bost在CCS 2016的开创性工作以来，前向安全已经成为SSE的事实标准。在同一文章中，Bost提出前向安全和I/O效率是不兼容的假设。这解释了当前形势，即用户被迫在安全与效率之间做出困难的选择。
> 
> 本文的中心贡献是表明，与现状所示相反，前向安全和I/O效率可以同时实现。这一结果是由两个新的关键技术实现的。首先，我们利用受控制的客户端缓冲量，结合确定性更新计划。其次，我们引入了支持虚拟更新的SSE的概念。结合这两个技术，提供了实现前向安全的新途径，这与I/O效率兼容。我们的新SSE方案"赫尔墨斯"实现亚对数级别的I/O效率\(\widetilde{\mathcal{O}}\left( {\log \log \frac{N}{p}}\right) \)，存储效率\(\mathcal {O}\left( 1\right) \)，以及标准泄漏，以及向后和向前的安全。实验证明，"赫尔墨斯"取得了出色的性能。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_9](https://doi.org/10.1007/978-981-99-8736-8_9)
## To Attest or Not to Attest, This is the Question - Provable Attestation in FIDO2.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#to-attest-or-not-to-attest-this-is-the-question-provable-attestation-in-fido2) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#to-attest-or-not-to-attest-this-is-the-question-provable-attestation-in-fido2)**
### 作者
* Nina Bindel, SandboxAQ, Palo Alto, CA, USA
* Nicolas Gama, SandboxAQ, Palo Alto, CA, USA
* Sandra Guasch, SandboxAQ, Palo Alto, CA, USA
* Eyal Ronen, Tel Aviv University, Tel Aviv, Israel
### 摘要
> FIDO2目前是Web服务器中无密码身份验证的主要倡议。它要求使用安全硬件验证器来保护身份验证协议的秘密免受威胁。然而，为了确保只有安全验证器被使用，Web服务器需要一种方法来证明它们的属性。FIDO2规范允许验证器和Web服务器在不同证明模式之间进行选择，以证明验证器的特性，然而大多数这些模式的特性尚未在FIDO2的背景下进行分析。在这项工作中，我们分析了当标准中包含的不同证明模式用于FIDO2时，其安全性和隐私性特性，并表明它们在安全性、隐私性和撤销受损设备之间缺乏良好平衡。例如，基本认证模式防止远程服务器跟踪用户在不同服务之间的操作，同时需要减少信任假设。然而，如果一个设备被入侵，同一批次的所有设备（例如相同品牌或型号）都需要召回，这可能在消费者场景中相当复杂（甚至实际上不切实际）。因此，我们建议基于最近提出的TokenWeaver的新认证模式，该模式提供了更方便的机制，可以撤销单个令牌并保持用户隐私。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_10](https://doi.org/10.1007/978-981-99-8736-8_10)
## The Pre-Shared Key Modes of HPKE.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#the-pre-shared-key-modes-of-hpke) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#the-pre-shared-key-modes-of-hpke)**
### 作者
* Joël Alwen, AWS-Wickr, Seattle, USA
* Jonas Janneck, Ruhr-Universität Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Benjamin Lipp, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 最近，由互联网研究任务组（IRTF）加密论坛研究小组（CFRG）发布了混合公钥加密（HPKE）标准RFC 9180。该RFC规定了一种高效的公钥加密方案，将非对称和对称加密模块结合在一起。
> 
> HPKE有四种模式，其中两种已由Alwen等人（EUROCRYPT 2021）进行了正式分析。本研究考虑了另外两种模式：\(\textsf{HPKE}_\textsf{PSK}\)和\(\textsf{HPKE}_\textsf{AuthPSK}\)。它们都是“预共享密钥”模式，假设发送方和接收方持有对称预共享密钥。我们使用两个新的原语捕获了这些方案，称之为预共享密钥公钥加密（\(\textsf{pskPKE}\)）和预共享密钥认证公钥加密（\(\textsf{pskAPKE}\)）。我们为\(\textsf{pskPKE}\)和\(\textsf{pskAPKE}\)提供了正式的安全模型，并通过一般组合定理证明了两种模式\(\textsf{HPKE}_\textsf{PSK}\)和\(\textsf{HPKE}_\textsf{AuthPSK}\)在Gap Diffie-Hellman假设下提供主动安全性（指内部人员隐私和外部人员真实性）。
> 
> 我们进一步探索了HPKE标准的可能的后量子安全实现，并提出了基于格和同源性的新解决方案。此外，我们展示了如何使用HPKE的基本\(\textsf{HPKE}_\textsf{PSK}\)和\(\textsf{HPKE}_\textsf{AuthPSK}\)模式以黑匣子方式简单构建主动安全的后量子/经典混合（认证）加密方案。我们的混合构造为实现基本的HPKE模式\(\textsf{HPKE}_\textsf{Base}\)和\(\textsf{HPKE}_\textsf{Auth}\)的后量子安全替代方案提供了一条廉价且易于实现的途径。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_11](https://doi.org/10.1007/978-981-99-8736-8_11)
## Unified View for Notions of Bit Security.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#unified-view-for-notions-of-bit-security) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#unified-view-for-notions-of-bit-security)**
### 作者
* Shun Watanabe, Tokyo University of Agriculture and Technology, Tokyo, Japan
* Kenji Yasunaga, Tokyo Institute of Technology, Tokyo, Japan
### 摘要
> 密码学原语/游戏的比特安全性的理论框架最初由 Micciancio 和 Walter（Eurocrypt 2018）首次引入，并由作者提出了另一种框架（Asiacrypt 2021）。首先，我们观察到，即使允许对手输出失败符号，后一个框架中的定量结果仍然得以保留。通过这个微小的修改，我们证明了后一个框架中的比特安全性概念是等价于前一个框架中的比特安全性概念的，不过只相差一些常数位。此外，我们证明了多个现有的概率优势的概念可以被统一地捕获。基于这种等价关系，我们证明了 Hast（J. Cryptology, 2004）的约化算法将 Goldreich-Levin 强核谓词的难度约化为单向函数的难度。这两个结果解决了未解决的开放问题。此外，在后一个框架中，我们证明了我们需要关注的所有游戏都是决策游戏。也就是说，对于每个搜索游戏 G，都存在相应的决策游戏 \(G'\)，使得 G 具有 \(\lambda \) 比特安全性当且仅当 \(G'\) 具有 \(\lambda \) 比特安全性。游戏 \(G'\) 包括真实游戏和理想游戏，其中理想游戏中的攻击永远不被批准。这样的游戏经常出现在游戏跳动安全证明中。该结果证明了这样的安全证明并不丧失安全性。最后，我们提供了一个分布替换定理。假设通过黑盒方式使用分布 Q 的游戏是 \(\lambda \) 比特安全的，且两个分布 P 和 Q 在计算上是 \(\lambda \) 比特安全不可区分的，那么用 P 替换 Q 的游戏也是 \(\lambda \) 比特安全的。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_12](https://doi.org/10.1007/978-981-99-8736-8_12)
## The Relationship Between Idealized Models Under Computationally Bounded Adversaries.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#the-relationship-between-idealized-models-under-computationally-bounded-adversaries) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#the-relationship-between-idealized-models-under-computationally-bounded-adversaries)**
### 作者
* Cong Zhang, Zhejiang University, Hangzhou, China
* Mark Zhandry, NTT Research, Sunnyvale, CA, USA
* Cong Zhang, ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
### 摘要
> 在这项工作中，我们提出了一个问题：哪种启发式更接近现实？或者反过来说，哪种启发式跨越更大？我们通过计算不可区分性框架回答了这个问题，展示了随机预言机模型（ROM）比通用群模型（GGM）更“温和”，而后者又比通用双线性映射模型（GBM）更“温和”。虽然这似乎是预期的结果，但我们解释了为什么这并不是由先前的工作得出的结论，并且并非明显的先验结论。为了证明我们的结果，我们开发了新的思路来证明计算不可区分性的分离。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_13](https://doi.org/10.1007/978-981-99-8736-8_13)
## Just How Fair is an Unreactive World?
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-6].md#just-how-fair-is-an-unreactive-world) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-6].md#just-how-fair-is-an-unreactive-world)**
### 作者
* Srinivasan Raghuraman, Visa Research and MIT, Cambridge, USA
* Yibin Yang, Georgia Institute of Technology, Atlanta, USA
### 摘要
> Fitzi，Garay，Maurer和Ostrovsky（J. Cryptology 2005）表明，在存在不诚实的多数人的情况下，没有具有基数n-1的原语可用于实现具有输出传递保证的任意n方功能。在这项工作中，我们表明，在存在n-1个腐败方的情况下，没有具有基数n-1的不重复原语可用于实现具有公平性的任意n方功能。我们更一般地表明，对于\(t>\frac{n}{2}\)，在存在t个恶意方的情况下，没有具有基数t的不重复原语可用于实现具有公平性的任意n方功能。我们补充这一结果，指出\((t+1)\)次公平交换完全可用于实现具有公平性的任意n方功能。为了证明我们的结果，我们利用了公平抛硬币原语和可预测性的概念。尽管这一概念在过去的一些作品中以某种形式被考虑过，但我们提出了一种新颖且非平凡的框架来使用它，这种框架很容易从两个方当事人的设置推广到多方当事人的设置，也可以应用于不重复功能的设置。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8736-8_14](https://doi.org/10.1007/978-981-99-8736-8_14)
