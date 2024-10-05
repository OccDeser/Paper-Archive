# Crypto[2024-3]
## On the Practical CPAD Security of "exact" and Threshold FHE Schemes and Libraries.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#on-the-practical-cpad-security-of-exact-and-threshold-fhe-schemes-and-libraries) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#on-the-practical-cpad-security-of-exact-and-threshold-fhe-schemes-and-libraries)**
### 作者
* Marina Checri, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
* Renaud Sirdey, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
* Aymen Boudguiga, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
* Jean-Paul Bultel, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
### 摘要
> 在他们的Eurocrypt'21重要论文中，李和Micciancio提出了针对CKKS近似FHE方案的被动攻击，并引入了“CPA ^ D”安全性概念。目前的现状是这类攻击不适用于“精确”FHE。本文通过展示对线性同态Regev加密系统的“CPA ^ D”密钥恢复攻击，挑战了这种现状，这种攻击很容易推广到其他xHE方案（如BFV，BGV和TFHE），表明这些加密系统在基本形式下不是“CPA ^ D”安全的。我们还展示了现有的BFV，BGV和CKKS的门限变体特别容易受到“CPA ^ D”攻击者的攻击，并且如果部分解密后没有适当的模糊噪声添加，将不安全。最后，我们成功地对多个主流FHE库实现了我们的攻击，并讨论了一些自然的对策以及它们在FHE实践、安全性和效率方面的后果。这种攻击本身相当实用，通常只需要在普通笔记本电脑上不到一小时的时间，需要几千个密文以及最多约一百万次的评估/解密才能进行完整的密钥恢复。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_1](https://doi.org/10.1007/978-3-031-68382-4_1)
## Lossy Cryptography from Code-Based Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#lossy-cryptography-from-code-based-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#lossy-cryptography-from-code-based-assumptions)**
### 作者
* Quang Dao, Carnegie Mellon University, Pittsburgh, USA
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 在过去的几十年里，我们看到了从各种假设构建的具有丢失或同态性质的先进加密基元大量增多，例如二次剩余、决策性Diffie-Hellman和误差学习。这些基元暗示了复杂性类\(\mathcal {SZK}\)（统计零知识）中的难题；因此，它们只能基于在\(\mathcal {BPP}^{\mathcal {SZK}}\)中被打破的假设。这对从基于代码的假设构建先进密码学提出了障碍，如带噪声的学习奇偶校验（LPN），因为已知LPN仅在极低噪声率\(\frac{\log ^2 n}{n}\)下处于\(\mathcal {BPP}^{\mathcal {SZK}}\)中，而在准多项式时间内被破解。
> 
> 在这项工作中，我们提出了一种新的基于代码的假设：密集-稀疏LPN，属于复杂性类\(\mathcal {BPP}^{\mathcal {SZK}}\)，并推测对抗次指数时间对手是安全的。我们的假设是LPN的一种变体，受麦克利斯密码系统和平均情况复杂性中的随机\(k\text{- }\)XOR启发。大致地，该假设表明对于从伯努利分布中抽取的随机（密集）矩阵\(\textbf{T}\)，随机稀疏矩阵\(\textbf{M}\)和稀疏噪声向量\(\textbf{e}\)。
> 
> 我们利用我们的假设来构建丢失陷门函数（Peikert-Waters STOC 08）。这为原始论文中基于格的构造提供了第一个后量子替代方案。作为一种基本的加密工具，丢失陷门函数已知可实现广泛范围的既丢失又非丢失的密码基元。我们的构造因此以通用方式意味着这些基元。特别是，我们实现了具有合理次指数安全性的防碰撞哈希函数，相比仅具有准多项式安全性的噪声率为\(\frac{\log ^2 n}{n}\)的LPN之前构造得到了改进。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_2](https://doi.org/10.1007/978-3-031-68382-4_2)
## Exploring the Advantages and Challenges of Fermat NTT in FHE Acceleration.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#exploring-the-advantages-and-challenges-of-fermat-ntt-in-fhe-acceleration) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#exploring-the-advantages-and-challenges-of-fermat-ntt-in-fhe-acceleration)**
### 作者
* Andrey Kim, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Maxim Deryabin, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Sunmin Kwon, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Hyung Chul Kang, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Ahmet Can Mert, Graz University of Technology, Graz, Austria
* Anisha Mukherjee, Graz University of Technology, Graz, Austria
* Aikata Aikata, Graz University of Technology, Graz, Austria
* Sujoy Sinha Roy, Graz University of Technology, Graz, Austria
### 摘要
> 在这篇论文中，我们意识到在同态加密中快速和资源高效的多项式乘法的重要性，因此设计了一种无乘法器的数论变换，使用费马数作为辅助模。为了使这个算法能够与多项式的度可伸缩，我们应用了单变量到多变量多项式环的转换。我们使用这些算法技术，为全同态加密开发了一个加速器架构，用于高效的多变量多项式乘法。在实际同态加密应用基准测试中，硬件加速器与软件实现相比实现了1200倍的加速。最后，我们通过讨论拟议的多项式乘法方法的优势和局限性来总结本文。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_3](https://doi.org/10.1007/978-3-031-68382-4_3)
## Laconic Function Evaluation and ABE for RAMs from (Ring-)LWE.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#laconic-function-evaluation-and-abe-for-rams-from-ring-lwe) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#laconic-function-evaluation-and-abe-for-rams-from-ring-lwe)**
### 作者
* Fangqi Dong, IIIS, Tsinghua University, Beijing, China
* Zihan Hao, IIIS, Tsinghua University, Beijing, China
* Ethan Mook, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Hoeteck Wee, ENS, Paris, France
* Hoeteck Wee, NTT Research, Sunnyvale, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
### 摘要
> 简要功能评估（LFE）允许我们将电路f压缩成一个简短的摘要。任何人都可以使用此摘要作为公钥以有效加密一些输入x。从解密所得的密文中解密出输出f（x），同时隐藏x的其他所有内容。在这项工作中，我们考虑了随机访问机器（RAM-LFE）的LFE，其中，我们有一个RAM程序fDB，该程序可能包含一些大型硬编码数据DB，而不是电路f。从密文中恢复fDB（x）的解密运行时应与RAM模型中的fDB（x）的普通评估大致相同，这可以在DB的大小为次线性的情况下进行。先前的作品构造了LWE下的电路LFE，以及在不可区分性混淆（iO）和Ring-LWE下的RAM-LFE。在这项工作中，我们仅从Ring-LWE和标准循环安全假设中构建了具有基本最优加密和解密运行时的RAM-LFE，而无需iO。RAM-LFE直接产生RAM的1键简明功能加密和可重用的garbling，并具有类似参数的RAM。如果我们只需要用于RAM的基于属性的LFE（RAM-AB-LFE），则可以用上述方式替换Ring-LWE。另外，如果我们仅需要分层方案，其中加密/解密效率可以随着RAM计算深度扩展，则可以不需要循环安全性。最后，我们还从LWE中获得了用于RAM的分层多密钥属性加密（RAM-ABE）。）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_4](https://doi.org/10.1007/978-3-031-68382-4_4)
## Reducing the CRS Size in Registered ABE Systems.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#reducing-the-crs-size-in-registered-abe-systems) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#reducing-the-crs-size-in-registered-abe-systems)**
### 作者
* Rachit Garg, University of Texas at Austin, Austin, TX, USA
* George Lu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* David J. Wu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### 摘要
> 属性基加密（ABE）是公钥加密的一种泛化，它实现了对加密数据的细粒度访问控制。在（密文策略）ABE中，中央受信任的机构向用户发布属性x的解密密钥。反过来，密文与解密策略\（\ ensuremath {\ mathcal {P}} \）相关联。只要\（\ ensuremath {\ mathcal {P}}（x）= 1 \），解密就成功并恢复了加密消息。最近，Hohenberger，Lu，Waters和Wu（Eurocrypt 2023）引入了注册ABE的概念，这是一种没有受信任的中央机构的ABE方案。相反，用户生成自己的公共/秘密密钥（就像公钥加密一样），然后向密钥管理员注册其密钥（和属性）。密钥管理员是一个透明且不受信任的实体。
> 
> 目前，基于配对的最佳注册ABE方案支持单调布尔公式和先验有界数量的用户L。现有方案的一个主要限制是它们需要大小为\（L^2 \cdot |\ensuremath {\ mathcal {U}}| \）的（结构化的）公共参考字符串（CRS），其中\（|\ensuremath {\ mathcal {U}}| \）是属性宇宙的大小。换句话说，CRS的大小与用户数量成二次比例，并与属性宇宙的大小成乘积比例。这样的大型CRS使得这些方案在实践中昂贵且仅限于少量用户和小的属性宇宙。
> 
> 在这项工作中，我们提出了两种方式来减小基于配对的注册ABE方案中CRS的大小。首先，我们介绍了一种基于无进展集的组合技术，它实现了相同类别的策略的注册ABE，但CRS的大小是与用户数量次二次的。从渐进角度看，我们获得了一个CRS大小几乎与用户数量L线性相关的方案（即\（L^{1 + o（1）}\)）。如果我们以更具体的效率导向为重点，我们可以实例化我们的框架，获得一个CRS大小为\（L^{\log _2 3} \approx L^{1.6}\)的结构。例如，在100,000个用户的方案中，我们的方法将CRS减少了超过115倍（而且在加密/解密时间中没有产生任何开销）。我们减小CRS大小的第二种方法是在注册ABE方案的安全性论证中依靠基于分区的论证。先前的方法采用了双系统方法。利用基于分区的论证得到了一个注册ABE方案，其中CRS的大小与属性宇宙的大小无关。代价是所得方案满足较弱的静态安全性。我们减小CRS大小的技术可以结合使用，综合来看，我们获得了一个基于配对的注册ABE方案，它支持单调布尔公式，CRS的大小为\（L^{1 + o（1）}\)。值得注意的是，这是第一个基于配对的注册ABE方案，它在设置时间内不需要对属性宇宙的大小施加约束。
> 
> 作为一个额外的应用，我们还展示了如何应用我们基于无进展集的技术来进行Waters和Wu（Crypto 2022）的\（\ ensuremath {\ textsf {NP}} \）方案的批量论证（BARG），以获得一个几乎线性CRS的方案，而无需依赖非黑匣子引导技术。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_5](https://doi.org/10.1007/978-3-031-68382-4_5)
## Circuit ABE with sfpoly( depth,λ )-Sized Ciphertexts and Keys from Lattices.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#circuit-abe-with-sfpoly-depth-sized-ciphertexts-and-keys-from-lattices) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#circuit-abe-with-sfpoly-depth-sized-ciphertexts-and-keys-from-lattices)**
### 作者
* Hoeteck Wee, NTT Research, Sunnyvale, CA, USA
* Hoeteck Wee, ENS, Paris, France
### 摘要
> 我们提出了基于格的属性基加密（ABE）和简洁功能评估（LFE）方案，用于具有次线性密文开销的电路。对于深度为 d 的电路，我们得到：
> 
> 一个具有 O(1) 的密文和秘钥大小的 ABE；
> 
> 一个具有 \(\ell + O(1)\) 的密文大小和 O(1) 的摘要大小的 LFE；
> 
> 一个具有公钥和密文大小 \(O(\ell ^{2/3})\) 以及秘钥大小 O(1) 的 ABE，
> 
> 其中 \(O(\cdot )\) 隐藏着 \(\textsf{poly}(d,\lambda )\) 因子。前两个结果实现了几乎最优的密文和秘钥/摘要大小，直到 \(\textsf{poly}(d)\) 的依赖。我们方案的安全性依赖于 \(\ell \) -简明的 LWE，这是一个可证伪的假设，可以由回避式 LWE 推导出。我们结果的核心是一种压缩 LWE 样本 \(\textbf{s}(\textbf{A}-\textbf{x}\otimes \textbf{G})\) 和矩阵 \(\textbf{A}\) 的新技术。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_6](https://doi.org/10.1007/978-3-031-68382-4_6)
## A Systematic Study of Sparse LWE.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#a-systematic-study-of-sparse-lwe) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#a-systematic-study-of-sparse-lwe)**
### 作者
* Aayush Jain, Carnegie Mellon University, Pittsburgh, PA, USA
* Huijia Lin, Carnegie Mellon University, Pittsburgh, PA, USA
* Sagnik Saha, Carnegie Mellon University, Pittsburgh, PA, USA
* Aayush Jain, University of Washington, Seattle, WA, USA
* Huijia Lin, University of Washington, Seattle, WA, USA
* Sagnik Saha, University of Washington, Seattle, WA, USA
### 摘要
> 在这项工作中，我们介绍了稀疏LWE假设，这个假设既受到Learning with Errors（Regev JACM 10）的启发，又受到Sparse Learning Parity with Noise（Alekhnovich FOCS 02）的启发。和LWE一样，这个假设假设\((\textbf{A}, \textbf{s}\textbf{A}+\textbf{e} \mod p)\)与一个随机的\(\textbf{u}\)不可区分，其中秘密\(\textbf{s}\)和误差向量\(\textbf{e}\)的生成方式与LWE相同，但是在稀疏LPN中，系数矩阵\(\textbf{A}\)从\(\ensuremath {\mathbb {Z}}^{n\times m}_{p}\)中随机选择，以便每一列的汉明重量恰好为某个小的常数k。我们研究了k为常数或者对数级别的情况。提出这个假设的主要动机是效率。与LWE相比，在效率方面，样本可以以大约O(n/k)的因子改进计算和存储。我们的结果可以总结为：
> 
> 基础：我们展示了稀疏LWE样本的几个属性，包括：1）LWE/LPN的困难问题与维度k意味着稀疏LWE/LPN的稀疏度k和任意维度\(n \ge k\)的困难问题。2）当样本数量\(m=\varOmega (n \log p)\)时，由随机稀疏矩阵的行组成的格子的最短向量长度很大，接近于具有相同维数的随机密矩阵的最短向量长度（多一个小常数因子）。3）具有小多项式范数的陷门存在于具有维度\(n \times m = O(n \log p)\)的随机稀疏矩阵中。4）当维度为\(n \times m = \ensuremath {\widetilde{\mathcal {O}}}(n^2)\)时，存在有效的算法用于采样这样的矩阵和陷门。
> 
> 密码分析：我们研究了已用于打破LWE和稀疏LPN的一系列算法。尽管许多适用于LWE的攻击在稀疏情况下不能利用稀疏性，但我们考虑自然的扩展以利用稀疏性。我们提出了一个模型来捕获所有这些攻击。利用这个模型，我们建议启发式方法来确定具体参数。我们的初始密码分析表明，具有适度的k和略大于LWE的维度的具体稀疏LWE将具有与具有类似参数的LWE相似的安全水平。
> 
> 应用：我们展示了稀疏LWE的困难性意味着用于低次计算的非常高效的同态加密方案。我们获得了第一个具有略微超常数甚至常数开销的秘密密钥线性同态加密（LHE）方案，这进一步应用于私人信息检索、私人集合交集等。我们还获得了具有略超常数甚至常数开销的任意常数次多项式的秘密密钥同态加密。
> 
> 我们强调我们的结果是初步的。但是，我们的结果为进一步研究稀疏LWE提供了有力的证据。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_7](https://doi.org/10.1007/978-3-031-68382-4_7)
## How to Construct Quantum FHE, Generically.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#how-to-construct-quantum-fhe-generically) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#how-to-construct-quantum-fhe-generically)**
### 作者
* Aparna Gupte, MIT CSAIL, Cambridge, USA
* Vinod Vaikuntanathan, MIT CSAIL, Cambridge, USA
### 摘要
> 我们从具有\(\textsf{NC}^{1}\)算法解密的任何（紧凑的）经典全同态加密方案以及双模陷门函数族开始构建（紧凑的）量子全同态加密（QFHE）方案。与之前利用类似底层原语的构造方式，如Mahadev（FOCS 2018）和Brakerski（CRYPTO 2018）等相比，我们的构造方式提供了从不同假设实例化的途径。我们的构造使用Dulek、Schaffner和Speelman（CRYPTO 2016）的技术，并展示如何使用双模陷门函数使其QFHE方案的客户端成为经典的。作为额外的贡献，我们展示了一种从群作用中获得双模陷门函数的新实例化方法。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_8](https://doi.org/10.1007/978-3-031-68382-4_8)
## A Modular Approach to Registered ABE for Unbounded Predicates.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#a-modular-approach-to-registered-abe-for-unbounded-predicates) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#a-modular-approach-to-registered-abe-for-unbounded-predicates)**
### 作者
* Nuttapong Attrapadung, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Junichi Tomida, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 注册属性基加密 (Reg-ABE)，由Hohenberger等人（Eurocrypt’23）提出，是属性基加密（ABE）的一个关键扩展，旨在缓解密钥托管问题。尽管迄今为止已经提出了几种具有密码学黑盒使用的Reg-ABE方案，但在可实现谓词类别之间仍存在显着差距，介于普通ABE和Reg-ABE之间。为了缩小这一差距，我们提出了一个用于构建更广泛谓词类别的Reg-ABE方案的模块化框架。我们的框架是Attrapadung（Eurocrypt’19）引入的ABE的谓词变换框架的Reg-ABE模拟，并后来由Attrapadung和Tomida（Asiacrypt’20）在标准MDDH假设下进行了改进。作为直接应用，我们的框架意味着在标准MDDH假设下有以下新的Reg-ABE方案：
> 
> 第一个非单调跨度程序的Reg-ABE方案，具有传统完全无限制属性。
> 
> 第一个普通非单调跨度程序的Reg-ABE方案（同时也具有完全无限制属性），如Attrapadung和Tomida（Asiacrypt’20）在普通ABE情况下定义的那样。
> 
> 这里，“完全无限制”一词表示对用户属性集和与密文相关联的策略没有任何限制。
> 
> 从技术角度来看，我们首先实质性修改了最初由Attrapadung（Eurocrypt’14）为普通ABE设计的配对编码方案（PES），使其与Reg-ABE兼容。随后，我们通过一系列谓词转换，可以构建复杂谓词，特别是具有“无限制”特征的谓词，从简单的谓词开始。最后，我们定义了构建Reg-ABE方案所需的PES新属性，并证明了这些属性通过转换得以保留。这立即意味着我们可以获得通过谓词转换派生的任何谓词的Reg-ABE方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_9](https://doi.org/10.1007/978-3-031-68382-4_9)
## Fully-Succinct Multi-key Homomorphic Signatures from Standard Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#fully-succinct-multi-key-homomorphic-signatures-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#fully-succinct-multi-key-homomorphic-signatures-from-standard-assumptions)**
### 作者
* Gaspard Anthoine, IMDEA Software Institute, Madrid, Spain
* David Balbás, IMDEA Software Institute, Madrid, Spain
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Gaspard Anthoine, Universidad Politécnica de Madrid, Madrid, Spain
* David Balbás, Universidad Politécnica de Madrid, Madrid, Spain
### 摘要
> 多密钥同态签名（MKHS）允许在由不同用户签名的数据上评估函数，同时生成简洁且可公开验证的结果正确性证书。现有MKHS构造都实现了一种较弱的简洁性水平，其中签名在总输入数量方面简洁，但在涉及计算的用户数量方面线性增长。唯一的例外是一种基于SNARK的构造，它依赖于签名神谕存在时知识真实性的强概念，这不仅需要不可伪造的假设，还遇到了一些不可能结果。
> 
> 在本研究中，我们提出了第一种完全简洁（也与用户数量相关）且在标准可伪造假设下实现自适应安全的MKHS构造。我们的结果通过批量NP证据（BARGs）和功能承诺（FC）的新颖组合实现，并基于配对或格假设为深度无界电路提供多样化MKHS实例。此外，我们的方案支持预处理的高效验证，并可以轻松扩展以实现多跳评估和上下文隐藏。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_10](https://doi.org/10.1007/978-3-031-68382-4_10)
## Attribute Based Encryption for Turing Machines from Lattices.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#attribute-based-encryption-for-turing-machines-from-lattices) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#attribute-based-encryption-for-turing-machines-from-lattices)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Simran Kumari, IIT Madras, Chennai, India
* Shota Yamada, AIST Tokyo, Koto, Japan
### 摘要
> 本文提出了第一个支持来自格假设的图灵机的无界串通的属性基加密（ABE）方案。更详细地说，加密器将属性x与机器运行时间的上界t以及消息m编码到密文中，密钥生成器将图灵机M嵌入到密钥中，解密仅在M(x)=1时返回m。至关重要的是，输入x和机器M的大小可以是无限的，时间界t可以根据每个输入动态选择，并且解密在输入特定时间内运行。
> 
> 先前已知的用于统一计算的最佳ABE仅支持非确定对数空间图灵机（NL）（来自配对的Lin和Luo，Eurocrypt 2020）。在后量子时代，最先进的技术支持对称密钥设置下的有限状态自动机（Agrawal、Maitra和Yamada，Crypto 2019）。
> 
> 更详细地说，我们的结果是：
> 
> 1.我们从LWE、evasive LWE（Wee，Eurocrypt 2022和Tsabary，Crypto 2022）和Tensor LWE（Wee，Eurocrypt 2022）的假设中构建了第一个NL的ABE。这产生了第一个（推测的）后量子的NL ABE。
> 
> 2.依赖于LWE、evasive LWE以及一个名为circular tensor LWE的新假设，我们构建了所有图灵机的ABE。在高层面上，循环张量LWE假设将循环性纳入到张量LWE（Wee，Eurocrypt 2022）的假设中。
> 
> 为了支持我们针对图灵机的ABE，我们还从同样的假设中获得了第一个无界深度和大小的电路的CP-ABE——这可能是独立感兴趣的。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_11](https://doi.org/10.1007/978-3-031-68382-4_11)
## Plaintext-Ciphertext Matrix Multiplication and FHE Bootstrapping: Fast and Fused.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#plaintext-ciphertext-matrix-multiplication-and-fhe-bootstrapping-fast-and-fused) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#plaintext-ciphertext-matrix-multiplication-and-fhe-bootstrapping-fast-and-fused)**
### 作者
* Youngjin Bae, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, Seoul National University, Seoul, Republic of Korea
* Jai Hyun Park, Seoul National University, Seoul, Republic of Korea
* Guillaume Hanrot, CryptoLab Inc., Lyon, France
* Damien Stehlé, CryptoLab Inc., Lyon, France
### 摘要
> 利用同态乘法将明文矩阵与密文矩阵（PC-MM）相乘是私人评估变压器的核心任务，通常用于大型语言模型。我们提供了基于RLWE的几种PC-MM算法，这些算法由明文矩阵（PP-MM）的乘法和相对廉价的预处理和后处理步骤组成：与RLWE环度相比小和大尺寸，以及有无预先计算。对于具有预先计算的算法，我们展示了如何使用相同尺寸的单精度浮点PP-MM执行PC-MM。这对于实际用途特别有意义，因为可以使用高性能BLAS库实现浮点PP-MM。
> 
> 这些算法依赖于RLWE的多秘密变体，可以更紧凑地表示多个密文。我们给出了从常规共享秘密RLWE密文转换为多个秘密密文的算法，并解释了这个格式与同态加法、明文-密文乘法和密钥切换的兼容性。这反过来又使我们可以加速CKKS启动时的槽到系数和系数到槽步骤，当一次启动多个密文时。结合批量启动和高效的PC-MM结果，形成了MaMBo(Matrix Multiplication Bootstrapping)，这是一种可以在有限开销下执行PC-MM的启动算法。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_12](https://doi.org/10.1007/978-3-031-68382-4_12)
## Time-Lock Puzzles from Lattices.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#time-lock-puzzles-from-lattices) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#time-lock-puzzles-from-lattices)**
### 作者
* Shweta Agrawalr, IIT Madras, Chennai, India
* Giulio Malavolta, Bocconi University, Milan, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Tianwei Zhang, Max Planck Institute for Security and Privacy, Bochum, Germany
* Tianwei Zhang, Ruhr University Bochum, Bochum, Germany
### 摘要
> 时间锁谜题（TLP）是一种加密工具，允许将消息加密到未来的特定时间T内。目前,我们只有两个能够证明安全性的构造：一个基于重复平方假设，另一个基于不可区分混淆（iO）。将TLP基于其他假设的问题一直存在，并且由于已知的构造被量子算法攻破，进一步激励了这一问题。
> 
> 在这项工作中，我们提出了一种基于格的新方法来构建时间锁谜题，因此具有可信的后量子安全性。我们得到以下主要结果：
> 
> 在预处理模型中，允许一次性公共硬币预处理，我们得到一个加密时间为\(\log (T)\)的时间锁谜题。
> 
> 在普通模型中，加密者进行所有计算，我们得到一个加密时间为\(\sqrt{T}\)的时间锁谜题。
> 
> 这两个构造都假设存在任何顺序函数f，并且循环小秘密学习与错误（LWE）问题的困难性。
> 
> 我们结果的核心是对T倍重复电路的简洁随机编码（SRE）的新构造，其中编码的复杂性为\(\sqrt{T}\)。这是SRE的首个构造，其中编码算法的整体复杂性在运行时间T中是次线性的，而且不基于iO。利用我们的SRE，我们直接获得了第一个具有次线性复杂性（在步数T中）的非交互式RAM委托方案，同样也没有使用iO。最后，我们还提出了一种新的SRE启发式构造，因此TLP，其完全有效的编码复杂性为\(\log (T)\)。我们的方案受iO技术的启发，但仔细回避了困扰基于格iO候选人的“零化”攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_13](https://doi.org/10.1007/978-3-031-68382-4_13)
## Cryptanalysis of Algebraic Verifiable Delay Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#cryptanalysis-of-algebraic-verifiable-delay-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#cryptanalysis-of-algebraic-verifiable-delay-functions)**
### 作者
* Alex Biryukov, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Ben Fisch, Yale University, New Haven, USA
* Gottfried Herold, Ethereum Foundation, Bonn, Germany
* Dmitry Khovratovich, Ethereum Foundation, Luxembourg City, Luxembourg
* Gaëtan Leurent, INRIA, Paris, France
* María Naya-Plasencia, INRIA, Paris, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### 摘要
> 可验证延迟函数（VDF）是一类旨在确保最小计算时间的加密原语，即使对于具有大规模并行计算能力的对手也是如此。它们在区块链协议中很有用，基于大有限域中的指数运算提出了几个实际的候选方案：Sloth++、Veedo、MinRoot。这些构造的基本假设是计算幂\(x^e\)至少需要\(\log _2 e\)个顺序乘法。
> 
> 在这项工作中，我们分析了这些代数VDF候选者的安全性。特别地，我们表明可以通过并行计算来减少指数运算的延迟，打破了先前的假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_14](https://doi.org/10.1007/978-3-031-68382-4_14)
## On the Practical CPAD Security of "exact" and Threshold FHE Schemes and Libraries.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#on-the-practical-cpad-security-of-exact-and-threshold-fhe-schemes-and-libraries) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#on-the-practical-cpad-security-of-exact-and-threshold-fhe-schemes-and-libraries)**
### 作者
* Marina Checri, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
* Renaud Sirdey, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
* Aymen Boudguiga, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
* Jean-Paul Bultel, Université Paris-Saclay, CEA, List, 91120, Palaiseau, France
### 摘要
> 在他们的Eurocrypt'21重要论文中，李和Micciancio提出了针对CKKS近似FHE方案的被动攻击，并引入了“CPA ^ D”安全性概念。目前的现状是这类攻击不适用于“精确”FHE。本文通过展示对线性同态Regev加密系统的“CPA ^ D”密钥恢复攻击，挑战了这种现状，这种攻击很容易推广到其他xHE方案（如BFV，BGV和TFHE），表明这些加密系统在基本形式下不是“CPA ^ D”安全的。我们还展示了现有的BFV，BGV和CKKS的门限变体特别容易受到“CPA ^ D”攻击者的攻击，并且如果部分解密后没有适当的模糊噪声添加，将不安全。最后，我们成功地对多个主流FHE库实现了我们的攻击，并讨论了一些自然的对策以及它们在FHE实践、安全性和效率方面的后果。这种攻击本身相当实用，通常只需要在普通笔记本电脑上不到一小时的时间，需要几千个密文以及最多约一百万次的评估/解密才能进行完整的密钥恢复。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_1](https://doi.org/10.1007/978-3-031-68382-4_1)
## Lossy Cryptography from Code-Based Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#lossy-cryptography-from-code-based-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#lossy-cryptography-from-code-based-assumptions)**
### 作者
* Quang Dao, Carnegie Mellon University, Pittsburgh, USA
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 在过去的几十年里，我们看到了从各种假设构建的具有丢失或同态性质的先进加密基元大量增多，例如二次剩余、决策性Diffie-Hellman和误差学习。这些基元暗示了复杂性类\(\mathcal {SZK}\)（统计零知识）中的难题；因此，它们只能基于在\(\mathcal {BPP}^{\mathcal {SZK}}\)中被打破的假设。这对从基于代码的假设构建先进密码学提出了障碍，如带噪声的学习奇偶校验（LPN），因为已知LPN仅在极低噪声率\(\frac{\log ^2 n}{n}\)下处于\(\mathcal {BPP}^{\mathcal {SZK}}\)中，而在准多项式时间内被破解。
> 
> 在这项工作中，我们提出了一种新的基于代码的假设：密集-稀疏LPN，属于复杂性类\(\mathcal {BPP}^{\mathcal {SZK}}\)，并推测对抗次指数时间对手是安全的。我们的假设是LPN的一种变体，受麦克利斯密码系统和平均情况复杂性中的随机\(k\text{- }\)XOR启发。大致地，该假设表明对于从伯努利分布中抽取的随机（密集）矩阵\(\textbf{T}\)，随机稀疏矩阵\(\textbf{M}\)和稀疏噪声向量\(\textbf{e}\)。
> 
> 我们利用我们的假设来构建丢失陷门函数（Peikert-Waters STOC 08）。这为原始论文中基于格的构造提供了第一个后量子替代方案。作为一种基本的加密工具，丢失陷门函数已知可实现广泛范围的既丢失又非丢失的密码基元。我们的构造因此以通用方式意味着这些基元。特别是，我们实现了具有合理次指数安全性的防碰撞哈希函数，相比仅具有准多项式安全性的噪声率为\(\frac{\log ^2 n}{n}\)的LPN之前构造得到了改进。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_2](https://doi.org/10.1007/978-3-031-68382-4_2)
## Exploring the Advantages and Challenges of Fermat NTT in FHE Acceleration.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#exploring-the-advantages-and-challenges-of-fermat-ntt-in-fhe-acceleration) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#exploring-the-advantages-and-challenges-of-fermat-ntt-in-fhe-acceleration)**
### 作者
* Andrey Kim, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Maxim Deryabin, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Sunmin Kwon, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Hyung Chul Kang, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Ahmet Can Mert, Graz University of Technology, Graz, Austria
* Anisha Mukherjee, Graz University of Technology, Graz, Austria
* Aikata Aikata, Graz University of Technology, Graz, Austria
* Sujoy Sinha Roy, Graz University of Technology, Graz, Austria
### 摘要
> 在这篇论文中，我们意识到在同态加密中快速和资源高效的多项式乘法的重要性，因此设计了一种无乘法器的数论变换，使用费马数作为辅助模。为了使这个算法能够与多项式的度可伸缩，我们应用了单变量到多变量多项式环的转换。我们使用这些算法技术，为全同态加密开发了一个加速器架构，用于高效的多变量多项式乘法。在实际同态加密应用基准测试中，硬件加速器与软件实现相比实现了1200倍的加速。最后，我们通过讨论拟议的多项式乘法方法的优势和局限性来总结本文。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_3](https://doi.org/10.1007/978-3-031-68382-4_3)
## Laconic Function Evaluation and ABE for RAMs from (Ring-)LWE.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#laconic-function-evaluation-and-abe-for-rams-from-ring-lwe) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#laconic-function-evaluation-and-abe-for-rams-from-ring-lwe)**
### 作者
* Fangqi Dong, IIIS, Tsinghua University, Beijing, China
* Zihan Hao, IIIS, Tsinghua University, Beijing, China
* Ethan Mook, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Hoeteck Wee, ENS, Paris, France
* Hoeteck Wee, NTT Research, Sunnyvale, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
### 摘要
> 简要功能评估（LFE）允许我们将电路f压缩成一个简短的摘要。任何人都可以使用此摘要作为公钥以有效加密一些输入x。从解密所得的密文中解密出输出f（x），同时隐藏x的其他所有内容。在这项工作中，我们考虑了随机访问机器（RAM-LFE）的LFE，其中，我们有一个RAM程序fDB，该程序可能包含一些大型硬编码数据DB，而不是电路f。从密文中恢复fDB（x）的解密运行时应与RAM模型中的fDB（x）的普通评估大致相同，这可以在DB的大小为次线性的情况下进行。先前的作品构造了LWE下的电路LFE，以及在不可区分性混淆（iO）和Ring-LWE下的RAM-LFE。在这项工作中，我们仅从Ring-LWE和标准循环安全假设中构建了具有基本最优加密和解密运行时的RAM-LFE，而无需iO。RAM-LFE直接产生RAM的1键简明功能加密和可重用的garbling，并具有类似参数的RAM。如果我们只需要用于RAM的基于属性的LFE（RAM-AB-LFE），则可以用上述方式替换Ring-LWE。另外，如果我们仅需要分层方案，其中加密/解密效率可以随着RAM计算深度扩展，则可以不需要循环安全性。最后，我们还从LWE中获得了用于RAM的分层多密钥属性加密（RAM-ABE）。）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_4](https://doi.org/10.1007/978-3-031-68382-4_4)
## Reducing the CRS Size in Registered ABE Systems.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#reducing-the-crs-size-in-registered-abe-systems) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#reducing-the-crs-size-in-registered-abe-systems)**
### 作者
* Rachit Garg, University of Texas at Austin, Austin, TX, USA
* George Lu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* David J. Wu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### 摘要
> 属性基加密（ABE）是公钥加密的一种泛化，它实现了对加密数据的细粒度访问控制。在（密文策略）ABE中，中央受信任的机构向用户发布属性x的解密密钥。反过来，密文与解密策略\（\ ensuremath {\ mathcal {P}} \）相关联。只要\（\ ensuremath {\ mathcal {P}}（x）= 1 \），解密就成功并恢复了加密消息。最近，Hohenberger，Lu，Waters和Wu（Eurocrypt 2023）引入了注册ABE的概念，这是一种没有受信任的中央机构的ABE方案。相反，用户生成自己的公共/秘密密钥（就像公钥加密一样），然后向密钥管理员注册其密钥（和属性）。密钥管理员是一个透明且不受信任的实体。
> 
> 目前，基于配对的最佳注册ABE方案支持单调布尔公式和先验有界数量的用户L。现有方案的一个主要限制是它们需要大小为\（L^2 \cdot |\ensuremath {\ mathcal {U}}| \）的（结构化的）公共参考字符串（CRS），其中\（|\ensuremath {\ mathcal {U}}| \）是属性宇宙的大小。换句话说，CRS的大小与用户数量成二次比例，并与属性宇宙的大小成乘积比例。这样的大型CRS使得这些方案在实践中昂贵且仅限于少量用户和小的属性宇宙。
> 
> 在这项工作中，我们提出了两种方式来减小基于配对的注册ABE方案中CRS的大小。首先，我们介绍了一种基于无进展集的组合技术，它实现了相同类别的策略的注册ABE，但CRS的大小是与用户数量次二次的。从渐进角度看，我们获得了一个CRS大小几乎与用户数量L线性相关的方案（即\（L^{1 + o（1）}\)）。如果我们以更具体的效率导向为重点，我们可以实例化我们的框架，获得一个CRS大小为\（L^{\log _2 3} \approx L^{1.6}\)的结构。例如，在100,000个用户的方案中，我们的方法将CRS减少了超过115倍（而且在加密/解密时间中没有产生任何开销）。我们减小CRS大小的第二种方法是在注册ABE方案的安全性论证中依靠基于分区的论证。先前的方法采用了双系统方法。利用基于分区的论证得到了一个注册ABE方案，其中CRS的大小与属性宇宙的大小无关。代价是所得方案满足较弱的静态安全性。我们减小CRS大小的技术可以结合使用，综合来看，我们获得了一个基于配对的注册ABE方案，它支持单调布尔公式，CRS的大小为\（L^{1 + o（1）}\)。值得注意的是，这是第一个基于配对的注册ABE方案，它在设置时间内不需要对属性宇宙的大小施加约束。
> 
> 作为一个额外的应用，我们还展示了如何应用我们基于无进展集的技术来进行Waters和Wu（Crypto 2022）的\（\ ensuremath {\ textsf {NP}} \）方案的批量论证（BARG），以获得一个几乎线性CRS的方案，而无需依赖非黑匣子引导技术。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_5](https://doi.org/10.1007/978-3-031-68382-4_5)
## Circuit ABE with sfpoly( depth,λ )-Sized Ciphertexts and Keys from Lattices.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#circuit-abe-with-sfpoly-depth-sized-ciphertexts-and-keys-from-lattices) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#circuit-abe-with-sfpoly-depth-sized-ciphertexts-and-keys-from-lattices)**
### 作者
* Hoeteck Wee, NTT Research, Sunnyvale, CA, USA
* Hoeteck Wee, ENS, Paris, France
### 摘要
> 我们提出了基于格的属性基加密（ABE）和简洁功能评估（LFE）方案，用于具有次线性密文开销的电路。对于深度为 d 的电路，我们得到：
> 
> 一个具有 O(1) 的密文和秘钥大小的 ABE；
> 
> 一个具有 \(\ell + O(1)\) 的密文大小和 O(1) 的摘要大小的 LFE；
> 
> 一个具有公钥和密文大小 \(O(\ell ^{2/3})\) 以及秘钥大小 O(1) 的 ABE，
> 
> 其中 \(O(\cdot )\) 隐藏着 \(\textsf{poly}(d,\lambda )\) 因子。前两个结果实现了几乎最优的密文和秘钥/摘要大小，直到 \(\textsf{poly}(d)\) 的依赖。我们方案的安全性依赖于 \(\ell \) -简明的 LWE，这是一个可证伪的假设，可以由回避式 LWE 推导出。我们结果的核心是一种压缩 LWE 样本 \(\textbf{s}(\textbf{A}-\textbf{x}\otimes \textbf{G})\) 和矩阵 \(\textbf{A}\) 的新技术。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_6](https://doi.org/10.1007/978-3-031-68382-4_6)
## A Systematic Study of Sparse LWE.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#a-systematic-study-of-sparse-lwe) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#a-systematic-study-of-sparse-lwe)**
### 作者
* Aayush Jain, Carnegie Mellon University, Pittsburgh, PA, USA
* Huijia Lin, Carnegie Mellon University, Pittsburgh, PA, USA
* Sagnik Saha, Carnegie Mellon University, Pittsburgh, PA, USA
* Aayush Jain, University of Washington, Seattle, WA, USA
* Huijia Lin, University of Washington, Seattle, WA, USA
* Sagnik Saha, University of Washington, Seattle, WA, USA
### 摘要
> 在这项工作中，我们介绍了稀疏LWE假设，这个假设既受到Learning with Errors（Regev JACM 10）的启发，又受到Sparse Learning Parity with Noise（Alekhnovich FOCS 02）的启发。和LWE一样，这个假设假设\((\textbf{A}, \textbf{s}\textbf{A}+\textbf{e} \mod p)\)与一个随机的\(\textbf{u}\)不可区分，其中秘密\(\textbf{s}\)和误差向量\(\textbf{e}\)的生成方式与LWE相同，但是在稀疏LPN中，系数矩阵\(\textbf{A}\)从\(\ensuremath {\mathbb {Z}}^{n\times m}_{p}\)中随机选择，以便每一列的汉明重量恰好为某个小的常数k。我们研究了k为常数或者对数级别的情况。提出这个假设的主要动机是效率。与LWE相比，在效率方面，样本可以以大约O(n/k)的因子改进计算和存储。我们的结果可以总结为：
> 
> 基础：我们展示了稀疏LWE样本的几个属性，包括：1）LWE/LPN的困难问题与维度k意味着稀疏LWE/LPN的稀疏度k和任意维度\(n \ge k\)的困难问题。2）当样本数量\(m=\varOmega (n \log p)\)时，由随机稀疏矩阵的行组成的格子的最短向量长度很大，接近于具有相同维数的随机密矩阵的最短向量长度（多一个小常数因子）。3）具有小多项式范数的陷门存在于具有维度\(n \times m = O(n \log p)\)的随机稀疏矩阵中。4）当维度为\(n \times m = \ensuremath {\widetilde{\mathcal {O}}}(n^2)\)时，存在有效的算法用于采样这样的矩阵和陷门。
> 
> 密码分析：我们研究了已用于打破LWE和稀疏LPN的一系列算法。尽管许多适用于LWE的攻击在稀疏情况下不能利用稀疏性，但我们考虑自然的扩展以利用稀疏性。我们提出了一个模型来捕获所有这些攻击。利用这个模型，我们建议启发式方法来确定具体参数。我们的初始密码分析表明，具有适度的k和略大于LWE的维度的具体稀疏LWE将具有与具有类似参数的LWE相似的安全水平。
> 
> 应用：我们展示了稀疏LWE的困难性意味着用于低次计算的非常高效的同态加密方案。我们获得了第一个具有略微超常数甚至常数开销的秘密密钥线性同态加密（LHE）方案，这进一步应用于私人信息检索、私人集合交集等。我们还获得了具有略超常数甚至常数开销的任意常数次多项式的秘密密钥同态加密。
> 
> 我们强调我们的结果是初步的。但是，我们的结果为进一步研究稀疏LWE提供了有力的证据。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_7](https://doi.org/10.1007/978-3-031-68382-4_7)
## How to Construct Quantum FHE, Generically.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#how-to-construct-quantum-fhe-generically) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#how-to-construct-quantum-fhe-generically)**
### 作者
* Aparna Gupte, MIT CSAIL, Cambridge, USA
* Vinod Vaikuntanathan, MIT CSAIL, Cambridge, USA
### 摘要
> 我们从具有\(\textsf{NC}^{1}\)算法解密的任何（紧凑的）经典全同态加密方案以及双模陷门函数族开始构建（紧凑的）量子全同态加密（QFHE）方案。与之前利用类似底层原语的构造方式，如Mahadev（FOCS 2018）和Brakerski（CRYPTO 2018）等相比，我们的构造方式提供了从不同假设实例化的途径。我们的构造使用Dulek、Schaffner和Speelman（CRYPTO 2016）的技术，并展示如何使用双模陷门函数使其QFHE方案的客户端成为经典的。作为额外的贡献，我们展示了一种从群作用中获得双模陷门函数的新实例化方法。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_8](https://doi.org/10.1007/978-3-031-68382-4_8)
## A Modular Approach to Registered ABE for Unbounded Predicates.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#a-modular-approach-to-registered-abe-for-unbounded-predicates) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#a-modular-approach-to-registered-abe-for-unbounded-predicates)**
### 作者
* Nuttapong Attrapadung, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Junichi Tomida, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 注册属性基加密 (Reg-ABE)，由Hohenberger等人（Eurocrypt’23）提出，是属性基加密（ABE）的一个关键扩展，旨在缓解密钥托管问题。尽管迄今为止已经提出了几种具有密码学黑盒使用的Reg-ABE方案，但在可实现谓词类别之间仍存在显着差距，介于普通ABE和Reg-ABE之间。为了缩小这一差距，我们提出了一个用于构建更广泛谓词类别的Reg-ABE方案的模块化框架。我们的框架是Attrapadung（Eurocrypt’19）引入的ABE的谓词变换框架的Reg-ABE模拟，并后来由Attrapadung和Tomida（Asiacrypt’20）在标准MDDH假设下进行了改进。作为直接应用，我们的框架意味着在标准MDDH假设下有以下新的Reg-ABE方案：
> 
> 第一个非单调跨度程序的Reg-ABE方案，具有传统完全无限制属性。
> 
> 第一个普通非单调跨度程序的Reg-ABE方案（同时也具有完全无限制属性），如Attrapadung和Tomida（Asiacrypt’20）在普通ABE情况下定义的那样。
> 
> 这里，“完全无限制”一词表示对用户属性集和与密文相关联的策略没有任何限制。
> 
> 从技术角度来看，我们首先实质性修改了最初由Attrapadung（Eurocrypt’14）为普通ABE设计的配对编码方案（PES），使其与Reg-ABE兼容。随后，我们通过一系列谓词转换，可以构建复杂谓词，特别是具有“无限制”特征的谓词，从简单的谓词开始。最后，我们定义了构建Reg-ABE方案所需的PES新属性，并证明了这些属性通过转换得以保留。这立即意味着我们可以获得通过谓词转换派生的任何谓词的Reg-ABE方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_9](https://doi.org/10.1007/978-3-031-68382-4_9)
## Fully-Succinct Multi-key Homomorphic Signatures from Standard Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#fully-succinct-multi-key-homomorphic-signatures-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#fully-succinct-multi-key-homomorphic-signatures-from-standard-assumptions)**
### 作者
* Gaspard Anthoine, IMDEA Software Institute, Madrid, Spain
* David Balbás, IMDEA Software Institute, Madrid, Spain
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Gaspard Anthoine, Universidad Politécnica de Madrid, Madrid, Spain
* David Balbás, Universidad Politécnica de Madrid, Madrid, Spain
### 摘要
> 多密钥同态签名（MKHS）允许在由不同用户签名的数据上评估函数，同时生成简洁且可公开验证的结果正确性证书。现有MKHS构造都实现了一种较弱的简洁性水平，其中签名在总输入数量方面简洁，但在涉及计算的用户数量方面线性增长。唯一的例外是一种基于SNARK的构造，它依赖于签名神谕存在时知识真实性的强概念，这不仅需要不可伪造的假设，还遇到了一些不可能结果。
> 
> 在本研究中，我们提出了第一种完全简洁（也与用户数量相关）且在标准可伪造假设下实现自适应安全的MKHS构造。我们的结果通过批量NP证据（BARGs）和功能承诺（FC）的新颖组合实现，并基于配对或格假设为深度无界电路提供多样化MKHS实例。此外，我们的方案支持预处理的高效验证，并可以轻松扩展以实现多跳评估和上下文隐藏。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_10](https://doi.org/10.1007/978-3-031-68382-4_10)
## Attribute Based Encryption for Turing Machines from Lattices.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#attribute-based-encryption-for-turing-machines-from-lattices) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#attribute-based-encryption-for-turing-machines-from-lattices)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Simran Kumari, IIT Madras, Chennai, India
* Shota Yamada, AIST Tokyo, Koto, Japan
### 摘要
> 本文提出了第一个支持来自格假设的图灵机的无界串通的属性基加密（ABE）方案。更详细地说，加密器将属性x与机器运行时间的上界t以及消息m编码到密文中，密钥生成器将图灵机M嵌入到密钥中，解密仅在M(x)=1时返回m。至关重要的是，输入x和机器M的大小可以是无限的，时间界t可以根据每个输入动态选择，并且解密在输入特定时间内运行。
> 
> 先前已知的用于统一计算的最佳ABE仅支持非确定对数空间图灵机（NL）（来自配对的Lin和Luo，Eurocrypt 2020）。在后量子时代，最先进的技术支持对称密钥设置下的有限状态自动机（Agrawal、Maitra和Yamada，Crypto 2019）。
> 
> 更详细地说，我们的结果是：
> 
> 1.我们从LWE、evasive LWE（Wee，Eurocrypt 2022和Tsabary，Crypto 2022）和Tensor LWE（Wee，Eurocrypt 2022）的假设中构建了第一个NL的ABE。这产生了第一个（推测的）后量子的NL ABE。
> 
> 2.依赖于LWE、evasive LWE以及一个名为circular tensor LWE的新假设，我们构建了所有图灵机的ABE。在高层面上，循环张量LWE假设将循环性纳入到张量LWE（Wee，Eurocrypt 2022）的假设中。
> 
> 为了支持我们针对图灵机的ABE，我们还从同样的假设中获得了第一个无界深度和大小的电路的CP-ABE——这可能是独立感兴趣的。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_11](https://doi.org/10.1007/978-3-031-68382-4_11)
## Plaintext-Ciphertext Matrix Multiplication and FHE Bootstrapping: Fast and Fused.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#plaintext-ciphertext-matrix-multiplication-and-fhe-bootstrapping-fast-and-fused) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#plaintext-ciphertext-matrix-multiplication-and-fhe-bootstrapping-fast-and-fused)**
### 作者
* Youngjin Bae, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, Seoul National University, Seoul, Republic of Korea
* Jai Hyun Park, Seoul National University, Seoul, Republic of Korea
* Guillaume Hanrot, CryptoLab Inc., Lyon, France
* Damien Stehlé, CryptoLab Inc., Lyon, France
### 摘要
> 利用同态乘法将明文矩阵与密文矩阵（PC-MM）相乘是私人评估变压器的核心任务，通常用于大型语言模型。我们提供了基于RLWE的几种PC-MM算法，这些算法由明文矩阵（PP-MM）的乘法和相对廉价的预处理和后处理步骤组成：与RLWE环度相比小和大尺寸，以及有无预先计算。对于具有预先计算的算法，我们展示了如何使用相同尺寸的单精度浮点PP-MM执行PC-MM。这对于实际用途特别有意义，因为可以使用高性能BLAS库实现浮点PP-MM。
> 
> 这些算法依赖于RLWE的多秘密变体，可以更紧凑地表示多个密文。我们给出了从常规共享秘密RLWE密文转换为多个秘密密文的算法，并解释了这个格式与同态加法、明文-密文乘法和密钥切换的兼容性。这反过来又使我们可以加速CKKS启动时的槽到系数和系数到槽步骤，当一次启动多个密文时。结合批量启动和高效的PC-MM结果，形成了MaMBo(Matrix Multiplication Bootstrapping)，这是一种可以在有限开销下执行PC-MM的启动算法。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_12](https://doi.org/10.1007/978-3-031-68382-4_12)
## Time-Lock Puzzles from Lattices.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#time-lock-puzzles-from-lattices) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#time-lock-puzzles-from-lattices)**
### 作者
* Shweta Agrawalr, IIT Madras, Chennai, India
* Giulio Malavolta, Bocconi University, Milan, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Tianwei Zhang, Max Planck Institute for Security and Privacy, Bochum, Germany
* Tianwei Zhang, Ruhr University Bochum, Bochum, Germany
### 摘要
> 时间锁谜题（TLP）是一种加密工具，允许将消息加密到未来的特定时间T内。目前,我们只有两个能够证明安全性的构造：一个基于重复平方假设，另一个基于不可区分混淆（iO）。将TLP基于其他假设的问题一直存在，并且由于已知的构造被量子算法攻破，进一步激励了这一问题。
> 
> 在这项工作中，我们提出了一种基于格的新方法来构建时间锁谜题，因此具有可信的后量子安全性。我们得到以下主要结果：
> 
> 在预处理模型中，允许一次性公共硬币预处理，我们得到一个加密时间为\(\log (T)\)的时间锁谜题。
> 
> 在普通模型中，加密者进行所有计算，我们得到一个加密时间为\(\sqrt{T}\)的时间锁谜题。
> 
> 这两个构造都假设存在任何顺序函数f，并且循环小秘密学习与错误（LWE）问题的困难性。
> 
> 我们结果的核心是对T倍重复电路的简洁随机编码（SRE）的新构造，其中编码的复杂性为\(\sqrt{T}\)。这是SRE的首个构造，其中编码算法的整体复杂性在运行时间T中是次线性的，而且不基于iO。利用我们的SRE，我们直接获得了第一个具有次线性复杂性（在步数T中）的非交互式RAM委托方案，同样也没有使用iO。最后，我们还提出了一种新的SRE启发式构造，因此TLP，其完全有效的编码复杂性为\(\log (T)\)。我们的方案受iO技术的启发，但仔细回避了困扰基于格iO候选人的“零化”攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_13](https://doi.org/10.1007/978-3-031-68382-4_13)
## Cryptanalysis of Algebraic Verifiable Delay Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-3].md#cryptanalysis-of-algebraic-verifiable-delay-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-3].md#cryptanalysis-of-algebraic-verifiable-delay-functions)**
### 作者
* Alex Biryukov, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Ben Fisch, Yale University, New Haven, USA
* Gottfried Herold, Ethereum Foundation, Bonn, Germany
* Dmitry Khovratovich, Ethereum Foundation, Luxembourg City, Luxembourg
* Gaëtan Leurent, INRIA, Paris, France
* María Naya-Plasencia, INRIA, Paris, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### 摘要
> 可验证延迟函数（VDF）是一类旨在确保最小计算时间的加密原语，即使对于具有大规模并行计算能力的对手也是如此。它们在区块链协议中很有用，基于大有限域中的指数运算提出了几个实际的候选方案：Sloth++、Veedo、MinRoot。这些构造的基本假设是计算幂\(x^e\)至少需要\(\log _2 e\)个顺序乘法。
> 
> 在这项工作中，我们分析了这些代数VDF候选者的安全性。特别地，我们表明可以通过并行计算来减少指数运算的延迟，打破了先前的假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68382-4_14](https://doi.org/10.1007/978-3-031-68382-4_14)
