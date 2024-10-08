# Eurocrypt[2021-1]
## Non-interactive Zero Knowledge from Sub-exponential DDH.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#non-interactive-zero-knowledge-from-sub-exponential-ddh) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#non-interactive-zero-knowledge-from-sub-exponential-ddh)**
### 作者
* Abhishek Jain, Johns Hopkins University, Baltimore, MD, USA
* Zhengzhong Jin, Johns Hopkins University, Baltimore, MD, USA
### 摘要
> 我们基于决策性Diffie-Hellman问题对多项式时间敌手的亚指数难度（而无需使用具有配对的组）提供了NP范围的非交互式零知识和Zap证明的首次构造。
> 
> 我们的结果的核心，也是独立的兴趣所在，是交互式陷门哈希协议的新概念。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_1](https://doi.org/10.1007/978-3-030-77870-5_1)
## On the (in)security of ROS.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#on-the-in-security-of-ros) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#on-the-in-security-of-ros)**
### 作者
* Fabrice Benhamouda, Algorand Foundation, Singapore, Singapore
* Tancrède Lepoint, Google, Mountain View, USA
* Mariana Raykova, Google, Mountain View, USA
* Julian Loss, University of Maryland, College Park, USA
* Michele Orrù, UC Berkeley, Berkeley, USA
### 摘要
> 我们提出了一种解决ROS（线性方程组中的随机不均匀性）模p问题的算法，在多项式时间内，对于\(\ell > \log p\)维度有效。我们的算法可以与Wagner攻击相结合，并为任何维数\(\ell\)提供到目前为止已知的最佳复杂度的次指数解法。
> 
> 当允许并发执行时，我们的算法将导致针对无法伪造的盲签名方案（如Schnorr和Okamoto-Schnorr盲签名）、阈值签名方案（如GJKR和FROST的原始版本）、多重签名方案（如CoSI和MuSig的两轮版本）、部分盲签名方案（如Abe-Okamoto）以及条件盲签名方案（如ZGP17）等方面的实用攻击。受上述方案启发的电子现金和匿名凭证方案（如Anonymous Credentials Light）也会受到影响。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_2](https://doi.org/10.1007/978-3-030-77870-5_2)
## New Representations of the AES Key Schedule.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#new-representations-of-the-aes-key-schedule) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#new-representations-of-the-aes-key-schedule)**
### 作者
* Gaëtan Leurent, Inria, Paris, France
* Clara Pernot, Inria, Paris, France
### 摘要
> 在本文中，我们提出了AES密钥调度的新表示形式，并对基于AES的方案的安全性产生了一些影响。特别地，我们展示了AES-128密钥调度可以分成四个独立的并行计算，这些计算可以在32位块上进行，直到线性变换。令人惊讶的是，在AES的20多年分析后，这个属性还没有在文献中描述过。我们展示了我们新表示法的两个结果，改进了以前对基于AES的方案的密码分析结果。首先，我们观察到在奇数次密钥调度轮迭代时，会生成一个具有短周期的函数。这解释了Khairallah在NIST轻量级竞赛中的第二轮候选项mixFeed上的观察。我们的分析实际上表明，他在mixFeed上的伪造攻击成功的概率为0.44（数据复杂度为220 GB），从而在实践中打破了这个方案。同样的观察结果还导致了对ALE，另一个基于AES的AEAD方案的新攻击。我们的新表示法也提供了有效的方法来结合来自第一个子密钥和来自最后一个子密钥的信息，以重建相应的主密钥。特别地，我们改进了对AES-128的以前不可能差分攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_3](https://doi.org/10.1007/978-3-030-77870-5_3)
## Analysing the HPKE Standard.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#analysing-the-hpke-standard) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#analysing-the-hpke-standard)**
### 作者
* Joël Alwen, Wickr, New York, USA
* Bruno Blanchet, Inria Paris, Paris, France
* Benjamin Lipp, Inria Paris, Paris, France
* Eduard Hauck, Ruhr-Universität Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Doreen Riepel, Ruhr-Universität Bochum, Bochum, Germany
### 摘要
> 混合公钥加密（HPKE）方案是一种新兴的标准，目前由IETF的Crypto Forum Research Group (CFRG)考虑作为正式批准的候选者之一。在四种HPKE模式中，我们分析了认证模式\(\mathsf {HPKE}_\mathsf {Auth}\)在其单次加密形式下的情况，因为它包含了HPKE中最新颖的部分。
> 
> \(\mathsf {HPKE}_\mathsf {Auth}\)的应用领域被我们称为Authenticated Public Key Encryption (APKE)的新原语所捕获。我们提供了APKE方案的语法和安全定义，以及相关的Authenticated Key Encapsulation Mechanisms (AKEMs)的定义。我们基于Gap Diffie-Hellman假设证明了\(\mathsf {HPKE}_\mathsf {Auth}\)底层的AKEM方案\(\mathsf{DH}\hbox{-}\mathsf{AKEM}\)的安全性，并提供了通用的AKEM/DEM组合定理，可以用来推断\(\mathsf {HPKE}_\mathsf {Auth}\)的安全性。为此，我们还正式分析了\(\mathsf {HPKE}_\mathsf {Auth}\)的密钥计划和密钥派生函数。为了增加结果的置信度，我们使用了自动定理证明工具CryptoVerif。我们所有的界限都是定量的，并讨论了它们对\(\mathsf {HPKE}_\mathsf {Auth}\)的实际影响。
> 
> 作为独立的贡献，我们提出了新的名义群框架，它使我们能够捕捉实际椭圆曲线的抽象语法和安全属性，包括基于Curve25519和Curve448的群体（这些群体不构成循环群）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_4](https://doi.org/10.1007/978-3-030-77870-5_4)
## Tightly-Secure Authenticated Key Exchange, Revisited.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#tightly-secure-authenticated-key-exchange-revisited) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#tightly-secure-authenticated-key-exchange-revisited)**
### 作者
* Tibor Jager, Bergische Universität Wuppertal, Wuppertal, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Doreen Riepel, Ruhr-Universität Bochum, Bochum, Germany
* Sven Schäge, Ruhr-Universität Bochum, Bochum, Germany
### 摘要
> 我们介绍了一种新的密钥交换（AKE）协议，它具有极高的安全性，并且效率非常高，但只会有一定的安全性损失，并且可以在随机预言模型中通过标准DDH假设和RSA群的子群假设来实例化。这些协议可以在不受用户或会话数量影响的情况下部署最佳参数，而无需通过增加参数来补偿安全性损失，从而降低计算效率。
> 
> 我们使用标准的“单比特猜测”AKE安全（具有前向保密性和状态损坏），需要所有挑战密钥同时为伪随机。相比之下，大多数先前关于密钥交换协议的严格安全性的论文（如Bader et al.，TCC 2015；Gjøsteen and Jager，CRYPTO 2018；Liu et al.，ASIACRYPT 2020）集中在非标准的“多比特猜测”AKE安全上，众所周知它无法与对称原语紧密组合以构建安全的通信渠道。
> 
> 我们的关键技术贡献是一种基于非承诺密钥封装机制构建严格安全AKE协议的新通用方法。结果基于DDH的协议比先前所有构造都高效得多。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_5](https://doi.org/10.1007/978-3-030-77870-5_5)
## Aggregatable Distributed Key Generation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#aggregatable-distributed-key-generation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#aggregatable-distributed-key-generation)**
### 作者
* Kobi Gurkan, cLabs, Ethereum Foundation, Berlin, Germany
* Philipp Jovanovic, University College London, London, UK
* Sarah Meiklejohn, University College London, London, UK
* Mary Maller, Ethereum Foundation, Berlin, Germany
* Gilad Stern, Hebrew University, Jerusalem, Israel
* Alin Tomescu, VMware Research, Jersey City, USA
### 摘要
> 在这篇论文中，我们介绍了一种具有可聚合和公开可验证转录的分布式密钥生成（DKG）协议。与先前的公开可验证方法相比，我们的DKG将最终转录的大小和验证时间从\(\mathcal {O}(n^2)\)减少到\(\mathcal {O}(n \log {n})\)，其中n表示参与方的数量。与先前的非公开可验证方法相比，我们的DKG利用八卦而不是全对全通信来减少验证和通信复杂性。我们还重新审视了现有的DKG安全定义，它们相当严格，并提出了新的自然放宽。因此，我们可以证明我们的可聚合DKG以及几种现有的DKG的安全性，包括流行的Pedersen变体。我们表明，在这些新定义下，这些现有的DKG可以用于产生流行加密系统的安全阈值变体，例如El-Gamal加密和BLS签名。我们还证明我们的DKG可以与一种新的高效可验证的不可预测函数（VUF）安全地结合使用，我们证明了其在随机预言者模型中的安全性。最后，我们对我们的DKG进行了实验评估，并且表明每个参与方的开销是线性的且实用的。对于64个参与方，分享需要71毫秒，验证整个转录需要359毫秒，而对于8192个参与方，分别需要8秒和42.2秒。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_6](https://doi.org/10.1007/978-3-030-77870-5_6)
## Decentralized Multi-authority ABE for DNFs from LWE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#decentralized-multi-authority-abe-for-dnfs-from-lwe) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#decentralized-multi-authority-abe-for-dnfs-from-lwe)**
### 作者
* Pratish Datta, NTT Research, Sunnyvale, CA, 94085, USA
* Ilan Komargodski, NTT Research, Sunnyvale, CA, 94085, USA
* Brent Waters, NTT Research, Sunnyvale, CA, 94085, USA
* Ilan Komargodski, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Brent Waters, University of Texas at Austin, Austin, TX, 78712, USA
### 摘要
> 我们构建了第一个去中心化的多权威属性基加密（\(\mathsf {MA}\text {-}\mathsf {ABE}\)）方案，用于一类非平凡访问策略，其安全性仅基于（在随机预言模型中）学习带有错误（LWE）假设。支持的访问策略是由\(\mathsf {DNF}\)公式描述的。之前所有支持任何非平凡访问策略的\(\mathsf {MA}\text {-}\mathsf {ABE}\)方案的构建都在假设双线性映射的各种假设下被证明是安全的（在随机预言模型中）。
> 
> 在我们的系统中，任何一方都可以成为权威，除了创建初始的共同参考参数外，不需要任何全局协调。一方可以通过创建公钥并向不同的用户发放反映其属性的私钥，简单地作为标准的ABE权威。用户可以根据来自任意选择的权威集合的属性发出的\(\mathsf {DNF}\)公式加密数据。最后，我们的系统不需要任何中央权威。在效率方面，当在访问策略大小上的全局限制为s时，方案的公钥、私钥和密文的大小都随s增长。
> 
> 从技术上讲，我们开发了使用LWE构建密文策略ABE（\(\mathsf {CP}\text {-}\mathsf {ABE}\)）方案的新工具。一路上，我们构建了第一个在LWE假设下支持\(\mathsf {NC}^1\)中访问策略的可证安全\(\mathsf {CP}\text {-}\mathsf {ABE}\)方案，避免了通用的基于通用电路的关键策略到密文策略的转换。特别地，我们的构建依赖于具有新属性的线性秘密分享方案，并且在某种意义上更类似于依赖于双线性映射的\(\mathsf {CP}\text {-}\mathsf {ABE}\)方案。虽然我们的\(\mathsf {CP}\text {-}\mathsf {ABE}\)构建不比现有的构建更有效，但在概念上很有趣，而且我们还展示了如何扩展它以获得上述的\(\mathsf {MA}\text {-}\mathsf {ABE}\)方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_7](https://doi.org/10.1007/978-3-030-77870-5_7)
## Compact, Efficient and UC-Secure Isogeny-Based Oblivious Transfer.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#compact-efficient-and-uc-secure-isogeny-based-oblivious-transfer) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#compact-efficient-and-uc-secure-isogeny-based-oblivious-transfer)**
### 作者
* Yi-Fu Lai, University of Auckland, Auckland, New Zealand
* Steven D. Galbraith, University of Auckland, Auckland, New Zealand
* Cyprien Delpech de Saint Guilhem, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 遗忘传输（OT）是一种重要的加密工具，几乎可以作为所有安全多方功能的构建基础。针对恶意对手的最强安全概念是通用可组合性（UC-secure）。一个重要目标是拥有后量子时代的OT协议。后量子密码学中的一个感兴趣领域是同构基密码学。同构基密码学与Diffie-Hellman具有某些相似之处，但缺乏离散对数基本的OT协议所需的代数属性。因此，直接将现有协议调整到同构基设置下不总是可能的。
> 
> 我们提出了第一个实用的同构基UC-secure遗忘传输协议，在存在有攻击性的对手的情况下。我们的方案使用CSIDH框架，并且在Diffie-Hellman设置下没有类似物。该方案包含一定数量的同构计算。底层计算假设是一个我们称之为计算互倒CSIDH问题，并且我们证明它与计算CSIDH问题在多项式时间上等价。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_8](https://doi.org/10.1007/978-3-030-77870-5_8)
## One-Way Functions and Malleability Oracles: Hidden Shift Attacks on Isogeny-Based Protocols.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#one-way-functions-and-malleability-oracles-hidden-shift-attacks-on-isogeny-based-protocols) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#one-way-functions-and-malleability-oracles-hidden-shift-attacks-on-isogeny-based-protocols)**
### 作者
* Péter Kutas, University of Birmingham, Birmingham, UK
* Christophe Petit, University of Birmingham, Birmingham, UK
* Charlotte Weitkämper, University of Birmingham, Birmingham, UK
* Simon-Philipp Merz, Royal Holloway, University of London, London, UK
* Christophe Petit, Université libre de Bruxelles, Brussels, Belgium
### 摘要
> 超奇异同源Diffie-Hellman密钥交换（SIDH）是一种基于超奇异椭圆曲线之间计算同构难度的假设难度的后量子协议，给定一些附加的扭点信息。与其他同源协议不同，SIDH因为超奇异曲线的自同态环的非交换结构而被普遍认为对亚指数量子攻击是免疫的。
> 
> 在本文中，我们反驳了这个普遍被认为是错误的看法。更具体地说，我们强调了SIDH密钥空间上存在一个阿贝尔群作用，并且我们展示了对于足够不平衡和过度拉伸的SIDH参数，这个作用可以使用协议中揭示的扭点信息高效地（启发式地）计算。这将基础难度假设降低为一个隐藏移位问题，可以在量子亚指数时间内解决。
> 
> 我们在一个新的框架中阐述了我们的攻击，该框架允许在量子亚指数时间内反演单向函数，前提是针对某些交换群操作具有可塑性的预言机。该框架将我们的新攻击与早期的同源协议亚指数量子攻击合并在一起，并且可能对密码分析有进

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_9](https://doi.org/10.1007/978-3-030-77870-5_9)
## Sieving for Twin Smooth Integers with Solutions to the Prouhet-Tarry-Escott Problem.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#sieving-for-twin-smooth-integers-with-solutions-to-the-prouhet-tarry-escott-problem) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#sieving-for-twin-smooth-integers-with-solutions-to-the-prouhet-tarry-escott-problem)**
### 作者
* Craig Costello, Microsoft Research, Redmond, WA, USA
* Michael Naehrig, Microsoft Research, Redmond, WA, USA
* Michael Meyer, University of Applied Sciences Wiesbaden, Wiesbaden, Germany
* Michael Meyer, University of Würzburg, Würzburg, Germany
### 摘要
> 我们提供了一种用于寻找连续平滑数对的筛选算法，该算法利用了Prouhet-Tarry-Escott（PTE）问题的解。任何这样的解都会引出两个n次多项式a(x)和b(x)，它们之间差一个常量整数C，并在\(\mathbb {Z}[x]\)中完全分解为线性因子。由此可推知，对于任意的\(\ell \in \mathbb {Z}\)，使得\(a(\ell ) \equiv b(\ell ) \equiv 0 \bmod {C}\)，两个整数\(a(\ell )/C\)和\(b(\ell )/C\)相差1，并且必然包含大致相同大小的n个因子。对于一个给定的光滑度上界B，限制搜索以符合这种参数化方式的整数对，可以增加它们是B-光滑数的概率。我们的算法结合了简单的筛选和一组PTE问题的解进行参数化。
> 
> 寻找大的孪生光滑整数的原因在于它们在紧凑的基于同余理论的后量子协议中的应用。最近的密钥交换方案B-SIDH和最近的数字签名方案SQISign都需要处于两个光滑整数之间的大素数；寻找这样的素数可以看作是在额外要求其和为一个素数p的条件下寻找孪生光滑整数的特殊情况。
> 
> 在搜索具有 \(2^{240} \le p <2^{256}\) 的密码参数时，我们的筛选算法发现了一些质数p，其中 \(p+1\) 和 \(p-1\) 都是 \(2^{15}\)-光滑数；而之前最光滑的参数中，有一个大小相似的质数使得 \(p-1\) 和 \(p+1\) 都是 \(2^{19}\)-光滑数。针对更高的安全级别，我们的筛选算法发现了一个介于两个 \(2^{21}\)-光滑整数之间的 376 位质数，一个介于两个 \(2^{22}\)-光滑整数之间的 384 位质数，以及一个介于两个 \(2^{28}\)-光滑整数之间的 512 位质数。我们的分析表明，使用先前已知的方法寻找满足这些光滑度上界的高安全性实例在计算上是不可行的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_10](https://doi.org/10.1007/978-3-030-77870-5_10)
## Delay Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#delay-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#delay-encryption)**
### 作者
* Jeffrey Burdges, Web 3 Foundation, Zug, Switzerland
* Luca De Feo, IBM Research Europe, Zürich, Switzerland
### 摘要
> 我们引入了一个名为“延迟加密”的新原语，并基于超奇异曲线和配对的同态的同态，给出了一个有效的实例化。 延迟加密与时间锁难题和可验证延迟函数有关，大致可以描述为“时间锁身份基础加密”。它在分布式协议中有几种应用，如密封出价的维克雷拍卖和电子投票。
> 
> 我们通过修改Boneh和Frankiln的IBE方案，并将主秘密密钥替换为长链同态，给出了延迟加密的实例化，就像De Feo，Masson，Petit和Sanso的同态VDF的同态一样。与同态VDF相似，我们的延迟加密在参数安全使用之前需要一个可信的设置；我们的可信设置与VDF的相同，因此可以生成一次相同的参数，并分享给两个协议的多次执行使用，可能具有不同的延迟参数。
> 
> 我们还讨论了一些与同态基础上的延迟协议相关的主题，这些主题在De Feo等人的研究中未经处理，即：分布式可信设置，数字水印和实施问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_11](https://doi.org/10.1007/978-3-030-77870-5_11)
## The Nested Subset Differential Attack - A Practical Direct Attack Against LUOV Which Forges a Signature Within 210 Minutes.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#the-nested-subset-differential-attack-a-practical-direct-attack-against-luov-which-forges-a-signature-within-210-minutes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#the-nested-subset-differential-attack-a-practical-direct-attack-against-luov-which-forges-a-signature-within-210-minutes)**
### 作者
* Jintai Ding, Tsinghua University, Beijing, China
* Joshua Deaton, University of Cincinnati, Cincinnati, OH, USA
* Vishakha, University of Cincinnati, Cincinnati, OH, USA
* Bo-Yin Yang, Academia Sinica, Taipei, Taiwan
### 摘要
> 在2017年，Ward Beullens等人提交了《提升型不平衡的油醋方案》[3]，这是对Patarin的《不平衡的油醋方案》进行的修改。此前，Ding等人提出了《子域差分攻击》[22]，促使LUOV的作者为NIST后量子标准化竞赛的第二轮更改了参数[4]。
> 
> 在本文中，我们提出了一种对《子域差分攻击》的修改，称之为《嵌套子集差分攻击》，它完全破坏了提出的一半参数集合。我们还通过实验证明这种攻击在I级安全参数下实际上是可行的，而不仅仅是理论上的攻击。《嵌套子集差分攻击》是对《子域差分攻击》的一大改进，可以在实际世界环境中使用。此外，我们只使用了LUOV的所谓“提升”结构，我们的攻击可以被看作是解决“提升”二次系统的发展。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_12](https://doi.org/10.1007/978-3-030-77870-5_12)
## Improved Cryptanalysis of UOV and Rainbow.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#improved-cryptanalysis-of-uov-and-rainbow) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#improved-cryptanalysis-of-uov-and-rainbow)**
### 作者
* Ward Beullens, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 本文的贡献有两个方面。首先，我们简化了不平衡油醋方案（UOV）及其Rainbow变体的描述，这使得更容易理解该方案及现有的攻击。我们希望这将使UOV和Rainbow更加容易被密码分析师理解。其次，我们提出了两种针对UOV和Rainbow签名方案的新攻击；既适用于UOV和Rainbow的交叉攻击，也只适用于Rainbow的矩形最小秩攻击。我们的攻击比现有攻击更加强大。特别是，我们估计与先前已知的攻击相比，我们的新攻击将密钥恢复成本分别增加了\(2^{17}\)、\(2^{53}\)和\(2^{73}\)，针对NIST PQC标准化项目第二轮提交的参数集，目标安全级别为I、III和V。对于第三轮参数，成本分别降低了\(2^{20}\)、\(2^{40}\)和\(2^{55}\)。这意味着所有这些参数集均不符合NIST制定的安全要求。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_13](https://doi.org/10.1007/978-3-030-77870-5_13)
## Cryptanalytic Applications of the Polynomial Method for Solving Multivariate Equation Systems over GF(2).
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#cryptanalytic-applications-of-the-polynomial-method-for-solving-multivariate-equation-systems-over-gf-2) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#cryptanalytic-applications-of-the-polynomial-method-for-solving-multivariate-equation-systems-over-gf-2)**
### 作者
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Be’er Sheva, Israel
### 摘要
> 在SODA 2017年的会议上，Lokshtanov等人提出了第一个在有限域上求解多项式方程组的最坏情况算法，其在速度上对穷举搜索具有指数级加速。这些算法基于电路复杂性中的多项式方法，它是一种用于证明电路下界的技术，最近被应用于算法设计。随后的研究进一步改进了基于多项式方法的算法在\(\mathbb{F}_2\)域上求解方程的渐近复杂性。然而，这些算法的渐近复杂性公式掩盖了重要的低阶项，因此它们只有在很大的n值下才能超过穷举搜索的效果。
> 
> 在本文中，我们设计了一种基于多项式方法的具体高效算法，用于在\(\mathbb{F}_2\)域上求解多元方程组。我们分析了算法在求解随机方程组时的性能，并将其复杂性限定为\(d = 2\)时为大约\(n^2 \cdot 2^{0.815n}\)比特操作，对于任意\(d \ge 2\)时为大约\(n^2 \cdot 2^{\left( 1 - 1/2.7d\right) n}\)。
> 
> 我们在Picnic签名方案（NIST后量子标准化项目中的备选第三轮候选方案）的密码分析中应用了我们的算法，该方案基于LowMC分组密码的安全性。因此，我们证明了其中有3个新实例中有2个没有达到其宣称的安全级别。作为次要应用，我们还改进了对Keccak哈希函数的多轮减少变体的已知最佳预像攻击。
> 
> 我们的算法结合了先前多项式方法算法中使用的各种技术和新的优化的结合，其中一些优化利用了关于方程组的随机性假设。在应用于Picnic的密码分析中，我们展示了如何进一步优化算法以求解从特定密码系统构造的结构化方程组。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_14](https://doi.org/10.1007/978-3-030-77870-5_14)
## Round-Optimal Blind Signatures in the Plain Model from Classical and Quantum Standard Assumptions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#round-optimal-blind-signatures-in-the-plain-model-from-classical-and-quantum-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#round-optimal-blind-signatures-in-the-plain-model-from-classical-and-quantum-standard-assumptions)**
### 作者
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shota Yamada, AIST, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
### 摘要
> 盲签名是由Chaum（Crypto'82）提出的，它允许用户在不向签名者透露消息本身的情况下获得消息的签名。到目前为止，已知所有最优盲签名的现有构造都需要以下之一：受信任的设置、交互式假设或复杂度利用。这种状态有点合理，因为对于普通模型（即没有受信任的设置）中最优盲签名构造的几个已知不可能结果，但由于所有这些不可能的结果都只在某些条件下成立，因此完全证明或推翻这种最优盲签名的存在仍然未解决。
> 
> 在这项工作中，我们对这个问题给出了肯定的答案，并从标准多项式时间假设中构建了第一个普通模型中的最优盲签名方案。我们的构造是基于各种标准的加密原语和我们在这项工作中引入的新原语，所有这些都可以从经典和后量子标准多项式时间假设中实例化。我们计划的主要构建块是一种新的原始类型，称为盲签名符合零知识（ZK）论证系统。其突出特点是使用量子多项式时间模拟器针对非统一经典多项式时间对手来保持ZK属性。从句法上看，它可以被视为具有可重复使用的第一个消息的延迟输入三步ZK论证，并且我们认为它将是独立感兴趣的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_15](https://doi.org/10.1007/978-3-030-77870-5_15)
## Post-Quantum Multi-Party Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#post-quantum-multi-party-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#post-quantum-multi-party-computation)**
### 作者
* Amit Agarwal, University of Illinois Urbana-Champaign, Urbana, USA
* Dakshita Khurana, University of Illinois Urbana-Champaign, Urbana, USA
* James Bartusek, UC Berkeley, Berkeley, USA
* Vipul Goyal, NTT Research and CMU, Pittsburgh, USA
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 我们启动了在普通模型中实现针对恶意量子敌手安全的经典功能的多方计算的研究。我们注意到，现有技术可以轻松地提供一个多项式回合的协议，但我们的主要结果是构建了一个常数回合的后量子多方计算。我们假设学习带误差（LWE）存在轻微的超多项式量子难度，并且基于LWE的圆形安全性假设存在量子多项式难度。在此过程中，我们开发了以下可能具有独立兴趣的加密原语：
> 
> 一种神秘的加密方案，可计算量子电路关系，从（圆形变体的）LWE问题的量子难度获得。这立即产生了第一个具有古典密钥的量子多密钥完全同态加密方案。
> 
> 一种常数回合的后量子不可变承诺方案，来自于LWE的轻微超多项式量子难度。
> 
> 为了证明协议的安全性，我们开发了一种新的直线非黑盒模拟技术，用于针对并行会话，该技术不克隆敌手的状态。该技术在经典设置中也可能相关。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_16](https://doi.org/10.1007/978-3-030-77870-5_16)
## A 2n/2-Time Algorithm for $\sqrt{n}$-SVP and $\sqrt{n}$-Hermite SVP, and an Improved Time-Approximation Tradeoff for (H)SVP.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#a-2n-2-time-algorithm-for-sqrt-n-svp-and-sqrt-n-hermite-svp-and-an-improved-time-approximation-tradeoff-for-h-svp) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#a-2n-2-time-algorithm-for-sqrt-n-svp-and-sqrt-n-hermite-svp-and-an-improved-time-approximation-tradeoff-for-h-svp)**
### 作者
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Zeyong Li, National University of Singapore, Singapore, Singapore
* Noah Stephens-Davidowitz, Cornell University, Ithaca, USA
### 摘要
> 我们展示了一个 \(2^{n/2+o(n)}\) 时间复杂度的算法，该算法接受格 \(\mathcal{L} \subset \mathbb{R}^n\) 的基作为输入，并找到一个长度不超过 \(\widetilde{O}(\sqrt{n}) \cdot \min \{\lambda_1(\mathcal {L}), \det(\mathcal {L})^{1/n}\}\) 的（非零）向量，其中 \(\lambda_1(\mathcal {L})\) 表示最短的非零格向量的长度，\(\det(\mathcal {L})\) 表示格的行列式。Minkowski 表明 \(\lambda_1(\mathcal {L}) \le \sqrt{n} \det (\mathcal{L})^{1/n}\)，并且存在满足 \(\lambda_1(\mathcal {L}) \ge \varOmega (\sqrt{n}) \cdot \det (\mathcal{L})^{1/n}\) 的格，因此我们的算法找到的向量相对于行列式而言尽可能短（最多多一个对数因子）。
> 
> 这一结果背后的主要技术贡献是对来自 [ADRS15] 的 \(2^{n/2 + o(n)}\) 时间复杂度算法（其较简化的变体）的新分析，该算法之前仅被认为能够解决较不实用的问题。为了实现这一点，我们依赖于“反向Minkowski定理”（由 Dadush [DR16] 猜想并由 [RS17] 证明），该定理可以被视为对于 \(\lambda_1(\mathcal {L}) \le \sqrt{n} \det (\mathcal{L})^{1/n}\) 的事实的部分逆命题。
> 
> 以前，寻找这样一个向量的已知最快算法是由 [LWXZ11] 提出的 \(2^{.802n + o(n)}\) 时间复杂度算法，该算法实际上找到了一个长度为 \(O(1) \cdot \lambda_1(\mathcal {L})\) 的非零格向量。虽然我们并未展示如何在 \(2^{n/2+o(n)}\) 时间内找到这样长度的格向量，但我们证明了我们的算法足以满足这些算法最重要的应用：基底缩减。特别是，我们展示了修改版的 Gama 和 Nguyen 的滑动缩减算法[GN08]，该算法可以与上述算法结合，在几乎所有情况下（包括与密码学相关的情况）改善最短向量算法的时间和长度的权衡。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_17](https://doi.org/10.1007/978-3-030-77870-5_17)
## New Lattice Two-Stage Sampling Technique and Its Applications to Functional Encryption - Stronger Security and Smaller Ciphertexts.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#new-lattice-two-stage-sampling-technique-and-its-applications-to-functional-encryption-stronger-security-and-smaller-ciphertexts) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#new-lattice-two-stage-sampling-technique-and-its-applications-to-functional-encryption-stronger-security-and-smaller-ciphertexts)**
### 作者
* Qiqi Lai, School of Computer Science, Shaanxi Normal University, Xi’an, China
* Qiqi Lai, State Key Laboratory of Integrated Service Networks, Xidian University, Xi’an, China
* Feng-Hao Liu, Florida Atlantic University, Boca Raton, FL, USA
* Zhedong Wang, Florida Atlantic University, Boca Raton, FL, USA
### 摘要
> 本工作提出了一种新的格两阶段抽样技术，泛化了Gentry、Peikert和Vaikuntanathan（STOC’08）之前的两阶段抽样方法。通过将我们的新技术作为关键构建模块，我们可以显著提高基于模拟的功能加密当前技术水平的安全性和效率。特别是，我们的功能加密实现了\((Q，\mathsf {poly})\)模拟基半自适应安全，允许任意的挑战前和挑战后的密钥查询，并且具有简洁的密文，只有额外的O(Q)开销。
> 
> 此外，我们的两阶段抽样技术可以得出基于不可区分性的自适应安全 \(\mathsf {IB} \)-\(\mathsf {FE} \)内积和半自适应安全 \(\mathsf {AB} \)-\(\mathsf {FE} \)内积的新可能性，打破了Abdalla、Catalano、Gay和Ursu（Asiacrypt’20）最近工作的若干技术限制。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_18](https://doi.org/10.1007/978-3-030-77870-5_18)
## On Bounded Distance Decoding with Predicate: Breaking the "Lattice Barrier" for the Hidden Number Problem.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#on-bounded-distance-decoding-with-predicate-breaking-the-lattice-barrier-for-the-hidden-number-problem) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#on-bounded-distance-decoding-with-predicate-breaking-the-lattice-barrier-for-the-hidden-number-problem)**
### 作者
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London, London, UK
* Nadia Heninger, University of California, San Diego, USA
### 摘要
> 密码分析中的基于格的算法通常搜索满足整数线性约束的目标向量，作为某个格中最短或最接近的矢量。在这项工作中，我们观察到这些表述可能会丢弃底层应用程序中的非线性信息，即使目标向量远非唯一接近或短。
> 
> 我们将格问题形式化为增加一个区分目标向量的谓词，并给出了解决这些问题实例的算法。我们将这些技术应用于基于格的方法来解决隐含数字问题，这是一种用于恢复侧信道攻击中的秘密DSA或ECDSA密钥的流行技术，并证明我们的算法成功地恢复了以前认为无法使用格方法来解决的实例的签名密钥。我们使用我们的估计和解决框架进行了大量实验，我们也将其与这项工作一起提供。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_19](https://doi.org/10.1007/978-3-030-77870-5_19)
## On the Ideal Shortest Vector Problem over Random Rational Primes.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#on-the-ideal-shortest-vector-problem-over-random-rational-primes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#on-the-ideal-shortest-vector-problem-over-random-rational-primes)**
### 作者
* Yanbin Pan, Key Laboratory of Mathematics Mechanization, Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing, 100190, China
* Jun Xu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Nick Wadleigh, School of Computer Science, University of Oklahoma, Norman, OK, 73019, USA
* Qi Cheng, School of Computer Science, University of Oklahoma, Norman, OK, 73019, USA
### 摘要
> 任何数域中的非零理想都可以被分解为素数理想的乘积。本文报道了有关素数理想的最短向量问题（SVP）复杂度与它们的分解群之间令人惊讶的联系。在将结果应用于格密码系统中流行的数域时，例如二次幂循环域，我们表明大部分有理质数都位于能够接受 SVP 多项式时间算法的素数理想下。虽然理想格子的最短向量问题是 Ring-LWE 加密系统安全性的基础，但这项工作并没有破坏 Ring-LWE，因为安全降低从最坏情况的理想 SVP 到平均情况下的 Ring-LWE，且为单向降低。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_20](https://doi.org/10.1007/978-3-030-77870-5_20)
## Efficient Bootstrapping for Approximate Homomorphic Encryption with Non-sparse Keys.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#efficient-bootstrapping-for-approximate-homomorphic-encryption-with-non-sparse-keys) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#efficient-bootstrapping-for-approximate-homomorphic-encryption-with-non-sparse-keys)**
### 作者
* Jean-Philippe Bossuat, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
* Christian Mouchet, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
* Juan Troncoso-Pastoriza, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
* Jean-Pierre Hubaux, École Polytechnique Fédérale de Lausanne, Lausanne, Switzerland
### 摘要
> 我们提出了一种针对Cheon等人的全RNS近似同态加密方案CKKS（Asiacrypt 17，SAC 18）的引导启动程序。与先前提出的程序（Eurocrypt 18＆19，CT-RSA 20）相比，我们的引导启动程序更精确，更高效（在CPU成本和消耗级别的数量方面），更可靠并且具有128位安全性。与以往的方法不同，它不需要使用稀疏秘钥。因此，据我们所知，这是第一个针对最新攻击下128位安全参数的高效且精确的引导启动过程，且失败概率低。
> 
> 我们通过引入三项新颖贡献实现了这种效率和精度：（i）我们提出了一种用于同态多项式评估的通用算法，该算法考虑了近似重缩放并且在级别消耗方面是最优的。（ii）我们优化了密钥转换程序并提出了一种线性变换的新技术（双倍提升）。 （iii）我们提出了一种系统方法来对引导启动进行参数化，包括一种精确评估其失败概率的方法。
> 
> 我们在开源的Lattigo库中实现了我们的改进和引导启动程序。例如，在\(\mathbb {C}^{32768}\)中引导启动纯文本需要18秒，具有505位的输出系数模，平均精度为19.1位，并具有\(2^{-15.58}\)的失败概率。因此，我们实现了引导启动吞吐量（每秒纯文本位）的14.1倍提高，相对于先前的最佳结果，我们的失败概率小了468倍，并且确保了128位的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_21](https://doi.org/10.1007/978-3-030-77870-5_21)
## High-Precision Bootstrapping of RNS-CKKS Homomorphic Encryption Using Optimal Minimax Polynomial Approximation and Inverse Sine Function.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#high-precision-bootstrapping-of-rns-ckks-homomorphic-encryption-using-optimal-minimax-polynomial-approximation-and-inverse-sine-function) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#high-precision-bootstrapping-of-rns-ckks-homomorphic-encryption-using-optimal-minimax-polynomial-approximation-and-inverse-sine-function)**
### 作者
* Joon-Woo Lee, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Republic of Korea
* Eunsang Lee, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Republic of Korea
* Yongwoo Lee, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Republic of Korea
* Jong-Seon No, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Republic of Korea
* Young-Sik Kim, Department of Information and Communication Engineering, Chosun University, Gwangju, Republic of Korea
### 摘要
> 基于剩余数系统（RNS）的近似同态加密，称为RNS变种Cheon-Kim-Kim-Song（RNS-CKKS）方案[12, 13]，是一种支持对实数或复数数据进行算术运算的完全同态加密方案。尽管RNS-CKKS方案是一种完全同态加密方案，但由于RNS-CKKS方案的引导操作的实用性不足，大部分使用RNS-CKKS方案的应用仅将其用作唯一的分层同态加密方案。引导操作的一个关键问题是其精度较低。虽然其他基本同态操作可以保证足够高的精度以供实际使用，但引导操作最多只支持约20位定点精度，这不足以用于可靠的大深度同态计算。
> 
> 在本文中，我们改进了RNS-CKKS方案中引导操作的消息精度。由于同态模归约过程是确定引导精度的最重要步骤之一，我们将重点放在了同态模归约过程上。首先，我们提出了一种快速算法，用于获取模归约函数和标度正弦/余弦函数在近似区域的并集上的最优最小最大逼近多项式，称为改进的多区间Remez算法。实际上，该算法可以推导出任何连续函数在有限个区间的并集上的最优最小最大逼近多项式。接下来，我们提出了使用反正弦函数的复合函数方法，以减小引导中使用的缩放因子与默认缩放因子之间的差异。借助这些方法，我们每个参数设置可以将RNS-CKKS方案中引导的逼近误差降低1/1176-1/42（5.4-10.2位精度改进）。虽然不使用复合函数方法的引导操作最大精度为27.2-30.3位，但使用复合函数方法的引导操作精度为32.6-40.5位。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_22](https://doi.org/10.1007/978-3-030-77870-5_22)
## On the Security of Homomorphic Encryption on Approximate Numbers.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#on-the-security-of-homomorphic-encryption-on-approximate-numbers) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#on-the-security-of-homomorphic-encryption-on-approximate-numbers)**
### 作者
* Baiyu Li, University of California, San Diego, USA
* Daniele Micciancio, University of California, San Diego, USA
### 摘要
> 本文提出了针对CKKS的被动攻击，这是一种针对在Asiacrypt 2017介绍的对近似数进行算术运算的同态加密方案。这种攻击在理论上非常有效（在预期的多项式时间内运行），非常实用，可以高概率地完全恢复密钥并且非常快。我们实施并测试了对主要开源同态加密库（包括HEAAN、SEAL、HElib和PALISADE）的攻击，同时计算了CKKS方案在加密数据的机器学习应用中经常出现的几个函数，比如均值和方差的计算，以及使用Maclaurin级数来近似逻辑和指数函数。
> 
> 这种攻击表明，CKKS所达到的传统\(\textsf {IND}\hbox {-}\textsf {CPA}\)安全性（或者针对被动攻击的不可区分性）不足以充分捕捉将近似加密方案应用于被动对手时的安全性，并且需要一个不同、更强的定义来评估这类方案的安全性。
> 
> 我们提出了对近似数同态加密的安全评估提供了坚实的理论基础（针对被动攻击），通过提出新的定义，这些定义自然地扩展了传统\(\textsf {IND}\hbox {-}\textsf {CPA}\)安全性的概念到近似计算环境中。我们提出了基于不可区分性和基于模拟的变体，以及对定义的限制版本，限制了敌对查询的顺序和数量（这可能会被一些应用所强制执行）。我们证明了不同定义变体之间的推论和分离，讨论了对CKKS的可能修改，这些修改可能作为对我们攻击的对策。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_23](https://doi.org/10.1007/978-3-030-77870-5_23)
## The Rise of Paillier: Homomorphic Secret Sharing and Public-Key Silent OT.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#the-rise-of-paillier-homomorphic-secret-sharing-and-public-key-silent-ot) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#the-rise-of-paillier-homomorphic-secret-sharing-and-public-key-silent-ot)**
### 作者
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
* Sophia Yakoubov, Aarhus University, Aarhus, Denmark
### 摘要
> 我们描述了一种简单的方法来解决Paillier群中的分布式离散对数问题，使得两个参与方能够将秘密（在指数上）的乘法份额转换为加法份额。我们的算法是完全正确的，不像以前的方法具有反多项式错误概率。我们获得了以下应用和进一步的结果。
> 
> 同态秘密分享。我们基于决策复合剩余（DCR）假设构建了支持可忽略的正确性误差和支持指数级大文本的分支程序同态秘密分享，具有安全性。
> 
> 相关伪随机性。最近由Boyle等人（FOCS 2020）引入的伪随机相关函数（PCFs）允许两个参与方在给定一对短、相关密钥的情况下获取实际无限量的相关随机性。我们分别基于二次剩余（QR）或DCR假设构建了用于对称传输（OT）和向量对称线性评估（VOLE）相关性的PCFs。我们还基于（DCR或QR）和学习带噪声奇偶校验假设的组合构建了一个生成有限数量样本（一次性生成所有样本）的伪随机相关生成器，用于包括OLE在内的一般2阶相关性。
> 
> 公钥静默OT / VOLE。我们将PCF构造升级为具有公钥设置，即在独立发布公钥后，每个参与方可以本地推导出其PCF密钥。这允许完全无声地生成任意数量的OT或VOLE，除了PKI之外不需要任何交互，基于QR，DCR，CRS和随机预言机。公钥设置基于一种新颖的非交互式向量OLE协议，可以看作是Bellare-Micali遗忘传输协议的一种变体。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_24](https://doi.org/10.1007/978-3-030-77870-5_24)
## Improved Linear Approximations to ARX Ciphers and Attacks Against ChaCha.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#improved-linear-approximations-to-arx-ciphers-and-attacks-against-chacha) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#improved-linear-approximations-to-arx-ciphers-and-attacks-against-chacha)**
### 作者
* Murilo Coutinho, Research and Development Center for Communications Security (CEPESC), Rio de Janeiro, Brazil
* Tertuliano C. Souza Neto, Research and Development Center for Communications Security (CEPESC), Rio de Janeiro, Brazil
### 摘要
> 在本文中，我们提出了一种新的技术，可用于发现ARX密码中更好的线性逼近。使用此技术，我们呈现了对ChaCha的3轮和4轮的首次明确导出的线性逼近，并且，这使我们能够改进最近对ChaCha的攻击。此外，我们呈现了ChaCha的3轮和3.5轮的新微分，当与所提出的技术相结合时，可以进一步提高差分-线性攻击对ChaCha的复杂性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_25](https://doi.org/10.1007/978-3-030-77870-5_25)
## Rotational Cryptanalysis from a Differential-Linear Perspective - Practical Distinguishers for Round-Reduced FRIET, Xoodoo, and Alzette.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#rotational-cryptanalysis-from-a-differential-linear-perspective-practical-distinguishers-for-round-reduced-friet-xoodoo-and-alzette) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#rotational-cryptanalysis-from-a-differential-linear-perspective-practical-distinguishers-for-round-reduced-friet-xoodoo-and-alzette)**
### 作者
* Yunwen Liu, College of Liberal Arts and Science, National University of Defense Technology, Changsha, China
* Chao Li, College of Liberal Arts and Science, National University of Defense Technology, Changsha, China
* Yunwen Liu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yunwen Liu, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 1994年，在CRYPTO提出了差分-线性攻击，结合了对称密钥密码分析的两种最有效的技术。从评估差分-线性区分器偏差的精确公式（JoC 2017），到处理在差分和线性部分之间切换的依赖关系的差分-线性连接表（DLCT）技术（EUROCRYPT 2019），再到在分析ARX原语时的改进（CRYPTO 2020），在过去四年里，我们已经看到了差分-线性攻击的显著发展。在这项工作中，我们通过用旋转异或差分替换攻击的差分部分来进一步扩展这一框架。在此过程中，我们建立了旋转异或差分与线性逼近之间的理论联系，揭示了将普通差分-线性攻击的偏差的闭合公式直接应用于旋转差分-线性密码分析是非平凡的。然后，我们从差分-线性密码分析的角度重新审视旋转密码分析，并推广Morawiecki等人对Keccak分析的技术，这导致了在输出线性掩码是单位向量的特殊情况下估计（旋转）差分-线性区分器偏差的实用方法。最后，我们将旋转差分-线性技术应用于FRIET、Xoodoo、Alzette和SipHash中涉及的置换。这对现有的密码分析结果进行了显著改进，或者解释了先前没有理论基础的实验区分器。为了确认我们分析的有效性，所有具有实际复杂度的区分器都经过了实验证实。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_26](https://doi.org/10.1007/978-3-030-77870-5_26)
## Automatic Search of Meet-in-the-Middle Preimage Attacks on AES-like Hashing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#automatic-search-of-meet-in-the-middle-preimage-attacks-on-aes-like-hashing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#automatic-search-of-meet-in-the-middle-preimage-attacks-on-aes-like-hashing)**
### 作者
* Danping Shi, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zhenzhen Bao, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Jian Guo, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Zheng Li, Faculty of Information Technology, Beijing University of Technology, Beijing, China
* Zheng Li, Beijing Key Laboratory of Trusted Computing, Beijing University of Technology, Beijing, China
* Danping Shi, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, University of Chinese Academy of Sciences, Beijing, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Shandong, China
### 摘要
> Meet-in-the-Middle (MITM)先影攻击在破解许多哈希函数的先影抵抗性方面非常有效，其中包括但不限于全面的MD5、HAVAL和Tiger以及缩减的SHA-0/1/2。2011年，Sasaki证明它也对基于AES等分组密码的哈希函数构成威胁。最近，对AES哈希模式的此类攻击从仅利用选择内部状态的自由扩展到利用选择消息状态的自由。然而，检测此类攻击，尤其是进化的变种，是困难的。在先前的研究中，对此类攻击配置的搜索空间是有限的，因此手动分析是可行的，但结果并不最优。在本文中，我们消除了先前研究中的人为限制，以明确定义的方式制定了攻击构造的基本思想，并将寻找最佳攻击的问题转化为在混合整数线性规划 (MILP) 模型的约束下进行优化问题的求解。MILP模型捕捉到了一个大的有效攻击解空间；以及MILP模型的目标是攻击配置具有最小的计算复杂性。通过使用这种MILP模型和现成的求解器，可以高效地进行详尽的最佳攻击搜索。因此，我们获得了针对Haraka-512 v2的完整版本（5轮）和扩展版本（5.5轮），以及8轮AES-128哈希模式的首个攻击方法，以及包括更多轮的Haraka-256 v2和AES及Rijndael哈希模式的改进攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_27](https://doi.org/10.1007/978-3-030-77870-5_27)
## A Deeper Look at Machine Learning-Based Cryptanalysis.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-1].md#a-deeper-look-at-machine-learning-based-cryptanalysis) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-1].md#a-deeper-look-at-machine-learning-based-cryptanalysis)**
### 作者
* Adrien Benamira, Nanyang Technological University, Singapore, Singapore
* David Gerault, Nanyang Technological University, Singapore, Singapore
* Thomas Peyrin, Nanyang Technological University, Singapore, Singapore
* Quan Quan Tan, Nanyang Technological University, Singapore, Singapore
* David Gerault, University of Surrey, Guildford, UK
### 摘要
> 在CRYPTO'19上，Gohr提出了一种基于机器学习算法的新的密码分析策略。通过使用深度神经网络，他成功构建了一个基于神经网络的区分器，令人惊讶地超越了NSA分组密码SPECK的某个版本的最新密码分析成果（该区分器可以进一步用于更大规模的密钥恢复攻击）。虽然这项工作为机器学习辅助的密码分析开辟了新的可能性，但目前尚不清楚这个区分器的实际工作原理以及机器学习算法如何推断出信息。攻击者留下了一个不太清楚被测试算法潜在弱点性质的黑匣子，由于深度神经网络的可解释性是一个众所周知的困难任务，希望渺茫。
> 
> 在本文中，我们提出了对这一新的神经区分器固有工作原理的详细分析和深入解释。首先，我们研究了分类集，并试图找到一些模式，这些模式可以指导我们更好地理解Gohr的结果。我们通过实验表明神经区分器通常依赖于密文对的差分分布，但也依赖于倒数第二和倒数第三轮的差分分布。为了验证我们的发现，我们构建了一个基于纯密码分析的SPECK分组密码的区分器，没有使用任何神经网络，它的准确度基本上与Gohr的神经区分器相同，并且效率也一样（因此改进了以前基于非神经网络的区分器）。
> 
> 此外，作为另一种方法，我们提供了一种基于机器学习的区分器，将Gohr的深度神经网络简化到最少程度。我们能够使用简单的标准机器学习工具，保持接近Gohr区分器的准确度。特别是，我们显示Gohr的神经区分器实际上在学习阶段内部构建了密码的Differential Distribution Table（DDT）的一个很好的近似，并利用这些信息直接对密文对进行分类。这一结果允许对该区分器进行完全解释，并代表对深度神经网络的可解释性做出的有趣贡献。
> 
> 最后，我们提出了一些改进Gohr工作的方法和可能的新的神经区分器设置。我们进行的所有实验结果都得到了SPECK分组密码的确认（源代码可在网上获取）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77870-5_28](https://doi.org/10.1007/978-3-030-77870-5_28)
