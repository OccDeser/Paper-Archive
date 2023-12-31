# Crypto[2020-1]
## Handling Adaptive Compromise for Practical Encryption Schemes.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#handling-adaptive-compromise-for-practical-encryption-schemes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#handling-adaptive-compromise-for-practical-encryption-schemes)**
### 作者
* Joseph Jaeger, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Nirvan Tyagi, Cornell Tech, New York City, USA
### 摘要
> 我们提供了一个新的定义框架，捕获了加密方案和伪随机函数的多用户安全性，面对可以适应性地破坏用户密钥的对手。我们提供一系列结果，建立了在随机神谕或理想密码模型中，实用对称加密方案在适应性妥协下的安全性。适应性妥协安全性的大部分分析复杂性被委托给低级原语的分析，如伪随机函数。我们应用我们的框架，为面对边界搜索的BurnBox系统和由Cash等人提出的正在使用的可搜索对称加密方案提供安全性证明。在这两种情况下，以前的分析中存在Bug，我们的框架有助于

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_1](https://doi.org/10.1007/978-3-030-56784-2_1)
## Overcoming Impossibility Results in Composable Security Using Interval-Wise Guarantees.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#overcoming-impossibility-results-in-composable-security-using-interval-wise-guarantees) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#overcoming-impossibility-results-in-composable-security-using-interval-wise-guarantees)**
### 作者
* Daniel Jost, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
* Ueli Maurer, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
### 摘要
> 可组合的安全定义有时被称为基于模拟的定义，提供在任何情境下均有效的强大安全保证。然而，它们也受到一些怀疑，因为存在许多不可能的结果；像承诺和零知识这样的目标在独立情况下是可以实现的，但在没有设置的情况下是不能组合实现的（因为可以证明不存在有效的模拟器）。特别是，在适应性安全的情况下，出现了所谓的“模拟器承诺问题”：一旦一方受到破坏，有效的模拟器就无法与其先前输出保持一致。自然的问题是，这种不可避免的结果是否是不可避免的，还是框架过于受限制的产物。
> 
> 在这项工作中，我们提出了一种新型的可组合安全声明类型，避开了承诺问题。我们的新类型能够表达以前没有明确可组合理解的方案的可组合保证。为此，我们利用建设性密码学框架中的系统规范的概念，捕捉几个区间保证的连接，每个保证指定两个事件之间的保证。我们开发了所需的理论，并呈现了相应的新组合定理。
> 
> 我们提供了我们理论的三个应用。首先，我们展示在具有自适应破坏的对称加密的情况下，我们的概念如何自然地捕捉预期的保密保证——消息在任何一方被破坏之前都保持机密——并且可以通过任何标准语义安全方案来实现（消除了非承诺加密的需要）。其次，我们提出了一个可组合的承诺协议的形式化描述（迄今为止只知道是独立安全的），该形式化描述可以在没有类似CRS的信任设置的情况下进行实例化。我们展示它足以用于电话投掷硬币，这是承诺的早期直观应用之一。第三，我们重新审视了Hofheinz、Matt和Maurer[Asiacrypt'15]的一个结果，该结果意味着IND-ID-CPA安全性不是基于身份的加密的正确概念，揭示了这一声明是一个不必要的框架产物。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_2](https://doi.org/10.1007/978-3-030-56784-2_2)
## Indifferentiability for Public Key Cryptosystems.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#indifferentiability-for-public-key-cryptosystems) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#indifferentiability-for-public-key-cryptosystems)**
### 作者
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Palo Alto, USA
* Cong Zhang, Rutgers University, New Brunswick, USA
### 摘要
> 我们开始研究公钥加密和其他公钥原语的不可区分性。我们的主要结果是定义和构造了可以从理想加密系统中不可区分的公钥加密系统，随机预言模型下的。加密系统包括：
> 
> 公钥加密;
> 
> 数字签名;
> 
> 非交互式密钥协商。
> 
> 我们的方案基于相对标准的公钥假设。通过对理想对象不可区分，我们的方案自动满足广泛的安全性属性，包括任何可表示为单阶段游戏的属性，并且可以组合为在更高级别协议中运行。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_3](https://doi.org/10.1007/978-3-030-56784-2_3)
## Quantifying the Security Cost of Migrating Protocols to Practice.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#quantifying-the-security-cost-of-migrating-protocols-to-practice) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#quantifying-the-security-cost-of-migrating-protocols-to-practice)**
### 作者
* Christopher Patton, Florida Institute for Cybersecurity Research, Computer and Information Science and Engineering, University of Florida, Gainesville, FL, USA
* Thomas Shrimpton, Florida Institute for Cybersecurity Research, Computer and Information Science and Engineering, University of Florida, Gainesville, FL, USA
### 摘要
> 我们提供了一个框架，用于将“参考”协议（即出现在学术论文中的协议）的具体安全性与某种派生的“真实”协议（即出现在密码标准中的协议）相关联。该框架基于Maurer，Renner和Holenstein（MRH）关于不可区分性的框架，而该框架一直专注于非交互式密码原语，例如散列函数和Feistel网络。我们对MRH的扩展建立在明确定义的执行模型和两个组合引理的基础上，所有这些内容都是用现代伪代码语言形式化的。这些内容共同允许对加密对象（交互式或非交互式）在各个抽象级别上的基于游戏的安全属性进行准确陈述。作为现实世界的应用，我们设计并证明了一个潜在的TLS1.3扩展的严格安全界限，该扩展将SPAKE2密码认证密钥交换集成到握手过程中。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_4](https://doi.org/10.1007/978-3-030-56784-2_4)
## The Memory-Tightness of Authenticated Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#the-memory-tightness-of-authenticated-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#the-memory-tightness-of-authenticated-encryption)**
### 作者
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Joseph Jaeger, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### 摘要
> 本文在有限记忆的环境下开展了对认证加密（AE）可证明安全性的研究。最近的研究——Tessaro和Thiruvengadam（TCC ’18），Jaeger和Tessaro（EUROCRYPT ’19），以及Dinur（EUROCRYPT ’20）——关注的是机密性，并研究了在攻击者的内存和数据复杂性之间存在的权衡。在这里，我们问的是这些结果和技术是否可以扩展到完整的AE设置中，该设置还要求完整性。
> 
> 我们展示了正面和负面的结果。在正面方面，我们对GCM和其广义化版本CAU（Bellare和Tackmann，CRYPTO ’16）的安全性提供了严格的记忆敏感边界。我们的边界适用于AE安全性的一种受限情况，该情况抽象了在诸如TLS协议之类的协议中的部署，并依赖于与机密性和完整性的受限概念对应的新的记忆紧凑约简。特别是，相对于早期的作品（Auerbach等人，CRYPTO ’17）仅施加恒定的内存开销，我们的约简所使用的内存量是线性依赖于给定对手的内存量。
> 
> 在负面方面，我们显示了一个大类的黑盒约简不能以一种记忆紧凑的方式将机密性和完整性安全性通用地提升到AE安全性的联合定义。

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
> 我们研究了随机预言机模型下对梅克尔-达姆高德哈希中碰撞查找的研究，该研究针对具有关于随机预言机和T个查询的任意S位辅助输入的对手。最近的研究表明，这些对手可以找到与随机初始化向量相关的碰撞（相对于一个随机初始化向量），其优势为\(\varOmega(ST^2/2^n)\)，其中n为输出长度，这打破了生日攻击的界限，优势因子为S。这些攻击被证明是最佳的。
> 
> 我们观察到产生的碰撞非常长，大约为T个块的长度，这限制了它们在实践中的相关性。我们证明了与改进这些攻击以找到更短碰撞相关的几个结果。我们首先展示了一种简单的攻击方法，用于找到长度为B个块的碰撞，其优势为\(\tilde{\varOmega}(STB/2^n)\)。然后我们研究这种攻击是否是最佳的。我们证明了基于比特固定模型（用于\(ST^2/2^n\)界限）的先前技术无法达到这个界限，并且在寻找长度为1、长度为2和无限长度碰撞的最佳攻击中，我们证明了存在定性跳跃。换句话说，最佳攻击达到了（对数因子上）\((S+T)/2^n\)、\(ST/2^n\)和\(ST^2/2^n\)的优势。我们还通过对随机函数图中树的增长进行的新分析，给出了一类受限碰撞查找攻击的优势上界，这可能是独立感兴趣的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_6](https://doi.org/10.1007/978-3-030-56784-2_6)
## The Summation-Truncation Hybrid: Reusing Discarded Bits for Free.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#the-summation-truncation-hybrid-reusing-discarded-bits-for-free) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#the-summation-truncation-hybrid-reusing-discarded-bits-for-free)**
### 作者
* Aldo Gunsing, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### 摘要
> 一个已经成熟的PRP到PRF转换设计是截断：对特定输入评估n位伪随机置换，并将结果截断为a位。该结构已知能达到紧密的\(2^{n-a/2}\)安全性。由于在GCM-SIV密钥派生函数（ACM CCS 2015）中的应用，截断变得流行起来。这个密钥派生函数对AES进行了四次评估，将输出截断为n/2位，并将它们串联起来得到一个2n位的子密钥。
> 
> 在这项工作中，我们证明了截断是浪费的。更详细地说，我们提出了求和截断混合（STH）方法。在高层次上，这个结构由两个并行的截断评估组成，其中被截断的\((n-a)\)位块不会被丢弃，而是相加在一起并附加到输出上。我们证明STH实现了与截断类似的安全级别，因此额外的\(n-a\)位输出是免费获得的。在GCM-SIV的应用中，当前的密钥派生可以输出3n位的随机材料，或者可以减少为三个基本评估。这些改变都不会损失安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_7](https://doi.org/10.1007/978-3-030-56784-2_7)
## Security Analysis of NIST CTR-DRBG.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#security-analysis-of-nist-ctr-drbg) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#security-analysis-of-nist-ctr-drbg)**
### 作者
* Viet Tung Hoang, Department of Computer Science, Florida State University, Tallahassee, FL, USA
* Yaobin Shen, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, China
### 摘要
> 我们研究了\(\mathsf {CTR\text {-}DRBG}\)，这是NIST建议的伪随机数生成器（PRNG）设计之一。最近，Woodage和Shumow（Eurocrypt’ 19），然后Cohney等人(S&P’ 20)指出了NIST规范和\(\mathsf {CTR\text {-}DRBG}\)的常见实现中的一些潜在漏洞。虽然这些研究者确实提出了反制措施，但修复后的\(\mathsf {CTR\text {-}DRBG}\)的安全性仍然值得怀疑。我们的工作填补了这个空白，证明了\(\mathsf {CTR\text {-}DRBG}\)满足Dodis等人(CCS’13)的PRNGs标准安全目标的健壮性概念。

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
> 安全消息（SM）协议允许用户在不受信任的基础设施上进行安全通信。与大多数其他安全通信协议（例如TLS、SSH或Wireguard）相比，SM会话可能具有长生命周期（例如几年）和高度异步性。为了处理会话期间用户可能发生的状态泄露，SM协议不仅保护真实性和隐私，而且还保证前向保密（FS）和后置损害安全（PCS）。前者确保在状态泄露之前发送和接收的消息仍然安全，而后者确保用户可以从常规协议使用的状态泄露中恢复。
> 
> SM在两方案例中得到了广泛关注，在此之前的研究已经研究了众所周知的双喇叭范式，特别是SM作为密码学原语。不幸的是，这种范式不适用于安全组消息（SGM）问题。为了解决缺乏令人满意的SGM协议的问题，IETF启动了名为"message-layer security"（MLS）工作组，旨在标准化一种同名的SGM协议。在这项工作中，我们分析了TreeKEM协议，该协议是MLS工作组提出的SGM协议的核心。
> 
> 值得注意的是，我们显示出TreeKEM在孤立情况下实现了PCS（略微更多）。然而，我们观察到TreeKEM的当前版本并没有提供足够的前向保密形式。更精确地说，我们的工作通过正式捕获TreeKEM的确切安全性作为所谓的连续群密钥协定（CGKA）协议，我们认为这是一个独立利益的原语。为了解决TreeKEM的不安全性，我们提出了一种简单的修改TreeKEM的方法，该方法受到Jost等人最近的工作（EUROCRYPT '19）和Kohbrok（MLS邮件列表）的想法的启发。然后，我们展示了修改后的TreeKEM几乎没有效率下降，但达到了最佳（根据MLS规范）CGKA安全性，包括FS和PCS。我们的工作还阐述了如何使用CGKA协议设计完整的SGM协议。

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
> 密码认证密钥交换（PAKE）的协议允许仅共享薄弱密码的两个当事方达成加密密钥的一致。我们在通用可组合性（UC）框架中重新审视了PAKE的概念，并提出了一个我们称之为懒惰提取PAKE（lePAKE）的PAKE功能的放宽。我们的放宽允许理想世界的对手推迟对密码的猜测，直到会话完成后。我们认为这种放宽的概念在仅有密码的情况下仍然提供有意义的安全性。作为我们的主要结果，我们证明了以前仅根据“基于游戏”的安全性定义被证明安全的几种PAKE协议可以在随机预言模型中实现UC-realize lePAKE功能。其中包括SPEKE、SPAKE2和TBPEKE，目前已知的最有效的PAKE方案。

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
> 我们提出了一种用于具有私人元数据位的匿名令牌的加密构造，称为PMBTokens。该原语使发行者能够向用户提供一个轻量级、一次性的匿名信任令牌，可以嵌入单个私人位，仅由持有秘密权限密钥的一方访问，并与其他人的隐私相关。我们的构造通过DDH和CTDH假设在随机预言模型中提供了元数据位属性的不可伪造性、无链接性和隐私性。Privacy Pass和PMBTokens都依赖于非交互式零知识证明（NIZKs）。我们提出了新的技术来消除NIZKs的需要，同时实现unlinkability。我们实现了我们的构造，并报告了它们的效率成本。

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
> 遮蔽对策是抵御侧信道攻击最强大的对策之一。泄漏模型已被展示用于理论上推断此类遮蔽实施的安全性。迄今为止，最广泛使用的泄漏模型是由Ishai、Sahai和Wagner在（CRYPTO 2003）定义的探测模型。尽管它对于安全性证明非常方便，但它没有捕捉到攻击者利用完整泄漏轨迹的情况，例如，在水平攻击中。这些攻击目标是多次操纵相同份额以减少噪音并恢复相应的值。为了捕捉到更广泛类别的攻击，引入了另一个模型，称为随机探测模型。从泄漏参数p，电路的每个线路以概率p泄漏其值。虽然这个模型更好地反映了侧信道的物理现实，但它需要更复杂的安全性证明，且目前没有实际构造方法。
> 
> 在本文中，我们定义了第一个专门针对随机探测模型的框架。我们提供了一种名为VRAPS的自动工具，用于根据电路的泄漏概率量化随机探测安全性。我们还将安全的随机探测小工具的组合属性形式化，并展示其与在探测安全性环境中使用的强非干扰（SNI）概念之间的关系。然后，我们重新审视了Ananth、Ishai和Sahai（CRYPTO 2018）提出的扩展思想，并引入一个编译器，从具有随机探测可扩展性属性的小基础工具构建一个随机探测安全的电路。我们用小工具实例化这个编译器，并直接从我们的自动工具验证了预期的属性。我们的构造可以容忍高达2^{-8}的泄漏概率，而以前的构造只能容忍2^{-25}的泄漏概率，并且具有更好的渐近复杂度。

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
> 受到嵌入式密码设备（例如，物联网）日益增多的启发，设计可以提高防御侧通道攻击能力的身份验证、加密和认证加密方案已经成为重要的研究方向。在过去的十年里，已经提出并在不同抽象层面分析了许多操作模式。在本文中，我们探讨了这些发现的实际后果。为此，我们首先将泄漏防护证明的物理假设转化为实施者的最低安全要求。借助这种（启发式）转化，我们发现（i）抵抗物理攻击的安全性可以视为模式级别和实现级别保护机制之间的权衡，以及（ii）为保障泄露时的机密性和完整性而设定的安全要求，对于实施的不同部分可以有实际的差异。我们通过分析具有逐渐增强的泄漏防护能力的几种操作模式来说明第一点。我们通过展示级别不同的实施方案，其中调查方案的不同部分对抗泄露的安全要求不同，从而在需要高物理安全性时提升性能，来说明第二点。最后，我们对实现泄漏防护的认证加密方案的不同组件进行了

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
> 艾丽斯和鲍勃能否在没有真正秘密随机性的情况下达成对均匀随机秘密密钥的共识？在这里，我们考虑这样一个设置：伊芙可以在协议开始之前部分泄露艾丽斯和鲍勃各自的内部状态。然后，他们使用他们的状态运行协议，而不需要任何额外的随机性，并且需要就一个共享密钥达成共识，即使伊芙观察到泄露和协议记录后，该密钥对伊芙来说看起来是均匀的。我们关注非交互式（一轮）密钥交换（NIKE），艾丽斯和鲍勃各自发送一条消息，而不需要等待对方。
> 
> 首先我们在对称密钥设置中考虑这个问题，其中艾丽斯和鲍勃的状态包括一个共享密钥以及各自的均匀随机性。然而，由于伊芙泄露了这些状态，艾丽斯和鲍勃需要执行隐私放大以从中获得一个新的秘密密钥。以前的解决方案要求艾丽斯和鲍勃在协议期间采样新的均匀随机性，而在我们的设置中，它们所有的随机性已经是他们各自状态的一部分，因此可能受到泄漏。我们展示了一个信息理论的解决方案，使用了一个我们称之为双种子提取器的新型原语，通过与名称为NOF模型的通信复杂性下界建立联系。
> 
> 然后我们转而在公钥设置中研究这个问题，其中艾丽斯和鲍勃的状态包括独立的均匀随机性。不幸的是，我们给出了一个黑盒分离，表明在超对数泄露时，该设置下的具泄露弹性的NIKE无法根据任何基于游戏的假设在黑盒减少下被证明是安全的。这包括几乎所有应用在密码学中的假设，甚至是非常强的假设，如不可区分性混淆（IO）。然而，我们还提供了绕过上述分离的积极结果：
> 
> 我们表明每个密钥交换协议（例如Diffie-Hellman）在泄露量为对数时是安全的，或者在没有泄漏的情况下，如果我们假设亚指数安全性，则可能更安全。
> 
> 我们注意到这个黑盒分离不适用于常见参考字符串（CRS）模型的方案，或者具有预处理的方案，在这些方案中，艾丽斯和鲍勃可以分别预处理他们的随机硬币以从泄露之前推导出他们的秘密状态。我们使用双线性映射给出了常见参考字符串（CRS）模型中具有预处理的解决方案。我们还使用（IO）和有损函数在仅使用CRS模型（无预处理）或仅使用预处理（无CRS）的情况下给出了解决方案。

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
> 加密多重映射（EMM）使客户能够将多重映射的存储外包给一个潜在不受信任的服务器，同时保持以保护隐私的方式执行操作的能力。EMM是一个重要的基本原理，因为它们是许多实际应用的基本构建块，如可搜索加密和加密数据库。在这项工作中，我们正式探讨了EMM的隐私和效率之间的权衡。
> 
> 目前，所有已知的具有恒定开销的动态EMM都会透露是否在相同的键上执行了两个操作，我们将其称为全局键相等模式。在我们的主要结果中，我们提出强有力的证据，证明全局键相等模式的泄露对于任何具有O（1）效率的动态EMM构造来说是固有的。特别地，我们考虑了略低的密钥相等模式泄漏，其中更新和查询操作之间的密钥相等泄漏是分离的，并且对手只能得知相同类型的两个操作是否在相同的键上执行。我们证明任何EMM最多泄露分离的密钥相等模式，都会在泄漏单元探测模型中产生Ω（lg n）的开销。这是紧密的，因为存在基于ORAM的EMM构造，呈对数级放慢，泄露不超过分离的键相等模式（实际上，要少得多）。此外，我们提出了更强大的下界，即最多泄露分离的密钥相等模式的加密多重映射，但仍能够在明文中执行更新或查询操作之一，仍需要Ω（lg n）的开销。最后，我们将我们的下界扩展到动态的、响应隐藏的可搜索加密方案，即使在文档更新或搜索中的其中一个可以在明文中执行，也必须产生Ω（lg n）的开销。

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
> 可更新加密允许客户端将密文外包给某个不受信任的服务器，并定期更换加密密钥。服务器可以使用客户端提供的更新令牌将旧密钥的密文更新为新密钥，而对手方不能从中获取有关明文的任何信息。
> 
> 我们提供了一套新的高效可更新加密方案，统称为\(\mathsf{SHINE}\)。在针对短消息设计的变种中，密文生成包括对每个消息块应用一个置换和一个指数运算，而更新密文仅需要一个指数运算。针对较长消息的变种提供了比之前具有相可比效率的工作更强的安全保证。我们提出了一种新的可更新加密方案的机密性概念，它意味着之前的概念。我们证明了\(\mathsf{SHINE}\)在我们的新机密性定义下是安全的，同时提供密文的完整性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_16](https://doi.org/10.1007/978-3-030-56784-2_16)
## Incompressible Encodings.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#incompressible-encodings) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#incompressible-encodings)**
### 作者
* Tal Moran, IDC Herzliya, Herzliya, Israel
* Daniel Wichs, Northeastern University, Boston, USA
* Daniel Wichs, NTT Research Inc., Palo Alto, USA
### 摘要
> 一种不可压缩编码可以将某些数据 m 概率地编码为一个稍微大一点的码字 c。任何人都可以解码码字 c以恢复原始数据m。然而，即使在给定原始数据 m 的情况下，这个码 c 也不能被有效压缩。换句话说， c 是对m 的有效解码表示，但即使给定 m，它也无法进行计算压缩。如果许多编码无法同时压缩，则不可压缩编码是可组合的。
> 
> Damgård、Ganesh和Orlandi（CRYPTO'19）的最新工作将不可压缩编码的变体定义为“重复存储证明”的构建模块。他们在理想置换模型中构建了不可压缩编码，但未确定它们是否可以在标准假设或更基本的随机预言机模型下构建。在这项工作中，我们全面研究不可压缩编码作为独立感兴趣的原语，并提供新的构建、负面结果和应用：
> 
> 我们在常见随机字符串（CRS）模型下使用决策余剩（DCR）或学习与误差（LWE）构建不可压缩编码。但是，该构建具有以下几个缺点：（1）它不是可组合的，（2）它只实现了选择性安全性，（3）CRS的长度与数据 m 一样长。
> 
> 我们利用上述构建，在相同的条件下在随机预言机模型中得到了一种方案，避免了以上所有缺点。此外，它比以前的理想模型构建更有效率。
> 
> 我们给出黑盒分离，表明无法证明原始模型中不可压缩编码在任何标准难度假设下是安全的，并且在 CRS 模型中的不可压缩编码必须天然受到上述所有缺点的影响。
> 
> 我们将其应用于“有界检索模型中的大密钥密码学”，即有意制作秘密密钥变得巨大，使其难以外泄。使用不可压缩编码，我们可以获得大密钥的所有安全性好处，而无需浪费存储空间，因为可以用该密钥来编码有用数据。

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
> 在过去几年中，出现了许多新的加密结果，包括简明随机传输[13、16]，（匿名/分层）基于身份的加密[9]，陷阱函数[19、20]，选择密文安全转换[32、33]，指定验证者的零知识证明[30、34、37]，这些成果是基于Cho等人[13]和Döttling和Garg[14]最近引入的美丽框架。单向函数加密(OWFE)[19、20]以及它的相关领域(变形加密、一次性签名加密、暗示PRG、陷阱门哈希加密、批量加密)[9、14、16、17、33]在所有这些成果中都占据了核心地位。
> 
> 尽管存在多种基于不同假设(如CDH、因子分解和LWE)的OWFE(及其相关领域)实现，但所有这些构造都属于同一通用的“缺失块”框架[13,14]。虽然这个框架通过OWFE(及其相关领域)的抽象在打开通往各种密码功能的新路径方面发挥了重要作用，但它伴随着可能阻碍在许多实际情况下更广泛采用的不可取的低效率。由于OWFE抽象(及其相关领域)的重要性不断增长，一个自然而然的问题是现有的方法是否可以多样化，不仅能从不同的假设中获得更多的构造，还能开发新的框架。我们相信解答这个问题最终将导致这个新型加密范式的重要性和以前未曾探索的性能平衡。
> 
> 在这项工作中，我们提出了一种新的积累式框架，用于构建一类新的OWFE和具有特殊关注的暗示PRG构造，以实现更短的密文大小和更短的公共参数大小(分别)。这种性能改进转化为相应应用中的更短参数。简而言之，我们探讨以下性能平衡：(1)对于OWFE，我们的构造在密文大小和加密时间方面表现优异，但这是以更长的评估和设置时间为代价的；(2)对于暗示PRG，我们的构造在评估时间与参数大小之间提供了戏剧性的权衡，我们的构造导致了明显更短的公共参数大小。我们的暗示PRG构造所提供的权衡也导致了[33]中提供的CPA到CCA转换中的有趣影响。我们还对我们的构造提供了具体的性能测量，并将其与现有方法进行了比较。我们相信强调这样的权衡将在实践中促进这些抽象的更广泛采用。

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
> 受限伪随机函数（CPRFs）允许学习可以在输入空间的子集上评估PRF，或基于某些谓词的"受限"PRF密钥。最早由Boneh和Waters [AC'13]、Kiayias等人[CCS'13]以及Boyle等人[PKC'14]引入，它们已被证明是具有许多应用的有用的密码学原语。这些应用通常要求CPRFs能够适应性安全，即对手可以按任意顺序学习PRF值和受限密钥。然而，在标准模型中，尚无已知的基于标准假设的适应性安全CPRFs构造方案适用于任何非平凡类的谓词。此外，即使我们依赖强大的工具如不可区分性模糊化（IO），现有的在标准模型下构造的适应性安全CPRFs仅支持有限的\(\mathbf{NC} ^1\)谓词类。
> 
> 在本文中，我们从标准模型中不同类型的假设出发，为各种谓词构造了新的适应性安全CPRFs。我们的结果总结如下：
> 
> 我们使用单项函数（OWFs）构建了适应性安全且O(1)-防共谋CPRFs，适用于t-无聚变范式（t-CNF）谓词，其中t是一个固定常数。这里的O(1)-防共谋性意味着我们可以允许对手获得一个常数数量的受限密钥。需要注意的是，t-CNF将比特固定谓词作为特殊情况包括在内。
> 
> 我们使用学习与错误（LWE）假设构建了适应性安全且单密钥CPRFs，适用于内积谓词。这里的单密钥安全性意味着我们只允许对手学习一个受限密钥。需要注意的是，内积谓词以固定常数t作为特殊情况包括了t-CNF谓词。因此，尽管失去了共谋抗性并依赖更强的假设，该构造支持比第一个构造更丰富的谓词类别。
> 
> 我们使用LWE假设和不可区分性模糊化（IO）构建了适应性安全且O(1)-防共谋CPRFs，适用于所有电路。
> 
> 第一和第二构造是任何非平凡谓词的第一批在随机预言模型之外实现自适应安全的CPRFs，也是第一批依赖于强密码学假设的CPRFs。此外，第一个构造也是在这种情境下实现任何共谋抗性概念的首创。此外，我们证明了第一和第二构造满足弱1密钥隐私，大致意味着受限密钥不会泄露相应的约束条件。第三个构造是基于标准模型中对较少表达谓词的先前适应性安全CPRFs的改进。

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
> 一种软件水印方案可以在不显著改变其功能的情况下将消息嵌入程序中。此外，任何试图删除标记程序中嵌入消息的尝试都将大幅改变程序的功能。之前的水印方案构建侧重于对加密功能进行水印标记，例如伪随机函数（PRF）、公钥加密等。
> 
> 水印方案的一个自然安全要求是防止串通，其中对手的目标是在给定同一程序的多个标记版本的情况下删除嵌入的消息。目前，水印方案为公钥密码原语提供了强有力的安全保障，从标准假设中实现了防串通（Goyal et al.，CRYPTO 2019），并且通过对PRF的区分不清晰性混淆（Yang et al.，ASIACRYPT 2019）实现了PRF的防串通。然而，目前尚不清楚是否存在可以从标准假设中实现PRF的防串通水印方案。
> 
> 在这项工作中，我们通过提出一种通用构造来解决这个问题，将一个没有防串通能力的可水印PRF升级为具有防串通能力的PRF。我们构造的一个吸引人的特点是它可以保留原始方案的安全性质。例如，如果原始方案具有提取查询的安全性，新方案也将具有提取查询的安全性。此外，即使原始方案没有提供此安全性质，新方案也可以实现不可伪造性。通过将现有的PRF水印方案实例化到我们的构造中，我们可以从标准假设中获得防串通的可水印PRF，从而提供各种安全性质。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_20](https://doi.org/10.1007/978-3-030-56784-2_20)
## Verifiable Registration-Based Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#verifiable-registration-based-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#verifiable-registration-based-encryption)**
### 作者
* Rishab Goyal, MIT, Cambridge, USA
* Satyanarayana Vusirikala, UT Austin, Austin, USA
### 摘要
> 在最近的工作中，Garg、Hajiabadi、Mahmoody和Rahimi（18）引入了一种新的加密框架，他们将其称为基于注册的加密（Registration-Based Encryption, RBE）。RBE 的核心动机是为身份基础加密（Identity-Based Encryption, IBE）系统中已知的密钥托管问题提供一种新颖的解决方法（33）。简而言之，在 RBE 系统中，与 IBE 系统不同，没有私钥生成器，而是使用公钥累加器进行替代。RBE 系统中的每个用户都会生成自己的公-私钥对，并将公钥发送给累加器进行注册。密钥累加器没有秘密状态，只负责将所有已注册的用户标识-密钥对压缩成一个短的公共承诺。在这里，加密者只需要压缩参数和目标用户标识，而解密者则需要附加的密钥辅助材料以及与已注册公钥关联的秘密密钥。
> 
> [18] 中的初始构造仅基于标准假设，并提供了较弱的效率属性。在 Garg、Hajiabadi、Mahmoody、Rahimi 和 Sekar [19] 的后续工作中，他们根据标准假设提出了一个有效的 RBE 构造。然而，这两个工作都认为密钥累加器是诚实的，这在现实场景中可能是一个过强的假设。在本工作中，我们开始对具有恶意密钥累加器的 RBE 系统进行正式研究。为此，我们引入了一种增强的 RBE 框架，称为可验证 RBE（Verifiable RBE, VRBE）。VRBE 系统还赋予用户额外的能力，即从密钥累加器获得短证明，证明每个已注册用户的正确性（以及唯一性），以及证明任何尚未注册的标识的非注册。
> 
> 我们基于标准假设（如 CDH、因子分解、LWE）构建了提供注册和非注册的简洁证明的 VRBE 系统。我们的证明系统还自然地允许第三方进行更高效的审计过程。我们方法的副产品是，我们提供了比 Garg 等人（19）之前的工作中更高效的 RBE 构造。最后，我们开始研究将 VRBE 扩展到更广泛的访问和信任结构。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_21](https://doi.org/10.1007/978-3-030-56784-2_21)
## New Techniques for Traitor Tracing: Size N1/3 and More from Pairings.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#new-techniques-for-traitor-tracing-size-n1-3-and-more-from-pairings) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#new-techniques-for-traitor-tracing-size-n1-3-and-more-from-pairings)**
### 作者
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Palo Alto, USA
### 摘要
> 现有的基于配对的背叛者追踪方案所需的参数大小为\(O(\sqrt{N})\)，该情况自2006年开始存在。直觉上，这似乎与配对允许进行二次计算（产生二次压缩）的事实一致。
> 
> 在这项工作中，我们通过使用参数大小为\(O(\root 3 \of {N})\)的配对来构建了一种背叛者追踪方案，从而证明了这种直觉是错误的。我们还提供了各种参数大小的折衷方案，包括一种具有恒定大小的密文和公钥（但秘钥大小为线性）的方案。通过开发一些新的背叛者追踪技术，我们获得了这些方案，为基于配对的背叛者追踪方案在十年多的时间里提供了首次重大参数改进。

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
> 我们提出了用于属性加权和的功能加密方案，其中加密以N个属性-值对\((x_i,z_i)\)作为输入，其中\(x_i\)是公共的，\(z_i\)是私密的；秘钥与算术分支程序f相关联，解密返回加权和\(\sum _{i=1}^N f(x_i) z_i\)同时不泄漏关于\(z_i\)的任何附加信息。我们的主要构造实现了以下功能：
> 
> (1) 公共参数和秘钥大小紧凑，与N和秘密秘钥可以解密先验无界N的密文无关；
> 
> (2) 密文短，随着N和\(z_i\)的大小增加而增加，但不随\(x_i\)的大小增加；
> 
> (3) 针对无界共谋的仿真安全；
> 
> (4) 依赖于素阶双线性群中的标准k-线性假设。

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
> 安全放大是密码学中的一个根本问题。在这项工作中，我们研究了函数加密（FE）的安全放大。我们展示了两个主要结果：
> 
> 对于任意常数\(\epsilon \in (0,1)\)，我们可以将任何针对多项式规模对手\(\epsilon \)-安全的\(\mathsf {P/poly}\)的FE方案放大为无条件地完全安全的\(\mathsf {P/poly}\)的FE方案。
> 
> 对于任意常数\(\epsilon \in (0,1)\)，我们可以将任何针对亚指数规模对手\(\epsilon \)-安全的\(\mathsf {P/poly}\)的FE方案放大为无条件地完全亚指数安全的\(\mathsf {P/poly}\)的FE方案。
> 
> 此外，我们的这两个放大结果都保持了基础FE方案的紧凑性。以前，关于FE的放大结果仅在假定亚指数安全LWE的情况下是已知的。
> 
> 在此过程中，我们引入了一种称为集合同态秘密分享的新形式，可能具有独立的研究意义。此外，我们还引入了一种新的技术，允许我们讨论嵌套原语的安全放大，并证明了一个可以用于分析安全放大的并行重复的普遍定理。

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
> 我们介绍了动态分散功能加密（\(\textsf {DDFE}\)），这是功能加密的一种推广，允许多个用户以动态方式加入系统，而无需依赖可信第三方或昂贵且交互式的多方计算协议。
> 
> 这个概念涵盖了现有的功能加密的多用户扩展，例如多输入、多客户端和特定场景的多输入功能加密。
> 
> 我们定义并构建了各种功能的方案，这些方案可以作为后续原语的构建模块，并且在自身上也可能非常有用，例如一个在任何Abelian群中动态计算总和的方案。这些构造以模块化的方式建立在简单的原语之上，并且可以基于已广泛研究的假设进行实例化，例如DDH或LWE。
> 
> 我们的构造最终实现了一种内积方案，用于在随机预言机模型中使用素数阶群上聚合的加密数据计算加权和。

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
> 简洁非交互证明（SNARGs）能够以非常低的通信量对NP语句进行证明。近年来，在构建具有极短证明的SNARGs方面，理论和实践都取得了显著进展。目前，关于简洁性的最新成果是Groth在2016年Eurocrypt上提出的，他利用双线性映射构建了一种SNARG，其证明只由3个群元素组成。
> 
> 在这项工作中，我们首先构建了一个具有逆多项式可靠性的具体高效的指定验证者（预处理）SNARG，其中证明只由标准（通用）群中的2个群元素组成。与Groth的构造相比，这使得具体证明大小减少了50%。我们采用Bitansky等人（TCC 2013）的方法，该方法描述了从线性PCPs到SNARGs的编译器。我们的改进基于一种新的线性PCP打包技术，使我们能够构建只需要1个查询的线性PCPs，并将其编译成SNARG（使用通用群上的ElGamal加密）。我们新的SNARG的一个吸引人的特点是，验证者可以在离线阶段预计算一个与语句无关的查找表；然后，只需要2次指数运算和单次查找表操作即可验证证明。这使得我们的新指定验证者SNARG在要求快速验证和最小通信的环境中非常有吸引力。
> 
> 然后，我们转向构建证明只由一个群元素组成的论据的问题。在这里，我们首先证明了任何对于语言L的（可能是交互式的）论据，其中验证算法是“通用”的（即只执行通用的群运算），并且证明只由一个群元素组成，都意味着L的见证加密方案。然后，在对线性码的最小距离近似难度存在尚未证明但高度可信的假设下，我们可以构建一个关于NP的2消息简练论据，其中证明只由一个群元素组成。在同样的假设下，在通用群模型中，我们获得了关于NP的见证加密方案。在此过程中，我们还展示了在概念上类似但经过证明的近似难度结果下，存在一个对于NP具有可忽略真实性错误的2消息简练论据，其中证明者的消息只由两个群元素组成。在这两种情况下，我们获得了具有线性决策过程的简练论据（和线性PCPs）。我们的构造方法通过依赖不完全完备性，规避了Groth对于具有线性决策过程的这种论据系统的先前下界。换句话说，我们的构造方法具有消失但不可忽略的完备性错误，而Groth的下界隐含地假设了底层论据的可忽略真实性错误。因此，我们的技术突显了设计线性PCPs、简洁论据和见证加密方案的新途径。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_26](https://doi.org/10.1007/978-3-030-56784-2_26)
## Fully Deniable Interactive Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2020-1].md#fully-deniable-interactive-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2020-1].md#fully-deniable-interactive-encryption)**
### 作者
* Ran Canetti, Boston University, Boston, USA
* Sunoo Park, MIT and Harvard, Cambridge, USA
* Oxana Poburinnaya, University of Rochester, Rochester, USA
### 摘要
> 可否认加密（Canetti等，Crypto 1996）增强了在公共渠道上的秘密通信，提供了一个额外的保证，即通信的保密性即使在后来被迫（或自愿贿赂）以公开他们的全部内部状态（明文、密钥和随机数）时也得到保护。迄今为止，可否认加密和更一般的交互可否认通信的构造都只解决了一方受到威胁的受限情况（Sahai和Waters，STOC 2014）。主要问题是，如果两个方都同时被迫，可否认通信是否可能，这个问题一直未解决。
> 
> 我们以肯定回答了这个问题，提出了一种在两个方被迫的情况下完全可否认的通信协议。我们的方案有三个回合，假设次指数安全的不可区分混淆和单向函数，并使用一次在系统设置时生成的短全局参考字符串，足以支持无限次的加密和解密。
> 
> 在独立的兴趣方面，我们引入了一个称为“离线否认”的新概念，即使当各方声称的内部状态不一致时也能保护各方（这是先前定义未涵盖的情况）。我们的方案同时满足标准的可否认性和离线否认性。

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
> 我们提供了一种从（可注入的）陷阱函数构造选定密文安全公钥加密的方案。我们的构造是黑箱且不假定陷阱函数的任何特殊属性（例如，“有

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-56784-2_28](https://doi.org/10.1007/978-3-030-56784-2_28)
