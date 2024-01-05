# Crypto[2022-1]
## Rotational Differential-Linear Distinguishers of ARX Ciphers with Arbitrary Output Linear Masks.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#rotational-differential-linear-distinguishers-of-arx-ciphers-with-arbitrary-output-linear-masks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#rotational-differential-linear-distinguishers-of-arx-ciphers-with-arbitrary-output-linear-masks)**
### 作者
* Zhongfeng Niu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yunwen Liu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zhongfeng Niu, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Yunwen Liu, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Zhongfeng Niu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yunwen Liu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yunwen Liu, College of Liberal Arts and Science, National University of Defense Technology, Changsha, China
* Chao Li, College of Liberal Arts and Science, National University of Defense Technology, Changsha, China
* Siwei Sun, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Yunwen Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
### 摘要
> 旋转微分线性攻击是欧洲密码学会议2021提出的一种推广的微分线性攻击方法，通过用旋转微分替代攻击的微分部分。在欧洲密码学会议2021上，刘等人基于Morawiecki等人的技术（FSE 2013）提出了一种评估旋转微分线性相关性的方法，用于输出线性掩码为单位向量的特殊情况。利用这种方法，发现了一些对FRIET、Xoodoo和Alzette具有强大（旋转）微分线性区分能力的旋转微分区分器。然而，如何计算任意输出掩码的旋转微分线性相关性问题仍然悬而未决。在本文中，我们通过提出一种高效的算法来计算任意输出线性掩码的（旋转）微分线性相关性，从而部分解决了这个开放性问题。基于这个算法，我们还导出了一种评估ARX密码算法（旋转）微分线性相关性的技术。我们将这个技术应用于Alzette、SipHash、ChaCha和SPECK。结果表明，我们发现了显著改进的（旋转）微分线性区分器，包括确定性区分器。本文的所有结果都是实用的，并经过实验证实了我们方法的有效性。此外，我们还试图解释FSE 2008、FSE 2016和CRYPTO 2020中针对ChaCha使用的实验区分器。预测的相关性与实验结果接近。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_1](https://doi.org/10.1007/978-3-031-15802-5_1)
## Implicit White-Box Implementations: White-Boxing ARX Ciphers.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#implicit-white-box-implementations-white-boxing-arx-ciphers) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#implicit-white-box-implementations-white-boxing-arx-ciphers)**
### 作者
* Adrián Ranea, imec-COSIC, KU Leuven, Leuven, Belgium
* Bart Preneel, imec-COSIC, KU Leuven, Leuven, Belgium
* Joachim Vandersmissen, Atsec Information Security, Austin, USA
### 摘要
> 自从20年前发布第一份AES白盒实现以来，对于针对拥有设备完全控制权的攻击者的安全实现设计没有取得重大进展。设计现有块密码的白盒实现是一个具有挑战性的问题，因为所有提议都已被破解。到目前为止，只发表了两种白盒设计策略：CEJO框架，只能应用于具有小S-Box的密码，以及自等效编码，仅用于AES。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_2](https://doi.org/10.1007/978-3-031-15802-5_2)
## Superposition Meet-in-the-Middle Attacks: Updates on Fundamental Security of AES-like Hashing.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#superposition-meet-in-the-middle-attacks-updates-on-fundamental-security-of-aes-like-hashing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#superposition-meet-in-the-middle-attacks-updates-on-fundamental-security-of-aes-like-hashing)**
### 作者
* Danping Shi, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zhenzhen Bao, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Jian Guo, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Yi Tu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Zhenzhen Bao, Institute for Network Sciences and Cyberspace, BNRist, Tsinghua University, Beijing, China
* Danping Shi, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> Meet-in-the-Middle方法是最强大的密码分析技术之一，通过其在全MD4、MD5、Tiger、HAVAL和Haraka-512 v2哈希函数的前像攻击以及全块密码KTANTAN的密钥恢复中的应用得到证明。该方法的成功依赖于将原始问题分解为两个独立的部分，在该过程中，状态的每个活动单元仅用于表示一个部分，否则在混合后会被视为不可用。我们观察到其中的一些单元是线性混合的，并且与独立单元一样有用。这导致了超级位置状态的引入以及整套相应技术的出现，我们将其纳入到由Bao等人提出的基于MILP的搜索框架中（EUROCRYPT 2021）以及由Dong等人提出的方案中（CRYPTO 2021），并在一系列类似AES的哈希函数和块密码上找到了应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_3](https://doi.org/10.1007/978-3-031-15802-5_3)
## Triangulating Rebound Attack on AES-like Hashing.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#triangulating-rebound-attack-on-aes-like-hashing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#triangulating-rebound-attack-on-aes-like-hashing)**
### 作者
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Jian Guo, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Shun Li, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Phuong Pham, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Xiaoyang Dong, National Financial Cryptography Research Center, Beijing, China
* Shun Li, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
### 摘要
> 回跳攻击是由Mendel等人在FSE 2009年提出的，旨在利用状态的自由度在无偿的差分路径中完成一个重要的中间轮。通过Lamberger等人在ASIACRYPT 2009年和Gilbert和Peyrin在FSE 2010年发明的Super-Sbox技术，入站阶段被扩展到了2轮。在ASIACRYPT 2010中，Sasaki等人通过引入非全活跃Super-Sbox进一步减少了内存需求。在本文中，我们进一步发展了这一研究方向，通过引入Super-Inbound，它能够连接多个1轮或2轮（非全活跃）Super-Sbox入站阶段，充分利用状态和密钥的自由度，但不使用大量内存。这本质上将入站阶段延长了最多3轮。我们将这种技术应用于几个类似AES的哈希函数上，找到了经典或量子碰撞，并在目标包括AES-128和SKINNY哈希模式、Saturnin-Hash和Grøstl-512中攻击了1到5轮。为了证明我们攻击的正确性，在经典设置中实现了6轮AES-128-MMO/MP的半自由启动碰撞，估计时间复杂度为\(2^{24}\)，并在标准PC上立即找到了一个示例对。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_4](https://doi.org/10.1007/978-3-031-15802-5_4)
## Public Randomness Extraction with Ephemeral Roles and Worst-Case Corruptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#public-randomness-extraction-with-ephemeral-roles-and-worst-case-corruptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#public-randomness-extraction-with-ephemeral-roles-and-worst-case-corruptions)**
### 作者
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* João Ribeiro, Carnegie Mellon University, Pittsburgh, PA, USA
* Maciej Obremski, National University of Singapore, Singapore, Singapore
### 摘要
> 我们提出了一个简单的信息论模型，用于随机抽取，其灵感来自于在区块链环境中生成公开可验证的随机数的任务，与You-Only-Speak-Once (YOSO)协议（CRYPTO 2021）密切相关。为了避免拒绝服务攻击，参与方只能说一次，并按顺序通过广播传递公共值和将秘密值转发给未来参与方。此外，一个无限制的对手可以破坏最多t个被选择的子集的任意一方。相比之下，现有的YOSO协议只处理随机破坏。作为一个显著的例子，考虑到最差情况的破坏可以减少我们对角色分配机制的信任，该机制在YOSO中被假定为完全随机。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_5](https://doi.org/10.1007/978-3-031-15802-5_5)
## (Nondeterministic) Hardness vs. Non-malleability.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#nondeterministic-hardness-vs-non-malleability) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#nondeterministic-hardness-vs-non-malleability)**
### 作者
* Marshall Ball, New York University, New York, USA
* Dana Dachman-Soled, University of Maryland, College Park, USA
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 我们提出了第一种真正明确的非可塑代码结构，用于抵御由多项式规模受限电路的篡改。这些对象暗示了未经证明的电路下界，我们的构建在\(\textsf{E}\)需要指数规模的非确定性电路的假设条件下是安全的，这是从去随机性文献中得出的前提。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_6](https://doi.org/10.1007/978-3-031-15802-5_6)
## Short Leakage Resilient and Non-malleable Secret Sharing Schemes.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#short-leakage-resilient-and-non-malleable-secret-sharing-schemes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#short-leakage-resilient-and-non-malleable-secret-sharing-schemes)**
### 作者
* Nishanth Chandran, Microsoft Research, Bengaluru, India
* Sai Lakshmi Bhavana Obbattu, Microsoft Research, Bengaluru, India
* Bhavana Kanukurthi, Department of Computer Science and Automation, Indian Institute of Science, Bengaluru, India
* Sruthi Sekar, UC Berkeley, Berkeley, CA, USA
### 摘要
> 泄漏耐性密封（LRSS）允许经销商在n方之间共享一个秘密，以使得任何被授权的方的子集都能从他们的份额中恢复该秘密，同时对于获得任何未经授权方的份额以及其他份额的有限泄漏的对手来说，对于该秘密不了解任何信息。非可塑密封（NMSS）提供了一个保证，即即使被对手篡改的份额也能够重新构建为原始消息或与之独立的内容。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_7](https://doi.org/10.1007/978-3-031-15802-5_7)
## Cryptography from Pseudorandom Quantum States.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#cryptography-from-pseudorandom-quantum-states) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#cryptography-from-pseudorandom-quantum-states)**
### 作者
* Prabhanjan Ananth, UCSB, Santa Barbara, USA
* Luowen Qian, Boston University, Boston, USA
* Henry Yuen, Columbia University, New York, USA
### 摘要
> 虚拟随机态是由Ji、Liu和Song（Crypto'18）引入的，它们是计算效率高且在计算上不可区分于Haar随机态的量子态。一次性函数暗示了虚拟随机态的存在，但是Kretschmer（TQC'20）最近构造了一个相对于其不存在一次性函数的预示符，并且虚拟随机态仍然存在。受此启发，我们研究了将有趣的密码学任务建立在虚拟随机态之上的有趣可能性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_8](https://doi.org/10.1007/978-3-031-15802-5_8)
## Certified Everlasting Zero-Knowledge Proof for QMA.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#certified-everlasting-zero-knowledge-proof-for-qma) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#certified-everlasting-zero-knowledge-proof-for-qma)**
### 作者
* Taiga Hiroka, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Ryo Nishimaki, NTT Corporation, Tokyo, Japan
* Takashi Yamakawa, NTT Corporation, Tokyo, Japan
### 摘要
> 在已知的经典零知识证明 \(NP\) 的构造中，要么具有零知识或声明性只针对计算有界的对手。实际上，对于 \(NP\)，在经典验证方面同时实现统计零知识和统计声明是不可能的，除非多项式层次结构崩溃，并且即使使用量子验证方也被认为是不可能的。在这项工作中，我们引入了一个新的折衷方案，称为 \({QMA}\) 的认证永久证明（Certified Everlasting Zero-Knowledge Proof)。它是一种针对 \({QMA}\) 的计算零知识证明，但是验证方发出了一个经典证书，证明验证方已经删除了其量子信息。如果证书有效，即使是不受限制的恶意验证器也不能学到超出声明的有效性的任何信息。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_9](https://doi.org/10.1007/978-3-031-15802-5_9)
## Quantum Commitments and Signatures Without One-Way Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#quantum-commitments-and-signatures-without-one-way-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#quantum-commitments-and-signatures-without-one-way-functions)**
### 作者
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 在古典世界中，承诺的存在等价于单向函数的存在。然而，在量子环境中，目前尚不知道承诺是否意味着存在单向函数，但已知的所有量子承诺构建都至少使用了单向函数。量子世界中的承诺是否真正需要单向函数呢？在这项研究中，我们展示了如果伪随机量子态存在，则存在具有计算隐藏和统计绑定的非交互式量子承诺（用于经典消息）。伪随机量子态是一组能够高效生成的量子态，并且它们的多项式数量的副本与相同数量的哈尔随机态的副本在计算上无法区分[Ji，Liu和Song，CRYPTO 2018]。众所周知，即使对于一个量子预言机而言，伪随机量子态也可能存在，即\(\textbf{BQP}=\textbf{QMA}\)[Kretschmer，TQC 2021]，这意味着伪随机量子态即使在不存在量子安全经典密码原语的情况下也可能存在。因此，我们的结果表明即使不存在量子安全的经典密码原语，量子承诺仍然可能存在。特别地，在不存在量子安全的单向函数的情况下，量子承诺也可能存在。在这项研究中，我们还考虑了数字签名，这是密码学中的其他基本原语。我们展示了如果伪随机量子态存在，则存在具有量子公钥的一次性安全数字签名。在古典设置中，数字签名的存在等价于单向函数的存在。然而，我们的结果表明，即使不存在量子安全的经典密码原语（包括量子安全的单向函数），量子签名仍然可能存在。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_10](https://doi.org/10.1007/978-3-031-15802-5_10)
## Semi-quantum Tokenized Signatures.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#semi-quantum-tokenized-signatures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#semi-quantum-tokenized-signatures)**
### 作者
* Omri Shmueli, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 量子令牌化签名方案（Ben-David和Sattath，QCrypt 2017）允许发送方生成和分发量子不可克隆状态，使其持有者有一次性权限以发送方的名义签署。这样的方案是公钥量子货币方案的加强，因为它们意味着在系统中某些通信通道可以是经典的公钥量子货币。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_11](https://doi.org/10.1007/978-3-031-15802-5_11)
## Structure-Aware Private Set Intersection, with Applications to Fuzzy Matching.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#structure-aware-private-set-intersection-with-applications-to-fuzzy-matching) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#structure-aware-private-set-intersection-with-applications-to-fuzzy-matching)**
### 作者
* Gayathri Garimella, Oregon State University, Corvallis, USA
* Mike Rosulek, Oregon State University, Corvallis, USA
* Jaspal Singh, Oregon State University, Corvallis, USA
### 摘要
> 在两方私人集合交集（PSI）中，Alice持有一个集合X，Bob持有一个集合Y，他们只了解\(X \cap Y\)的内容。我们引入了结构感知PSI协议，利用Alice的集合X已公开具有某种结构的情况。结构感知PSI的目标是使通信与Alice集合的描述大小而不是基数相匹配。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_12](https://doi.org/10.1007/978-3-031-15802-5_12)
## Two-Round MPC Without Round Collapsing Revisited - Towards Efficient Malicious Protocols.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#two-round-mpc-without-round-collapsing-revisited-towards-efficient-malicious-protocols) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#two-round-mpc-without-round-collapsing-revisited-towards-efficient-malicious-protocols)**
### 作者
* Huijia Lin, University of Washington, Seattle, USA
* Tianren Liu, CFCS, Peking University, Beijing, China
### 摘要
> 近期的研究在构建轮数最优、双轮多方计算（MPC）协议方面取得了令人兴奋的进展。然而，迄今为止，大多数提案仍然复杂且低效。在本研究中，我们改进了具有诚实多数和恶意安全性的双轮MPC的简洁性和效率。我们的协议利用随机神谕（\({\textsf{RO}}\)\)）和一种Oblivious Linear Evaluation（\(\textsf{OLE}\)）的推广，称为张量\(\textsf{OLE}\)，在有限域\(\mathbb {F}\)上实现了以下目标：
> 
> - 保证计算的正确性和隐私性。
> 
> - 具有高效的通信和计算复杂性。
> 
> - 在恶意安全模型下，防止对协议的攻击，例如拜占庭故障。
> 
> 通过引入张量\(\textsf{OLE}\)技术，我们可以将计算分为多个子计算，使每个参与方只需进行一次广播和一次私有计算，从而降低了协议的复杂性。此外，在构建证明协议方面，我们利用了随机神谕\({\textsf{RO}}\)，用于生成公开的行为证据，以验证参与方的行为。
> 
> 我们通过对之前提出的协议进行实验评估，证明了我们的方案在效率和安全性方面的改进。实验结果显示，我们的协议在处理大规模输入时具有较低的通信和计算开销。我们还提供了数学证明和详细的技术分析，验证了我们改进的协议的安全性和正确性。
> 
> 本研究的贡献在于提出了一种简单且高效的两轮MPC协议方案，适用于具有诚实多数和恶意安全性的场景，并且通过实验证明了其可行性和效果。我们的工作为进一步研究和应用多方计算提供了有价值的参考和基础。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_13](https://doi.org/10.1007/978-3-031-15802-5_13)
## More Efficient Dishonest Majority Secure Computation over $\mathbb {Z}_{2^k}$ via Galois Rings.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#more-efficient-dishonest-majority-secure-computation-over-mathbb-z-2-k-via-galois-rings) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#more-efficient-dishonest-majority-secure-computation-over-mathbb-z-2-k-via-galois-rings)**
### 作者
* Daniel Escudero, J.P. Morgan AI Research, New York, USA
* Chaoping Xing, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, China
* Chen Yuan, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, China
### 摘要
> 在这项工作中，我们提出了一种新颖的秘密多方计算协议，适用于不诚实的多数设定下的主动安全，其中计算域是一个类型为 \(\mathbb {Z}_{2^k}\) 的环。与 SPD\(\mathbb {Z}_{2^k}\)（Cramer 等人，CRYPTO 2018）及其派生物考虑形式为 \(\mathbb {Z}_{2^{k+\kappa }}\) 的“扩展环”不同，我们利用了一个实际的环扩展，更准确地说，是一个大到足够程度的 Galois 环扩展 \(\mathbb {Z}_{p^k}[\texttt{X}]/(h(\texttt{X}))\)，以确保对手唯一能够通过的是可忽略概率方面进行欺骗。这些技术已经在 \(\mathbb {Z}_{p^k}\) 上的诚实多数秘密多方计算背景中使用过，据我们所知，我们的工作是首个研究这些工具在不诚实多数设定下优势的研究。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_14](https://doi.org/10.1007/978-3-031-15802-5_14)
## Parallel Repetition of (k1, đots , kμ )-Special-Sound Multi-round Interactive Proofs.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#parallel-repetition-of-k1-ots-k-special-sound-multi-round-interactive-proofs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#parallel-repetition-of-k1-ots-k-special-sound-multi-round-interactive-proofs)**
### 作者
* Thomas Attema, CWI, Cryptology Group, Amsterdam, The Netherlands
* Serge Fehr, CWI, Cryptology Group, Amsterdam, The Netherlands
* Thomas Attema, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Thomas Attema, TNO, Cyber Security and Robustness, The Hague, The Netherlands
### 摘要
> 在许多情况下，交互证明的知识误差\(\kappa\)并不小，因此需要减小。可以通过并行重复交互证明来实现这一点。虽然已经有很多研究关于并行重复对交互证明和论证的正确性误差的影响，但对知识误差的影响仍然未被广泛研究。直到最近才表明任何交互协议的t次并行重复将知识误差从\(\kappa\)降低到\(\kappa^t + \nu\)，其中\(\nu\)是任意非可忽略项。这一普遍结果并非最优的，因为它没有给出我们对典型协议所期望的知识误差\(\kappa^t\)，更糟糕的是，知识误差仍然是非可忽略的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_15](https://doi.org/10.1007/978-3-031-15802-5_15)
## Public-Coin 3-Round Zero-Knowledge from Learning with Errors and Keyless Multi-Collision-Resistant Hash.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#public-coin-3-round-zero-knowledge-from-learning-with-errors-and-keyless-multi-collision-resistant-hash) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#public-coin-3-round-zero-knowledge-from-learning-with-errors-and-keyless-multi-collision-resistant-hash)**
### 作者
* Susumu Kiyoshima, NTT Research, Sunnyvale, CA, USA
### 摘要
> 我们构建了一种公共币三轮零知识证明，假设（i）学习有错误（LWE）问题的次指数难度和（ii）对略微超多项式时间对手具有无密钥多碰撞抗性哈希函数存在。这些假设与最近用于获得私有币三轮零知识证明的假设几乎相同[Bitansky等人，STOC 2018]。（唯一的区别是，我们假设LWE问题的难度是次指数级，而不是准多项式难度。)

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_16](https://doi.org/10.1007/978-3-031-15802-5_16)
## Faster Sounder Succinct Arguments and sfIOPs.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#faster-sounder-succinct-arguments-and-sfiops) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#faster-sounder-succinct-arguments-and-sfiops)**
### 作者
* Justin Holmgren, NTT Research, Sunnyvale, USA
* Ron D. Rothblum, Technion, Haifa, Israel
### 摘要
> 简练的论证可以让证明者用极其简短的证明说服验证者某个陈述是真实的。近期大量研究的焦点是如何降低证明者为证明计算的正确性所付出的额外开销。在这里，我们所指的额外开销是指证明正确性所花费的成本与原始计算成本相比的比值。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_17](https://doi.org/10.1007/978-3-031-15802-5_17)
## Succinct Interactive Oracle Proofs: Applications and Limitations.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#succinct-interactive-oracle-proofs-applications-and-limitations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#succinct-interactive-oracle-proofs-applications-and-limitations)**
### 作者
* Shafik Nassar, Technion, Haifa, Israel
* Ron D. Rothblum, Technion, Haifa, Israel
### 摘要
> 交互式Oracle证明（IOPs）是一种将交互式证明和PCPs的关键特性结合的新型证明系统：通过与不可信的证明者互动并仅读取证明者发送的少量比特的信息，IOPs使验证者能够信服地确定一个陈述的正确性。近年来，IOPs在高效证明系统的设计中变得非常突出。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_18](https://doi.org/10.1007/978-3-031-15802-5_18)
## Candidate Witness Encryption from Lattice Techniques.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#candidate-witness-encryption-from-lattice-techniques) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#candidate-witness-encryption-from-lattice-techniques)**
### 作者
* Rotem Tsabary, Google Research, Tel Aviv, Israel
### 摘要
> 见证加密（Witness encryption，简称WE），最早由Garg、Gentry、Sahai和Waters在[GGSW13]中引入，是一种根据\(\textbf{NP}\)关系的实例进行加密的方案，解密需要知道与密文关联的实例的有效证言。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_19](https://doi.org/10.1007/978-3-031-15802-5_19)
## Securing Approximate Homomorphic Encryption Using Differential Privacy.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#securing-approximate-homomorphic-encryption-using-differential-privacy) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#securing-approximate-homomorphic-encryption-using-differential-privacy)**
### 作者
* Baiyu Li, University of California, San Diego, USA
* Daniele Micciancio, University of California, San Diego, USA
* Mark Schultz, University of California, San Diego, USA
* Jessica Sorrell, University of California, San Diego, USA
### 摘要
> 李和Micciancio最近的工作（Eurocrypt 2021）表明，传统的选择明文攻击下不可区分性（IND-CPA）的规范形式无法充分捕捉被动敌手对近似同态加密的安全性，并确定了更强的IND-CPA^D安全定义（带有解密预言机的IND-CPA）作为近似加密方案的适当安全目标。我们展示了如何将任何实现弱IND-CPA安全定义的近似同态加密方案转换为可以被证明的IND-CPA^D安全的方案，从而针对现实中的被动攻击提供了强大的保证。该方法通过使用满足适当的差分隐私（DP）概念的输出后处理机制来对解密函数的输出进行处理，添加与同态计算的最坏情况误差增长相适应的噪声量。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_20](https://doi.org/10.1007/978-3-031-15802-5_20)
## Multi-input Attribute Based Encryption and Predicate Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#multi-input-attribute-based-encryption-and-predicate-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#multi-input-attribute-based-encryption-and-predicate-encryption)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Anshu Yadav, IIT Madras, Chennai, India
* Shota Yamada, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### 摘要
> 受到一些新的自然应用的驱动，我们启动了对多输入谓词加密（\(\textsf{miPE}\)）的研究，并进一步发展了多输入属性基加密 (\(\textsf{miABE}\))。我们的贡献有:

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_21](https://doi.org/10.1007/978-3-031-15802-5_21)
## Formal Verification of Saber's Public-Key Encryption Scheme in EasyCrypt.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#formal-verification-of-sabers-public-key-encryption-scheme-in-easycrypt) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#formal-verification-of-sabers-public-key-encryption-scheme-in-easycrypt)**
### 作者
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Matthias Meijers, Eindhoven University of Technology, Eindhoven, The Netherlands
* Pierre-Yves Strub, Meta, Paris, France
### 摘要
> 在这项工作中，我们考虑了Saber的公钥加密方案的形式验证，Saber是目前被认为有潜力标准化的少数几个量子后密码套件之一。我们在EasyCrypt中对这个公钥加密方案的安全性和\(\delta \)-正确性进行了形式验证，即将公钥加密方案转化为安全和\(\delta \)-正确的密钥封装机制所需的属性。为此，我们首先为这些属性设计了手写证明，这些手写证明在细节和细致度上显着超过了目前存在的证明。随后，这些手写证明作为形式验证的指导。这一努力的结果包括手写和计算机验证的证明，证明Saber的公钥加密方案确实满足所需的安全性和正确性属性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_22](https://doi.org/10.1007/978-3-031-15802-5_22)
## SoftSpokenOT: Quieter OT Extension from Small-Field Silent VOLE in the Minicrypt Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#softspokenot-quieter-ot-extension-from-small-field-silent-vole-in-the-minicrypt-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#softspokenot-quieter-ot-extension-from-small-field-silent-vole-in-the-minicrypt-model)**
### 作者
* Lawrence Roy, Oregon State University, Corvallis, USA
### 摘要
> 给定少量的基本无关转移（OT），如何尽可能高效地生成大量的扩展OT？长期以来，这个问题一直是IKNP（Ishai等，Crypto 2003）和由它启发的协议家族的重要工作，这些协议只使用了Minicrypt假设。最近，Boyle等人（Crypto 2019）提出了Silent-OT技术，改进了IKNP，但代价是更强的、非Minicrypt假设：学习与噪声的奇偶校验（LPN）假设。我们提出了SoftSpokenOT，这是第一个在Minicrypt模型中改进IKNP通信成本的OT扩展。虽然IKNP对于每个OT的安全参数\(\lambda \)位通信，而SoftSpokenOT只需要\(\lambda / k\)位通信，其中k是任意数，代价是需要\(2^{k-1} / k\)倍的计算量。对于小的k值，这种权衡是有利的，因为IKNP风格的协议受网络限制。我们实现了SoftSpokenOT并发现，在局域网环境中，我们的协议比IKNP快近5倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_23](https://doi.org/10.1007/978-3-031-15802-5_23)
## Maliciously Secure Massively Parallel Computation for All-but-One Corruptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#maliciously-secure-massively-parallel-computation-for-all-but-one-corruptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#maliciously-secure-massively-parallel-computation-for-all-but-one-corruptions)**
### 作者
* Rex Fernando, UCLA, Los Angeles, USA
* Yuval Gelles, Hebrew University, Jerusalem, Israel
* Ilan Komargodski, Hebrew University, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, USA
* Elaine Shi, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 在过去的十年里，大规模并行计算（MPC）模型得到了广泛的应用。到现在，它被广泛认可为捕捉常用编程范例（如MapReduce、Hadoop和Spark）的正确模型，这些范例利用并行计算能力来处理和分析大量数据。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_24](https://doi.org/10.1007/978-3-031-15802-5_24)
## Le Mans: Dynamic and Fluid MPC for Dishonest Majority.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#le-mans-dynamic-and-fluid-mpc-for-dishonest-majority) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#le-mans-dynamic-and-fluid-mpc-for-dishonest-majority)**
### 作者
* Rahul Rachuri, Department of Computer Science, Aarhus University, Aarhus, Denmark
* Peter Scholl, Department of Computer Science, Aarhus University, Aarhus, Denmark
### 摘要
> 大多数多方计算（MPC）协议要求各方在整个计算过程中都保持活跃状态。将MPC部署于复杂且资源密集型的科学计算等使用案例中，增加了潜在参与者的门槛。Fluid MPC模型（《加密学2021》）通过允许参与方在其资源空闲时才参与协议，从而解决了这个问题。因此，参与方的组合会随时间动态变化。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_25](https://doi.org/10.1007/978-3-031-15802-5_25)
## Oblivious Message Retrieval.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#oblivious-message-retrieval) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#oblivious-message-retrieval)**
### 作者
* Zeyu Liu, Columbia University, New York, USA
* Eran Tromer, Columbia University, New York, USA
* Eran Tromer, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 匿名消息传递系统，如私人消息服务和隐私保护支付系统，需要一种机制让收件人能够获取发送给他们的消息，而不会泄露元数据或者让他们的消息被关联起来。收件人可以下载所有发布的消息并扫描有没有发送给他们的消息，但是在大规模情况下，沟通和计算成本都过高。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_26](https://doi.org/10.1007/978-3-031-15802-5_26)
## A More Complete Analysis of the Signal Double Ratchet Algorithm.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-1].md#a-more-complete-analysis-of-the-signal-double-ratchet-algorithm) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-1].md#a-more-complete-analysis-of-the-signal-double-ratchet-algorithm)**
### 作者
* Alexander Bienstock, New York University, New York, USA
* Jaiden Fairoze, UC Berkeley, Berkeley, USA
* Sanjam Garg, UC Berkeley, Berkeley, USA
* Sanjam Garg, NTT Research, Sunnyvale, USA
* Pratyay Mukherjee, Swirlds Labs, Dallas, USA
* Srinivasan Raghuraman, Visa Research, Palo Alto, USA
### 摘要
> Cohn-Gordon、Cremers、Dowling、Garratt 和 Stebila 的重要作品[EuroS &P 2017]以及Alwen、Coretti 和 Dodis 的研究 [EUROCRYPT 2019] 首次提供了用于研究被广泛使用的 Signal Double Ratchet（简称为 \(\textsf{DR}\)）算法的正式框架。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15802-5_27](https://doi.org/10.1007/978-3-031-15802-5_27)
