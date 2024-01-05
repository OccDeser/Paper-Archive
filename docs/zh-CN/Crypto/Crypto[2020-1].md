# Crypto[2020-1]
## Handling Adaptive Compromise for Practical Encryption Schemes.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#handling-adaptive-compromise-for-practical-encryption-schemes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#handling-adaptive-compromise-for-practical-encryption-schemes)**
### 作者
* Joseph Jaeger, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Nirvan Tyagi, Cornell Tech, New York City, USA
### 摘要
> 我们提供了一个新的定义框架，捕捉了加密方案和伪随机函数在面对能够自适应破解用户密钥的对手时的多用户安全性。我们提供了一系列的结果，建立了在随机预言机或理想密码模型下实际对称加密方案的安全性。关于自适应破解安全性的大部分分析复杂性被转移到了对较低级原语如伪随机函数的分析上。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_1](https://doi.org/10.1007/978-3-030-56784-2_1)
## Overcoming Impossibility Results in Composable Security Using Interval-Wise Guarantees.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#overcoming-impossibility-results-in-composable-security-using-interval-wise-guarantees) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#overcoming-impossibility-results-in-composable-security-using-interval-wise-guarantees)**
### 作者
* Daniel Jost, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
* Ueli Maurer, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
### 摘要
> 可组合的安全定义，有时被称为基于模拟的定义，在任何情境下都提供了强大的安全保证。然而，由于许多不可能结果，人们对它们也持有一些怀疑态度；在独立性意义上可以实现的目标，例如承诺和零知识，在可组合性（无需设置）情况下被证明是不可实现的，因为可证明地不存在有效的模拟器。特别是在自适应安全性的情境下，出现了所谓的“模拟器承诺问题”：一旦某方被破坏，有效的模拟器将无法与其破坏前的输出一致。一个自然的问题是，这种不可能结果是不可避免的，还是仅仅是框架过于限制的产物。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_2](https://doi.org/10.1007/978-3-030-56784-2_2)
## Indifferentiability for Public Key Cryptosystems.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#indifferentiability-for-public-key-cryptosystems) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#indifferentiability-for-public-key-cryptosystems)**
### 作者
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Palo Alto, USA
* Cong Zhang, Rutgers University, New Brunswick, USA
### 摘要
> 我们着手研究对公钥加密和其他公钥原语的不可区分性。我们的主要结果是定义和构建了与理想加密系统在随机预言机模型下不可区分的公钥加密系统。加密系统包括：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_3](https://doi.org/10.1007/978-3-030-56784-2_3)
## Quantifying the Security Cost of Migrating Protocols to Practice.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#quantifying-the-security-cost-of-migrating-protocols-to-practice) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#quantifying-the-security-cost-of-migrating-protocols-to-practice)**
### 作者
* Christopher Patton, Florida Institute for Cybersecurity Research, Computer and Information Science and Engineering, University of Florida, Gainesville, FL, USA
* Thomas Shrimpton, Florida Institute for Cybersecurity Research, Computer and Information Science and Engineering, University of Florida, Gainesville, FL, USA
### 摘要
> 我们提出了一个框架，用于将“参考”协议（例如学术论文中的协议）的具体安全性与某个派生的“真实”协议（例如在加密标准中出现的协议）相关联。该框架基于Maurer、Renner和Holenstein（MRH）的不可区分性框架，其应用仅专注于非互动式密码原语，如哈希函数和Feistel网络。我们对MRH进行了扩展，并支持一种明确定义的执行模型和两个组合引理，所有这些都以一种现代伪代码语言进行形式化。这些成果共同允许对密码对象（无论是交互式还是非交互式）在各个抽象层面上的基于游戏的安全属性做出精确的陈述。作为一个真实世界的应用，我们设计并证明了一个潜在的TLS 1.3扩展的密钥交换方案，将SPAKE2的口令认证结合到握手过程中，并给出了严格的安全界限。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_4](https://doi.org/10.1007/978-3-030-56784-2_4)
## The Memory-Tightness of Authenticated Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#the-memory-tightness-of-authenticated-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#the-memory-tightness-of-authenticated-encryption)**
### 作者
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Joseph Jaeger, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### 摘要
> 这篇论文启动了在内存有限环境中对认证加密（AE）的可证明安全性进行研究。最近的研究，如Tessaro和Thiruvengadam（TCC '18），Jaeger和Tessaro（EUROCRYPT '19），以及Dinur（EUROCRYPT '20），关注的是机密性，并考察了在攻击者的内存和数据复杂性之间存在权衡的方案。在这里，我们探讨这些结果和技术是否能够推广到完整的AE设置，该设置还要求完整性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_5](https://doi.org/10.1007/978-3-030-56784-2_5)
## Time-Space Tradeoffs and Short Collisions in Merkle-Damgård Hash Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#time-space-tradeoffs-and-short-collisions-in-merkle-damg-rd-hash-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#time-space-tradeoffs-and-short-collisions-in-merkle-damg-rd-hash-functions)**
### 作者
* Akshima, University of Chicago, Chicago, USA
* David Cash, University of Chicago, Chicago, USA
* Andrew Drucker, University of Chicago, Chicago, USA
* Hoeteck Wee, CNRS, ENS and PSL, Paris, France
* Hoeteck Wee, NTT Research, Palo Alto, USA
### 摘要
> 我们研究了在随机预言模型下，对具有任意S位辅助建议输入的对随机预言的Merkle-Damgård哈希函数进行碰撞查找。最近的工作表明，这样的对手可以以\(\varOmega (ST^2/2^n)\)的优势找到碰撞（相对于随机IV），其中n是输出长度，超过了生日攻击的S倍。这些攻击已被证明是最优的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_6](https://doi.org/10.1007/978-3-030-56784-2_6)
## The Summation-Truncation Hybrid: Reusing Discarded Bits for Free.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#the-summation-truncation-hybrid-reusing-discarded-bits-for-free) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#the-summation-truncation-hybrid-reusing-discarded-bits-for-free)**
### 作者
* Aldo Gunsing, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### 摘要
> 一个经过充分验证的 PRP-to-PRF 转换设计是截断法：在某个输入上评估 n 位伪随机排列，并将结果截断为 a 位。已知该构造可以实现紧密的 \(2^{n-a/2}\) 安全性。截断法因其在 GCM-SIV 密钥派生函数（ACM CCS 2015）中的应用而受到广泛关注。该密钥派生函数对 AES 进行四次评估，将输出截断为 n/2 位，并将其连接起来以获得一个 2n 位子密钥。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_7](https://doi.org/10.1007/978-3-030-56784-2_7)
## Security Analysis of NIST CTR-DRBG.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#security-analysis-of-nist-ctr-drbg) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#security-analysis-of-nist-ctr-drbg)**
### 作者
* Viet Tung Hoang, Department of Computer Science, Florida State University, Tallahassee, FL, USA
* Yaobin Shen, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, China
### 摘要
> 我们研究\(\mathsf{CTR\text{-}DRBG}\)的安全性，这是NIST推荐的伪随机数生成器（PRNG）设计之一。最近，Woodage和Shumow（Eurocrypt'19），以及Cohney等人（S&P'20）指出了NIST规范和常见实现中\(\mathsf{CTR\text{-}DRBG}\)存在一些潜在漏洞。虽然这些研究人员提出了一些对策，但修补后的\(\mathsf{CTR\text{-}DRBG}\)的安全性仍然有问题。我们的工作填补了这个空白，证明\(\mathsf{CTR\text{-}DRBG}\)满足Dodis等人（CCS'13）的鲁棒性概念，这是PRNG的标准安全目标。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_8](https://doi.org/10.1007/978-3-030-56784-2_8)
## Security Analysis and Improvements for the IETF MLS Standard for Group Messaging.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#security-analysis-and-improvements-for-the-ietf-mls-standard-for-group-messaging) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#security-analysis-and-improvements-for-the-ietf-mls-standard-for-group-messaging)**
### 作者
* Yevgeniy Dodis, New York University, New York, USA
* Yiannis Tselekounis, New York University, New York, USA
* Sandro Coretti, IOHK, Hong Kong, People’s Republic of China
* Joël Alwen, Wickr Inc., San Francisco, USA
### 摘要
> 安全消息传递（SM）协议允许用户在不可信任的基础设施上进行安全通信。与大多数其他安全通信协议（如TLS、SSH或Wireguard）相比，SM会话可能具有长期性（例如几年）和高度异步性。为了应对会话寿命内用户状态受损的可能情况，SM协议不仅保护真实性和隐私，还确保前向保密（FS）和事后状态已泄露安全（PCS）。前者确保在状态受损之前发送和接收的消息仍然安全，而后者确保用户能够从正常协议使用导致的状态受损中恢复过来。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_9](https://doi.org/10.1007/978-3-030-56784-2_9)
## Universally Composable Relaxed Password Authenticated Key Exchange.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#universally-composable-relaxed-password-authenticated-key-exchange) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#universally-composable-relaxed-password-authenticated-key-exchange)**
### 作者
* Michel Abdalla, DIENS, École normale supérieure, CNRS, PSL University, Paris, France
* Michel Abdalla, INRIA, Paris, France
* Manuel Barbosa, FCUP and INESC TEC, Porto, Portugal
* Tatiana Bradley, University of California, Irvine, USA
* Stanisław Jarecki, University of California, Irvine, USA
* Jonathan Katz, Department of Computer Science, George Mason University, Fairfax, USA
* Jiayu Xu, Department of Computer Science, George Mason University, Fairfax, USA
### 摘要
> 密码验证密钥交换（PAKE）协议允许仅共享弱密码的两个方各自达成一致，以生成一个加密密钥。我们在通用可组合（UC）框架中重新审视了PAKE概念，并提出了对Canetti等人的PAKE功能的一种放宽，我们称之为惰性提取PAKE（lePAKE）。我们的放宽允许理想世界的对手将其密码猜测推迟到会话完成后。我们认为，这个放宽的概念在仅使用密码的设置中仍提供有意义的安全性。作为我们的主要结果，我们展示了几个先前只根据“游戏理论”定义的安全性来证明安全的PAKE协议可以在随机预言模型中实现UC-实现lePAKE功能。这其中包括SPEKE，SPAKE2和TBPEKE，目前已知最高效的PAKE方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_10](https://doi.org/10.1007/978-3-030-56784-2_10)
## Anonymous Tokens with Private Metadata Bit.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#anonymous-tokens-with-private-metadata-bit) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#anonymous-tokens-with-private-metadata-bit)**
### 作者
* Ben Kreuter, Google, New York, USA
* Tancrède Lepoint, Google, New York, USA
* Mariana Raykova, Google, New York, USA
* Michele Orrù, École Normale Supérieure, CNRS, PSL University, Paris, France
* Michele Orrù, Inria, Paris, France
* Michele Orrù, Recurse Center, New York, USA
### 摘要
> 我们提出了一种用于含有私有元数据位的匿名令牌的密码构造，称为 PMBTokens。这个基本功能使得发行者能够为用户提供一个轻量级、一次性的匿名信任令牌，该令牌可以嵌入一个私有位，只有持有秘密授权密钥的一方可以访问，并对其他人来说是私密的。我们的构造通过随机预言模型中基于 DDH 和 CTDH 假设的数据抽样方法，推广和扩展了 Privacy Pass (PETS’18) 的功能，以实现元数据位属性的不可伪造性、不可关联性和隐私保护。Privacy Pass 和 PMBTokens 都依赖于非交互式零知识证明 (NIZKs)。我们提出了新的技术来消除对 NIZKs 的需求，同时仍然实现了不可关联性。我们实现了我们的构造，并报告了其效率成本。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_11](https://doi.org/10.1007/978-3-030-56784-2_11)
## Random Probing Security: Verification, Composition, Expansion and New Constructions.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#random-probing-security-verification-composition-expansion-and-new-constructions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#random-probing-security-verification-composition-expansion-and-new-constructions)**
### 作者
* Sonia Belaïd, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Abdul Rahman Taleb, CryptoExperts, Paris, France
* Jean-Sébastien Coron, University of Luxembourg, Luxembourg, Luxembourg
* Emmanuel Prouff, ANSSI, Paris, France
### 摘要
> 掩码对抗措施是抵御侧信道攻击最强大的措施之一。泄露模型已被证明可以在理论上推断此类掩码实现的安全性。到目前为止，最广泛使用的泄露模型是由Ishai、Sahai和Wagner在CRYPTO 2003中定义的探究模型。虽然它在安全证明方面有优势，但它无法捕捉到利用完整泄露轨迹的对手（例如在水平攻击中）。这些攻击针对相同份额的多个操作，以减少噪音并恢复相应的值。为了捕捉更广泛的攻击类型，引入了另一个模型，称为随机探测模型。从泄露参数p出发，电路的每条线以概率p泄露其值。虽然这个模型更好地反映了侧信道的物理实际情况，但它需要更复杂的安全证明，并且尚不具备实际构造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_12](https://doi.org/10.1007/978-3-030-56784-2_12)
## Mode-Level vs. Implementation-Level Physical Security in Symmetric Cryptography - A Practical Guide Through the Leakage-Resistance Jungle.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#mode-level-vs-implementation-level-physical-security-in-symmetric-cryptography-a-practical-guide-through-the-leakage-resistance-jungle) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#mode-level-vs-implementation-level-physical-security-in-symmetric-cryptography-a-practical-guide-through-the-leakage-resistance-jungle)**
### 作者
* Davide Bellizia, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Olivier Bronchain, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Gaëtan Cassiers, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Charles Momin, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Olivier Pereira, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Thomas Peters, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Vincent Grosso, CNRS/Laboratoire Hubert Curien, Université de Lyon, Lyon, France
* Chun Guo, School of Cyber Science and Technology and Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
### 摘要
> 由于嵌入式加密设备（如物联网设备）的增加部署，设计能够提高安全性抵抗侧信道攻击的身份验证、加密和认证加密方案已成为重要的研究方向。在过去的十年里，已经提出和分析了多种操作模式，并在不同的抽象下进行了研究。本文研究了这些研究结果的实际影响。为此，我们首先将泄露抵抗证明的物理假设转化为实施者的最低安全要求。通过这种（启发式）转化，我们观察到，（i）对抗物理攻击的安全性可以被视为方式级和实施级保护机制之间的权衡，和（ii）为了在泄露面前保证机密性和完整性的安全要求对于实现的不同部分可能具体不同。我们通过分析逐渐增加泄露抵抗性的几种操作模式来说明第一个观点。我们通过展示分层实现来说明第二个观点，其中所研究的方案的不同部分对泄露的安全要求是不同的，从而在需要高物理安全性时提高性能。最后，我们对实现泄露抵抗认证加密方案的不同解决方案展开了比较讨论。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_13](https://doi.org/10.1007/978-3-030-56784-2_13)
## Leakage-Resilient Key Exchange and Two-Seed Extractors.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#leakage-resilient-key-exchange-and-two-seed-extractors) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#leakage-resilient-key-exchange-and-two-seed-extractors)**
### 作者
* Xin Li, Johns Hopkins University, Baltimore, USA
* Fermi Ma, Princeton University, Princeton, USA
* Fermi Ma, NTT Research, Palo Alto, USA
* Daniel Wichs, NTT Research, Palo Alto, USA
* Willy Quach, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
### 摘要
> Alice 和 Bob 能否在没有真正秘密的随机性的情况下就能达成一致，生成一个均匀随机的秘密密钥？在这里，我们考虑这样的情境：Eve 可以在协议开始之前分别对 Alice 和 Bob 的内部状态进行部分泄露。然后他们使用自己的状态运行协议，不需要额外的随机性，并且需要在 Eve 观察泄露和协议记录之后达成一个对 Eve 来说看起来均匀的共享密钥。我们重点考虑非交互（一轮）密钥交换（NIKE），即 Alice 和 Bob 分别发送一条信息而不需要等待对方。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_14](https://doi.org/10.1007/978-3-030-56784-2_14)
## Lower Bounds for Encrypted Multi-Maps and Searchable Encryption in the Leakage Cell Probe Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#lower-bounds-for-encrypted-multi-maps-and-searchable-encryption-in-the-leakage-cell-probe-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#lower-bounds-for-encrypted-multi-maps-and-searchable-encryption-in-the-leakage-cell-probe-model)**
### 作者
* Sarvar Patel, Google LLC, Mountain View, USA
* Giuseppe Persiano, Google LLC, Mountain View, USA
* Kevin Yeo, Google LLC, Mountain View, USA
* Giuseppe Persiano, Università di Salerno, Salerno, Italy
### 摘要
> 加密多映射（EMM）使客户能够将多映射的存储外包给一个潜在不受信任的服务器，同时保持以保护隐私的方式执行操作的能力。EMM是一个重要的原语，因为它们是许多实际应用的基本构建块，如可搜索加密和加密数据库。在这项工作中，我们正式研究了EMM的隐私和效率之间的权衡。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_15](https://doi.org/10.1007/978-3-030-56784-2_15)
## Fast and Secure Updatable Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#fast-and-secure-updatable-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#fast-and-secure-updatable-encryption)**
### 作者
* Colin Boyd, Norwegian University of Science and Technology, NTNU, Trondheim, Norway
* Kristian Gjøsteen, Norwegian University of Science and Technology, NTNU, Trondheim, Norway
* Yao Jiang, Norwegian University of Science and Technology, NTNU, Trondheim, Norway
* Gareth T. Davies, Bergische Universität Wuppertal, Wuppertal, Germany
### 摘要
> 可更新加密允许客户端将密文外包给一些不可信任的服务器，并定期轮换加密密钥。服务器可以通过来自客户端的更新令牌将密文从旧密钥更新为新密钥，而此过程不应向对手透露任何有关明文的信息。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_16](https://doi.org/10.1007/978-3-030-56784-2_16)
## Incompressible Encodings.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#incompressible-encodings) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#incompressible-encodings)**
### 作者
* Tal Moran, IDC Herzliya, Herzliya, Israel
* Daniel Wichs, Northeastern University, Boston, USA
* Daniel Wichs, NTT Research Inc., Palo Alto, USA
### 摘要
> 不可压缩编码可以将一些数据m以概率方式编码成一个代码字c，而该代码字的尺寸并不比原数据m大很多。任何人都可以解码代码字c来恢复原始数据m。然而，即使原始数据m被同时提供给解压缩过程，代码字c也无法被高效压缩。换句话说，c是m的一个高效可解码表示，但即使考虑到m，c也是计算上不可压缩的。如果许多编码无法同时被压缩，则一个不可压缩编码是可组合的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_17](https://doi.org/10.1007/978-3-030-56784-2_17)
## New Constructions of Hinting PRGs, OWFs with Encryption, and More.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#new-constructions-of-hinting-prgs-owfs-with-encryption-and-more) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#new-constructions-of-hinting-prgs-owfs-with-encryption-and-more)**
### 作者
* Rishab Goyal, MIT, Cambridge, USA
* Satyanarayana Vusirikala, University of Texas at Austin, Austin, USA
* Brent Waters, University of Texas at Austin, Austin, USA
* Brent Waters, NTT Research, Palo Alto, USA
### 摘要
> 在过去的几年里，出现了大量新的密码学结果，其中包括简洁无视传输[13,16]、(匿名/分层)身份基础加密[9]、陷门函数[19,20]、选择明文安全转换[32,33]、指定验证零知识证明[30,34,37]，这些都是由Cho等人最近介绍的美妙框架中引入的，还有Döttling和Garg[14]的贡献。单向函数和加密（OWFE）[19, 20]及其相关领域（变色龙加密、一次性签名带加密、提示PRGs、陷门哈希加密、批处理加密）[9, 14, 16, 17, 33]是所有这些结果的核心。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_18](https://doi.org/10.1007/978-3-030-56784-2_18)
## Adaptively Secure Constrained Pseudorandom Functions in the Standard Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#adaptively-secure-constrained-pseudorandom-functions-in-the-standard-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#adaptively-secure-constrained-pseudorandom-functions-in-the-standard-model)**
### 作者
* Alex Davidson, Cloudflare, Lisbon, Portugal
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shota Yamada, AIST, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Alex Davidson, ISG, Royal Holloway University of London, London, UK
### 摘要
> 有限限制伪随机函数（CPRFs）允许学习“限制”的PRF密钥，它可以在输入空间的子集上评估PRF，或者基于某些谓词进行评估。最初由Boneh和Waters [AC’13]、Kiayias等人[CCS’13]和Boyle等人[PKC’14]引入，已被证明是一种具有多种应用的有用密码原语。这些应用通常要求CPRFs具有适应性安全性，这使得对手可以以任意顺序学习PRF值和限制密钥。然而，在标准模型中，对于任何非平凡的谓词类别，目前尚无已知的基于标准假设的适应性安全CPRFs的构造方法。此外，即使我们依赖于如不可区分混淆（IO）之类的强工具，目前标准模型中构造的适应性安全CPRFs仅支持有限的\(\mathbf{NC} ^1\)谓词类别。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_19](https://doi.org/10.1007/978-3-030-56784-2_19)
## Collusion Resistant Watermarkable PRFs from Standard Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#collusion-resistant-watermarkable-prfs-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#collusion-resistant-watermarkable-prfs-from-standard-assumptions)**
### 作者
* Rupeng Yang, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Man Ho Au, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Zuoxia Yu, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Qiuliang Xu, School of Software, Shandong University, Jinan, 250101, China
### 摘要
> 一个软件水印方案可以将一条消息嵌入程序中，而不明显改变其功能。此外，任何试图移除被标记程序中嵌入消息的尝试都将大幅改变程序的功能。之前的水印方案构建侧重于对密码学函数进行水印标记，例如伪随机函数（PRF）、公钥加密等。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_20](https://doi.org/10.1007/978-3-030-56784-2_20)
## Verifiable Registration-Based Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#verifiable-registration-based-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#verifiable-registration-based-encryption)**
### 作者
* Rishab Goyal, MIT, Cambridge, USA
* Satyanarayana Vusirikala, UT Austin, Austin, USA
### 摘要
> 在最近的工作中，Garg、Hajiabadi、Mahmoody和Rahimi[18]引入了一种新的加密框架，他们将其称为基于注册的加密（RBE）。RBE背后的核心动机是为解决身份基础加密（IBE）系统中众所周知的密钥托管问题提供一种新的方法[33]。简而言之，在RBE系统中，与IBE系统不同，没有私钥生成器，而是用公共密钥累加器替代。RBE系统的每个用户都会随机生成自己的公开-秘密密钥对并将公钥发送给累加器进行注册。密钥累加器没有任何秘密状态，仅负责将所有已注册用户身份-密钥对压缩成一个简短的公共承诺。在这里，加密器只需要压缩参数和目标身份，而解密器则需要附加的密钥材料以及与注册公钥相关联的秘密密钥。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_21](https://doi.org/10.1007/978-3-030-56784-2_21)
## New Techniques for Traitor Tracing: Size N1/3 and More from Pairings.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#new-techniques-for-traitor-tracing-size-n1-3-and-more-from-pairings) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#new-techniques-for-traitor-tracing-size-n1-3-and-more-from-pairings)**
### 作者
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Palo Alto, USA
### 摘要
> 现有的基于配对的叛徒追踪方案具有O(√N)大小的参数，此情况自2006年以来一直存在。这似乎与配对能够进行二次计算、从而实现二次压缩的事实一致。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_22](https://doi.org/10.1007/978-3-030-56784-2_22)
## Functional Encryption for Attribute-Weighted Sums from k-Lin.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#functional-encryption-for-attribute-weighted-sums-from-k-lin) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#functional-encryption-for-attribute-weighted-sums-from-k-lin)**
### 作者
* Michel Abdalla, CNRS, ENS and PSL, Paris, France
* Hoeteck Wee, CNRS, ENS and PSL, Paris, France
* Junqing Gong, East China Normal University, Shanghai, China
* Hoeteck Wee, NTT Research, Palo Alto, CA, USA
### 摘要
> 我们提出了用于属性加权求和的功能性加密方案，其中加密接受N个属性-值对\((x_i,z_i)\)作为输入，其中\(x_i\)是公开的，而\(z_i\)是私有的；秘密密钥与算术分支程序f相关联，解密返回加权和\(\sum _{i=1}^N f(x_i) z_i\)，同时不泄露有关\(z_i\)的任何其他信息。我们的主要构造实现了...

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_23](https://doi.org/10.1007/978-3-030-56784-2_23)
## Amplifying the Security of Functional Encryption, Unconditionally.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#amplifying-the-security-of-functional-encryption-unconditionally) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#amplifying-the-security-of-functional-encryption-unconditionally)**
### 作者
* Aayush Jain, UCLA, Los Angeles, CA, USA
* Alexis Korb, UCLA, Los Angeles, CA, USA
* Nathan Manohar, UCLA, Los Angeles, CA, USA
* Amit Sahai, UCLA, Los Angeles, CA, USA
### 摘要
> 安全放大是密码学中的一个基本问题。在这项工作中，我们研究了功能加密（FE）的安全放大。我们展示了两个主要结果：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_24](https://doi.org/10.1007/978-3-030-56784-2_24)
## Dynamic Decentralized Functional Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#dynamic-decentralized-functional-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#dynamic-decentralized-functional-encryption)**
### 作者
* Jérémy Chotard, XLIM, University of Limoges, CNRS, Limoges, France
* Duong Hieu Phan, XLIM, University of Limoges, CNRS, Limoges, France
* Jérémy Chotard, DIENS, École Normale Supérieure, CNRS, PSL University, Paris, France
* Edouard Dufour-Sans, DIENS, École Normale Supérieure, CNRS, PSL University, Paris, France
* David Pointcheval, DIENS, École Normale Supérieure, CNRS, PSL University, Paris, France
* Jérémy Chotard, Inria, Paris, France
* Edouard Dufour-Sans, Inria, Paris, France
* David Pointcheval, Inria, Paris, France
* Edouard Dufour-Sans, Carnegie Mellon University, Pittsburgh, USA
* Romain Gay, Cornell Tech, New York, USA
### 摘要
> 我们引入了动态分散功能加密（\(\textsf {DDFE}\)），它是功能加密的一种推广，允许多个用户动态加入系统，无需依赖可信第三方或昂贵的交互式多方计算协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_25](https://doi.org/10.1007/978-3-030-56784-2_25)
## On Succinct Arguments and Witness Encryption from Groups.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#on-succinct-arguments-and-witness-encryption-from-groups) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#on-succinct-arguments-and-witness-encryption-from-groups)**
### 作者
* Ohad Barta, Technion, Haifa, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Rafail Ostrovsky, UCLA, Los Angeles, CA, USA
* David J. Wu, University of Virginia, Charlottesville, VA, USA
### 摘要
> 简洁的非交互式论证（SNARGs）能够用非常低的通信量来证明\(\mathsf {NP} \)的陈述。最近，在理论和实践方面都进行了大量工作，以构建具有非常短证明的SNARGs。目前，简洁性的最新成果是由Groth（Eurocrypt 2016）通过使用双线性映射构造了一个仅由3个群元素组成的SNARG。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_26](https://doi.org/10.1007/978-3-030-56784-2_26)
## Fully Deniable Interactive Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#fully-deniable-interactive-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#fully-deniable-interactive-encryption)**
### 作者
* Ran Canetti, Boston University, Boston, USA
* Sunoo Park, MIT and Harvard, Cambridge, USA
* Oxana Poburinnaya, University of Rochester, Rochester, USA
### 摘要
> 可否抵赖的加密（Canetti等人，1996年密码学会议）增强了公共渠道上的秘密通信，额外提供保护通信保密性的保证，即使当事方后来被强迫（或愿意受贿）揭露他们的全部内部状态：明文、密钥和随机性。迄今为止，关于可否抵赖加密以及更一般的互动可否抵赖通信的构建，只涉及仅有一方被损害的受限情况（Sahai和Waters，2014年STOC会议）。主要问题——即如果两方同时受到强迫是否可能实现可否抵赖通信——一直未决。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_27](https://doi.org/10.1007/978-3-030-56784-2_27)
## Chosen Ciphertext Security from Injective Trapdoor Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#chosen-ciphertext-security-from-injective-trapdoor-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#chosen-ciphertext-security-from-injective-trapdoor-functions)**
### 作者
* Susan Hohenberger, Johns Hopkins University, Baltimore, MD, USA
* Venkata Koppula, Weizmann Institute of Science, Rehovot, Israel
* Brent Waters, University of Texas, Austin, TX, USA
* Brent Waters, NTT Research, Palo Alto, CA, USA
### 摘要
> 我们提供了从（可逆的）陷门函数构建选择密文安全公钥加密的方法。我们的构造是黑盒子的，并且不需要陷门函数的任何特殊属性（如“有损”，“相关产品安全”）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_28](https://doi.org/10.1007/978-3-030-56784-2_28)
