# Asiacrypt[2022-2]
## A New Isogeny Representation and Applications to Cryptography.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#a-new-isogeny-representation-and-applications-to-cryptography) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#a-new-isogeny-representation-and-applications-to-cryptography)**
### 作者
* Antonin Leroux, DGA, Paris, France
* Antonin Leroux, LIX, CNRS, Ecole Polytechnique, Institut Polytechnique de Paris, Palaiseau, France
* Antonin Leroux, INRIA, Le Chesnay, France
### 摘要
> 本文着眼于等基表示，即用来计算等基和确定属于等同超奇异曲线语言（一组三元组$（D，E_1，E_2）$，其中$E_1$ 和$E_2$之间有一个度为$D$的循环等位基。）的方法。评估和验证等基的任务对于基于等基密码学非常重要。
> 
> 我们的主要贡献是设计亚阶表示法，这是一种新的等位基表示方法，针对大型素数次数的情况。我们新方法的核心是在目标环的亚阶中显露出平滑范数的自同构。这种新表示法似乎为基于等基密码学开启了有趣的前景，并且需要解决一个新的计算问题的困难：亚阶-理想问题（SOIP）。作为应用，我们介绍了基于亚阶表示法的pSIDH。最近针对基于等基密码学的攻击表明，研究新的假设尤其关键。
> 
> 为了有效地操作亚阶表示法，我们开发了几种启发式算法工具，用于解决新家族四元数秩序内的范数方程。这些新算法可能具有独立的价值。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_1](https://doi.org/10.1007/978-3-031-22966-4_1)
## Group Action Key Encapsulation and Non-Interactive Key Exchange in the QROM.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#group-action-key-encapsulation-and-non-interactive-key-exchange-in-the-qrom) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#group-action-key-encapsulation-and-non-interactive-key-exchange-in-the-qrom)**
### 作者
* Julien Duman, Ruhr-Universität Bochum, Bochum, Germany
* Dominik Hartmann, Ruhr-Universität Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Sabrina Kunzweiler, Ruhr-Universität Bochum, Bochum, Germany
* Jonas Lehmann, Ruhr-Universität Bochum, Bochum, Germany
* Doreen Riepel, Ruhr-Universität Bochum, Bochum, Germany
### 摘要
> 在量子安全密码学的背景下，密码群作用提供了基于同态密码学的可交换超奇异同源Diffie-Hellman（CSIDH）设置的抽象。在这项工作中，我们重新审视了两个先前提出的自然协议的安全性：群作用哈希ElGamal密钥封装机制（GA-HEG KEM）和群作用哈希Diffie-Hellman非交互式密钥交换（GA-HDH NIKE）协议。后者已被认为可用于实际协议，例如Post-Quantum WireGuard（S&P'21）和OPTLS（CCS’20）。
> 
> 我们证明了两个协议在量子随机Oracle模型（QROM）中的主动安全性固有地依赖于群作用Strong CDH问题的非常强的变体，其中对手被赋予对DDH oracle的任意量子访问权。也就是说，量子可访问的Strong CDH假设不仅足够，而且必要，以证明GA-HEG KEM和GA-HDH NIKE协议的主动安全性。
> 
> 此外，我们提出了使用古典Strong CDH假设的QROM安全协议的变体，即具有古典对DDH oracle的访问权限的CDH。我们的第一个变种使用密钥确认，因此只能在KEM设置中应用。我们的第二种但效率较低的变体基于Cash等人的双胞胎技术（EUROCRYPT’08），特别是产生了第一个从标准CDH假设获得QROM安全性的主动安全同态基础NIKE。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_2](https://doi.org/10.1007/978-3-031-22966-4_2)
## Horizontal Racewalking Using Radical Isogenies.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#horizontal-racewalking-using-radical-isogenies) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#horizontal-racewalking-using-radical-isogenies)**
### 作者
* Wouter Castryck, imec-COSIC, KU Leuven, Leuven, Belgium
* Thomas Decru, imec-COSIC, KU Leuven, Leuven, Belgium
* Marc Houben, imec-COSIC, KU Leuven, Leuven, Belgium
* Frederik Vercauteren, imec-COSIC, KU Leuven, Leuven, Belgium
* Marc Houben, Departement Wiskunde, KU Leuven, Leuven, Belgium
* Marc Houben, Mathematisch Instituut, Universiteit Leiden, Leiden, The Netherlands
* Wouter Castryck, Vakgroep Wiskunde: Algebra en Meetkunde, Universiteit Gent, Ghent, Belgium
### 摘要
> 我们解决了关于使用基本同态的三个主要问题，这些问题是由Castryck、Decru和Vercauteren在Asiacrypt 2020年提出，涉及在有限域上的椭圆曲线之间固定小度数的同态链的计算。首先，我们提出了一种插值方法，用于在给定度数N中寻找基本同态公式，从而避开了需要在大函数域上因式分解除法多项式的需要。使用这种方法，我们能够将我们拥有的公式范围从 \(N \le 13\) 扩展到 \(N \le 37\)（在范围 \(18 \le N \le 37\) 中，我们将注意力限制在素数幂上）。其次，通过使用已知技术和临时的操纵，我们推导出了这些公式的优化版本，适用于 \(N \le 19\)，某些情况下的性能比2020年的版本快两倍以上。第三，我们解决了沿着素数 \(\mathbb {F}_p\) 上 \(p \equiv 7 \bmod 8\) 的超奇异椭圆曲线之间的表面行走时，正确选择基本同态的问题；这对于偶数N而言并不容易，仅在 \(N = 2\) 和 \(N = 4\) 的情况下，由Onuki和Moriya在PKC 2022年解决。我们对所有偶数N给出了一个猜想性的陈述，并且在 \(N \le 14\) 的情况下进行了证明。从这些技术中获得的加速效果很显著：使用16-同态，512位素数域上的2-同态长链的计算速度可以加快3倍，而前一个基于基本同态的CSIDH实现的计算速度可以提高约12\%。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_3](https://doi.org/10.1007/978-3-031-22966-4_3)
## Threshold Linearly Homomorphic Encryption on bfZ/2kbfZ.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#threshold-linearly-homomorphic-encryption-on-bfz-2kbfz) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#threshold-linearly-homomorphic-encryption-on-bfz-2kbfz)**
### 作者
* Guilhem Castagnos, Université de Bordeaux, CNRS, INRIA, IMB, UMR 5251, 33400, Talence, France
* Fabien Laguillaumie, LIRMM, Université de Montpellier, CNRS, Montpellier, France
* Ida Tucker, IMDEA Software Institute, Madrid, Spain
* Ida Tucker, Zondax AG, Zug, Switzerland
### 摘要
> 阈值公钥加密协议是一种公钥系统，其中私钥分布在n个不同的服务器之间。它提供了高安全性，因为没有任何单个服务器被委托完成解密的全部工作。它是许多涉及相互不信任的各方共同目标的多方计算协议的核心组成部分。当它是同态加密时，它更加有用，这意味着密文的公共操作转化为底层明文的操作。特别是，在Eurocrypt 2001年，Cramer，Damgård和Nielsen提供了一种来自线性同态阈值加密方案的多方计算的新方法。另一方面，最近对于开发模\(2^k\)中的多方计算存在着兴趣，其中k是某个整数，它与CPU处理的数据密切相关。因此，多方计算将受益于一种支持分布式解密的消息空间的加密方案。
> 
> 在这项工作中，我们提供了第一个消息空间为\(\textbf{Z}/2^k\textbf{Z}\)的线性同态加密阈值。它受到Castagnos和Laguillaumie在RSA 2015年的加密方案的启发，但是利用了一个因子分解未知的判别类群。
> 
> 它的自然结构使得使用线性整数秘密共享将解密分布在服务器之间成为可能，从而允许任何解密策略的访问结构。此外，它在消息空间选择上的高效性和灵活性使得它成为多方计算应用的一个良好候选。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_4](https://doi.org/10.1007/978-3-031-22966-4_4)
## Large-Precision Homomorphic Sign Evaluation Using FHEW/TFHE Bootstrapping.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#large-precision-homomorphic-sign-evaluation-using-fhew-tfhe-bootstrapping) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#large-precision-homomorphic-sign-evaluation-using-fhew-tfhe-bootstrapping)**
### 作者
* Zeyu Liu, Duality Technologies, Hoboken, NJ, USA
* Daniele Micciancio, Duality Technologies, Hoboken, NJ, USA
* Yuriy Polyakov, Duality Technologies, Hoboken, NJ, USA
### 摘要
> 两个加密数字的比较是许多机器学习应用中的重要操作，例如决策树或神经网络推理/训练。在完全同态加密（FHE）的背景下，高精度比较操作的有效实现可能具有挑战性。传统的FHE比较操作评估方式基于使用FHEW/TFHE引导（在文献中通常称为可编程引导）进行符号函数评估，但只能支持非常小的精度（实际上限制在4-5位左右）。对于更高的精度，运行时复杂度与密文（明文）模数呈线性关系（即与模数位数呈指数关系）。我们提出了一种符号函数评估算法，其与密文（明文）模数的比例成对数关系，从而能够实际支持大精度比较。我们的符号评估算法是基于同态底函数算法的迭代使用，这些算法也是我们研究的一部分。此外，我们将我们的底函数评估过程推广到任意函数评估，可以用于支持小明文模数（直接）和大明文模数（通过使用同态数字分解算法，也是我们研究中提出的）。我们使用PALISADE格密码库实现了所有这些算法，在此过程中引入了几个特定于实现的优化，并讨论了我们的实验结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_5](https://doi.org/10.1007/978-3-031-22966-4_5)
## EvalRound Algorithm in CKKS Bootstrapping.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#evalround-algorithm-in-ckks-bootstrapping) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#evalround-algorithm-in-ckks-bootstrapping)**
### 作者
* Seonghak Kim, Crypto Lab Inc., 1 Gwanak-ro, Gwanak-gu, Seoul, 08826, Korea
* Jaehyung Kim, Crypto Lab Inc., 1 Gwanak-ro, Gwanak-gu, Seoul, 08826, Korea
* Taekyung Kim, Crypto Lab Inc., 1 Gwanak-ro, Gwanak-gu, Seoul, 08826, Korea
* Minji Park, Ewha Womans University, 52 Ewhayeodae-gil, Seodaemun-gu, Seoul, 03760, Korea
* Chohong Min, Ewha Womans University, 52 Ewhayeodae-gil, Seodaemun-gu, Seoul, 03760, Korea
### 摘要
> 同态加密（HE）通过在加密数据上进行计算，为保护隐私的敏感数据的使用打开了一个全新的世界。在针对各种环境下计算的众多HE方案中，CKKS方案[8]因允许对加密的实数数据进行计算，在实际应用中具有更大的影响力而被区别对待。
> 
> CKKS方案是一种分层同态加密方案，每次同态乘法消耗一层。当层数用尽时，需要使用一种称为引导（bootstrapping）的特殊计算电路来进行进一步的乘法。Cheon等人提出的算法[7]被视为CKKS方案中进行引导的标准方法，它包括以下四个步骤：ModRaise、CoeffToSlot、EvalMod和SlotToCoeff。然而，这些步骤本身也消耗了许多层级，因此优化这种额外的消耗一直是最近一系列研究的重点。
> 
> 在引导步骤中消耗的总层级中，大约有一半用于对DFT矩阵的实数分量进行放大并将其舍入到最近的整数。每个放大因子都非常大，因此需要一层来缩小它。为了节省层级，可以采用较小的放大因子，但是舍入误差会传输到EvalMod，最终损害引导的准确性。
> 
> EvalMod的目标是从ModRaise得到的明文\(\textsf{pt}+ qI\)中去除多余的qI项，其中q是底部模数，I是一个具有小整数系数的多项式。EvalRound则被称为其相反操作，获得qI。我们提出了一种新颖的引导算法，包括ModRaise、CoeffToSlot、EvalRound和SlotToCoeff，可以采用更小的放大因子，而不会损害舍入误差。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_6](https://doi.org/10.1007/978-3-031-22966-4_6)
## FINAL: Faster FHE Instantiated with NTRU and LWE.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#final-faster-fhe-instantiated-with-ntru-and-lwe) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#final-faster-fhe-instantiated-with-ntru-and-lwe)**
### 作者
* Charlotte Bonte, Intel Corporation, Emerging Security Lab, Mountain View, USA
* Ilia Iliashenko, imec-COSIC, KU Leuven, Leuven, Belgium
* Jeongeun Park, imec-COSIC, KU Leuven, Leuven, Belgium
* Hilder V. L. Pereira, imec-COSIC, KU Leuven, Leuven, Belgium
* Nigel P. Smart, imec-COSIC, KU Leuven, Leuven, Belgium
* Nigel P. Smart, Zama Inc., Franklin, USA
### 摘要
> NTRU问题是建立高效全同态加密（FHE）的一种有前景的候选方案。然而，所有现有的提议（例如LTV、YASHE）都需要所谓的“过度拉伸”NTRU参数以实现同态操作。Albrecht 等人（CRYPTO 2016）的研究表明，这些参数对子域格攻击是脆弱的。
> 
> 基于Ducas和van Woerden（ASIACRYPT 2021）最近对过度拉伸的NTRU假设进行了更详细的分析，我们构建了两种FHE方案，其中NTRU参数位于过度拉伸范围之外。第一个方案仅基于NTRU，并在与TFHE等最先进的FHE方案之间展现了有竞争力的性能。我们的第二个方案基于NTRU和LWE假设，通过28%更快的引导和45%更小的引导和密钥切换密钥，优于TFHE。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_7](https://doi.org/10.1007/978-3-031-22966-4_7)
## Flashproofs: Efficient Zero-Knowledge Arguments of Range and Polynomial Evaluation with Transparent Setup.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#flashproofs-efficient-zero-knowledge-arguments-of-range-and-polynomial-evaluation-with-transparent-setup) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#flashproofs-efficient-zero-knowledge-arguments-of-range-and-polynomial-evaluation-with-transparent-setup)**
### 作者
* Nan Wang, Australian National University, Canberra, Australia
* Sid Chi-Kin Chau, Australian National University, Canberra, Australia
### 摘要
> 我们提出了Flashproofs，这是一种新型的高效透明设置的特殊诚实验证者零知识论证协议，在离散对数（DL）场景中运作。首先，我们提出了高效油耗的范围论证，其在验证时实现了\(O(N^{\frac{2}{3}})\)的通信成本，并在\(N\)位长度的范围\([0, 2^N-1]\)内，涉及到\(O(N^{\frac{2}{3}})\)个群指数和稍微次线性数量的群指数来进行证明。对于支持智能合约的区块链平台上的典型保密交易来说，验证我们的范围论证只需要消耗237K和318K的Gas，对于32位和64位范围而言，这与目前最高效的带有可信设置的zkSNARK（EUROCRYPT '16）的220K Gas相当。此外，多个论证的聚合可以进一步提高效率。其次，我们基于Bayer & Groth (EUROCRYPT '13)的技术提出了多项式评估论证。我们提供了两个针对低次数(\(D \in [3, 2^9]\))和高次数 (\(D > 2^9\))多项式进行优化的零知识论证，其中\(D\)是多项式的次数。我们的论证在整体效率上得到了明显的改善。值得注意的是，证明过程中的群指数数量从\(8\log D\)减少到\(3(\log D+\sqrt{\log D})\)。通信成本和验证的群指数数量从\(7\log D\)减少到\((\log D + 3\sqrt{\log D})\)。据我们所知，在不需要可信设置的前提下，我们的论证在DL场景中是最高效的成员和非成员的通信效率论证。更重要的是，我们的技术使得在聚合满足相同次数和输入不同多项式的多个论证时，在通信和验证（群指数）的效率上从\(O(\log D)\)提高到了\(O(\sqrt{\log D})\)的数量级。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_8](https://doi.org/10.1007/978-3-031-22966-4_8)
## Counting Vampires: From Univariate Sumcheck to Updatable ZK-SNARK.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#counting-vampires-from-univariate-sumcheck-to-updatable-zk-snark) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#counting-vampires-from-univariate-sumcheck-to-updatable-zk-snark)**
### 作者
* Helger Lipmaa, Simula UiB, Bergen, Norway
* Janno Siim, Simula UiB, Bergen, Norway
* Michał Zając, Nethermind, London, UK
### 摘要
> 我们提出了一个单变量求和验证参数\(\mathfrak{Count}\)，它在一个群元素上具有基本上最优的通信效率。虽然之前最高效的单变量求和验证参数Aurora是基于多项式承诺的，但\(\mathfrak{Count}\)是基于内积承诺的。我们使用\(\mathfrak{Count}\)来构建一个新的基于配对的可更新和通用的零知识可证明性\(\mathfrak{Vampire}\)，并且其已知的参数长度最短（四个群元素和两个有限域元素）用于\(\textsf{NP}\)。此外，\(\mathfrak{Vampire}\)使用了Boneh等人的聚合多项式承诺方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_9](https://doi.org/10.1007/978-3-031-22966-4_9)
## Improved Straight-Line Extraction in the Random Oracle Model with Applications to Signature Aggregation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#improved-straight-line-extraction-in-the-random-oracle-model-with-applications-to-signature-aggregation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#improved-straight-line-extraction-in-the-random-oracle-model-with-applications-to-signature-aggregation)**
### 作者
* Yashvanth Kondi, Aarhus University, Aarhus, Denmark
* Abhi Shelat, Northeastern University, Boston, USA
### 摘要
> 本文的目标是在随机预言机模型中改进直线提取技术的效率和适用性。随机预言机模型中的直线提取指的是存在一个提取器，该提取器可以根据证明者\(P^*(x)\)对某个定理x进行的随机预言机查询，以大致与\(P^*\)生成验证证明的概率相同的概率产生一个x的见证w。这个概念适用于零知识协议和可验证计算，其目标是压缩证明。
> 
> Pass（CRYPTO '03）首次展示了如何使用切割选择技术来实现NP的这个属性，该技术在通信中产生了一个\(\lambda ^2\)位的开销，其中\(\lambda\)是一个安全参数。Fischlin（CRYPTO '05）提出了一种基于“工作证明”的更有效的技术，消除了这个\(\lambda ^2\)的成本，但只适用于具有“准唯一响应”属性的有限类Sigma协议，例如，不一定包括Sigma协议的标准OR组合。
> 
> 以Schnorr/EdDSA签名聚合作为动机应用，我们开发了改进直线可提取证明计算成本的新技术。我们对现有技术的改进范围在最佳压缩参数下为70\(\times \)–200\(\times \)。这是由于一个独特适应的多项式评估算法和依赖多重碰撞和生日悖论的工作证明比固定目标反演更快地解决的洞察力。
> 
> 我们基于碰撞的工作证明在NIZK设置中也更广泛地改进了证明者的随机预言机查询复杂度。除了减少Fischlin证明者的查询复杂度之外，对于一类特殊的Sigma协议，我们首次能够紧密匹配我们提出的一个新的下界。
> 
> 最后，我们扩展了Fischlin的技术，使其适用于更一般的强安全Sigma协议类，其中包括OR组合。我们通过仔细随机化Fischlin的技术来实现这一目标-我们证明了其当前的确定性特性阻止了其应用于某些多见证语言。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_10](https://doi.org/10.1007/978-3-031-22966-4_10)
## SIDH Proof of Knowledge.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#sidh-proof-of-knowledge) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#sidh-proof-of-knowledge)**
### 作者
* Luca De Feo, IBM Research Europe, Zürich, Switzerland
* Samuel Dobson, Mathematics Department, University of Auckland, Auckland, New Zealand
* Steven D. Galbraith, Mathematics Department, University of Auckland, Auckland, New Zealand
* Lukas Zobernig, Mathematics Department, University of Auckland, Auckland, New Zealand
### 摘要
> 我们证明了De Feo-Jao-Plût识别方案（作为超奇异同态Diffie-Hellman（SIDH）签名的基础）的完备性证明包含一个无效的假设，并且我们为这个假设提供了一个反例-从而表明完备性证明是无效的。由于这个证明在许多作者的作品中被多次重复，因此这个结果影响了多个文献。由于能够证明对SIDH密钥的知识的重要性（例如，防止自适应攻击），完备性是一个重要的特性。
> 
> 令人惊讶的是，证明具体同态的知识的问题比预期的要困难得多。本文的主要结果是提供一个Σ协议，以证明超奇异同态图中特定长度的遍历的知识，并提供一个第二个Σ协议，额外证明同态将某些挠点映射到另一些挠点（如在SIDH公钥中所见）。我们的方案也避免了由Ghantous、Pintore和Veroni提出的SIDH识别方案的完备性问题。特别是，我们的协议提供了一种非交互式的验证SIDH公钥的正确性的方法，并且与自适应攻击对抗的相关声明。
> 
> 附后记：在这项工作完成并公开几个月后，SIDH假设被几位作者的一系列论文打破。因此，在标准的SIDH设置中，我们在这里研究的一些声明现在有平凡的多项式时间的非交互式证明。尽管如此，我们的第一个Σ协议不受攻击影响，我们的第二个协议可能仍然对现有和未来的SIDH变种有用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_11](https://doi.org/10.1007/978-3-031-22966-4_11)
## DAG-Σ: A DAG-Based Sigma Protocol for Relations in CNF.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#dag-a-dag-based-sigma-protocol-for-relations-in-cnf) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#dag-a-dag-based-sigma-protocol-for-relations-in-cnf)**
### 作者
* Gongxian Zeng, Peng Cheng Laboratory, Shenzhen, China
* Zhengan Huang, Peng Cheng Laboratory, Shenzhen, China
* Yu Wang, Peng Cheng Laboratory, Shenzhen, China
* Zhiming Zheng, Peng Cheng Laboratory, Shenzhen, China
* Junzuo Lai, College of Information Science and Technology, Jinan University, Guangzhou, China
* Zhiming Zheng, Institute of Artificial Intelligence, LMIB, NLSDE, Beijing Advanced Innovation Center for Future Blockchain and Privacy Computing, Beihang University, Beijing, China
### 摘要
> 在CRYPTO 1994年，Cramer，Damgård和Schoenmakers提出了一种构建知识证明（PoKs）的一般方法，特别是针对关系可以用析取范式（DNF）表示的k-out-of-n部分知识。从那时起，k-out-of-n部分知识的证明引起了很多关注，并提出了一些高效的构建方法。然而，许多实际场景需要其他形式的部分知识有效的PoK协议。
> 
> 在本文中，我们主要关注k-合取范式（k-CNF）关系的PoK协议，其中有n个语句，可以表示为：（i）k个语句通过“OR”运算构成一个子句，（ii）该关系通过“AND”运算由多个子句组成。我们提出了一种替代的Sigma协议（称为DAG-\({\Sigma }\)协议）用于k-CNF关系（在离散对数设置中），通过将这些关系转换为有向无环图（DAG）。我们的DAG-\({\Sigma }\)协议与Cramer等人的一般方法相比，具有较小的通信成本和较小的计算开销。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_12](https://doi.org/10.1007/978-3-031-22966-4_12)
## Zero-Knowledge Protocols for the Subset Sum Problem from MPC-in-the-Head with Rejection.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#zero-knowledge-protocols-for-the-subset-sum-problem-from-mpc-in-the-head-with-rejection) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#zero-knowledge-protocols-for-the-subset-sum-problem-from-mpc-in-the-head-with-rejection)**
### 作者
* Thibauld Feneuil, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Thibauld Feneuil, Sorbonne Université, CNRS, INRIA, Institut de Mathématiques de Jussieu-Paris Rive Gauche, Ouragan, Paris, France
* Jules Maire, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
* Damien Vergnaud, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
* Damien Vergnaud, Institut Universitaire de France, Paris, France
### 摘要
> 我们提出了用于模块子集和问题的（诚实验证者）零知识论证。先前的组合方法，特别是Shamir的方法，产生了在密钥安全参数下通信复杂度为立方的证明。基于MPC-in-the-head技术的最近方法也产生了具有立方通信复杂度的证明。
> 
> 我们通过使用小整数的秘密共享（而不是模q）来改善这种方法，以减小证明的大小并去除素数模限制。由于这种共享可能会泄露关于秘密子集的信息，我们引入了拒绝MPC-in-the-head范式的想法。必须特别注意保持完整性和正确性的平衡，并保持我们的论证的零知识性。我们将这个想法与两种技术结合起来，以证明秘密向量（用于选择子集）由二进制坐标完全组成。
> 
> 我们的新协议通过产生二次尺寸的证明实现了渐进改进。这种改进也是实际的：对于256位模q，我们协议的最佳变体产生了13 KB的证明，而先前的提议则分别为1180 KB和122 KB的证明。我们的技术还可以应用于子集和问题的向量变体，特别是非均匀短整数解（ISIS）问题，对于这些问题，当底层环不小且适合NTT时，它们提供了与最先进协议的有效替代。我们还展示了我们协议在完全同态加密背景下用于构建明文和/或密钥知识的有效零知识证明。当应用于TFHE方案时，获得的证明比先前协议得到的证明小20多倍。最后，我们使用我们的技术基于Boneh，Halevi和Howgrave-Graham的伪随机函数构建了一个有效的数字签名方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_13](https://doi.org/10.1007/978-3-031-22966-4_13)
## Efficient Zero-Knowledge Arguments in Discrete Logarithm Setting: Sublogarithmic Proof or Sublinear Verifier.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#efficient-zero-knowledge-arguments-in-discrete-logarithm-setting-sublogarithmic-proof-or-sublinear-verifier) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#efficient-zero-knowledge-arguments-in-discrete-logarithm-setting-sublogarithmic-proof-or-sublinear-verifier)**
### 作者
* Sungwook Kim, Department of Information Security, Seoul Women’s University, Seoul, 01797, Republic of Korea
* Hyeonbum Lee, Department of Mathematics and Research Institute for Natural Sciences, Hanyang University, Seoul, 04763, Republic of Korea
* Jae Hong Seo, Department of Mathematics and Research Institute for Natural Sciences, Hanyang University, Seoul, 04763, Republic of Korea
### 摘要
> 我们在常见随机字符串模型中，为大小为N的算术电路提出了三个交互式的零知识证明。通过Fiat-Shamir启发式方法，在随机预言机模型下将其转换为非交互式。第一个论证具有\(O(\sqrt{\log N})\)的通信和回合复杂性，验证者的计算复杂度为O(N)。第二个论证具有\(O(\log N)\)的通信和\(O(\sqrt{N})\)的验证者计算复杂性。第三个论证具有\(O(\log N)\)的通信和\(O(\sqrt{N}\log N)\)的验证者计算复杂性。与第一和第二论证不同，第三个论证不依赖于配对友好的椭圆曲线。这三个论证的可靠性是在标准离散对数和/或双重配对假设下得到证明的，该假设至少与决策性Diffie-Hellman假设一样可靠。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_14](https://doi.org/10.1007/978-3-031-22966-4_14)
## Unconditionally Secure NIZK in the Fine-Grained Setting.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#unconditionally-secure-nizk-in-the-fine-grained-setting) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#unconditionally-secure-nizk-in-the-fine-grained-setting)**
### 作者
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
* Jiaxin Pan, Department of Mathematical Sciences, NTNU - Norwegian University of Science and Technology, Trondheim, Norway
### 摘要
> 非交互式零知识（NIZK）证明系统通常基于密码学假设构建。在本文中，我们提出了第一个在\(\mathsf {AC^0}\) -细粒度设置下无条件安全的NIZK系统。更具体地说，我们的NIZK系统对所有对手具有完美的声音，并且对\(\mathsf {AC^0}\)对手具有无条件的零知识，即，\(\mathsf {AC^0}\)对手只能在无条件下以可以忽略的概率违反零知识属性。在我们构造的核心是一种OR证明系统，用

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_15](https://doi.org/10.1007/978-3-031-22966-4_15)
## Triply Adaptive UC NIZK.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#triply-adaptive-uc-nizk) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#triply-adaptive-uc-nizk)**
### 作者
* Ran Canetti, Boston University, Boston, USA
* Pratik Sarkar, Boston University, Boston, USA
* Xiao Wang, Northwestern University, Evanston, USA
### 摘要
> 非交互式零知识证明（NIZK）能够证明NP语句的有效性，而不泄漏其他任何信息。我们研究多实例NIZK在公共参考字符串（CRS）模型中，针对一个能够自适应腐败参与者并选择待证明语句的对手。我们构建了第一个三重自适应NIZK，它提供了完全自适应的可靠性以及自适应的零知识，假设要么是LWE，要么是LPN和DDH（先前的构建依赖于不可驳回的知识假设）。此外，我们的NIZK是通用可合成的（UC）。在实现的过程中，我们：制定了一个理想功能 \(\mathcal {F}_{\textsf {NICOM}}\)，它基本上捕捉了非交互式承诺，并展示了现有协议使用标准假设可以实现它。定义并实现了在标准假设下满足三重自适应安全性并具有对 \(\mathcal {F}_{\textsf {NICOM}}\)访问权的Sigma协议。使用Fiat-Shamir转换，利用相关难以计算的哈希函数实现了一个具有对 \(\mathcal {F}_{\textsf {NICOM}}\)访问权的三重自适应安全Sigma协议，并将其编译成在CRS模型中具有对 \(\mathcal {F}_{\textsf {NICOM}}\)访问权的三重自适应UC-NIZK论证，假设LWE（或LPN和DDH）。使用UC定理获得CRS模型中的UC-NIZK。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_16](https://doi.org/10.1007/978-3-031-22966-4_16)
## Efficient NIZKs from LWE via Polynomial Reconstruction and "MPC in the Head".
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#efficient-nizks-from-lwe-via-polynomial-reconstruction-and-mpc-in-the-head) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#efficient-nizks-from-lwe-via-polynomial-reconstruction-and-mpc-in-the-head)**
### 作者
* Riddhi Ghosal, University of California, Los Angeles, CA, USA
* Paul Lou, University of California, Los Angeles, CA, USA
* Amit Sahai, University of California, Los Angeles, CA, USA
### 摘要
> 所有现有的建立基于学习伴随误差（LWE）假设对\(\textsf{NP}\)的非交互式零知识（NIZK）论证的工作都研究了在一个基于相关不可攻破（CI）哈希函数从LWE实例化Fiat-Shamir范式的基础上进行基于诚实验证者零知识（HVZK）\(\varSigma \)协议的并行重复。这种技术具有固有的效率损失，这是由于并行重复造成的。
> 
> 在这项工作中，我们展示了如何利用更有效的“MPC in the Head”技术来构建一个基础的诚实验证者协议，然后应用Fiat-Shamir范式。为了实现这一点，我们提供了一种新的更有效的CI哈希函数构造方法，使用高效的多项式重建算法作为主要技术工具。
> 
> 我们强调，我们的工作为基于LWE的\(\textsf{NP}\)的NIZK论证提供了一种新的更有效的“基础构造”。我们的协议可以作为其他以效率为重点的引导技术的基础，例如Gentry等人的引导技术（密码学杂志2015年）的基础。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_17](https://doi.org/10.1007/978-3-031-22966-4_17)
## Key-Reduced Variants of 3kf9 with Beyond-Birthday-Bound Security.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#key-reduced-variants-of-3kf9-with-beyond-birthday-bound-security) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#key-reduced-variants-of-3kf9-with-beyond-birthday-bound-security)**
### 作者
* Yaobin Shen, Shanghai Jiao Tong University, Shanghai, China
* Yaobin Shen, UCLouvain, ICTEAM, Crypto Group, Louvain-la-Neuve, Belgium
* Ferdinand Sibleyras, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 3kf9是一种增强标准完整性算法f9（3GPP-MAC）的三键CBC类型MAC。它具有超越生日限制的安全性，并在实例化轻量级分组密码时，有望成为受限环境中的可能候选者。提出了两个变种2kf9和1kf9，旨在减小密钥大小以提高效率，但最近，Leurent等人（CRYPTO’18）和Shen等人（CRYPTO’21）指出了这两个变种的关键缺陷，并用生日限制攻击无效化了它们的安全证明。
> 
> 在本研究中，我们重新审视了3kf9的减小密钥变种的先前构建，并分析了安全分析中的问题所在。有趣的是，我们发现在末尾附近进行一次加倍可以恢复2kf9和1kf9的预期超越生日限制的安全性。然后，我们提出了3kf9的两个新的减小密钥变种，分别称为n2kf9和n1kf9。通过利用先前的尝试，我们证明了n2kf9在\(2^{2n/3}\)次查询时是安全的，并且当消息空间是前缀自由时，我们证明了n1kf9在\(2^{2n/3}\)次查询时是安全的。我们还提供了多用户环境中n2kf9的超越生日分析。请注意，与EMAC和CBC-MAC相比，为了提供更高的安全保证，n2kf9和n1kf9的额外成本预计将是很小的。它只需要一个额外的分组密码调用和一个加倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_18](https://doi.org/10.1007/978-3-031-22966-4_18)
## Jammin' on the Deck.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#jammin-on-the-deck) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#jammin-on-the-deck)**
### 作者
* Norica Băcuieți, Radboud University, Nijmegen, The Netherlands
* Joan Daemen, Radboud University, Nijmegen, The Netherlands
* Gilles Van Assche, STMicroelectronics, Diegem, Belgium
* Ronny Van Keer, STMicroelectronics, Diegem, Belgium
* Seth Hoffert, Lincoln, Nebraska, USA
### 摘要
> 目前，绝大多数对称密钥加密方案都是构建为分组密码模式。分组密码被设计为难以与随机置换区分开来，并且这得到了密码分析的支持，而（良好的）模式可以被证明为安全，如果一个随机置换取代了分组密码。因此，分组密码形成了一个抽象层，标志着密码分析和安全证明之间的界限。在本文中，我们研究了对称密钥密码学的重构版本，它不是围绕分组密码而是围绕牌堆功能建立的: 一种具有任意输入和输出长度以及可增量属性的密钥功能。这允许更简单地分析使用模式，并且由于当前提议的牌堆功能的出色性能，这些模式仍然非常有效。我们专注于具有不同鲁棒性水平的认证加密（AE）模式。我们的模式内置对会话的支持，但没有会话时也非常高效。作为副产品，我们定义了一个名为jammin cipher的新理想模型。与OAE2安全模型不同，jammin cipher既是操作理想方案又是安全参考，并且解决了双向通信和多密钥安全等真实世界使用情况。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_19](https://doi.org/10.1007/978-3-031-22966-4_19)
## A Modular Approach to the Incompressibility of Block-Cipher-Based AEADs.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#a-modular-approach-to-the-incompressibility-of-block-cipher-based-aeads) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#a-modular-approach-to-the-incompressibility-of-block-cipher-based-aeads)**
### 作者
* Akinori Hosoyamada, NTT Social Informatics Laboratories, Tokyo, Japan
* Yosuke Todo, NTT Social Informatics Laboratories, Tokyo, Japan
* Kan Yasuda, NTT Social Informatics Laboratories, Tokyo, Japan
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Takanori Isobe, National Institute of Information and Communications Technology, Tokyo, Japan
* Takanori Isobe, PRESTO, Japan Science and Technology Agency, Tokyo, Japan
### 摘要
> 在白盒密码学中，不可压缩性是最基本的安全目标之一。鉴于近年来对高效且不可压缩块密码（如SPACE、SPNbox和WhiteBlock）的设计的进展，我们展示了将不可压缩AEAD模式减少至不可压缩块密码的可行性。我们首先观察到，包括CCM、GCM(-SIV)和OCB在内的一些现有AEAD操作模式，即使使用不可压缩块密码也会对白盒对手不安全。这激励我们重新审视和规范基于不可压缩性的AEAD方案和块密码的安全定义，使我们能够设计模式并将它们的安全性降至底层密码的安全性。我们制定的新的AEAD安全概念，命名为whPRI，是黑盒环境中伪随机注入安全性的扩展。类似的安全概念也适用于其他密码系统，如仅隐私加密方案。我们强调whPRI确保在白盒对手面前有相当强的真实性：即泄漏之外的存在性无法伪造。这与先前的概念形成鲜明对比，这些概念要么没有真实性，要么只确保了通用的无法伪造性。对于底层密码，我们引入了一个新的whPRP概念，扩展了黑盒环境中PRP的概念。有趣的是，我们的不可压缩性约简来自公共不可区分性的变体。特别地，我们展示了一个实用的whPRI安全AEAD模式可以构建自一个whPRP安全块密码：我们提出了海绵结构的类似SIV的组合（利用块密码作为其底层原语）和计数器模式，并证明这样的构造在变体意义下是公共不可区分于一个随机注入。为了实例化这样的AEAD方案，我们提出了一个基于我们的推测，即SPACE应该是一个whPRP安全密码的256位变种。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_20](https://doi.org/10.1007/978-3-031-22966-4_20)
## Security of Truncated Permutation Without Initial Value.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#security-of-truncated-permutation-without-initial-value) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#security-of-truncated-permutation-without-initial-value)**
### 作者
* Lorenzo Grassi, Radboud University, Nijmegen, The Netherlands
* Bart Mennink, Radboud University, Nijmegen, The Netherlands
### 摘要
> 冷漠性在密码学中是一个强大的概念。如果一个构造被证明与一个理想对象是冷漠的，那么在某些假设下，它可以在更高层次的构造中实例化该理想对象。冷漠性是密码散列函数的一个特别有用的模型，众多结果已经证明，在底层原语（通常是压缩函数、分组密码或置换）是随机的情况下，散列函数的行为类似于随机预言机。最近，在证明固定输入长度的单向函数的冷漠性方面取得了进展。一个示例是对置换的截断。如果在一个随机置换上对输入值和一个固定初始值进行连接，并截断输出，就得到了一个与随机函数在某个界限上是冷漠的构造（Dodis et al.，FSE 2009；Choi et al.，ASIACRYPT 2019）。然而，这种构造的安全性在一定程度上取决于初始值的长度；省略这个固定值将导致一个不安全的构造。
> 
> 在本文中，我们重新考虑了对置换的截断，并证明了该构造与一个随机预言机是冷漠的，即使将这个固定初始值替换为一个随机值。这个随机值可以在构造的不同评估中相同，也可以根据对手的自由选择来新生成。安全级别与具有固定初始值的截断相同，最多在随机值中存在碰撞。
> 
> 我们展示了我们的构造在并行可变长度摘要生成的背景下的直接影响。具体来说，我们描述了Cascade-MGF，它在任何密码散列函数之上运行，并使用散列函数输出作为截断的随机初始值。我们证明了Cascade-MGF在几乎所有设置中与早期的并行可变长度摘要生成构造（即Counter-MGF和Chained-MGF）相比更具优势。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_21](https://doi.org/10.1007/978-3-031-22966-4_21)
## Puncturable Key Wrapping and Its Applications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#puncturable-key-wrapping-and-its-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#puncturable-key-wrapping-and-its-applications)**
### 作者
* Matilda Backendal, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Felix Günther, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Kenneth G. Paterson, Department of Computer Science, ETH Zurich, Zurich, Switzerland
### 摘要
> 我们介绍了一种称为可穿孔密钥包装（PKW）的新型密码原语，它可以在对称密钥层次结构中支持细粒度的前向安全属性。我们开发了语法和安全定义，并从更简单的组件（AEAD方案和可穿孔PRF）构建了经过证明安全的PKW构造。我们展示了PKW如何应用于两种不同的场景。首先，我们展示了如何使用PKW实现TLS 1.3零往返会话恢复的前向安全性，即使服务器用于生成会话票据的长期密钥被泄露也可以保证。这扩展和更正了Aviram、Gellert和Jager的最新工作（《密码学杂志》，2021）。其次，我们展示了如何使用PKW构建带有文件粉碎功能的受保护文件存储系统，客户端可以将加密文件外包给可能是恶意或损坏的云服务器，同时实现强大的前向安全性保证，只依赖于本地密钥更新。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_22](https://doi.org/10.1007/978-3-031-22966-4_22)
## Multi-user Security of the Sum of Truncated Random Permutations.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-2].md#multi-user-security-of-the-sum-of-truncated-random-permutations) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-2].md#multi-user-security-of-the-sum-of-truncated-random-permutations)**
### 作者
* Wonseok Choi, KIAS, Seoul, Korea
* Hwigyeom Kim, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
* Yeongmin Lee, KAIST, Daejeon, Korea
### 摘要
> 几十年来，从伪随机置换构建伪随机函数的Luby-Rackoff反向构造一直是一个热门的密码学问题。对于这个问题，有两种广为人知且深受研究的方法：对两个随机置换求和以及截取随机置换输出的部分比特位。在本文中，通过结合求和和截取的方法，我们提出了新的Luby-Rackoff反向构造，分别命名为SaT1和SaT2。
> 
> SaT2是通过从两个独立的随机置换之和中部分截取输出比特位得到的，而SaT1是它的基于单个置换变体的形式，并使用了域分离技术。在多用户设置下，对SaT1和SaT2的区分优势分别上界为O(\sqrt{\mu q_{\max }}/{2^{n-0.5m}})和O(\sqrt{\mu }q_{\max }^{1.5}/{2^{2n-0.5m}})。其中，n是底层置换的大小，m是构造的输出大小，\mu 是用户数量，q_{\max }是每个用户的最大查询数。我们还证明了对独立置换的\mathsf {XORP[3]}变体（由Bhattacharya和Nandi在Asiacrypt 2021研究）的区分优势上界为O(\sqrt{\mu } q_{\max }^2/{2^{2.5n}})，这个变体被命名为SoP3-2。
> 
> 在\mu = O(2^{n-m})的多用户设置下，截取的随机置换只提供了生日攻击下的安全性，而SaT1和SaT2则是完全安全的，即每个用户可以进行O(2^n)次查询。这与使用三次置换调用的\mathsf {XORP[3]}具有相同的安全级别，而SaT1和SaT2只需要两次置换调用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22966-4_23](https://doi.org/10.1007/978-3-031-22966-4_23)
