# Eurocrypt[2019-1]
## Compact Adaptively Secure ABE for \mathsf NC^1 from k-Lin.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#compact-adaptively-secure-abe-for-mathsf-nc-1-from-k-lin) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#compact-adaptively-secure-abe-for-mathsf-nc-1-from-k-lin)**
### 作者
* Lucas Kowalczyk, Columbia University, New York, USA
* Hoeteck Wee, CNRS, ENS, PSL, Paris, France
### 摘要
> 我们提出了紧凑的属性基加密（ABE）方案，适用于具有多项式安全损失的k-Lin假设下的\(\mathsf {NC^1}\)自适应安全性。我们的KP-ABE方案实现了密文大小与属性长度成线性关系，在使用频率很高的情况下与策略大小无关，并且我们还针对CP-ABE实现了类似的效率保证。这解决了Lewko和Waters（CRYPTO 2011）提出的中心开放问题。之前的自适应安全构造都会强制做一个属性“一次使用限制”（或者密文大小随着策略大小增长），或者需要q型假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_1](https://doi.org/10.1007/978-3-030-17653-2_1)
## Unbounded Dynamic Predicate Compositions in Attribute-Based Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#unbounded-dynamic-predicate-compositions-in-attribute-based-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#unbounded-dynamic-predicate-compositions-in-attribute-based-encryption)**
### 作者
* Nuttapong Attrapadung, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### 摘要
> 我们提出了几种转换方法，将一组基于属性的加密（ABE）方案中更简单谓词的合并转化为更具表现力的组合谓词的新ABE方案。以前对于这类谓词组合的提议，最近的是Ambrona等人在Crypto'17上的提议，可以被认为是静态（或部分动态），这意味着指定组合的策略（或其结构）必须在设置阶段固定。相反地，我们的转换是动态且无限制的：它们允许用户在密钥或密文中直接指定任意大小的组合策略。我们提出了三种组合策略的转换，即任意单调跨度程序、任意分支程序和任意确定性有限自动机的类别。这些广义策略适用于任意谓词，因此具备了模块化组合的特性。其中一种模块化应用是一种新型的ABE，该ABE可以在密文和密钥策略之上进行“嵌套”。作为另一个应用，我们在模块化和清晰的方式下，基于q-ratio假设实现了第一个完全安全且完全无限制的密钥策略ABE，用于非单调跨度程序。我们的转换工作在Agrawal和Chase于Eurocrypt'17提出的一种名为符号对编码的通用ABE框架中。在我们的转换核心，我们观察和利用符号特性的无限制性质，以实现无限大小策略组合。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_2](https://doi.org/10.1007/978-3-030-17653-2_2)
## (R)CCA Secure Updatable Encryption with Integrity Protection.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#r-cca-secure-updatable-encryption-with-integrity-protection) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#r-cca-secure-updatable-encryption-with-integrity-protection)**
### 作者
* Michael Klooß, Karlsruhe Institute for Technology, Karlsruhe, Germany
* Andy Rupp, Karlsruhe Institute for Technology, Karlsruhe, Germany
* Anja Lehmann, IBM Research – Zurich, Rüschlikon, Switzerland
### 摘要
> 一个可更新的加密方案允许数据主机使用客户端的所谓更新令牌，将客户端的密文从旧密钥更新到新密钥。在实践中，加密密钥的轮换是为了减轻密钥被妥协的影响而普遍要求的。可更新加密有两种形式：一种是密文相关的，即数据所有者必须（部分地）下载所有数据并为每个密文派生一个专用令牌。Everspaugh等人（CRYPTO'17）在这种情境下提出了CCA和CTXT安全的方案。另一种更便捷的变体是密文无关的，即它允许一个单一令牌更新所有密文。然而，到目前为止，在这种情境中令牌的更广泛功能以相当弱的安全性为代价：Boneh等人（CRYPTO'13）和Lehmann与Tackmann（EUROCRYPT'18）提出的现有方案仅实现了CPA安全性，并且没有提供完整性保护。可以说，在面向将数据外包到不受信任的主机的场景时，明文的完整性应该是最低的安全要求。否则，数据主机可能会任意更改或注入密文。事实上，BLMR13和LT18的方案存在这种弱点，甚至EPRS17只提供了对不能任意注入密文的对手的完整性。在这项工作中，我们提供了第一批具有超越CPA的安全性的密文无关可更新加密方案，特别是提供了强大的完整性保护。我们的可更新加密方案的构建和安全性证明出人意料地模块化。我们提供了一个通用的转换，允许密钥轮换和方案的机密性/完整性几乎是分开处理的，即可更新方案的安全性是从其静态构建块的简单属性中派生出来的。我们通用方法的一个有趣的副作用是，它立即暗示了EPRS17和LT18引入的可更新加密的密文更新的不可链接性作为一种基本的附加属性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_3](https://doi.org/10.1007/978-3-030-17653-2_3)
## Aurora: Transparent Succinct Arguments for R1CS.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#aurora-transparent-succinct-arguments-for-r1cs) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#aurora-transparent-succinct-arguments-for-r1cs)**
### 作者
* Eli Ben-Sasson, Technion/STARKWare, Haifa, Israel
* Michael Riabzev, Technion/STARKWare, Haifa, Israel
* Alessandro Chiesa, UC Berkeley, Berkeley, USA
* Nicholas Spooner, UC Berkeley, Berkeley, USA
* Nicholas P. Ward, UC Berkeley, Berkeley, USA
* Madars Virza, MIT Media Lab, Cambridge, USA
### 摘要
> 我们设计、实现并评估了一个用于Rank-1 约束满足（R1CS）的零知识简洁的非交互证明体系（SNARG）。该系统是NP语言的标准组成部分，而我们的SNARG具有透明的配置，能够抵御量子攻击，并且使用轻量级密码学。证明可以证明n个约束的可满足性，其大小为\(O(\log^2n)\)。证明可以通过\(O(n \log n)\)个场操作生成，并使用 O(n) 验证。在安全性达到128位的情况下，即使对于几百万个约束，证明的大小也不到\({250}\,\

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_4](https://doi.org/10.1007/978-3-030-17653-2_4)
## The Double Ratchet: Security Notions, Proofs, and Modularization for the Signal Protocol.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#the-double-ratchet-security-notions-proofs-and-modularization-for-the-signal-protocol) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#the-double-ratchet-security-notions-proofs-and-modularization-for-the-signal-protocol)**
### 作者
* Sandro Coretti, New York University, New York, USA
* Yevgeniy Dodis, New York University, New York, USA
* Joël Alwen, Wickr Inc., San Francisco, USA
### 摘要
> Signal是一种著名的安全通讯协议，被数十亿人使用，包括Signal本身、WhatsApp、Facebook Messenger、Skype和Google Allo等多个安全短信应用程序。其核心概念是“双方向链条”，每条消息都使用新的对称密钥进行加密和认证；它具有许多吸引人的特性，如前向安全、事后遭到妥协时安全，以及“立即（无延迟）解密”，这些在先前的通信协议中从未同时实现过。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_5](https://doi.org/10.1007/978-3-030-17653-2_5)
## Efficient Ratcheting: Almost-Optimal Guarantees for Secure Messaging.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#efficient-ratcheting-almost-optimal-guarantees-for-secure-messaging) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#efficient-ratcheting-almost-optimal-guarantees-for-secure-messaging)**
### 作者
* Daniel Jost, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
* Ueli Maurer, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
* Marta Mularczyk, Department of Computer Science, ETH Zurich, 8092, Zurich, Switzerland
### 摘要
> 在大规模监控和信息泄露的时代，互联网通信和特别是消息传递的隐私问题日益引起关注。由于安全通信协议在不那么安全的终端设备上执行，并且它们的会话持久存在，因此它们旨在保证强大的安全性，即使秘密状态和本地随机性可能会被暴露。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_6](https://doi.org/10.1007/978-3-030-17653-2_6)
## Indistinguishability Obfuscation Without Multilinear Maps: New Methods for Bootstrapping and Instantiation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#indistinguishability-obfuscation-without-multilinear-maps-new-methods-for-bootstrapping-and-instantiation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#indistinguishability-obfuscation-without-multilinear-maps-new-methods-for-bootstrapping-and-instantiation)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
### 摘要
> 在密码学中，构建不可区分性模糊化（\(\mathsf{iO}\)）[17]是一个中心性的未解决问题。我们提供了新的方法来推进这个目标。我们的贡献可以总结如下：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_7](https://doi.org/10.1007/978-3-030-17653-2_7)
## Sum-of-Squares Meets Program Obfuscation, Revisited.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#sum-of-squares-meets-program-obfuscation-revisited) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#sum-of-squares-meets-program-obfuscation-revisited)**
### 作者
* Boaz Barak, Harvard University, Cambridge, USA
* Samuel B. Hopkins, University of California, Berkeley, USA
* Aayush Jain, University of California, Los Angeles, USA
* Amit Sahai, University of California, Los Angeles, USA
* Pravesh Kothari, Princeton University and the Institute for Advanced Study, Princeton, USA
### 摘要
> 我们研究针对由二次多项式计算的伪随机生成器变种的安全攻击。具体而言，我们提供了打破所有输出为输入的二次多项式（实数域上）的映射的单向性的一般条件。作为一个推论，我们打破了Ananth、Jain和Sahai在《电子印刷品2018》中最近提出的用于构建不可区分性混淆的安全假设的二次度候选。我们提出了一些假设，这些假设可以推广到更多种类的实例，并且特别提供了实验证据，证明它们打破了Lin-Matt在《电子印刷品2018》中的假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_8](https://doi.org/10.1007/978-3-030-17653-2_8)
## How to Leverage Hardness of Constant-Degree Expanding Polynomials over \mathbb R R to build i풪 i O.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#how-to-leverage-hardness-of-constant-degree-expanding-polynomials-over-mathbb-r-r-to-build-i-i-o) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#how-to-leverage-hardness-of-constant-degree-expanding-polynomials-over-mathbb-r-r-to-build-i-i-o)**
### 作者
* Aayush Jain, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Huijia Lin, University of Washington, Seattle, USA
* Christian Matt, Concordium, Zurich, Switzerland
### 摘要
> 在这项工作中，我们引入并构建了基于SXDH假设的D限制的功能加密（FE），其中D为常数且大于等于3。这个概念是由Ananth等人（ePrint 2018）在通用双线性群模型中最近引入和构建的3限制FE的推广。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_9](https://doi.org/10.1007/978-3-030-17653-2_9)
## XOR-Counts and Lightweight Multiplication with Fixed Elements in Binary Finite Fields.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#xor-counts-and-lightweight-multiplication-with-fixed-elements-in-binary-finite-fields) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#xor-counts-and-lightweight-multiplication-with-fixed-elements-in-binary-finite-fields)**
### 作者
* Lukas Kölsch, University of Rostock, Rostock, Germany
### 摘要
> XOR度量衡量二进制有限域中特定算术操作的效率。我们证明了关于两种不同的曾经使用过的XOR度量的一些新结果。特别地，我们驳斥了[10]中的一个猜想。我们考虑了在二进制有限域中的一个固定元素的乘法实现。在这里，我们完全描述了所有乘法矩阵可以使用恰好2次XOR操作实现的元素，并证实了[2]中的一个猜想。此外，我们在更一般的情况下提供了新的结果和示例，显示了在实现中可能存在显著的改进。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_10](https://doi.org/10.1007/978-3-030-17653-2_10)
## DLCT: A New Tool for Differential-Linear Cryptanalysis.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#dlct-a-new-tool-for-differential-linear-cryptanalysis) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#dlct-a-new-tool-for-differential-linear-cryptanalysis)**
### 作者
* Achiya Bar-On, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Nathan Keller, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Ariel Weizman, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
### 摘要
> 差分密码分析和线性密码分析是对分组密码进行密码分析的两种最著名的技术。在1994年，朗福德和赫尔曼提出了基于将被攻击的密码E分为两个子密码E0和E1，并将E0的差分特性与E1的线性逼近相结合的差分线性（DL）攻击，以对整个密码E进行攻击。DL技术被用于对许多密码进行最佳已知攻击，包括AES决赛选手Serpent、ICEPOLE、COCONUT98、Chaskey、CTC2和8轮DES。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_11](https://doi.org/10.1007/978-3-030-17653-2_11)
## Linear Equivalence of Block Ciphers with Partial Non-Linear Layers: Application to LowMC.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#linear-equivalence-of-block-ciphers-with-partial-non-linear-layers-application-to-lowmc) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#linear-equivalence-of-block-ciphers-with-partial-non-linear-layers-application-to-lowmc)**
### 作者
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
* Daniel Kales, Graz University of Technology, Graz, Austria
* Sebastian Ramacher, Graz University of Technology, Graz, Austria
* Christian Rechberger, Graz University of Technology, Graz, Austria
* Angela Promitzer, Graz, Austria
### 摘要
> \(\textsc {LowMC}\) 是由Albrecht等人于2015年设计的分组密码家族。它针对多方计算、完全同态加密和零知识证明的实际应用进行了优化。\(\textsc {LowMC}\) 在提交给NIST的后量子标准化项目中用于\(\textsc {Picnic}\)签名方案，并作为其他新型后量子密码系统的重要组成部分。许多\(\textsc {LowMC}\)实例采用了相对较新的设计策略（由Gérard等人于2013年的CHES中发起），即在每一轮中仅对状态的一部分应用非线性层，其中非线性操作的不足部分通过复杂线性代数来部分弥补。由于高复杂的线性代数性能一直是多个应用的瓶颈之一，设计者提出了一个开放问题，即如何在不引入额外的非线性操作（或者不损害安全性）的情况下减少线性代数复杂度。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_12](https://doi.org/10.1007/978-3-030-17653-2_12)
## Distributed Differential Privacy via Shuffling.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#distributed-differential-privacy-via-shuffling) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#distributed-differential-privacy-via-shuffling)**
### 作者
* Albert Cheu, Khoury College of Computer Sciences, Northeastern University, Boston, USA
* Jonathan Ullman, Khoury College of Computer Sciences, Northeastern University, Boston, USA
* Adam Smith, Computer Science Department, Boston University, Boston, USA
* David Zeber, Mozilla Foundation, Mountain View, USA
* Maxim Zhilyaev, Mountain View, USA
### 摘要
> 我们考虑设计可扩展、稳健的协议，用于计算敏感数据的统计信息。具体而言，我们研究了在分布式环境中如何最好地设计差分隐私协议，其中每个用户都持有一个私有数据。现有文献主要考虑两种模型：「中心」模型，在该模型中，一个受信任的服务器以明文方式收集用户的数据，这样可以获得更高的准确性；和「本地」模型，在该模型中，用户单独对其数据进行随机化处理，无需信任服务器，但准确性有所限制。目前为止，实现不依赖受信任服务器的中心模型准确性的尝试主要集中在密码学多方计算（MPC）的变种上，这会限制可扩展性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_13](https://doi.org/10.1007/978-3-030-17653-2_13)
## Lower Bounds for Differentially Private RAMs.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#lower-bounds-for-differentially-private-rams) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#lower-bounds-for-differentially-private-rams)**
### 作者
* Giuseppe Persiano, Google LLC, Mountain View, USA
* Kevin Yeo, Google LLC, Mountain View, USA
* Giuseppe Persiano, Università di Salerno, Salerno, Italy
### 摘要
> 在这项工作中，我们研究了适用于差分隐私框架内外包数据库数据分析的隐私保护存储原语。差分隐私数据分析的目标是透露群体的全局特征，同时不损害任何个体的隐私。通常情况下，差分隐私对手只会了解全局特征。对于外包数据库的情况，对手还可以查看数据的访问模式。可遗忘的随机访问存储（ORAM）可以用来隐藏访问模式，但在一些情况下，ORAM可能过于冗余，只需兼容差分隐私并保护个别访问的隐私即可。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_14](https://doi.org/10.1007/978-3-030-17653-2_14)
## Beyond Birthday Bound Secure MAC in Faulty Nonce Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#beyond-birthday-bound-secure-mac-in-faulty-nonce-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#beyond-birthday-bound-secure-mac-in-faulty-nonce-model)**
### 作者
* Avijit Dutta, Indian Statistical Institute, Kolkata, India
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
* Suprita Talnikar, Indian Statistical Institute, Kolkata, India
### 摘要
> 加密后认证 (Encrypt-then-MAC, EtM) 是一种广泛用于认证加密 (AE) 的模式。不幸的是，几乎所有遵循 EtM 范式的设计，包括用于 TLS 的 AE 套件，都容易受到使用 nonce 的攻击。一次重复使用的 nonce 值会泄露哈希密钥，从而导致全局伪造攻击。只有两种遵循 EtM 范式且能抵御 nonce 滥用攻击的认证加密方案，即 GCM-RUP (CRYPTO-17) 和 \(\mathsf {GCM/2}^{+} \) (INSCRYPT-12)。然而，它们仅在尊重 nonce 的设置下具有生日界限 (birthday bound) 安全性，这限制了单个密钥的数据限制。在本文中，我们展示了一种基于 nonce 的 EHtM 变体 (FSE-10)，名为 nEHtM，该方案使用块密码构建，并具有超越生日界限 (BBB) 的无法伪造安全性，且在滥用 nonce 的情况下优雅地降级。我们将 nEHtM 与使用 EtM 范式的 CENC (FSE-06) 加密模式结合，实现了一种基于 nonce 的 AE，即 CWC+。CWC+ 与 CWC AE 方案 (FSE-04) 非常接近（仅需要更少的异或操作），它不仅提供 BBB 安全性，还能优雅地降级处理滥用 nonce 的情况。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_15](https://doi.org/10.1007/978-3-030-17653-2_15)
## Tight Time-Memory Trade-Offs for Symmetric Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#tight-time-memory-trade-offs-for-symmetric-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#tight-time-memory-trade-offs-for-symmetric-encryption)**
### 作者
* Joseph Jaeger, University of California, San Diego, La Jolla, USA
* Stefano Tessaro, University of Washington, Seattle, USA
### 摘要
> 您好，下面是您的摘要的简体中文翻译：
> 
> 具体的安全性证明根据攻击者的时间/查询复杂度给出其优势的上限。然而，密码分析表明，其他资源限制 - 尤其是攻击者的内存 - 可能会使可实现的优势变小，从而使这些已证明的上限过于悲观。然而，处理内存限制一直是现有安全性证明所无法解决的问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_16](https://doi.org/10.1007/978-3-030-17653-2_16)
## Non-Malleable Codes Against Bounded Polynomial Time Tampering.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#non-malleable-codes-against-bounded-polynomial-time-tampering) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#non-malleable-codes-against-bounded-polynomial-time-tampering)**
### 作者
* Marshall Ball, Columbia University, New York, USA
* Tal Malkin, Columbia University, New York, USA
* Dana Dachman-Soled, University of Maryland, College Park, USA
* Mukul Kulkarni, University of Maryland, College Park, USA
* Huijia Lin, University of Washington, Seattle, USA
### 摘要
> 我们构建了高效的非可塑编码（NMC），可以（在计算上）抵御任何固定多项式时间内可计算的函数的篡改。我们的构造是在明文（无CRS）模型下进行的，并且需要以下假设：（1）\(\mathbf {E}\)对于某些指数\(2^{\beta n}\)（\(\beta >0\)) 大小的\(\mathbf {NP}\)电路是困难的（在去随机性化文献中广泛使用），（2）次指数回门置换存在，以及（3）具有次指数可靠性的\(\mathbf {P}\)-证书存在。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_17](https://doi.org/10.1007/978-3-030-17653-2_17)
## Continuous Non-Malleable Codes in the 8-Split-State Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#continuous-non-malleable-codes-in-the-8-split-state-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#continuous-non-malleable-codes-in-the-8-split-state-model)**
### 作者
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* Erick Purwanto, National University of Singapore, Singapore, Singapore
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
### 摘要
> 非可塑代码（NMCs）由Dziembowski、Pietrzak和Wichs[20]引入，在传统的纠错（甚至是错误检测）不可能的情况下，提供了有用的消息完整性保证；例如，当攻击者可以完全覆盖编码的消息时。 NMC已经成为编码理论和密码学交叉点上的基础对象。特别是，对非可塑代码的研究以及相关概念非可塑提取器的进展已经为构建多源随机提取器等更基本的问题提供了新的见解和进展。最近的大量工作集中于分离状态模型中的各种非可塑代码构造。文献中引入了许多NMC的变体，例如强非可塑代码、超强非可塑代码和连续非可塑代码。其中最常见、也是最有用的概念是连续非可塑代码，它允许对手持续篡改。我们在常量分离状态模型中提出了第一个高效的信息论安全的连续非可塑代码。我们相信我们的主要技术结果可能具有独立的意义，并且未来的一些想法可以用来在其他相关问题上取得进展。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_18](https://doi.org/10.1007/978-3-030-17653-2_18)
## Correlated-Source Extractors and Cryptography with Correlated-Random Tapes.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#correlated-source-extractors-and-cryptography-with-correlated-random-tapes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#correlated-source-extractors-and-cryptography-with-correlated-random-tapes)**
### 作者
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 在这篇论文中，我们考虑了一个场景：当一方在多个加密算法的执行中使用相关随机带进行协同时，安全性质是否仍然可以保持。作为例子，我们介绍了相关带零知识和相关带多方计算的概念，在这些情况下，即使某个方使用了相关随机带进行多次执行，也必须仍然保留零知识属性和理想/真实模型安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_19](https://doi.org/10.1007/978-3-030-17653-2_19)
## Revisiting Non-Malleable Secret Sharing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#revisiting-non-malleable-secret-sharing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#revisiting-non-malleable-secret-sharing)**
### 作者
* Saikrishna Badrinarayanan, UCLA, Los Angeles, USA
* Akshayaram Srinivasan, UC Berkeley, Berkeley, USA
### 摘要
> 一个阈值秘密分享方案（带有阈值 t）允许一个经销商将一个秘密分享给一组参与方，使得任何 t 个或更多的参与方可以恢复秘密，而任何最多 t-1 个参与方都不知道任何关于秘密的信息。最近Goyal和Kumar在研究中引入了一个非可塑阈值秘密分享方案（STOC'18），该方案在秘密分享被篡改攻击时提供额外的保护。具体地，它保证从被篡改的分享中重建的秘密要么是原始秘密，要么是与原始秘密无关的内容。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_20](https://doi.org/10.1007/978-3-030-17653-2_20)
## Multi-party Virtual State Channels.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#multi-party-virtual-state-channels) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#multi-party-virtual-state-channels)**
### 作者
* Stefan Dziembowski, University of Warsaw, Warsaw, Poland
* Lisa Eckey, Technische Universität Darmstadt, Darmstadt, Germany
* Sebastian Faust, Technische Universität Darmstadt, Darmstadt, Germany
* Julia Hesse, Technische Universität Darmstadt, Darmstadt, Germany
* Kristina Hostáková, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> 智能合约是以程序代码编写的自动执行协议，被认为是区块链技术的主要应用之一。虽然它们得到了以太坊等主要加密货币的支持，但由于固有的可扩展性挑战，人们对其进一步采用存在障碍。例如，在以太坊中，合约执行需要超过15秒的延迟，并且每秒可执行的合约数量非常有限。状态通道网络是旨在解决这些挑战的核心基元之一。它们形成第二层，在慢且昂贵的区块链上，从而实现了即时合约处理以及微不足道的成本。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_21](https://doi.org/10.1007/978-3-030-17653-2_21)
## Aggregate Cash Systems: A Cryptographic Investigation of Mimblewimble.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#aggregate-cash-systems-a-cryptographic-investigation-of-mimblewimble) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#aggregate-cash-systems-a-cryptographic-investigation-of-mimblewimble)**
### 作者
* Georg Fuchsbauer, Inria, Paris, France
* Michele Orrù, Inria, Paris, France
* Georg Fuchsbauer, École normale supérieure, CNRS, PSL, Paris, France
* Michele Orrù, École normale supérieure, CNRS, PSL, Paris, France
* Yannick Seurin, ANSSI, Paris, France
### 摘要
> Mimblewimble是一个由匿名作者在2016年提出的电子现金系统。它结合了最初为比特币设想的几种增强隐私的技术，例如保密交易（Maxwell，2015）、交易的非交互式合并（Saxena，Misra，Dhar，2014）以及交易的输入和输出的削减（Maxwell，2013）。作为一个引人注目的结果，硬币在花费后可以被删除，同时保持账本的公共可验证性，这是比特币不可能实现的。这导致了账本的巨大空间节省和对新用户的效率提升，新用户必须验证他们对系统的视图。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_22](https://doi.org/10.1007/978-3-030-17653-2_22)
## Proof-of-Stake Protocols for Privacy-Aware Blockchains.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#proof-of-stake-protocols-for-privacy-aware-blockchains) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#proof-of-stake-protocols-for-privacy-aware-blockchains)**
### 作者
* Chaya Ganesh, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
* Daniel Tschudi, Department of Computer Science, DIGIT, Aarhus University, Aarhus, Denmark
* Daniel Tschudi, Concordium, Aarhus, Denmark
### 摘要
> 权益证明（PoS）协议正逐渐成为区块链（或分布式账本）共识的浪费性工作证明（PoW）协议的最有前景的替代方案之一。然而，当前的PoS协议天生泄露权益持有人的身份和财富，因此似乎与保护隐私的加密货币（如ZCash、Monero等）不兼容。在本文中，我们开始对具备隐私特性的PoS协议进行正式研究。我们的研究结果包括：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_23](https://doi.org/10.1007/978-3-030-17653-2_23)
## Consensus Through Herding.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-1].md#consensus-through-herding) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-1].md#consensus-through-herding)**
### 作者
* T.-H. Hubert Chan, The University of Hong Kong, Lung Fu Shan, Hong Kong
* Rafael Pass, Cornell and Thunder Research, New York, USA
* Elaine Shi, Cornell and Thunder Research, New York, USA
### 摘要
> 状态机复制（SMR）是一种重要的抽象概念，用于让一组节点就不断增长的线性有序事务日志达成一致。在分散的加密货币应用中，我们希望设计具有以下特点的SMR协议：（1）抵抗适应性破坏；（2）带宽和确认时间较小。过去的所有构建SMR的方法都未能在面对适应性破坏时实现较小的确认时间或较小的带宽（而不依赖强力假设，如擦除模型或工作证明）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17653-2_24](https://doi.org/10.1007/978-3-030-17653-2_24)
