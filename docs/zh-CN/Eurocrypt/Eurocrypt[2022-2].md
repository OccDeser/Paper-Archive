# Eurocrypt[2022-2]
## A PCP Theorem for Interactive Proofs and Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#a-pcp-theorem-for-interactive-proofs-and-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#a-pcp-theorem-for-interactive-proofs-and-applications)**
### 作者
* Gal Arnon, Weizmann Institute, Rehovot, Israel
* Alessandro Chiesa, EPFL, Lausanne, Switzerland
* Eylon Yogev, Bar-Ilan University, Ramat Gan, Israel
### 摘要
> 这篇报道介绍了一个广义的交互语言PCP定理。研究人员表明，任何可以通过k（n）轮IP决定的语言都有一个k（n）轮public-coin IOP。 检验者只需从每个多项式长的证明信息中读取O(1)位和自己（随机的）信息发送给证明者的O(1)位即可做出决策。研究结果及其基本技术具有多种应用。我们获得了随机可满足性问题的新的近似难度结果，我们展示了先前仅适用于IP的IOP到IOP的转换，并且我们制定了新的PCPs概念（可解码指数PCPs），使我们能够在随机预言机模型中为非确定计算获得SNARK。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_3](https://doi.org/10.1007/978-3-031-07085-3_3)
## Single-Server Private Information Retrieval with Sublinear Amortized Time.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#single-server-private-information-retrieval-with-sublinear-amortized-time) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#single-server-private-information-retrieval-with-sublinear-amortized-time)**
### 作者
* Henry Corrigan-Gibbs, MIT, Cambridge, MA, USA
* Alexandra Henzinger, MIT, Cambridge, MA, USA
* Dmitry Kogan, Fordefi, Tel Aviv, Israel
### 摘要
> 我们在单服务器环境中构建了新的私人信息检索协议。我们的方案允许客户端从服务器私下获取数据库记录序列，同时服务器对每个查询的平均时间是数据库大小的次线性。具体来说，我们引入了第一个具有次线性摊销服务器时间、需要次线性附加存储，并允许客户端自适应地进行查询的单服务器私人信息检索方案。我们的协议仅依赖于标准的密码假设（决策Diffie-Hellman、二次余数性、学习错误等）。它们通过使客户端首先从服务器获取有关数据库内容的小“提示”来工作。生成此提示需要服务器时间与数据库大小线性相关。之后，客户端可以使用提示对服务器进行有限次数的自适应查询，服务器将以次线性时间回答，从而产生次线性摊销成本。最后，我们给出了低限证明，证明了我们最有效的方案在实现服务器在线时间和客户端存储之间的权衡方面是最佳的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_1](https://doi.org/10.1007/978-3-031-07085-3_1)
## Group Signatures and More from Isogenies and Lattices: Generic, Simple, and Efficient.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#group-signatures-and-more-from-isogenies-and-lattices-generic-simple-and-efficient) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#group-signatures-and-more-from-isogenies-and-lattices-generic-simple-and-efficient)**
### 作者
* Ward Beullens, imec-COSIC, KU Leuven, Leuven, Belgium
* Ward Beullens, IBM Research, Zurich, Switzerland
* Samuel Dobson, University of Auckland, Auckland, New Zealand
* Yi-Fu Lai, University of Auckland, Auckland, New Zealand
* Shuichi Katsumata, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Federico Pintore, Department of Mathematics, University of Bari, Bari, Italy
### 摘要
> 我们从同构和格点假设构建了一个高效的动态群签名（或更一般地，可追溯的环签名）。我们的群签名基于一个简单的通用构造，可以通过密码学的硬群操作（如CSIDH群操作或基于MLWE的群操作）来实例化。该签名的大小为\(O(\log N)\)，其中N是群中用户的数量。我们的想法基于Beullens、Katsumata和Pintore（Asiacrypt'20）最近的高效OR证明，我们在其中有效地添加了一个有效密文的证明，并进一步表明所得到的非交互式零知识证明系统可以在线提取。
> 
> 与先前已知的构造相比，我们的群签名在满足更理想的安全性质的同时具有更具吸引力的签名大小。基于同构的构造的签名大小比先前已知的后量子群签名小一个数量级（例如，64个成员的签名大小为6.6 KB）。相比之下，基于格的构造具有更大的签名大小（例如，64个成员的签名大小分别为126 KB或89 KB，取决于满足的安全性质）。然而，由于\(O(\cdot )\)的符号隐藏了一个非常小的常数因子，即使对于非常大的群大小（例如\(2^{20}\)），签名大小仍然很小。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_4](https://doi.org/10.1007/978-3-031-07085-3_4)
## Zero-Knowledge IOPs with Linear-Time Prover and Polylogarithmic-Time Verifier.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#zero-knowledge-iops-with-linear-time-prover-and-polylogarithmic-time-verifier) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#zero-knowledge-iops-with-linear-time-prover-and-polylogarithmic-time-verifier)**
### 作者
* Jonathan Bootle, IBM Research, Zurich, Switzerland
* Alessandro Chiesa, École polytechnique fédérale de Lausanne, Lausanne, Switzerland
* Alessandro Chiesa, University of California, Berkeley, Berkeley, USA
* Siqi Liu, University of California, Berkeley, Berkeley, USA
### 摘要
> 交互式Oracle证明（IOP）是概率可检验证明的多回合推广，在高效加密证明的构建中起着基础性作用。
> 
> 我们提出了一种IOP，同时实现了零知识性质、线性时间证明和多对数时间验证。我们构建了一个零知识IOP，对于任意大小为\(\varOmega (N)\)的域上的一个N门算术电路的可满足性，证明者使用O(N)个域操作，验证者使用\({\mathsf {polylog}}(N)\)个域操作（证明长度为O(N)，查询复杂度为\({\mathsf {polylog}}(N)\)）。在全息设置下，我们实现了对每个电路的多对数时间验证（验证者对电路的可满足性具有Oracle访问权限，该电路的编码是线性时间计算的）。
> 
> 我们的结果在高效零知识领域中取得了进展。通过已知的转换，我们获得了一个零知识论证系统，其中证明者运行在线性时间，验证者运行在多对数时间；该构建可能抗量子攻击，仅对轻量级密码学（抗碰撞哈希函数）进行黑箱使用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_10](https://doi.org/10.1007/978-3-031-07085-3_10)
## Adaptively Secure Computation for RAM Programs.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#adaptively-secure-computation-for-ram-programs) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#adaptively-secure-computation-for-ram-programs)**
### 作者
* Laasya Bangalore, Georgetown University, Washington, USA
* Muthuramakrishnan Venkitasubramaniam, Georgetown University, Washington, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
* Oxana Poburinnaya, Ligero, Inc., Rochester, USA
### 摘要
> 在这项工作中，我们研究了在存在最小假设的情况下，在对手最终可以自适应地腐败所有参与方的情况下的安全多方计算的通信复杂性。具体来说，我们对以RAM程序为基础模型的通信复杂性很感兴趣。在最小假设下，Canetti等人（STOC 2017）和Benhamouda等人（TCC 2018）的工作给出了一些协议，当计算表达为布尔电路时，其通信复杂性以电路大小的平方速度增长。在这项工作中，我们获得了第一个两轮两方计算协议，该协议针对可以自适应地腐败所有参与方的对手进行了安全性保证，其中通信复杂性与函数的RAM复杂度的平方成比例，多项对数因子的存在假设非承诺加密的存在。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_7](https://doi.org/10.1007/978-3-031-07085-3_7)
## Asymmetric PAKE with Low Computation and communication.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#asymmetric-pake-with-low-computation-and-communication) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#asymmetric-pake-with-low-computation-and-communication)**
### 作者
* Bruno Freitas Dos Santos, University of California, Irvine, USA
* Yanqi Gu, University of California, Irvine, USA
* Stanislaw Jarecki, University of California, Irvine, USA
* Hugo Krawczyk, Algorand Foundation, New York, USA
### 摘要
> 在Crypto’21中，Gu、Jarecki 和 Krawczyk [25] 展示了一个非对称密码认证密钥交换协议 (aPAKE)，其计算成本与（对称）密码认证密钥交换协议 (PAKE) 和普通（即未经认证）密钥交换协议 (KE) 匹配。然而，这种最小成本的aPAKE在轮次复杂度上并未与之前的aPAKE匹配，假设客户端发起，它需要4轮，而Bradley等人的aPAKE [13]只需要2轮。
> 
> 在本文中，我们展示了两种aPAKE协议（但并非如[13, 30]所示的强aPAKEs），这两种协议实现了最优的计算成本和最优的轮次复杂度。我们的协议可看作是Bellovin和Merritt [7]的加密密钥交换（EKE）编译器的变种，该编译器通过在密钥交换协议中使用密码加密消息来创建密码认证密钥交换。与Bellovin和Merritt用这种方法来构造PAKE（通过将密码加密应用到KE消息）不同，我们通过密码加密单方面认证密钥交换（ua-KE）的消息来构造aPAKE。我们提出了两种版本的这种编译器。第一个版本使用了带盐的密码散列，并且如果服务器发起，需要2轮。第二个版本使用无盐的密码散列，并采用单一同时流，因此同时匹配了PAKE和KE的最小计算成本和最小轮次复杂度。
> 
> 我们分析了我们的aPAKE协议在一组理想密码（IC）上的假设，并且我们分析了它们作为来自通过一次性密钥（otk-AKE）实现的可全局组合认证密钥交换的ua-KE的模块化构造。我们还展示了3DH和HMQV的单通道变种在ROM中可安全地实现otk-AKE。有趣的是，两个得到的具体aPAKE使用了与EKE变种完全相同的协议消息，而对称PAKE（EKE）和非对称PAKE（我们的协议）之

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_5](https://doi.org/10.1007/978-3-031-07085-3_5)
## Optimal Broadcast Encryption and CP-ABE from Evasive Lattice Assumptions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#optimal-broadcast-encryption-and-cp-abe-from-evasive-lattice-assumptions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#optimal-broadcast-encryption-and-cp-abe-from-evasive-lattice-assumptions)**
### 作者
* Hoeteck Wee, NTT Research and ENS, Paris, France
### 摘要
> 我们提出了一个新的简单候选广播加密方案，适用于参数大小\(\textsf{poly}(\log N)\)的N个用户。我们在一个非标准的LWE假设的变体下证明了我们方案的安全性，其中区分者还额外收到短的高斯预像并避免了零化攻击。这样就得到了第一个可能后量子安全的候选最优广播加密方案，并且它拥有一个简单假设的安全降低。作为一个辅助贡献，我们提出了一个候选的电路策略属性加密（CP-ABE）方案，适用于预先有界多项式深度的电路，参数大小与电路大小无关，并在额外的非标准假设下证明了安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_8](https://doi.org/10.1007/978-3-031-07085-3_8)
## Families of SNARK-Friendly 2-Chains of Elliptic Curves.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#families-of-snark-friendly-2-chains-of-elliptic-curves) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#families-of-snark-friendly-2-chains-of-elliptic-curves)**
### 作者
* Youssef El Housni, ConsenSys, gnark, Paris, France
* Youssef El Housni, LIX, CNRS, École Polytechnique, Institut Polytechnique de Paris, Palaiseau, France
* Youssef El Housni, Inria, Saclay, France
* Aurore Guillevic, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Aurore Guillevic, Aarhus University, Aarhus, Denmark
### 摘要
> 在CANS’20上，El Housni和Guillevic介绍了一种新的配对友好椭圆曲线2链，用于递归零知识简洁非交互知识证明（zk-SNARKs），它由前BLS12-377曲线（一个在377位素数域上的Barreto–Lynn–Scott曲线）和新的BW6-761曲线（一个在761位素数域上的Brezing–Weng曲线，嵌入度为6）组成。首先，我们将曲线构造、配对公式（\(e :\mathbb G_1 \times \mathbb G_2 \rightarrow \mathbb G_T\)）和群操作推广到以任何BLS12曲线为基础的BW6曲线上，形成了一族2链配对友好曲线。
> 
> 其次，我们研究了其他可能的基于BLS12和BLS24曲线的2链族。我们比较了BW6与具有更高嵌入度8和12的Cocks–Pinch曲线（CP8，CP12）在128位安全级别下的性能。我们导出了新CP曲线上高效的最优ate和最优Tate配对的公式。我们展示了对于BLS12和BLS24，与Cocks-Pinch曲线相比，BW6构造总是给出了最快的配对和曲线运算。最后，我们提出了适用于Groth16和基于KZG的通用SNARKs的曲线的简短列表，并提供了这些曲线的优化实现。基于gnark生态系统中Groth16和PlonK（基于KZG的SNARK）的实现，我们得出结论：BLS12-377/BW6-761对于前者进行了优化，而BLS24-315/BW6-672对于后者进行了优化。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_13](https://doi.org/10.1007/978-3-031-07085-3_13)
## SNARGs for P from Sub-exponential DDH and QR.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#snargs-for-p-from-sub-exponential-ddh-and-qr) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#snargs-for-p-from-sub-exponential-ddh-and-qr)**
### 作者
* James Hulett, University of Illinois, Urbana-Champaign, USA
* Ruta Jawale, University of Illinois, Urbana-Champaign, USA
* Dakshita Khurana, University of Illinois, Urbana-Champaign, USA
* Akshayaram Srinivasan, University of Illinois, Urbana-Champaign, USA
* James Hulett, Tata Institute of Fundamental Research, Bengaluru, India
* Ruta Jawale, Tata Institute of Fundamental Research, Bengaluru, India
* Dakshita Khurana, Tata Institute of Fundamental Research, Bengaluru, India
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Bengaluru, India
### 摘要
> 我们从标准的基于群的假设中获得了可公开验证的简洁非交互证明（SNARGs），用于任意确定性计算和有界空间的非确定性计算，而无需依赖配对运算。特别地，假设决策性Diffie-Hellman（DDH）和二次剩余（QR）假设都具有次指数难度，我们获得如下结果，其中n表示实例的长度：
> 
> 1. 对于任何可以在非确定性时间T和空间S内判断的语言，我们可以得到一个通信复杂性和验证器运行时间为\((n+S) \cdot T^{o(1)}\)的SNARG。
> 
> 2. 对于任何可以在确定性时间T内判断的语言，我们可以得到一个通信复杂性和验证器运行时间为\(n \cdot T^{o(1)}\)的SNARG。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_18](https://doi.org/10.1007/978-3-031-07085-3_18)
## One-Shot Fiat-Shamir-Based NIZK Arguments of Composite Residuosity and Logarithmic-Size Ring Signatures in the Standard Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#one-shot-fiat-shamir-based-nizk-arguments-of-composite-residuosity-and-logarithmic-size-ring-signatures-in-the-standard-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#one-shot-fiat-shamir-based-nizk-arguments-of-composite-residuosity-and-logarithmic-size-ring-signatures-in-the-standard-model)**
### 作者
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Khoa Nguyen, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, Australia
* Thomas Peters, FNRS and UCLouvain (ICTEAM), Ottignies-Louvain-la-Neuve, Belgium
* Moti Yung, Google and Columbia University, New York, USA
### 摘要
> Fiat-Shamir变换的标准模型安全性已经成为一个活跃的研究领域多年。在突破性的结果中，Canetti等人(STOC'19)和Peikert-Shiehian(Crypto'19)证明，在基于Learning-With-Errors (\(\mathsf {LWE}_{}\))假设的情况下，通过将相关难以处理（CI）哈希函数应用于所谓的陷门\(\varSigma \)-协议，可以提供完备性。为了与基于标准\(\mathsf {LWE}_{}\)假设的具有多项式逼近因子的CI哈希函数兼容，所有已知的这类协议都是通过对具有二进制挑战的基本协议进行并行重复获得的。在本文中，我们考虑与Paillier的复合剩余假设 (\(\mathsf {DCR}\)) 相关的语言，并在一次运行中提供首个陷门\(\varSigma \)-协议以提供完备性，使用指数级大的挑战空间。这种改进类似于Schnorr在随机预言模型中对原始Fiat-Shamir协议所实现的改进。利用相关难以处理哈希函数范例，我们进而获得模拟完备的NIZK论证，证明\(\mathbb {Z}_{N^2}^*\)中的一个元素是复合剩余，为标准模型中的高效应用敞开了大门。以具体示例为例，我们在标准模型中基于标准假设构建了对数级大小的环签名（假设存在共享参考字符串），并使得签名长度最短。我们证明了\(\mathsf {DCR}\)和\(\mathsf {LWE}_{}\)假设下的安全性，并保持签名大小与基于随机预言模型的方案相当。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_17](https://doi.org/10.1007/978-3-031-07085-3_17)
## Optimal Tightness for Chain-Based Unique Signatures.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#optimal-tightness-for-chain-based-unique-signatures) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#optimal-tightness-for-chain-based-unique-signatures)**
### 作者
* Fuchun Guo, Institute of Cybersecurity and Cryptology (iC²), School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, Australia
* Willy Susilo, Institute of Cybersecurity and Cryptology (iC²), School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, Australia
### 摘要
> 独特签名是每个消息都有一次且仅有一次唯一有效的数字签名。大多数独特签名的安全降低具有自然降低损失（在存在性不可伪造抗选择消息攻击，即EUF-CMA安全模型下，在非交互式困难假设下）。在Crypto 2017中，Guo等人提出了一种特殊的基于链式结构的独特签名方案，其中每个独特签名由n个按顺序计算的BLS签名组成，类似于区块链。在计算Diffie-Hellman假设下，它们的降低损失对于q个哈希查询为\(n\cdot q_H^{1/n}\)，当\(n=\log {q_H}\)时，它是对数紧密的。然而，目前尚不清楚是否存在比对数更好的降低损失的基于链式结构的独特签名。
> 
> 我们证明了Guo等人提出的基于链式结构的独特签名方案在每个独特签名由n个BLS签名组成时，必须具有\(q^{1/n}\)的降低损失，其中q为签名查询次数。我们使用元降低方法在任何非交互式困难假设下的EUF-CMA安全模型中证明了这个下界，并且该元降低方法也适用于随机预言模型。我们还给出了一种基于链式结构的独特签名方案的安全降低，其中降低损失为\(4\cdot q^{1/n}\)（在CDH假设下的EUF-CMA安全模型中）。这显著改善了先前的降低损失\(n\cdot q_H^{1/n}\)，后者最多是对数紧密的。我们降低思想的核心是一种专门为基于链式结构独特签名构造而设计的非均匀模拟。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_19](https://doi.org/10.1007/978-3-031-07085-3_19)
## Batch-OT with Optimal Rate.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#batch-ot-with-optimal-rate) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#batch-ot-with-optimal-rate)**
### 作者
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Pedro Branco, IT, IST - University of Lisbon, Lisbon, Portugal
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Sihang Pu, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 我们展示了在两个消息中可以执行n个1-out-of-2遗忘传输的可能性，其中接收者和发送者（各自）的通信复杂度为\(n(1+o(1))\)，对于足够大的n。请注意，这与信息论的下界相匹配。在本研究之前，只有使用了特定的加密技术（Rate-1 FHE，Brakerski等人，TCC 2019）才能实现这一目标。
> 
> 为了在接收者和发送者端都达到速率1，我们使用LPN假设，并且将噪声率略微控制在亚常数水平\(1/m^{\epsilon }\)（其中\(\epsilon >0\)），同时结合DDH、QR或LWE假设。在效率方面，我们的协议仅依赖于线性同态性质，而不像基于FHE的解决方案那样需要昂贵的“启动”操作。我们相信，在效率方面，我们与现有的批量遗忘传输协议相比具有优势，同时实现了更好的通信复杂度。在Oblivious Linear Evaluation (OLE)方面，我们也展示了类似的结果。
> 
> 对于基于DDH的解决方案，我们开发了一种可能具有独立兴趣的新技术。我们展示了如何以功能隐私的方式在大素数群\(\mathbb {Z}_p\)中“模拟”二元群\(\mathbb {Z}_2\)（或其他小阶群）。也就是说，我们将\(\mathbb {Z}_2\)操作映射为\(\mathbb {Z}_p\)操作，以确保后者的结果除了\(\mathbb {Z}_2\)的结果外，不泄露任何额外信息。我们的编码技术使用了离散高斯分布，据我们所知，在DDH的环境中此前还未实现过。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_6](https://doi.org/10.1007/978-3-031-07085-3_6)
## Fiat-Shamir Bulletproofs are Non-Malleable (in the Algebraic Group Model).
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#fiat-shamir-bulletproofs-are-non-malleable-in-the-algebraic-group-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#fiat-shamir-bulletproofs-are-non-malleable-in-the-algebraic-group-model)**
### 作者
* Chaya Ganesh, Indian Institute of Science, Bengaluru, India
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Mahak Pancholi, Aarhus University, Aarhus, Denmark
* Akira Takahashi, Aarhus University, Aarhus, Denmark
* Daniel Tschudi, Concordium, Zürich, Switzerland
### 摘要
> Bulletproofs（Bünz et al. IEEE S&P 2018）是一种受赞誉的零知识证明系统，能够提供简短高效的证明，并在多个实际系统中得以实现和应用。
> 
> 实际上，它们通常以非交互式版本来实现，使用了Fiat-Shamir变换，尽管这种设置下缺乏安全性的形式证明。
> 
> 在此之前，没有证据表明针对Fiat-Shamir Bulletproofs不存在可塑性攻击。可塑性攻击可能导致非常严重的漏洞，因为它允许敌对方伪造证明并重复使用或修改诚实方所提供的部分证明。
> 
> 在本文中，我们首次展示了Bulletproofs（或其他类似多轮证明系统且满足某种弱唯一响应性质）在代数群模型中实现了模拟提取性。
> 
> 这意味着Fiat-Shamir Bulletproofs是不可塑的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_14](https://doi.org/10.1007/978-3-031-07085-3_14)
## Embedding the UC Model into the IITM Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#embedding-the-uc-model-into-the-iitm-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#embedding-the-uc-model-into-the-iitm-model)**
### 作者
* Daniel Rausch, University of Stuttgart, Stuttgart, Germany
* Ralf Küsters, University of Stuttgart, Stuttgart, Germany
* Céline Chevalier, CRED, Paris-Panthéon-Assas University, Paris, France
### 摘要
> 通用可组合性是协议设计和分析的广泛应用概念。自Canetti最初提出UC模型以来，Pfitzmann和Waidner提出了其他不同的通用可组合性模型，包括IITM模型、GNUC、CC等等。此外，还有UC模型的扩展和限制，如JUC、GUC和SUC，这些模型来源于现有模型在表达能力、易用性或先前模型上的缺陷方面的不足。密码学家根据实际需求（例如，对联合状态和全局状态的支持）或者对特定模型的熟悉程度选择这些模型。虽然所有模型都遵循相同的基本思想，但其中存在着巨大的概念差异，这引发了一些基础性和实际性的问题：一个模型中证明的概念和结果如何与另一个模型中的相关概念和结果相关联？不同的模型和其中阐述的安全定义是否涵盖了同样类型的攻击？最重要的是，密码学家能否在一个模型中重复使用在另一个模型中证明过的结果，如果可以，该如何操作？
> 
> 本文的目标是启动一系列相关研究，以解决人们对这个问题的理解不足，巩固模型空间，并使密码学家能够重复使用其他模型中证明过的结果。作为一个起点，我们将着重研究Canetti突出的UC模型和由Küsters等人提出的IITM模型进行比较。后者是与UC模型进行比较的有趣候选对象，因为它已被用于分析各种不同的协议，并支持非常通用的协议类别，包括具有共享状态的协议、联合状态和全局状态的无缝处理等。我们的主要技术贡献是将UC模型嵌入到IITM模型中，从而证明了所有UC协议、安全性和组合结果都适用于IITM模型。因此，协议设计者可以充分利用IITM模型的特性，同时仍然能够使用在UC模型中证明过的所有结果。我们还展示了一般情况下无法将完整的IITM模型嵌入UC模型中的情况。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_9](https://doi.org/10.1007/978-3-031-07085-3_9)
## Short Pairing-Free Blind Signatures with Exponential Security.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#short-pairing-free-blind-signatures-with-exponential-security) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#short-pairing-free-blind-signatures-with-exponential-security)**
### 作者
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### 摘要
> 本文提出了首个实用的无配对三步盲签名方案，它们具备以下特点：（1）具有并发安全性，（2）生成短签名（即三到四个群元素/标量），（3）在通用群模型（GGM）或代数群模型（AGM）下，在（普通或一次更多）离散对数假设下证明其安全性（额外还假设随机预言机）。我们还提出了其中一个方案的部分盲签版本。
> 
> 我们的方案不依赖于可在多项式时间内破解的ROS问题的困难度，也不依赖于只能进行亚指数攻击的mROS问题。具备这些特性的唯一之前的工作是Abe的签名方案（2002年欧洲密码学会议），后来Kastner等人（2022年公钥密码学会议）证明了它在AGM下的安全性，但与我们的方案相比，其生成的签名长度要长两倍。
> 
> 我们的安全性证明核心是一种称为加权分数ROS（WFROS）的新问题，我们证明了（无条件的）指数低界。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_27](https://doi.org/10.1007/978-3-031-07085-3_27)
## Non-Interactive Zero-Knowledge Proofs with Fine-Grained Security.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#non-interactive-zero-knowledge-proofs-with-fine-grained-security) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#non-interactive-zero-knowledge-proofs-with-fine-grained-security)**
### 作者
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
* Jiaxin Pan, Department of Mathematical Sciences, NTNU - Norwegian University of Science and Technology, Trondheim, Norway
### 摘要
> 我们构建了第一个在精细粒度环境下的非交互式零知识(NIZK)证明系统，其中对手的资源受到限制，而诚实用户的资源不超过对手。更具体地说，我们的环境是\(\mathsf {NC^1}\)-精细粒度环境，即所有参与方(包括对手和诚实参与者)都处于\(\mathsf {NC^1}\)中。
> 
> 我们的NIZK系统用于最坏情况下电路可满足性(SAT)的假设，\(\mathsf {NC^1}\subsetneq \mathsf{\oplus L/poly}\)。作为技术贡献，我们提出了两种在\(\mathsf {NC^1}\)-精细粒度环境中构建NIZK的方法。与经典的Fiat-Shamir转换截然不同，我们的两种方法都是从简单的\(\varSigma \)-协议开始，将其转化为无需随机预言机的电路SAT的NIZK。此外，我们的第二种方法首次提出了一种在精细粒度环境中的完全同态加密(FHE)方案，这在以前是未知的，作为一种构建块。与第一种方法相比，得到的NIZK仅支持具有恒定乘法深度的电路，而其证明大小与语句电路大小无关。
> 
> 通过扩展我们的方法，我们在统一参考字符串模型中得到了两个NIZK系统，并在明文模型中得到了两个非交互式归零(即，在平面模型中不可区分见证的非交互证明系统)。尽管之前由Ball、Dachman-Soled和Kulkarni (CRYPTO 2020)构造的系统要求证明者在多项式时间内运行，但我们的构造是第一个具有\(\mathsf {NC^1}\)证明者的构造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_11](https://doi.org/10.1007/978-3-031-07085-3_11)
## A Fast and Simple Partially Oblivious PRF, with Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#a-fast-and-simple-partially-oblivious-prf-with-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#a-fast-and-simple-partially-oblivious-prf-with-applications)**
### 作者
* Nirvan Tyagi, Cornell Tech, New York, USA
* Thomas Ristenpart, Cornell Tech, New York, USA
* Sofía Celi, Cloudflare, San Francisco, USA
* Nick Sullivan, Cloudflare, San Francisco, USA
* Christopher A. Wood, Cloudflare, San Francisco, USA
* Stefano Tessaro, University of Washington, Seattle, USA
### 摘要
> 我们构建了第一个不依赖于双线性配对的部分未知伪随机函数（POPRF）的构造。我们的构造可以看作是将Jarecki，Kiayias和Krawczyk的2HashDH OPRF与Dodis-Yampolskiy PRF的元素相结合。我们通过将其规约到一个新的one-more gap strong Diffie-Hellman反演假设，分析了我们的POPRF在随机oracle模型中的安全性。最重要的技术挑战是建立对新假设的信心，这需要新的证明技术，使我们能够展示其困难性是由代数群模型中的q-DL假设所暗示的。
> 
> 我们的新构造与当前的标准跟踪OPRF 2HashDH协议一样快速，同时在各种应用中提供了新的灵活性。我们展示了如何使用POPRF来防止针对隐私通行证的令牌囤积攻击，减少OPAQUE密码认证密钥交换协议中的密钥管理复杂性，并确保密码泄漏警报服务的更强安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_23](https://doi.org/10.1007/978-3-031-07085-3_23)
## On the Concrete Security of TLS 1.3 PSK Mode.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#on-the-concrete-security-of-tls-1-3-psk-mode) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#on-the-concrete-security-of-tls-1-3-psk-mode)**
### 作者
* Hannah Davis, University of California San Diego, La Jolla, CA, USA
* Denis Diemert, Bergische Universität Wuppertal, Wuppertal, Germany
* Tibor Jager, Bergische Universität Wuppertal, Wuppertal, Germany
* Felix Günther, ETH Zürich, Zürich, Switzerland
### 摘要
> TLS 1.3 的预共享密钥（PSK）握手模式允许以高性能、低延迟的方式恢复先前的连接，并广泛应用于网络和资源受限设备，例如物联网中的设备。为了充分发挥这些性能优势并使用理论上可行的参数，需要进行严格的安全证明。我们首次给出了 TLS 1.3 PSK 握手模式的严格安全证明。
> 
> 我们的主要技术贡献在于解决了先前 TLS 1.3 严格安全证明中的一个缺陷，即将整个密钥安排或其组件建模为独立的随机 oracle，以实现严格的证明技术。这些方法忽视了 TLS 1.3 密钥安排中存在的相互依赖关系，因为密钥安排的几个组件以及握手中通常使用相同的密码哈希函数。通过提出密钥安排的新抽象并仔细论证其差异可区分性，我们弥补了这一缺陷。有趣的是，我们观察到对于一个特定的配置，即只使用 SHA-384 哈希函数的 PSK 模式，由于各种哈希函数使用之间缺乏域分离，很难推理出差异可区分性。我们认为这对于协议设计（如未来的 TLS 版本）是一个有趣的见解。
> 
> 然而，对于所有其他配置，我们的证明显著增强了 TLS 1.3 PSK 模式的安全性，确认了标准化参数（先前的界限提供的保证效果不佳甚至无效），从而实现了理论上的可靠部署。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_30](https://doi.org/10.1007/978-3-031-07085-3_30)
## On the Multi-user Security of Short Schnorr Signatures with Preprocessing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#on-the-multi-user-security-of-short-schnorr-signatures-with-preprocessing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#on-the-multi-user-security-of-short-schnorr-signatures-with-preprocessing)**
### 作者
* Jeremiah Blocki, Purdue University, West Lafayette, IN, 47906, USA
* Seunghoon Lee, Purdue University, West Lafayette, IN, 47906, USA
### 摘要
> Schnorr签名方案是一种高效的数字签名方案，具有短签名长度，即对于k比特的安全性而言，签名长度为4k比特。Schnorr签名\(\sigma\)在一个大小为\(p\approx 2^{2k}\)的群上，由一个元组(s, e)组成，其中\(e \in \{0,1\}^{2k}\)是一个哈希输出，\(s\in \mathbb {Z}_p\)必须使用秘密密钥计算。虽然哈希输出e需要2k比特来编码，但Schnorr提出可能可以截断哈希值而不会对安全性产生不利影响。
> 
> 在本文中，我们证明了长度为3k比特的短Schnorr签名在(Shoup的)通用群模型和可编程随机预言模型中提供了k比特的多用户安全性。我们进一步分析了针对预处理攻击的键前缀短Schnorr签名的多用户安全性，表明可以获得长度为\(3k + \log S + \log N\)比特的安全签名。这里，N表示用户数量，S表示我们的预处理攻击者生成的提示大小，例如，如果\(S=2^{k/2}\)，那么对于最多\(N \le 2^{k/4}\)个用户的群，我们将获得3.75k比特的安全签名。
> 
> 我们的技术很容易推广到其他几种基于Fiat-Shamir的签名方案，为Chaum-Pedersen签名和Katz-Wang签名建立类似的结果。作为构建模块，我们还分析了通用群模型中的1-out-of-N离散对数问题，带有和不带有预处理的情况。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_21](https://doi.org/10.1007/978-3-031-07085-3_21)
## Hiding in Plain Sight: Memory-Tight Proofs via Randomness Programming.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#hiding-in-plain-sight-memory-tight-proofs-via-randomness-programming) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#hiding-in-plain-sight-memory-tight-proofs-via-randomness-programming)**
### 作者
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Riddhi Ghosal, University of California, Los Angeles, USA
* Joseph Jaeger, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 这篇论文延续了对内存紧凑缩减的研究（Auerbach等人，CRYPTO '17）。这些缩减仅在原始对手的基础上产生最小的内存成本，允许在适当的假设下（以对手的时间和内存使用表达）为内存受限的对手提供精确的安全性说明。尽管它的重要性，目前仅有少数技术能够实现内存紧凑性，而先前的工作中的不可能性结果表明，即使是基本的、教科书式的缩减也不能实现内存紧凑性。
> 
> 本文介绍了一种新的内存紧凑缩减类别，利用与对手的互动中的随机字符串隐藏状态信息，从而将内存成本转移到对手身上。
> 
> 我们通过多个示例展示了这一技术。我们为数字签名提供了内存紧凑的证明，允许在考虑到随机化消息分布或概率性RSA-FDH签名时进行多次伪造尝试。我们通过对底层加密方案进行内存紧凑缩减来证明Encrypt-then-PRF的认证加密方案的安全性。通过考虑特定方案或受限定义，我们避免了Auerbach等人（CRYPTO '17）和Ghoshal等人（CRYPTO '20）的通用不可能性结果。
> 
> 作为进一步的案例研究，我们考虑了对公钥加密的CCA安全性的教科书等效性，包括一个或多个加密查询。我们展示了该结果的两个质量上不同的内存紧凑版本，取决于考虑的CCA安全性概念。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_24](https://doi.org/10.1007/978-3-031-07085-3_24)
## CoCoA: Concurrent Continuous Group Key Agreement.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#cocoa-concurrent-continuous-group-key-agreement) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#cocoa-concurrent-continuous-group-key-agreement)**
### 作者
* Joël Alwen, AWS Wickr, New York, USA
* Benedikt Auerbach, ISTA, Klosterneuburg, Austria
* Miguel Cueto Noval, ISTA, Klosterneuburg, Austria
* Guillermo Pascual-Perez, ISTA, Klosterneuburg, Austria
* Krzyzstof Pietrzak, ISTA, Klosterneuburg, Austria
* Karen Klein, ETH Zurich, Zürich, Switzerland
* Michael Walter, Zama, Paris, France
### 摘要
> 像Signal这样的通信平台已被广泛应用，并在异步环境下提供了强大的安全性。构建具有类似安全保证并且可以高效扩展到大规模群组的协议是一个具有挑战性的问题。一个主要瓶颈是用户需要频繁进行密钥轮换以实现事后安全性。
> 
> 在目前的提议中，尤其是在IETF的Messaging Layer Security (MLS)协议草案中的TreeKEM中，对于群组大小为n的用户进行密钥轮换，它们必须每个人制作一条大小为\(\log (n)\)的消息，并通过（不受信任的）传递服务器向群组广播。
> 
> 在更大的群组中，使用户按顺序进行密钥轮换会占用太多带宽（或时间太长），因此已经提出了允许任意\(T \le n\)个用户同时进行密钥轮换的变体，仅需进行2次通信往返（例如通过MLS的“提出和承诺”）。不幸的是，2轮并发更新会造成损害或成本过高（或两者都有）；即它们要么导致未来操作更加昂贵（例如通过“擦除”或“污染”），或者它们本身就要求每个用户进行\(\varOmega (T)\)次通信[Bienstock等人，TCC'20]。
> 
> 在本文中，我们提出了CoCoA；一种新的方案，它允许进行T个并发更新而既不会造成损害也不会成本过高。也就是说，它们对未来的操作没有额外开销，但每个用户只需要\(\varOmega (\log ^2(n))\)次通信。为了绕过[Bienstock等人]的下界，CoCoA将完成所有更新所需的循环数从2增加到（最多）\(\log (n)\)；尽管通常情况下所需的循环数较少。
> 
> 我们协议的关键洞察是：在（非并发版本的）TreeKEM中，接收到T个并发更新请求的传递服务器将批准一个请求并拒绝其余的\(T-1\)个请求。相比之下，我们的服务器试图应用所有这些更新。如果在某一轮中有多个用户请求轮换同一个密钥，则服务器会任意选择一个获胜者。令人惊讶的是，我们证明无论服务器如何选择获胜者，在最多\(\log (n)\)个这样的更新轮之后，所有先前遭受损失的用户都将恢复。
> 
> 为了保持通信复杂性低，CoCoA是一种服务器辅助的CGKA（基于密码学的群组密钥协商）。也就是说，传递服务器不再盲目转发数据包，而是主动计算适合每个用户的个性化数据包。由于服务器是不可信的，这种变化要求我们开发新的机制来确保协议的强壮性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_28](https://doi.org/10.1007/978-3-031-07085-3_28)
## Stacking Sigmas: A Framework to Compose $\varSigma $-Protocols for Disjunctions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#stacking-sigmas-a-framework-to-compose-varsigma-protocols-for-disjunctions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#stacking-sigmas-a-framework-to-compose-varsigma-protocols-for-disjunctions)**
### 作者
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Matthew Green, Johns Hopkins University, Baltimore, USA
* Mathias Hall-Andersen, Aarhus University, Aarhus, Denmark
* Gabriel Kaptchuk, Boston University, Boston, USA
### 摘要
> 零知识（ZK）证明用于不相容陈述的研究已经引起了长期的关注。经典结果，如Cramer等人所述的[Crypto'94]和Abe等人所述的[AC'02]，设计了通用的编译器，将某些类别的ZK证明转化为不相容陈述的ZK证明。然而，这些结果中所产生的协议的通信复杂度最终与证明析取式中所有子句的复杂度成正比。最近，Heath等人利用加密电路的特殊属性构建了高效的不相容陈述的ZK证明，其中证明的大小仅与析取式中最长子句的长度成正比。然而，这些技术似乎无法推广到加密电路之外。
> 
> 在本研究中，我们致力于实现两全其美。我们设计了一个通用框架，将一大类未经修改的Σ-协议，每个协议对应一个陈述，编译成一个新的Σ-协议，用于证明这些陈述的析取式。无论是每个子句都使用相同的Σ-协议进行证明，还是不同子句使用不同的Σ-协议进行证明，我们的框架都可以使用。所得到的Σ-协议在具体效率上高效，并且通信复杂度与最长子句所需的通信成正比，附加项仅与子句数量的对数成正比。
> 
> 我们证明了我们的编译器可以应用于许多众所周知的Σ-协议，包括经典协议（例如Schnorr [JC'91]和Guillou-Quisquater [Crypto'88]）以及现代MPC-in-the-head协议，如Katz、Kolesnikov和Wang[CCS'18]和Ames等人的Ligero协议[CCS'17]的最新工作。最后，由于我们类别中的所有协议都可以在随机预言机模型中通过Fiat-Shamir转换实现非交互式，我们的结果提供了第一个泛化的非交互式零知识析取协议，其中通信仅取决于最大子句的大小。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_16](https://doi.org/10.1007/978-3-031-07085-3_16)
## Multi-Designated Receiver Signed Public Key Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#multi-designated-receiver-signed-public-key-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#multi-designated-receiver-signed-public-key-encryption)**
### 作者
* Ueli Maurer, Department of Computer Science, ETH Zürich, Zürich, Switzerland
* Guilherme Rito, Department of Computer Science, ETH Zürich, Zürich, Switzerland
* Christopher Portmann, Concordium, Zürich, Switzerland
### 摘要
> 本文介绍了一种新型的公钥加密方案，称为多指定接收者签名公钥加密（Multi-Designated Receiver Signed Public Key Encryption, MDRS-PKE）。该方案允许发送方选择一组指定的接收者，并对消息进行加密和签名，只有这些接收者才能读取和验证（保证机密性和真实性）。MDRS-PKE方案提供了几个额外的安全属性，可以实现一种基本上不被考虑过的新型通信。具体而言，它满足一致性——一个不诚实的发送方不能使不同的接收者接收到不同的消息；离线记录——一个不诚实的接收者无法说服第三方发送了什么消息（例如，通过出售他们的私钥），因为不诚实的接收者有伪造签名的能力；以及匿名性——不在指定接收者集合中的参与方无法确定发件人和指定接收者的身份。
> 
> 我们给出了一个从标准假设构建MDRS-PKE方案的方法。我们构建的核心是另一种独立引人注目的新型公钥加密方案，称为广播用公钥加密（Public Key Encryption for Broadcast, PKEBC），它提供了所有MDRS-PKE方案的安全保证，除了真实性。
> 
> 需要注意的是，MDRS-PKE方案提供的保证比带有身份隐私的多指定验证签名（Multi-Designated Verifier Signature, MDVS）方案更多。这特别意味着我们的MDRS-PKE构建从标准假设中获得了第一个具有身份隐私的MDVS方案。之前唯一的此类构建是基于一般电路的可验证功能加密（Damgård等人，TCC '20）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_22](https://doi.org/10.1007/978-3-031-07085-3_22)
## On Succinct Non-interactive Arguments in Relativized Worlds.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#on-succinct-non-interactive-arguments-in-relativized-worlds) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#on-succinct-non-interactive-arguments-in-relativized-worlds)**
### 作者
* Megan Chen, Boston University, Boston, MA, USA
* Alessandro Chiesa, EPFL, Lausanne, Switzerland
* Nicholas Spooner, University of Warwick, Coventry, UK
### 摘要
> 简洁的非交互式知识论证（SNARKs）是具有强效特性的密码学证明。SNARKs的应用通常涉及证明包括SNARK验证器的计算，这一技术称为递归组合。不幸的是，具有诸如透明（公开币）设置等理想特性的SNARKs仅在随机预言模型（ROM）中已知。在应用中，这个预言必须以启发式方式实例化并以非黑盒方式使用。
> 
> 在本文中，我们确定了一个自然的预言模型，即低次随机预言模型，其中存在相对于该预言的所有NP计算的透明SNARKs。简而言之，假设\(\mathcal {O}\)是随机预言的低次编码，并假设存在（标准模型下的）抗碰撞哈希函数，则存在相对于\(\mathcal {O}\)的SNARKs，适用于\(\mathsf {NP}^{\mathcal {O}}\)中的所有语言。这样的SNARK可以直接证明关于其自身验证器的计算。
> 
> 为了分析这个模型，我们引入了一个更一般的框架，即线性码随机预言模型（LCROM）。
> 
> 我们展示了如何在LCROM中获得对查询预言的计算的SNARKs，前提是存在预言查询的积累方案。然后，我们为低次随机预言的特殊情况构建了这样一个积累方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_12](https://doi.org/10.1007/978-3-031-07085-3_12)
## Property-Preserving Hash Functions for Hamming Distance from Standard Assumptions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#property-preserving-hash-functions-for-hamming-distance-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#property-preserving-hash-functions-for-hamming-distance-from-standard-assumptions)**
### 作者
* Nils Fleischhacker, Ruhr University Bochum, Bochum, Germany
* Kasper Green Larsen, Aarhus University, Aarhus, Denmark
* Mark Simkin, Ethereum Foundation, Aarhus, Denmark
### 摘要
> 属性保持哈希函数允许将长输入\(x_0\)和\(x_1\)压缩成短哈希\(h(x_0)\)和\(h(x_1)\)，以一种方式计算谓词\(P(x_0, x_1)\)，而无需访问原始数据，仅通过两个哈希值。如果在哈希值上进行谓词评估时，任何在哈希函数被选取后选择\(x_0\)和\(x_1\)的对手都无法找到输出错误结果的输入，则称此类哈希函数具有拟敌对鲁棒性。
> 
> 在这项工作中，我们构建了对于汉明距离谓词的鲁棒属性保持哈希函数，该函数区分与距离小于阈值t的输入相比，具有至少距离为t的输入。该构造的安全性基于标准格困难假设。
> 
> 我们的构造相比于Fleischhacker和Simkin（Eurocrypt 2021）之前最好已知的构造具有几个优点。我们的构造依赖于一个经过深入研究的格密码学问题的困难假设，而以前的工作则依赖于一个新引入的计算困难假设家族。在计算复杂度方面，我们的构造只需要每个输入位的少量模加操作，而Fleischhacker和Simkin的工作则需要每个位数多次指数运算，以及在大域上插值和评估高阶多项式。我们构造的另一个优点是，假设存在随机预言机，则哈希函数的描述可以被压缩成\(\lambda\)位。以前的工作中，输入位长度为\(\ell\)时，描述的长度为\(\mathcal{O}(\ell \lambda)\)位。
> 
> 我们对任何对汉明距离谓词的属性保持哈希函数的输出大小证明了一个下界。该下界表明我们的哈希值大小与最佳解并无多大差距。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_26](https://doi.org/10.1007/978-3-031-07085-3_26)
## Dynamic Collusion Bounded Functional Encryption from Identity-Based Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#dynamic-collusion-bounded-functional-encryption-from-identity-based-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#dynamic-collusion-bounded-functional-encryption-from-identity-based-encryption)**
### 作者
* Rachit Garg, UT Austin, Austin, USA
* George Lu, UT Austin, Austin, USA
* Brent Waters, UT Austin, Austin, USA
* Rishab Goyal, MIT, Cambridge, USA
* Brent Waters, NTT Research, Palo Alto, USA
### 摘要
> 功能加密是一种强大的加密概念，其中每个解密密钥与一个函数f相关联，解密可以恢复函数评估f(m)。非正式地说，安全性意味着拥有函数密钥\(\mathsf {sk}_{f_1}, \mathsf {sk}_{f_2}, \ldots \)（等等）的用户只能学习\(f_1(m), f_2(m), \ldots \)（等等），而不能获取有关消息的其他信息。只要敌手获得至多\(q = q(\lambda )\)个函数密钥，系统被称为q-bounded耐冲突。这样一种静态限定碰撞系统的一大缺点是，在设置时间必须声明碰撞限定值q，并且系统的整个生命周期中该值是固定的。
> 
> 我们开始研究动态限定抗碰撞功能加密系统，这种系统在选择碰撞限定值方面提供更大的灵活性，同时还能享受静态限定碰撞FE系统的好处（如量子抵抗力、模拟安全性和一般假设）。简言之，动态限定方案的优点可以总结如下：
> 
> 细粒度个性化选择。每个加密者可以通过权衡性能开销和碰撞弹性的数量来选择碰撞限定值。
> 
> 不断发展的加密策略。由于系统不再与单一的碰撞限定值相关联，因此可以根据系统的年龄、活跃用户数量等任意数量的演化因素动态调整所需的碰撞弹性。
> 
> 易于更新。调整碰撞限定值时，不需要更新系统参数。也就是说，同一密钥\(\mathsf {sk}_f\)可以用于解密碰撞限定值为\(q = 2\)和\(q = 2^\lambda \)的密文。
> 
> 我们基于基于身份的加密的一般假设构建了这样一个动态限定功能加密方案，适用于所有多项式大小的电路。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_25](https://doi.org/10.1007/978-3-031-07085-3_25)
## Anamorphic Encryption: Private Communication Against a Dictator.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#anamorphic-encryption-private-communication-against-a-dictator) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#anamorphic-encryption-private-communication-against-a-dictator)**
### 作者
* Giuseppe Persiano, Università di Salerno, Salerno, Italy
* Duong Hieu Phan, Telecom Paris, Institut Polytechnique de Paris, Paris, France
* Moti Yung, Google LLC, New York, NY, USA
* Moti Yung, Columbia University, New York City, USA
### 摘要
> 多年来，加密系统一直在普遍的设置下得到发展，这一设置假设接收者的密钥不受对手的泄露，发送的消息选择由发送者自由决定，并且也要保证不受对手的泄露。基于这些基本操作假设，现代密码学在过去的半个世纪左右取得了令人惊叹的成就：包括公钥密码学在内的新系统、美丽实用的模型（包括语义安全等安全定义）以及新的原语（如零知识证明）已经得到了发展。此外，这些基本成就已被转化为实际的工作系统，并涵盖了互联网上的许多日常人类活动。
> 
> 然而，近年来，许多政府对加密系统的密钥和消息进行自身访问的压力日益增大（以各种名称：托管加密、紧急访问、通信礼仪法案等等）。已经提出了许多非直接的反对此类政策的论据，比如“坏人可以利用其他加密系统”，因此所有其他密码系统都必须被宣布非法，或者“允许政府访问是一项不明智的政策，因为它创造了一个自然的系统安全弱点，可能会吸引其他人（冒充政府）。”然而，迄今为止，直接证明政府（在此称为“独裁者”）通过强制打破基本操作假设（禁止其他加密系统）所作出的上述努力实际上是一种徒劳的行为，仍然是一个基本的未解决问题。这是一个直接的技术问题，需要明确提出，但迄今为止尚未解决。
> 
> 在这项工作中，为了展示独裁者的要求是徒劳的，我们提出了“迷像加密”的概念。它表明，即使独裁者在任何东西被发送之前就获取到了系统中使用的密钥和消息，并且不允许使用其他系统，通过已建立的公钥加密系统，实体仍然可以以隐藏在严格的独裁者条件下的方式立即（无延迟）发送携带的安全消息！我们认为，这可能是对政府试图监管使用强加密系统的本质的重要直接技术论证，并希望能够在这个方向上刺激更多的研究工作。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_2](https://doi.org/10.1007/978-3-031-07085-3_2)
## On Building Fine-Grained One-Way Functions from Strong Average-Case Hardness.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#on-building-fine-grained-one-way-functions-from-strong-average-case-hardness) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#on-building-fine-grained-one-way-functions-from-strong-average-case-hardness)**
### 作者
* Chris Brzuska, Aalto University, Espoo, Finland
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
### 摘要
> 构建从平均情况困难度到单向函数的方法是一个长期以来尚未解决的难题。积极的结果将排除Pessiland (Impagliazzo '95)并确立一个极具吸引力的双赢局面：要么（对称）密码学存在无条件，要么所有的 \(\mathsf {NP}\) 问题都可以在平均情况下高效解决。受到这个看似非常困难的问题缺乏进展的启发，我们开始研究以下类型的弱但有意义的备选双赢结果：要么存在细粒度单向函数（FGOWF），要么可以在平均情况下获得所有 \(\mathsf {NP}\) 问题的非平凡加速。FGOWF只需要函数的运行时间与逆向运行时间之间有一个固定的多项式差距（而不是超多项式差距）。我们得到了三个主要结果：
> 
> 构造。我们证明，如果存在一个非常强的平均情况困难度形式（我们称之为块查找困难度）的 \(\mathsf {NP}\) 语言，则存在FGOWF。我们通过展示它对于一个随机语言成立的启发式支持，为这个非常强的平均情况困难度概念提供了支持。然后，我们研究了更弱（更自然）的平均情况困难度形式是否已足以获得FGOWF，并得到了两个否定结果：
> 
> 分离 I. 对于蕴含关系（\(\exists\) 指数级平均情况困难语言 \(\implies\) \(\exists\) FGOWF ），我们提供了一种强大的预言分离结果。
> 
> 分离 II. 对于更弱的备选双赢结果，我们提供了第二个强负结果。即，我们排除了一个黑盒证明来证明蕴含关系（\(\exists\) 指数级平均情况困难语言，其难度通过并行重复最优放大 \(\implies\) \(\exists\) FGOWF ）。这个分离形成了我们工作的核心技术贡献。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_20](https://doi.org/10.1007/978-3-031-07085-3_20)
## Gemini: Elastic SNARKs for Diverse Environments.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#gemini-elastic-snarks-for-diverse-environments) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#gemini-elastic-snarks-for-diverse-environments)**
### 作者
* Jonathan Bootle, IBM Research, Zurich, Switzerland
* Alessandro Chiesa, École polytechnique fédérale de Lausanne, Lausanne, Switzerland
* Alessandro Chiesa, University of California, Berkeley, Berkeley, USA
* Yuncong Hu, University of California, Berkeley, Berkeley, USA
* Michele Orrú, University of California, Berkeley, Berkeley, USA
### 摘要
> 我们介绍了一种新的简明参数类别，我们称之为"弹性"。 弹性SNARKs允许证明者根据执行环境和要证明的陈述分配不同的资源（如内存和时间）。由此得出的输出与证明者的配置无关。为了研究弹性SNARKs，我们扩展了[Block等人，TCC’20]的流式处理范例。我们为R1CS实例提供了弹性多项式交互式Oracle证明的定义框架，并设计了一个编译器，用于将弹性PIOP转换为支持流媒体或随机访问其输入的预处理参数系统。根据配置，证明者将为时间（线性或准线性）和内存（线性或对数）选择不同的权衡。我们通过提出一种新的无FFT预处理参数Gemini来证明了弹性SNARKS的存在。我们证明了其安全性，并基于arkworks框架在Rust上开发了一个概念验证实现。我们对单台机器上数十亿门的大型R1CS实例进行了基准测试。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_15](https://doi.org/10.1007/978-3-031-07085-3_15)
## Efficient Schemes for Committing Authenticated Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-2].md#efficient-schemes-for-committing-authenticated-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-2].md#efficient-schemes-for-committing-authenticated-encryption)**
### 作者
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, La Jolla, USA
* Viet Tung Hoang, Department of Computer Science, Florida State University, Tallahassee, USA
### 摘要
> 本文提供了高效的身份验证加密（AE）方案，其中密文是密钥的承诺。在最小的额外成本下，这些方案扩展到密文是所有加密输入的承诺，包括密钥、随机数、关联数据和消息。我们的主要方案是对GCM的修改（用于基本、唯一随机数AE安全性）和AES-GCM-SIV的修改（用于防误用AE安全性），并且在不增加密文大小的情况下添加了这两种承诺形式。我们还提供了更通用但成本略高的解决方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07085-3_29](https://doi.org/10.1007/978-3-031-07085-3_29)
