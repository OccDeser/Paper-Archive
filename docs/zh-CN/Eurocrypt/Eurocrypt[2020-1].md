# Eurocrypt[2020-1]
## Mathematics and Cryptography: A Marriage of Convenience? - Invited Talk.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#mathematics-and-cryptography-a-marriage-of-convenience-invited-talk) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#mathematics-and-cryptography-a-marriage-of-convenience-invited-talk)**
### 作者
* Alice Silverberg, Departments of Mathematics and Computer Science, University of California, Irvine, Irvine, CA, USA
### 摘要
> 数学和密码学有着悠久的历史，就像任何长期的关系一样，经历了起伏不定的时刻。无论是一场婚姻的权宜之计还是一次真正的相爱，它们的后代都拥有自己的生活，并对世界产生了影响。本次邀请演讲将简要回顾过去的一些亮点，对这段婚姻的未来进行展望和鼓励，并根据个人经验和所得到的教训提供解决冲突、改善沟通以及合作愉快的建议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_1](https://doi.org/10.1007/978-3-030-45721-1_1)
## Mind the Composition: Birthday Bound Attacks on EWCDMD and SoKAC21.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#mind-the-composition-birthday-bound-attacks-on-ewcdmd-and-sokac21) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#mind-the-composition-birthday-bound-attacks-on-ewcdmd-and-sokac21)**
### 作者
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
### 摘要
> 在CRYPTO'17的一版初期，Mennink和Neves提出了EWCDMD，它是EWCDM的对偶版本，并展示了n比特的安全性，其中n是基础分组密码的块大小。在CRYPTO'19中，Chen等人提出了基于置换的设计SoKAC21，并展示了2n/3比特的安全性，其中n是基础置换的输入大小。在本文中，我们展示了对EWCDMD和SoKAC21的生日攻击，从而使其安全性声明无效。这两次攻击都利用了构造中固有的组合性质。受上述两次利用组合性质的攻击的启发，我们考虑了一些泛化的相关基于组合的理想原语构造（可能位于理想置换和随机预言者模型中），并给出了它们的生日边界区分器。具体来说，我们展示了针对以下情况的生日边界区分器：（1）一个秘密随机置换后跟一个公开随机函数；（2）两个秘密随机函数的组合。我们对SoKAC21和EWCDMD的区分器分别是（1）和（2）的直接结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_8](https://doi.org/10.1007/978-3-030-45721-1_8)
## Optimal Broadcast Encryption from Pairings and LWE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#optimal-broadcast-encryption-from-pairings-and-lwe) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#optimal-broadcast-encryption-from-pairings-and-lwe)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Shota Yamada, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### 摘要
> Boneh，Waters和Zhandry（CRYPTO 2014）使用多线性映射在系统的所有参数较小的情况下提供了一个解决公钥广播加密（BE）的长期难题的方案。在这项工作中，我们通过提供一个只使用双线性映射和学习与错误（LWE）的解决方案来改进他们的结果。我们的方案对任意数量的串谋者完全无碰撞性，并且可以推广为具有短参数的基于身份的广播系统。因此，我们从“Obfustopia”地区回收了优化广播加密问题。
> 
> 我们的主要技术贡献是一个密文策略属性基加密（CP-ABE）方案，其具有特殊的效率特性-其密文大小、密钥大小和公钥大小都与方案支持的电路大小无关。我们展示了这个特殊的CP-ABE方案意味着具有最佳参数的BE；但它也可能有独立的利益。我们的构造依赖于双线性映射和LWE的新颖相互作用，并在通用群模型中被证明是安全的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_2](https://doi.org/10.1007/978-3-030-45721-1_2)
## Combiners for Functional Encryption, Unconditionally.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#combiners-for-functional-encryption-unconditionally) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#combiners-for-functional-encryption-unconditionally)**
### 作者
* Aayush Jain, UCLA, Los Angeles, CA, USA
* Nathan Manohar, UCLA, Los Angeles, CA, USA
* Amit Sahai, UCLA, Los Angeles, CA, USA
### 摘要
> 功能加密（FE）组合器允许将许多功能加密方案的候选者结合起来，可能基于不同的计算假设，形成另一个功能加密候选者，并保证只要原始候选者中至少有一个是安全的，所产生的候选者就是安全的。该领域的基本问题是是否存在FE组合器。已经有一系列的作品Ananth等人（CRYPTO '16），Ananth-Jain-Sahai（EUROCRYPT '17），Ananth等人（TCC '19）关于从各种假设构建FE组合器。
> 
> 我们首次提出了对功能加密的组合器的无条件构造，完全解决了这个问题。我们的构造直接导致了一个无条件的通用功能加密方案，如果存在这样的功能加密方案，它就是安全的。以前的这些结果要么依赖于代数假设，要么需要亚指数安全假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_6](https://doi.org/10.1007/978-3-030-45721-1_6)
## Improving Key-Recovery in Linear Attacks: Application to 28-Round PRESENT.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#improving-key-recovery-in-linear-attacks-application-to-28-round-present) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#improving-key-recovery-in-linear-attacks-application-to-28-round-present)**
### 作者
* Antonio Flórez-Gutiérrez, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
### 摘要
> 线性密码分析是用于对对称原语进行安全评估的最重要工具之一。自引入以来，已经发表了许多改进和改良的方法，并且在不同密码中发现了许多应用。在这些升级中，Collard等人在2007年提出了一种基于FFT的最后一轮攻击密钥恢复部分加速的算法2。
> 
> 在本文中，我们提出了前一个算法的广义矩阵版本，可以轻松地考虑任意数量的密钥恢复轮数。我们还提供了利用密钥调度关系的高效变体，并可以与多个线性攻击结合使用。
> 
> 利用我们的算法，我们在PRESENT上进行了一些新的密码分析，包括据我们所知对28轮的首次攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_9](https://doi.org/10.1007/978-3-030-45721-1_9)
## Candidate iO from Homomorphic Encryption Schemes.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#candidate-io-from-homomorphic-encryption-schemes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#candidate-io-from-homomorphic-encryption-schemes)**
### 作者
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Nico Döttling, CISPA Helmoltz Center for Information Security, Saarbrücken, Germany
* Sanjam Garg, UC Berkeley, Berkeley, USA
* Giulio Malavolta, UC Berkeley, Berkeley, USA
* Giulio Malavolta, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 我们提出了一种构建通用不可区分性混淆（iO）的新方法。我们的构建是通过一种新的中间基元进行的，我们称之为分裂全同态加密（Split FHE），我们证明它足以构建iO。具体而言，分裂全同态加密是一种全同态加密（FHE），其中解密过程采用以下两步句法形式：（i）秘密解密步骤使用秘钥并生成一个提示，该提示（渐近地）要比加密消息的长度短，（ii）公开解密步骤仅需要密文和先前生成的提示（而非整个秘钥），并恢复加密的消息。在安全方面，对一组密文的提示不应该允许违反其他密文的语义安全性。
> 
> 接下来，我们展示了一种基于三个构件的分裂全同态加密的通用候选构建：（i）具有线性解密和乘法的标准全同态加密方案（可以通过几乎所有基于LWE的构造进行实例化），（ii）具有短解密提示的线性同态加密方案（例如基于DCR问题的Damgård-Jurik加密方案），以及（iii）加密哈希函数（可以基于各种标准假设进行构建）。我们的方法是启发式的，即我们的构建不能被证明是安全的，并且对这些底层基元之间的相互作用作了隐含的假设。我们通过在适当定义的预言机模型中提供论证，证明了这种构建是安全的。
> 
> 我们认为我们的构建与现有技术构建有很大的区别，并且事实上相当简单。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_4](https://doi.org/10.1007/978-3-030-45721-1_4)
## Tight Security Bounds for Double-Block Hash-then-Sum MACs.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#tight-security-bounds-for-double-block-hash-then-sum-macs) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#tight-security-bounds-for-double-block-hash-then-sum-macs)**
### 作者
* Seongkwang Kim, KAIST, Daejeon, Korea
* Byeonghak Lee, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
### 摘要
> 在这个研究中，我们研究了具有双块内部状态的确定性消息认证码（MAC）构造的安全性，由双块哈希-求和（\(\mathsf {DbHtS}\)）范式捕捉。大多数\(\mathsf {DbHtS}\)构造，包括\(\mathsf {PolyMAC}\)、\(\mathsf {SUM\text {-}ECBC}\)、\(\mathsf {PMAC\text {-}Plus}\)、\(\mathsf {3kf9}\)和\(\mathsf {LightMAC\text {-}Plus}\)，当它们使用n位块密码实例化时，已被证明在最多 \(2^{\frac{2n}{3}}\) 个查询时为伪随机，而已知的最好的通用攻击需要 \(2^{\frac{3n}{4}}\) 个查询。
> 
> 通过在 \(2^{\frac{3n}{4}}\) 个查询（忽略消息长度上限）时证明 \(\mathsf {DbHtS}\) 构造的伪随机函数（PRF）安全性，我们填补了这一差距。安全性证明的核心是细化反射理论，该理论系统地估计一组方程和非方程的解的数量，并将其应用于证明最终化函数的安全性。然后，我们确定了内部哈希函数的安全要求，以确保与最终化函数结合后得到的构造的 3n/4 位安全性。
> 
> 在这个框架下，我们证明了 \(\mathsf {DbHtS}\) 的安全性，其中内部哈希函数被给定为使用两个独立密钥的通用哈希函数的拼接。这类构造包括 \(\mathsf {PolyMAC}\) 和 \(\mathsf {SUM\text {-}ECBC}\)。此外，我们还证明了\(\mathsf {PMAC\text {-}Plus}\)、\(\mathsf {3kf9}\) 和 \(\mathsf {LightMAC\text {-}Plus}\)在 \(2^{\frac{3n}{4}}\) 个查询上的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_16](https://doi.org/10.1007/978-3-030-45721-1_16)
## Tight Time-Space Lower Bounds for Finding Multiple Collision Pairs and Their Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#tight-time-space-lower-bounds-for-finding-multiple-collision-pairs-and-their-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#tight-time-space-lower-bounds-for-finding-multiple-collision-pairs-and-their-applications)**
### 作者
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beer Sheva, Israel
### 摘要
> 我们考虑一个碰撞搜索问题（CSP），其中给定参数C，目标是在随机函数\(f:[N] \rightarrow [N]\)（其中\([N] = \{0,1,\ldots ,N-1\}\)）中使用S位内存找到C个碰撞对。CSP的算法具有许多密码分析应用，如对双重和三重加密的空间高效攻击。目前已知的CSP算法中最好的是由van Oorschot和Wiener发表的并行碰撞搜索（PCS），它实现了时间-空间折中\(T^2 \cdot S = \tilde{O}(C^2 \cdot N)\)。
> 
> 在本文中，我们证明了CSP的任何算法都满足\(T^2 \cdot S = \tilde{\varOmega }(C^2 \cdot N)\)，因此目前已知的时间-空间折中是最优的（在N的对数多项式因子上）。另一方面，我们提供了强有力的证据，表明在CSP应用中证明类似的无条件时间-空间折中下界（如破解双重和三重加密）可能非常困难，并且可能导致复杂性理论的突破。因此，我们提出了一个新的限制计算模型，并证明在该模型下，对双重加密的已知最佳时间-空间折中攻击是最优的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_15](https://doi.org/10.1007/978-3-030-45721-1_15)
## The Retracing Boomerang Attack.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#the-retracing-boomerang-attack) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#the-retracing-boomerang-attack)**
### 作者
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
* Nathan Keller, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Eyal Ronen, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Eyal Ronen, COSIC, KU Leuven, Heverlee, Belgium
* Adi Shamir, Faculty of Mathematics and Computer Science, Weizmann Institute of Science, Rehovot, Israel
### 摘要
> 回飞镖攻击是差分攻击的扩展，通过将加密系统的第一部分和第二部分的两个无关的差分特性的概率p和q结合起来，形成了整个加密系统的新的类似差分的特性，概率为\(p^2q^2\)（因为每个特性都必须满足两次）。在本文中，我们描述了一种新版本的回飞镖攻击，该攻击使用了具有违反直觉的思想，即通过丢弃大部分数据，以强制在密文侧之间产生某些值的相等性。在某些情况下，这会在这四个概率事件之间创建相关性，从而增加合并特性的概率到\(p^2q\)，并增加区分器的信噪比。我们将这个变种称为倒退回飞镖攻击，因为我们确保我们投掷的回飞镖在正向和反向方向上遵循相同的路径。为了展示这种新技术的威力，我们将其应用于5轮AES的情况。这个版本的AES曾经受到各种攻击技术的反复攻击，但二十年来其复杂性一直停留在\(2^{32}\)。在Crypto'18上，它终于降低到\(2^{24}\)（用于完全密钥恢复），而我们的新技术可以进一步将完全密钥恢复的复杂性降低到令人惊讶的低值\(2^{16.5}\)（即只需要进行90,000次加密/解密操作，就可以对AES的一半轮进行完全密钥恢复）。
> 
> 除了改进以前的攻击，我们的新技术揭示了回飞镖攻击与两种其他密码分析技术——yoyo游戏和最近引入的混合差分之间的隐藏关系。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_11](https://doi.org/10.1007/978-3-030-45721-1_11)
## Security of Hedged Fiat-Shamir Signatures Under Fault Attacks.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#security-of-hedged-fiat-shamir-signatures-under-fault-attacks) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#security-of-hedged-fiat-shamir-signatures-under-fault-attacks)**
### 作者
* Diego F. Aranha, Department of Engineering, DIGIT, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
* Akira Takahashi, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
* Greg Zaverucha, Microsoft Research, Redmond, USA
### 摘要
> 确定性生成每个

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_23](https://doi.org/10.1007/978-3-030-45721-1_23)
## New Slide Attacks on Almost Self-similar Ciphers.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#new-slide-attacks-on-almost-self-similar-ciphers) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#new-slide-attacks-on-almost-self-similar-ciphers)**
### 作者
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
* Nathan Keller, Department of Mathematics, Bar-Ilan University, Ramat-Gan, Israel
* Noam Lasry, Department of Mathematics, Bar-Ilan University, Ramat-Gan, Israel
* Adi Shamir, Faculty of Mathematics and Computer Science, Weizmann Institute of Science, Rehovot, Israel
### 摘要
> 滑动攻击是一种强大的密码分析工具，可以破解迭代块密码，而且其复杂度不取决于轮数。然而，滑动攻击要求完全的自相似性，即所有轮必须完全相同。虽然在费斯特尔结构中可能会出现这种情况，但在SP网络中很少发生，因为最后一轮必须以额外的后白化子密钥结束。此外，在许多SP网络中，最后一轮存在额外的不对称性-例如，在AES中，最后一轮省略了MixColumns操作。最后一轮的这种不对称性可能使得难以利用滑动攻击的大多数先进工具，例如通过重复加密其密文从一个滑动对派生出额外的滑动对。因此，几乎所有对真实密码系统的滑动攻击的成功应用（例如FF3、GOST、SHACAL-1）都针对费斯特尔结构而不是SP网络。
> 
> 在本文中，我们通过开发四种新类型的滑动攻击解决了这个“最后一轮问题”。我们通过将它们应用于许多类型的类似AES的结构（最后一轮是否存在线性混淆，是否存在已知或秘密的S盒，其子密钥的周期性为1、2和3等）来展示它们的强大能力。在这些情况中，我们攻击的时间复杂度接近于\(2^{n/2}\)，对于大多数滑动攻击来说，这是最小的可能复杂度。我们的新滑动攻击具有几个独特的特点：第一种使用滑动集合，其中第一组中的每个明文与第二组中的某个明文形成滑动对，但不知道确切对应关系。第二种可以从多个滑动对中创建指数数量的新滑动对，这些滑动对形成由给定的对张成的超立方体。第三种具有非常规的特性，它总是成功的，第四种可以使用已知消息而不是选择的消息，只是时间复杂度略高一些。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_10](https://doi.org/10.1007/978-3-030-45721-1_10)
## Indistinguishability Obfuscation Without Maps: Attacks and Fixes for Noisy Linear FE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#indistinguishability-obfuscation-without-maps-attacks-and-fixes-for-noisy-linear-fe) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#indistinguishability-obfuscation-without-maps-attacks-and-fixes-for-noisy-linear-fe)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Alice Pellet-Mary, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 候选的不可区分混淆（\(\mathsf {iO}\)）可以被分为“直接构造”和“基于引导”的两类。直接构造依赖于高度多线性映射[28, 29]，并提供启发式保证，而基于引导的构造[2、7、33、36、38、39]则在最好的情况下依赖于双线性映射以及学习错误（\(\mathsf {LWE}\)）假设和伪随机生成器的新变体。最近，在双线性映射（以及其他假设）的基础上进行了不可区分混淆（\(\mathsf {iO}\)）的构造方面取得了令人兴奋的进展[2、7、33、38]。
> 
> 值得注意的是，最近由Agrawal [2]提供的一项工作在不使用任何映射的情况下构建了\(\mathsf {iO}\)。该工作确定了一个名为嘈杂线性功能加密（\(\mathsf {NLinFE}\)）的新基元，它被证明足够用于\(\mathsf {iO}\)，并对\(\mathsf {NLinFE}\)进行了直接构造，使用了关于格的新假设。尽管原始工作提供了嘈杂线性功能加密新假设的初步密码分析，但作者承认在对该方案的安全性放心之前，需要进行更多的密码分析。此外，作者没有为构造提出具体的参数。
> 
> 在这项工作中，我们填补了这一空白，对\(\mathsf {NLinFE}\)进行了彻底的密码分析研究。我们设计了两种攻击方法，可以完全破坏该方案的安全性。我们的攻击是全新的，与被用于破坏其他候选的\(\mathsf {iO}\)的攻击无关。为了实现这一目标，我们开发了新的密码分析技术，希望能够为\(\mathsf {NLinFE}\)的未来设计提供参考。
> 
> 通过我们的密码分析研究获得的知识，我们对该方案提出了修改建议。我们提供了一个新方案，克服了之前发现的漏洞。我们还对该方案的所有安全方面进行了彻底分析，并解释了为什么可行的攻击不起作用。此外，我们还提供了具体的参数，该方案可以实现。我们相信，由于这项工作的结果，\(\mathsf {NLinFE}\)的安全性有了显著的基础。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_5](https://doi.org/10.1007/978-3-030-45721-1_5)
## Extracting Randomness from Extractor-Dependent Sources.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#extracting-randomness-from-extractor-dependent-sources) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#extracting-randomness-from-extractor-dependent-sources)**
### 作者
* Yevgeniy Dodis, NYU, New York, USA
* Vinod Vaikuntanathan, MIT, Cambridge, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Daniel Wichs, NTT Research Inc., East Palo Altos, USA
### 摘要
> 我们重新审视了从具有足够最小熵的任意源中提取几乎均匀随机性的问题。强种子提取器通过依赖于源不知道的公共随机种子来解决此问题。在这里，我们考虑了一种情况，其中种子随时间重复使用，并且源可以依赖于先前使用相同种子调用提取器的情况。我们是否仍然可以提取几乎均匀随机性？
> 
> 更详细地说，我们假设种子是随机选择的，但源可以通过给定的种子对提取器进行任意预言查询，然后输出一个样本。我们要求样本具有熵，并且与先前查询的任何值都不同。即使区分者获得种子，提取的输出也应该看起来均匀。我们考虑问题的两个变体，取决于源是否仅输出样本，还是是否还可以输出保留样本熵的一些相关公共辅助信息。我们的结果是：
> 
> 无辅助信息：我们证明，在此设置中，具有足够高安全级别的每个伪随机函数（PRF）都是良好的提取器，即使区分者的计算能力是无限的。我们进一步证明，源必须具有计算上的约束，并且这种提取器暗示单向函数。
> 
> 有辅助信息：只要源和区分者都具有计算能力的约束，我们就可以在此设置中构建安全提取器。我们提供了基于不同中间原语的多个构造，得到基于DDH、DLIN、LWE或DCR假设的实例。在负面方面，我们证明不能通过黑盒规约在此设置中对抗计算能力无限的区分者进行安全性证明。此外，即使限制在计算能力有限的区分者上，我们也证明在此设置中存在不安全的伪随机函数作为提取器，并且大量构造不能通过标准假设的黑盒规约来证明安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_12](https://doi.org/10.1007/978-3-030-45721-1_12)
## Evolving Ramp Secret Sharing with a Small Gap.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#evolving-ramp-secret-sharing-with-a-small-gap) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#evolving-ramp-secret-sharing-with-a-small-gap)**
### 作者
* Amos Beimel, Department of Computer Science, Ben Gurion University, Beer Sheva, Israel
* Hussien Othman, Department of Computer Science, Ben Gurion University, Beer Sheva, Israel
### 摘要
> 进化的秘密分享方案是由Komargodski、Naor和Yogev（TCC 2016b）引入的一种秘密分享方案，其中没有参与方数量的先验上限。参与方逐个到达，当一个参与方到达时，经销商会给予其一个份额；经销商在其他参与方到达时不能更新此份额。鉴于当知道参与方数量时，坡道秘密分享方案比阈值秘密分享方案更高效的事实，我们研究进化的坡道秘密分享方案。具体而言，我们研究进化的（b(j), g(j)）-坡道秘密分享方案，其中\(g,b: \mathbb {N}\rightarrow \mathbb {N}\)是非递减函数。在这样的方案中，对于某个j，包含前j个到达的第一批参与方中的g(j)个参与方的任何一组可以重构出秘密，而对于每个j，包含前j个到达的第一批参与方中少于b(j)个参与方的任何一组都无法获得有关秘密的任何信息。
> 
> 我们专注于间隙很小的情况，即\(g(j)-b(j)=j^{\beta }\)，其中 \(0<\beta <1\)。我们证明存在一个具有间隙\(t^{\beta }\)的进化坡道秘密分享方案，其中第j个参与方的份额大小为\(\tilde{O}(j^{4-\frac{1}{\log ^2 {1/\beta }}})\)。此外，我们证明对于固定值的\(\beta\)，我们的构造导致了更好的份额大小，即存在一个具有间隙\(\sqrt{j}\)的进化坡道秘密分享方案，其中第j个参与方的份额大小为\(\tilde{O}(j)\)。我们的构造应该与已知最佳的进化g(j)-阈值秘密分享方案（即当\(b(j)=g(j)-1\)时）进行比较，在这种方案中，第j个参与方的份额大小是\(\tilde{O}(j^4)\)。因此，我们的构造对于每个常数\(\beta\)都提供了显著改进，表明允许授权集和非授权集之间存在间隔可以减小份额大小。
> 
> 此外，我们提出了一个适用于常数k（可能非常大）的进化（k/2, k）-坡道秘密分享方案，其中至少包含k个参与方的任何一组可以重构出秘密，而最多包含k/2个参与方的任何一组都无法获得有关秘密的任何信息。我们构造中第j个参与方的份额大小为\(O(\log k\log j)\)。这是对已知最佳的进化k阈值秘密分享方案的改进，在该方案中，第j个参与方的份额大小为\(O(k\log j)\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_19](https://doi.org/10.1007/978-3-030-45721-1_19)
## How to Extract Useful Randomness from Unreliable Sources.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#how-to-extract-useful-randomness-from-unreliable-sources) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#how-to-extract-useful-randomness-from-unreliable-sources)**
### 作者
* Luisa Siniscalchi, Concordium Blockchain Research Center, Aarhus University, Aarhus, Denmark
* João Ribeiro, Imperial College London, London, UK
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* Ivan Visconti, University of Salerno, Fisciano, Italy
### 摘要
> 在过去的30多年中，密码学家一直在寻找公开来源的均匀随机性，以便在运行吸引人的加密协议时不依赖值得信任的第三方。不幸的是，现在可以说假设存在产生公开均匀随机性的物理现象与现实相去甚远。
> 
> 众所周知，无法从单个弱源中提取出均匀随机性。克服这一问题的一种被广泛研究的方法是考虑多个独立的弱源。然而，这意味着我们必须相信从物理过程中采样的弱随机性的各种过程。
> 
> 基于上述现状，本研究考虑了一个设置，玩家可以访问多个潜在的弱随机性源，其中有几个可能会被计算能力没有限制的对手共同损坏。我们引入SHELA（Somewhere Honest Entropic Look Ahead）源来模拟这种情况。
> 
> 我们展示了从SHELA源中提取均匀随机性是没有希望的。相反，我们关注于某处提取（即输出几个候选字符串，其中一些是均匀分布的-尽管我们不知道哪些），并为具有良好参数的SHELA源给出了明确的构造。
> 
> 然后，我们介绍了上述某处提取的应用，其中公开的均匀随机性可以被来自可污损源的提取结果所取代，从而大大优于琐碎的解决方案。某处提取的输出在其他场景中也很有用，例如作为许多随机算法的适当随机硬币源。
> 
> 另外，我们全面研究了从弱源进行某处提取的问题，并得出一系列界限。我们的界限突出了一个事实，在大多数参数范围（包括应用相关的范围）中，与参数相当的弱源相比，SHELA源在某处提取过程和随机化算法成功概率的放大任务上表现出显著优势。此外，在弱源中某处提取的质量较低排除了其在各种高效应用中的使用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_13](https://doi.org/10.1007/978-3-030-45721-1_13)
## Friet: An Authenticated Encryption Scheme with Built-in Fault Detection.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#friet-an-authenticated-encryption-scheme-with-built-in-fault-detection) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#friet-an-authenticated-encryption-scheme-with-built-in-fault-detection)**
### 作者
* Thierry Simon, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Lejla Batina, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Joan Daemen, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Vincent Grosso, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Pedro Maat Costa Massolino, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Kostas Papagiannopoulos, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Niels Samwel, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Vincent Grosso, CNRS/Univ. Lyon, Laboratoire Hubert Curien, UMR 5516, Saint-Etienne, France
* Francesco Regazzoni, ALaRI, University of Lugano, Lugano, Switzerland
* Thierry Simon, STMicroelectronics Diegem, Diegem, Belgium
* Kostas Papagiannopoulos, NXP Semiconductors Hamburg, Hamburg, Germany
### 摘要
> 在这项工作中，我们提出了一个基于新置换\(\textsc {Friet-P}\)的基于双工的认证加密方案\(\textsc {Friet}\)。我们设计了\(\textsc {Friet-P}\)，采用了一种新的加密置换和分组密码的方法，考虑了抗故障攻击，并在本文中介绍。
> 
> 在这种方法中，我们构建一个置换\({f_C}\)来嵌入到一个更大的置换\(f\)中。首先，我们将\(f\)定义为一系列步骤，所有步骤都遵守一个选择的纠错码\(C\)，即将\(C\)码字映射到\(C\)码字。然后，我们通过首先将其输入编码为C的元素，应用\(f\)，然后再从C中解码回来，将\({f_C}\)嵌入到\(f\)中。当\(f\)的输出不在\(C\)中时，最后一步检测到故障。
> 
> 我们激励我们在\(\textsc {Friet}\)中使用的置换的设计，并报告了软件和硬件性能。我们通过攻击评估了软件和模拟硬件实现的故障检测能力。最后，我们进行了泄漏评估。我们的代码可在https://github.com/thisimon/Friet.git 上找到。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_21](https://doi.org/10.1007/978-3-030-45721-1_21)
## Transparent SNARKs from DARK Compilers.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#transparent-snarks-from-dark-compilers) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#transparent-snarks-from-dark-compilers)**
### 作者
* Benedikt Bünz, Stanford, Stanford, USA
* Ben Fisch, Stanford, Stanford, USA
* Alan Szepieniec, Nervos Foundation, Panama City, Panama
### 摘要
> 我们构建了一个新的一元和多元有限域上的多项式承诺方案，具有以多项式系数数量为度量单位的对数大小的评估证明和验证时间。底层技术是一种基于知识的丢番图方程（Diophantine Argument of Knowledge，DARK），利用多项式和未知阶数群的整数表示。安全性通过强RSA和自适应根假设得到证明。此外，该方案在使用类群实例化时不需要可信设置。我们将这个新的密码编译器应用于一类受限的代数线性IOPs，我们称之为多项式IOPs，以获得任何NP关系的简洁通信的双效公币交互证明。通过线性预处理，在线验证者的工作与关系电路复杂度的对数成正比。
> 
> 存在许多既有的多项式IOPs（PIOPs）的例子，可以追溯到第一个PCP（BFLS，STOC’91）。我们提出了使用我们的DARK多项式承诺方案对任何PIOP进行通用编译的方法。特别地，使用我们的DARK多项式承诺方案对PLONK（GWC，ePrint’19）中的PIOP进行编译，这是对Sonic（MBKM，CCS’19）的改进，得到了一个具有准线性预处理、准线性（在线）证明时间、对数通信以及对数（在线）验证时间的公币交互证明。应用Fiat-Shamir结果得到一个SNARK，我们称之为Supersonic。
> 
> Supersonic在具体效率上也是高效的，对于具有100万个门的电路，具有10 KB的证明和不到100毫秒的验证时间（估计为120位安全性）。最重要的是，这个SNARK是透明的：它不需要可信设置。通过应用我们的多项式承诺方案的隐藏变种与零知识评估，我们获得了zk-SNARKs。Supersonic是第一个既具有实际证明时间又在渐近上具有对数证明大小和验证时间的完整zk-SNARK系统。完整论文的版本可在线获取[19]。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_24](https://doi.org/10.1007/978-3-030-45721-1_24)
## Fault Template Attacks on Block Ciphers Exploiting Fault Propagation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#fault-template-attacks-on-block-ciphers-exploiting-fault-propagation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#fault-template-attacks-on-block-ciphers-exploiting-fault-propagation)**
### 作者
* Sayandeep Saha, Department of Computer Science and Engineering, Indian Institute of Technology, Kharagpur, Kharagpur, India
* Arnab Bag, Department of Computer Science and Engineering, Indian Institute of Technology, Kharagpur, Kharagpur, India
* Debapriya Basu Roy, Department of Computer Science and Engineering, Indian Institute of Technology, Kharagpur, Kharagpur, India
* Sikhar Patranabis, Department of Computer Science and Engineering, Indian Institute of Technology, Kharagpur, Kharagpur, India
* Debdeep Mukhopadhyay, Department of Computer Science and Engineering, Indian Institute of Technology, Kharagpur, Kharagpur, India
* Sikhar Patranabis, Department of Computer Science, ETH Zurich, Zürich, Switzerland
* Debapriya Basu Roy, Technische Universität München, Munich, Germany
### 摘要
> 故障攻击（FA）是现代密码实现面临的潜在实际威胁之一。多年来，FA技术已经发展，逐渐向着利用故障的设备特定性质的方向发展。在本文中，我们利用了这样一个事实，即通过给定的组合电路激活和传播故障（即故障的可观测性）是依赖于数据的。接下来，我们展示了这种组合电路的属性导致了强大的故障模板攻击（FTA），即使针对功耗和基于故障的漏洞拥有专用保护的实现也同样适用。本文中发现的攻击即使在区块密码的中间轮进行故障注入，这是大多数其他现有故障分析策略无法达到的。显而易见，它们也适用于已知明文的情况。此外，中间轮攻击完全是盲目的，因为不需要访问密文（正确/故障）或明文。假设敌手只能重复一个未知明文多次。通过对受SCA-FA保护的PRESENT硬件实现的实际验证以及对受保护的AES的公共软件实现的模拟评估，验证了所提出的攻击的有效性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_22](https://doi.org/10.1007/978-3-030-45721-1_22)
## Low Error Efficient Computational Extractors in the CRS Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#low-error-efficient-computational-extractors-in-the-crs-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#low-error-efficient-computational-extractors-in-the-crs-model)**
### 作者
* Ankit Garg, Microsoft Research India, Bangalore, India
* Yael Tauman Kalai, Microsoft Research New England, Cambridge, USA
* Dakshita Khurana, University of Illinois Urbana-Champaign, Champaign, IL, USA
### 摘要
> 近年来，对于低最小熵源的双源提取器的构建取得了令人兴奋的进展。遗憾的是，所有已知的低熵区域的双源提取器的显式构造都遭受着不可忽视的错误，而构建具有可忽略错误的此类提取器仍然是个开放的问题。我们在计算环境中研究这个问题，并得出以下结果。
> 
> 我们在公共随机字符串（CRS）模型的计算假设下，为低最小熵源构建了一个显式的2源提取器，甚至是一个显式的不可伪造的提取器，该提取器有可忽略的错误。更具体地说，我们假设一次性生成CRS，并且允许最小熵源依赖于CRS。我们通过使用以下转换获得我们的构造。
> 
> 1. 在[5]的技术基础上，我们展示了一个一般转换，将任何计算2源提取器（在CRS模型中）转换为具有相似最小熵源的计算不可伪造提取器（在CRS模型中）。
> 
> 我们强调，结果出来的计算不可伪造提取器能够抵抗任意多次篡改攻击（这是在信息理论上无法实现的属性）。这可能具有独立的兴趣。
> 
> 这个转换使用了密码学，并依赖于决策性Diffie Hellman（DDH）假设的亚指数难度。
> 
> 2. 接下来，在[1]的图纸基础上，我们给出一个转换，将我们的计算不可伪造提取器（在CRS模型中）转换为具有低最小熵源的计算2源提取器（在CRS模型中）。我们的2源提取器适用于不平衡的源：具体来说，我们要求源中的一个比另一个的特定多项式大。
> 
> 这个转换不会引起任何额

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_14](https://doi.org/10.1007/978-3-030-45721-1_14)
## Modeling for Three-Subset Division Property Without Unknown Subset - Improved Cube Attacks Against Trivium and Grain-128AEAD.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#modeling-for-three-subset-division-property-without-unknown-subset-improved-cube-attacks-against-trivium-and-grain-128aead) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#modeling-for-three-subset-division-property-without-unknown-subset-improved-cube-attacks-against-trivium-and-grain-128aead)**
### 作者
* Yonglin Hao, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Gregor Leander, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Willi Meier, FHNW, Windisch, Switzerland
* Yosuke Todo, NTT Secure Platform Laboratories, Tokyo, 180-8585, Japan
* Qingju Wang, SnT, University of Luxembourg, Esch-sur-Alzette, Luxembourg
### 摘要
> 分组特性是一种通用工具，用于寻找整数区分器，而自动工具如MILP或SAT/SMT可以使我们有效地评估传播。在应用到流密码系统中，它使我们能够理论上估计立方攻击的安全性，并且导致了对知名流密码系统的最佳密钥恢复攻击。然而，据报道，基于分组特性的一些密钥恢复攻击由于分组特性的不准确性而退化为区分攻击。三子集分组特性（无未知子集）是解决这一不准确性问题的一种有前途的方法，并且最近在Asiacrypt2019提出了一种使用自动工具进行三子集分组特性的新算法。本文首先表明这种最新算法并非总是高效的，我们无法改进现有的密钥恢复攻击。然后，我们专注于没有未知子集的三子集分组特性的特点，并提出了另一种使用自动工具的新高效算法。我们的算法比现有算法更高效，并且可以改进现有的密钥恢复攻击。在Trivium的应用中，我们展示了一种841轮的密钥恢复攻击。我们还表明，在CRYPTO2018提出的855轮密钥恢复攻击存在关键缺陷，无法发挥作用。因此，我们的841轮攻击成为最佳的密钥恢复攻击。在Grain-128AEAD的应用中，我们展示了已知的184轮密钥恢复攻击退化为区分攻击。然后，将区分攻击改进至189轮，并且我们还展示了对190轮的最佳密钥恢复攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_17](https://doi.org/10.1007/978-3-030-45721-1_17)
## Marlin: Preprocessing zkSNARKs with Universal and Updatable SRS.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#marlin-preprocessing-zksnarks-with-universal-and-updatable-srs) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#marlin-preprocessing-zksnarks-with-universal-and-updatable-srs)**
### 作者
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* Yuncong Hu, UC Berkeley, Berkeley, USA
* Pratyush Mishra, UC Berkeley, Berkeley, USA
* Noah Vesely, UC Berkeley, Berkeley, USA
* Nicholas Ward, UC Berkeley, Berkeley, USA
* Mary Maller, Ethereum Foundation, London, UK
### 摘要
> 我们提出了一种构建预处理zkSNARKs的方法，其中结构引用字符串（SRS）是通用且可更新的。这利用了全息学的一种新颖运用[Babai et al., STOC 1991]，通过给定编码形式的语句，实现了快速验证。
> 
> 我们使用这种方法来获得一个预处理zkSNARK，其中SRS的大小是线性的，参数的大小是恒定的。我们的构建改进了此设置中之前的最新技术Sonic [Maller et al., CCS 2019] 的所有效率参数：证明的速度提高一个数量级，并且验证速度提高三倍，即使SRS大小和参数大小更小。我们的构建在代数群模型（也是Sonic所使用的）中实例化时效率最高，但我们还展示了如何在具体知识假设下实现它。我们对我们的构建进行了实现和评估。
> 
> 我们预处理zkSNARK的核心是一种高效的代数全息证明（AHP），用于解决秩1约束可满足性（R1CS），它实现了线性证明长度和常数查询复杂度。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_26](https://doi.org/10.1007/978-3-030-45721-1_26)
## Fractal: Post-quantum and Transparent Recursive Proofs from Holography.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#fractal-post-quantum-and-transparent-recursive-proofs-from-holography) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#fractal-post-quantum-and-transparent-recursive-proofs-from-holography)**
### 作者
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* Dev Ojha, UC Berkeley, Berkeley, USA
* Nicholas Spooner, UC Berkeley, Berkeley, USA
### 摘要
> 我们提出了一种高效实现简明非交互式知识论证（SNARKs）的递归组合方法。在这项工作之前，已知的方法只依赖于基于配对友好椭圆曲线循环实例化的基于配对的SNARKs，这是一个昂贵的代数对象。我们的方法不依赖于任何特殊的代数对象，并且还实现了新的有益属性：它是后量子的，并且是透明的（设置是公共币）。
> 
> 我们利用预处理的SNARKs在递归组合方面较为简化的事实，我们的工作核心是获取一个后量子和透明的用于排名-1约束满足性（R1CS）的预处理zkSNARK。我们通过在随机预言模型中建立全息学与预处理之间的联系，然后构建R1CS的全息证明来实现这一点。
> 
> 我们通过实验证实了我们的方法，在实践中展示了可行性。 （此工作的完整版本可在https://ia.cr/2019/1076上获得。）

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_27](https://doi.org/10.1007/978-3-030-45721-1_27)
## Blackbox Secret Sharing Revisited: A Coding-Theoretic Approach with Application to Expansionless Near-Threshold Schemes.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#blackbox-secret-sharing-revisited-a-coding-theoretic-approach-with-application-to-expansionless-near-threshold-schemes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#blackbox-secret-sharing-revisited-a-coding-theoretic-approach-with-application-to-expansionless-near-threshold-schemes)**
### 作者
* Ronald Cramer, CWI Amsterdam, Amsterdam, The Netherlands
* Ronald Cramer, Leiden University, Leiden, The Netherlands
* Chaoping Xing, Shanghai Jiao Tong University, Shanghai, China
### 摘要
> 黑盒秘密共享（BBSS）方案在所有有限阿贝尔群G中的工作方式完全相同；可以为任何这样的群G实例化，并且只需要其群操作和随机群元素的黑匣子访问。秘密是单个群元素，每个n个玩家的份额都是这些元素的向量。份额计算和秘密重建是通过整数线性组合实现的。这些不依赖于G，隐私和重建参数t，r也不依赖于G。这一经典而基本的原始方法是由Desmedt和Frankel（CRYPTO 1989年）在他们的“门限密码学”背景下引入的。扩展系数是完全分享中组元素的总数除以n。对于t-隐私的门限BBSS（\(1\le t \le n-1\)）、\(t+1\)-重建和任意n，存在具有最小扩展\(O(\log n)\)的构造（CRYPTO 2002年，2005年）。
> 
> 这些结果牢固根植于数论；每个结果选择数域中的秩有序的不同元素的聪明方式（数域度数）并相应的范德蒙行列式受到足够控制，以便通过对Shamir方案的合适调整实现BBSS。替代方法通常导致非常大的扩展。BBSS的最新技术已经17年没有变化。
> 
> 我们的贡献是双重的。（1）我们引入了一种基于编码理论而不是数论的新颖的非平凡的有效的BBSS构造。对于门限BBSS，我们还实现了最小的扩展系数\(O(\log n)\)。（2）我们的方法更加多才多艺。换句话说，我们首次展示了近门限的BBSS，即\(r-t\)是n的任意小常数比例，并且具有O(1)的扩展系数，即个体份额向量长度为常数（“渐近无扩展”）。门限可以在全范围内自由集中。我们还展示了近门限的扩展是最小的，并且这种BBSS不能通过以前的方法实现。
> 
> 我们的一般构造基于一个众所周知的数学原理，即局部-全局原理。更确切地说，我们首先通过Reed-Solomon或代数几何码在局部环上构建BBSS。然后以一种专门的方式将这些方案“粘合”在一起，以获取全局秘密共享方案，即定义在整数上，最终证明其具有所需的BBSS属性。尽管我们在这里的主要目的是推动BBSS本身，但我们也简要讨论了可能的协议应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_18](https://doi.org/10.1007/978-3-030-45721-1_18)
## Private Information Retrieval with Sublinear Online Time.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#private-information-retrieval-with-sublinear-online-time) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#private-information-retrieval-with-sublinear-online-time)**
### 作者
* Henry Corrigan-Gibbs, Stanford University, Stanford, CA, USA
* Dmitry Kogan, Stanford University, Stanford, CA, USA
* Henry Corrigan-Gibbs, EFPL, Lausanne, Switzerland
* Henry Corrigan-Gibbs, MIT CSAIL, Cambridge, MA, USA
### 摘要
> 我们提出了第一种私密信息检索协议，可以在不增加服务器存储需求的情况下实现快速（次线性时间）的数据库查询。为了达到这些效率目标，我们的协议采用了离线/在线模型。在客户端决定要读取哪个数据库位之前的离线阶段中，客户端从服务器获取一个短字符串。在随后的在线阶段中，客户端可以通过向服务器发出第二个查询来私密地获取其所需的数据库位。通过将大部分服务器端计算推入与客户端查询无关的离线阶段，我们的协议允许在线阶段以非常快速的速度完成，时间与数据库大小次线性相关。我们的协议可以在两个服务器的环境中提供统计安全性，并在单服务器环境中提供计算安全性。最后，我们证明在这个模型中，我们的协议在通信和运行时间的权衡方面是最优的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_3](https://doi.org/10.1007/978-3-030-45721-1_3)
## Impossibility Results for Lattice-Based Functional Encryption Schemes.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#impossibility-results-for-lattice-based-functional-encryption-schemes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#impossibility-results-for-lattice-based-functional-encryption-schemes)**
### 作者
* Akın Ünal, ETH Zurich, Zürich, Switzerland
### 摘要
> 功能加密是一种加密形式，其中主密钥持有者可以控制用户对加密数据进行的函数评估。学习与误差（Learning With Errors，LWE）（Regev，STOC'05）被认为是一种有用的密码学困难假设，它暗示了强大的基本原语，例如全同态加密（Brakerski-Vaikuntanathan，FOCS'11）和可锁定的混淆（Goyal等，Wichs等，FOCS'17）。然而，尽管其强度，基于LWE的功能加密方案仅有有限数量。事实上，虽然有一些功能加密方案可以使用配对来实现，但目前尚不知道基于格基础假设的安全实现：函数隐藏内积加密（Lin，Baltico等，CRYPTO'17）和紧凑二次型功能加密（Abdalla等，CRYPTO'18）。这引发了一个问题，即是否存在一些数学障碍阻碍我们从基于LWE的假设实现函数隐藏和紧凑功能加密方案。
> 
> 为了研究这个问题，我们证明了对于满足某些在密文加密和解密上具有代数约束的函数隐藏功能加密方案的不可能性结果。许多基于属性、基于身份和功能加密方案满足这些约束，它们的安全性源于LWE。因此，我们将我们的结果视为重要的指示，说明为什么从LWE构建新的功能加密方案很困难，以及需要克服哪些数学限制来构建安全的基于格基础的功能加密方案以实现新的功能。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_7](https://doi.org/10.1007/978-3-030-45721-1_7)
## Lower Bounds for Leakage-Resilient Secret Sharing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#lower-bounds-for-leakage-resilient-secret-sharing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#lower-bounds-for-leakage-resilient-secret-sharing)**
### 作者
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* Mark Simkin, Aarhus University, Aarhus, Denmark
### 摘要
> 阈值秘密共享允许经销商将秘密分割为n份股票，使得至少t个这些股票的授权子集能有效地公开秘密，同时任何少于t的非授权子集不包含有关秘密的任何信息。泄漏韧性另外要求即使被给定每个股票有限数量的额外泄露，秘密也仍然保持隐藏。
> 
> 在这项工作中，我们研究了泄漏韧性秘密共享方案，并对任何信息理论安全方案所需的股票大小和所需的随机量证明了一个下界。我们证明，对于任何信息理论安全的泄漏韧性秘密共享方案，所有股票的随机量或股票大小都必须是n的线性倍数。更具体地说，对于一个具有p位长股票、每股\(\ell \)位泄漏、\(\widehat{t}\)股票唯一定义了余下的\(n - \widehat{t}\)股票的秘密共享方案，必须成立以下关系。
> 
> 我们利用这个下界进一步了解本文作者最近提出的一个问题，询问现有的常规秘密共享方案是否已经防止了泄漏。作者证明了Shamir的秘密共享方案对于重建阈值\(t \ge 0.85n\)是1比特泄漏韧性，他们推测对于任何是总股票数的常数分数的其他阈值也是1比特泄漏韧性。我们并没有驳斥他们的推测，但表明这可能是人们所希望得到的最佳结果。具体地，我们表明对于足够大的n和任何常数\(0< c < 1\)，Shamir的秘密共享方案对于 。我们展示了在计算设置下我们的下界并不成立。也就是说，我们展示了如何在随机预言模型中构造一个泄漏韧性的秘密共享方案，能够抵御计算有限的对手并违反了上述的下界。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_20](https://doi.org/10.1007/978-3-030-45721-1_20)
## SPARKs: Succinct Parallelizable Arguments of Knowledge.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-1].md#sparks-succinct-parallelizable-arguments-of-knowledge) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-1].md#sparks-succinct-parallelizable-arguments-of-knowledge)**
### 作者
* Naomi Ephraim, Cornell Tech, New York, NY, 10044, USA
* Cody Freitag, Cornell Tech, New York, NY, 10044, USA
* Rafael Pass, Cornell Tech, New York, NY, 10044, USA
* Ilan Komargodski, NTT Research, Palo Alto, CA, 94303, USA
### 摘要
> 我们引入了“简洁可并行化的知识论证”（SPARK）的概念。这是一个具有以下三个属性的论证系统，用于计算和证明时间T（非确定性）计算：
> 
> 证明者的（并行）运行时间为\(T + \mathrm {poly}\!\log T\)。（换句话说，证明者的运行时间在大型计算时基本上为T！）
> 
> 证明者最多使用\(\mathrm {poly}\!\log T\)个处理器。
> 
> 通信复杂度和验证者复杂度都是\(\mathrm {poly}\!\log T\)。
> 
> 虽然第三个属性在简洁论证中是标准的，但将所有三个属性结合起来是有利的，因为它可以利用适度的并行性来实现接近最优的运行时间。我们强调，即使在证明者的并行运行时间中有一个两倍的开销也是不允许的。
> 
> 我们的主要结果是针对非确定性多项式时间RAM计算的。我们构建了（1）一个基于冲突抗性哈希函数的（交互式）SPARK，和（2）一个基于任何冲突抗性哈希函数和任何近线性开销的SNARK的非交互式SPARK（符合最近的SNARK构造）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45721-1_25](https://doi.org/10.1007/978-3-030-45721-1_25)
