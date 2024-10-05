# Eurocrypt[2024-1]
## SQIsignHD: New Dimensions in Cryptography.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#sqisignhd-new-dimensions-in-cryptography) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#sqisignhd-new-dimensions-in-cryptography)**
### 作者
* Pierrick Dartois, Univ. Bordeaux, CNRS, INRIA, IMB, UMR 5251, 33400, Talence, France
* Damien Robert, Univ. Bordeaux, CNRS, INRIA, IMB, UMR 5251, 33400, Talence, France
* Pierrick Dartois, INRIA, IMB, UMR 5251, 33400, Talence, France
* Damien Robert, INRIA, IMB, UMR 5251, 33400, Talence, France
* Antonin Leroux, DGA-MI, Bruz, France
* Antonin Leroux, IRMAR - UMR 6625, Université de Rennes, Rennes, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### 摘要
> 我们介绍了 SQIsignHD，一种新的后量子数字签名方案，灵感来源于 SQIsign。SQIsignHD利用了最近算法突破的特点，该算法基于对 SIDH 的攻击，它允许有效地表示任意度数的同构为高维同构的组件。SQIsignHD克服了 SQIsign 的主要缺点。首先，它能够适应高安全级别，因为生成 SQIsignHD 的公共参数很容易：底层字段的特征只需要是 \(2^{f}3^{f'}-1\) 形式。其次，签名过程更简单，更有效率。我们在 C 中实现的签名程序仅需要 28 毫秒，与 SQISign 相比，这是一个重大的改进。第三，该方案更易于分析，从而实现更可靠的安全降级。最后，签名大小甚至比（已经打破记录的）SQIsign更紧凑，对于后量子 NIST-1 安全级别，压缩签名最小只需 109 个字节。这些优点可能是以验证的代价为代价的，现在需要在维度 4 上计算一个同构，这项任务的优化成本仍不确定，因为它一直是关注的焦点。我们实验性地在 sagemath 中实现的验证程序运行约为 600 毫秒，表明优化和低级别实现后，维度 4 同构具有潜在的加密兴趣。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_1](https://doi.org/10.1007/978-3-031-58716-0_1)
## Tight Indistinguishability Bounds for the XOR of Independent Random Permutations by Fourier Analysis.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#tight-indistinguishability-bounds-for-the-xor-of-independent-random-permutations-by-fourier-analysis) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#tight-indistinguishability-bounds-for-the-xor-of-independent-random-permutations-by-fourier-analysis)**
### 作者
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
### 摘要
> 两个独立置换的异或（XoP）是一个众所周知的构造，用于在使用块密码（即伪随机置换）实现伪随机函数时实现超出生日界限的安全性。理想化的构造（其中排列是均匀选择且独立的）及其变体在近25年来得到了广泛分析。
> 
> XoP构造的已知最佳渐近信息论区分界限是\(O(q/2^{1.5n})\)，由Eberhard于2017年推导得出。
> 
> XoP构造的推广输出\(r \ge 2\)独立排列的异或，并且在单用户和多用户设置中都受到了重视。特别是对于\(r = 3\)，在单用户设置中已知的边界（由Choi等人[ASIACRYPT'22]得出）约为\(q^2/2^{2.5n}\)，在多用户设置中约为\(\sqrt{u} q_{\max }^2/2^{2.5n}\)（其中u是用户数量，\(q_{\max }\)是每个用户的查询数量）。
> 
> 在本文中，我们证明了（广义）XoP构造在单用户设置中的不可区分性界限为\(q/2^{(r - 0.5)n}\)，在多用户设置中为\(\sqrt{u} q_{\max }/2^{(r - 0.5)n}\)。特别是对于\(r=2\)，我们获得了单用户和多用户设置的界限\(q/2^{1.5n}\)和\(\sqrt{u} q_{\max }/2^{1.5n}\)。对于\(r=3\)，相应的边界为\(q/2^{2.5n}\)和\(\sqrt{u} q_{\max }/2^{2.5n}\)。所有这些边界都假定\(q < 2^{n}/2\)（或者\(q_{\max } < 2^{n}/2\)）。
> 
> 与先前的研究相比，在多用户设置中，我们改进了（广义）XoP构造的所有已知边界，并且在单用户设置中针对\(r \ge 3\)的广义XoP构造的已知边界（假设\(q \ge 2^{n/2}\)）也有所改进。对于基本的两置换XoP构造，在单用户设置中，我们具体的边界\(q/2^{1.5n}\)与Eberhard提出的渐近边界\(O(q/2^{1.5n})\)形成对比。
> 
> 由于我们所有的边界都被2008年由Patarin发表的攻击（以及他们对多用户设置的推广）匹配（直到常数因子），它们都是紧密的。
> 
> 我们通过布尔函数的傅里叶分析获得了我们的结果。我们的大部分技术工作涉及到限制（和）与替换抽样相关的密度函数的傅里叶系数。虽然Eberhard的证明依赖于类似的边界，但我们的证明是基本的且明显更简单。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_2](https://doi.org/10.1007/978-3-031-58716-0_2)
## AprèsSQI: Extra Fast Verification for SQIsign Using Extension-Field Signing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#apr-ssqi-extra-fast-verification-for-sqisign-using-extension-field-signing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#apr-ssqi-extra-fast-verification-for-sqisign-using-extension-field-signing)**
### 作者
* Maria Corte-Real Santos, University College London, London, UK
* Jonathan Komada Eriksen, Norwegian University of Science and Technology, Trondheim, Norway
* Michael Meyer, University of Regensburg, Regensburg, Germany
* Krijn Reijnders, Radboud University, Nijmegen, The Netherlands
### 摘要
> 我们优化了SQIsign签名方案的验证。通过在签名过程中使用域扩展，我们能够显着增加可用有理二次扭曲点的数量，从而实现显著加速。此外，这也可以在曲线算术的级别上进行其他加速。我们表明，高层和低级别的改进相互配合，可以显著改善验证速度，并使其比现有技术快2.07倍，或在使用大小 - 速度平衡时高达3.41倍，而不会严重影响签署性能。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_3](https://doi.org/10.1007/978-3-031-58716-0_3)
## The Exact Multi-user Security of (Tweakable) Key Alternating Ciphers with a Single Permutation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#the-exact-multi-user-security-of-tweakable-key-alternating-ciphers-with-a-single-permutation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#the-exact-multi-user-security-of-tweakable-key-alternating-ciphers-with-a-single-permutation)**
### 作者
* Yusuke Naito, Mitsubishi Electric Corporation, Kanagawa, Japan
* Yu Sasaki, NTT Social Informatics Laboratories, Tokyo, Japan
* Takeshi Sugawara, The University of Electro-Communications, Tokyo, Japan
### 摘要
> 我们证明了可调节密钥交替密码（KAC）在任意轮数r、具有单个置换和r个独立子密钥时的紧密多用户（mu）安全性，为块密码提供了更为现实的可证明安全基础。在陈和斯坦伯格在2014年证明了r轮KAC的单用户（su）紧密安全性之后，它在更为现实的条件下的扩展已成为新的研究挑战。目前最先进的方法包括（i）由于等人提出的单个置换，（ii）由卢昊和提萨罗提出的mu安全性，以及（iii）由提萨罗和张提出的相关子密钥。然而，先前的研究独立地考虑了这些条件，而所有这些条件下r轮KAC的紧密安全界是一个开放的研究问题。我们通过给出一个新的mu界来解决这个问题，其n位消息空间的界约为\(q \cdot \left( \frac{p + r q}{2^n} \right) ^r\)，其中p和q分别是原始查询和构造查询的数量。这个界确保了在\(O(2^\frac{rn}{r+1})\)的查询复杂度下的安全性，并且是紧密的，与常规攻击界相匹配。此外，我们的结果容易扩展到r轮可调节KAC，当其子密钥由一个调整函数生成时，其子密钥是r个独立的。证明基于最初用于三重加密的mu安全性分析的重新采样方法。它被扩展到任意轮数，成为实现新界的核心技术。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_4](https://doi.org/10.1007/978-3-031-58716-0_4)
## Partial Sums Meet FFT: Improved Attack on 6-Round AES.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#partial-sums-meet-fft-improved-attack-on-6-round-aes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#partial-sums-meet-fft-improved-attack-on-6-round-aes)**
### 作者
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
* Shibam Ghosh, Computer Science Department, University of Haifa, Haifa, Israel
* Victor Mollimard, Computer Science Department, University of Haifa, Haifa, Israel
* Nathan Keller, Department of Mathematics, Bar Ilan University, Ramat Gan, Israel
* Avichai Marmor, Department of Mathematics, Bar Ilan University, Ramat Gan, Israel
* Gaëtan Leurent, Inria, Paris, France
### 摘要
> 部分和密码分析技术由Ferguson等人于2000年首次提出，他们使用它来破解6轮AES，时间复杂度为\(2^{52}\)个S盒计算 - 这是一个目前仍未被超越的记录。2014年，Todo和Aoki表明，对于6轮AES，可以用基于快速傅里叶变换（FFT）的技术代替部分和，从而导致具有可比复杂度的攻击。
> 
> 在本文中，我们展示了部分和技术可以与基于FFT的技术相结合，以得到两种技术的最佳效果。使用我们的组合技术，我们获得了对6轮AES的攻击，其复杂度约为\(2^{46.4}\)个加法。我们实验完全实现了攻击，以及部分和攻击和Todo-Aoki攻击，并证实我们的攻击将6轮AES的最佳已知攻击提高了超过32倍。
> 
> 我们期望我们的技术可以用来显着增强利用部分和技术的许多攻击。为了证明这一点，我们使用我们的技术将7轮Kuznyechik的最佳已知攻击提高了超过80倍。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_5](https://doi.org/10.1007/978-3-031-58716-0_5)
## New Records in Collision Attacks on SHA-2.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#new-records-in-collision-attacks-on-sha-2) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#new-records-in-collision-attacks-on-sha-2)**
### 作者
* Yingxin Li, Shanghai Key Laboratory of Trustworthy Computing, Software Engineering Institute, East China Normal University, Shanghai, China
* Gaoli Wang, Shanghai Key Laboratory of Trustworthy Computing, Software Engineering Institute, East China Normal University, Shanghai, China
* Fukang Liu, Tokyo Institute of Technology, Tokyo, Japan
### 摘要
> SHA-2家族包括SHA-224、SHA-256、SHA-384、SHA-512、SHA-512/224和SHA-512/256，是由NIST发布的美国联邦标准。特别是，毫无疑问SHA-256是现实世界应用中最重要的哈希函数之一。与SHA-1相比，由于其复杂的设计，自ASIACRYPT 2015以来对SHA-2的碰撞攻击几乎没有任何进展。在这项工作中，我们重新挑战并旨在显著改进对SHA-2家族的碰撞攻击。首先，我们观察了许多对SHA-2的现有攻击，发现目前用于搜索SHA-2特征的高级工具已经达到瓶颈。具体来说，无法找到更长的微分特征，这导致碰撞攻击无法达到更多步骤。为了解决这个问题，我们采用Liu等人的基于MILP的方法，并将其与SAT/SMT一起实现到SHA-2中，同时我们还增加了更多技术来检测SHA-2特征中的矛盾。这回答了刘等人在文章中留下的一个未解决的问题，即将该技术应用于SHA-2。借助这个基于SAT/SMT的工具，我们以一种专门的方式控制其稀疏性来搜索SHA-2的特征。结果，我们成功地找到了39步SHA-256的第一个实用的半自由起始（SFS）碰撞消息对，改进了2013年EUROCRYPT发布的最佳38步SFS碰撞攻击。此外，我们还报告了首个40步SHA-224自由起始（FS）碰撞攻击，而之前的最佳理论40步攻击的时间复杂度为\(2^{110}\)。此外，还首次能对28步和31步的SHA-512进行实用和理论上的碰撞攻击，这改进了ASIACRYPT 2015中仅达到27步的SHA-512的最佳碰撞攻击。总之，通过新技术找到SHA-2的特征，我们在EUROCRYPT 2013和ASIACRYPT 2015取得的重大成就之后，在SHA-2的分析方面取得了一些显著的进展。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_6](https://doi.org/10.1007/978-3-031-58716-0_6)
## Improving Linear Key Recovery Attacks Using Walsh Spectrum Puncturing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#improving-linear-key-recovery-attacks-using-walsh-spectrum-puncturing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#improving-linear-key-recovery-attacks-using-walsh-spectrum-puncturing)**
### 作者
* Antonio Flórez-Gutiérrez, NTT Social Informatics Laboratories, Tokyo, Japan
* Yosuke Todo, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 在一些线性密钥恢复攻击中，确定线性逼近值的函数从明文、密文和密钥中替换为类似映射，以改善时间或内存复杂性，但以增加数据复杂性为代价。我们提出了一个用于密钥恢复映射替换的通用框架，并引入了Walsh谱穿孔技术，该技术包括从此映射的Walsh谱中移除精心选择的系数。通过描述对缩减轮次的Serpent（包括对192位密钥变体的首次12轮攻击）、GIFT-128和Noekeon以及完整DES的改进攻击来展示这种技术的能力。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_7](https://doi.org/10.1007/978-3-031-58716-0_7)
## A Generic Algorithm for Efficient Key Recovery in Differential Attacks - and its Associated Tool.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#a-generic-algorithm-for-efficient-key-recovery-in-differential-attacks-and-its-associated-tool) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#a-generic-algorithm-for-efficient-key-recovery-in-differential-attacks-and-its-associated-tool)**
### 作者
* Christina Boura, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, 78000, Versailles, France
* Rachelle Heim Boissier, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, 78000, Versailles, France
* Nicolas David, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* Patrick Derbez, Univ Rennes, Inria, CNRS, IRISA, Rennes, France
### 摘要
> 差分密码分析是一种针对分块密码的老牌攻击方式。虽然多年来推出了不同技术以提高此攻击的复杂度，但关键恢复阶段仍是一个繁琐且容易出错的过程。在本研究中，我们提出了一种新算法及其相关工具，可在给定区分器的情况下输出有效的密钥猜测策略。我们的工具可应用于线性层由位置换组成，密钥计划是线性或几乎线性的SPN密码。它不仅可用于帮助密码分析员找到给定密码的最佳差分攻击，还可帮助设计人员进行安全分析。我们将我们的工具应用于四个目标：RECTANGLE、PRESENT-80、SPEEDY-7-192和GIFT-64。我们将先前对RECTANGLE-128的最佳攻击扩展了一轮，将先前对PRESENT-80的最佳差分攻击扩展了2轮。我们改进了对SPEEDY的攻击中的先前密钥恢复步骤，并为RECTANGLE-80和GIFT提出了更有效的密钥恢复策略。我们的工具对大多数目标只需在一秒钟内输出结果。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_8](https://doi.org/10.1007/978-3-031-58716-0_8)
## Tight Security of TNT and Beyond - Attacks, Proofs and Possibilities for the Cascaded LRW Paradigm.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#tight-security-of-tnt-and-beyond-attacks-proofs-and-possibilities-for-the-cascaded-lrw-paradigm) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#tight-security-of-tnt-and-beyond-attacks-proofs-and-possibilities-for-the-cascaded-lrw-paradigm)**
### 作者
* Ashwin Jha, Ruhr-Universtät Bochum, Bochum, Germany
* Ashwin Jha, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Mustafa Khairallah, Seagate Research Group, Singapore, Singapore
* Mustafa Khairallah, Lund University, Lund, Sweden
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
* Abishanka Saha, Indian Statistical Institute, Kolkata, India
### 摘要
> Liskov、Rivest 和 Wagner 奠定了可调块密码（TBC）的理论基础。在一篇开创性的论文中，他们提出了两种（至多）生日界限安全设计策略 LRW1 和 LRW2，将任何块密码转换为 TBC。几项后续研究考虑了 LRW 类型 TBC 的级联以构建超越生日界限（BBB）安全的 TBC。Landecker 等人证明了仅通过两轮级联 LRW2 就可以获得 BBB 安全性。Bao 等人在 LRW1 的情境下进行了类似的研究，采用 TNT — LRW1 的三轮级联 — 同样被证明达到 BBB 安全性。在本文中，我们提出了一个针对 TNT 的 CCA 区分器，通过 \( O(2^{n/2}) \) 查询获得了非可忽略的优势，直接反驳了设计者所声称的安全性。我们提供了严格和完整的优势计算，并进行了实验证实，进一步支持我们的说法。接着，我们为 TNT 及其单密钥变体提供了生日界限 CCA 安全性的新而简单的证明，证实了我们攻击的严密性。更进一步地，我们展示了只需添加一个额外的块密码调用，即称为 \({4}\hbox {-}\textsf {LRW1} \)，不仅能够重新确立 BBB 安全性，还能将其扩大至 \( 2^{3n/4} \) 次查询。作为这一努力的副产品，我们提出了级联 LRW 设计哲学的新抽象，称为 LRW+ 范式，包括夹在一对可调通用哈希之间的两个块密码调用。这有助于我们提供一个模块化证明，涵盖了所有至少具有 2 轮的级联 LRW 构造，包括 \( {4}\hbox {-}\textsf {LRW1} \) 及其更为成熟的相关方面，即众所周知的 CLRW2 或更适当地说是 \( {2}\hbox {-}\textsf {LRW2} \)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_9](https://doi.org/10.1007/978-3-031-58716-0_9)
## Improved Differential Meet-in-the-Middle Cryptanalysis.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#improved-differential-meet-in-the-middle-cryptanalysis) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#improved-differential-meet-in-the-middle-cryptanalysis)**
### 作者
* Zahra Ahmadian, Shahid Beheshti University, Tehran, Iran
* Akram Khalesi, Shahid Beheshti University, Tehran, Iran
* Hossein Moghimi, Shahid Beheshti University, Tehran, Iran
* Dounia M’Foukh, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
### 摘要
> 在这篇论文中，我们将Crypto 2023提出的差分Meet-in-the-Middle攻击方法扩展到截断差分攻击，并且引入了三个新的想法来改进这种类型的攻击：我们展示了如何添加比原始论文更长的结构，展示了如何通过引入一些概率来改进密钥恢复步骤，并将此类攻击与状态测试技术相结合，该技术是在不可能差分攻击背景下引入的。此外，我们开发了一个基于MILP的工具，用于自动化搜索带有优化整体复杂性的截断差分MITM攻击，其中包含了一些提出的改进。由于这一点，我们可以构建对密码CRAFT的已知最佳攻击，达到了23轮，比之前的21轮；我们提供了一种新的对23轮SKINNY-64-192的攻击，并改进了对SKINNY-128-384的最佳攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_10](https://doi.org/10.1007/978-3-031-58716-0_10)
## SQIsignHD: New Dimensions in Cryptography.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#sqisignhd-new-dimensions-in-cryptography) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#sqisignhd-new-dimensions-in-cryptography)**
### 作者
* Pierrick Dartois, Univ. Bordeaux, CNRS, INRIA, IMB, UMR 5251, 33400, Talence, France
* Damien Robert, Univ. Bordeaux, CNRS, INRIA, IMB, UMR 5251, 33400, Talence, France
* Pierrick Dartois, INRIA, IMB, UMR 5251, 33400, Talence, France
* Damien Robert, INRIA, IMB, UMR 5251, 33400, Talence, France
* Antonin Leroux, DGA-MI, Bruz, France
* Antonin Leroux, IRMAR - UMR 6625, Université de Rennes, Rennes, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### 摘要
> 我们介绍了 SQIsignHD，一种新的后量子数字签名方案，灵感来源于 SQIsign。SQIsignHD利用了最近算法突破的特点，该算法基于对 SIDH 的攻击，它允许有效地表示任意度数的同构为高维同构的组件。SQIsignHD克服了 SQIsign 的主要缺点。首先，它能够适应高安全级别，因为生成 SQIsignHD 的公共参数很容易：底层字段的特征只需要是 \(2^{f}3^{f'}-1\) 形式。其次，签名过程更简单，更有效率。我们在 C 中实现的签名程序仅需要 28 毫秒，与 SQISign 相比，这是一个重大的改进。第三，该方案更易于分析，从而实现更可靠的安全降级。最后，签名大小甚至比（已经打破记录的）SQIsign更紧凑，对于后量子 NIST-1 安全级别，压缩签名最小只需 109 个字节。这些优点可能是以验证的代价为代价的，现在需要在维度 4 上计算一个同构，这项任务的优化成本仍不确定，因为它一直是关注的焦点。我们实验性地在 sagemath 中实现的验证程序运行约为 600 毫秒，表明优化和低级别实现后，维度 4 同构具有潜在的加密兴趣。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_1](https://doi.org/10.1007/978-3-031-58716-0_1)
## Tight Indistinguishability Bounds for the XOR of Independent Random Permutations by Fourier Analysis.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#tight-indistinguishability-bounds-for-the-xor-of-independent-random-permutations-by-fourier-analysis) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#tight-indistinguishability-bounds-for-the-xor-of-independent-random-permutations-by-fourier-analysis)**
### 作者
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
### 摘要
> 两个独立置换的异或（XoP）是一个众所周知的构造，用于在使用块密码（即伪随机置换）实现伪随机函数时实现超出生日界限的安全性。理想化的构造（其中排列是均匀选择且独立的）及其变体在近25年来得到了广泛分析。
> 
> XoP构造的已知最佳渐近信息论区分界限是\(O(q/2^{1.5n})\)，由Eberhard于2017年推导得出。
> 
> XoP构造的推广输出\(r \ge 2\)独立排列的异或，并且在单用户和多用户设置中都受到了重视。特别是对于\(r = 3\)，在单用户设置中已知的边界（由Choi等人[ASIACRYPT'22]得出）约为\(q^2/2^{2.5n}\)，在多用户设置中约为\(\sqrt{u} q_{\max }^2/2^{2.5n}\)（其中u是用户数量，\(q_{\max }\)是每个用户的查询数量）。
> 
> 在本文中，我们证明了（广义）XoP构造在单用户设置中的不可区分性界限为\(q/2^{(r - 0.5)n}\)，在多用户设置中为\(\sqrt{u} q_{\max }/2^{(r - 0.5)n}\)。特别是对于\(r=2\)，我们获得了单用户和多用户设置的界限\(q/2^{1.5n}\)和\(\sqrt{u} q_{\max }/2^{1.5n}\)。对于\(r=3\)，相应的边界为\(q/2^{2.5n}\)和\(\sqrt{u} q_{\max }/2^{2.5n}\)。所有这些边界都假定\(q < 2^{n}/2\)（或者\(q_{\max } < 2^{n}/2\)）。
> 
> 与先前的研究相比，在多用户设置中，我们改进了（广义）XoP构造的所有已知边界，并且在单用户设置中针对\(r \ge 3\)的广义XoP构造的已知边界（假设\(q \ge 2^{n/2}\)）也有所改进。对于基本的两置换XoP构造，在单用户设置中，我们具体的边界\(q/2^{1.5n}\)与Eberhard提出的渐近边界\(O(q/2^{1.5n})\)形成对比。
> 
> 由于我们所有的边界都被2008年由Patarin发表的攻击（以及他们对多用户设置的推广）匹配（直到常数因子），它们都是紧密的。
> 
> 我们通过布尔函数的傅里叶分析获得了我们的结果。我们的大部分技术工作涉及到限制（和）与替换抽样相关的密度函数的傅里叶系数。虽然Eberhard的证明依赖于类似的边界，但我们的证明是基本的且明显更简单。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_2](https://doi.org/10.1007/978-3-031-58716-0_2)
## AprèsSQI: Extra Fast Verification for SQIsign Using Extension-Field Signing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#apr-ssqi-extra-fast-verification-for-sqisign-using-extension-field-signing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#apr-ssqi-extra-fast-verification-for-sqisign-using-extension-field-signing)**
### 作者
* Maria Corte-Real Santos, University College London, London, UK
* Jonathan Komada Eriksen, Norwegian University of Science and Technology, Trondheim, Norway
* Michael Meyer, University of Regensburg, Regensburg, Germany
* Krijn Reijnders, Radboud University, Nijmegen, The Netherlands
### 摘要
> 我们优化了SQIsign签名方案的验证。通过在签名过程中使用域扩展，我们能够显着增加可用有理二次扭曲点的数量，从而实现显著加速。此外，这也可以在曲线算术的级别上进行其他加速。我们表明，高层和低级别的改进相互配合，可以显著改善验证速度，并使其比现有技术快2.07倍，或在使用大小 - 速度平衡时高达3.41倍，而不会严重影响签署性能。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_3](https://doi.org/10.1007/978-3-031-58716-0_3)
## The Exact Multi-user Security of (Tweakable) Key Alternating Ciphers with a Single Permutation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#the-exact-multi-user-security-of-tweakable-key-alternating-ciphers-with-a-single-permutation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#the-exact-multi-user-security-of-tweakable-key-alternating-ciphers-with-a-single-permutation)**
### 作者
* Yusuke Naito, Mitsubishi Electric Corporation, Kanagawa, Japan
* Yu Sasaki, NTT Social Informatics Laboratories, Tokyo, Japan
* Takeshi Sugawara, The University of Electro-Communications, Tokyo, Japan
### 摘要
> 我们证明了可调节密钥交替密码（KAC）在任意轮数r、具有单个置换和r个独立子密钥时的紧密多用户（mu）安全性，为块密码提供了更为现实的可证明安全基础。在陈和斯坦伯格在2014年证明了r轮KAC的单用户（su）紧密安全性之后，它在更为现实的条件下的扩展已成为新的研究挑战。目前最先进的方法包括（i）由于等人提出的单个置换，（ii）由卢昊和提萨罗提出的mu安全性，以及（iii）由提萨罗和张提出的相关子密钥。然而，先前的研究独立地考虑了这些条件，而所有这些条件下r轮KAC的紧密安全界是一个开放的研究问题。我们通过给出一个新的mu界来解决这个问题，其n位消息空间的界约为\(q \cdot \left( \frac{p + r q}{2^n} \right) ^r\)，其中p和q分别是原始查询和构造查询的数量。这个界确保了在\(O(2^\frac{rn}{r+1})\)的查询复杂度下的安全性，并且是紧密的，与常规攻击界相匹配。此外，我们的结果容易扩展到r轮可调节KAC，当其子密钥由一个调整函数生成时，其子密钥是r个独立的。证明基于最初用于三重加密的mu安全性分析的重新采样方法。它被扩展到任意轮数，成为实现新界的核心技术。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_4](https://doi.org/10.1007/978-3-031-58716-0_4)
## Partial Sums Meet FFT: Improved Attack on 6-Round AES.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#partial-sums-meet-fft-improved-attack-on-6-round-aes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#partial-sums-meet-fft-improved-attack-on-6-round-aes)**
### 作者
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
* Shibam Ghosh, Computer Science Department, University of Haifa, Haifa, Israel
* Victor Mollimard, Computer Science Department, University of Haifa, Haifa, Israel
* Nathan Keller, Department of Mathematics, Bar Ilan University, Ramat Gan, Israel
* Avichai Marmor, Department of Mathematics, Bar Ilan University, Ramat Gan, Israel
* Gaëtan Leurent, Inria, Paris, France
### 摘要
> 部分和密码分析技术由Ferguson等人于2000年首次提出，他们使用它来破解6轮AES，时间复杂度为\(2^{52}\)个S盒计算 - 这是一个目前仍未被超越的记录。2014年，Todo和Aoki表明，对于6轮AES，可以用基于快速傅里叶变换（FFT）的技术代替部分和，从而导致具有可比复杂度的攻击。
> 
> 在本文中，我们展示了部分和技术可以与基于FFT的技术相结合，以得到两种技术的最佳效果。使用我们的组合技术，我们获得了对6轮AES的攻击，其复杂度约为\(2^{46.4}\)个加法。我们实验完全实现了攻击，以及部分和攻击和Todo-Aoki攻击，并证实我们的攻击将6轮AES的最佳已知攻击提高了超过32倍。
> 
> 我们期望我们的技术可以用来显着增强利用部分和技术的许多攻击。为了证明这一点，我们使用我们的技术将7轮Kuznyechik的最佳已知攻击提高了超过80倍。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_5](https://doi.org/10.1007/978-3-031-58716-0_5)
## New Records in Collision Attacks on SHA-2.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#new-records-in-collision-attacks-on-sha-2) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#new-records-in-collision-attacks-on-sha-2)**
### 作者
* Yingxin Li, Shanghai Key Laboratory of Trustworthy Computing, Software Engineering Institute, East China Normal University, Shanghai, China
* Gaoli Wang, Shanghai Key Laboratory of Trustworthy Computing, Software Engineering Institute, East China Normal University, Shanghai, China
* Fukang Liu, Tokyo Institute of Technology, Tokyo, Japan
### 摘要
> SHA-2家族包括SHA-224、SHA-256、SHA-384、SHA-512、SHA-512/224和SHA-512/256，是由NIST发布的美国联邦标准。特别是，毫无疑问SHA-256是现实世界应用中最重要的哈希函数之一。与SHA-1相比，由于其复杂的设计，自ASIACRYPT 2015以来对SHA-2的碰撞攻击几乎没有任何进展。在这项工作中，我们重新挑战并旨在显著改进对SHA-2家族的碰撞攻击。首先，我们观察了许多对SHA-2的现有攻击，发现目前用于搜索SHA-2特征的高级工具已经达到瓶颈。具体来说，无法找到更长的微分特征，这导致碰撞攻击无法达到更多步骤。为了解决这个问题，我们采用Liu等人的基于MILP的方法，并将其与SAT/SMT一起实现到SHA-2中，同时我们还增加了更多技术来检测SHA-2特征中的矛盾。这回答了刘等人在文章中留下的一个未解决的问题，即将该技术应用于SHA-2。借助这个基于SAT/SMT的工具，我们以一种专门的方式控制其稀疏性来搜索SHA-2的特征。结果，我们成功地找到了39步SHA-256的第一个实用的半自由起始（SFS）碰撞消息对，改进了2013年EUROCRYPT发布的最佳38步SFS碰撞攻击。此外，我们还报告了首个40步SHA-224自由起始（FS）碰撞攻击，而之前的最佳理论40步攻击的时间复杂度为\(2^{110}\)。此外，还首次能对28步和31步的SHA-512进行实用和理论上的碰撞攻击，这改进了ASIACRYPT 2015中仅达到27步的SHA-512的最佳碰撞攻击。总之，通过新技术找到SHA-2的特征，我们在EUROCRYPT 2013和ASIACRYPT 2015取得的重大成就之后，在SHA-2的分析方面取得了一些显著的进展。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_6](https://doi.org/10.1007/978-3-031-58716-0_6)
## Improving Linear Key Recovery Attacks Using Walsh Spectrum Puncturing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#improving-linear-key-recovery-attacks-using-walsh-spectrum-puncturing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#improving-linear-key-recovery-attacks-using-walsh-spectrum-puncturing)**
### 作者
* Antonio Flórez-Gutiérrez, NTT Social Informatics Laboratories, Tokyo, Japan
* Yosuke Todo, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 在一些线性密钥恢复攻击中，确定线性逼近值的函数从明文、密文和密钥中替换为类似映射，以改善时间或内存复杂性，但以增加数据复杂性为代价。我们提出了一个用于密钥恢复映射替换的通用框架，并引入了Walsh谱穿孔技术，该技术包括从此映射的Walsh谱中移除精心选择的系数。通过描述对缩减轮次的Serpent（包括对192位密钥变体的首次12轮攻击）、GIFT-128和Noekeon以及完整DES的改进攻击来展示这种技术的能力。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_7](https://doi.org/10.1007/978-3-031-58716-0_7)
## A Generic Algorithm for Efficient Key Recovery in Differential Attacks - and its Associated Tool.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#a-generic-algorithm-for-efficient-key-recovery-in-differential-attacks-and-its-associated-tool) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#a-generic-algorithm-for-efficient-key-recovery-in-differential-attacks-and-its-associated-tool)**
### 作者
* Christina Boura, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, 78000, Versailles, France
* Rachelle Heim Boissier, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, 78000, Versailles, France
* Nicolas David, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* Patrick Derbez, Univ Rennes, Inria, CNRS, IRISA, Rennes, France
### 摘要
> 差分密码分析是一种针对分块密码的老牌攻击方式。虽然多年来推出了不同技术以提高此攻击的复杂度，但关键恢复阶段仍是一个繁琐且容易出错的过程。在本研究中，我们提出了一种新算法及其相关工具，可在给定区分器的情况下输出有效的密钥猜测策略。我们的工具可应用于线性层由位置换组成，密钥计划是线性或几乎线性的SPN密码。它不仅可用于帮助密码分析员找到给定密码的最佳差分攻击，还可帮助设计人员进行安全分析。我们将我们的工具应用于四个目标：RECTANGLE、PRESENT-80、SPEEDY-7-192和GIFT-64。我们将先前对RECTANGLE-128的最佳攻击扩展了一轮，将先前对PRESENT-80的最佳差分攻击扩展了2轮。我们改进了对SPEEDY的攻击中的先前密钥恢复步骤，并为RECTANGLE-80和GIFT提出了更有效的密钥恢复策略。我们的工具对大多数目标只需在一秒钟内输出结果。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_8](https://doi.org/10.1007/978-3-031-58716-0_8)
## Tight Security of TNT and Beyond - Attacks, Proofs and Possibilities for the Cascaded LRW Paradigm.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#tight-security-of-tnt-and-beyond-attacks-proofs-and-possibilities-for-the-cascaded-lrw-paradigm) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#tight-security-of-tnt-and-beyond-attacks-proofs-and-possibilities-for-the-cascaded-lrw-paradigm)**
### 作者
* Ashwin Jha, Ruhr-Universtät Bochum, Bochum, Germany
* Ashwin Jha, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Mustafa Khairallah, Seagate Research Group, Singapore, Singapore
* Mustafa Khairallah, Lund University, Lund, Sweden
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
* Abishanka Saha, Indian Statistical Institute, Kolkata, India
### 摘要
> Liskov、Rivest 和 Wagner 奠定了可调块密码（TBC）的理论基础。在一篇开创性的论文中，他们提出了两种（至多）生日界限安全设计策略 LRW1 和 LRW2，将任何块密码转换为 TBC。几项后续研究考虑了 LRW 类型 TBC 的级联以构建超越生日界限（BBB）安全的 TBC。Landecker 等人证明了仅通过两轮级联 LRW2 就可以获得 BBB 安全性。Bao 等人在 LRW1 的情境下进行了类似的研究，采用 TNT — LRW1 的三轮级联 — 同样被证明达到 BBB 安全性。在本文中，我们提出了一个针对 TNT 的 CCA 区分器，通过 \( O(2^{n/2}) \) 查询获得了非可忽略的优势，直接反驳了设计者所声称的安全性。我们提供了严格和完整的优势计算，并进行了实验证实，进一步支持我们的说法。接着，我们为 TNT 及其单密钥变体提供了生日界限 CCA 安全性的新而简单的证明，证实了我们攻击的严密性。更进一步地，我们展示了只需添加一个额外的块密码调用，即称为 \({4}\hbox {-}\textsf {LRW1} \)，不仅能够重新确立 BBB 安全性，还能将其扩大至 \( 2^{3n/4} \) 次查询。作为这一努力的副产品，我们提出了级联 LRW 设计哲学的新抽象，称为 LRW+ 范式，包括夹在一对可调通用哈希之间的两个块密码调用。这有助于我们提供一个模块化证明，涵盖了所有至少具有 2 轮的级联 LRW 构造，包括 \( {4}\hbox {-}\textsf {LRW1} \) 及其更为成熟的相关方面，即众所周知的 CLRW2 或更适当地说是 \( {2}\hbox {-}\textsf {LRW2} \)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_9](https://doi.org/10.1007/978-3-031-58716-0_9)
## Improved Differential Meet-in-the-Middle Cryptanalysis.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#improved-differential-meet-in-the-middle-cryptanalysis) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#improved-differential-meet-in-the-middle-cryptanalysis)**
### 作者
* Zahra Ahmadian, Shahid Beheshti University, Tehran, Iran
* Akram Khalesi, Shahid Beheshti University, Tehran, Iran
* Hossein Moghimi, Shahid Beheshti University, Tehran, Iran
* Dounia M’Foukh, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
### 摘要
> 在这篇论文中，我们将Crypto 2023提出的差分Meet-in-the-Middle攻击方法扩展到截断差分攻击，并且引入了三个新的想法来改进这种类型的攻击：我们展示了如何添加比原始论文更长的结构，展示了如何通过引入一些概率来改进密钥恢复步骤，并将此类攻击与状态测试技术相结合，该技术是在不可能差分攻击背景下引入的。此外，我们开发了一个基于MILP的工具，用于自动化搜索带有优化整体复杂性的截断差分MITM攻击，其中包含了一些提出的改进。由于这一点，我们可以构建对密码CRAFT的已知最佳攻击，达到了23轮，比之前的21轮；我们提供了一种新的对23轮SKINNY-64-192的攻击，并改进了对SKINNY-128-384的最佳攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_10](https://doi.org/10.1007/978-3-031-58716-0_10)
## Post-quantum Security of Tweakable Even-Mansour, and Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#post-quantum-security-of-tweakable-even-mansour-and-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#post-quantum-security-of-tweakable-even-mansour-and-applications)**
### 作者
* Gorjan Alagic, University of Maryland, College Park, USA
* Chen Bai, University of Maryland, College Park, USA
* Gorjan Alagic, NIST, Gaithersburg, USA
* Jonathan Katz, Google, Washington DC, USA
* Christian Majenz, Technical University of Denmark, Kongens Lyngby, Denmark
* Patrick Struck, University of Konstanz, Konstanz, Germany
### 摘要
> 可调整的Even-Mansour结构从公共随机置换生成可调整的分组密码。我们证明了在攻击者对于随机置换具有量子访问但仅对秘密密钥构造具有经典访问的情况下，可调整的Even-Mansour的后量子安全性，这是大多数实际应用的相关设置。然后，我们使用我们的结果证明了在相同模型中Chaskey（一种ISO标准化的MAC）、Elephant（NIST轻量级加密标准化工作的AEAD决赛选手）以及Minalpher的变体（CAESAR竞赛第二轮候选的AEAD）的对称密钥方案的后量子安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_11](https://doi.org/10.1007/978-3-031-58716-0_11)
## Probabilistic Extensions: A One-Step Framework for Finding Rectangle Attacks and Beyond.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#probabilistic-extensions-a-one-step-framework-for-finding-rectangle-attacks-and-beyond) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#probabilistic-extensions-a-one-step-framework-for-finding-rectangle-attacks-and-beyond)**
### 作者
* Qianqian Yang, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Lei Hu, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Ling Song, College of Cyber Security, Jinan University, Guangzhou, China
* Yincen Chen, College of Cyber Security, Jinan University, Guangzhou, China
* Jian Weng, College of Cyber Security, Jinan University, Guangzhou, China
* Ling Song, National Joint Engineering Research Center of Network Security Detection and Protection Technology, Jinan University, Guangzhou, China
* Yincen Chen, National Joint Engineering Research Center of Network Security Detection and Protection Technology, Jinan University, Guangzhou, China
* Jian Weng, National Joint Engineering Research Center of Network Security Detection and Protection Technology, Jinan University, Guangzhou, China
* Jian Weng, Guangdong Key Laboratory of Data Security and Privacy Preserving, Jinan University, Guangzhou, China
* Qianqian Yang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Lei Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 在微分攻击中，通常涉及将区分器前后以概率1扩展一些轮并恢复涉及扩展部分的密钥。特别是在矩形攻击中，可以采用整体密钥恢复策略，以产生最适合给定区分器的有效攻击。在本文中，我们将区分器和扩展部分视为一个整体实体，并提供了一个用于查找矩形攻击的一步框架，以便减少总体复杂度或攻击更多轮。在该框架中，我们建议允许在扩展部分中进行概率微分传播，并结合整体恢复策略。此外，我们引入“分裂和聚拢技术”以进一步降低时间复杂度。除矩形攻击外，我们将这些基础概念扩展到包括微分攻击。为了展示我们框架的实用性，我们将其应用于Deoxys-BC-384、SKINNY、ForkSkinny和CRAFT，实现了一系列精细和改进的矩形攻击和微分攻击。值得注意的是，我们获得了对Deoxys-BC-384的第一个15轮攻击，将其安全边界缩小到仅剩一轮。此外，我们对CRAFT的微分攻击扩展到23轮，比先前最佳攻击多了两轮。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_12](https://doi.org/10.1007/978-3-031-58716-0_12)
## Massive Superpoly Recovery with a Meet-in-the-Middle Framework - Improved Cube Attacks on Trivium and Kreyvium.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#massive-superpoly-recovery-with-a-meet-in-the-middle-framework-improved-cube-attacks-on-trivium-and-kreyvium) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#massive-superpoly-recovery-with-a-meet-in-the-middle-framework-improved-cube-attacks-on-trivium-and-kreyvium)**
### 作者
* Jiahui He, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Kai Hu, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Hao Lei, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, Quan Cheng Shandong Laboratory, Jinan, China
* Jiahui He, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Kai Hu, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Hao Lei, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Kai Hu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### 摘要
> 魔方攻击通过恢复输出比特与明文/IV子集（也称为“魔方”）相关的超多项式系数来提取秘密密钥位的信息。虽然分割性质提供了检测超多项式结构的有效方法，但如果轮数足够多，超多项式的恢复仍可能成本过高。特别地，本文提出了核心单项式预测（CMP），它是单项式预测（MP）的缩减版，为效率牺牲了精度，但最终在Trivium的848轮停滞不前，这是在2022年ASIACRYPT上提出的。
> 
> 在本文中，我们通过阐明核心单项式路径的代数意义，为CMP提供了新的见解。我们证明，通过提取所有核心单项式路径，仅依靠CMP的方法就足以恢复超多项式，从而证明CMP可以像MP一样达到完美的精度。我们进一步揭示，CMP本质上仍是MP，但对目标函数进行了变量替换。受先前文献中广泛使用的分而治之策略的启发，我们设计了一个meet-in-the-middle（MITM）框架，在其中可以嵌入基于CMP的方法以实现加速。
> 
> 为了说明这些新技术的威力，我们将MITM框架应用于Trivium、Grain-128AEAD和Kreyvium。结果不仅可以减少超多项式恢复的先前计算成本（例如，在192轮Grain-128AEAD上超多项式恢复的速度提高了5倍），还成功地恢复了Trivium的851轮和Kreyvium的899轮的超多项式。这分别比先前最佳结果多3轮和4轮。使用2021年EUROCRYPT提出的内存高效的Möbius变换，即使超多项式可能包含超过2^40的单项式，我们也可以对目标密码执行密钥恢复攻击。这导致了目标密码上最好的魔方攻击。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_13](https://doi.org/10.1007/978-3-031-58716-0_13)
## Diving Deep into the Preimage Security of AES-Like Hashing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#diving-deep-into-the-preimage-security-of-aes-like-hashing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#diving-deep-into-the-preimage-security-of-aes-like-hashing)**
### 作者
* Danping Shi, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Danping Shi, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Jian Guo, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Tianyu Zhang, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Shiyao Chen, Strategic Centre for Research in Privacy-Preserving Technologies and Systems, Nanyang Technological University, Singapore, Singapore
* Shiyao Chen, Digital Trust Centre, Nanyang Technological University, Singapore, Singapore
* Eik List, Weimar, Germany
### 摘要
> 自从Sasaki和Aoki的开创性作品以来，Meet-in-the-Middle（MITM）攻击已被认为是针对哈希函数的预像和碰撞攻击的有效技术。在Eurocrypt 2021上，Bao等人自动化了AES-like哈希的MITM攻击，并改进了最佳手动结果。攻击框架已经由之后的作品提供，但远未完成。本文介绍了三个关键贡献，致力于进一步推广MITM的思想并在AES-like哈希的自动模型上进行精化。(1)我们将S-box线性化引入到AES-like哈希的MITM伪预像攻击中。该技术与叠加状态很好地配合使用，以合理的成本保留S-box之后的信息。(2)我们提出了分布式初始结构，这是对初始状态的原始概念的扩展，以更灵活的方式选择自由度的初始值以扩大搜索空间。(3)我们利用构造中的加密和密钥调度之间的结构相似性（例如Whirlpool和Streebog）更准确地建模传播并避免重复的成本。装备这些创新技术，我们进一步强化了MITM框架，并提高了针对AES-like设计的预像和碰撞攻击结果。我们获得了对10轮AES-192，10轮Rijndael-192/256和7.75轮Whirlpool的第一个预像攻击，在5轮，6轮Whirlpool和7.5轮，8.5轮Streebog的预像攻击的时间和/或内存复杂性降低，以及在6轮和6.5轮Whirlpool上改进了碰撞攻击。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_14](https://doi.org/10.1007/978-3-031-58716-0_14)
## Twinkle: Threshold Signatures from DDH with Full Adaptive Security.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#twinkle-threshold-signatures-from-ddh-with-full-adaptive-security) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#twinkle-threshold-signatures-from-ddh-with-full-adaptive-security)**
### 作者
* Renas Bacho, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Renas Bacho, Saarland University, Saarbrücken, Germany
* Benedikt Wagner, Saarland University, Saarbrücken, Germany
### 摘要
> Sparkle是配对无关离散对数环境下的第一个经证明在自适应腐败下安全的门限签名方案（Crites，Komlo，Maller，密碼學2023），但在不使用代数群模型的情况下，Sparkle的证明对对手施加了不可取的限制。即对于签名阈值\(t<n\)，对手被限制最多腐败t/2个方。此外，Sparkle的证明依赖于强一次假设。
> 
> 在本文中，我们提出了Twinkle，这是一个新的配对无关的门限签名方案，它克服了这些限制。Twinkle是第一个配对无关的方案，其在最多t个自适应腐败下拥有安全证明，而且不依赖于代数群模型。它也是第一个根据广泛研究的非交互式假设——决策性Diffie-Hellman（DDH）假设具有自适应腐败的安全证明的方案。
> 
> 我们通过两个步骤实现了我们的结果。首先，我们设计了一个基于线性函数的通用方案，满足几个抽象属性，并在适当的一次假设下证明了其自适应安全性与该函数相关。在这个证明的背景下，我们还发现了Sparkle安全证明中的一个漏洞，并开发了新技术来克服这个问题。其次，我们为具有相应一次假设的函数给出了一个合适的实例化，该假设从DDH得出。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_15](https://doi.org/10.1007/978-3-031-58716-0_15)
## Toothpicks: More Efficient Fork-Free Two-Round Multi-signatures.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#toothpicks-more-efficient-fork-free-two-round-multi-signatures) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#toothpicks-more-efficient-fork-free-two-round-multi-signatures)**
### 作者
* Jiaxin Pan, University of Kassel, Kassel, Germany
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarland University, Saarbrücken, Germany
### 摘要
> 紧密安全的密码方案可以使用标准参数实现，同时还要通过分析来支持足够高的安全级别。在最近的研究中，Pan和Wagner（Eurocrypt 2023）提出了第一个不需要配对的紧密安全的两轮多重签名方案，名为Chopsticks。虽然这是一个有趣的理论上的第一步，但Chopsticks的效率远低于其非紧密的对应方案。
> 
> 在这项工作中，我们通过提出一种新的紧密安全的两轮多重签名方案来弥合这一差距，该方案和非紧密方案一样高效。我们的方案基于不需要配对的DDH假设。与Chopsticks相比，我们将签名大小减少了3倍以上，通信复杂度减少了2倍以上。
> 
> 技术上，我们是这样实现的：（1）我们开发了一种新的伪随机路径技术，与Chopsticks中的伪随机匹配技术相对。 （2）我们构建了一个更高效的承诺方案，具有合适的属性，这在我们的方案和Chopsticks中都是一个重要的原语。令人惊讶的是，我们发现承诺方案不必是有约束力的，从而实现了我们的高效构建。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_16](https://doi.org/10.1007/978-3-031-58716-0_16)
