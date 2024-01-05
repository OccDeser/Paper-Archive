# Eurocrypt[2020-2]
## Separate Your Domains: NIST PQC KEMs, Oracle Cloning and Read-Only Indifferentiability.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#separate-your-domains-nist-pqc-kems-oracle-cloning-and-read-only-indifferentiability) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#separate-your-domains-nist-pqc-kems-oracle-cloning-and-read-only-indifferentiability)**
### 作者
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, San Diego, USA
* Hannah Davis, Department of Computer Science and Engineering, University of California San Diego, San Diego, USA
* Felix Günther, Department of Computer Science, ETH Zürich, Zürich, Switzerland
### 摘要
> 在随机预言机模型中，方案假设可以方便地访问多个随机预言机（RO），将实现任务称为预言机克隆，通过从单个RO构建它们。论文的第一部分是关于KEM提交到NIST后量子密码标准化过程中的预言机克隆案例研究。我们针对一些提交中由于预言机克隆错误而导致的密钥恢复攻击，并找出其他使用不明确的预言机克隆方法的提交。在此基础上，论文的第二部分给出了对预言机克隆的理论处理。我们给出了“预言机克隆方法”的定义以及这种方法“有效”的含义，在一个被我们称为只读不可区分性的框架中进行，这是经典不可区分性的一个简单变种，不仅适用于单阶段游戏，还适用于多阶段游戏。我们形式化了域分离，并具体规定和研究了许多预言机克隆方法，包括常见的域分离方法，并给出了一些通用结果来证明某些类别的方法（证明了只读不可区分性）。我们不仅能够验证许多尚未破解的NIST PQC KEMs中使用的预言机克隆方法，还能够具体规定和验证可能超越此范围的预言机克隆方法的有用性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_1](https://doi.org/10.1007/978-3-030-45724-2_1)
## On the Memory-Tightness of Hashed ElGamal.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#on-the-memory-tightness-of-hashed-elgamal) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#on-the-memory-tightness-of-hashed-elgamal)**
### 作者
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### 摘要
> 我们研究公钥密码学中安全约简的内存紧密性，特别关注Hashed ElGamal。我们证明，只要这个约简在处理基础群时是泛化的，任何直线（即没有重卷）黑盒约简都需要与对手查询次数线性增长的内存。这对于证明Auerbach等人（CRYPTO 2017）的一个猜想以及首个具体密码方案内存紧密性的下界是有进展的（而不是安全观念的广义约简）。我们的证明依赖于泛化群模型中的压缩论证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_2](https://doi.org/10.1007/978-3-030-45724-2_2)
## Blind Schnorr Signatures and Signed ElGamal Encryption in the Algebraic Group Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#blind-schnorr-signatures-and-signed-elgamal-encryption-in-the-algebraic-group-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#blind-schnorr-signatures-and-signed-elgamal-encryption-in-the-algebraic-group-model)**
### 作者
* Georg Fuchsbauer, TU Wien, Vienna, Austria
* Antoine Plouviez, Inria, Paris, France
* Antoine Plouviez, ENS, CNRS, PSL, Paris, France
* Yannick Seurin, ANSSI, Paris, France
### 摘要
> 施纳尔盲签名协议允许对施纳尔签名进行盲式发布，这是最常用的签名之一。尽管它在实践中具有重要意义，但其安全性分析并不令人满意。目前已知的唯一安全性证明是非正式的，并依赖于通用群模型（GGM）和随机预言机模型（ROM），假设“ROS问题”是困难的。情况对于（施纳尔）签名埃尔加马尔加密也类似，它是一种简单的CCA2安全变种。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_3](https://doi.org/10.1007/978-3-030-45724-2_3)
## On Instantiating the Algebraic Group Model from Falsifiable Assumptions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#on-instantiating-the-algebraic-group-model-from-falsifiable-assumptions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#on-instantiating-the-algebraic-group-model-from-falsifiable-assumptions)**
### 作者
* Thomas Agrikola, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Dennis Hofheinz, ETH Zürich, Zürich, Switzerland
* Julia Kastner, ETH Zürich, Zürich, Switzerland
### 摘要
> 我们提供了代数群模型（AGM，[Fuchsbauer，Kiltz，Loss，CRYPTO2018]）的(松弛)标准模型实现。具体来说，我们展示了使用我们的群的每个算法是代数的，因此“必须知道”表示其输出群元素的输入群元素的算法。这里，“必须知道”是指一个合适的提取器可以有效地提取这样的表示。我们强调，我们的实现仅依赖于标准模型中可证伪

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_4](https://doi.org/10.1007/978-3-030-45724-2_4)
## Resource-Restricted Cryptography: Revisiting MPC Bounds in the Proof-of-Work Era.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#resource-restricted-cryptography-revisiting-mpc-bounds-in-the-proof-of-work-era) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#resource-restricted-cryptography-revisiting-mpc-bounds-in-the-proof-of-work-era)**
### 作者
* Juan Garay, Department of Computer Science and Engineering, Texas A&M University, College Station, USA
* Aggelos Kiayias, School of Informatics, University of Edinburgh & IOHK, Edinburgh, UK
* Vassilis Zikas, School of Informatics, University of Edinburgh & IOHK, Edinburgh, UK
* Rafail M. Ostrovsky, Department of Computer Science and Department of Mathematics, UCLA, Los Angeles, USA
* Giorgos Panagiotakos, School of Informatics, University of Edinburgh, Edinburgh, UK
### 摘要
> 传统的同步拜占庭协议(BA)和安全多方计算(MPC)的界限确定，在没有私有的相关随机性设置（如公钥基础设施）的情况下，协议可以容忍高达\(t < n/3\)的恶意参与方。基于工作证明（PoW）区块链的"中本特"共识的引入，提出了一个稍有不同风格的BA，表明即使多数参与方被腐败，只要大多数计算资源仍然掌握在诚实方手中，也是可以容忍的。这种对某些资源的诚实多数假设也被扩展到其他资源，如股份、空间等，基于此构建了实现中本特风格共识的区块链，在参与方恶意行为的数量方面违反了\(t<n/3\)的界限。上述情况引发了一个问题，即这种看似不匹配是由于目标和模型不同，还是资源限制范式可通用地用来规避n/3的下界。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_5](https://doi.org/10.1007/978-3-030-45724-2_5)
## Efficient Constructions for Almost-Everywhere Secure Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#efficient-constructions-for-almost-everywhere-secure-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#efficient-constructions-for-almost-everywhere-secure-computation)**
### 作者
* Siddhartha Jayanti, Massachusetts Institute of Technology (CSAIL MIT), Cambridge, USA
* Srinivasan Raghuraman, Massachusetts Institute of Technology (CSAIL MIT), Cambridge, USA
* Nikhil Vyas, Massachusetts Institute of Technology (CSAIL MIT), Cambridge, USA
### 摘要
> 我们研究几乎处处可靠的信息传输问题；这是设计稀疏连接网络的高效安全多方计算（MPC）协议的关键组成部分。目标是设计低度网络，即使有一小部分节点经历了拜占庭式腐败并且任意偏离分配的协议，也可以让大部分诚实节点之间能够可靠地通信。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_6](https://doi.org/10.1007/978-3-030-45724-2_6)
## The Price of Active Security in Cryptographic Protocols.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#the-price-of-active-security-in-cryptographic-protocols) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#the-price-of-active-security-in-cryptographic-protocols)**
### 作者
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Muthuramakrishnan Venkitasubramaniam, University of Rochester, Rochester, USA
* Mor Weiss, IDC Herzliya, Herzliya, Israel
### 摘要
> 我们在不忠实多数的情况下，为任意数量的参与方构建了第一个主动安全的多方计算（MPC）协议，对于任意域\(\mathbb{F}\)上的“被动-GMW”协议（Goldreich，Micali和Wigderson，STOC '87）存在固定的通信开销。我们的协议依赖于布尔设置中的被动实现的隐形传输（OT）和算术设置中的隐形线性函数评估（OLE）。以前，这样的协议只在足够大的域（Genkin等，STOC '14）或固定数量的参与方（Ishai等，CRYPTO '08）上已知。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_7](https://doi.org/10.1007/978-3-030-45724-2_7)
## Succinct Non-interactive Secure Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#succinct-non-interactive-secure-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#succinct-non-interactive-secure-computation)**
### 作者
* Andrew Morgan, Cornell University, Ithaca, USA
* Rafael Pass, Cornell Tech, New York City, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research, New York City, USA
### 摘要
> 我们提出了第一个对简洁非交互式安全的双方计算（SNISC）具有恶意安全性的协议：每个参与者仅发送一个长度与要计算函数的运行时间（基本独立）无关的消息。该协议不需要任何可信设置，满足超多项式时间模拟安全（SPS），并基于学习与错误（LWE）假设的（亚指数）安全性。我们不依赖SNARKs或“知识指数”类型的假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_8](https://doi.org/10.1007/978-3-030-45724-2_8)
## Finding Hash Collisions with Quantum Computers by Using Differential Trails with Smaller Probability than Birthday Bound.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#finding-hash-collisions-with-quantum-computers-by-using-differential-trails-with-smaller-probability-than-birthday-bound) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#finding-hash-collisions-with-quantum-computers-by-using-differential-trails-with-smaller-probability-than-birthday-bound)**
### 作者
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Yu Sasaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
### 摘要
> 在这篇论文中，我们着重研究了具体哈希函数上的专用量子碰撞攻击问题，这一问题迄今为止还没有得到很多关注。在经典环境中，寻找一个n位哈希函数的碰撞所需要的一般复杂度是\(O(2^{n/2})\)，因此基于差分密码分析的经典碰撞攻击（比如回弹攻击）会生成高于\(2^{-n/2}\)概率的差分路径。同样地，在类似情况下，通用量子算法（如BHT算法）会以复杂度\(O(2^{n/3})\)找到碰撞。利用量子算法，一对满足差分路径且概率为p的信息可以以复杂度\(p^{-1/2}\)生成。因此，在量子环境下，有一些差分路径的概率高达\(2^{-2n/3}\)，这在经典环境下无法利用，但却可以用于发动量子碰撞攻击。特别地，受到攻击的轮数可能会增加。在本文中，我们攻击了两个国际哈希函数标准：AES-MMO和Whirlpool。对于AES-MMO，我们提出了一个7轮差分路径，其概率为\(2^{-80}\)，并使用其来发动一个带有量子版本的回弹攻击来寻找碰撞，而在经典环境中只能攻击6轮。对于Whirlpool，我们则基于一个6轮差分路径（从经典回弹选别器中获得，并具有高于生日界限的复杂度）发动了一个碰撞攻击。这比5轮的最佳经典攻击提升了1个轮数。我们还展示了这些路径在我们的方法中是最优的。我们的研究结果有两个重要意义。首先，似乎存在一种普遍认为，在经典安全哈希函数面前，它们将对抗量子对手的攻击仍然安全。实际上，NIST后量子竞争中的几个第二轮候选者使用现有哈希函数（如SHA-3）作为量子安全函数。我们的研究结果反驳了这种普遍观点。其次，我们的观察表明，差分路径搜索不应该仅停留在概率\(2^{-n/2}\)上，而应该考虑高达\(2^{-2n/3}\)的情况。因此，值得重新审视先前的差分路径搜索活动。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_9](https://doi.org/10.1007/978-3-030-45724-2_9)
## Implementing Grover Oracles for Quantum Key Search on AES and LowMC.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#implementing-grover-oracles-for-quantum-key-search-on-aes-and-lowmc) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#implementing-grover-oracles-for-quantum-key-search-on-aes-and-lowmc)**
### 作者
* Samuel Jaques, Department of Materials, University of Oxford, Oxford, UK
* Michael Naehrig, Microsoft Research, Redmond, WA, USA
* Martin Roetteler, Microsoft Quantum, Redmond, WA, USA
* Fernando Virdia, Information Security Group, Royal Holloway, University of London, Egham, UK
### 摘要
> Grover的搜索算法通过搜索与少量明文-密文对匹配的密钥，提供了对分块密码的量子攻击。该攻击使用\(O(\sqrt{N})\)次密码调用来搜索一个大小为N的密钥空间。在先前的AES特定案例研究中，通过分析密码的量子电路并着重于最小化量子比特的数量，得出了完全门成本。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_10](https://doi.org/10.1007/978-3-030-45724-2_10)
## Optimal Merging in Quantum k-xor and k-xor-sum Algorithms.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#optimal-merging-in-quantum-k-xor-and-k-xor-sum-algorithms) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#optimal-merging-in-quantum-k-xor-and-k-xor-sum-algorithms)**
### 作者
* María Naya-Plasencia, Inria, Paris, France
* André Schrottenloher, Inria, Paris, France
### 摘要
> **你是一位研究人员，接下来我将为你翻译一篇研究论文的摘要。**
> 
> k-xor或广义生日问题旨在找出在给定k个位串列表中，其中有一个k元组的异或结果等于0。如果这些列表是无界的，那么自Wagner在CRYPTO 2002年的论文以来，最佳经典（指数级）时间复杂度仍然适用。如果这些列表是有界的（相同大小），并且只有一个解，Dinur等人于CRYPTO 2012年提出的剖析算法可以提高内存使用效率，超越简单的meet-in-the-middle算法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_11](https://doi.org/10.1007/978-3-030-45724-2_11)
## On the Quantum Complexity of the Continuous Hidden Subgroup Problem.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#on-the-quantum-complexity-of-the-continuous-hidden-subgroup-problem) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#on-the-quantum-complexity-of-the-continuous-hidden-subgroup-problem)**
### 作者
* Koen de Boer, Cryptology Group, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Léo Ducas, Cryptology Group, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Cryptology Group, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, The Netherlands
### 摘要
> 隐藏子群问题（HSP）旨在捕捉到所有可以通过Shor的著名算法的蓝图在量子多项式时间内解决的问题。对于各种可交换群的这些问题的成功解决可以有效地执行数论任务，如因数分解或找到离散对数。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_12](https://doi.org/10.1007/978-3-030-45724-2_12)
## Formalizing Data Deletion in the Context of the Right to Be Forgotten.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#formalizing-data-deletion-in-the-context-of-the-right-to-be-forgotten) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#formalizing-data-deletion-in-the-context-of-the-right-to-be-forgotten)**
### 作者
* Sanjam Garg, Department of Electrical Engineering and Computer Sciences, University of California Berkeley, Berkeley, USA
* Prashant Nalini Vasudevan, Department of Electrical Engineering and Computer Sciences, University of California Berkeley, Berkeley, USA
* Shafi Goldwasser, Simons Institute for the Theory of Computing, University of California Berkeley, Berkeley, USA
### 摘要
> 作为一名研究人员，接下来您将收到一篇研究论文的摘要。请将其翻译成简体中文。
> 
> 个人请求被存储其个人数据的机构删除这些数据的权利，即所谓的被遗忘权，在世界上包括欧洲联盟、阿根廷和加利福尼亚等多个司法管辖区明确获得了承认、立法和实施。然而，围绕这项权利的讨论大部分仅提供对其履行的直观概念 - 对于这种个人数据被删除意味着什么的理解。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_13](https://doi.org/10.1007/978-3-030-45724-2_13)
## OptORAMa: Optimal Oblivious RAM.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#optorama-optimal-oblivious-ram) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#optorama-optimal-oblivious-ram)**
### 作者
* Gilad Asharov, Bar-Ilan University, 52900, Ramat Gan, Israel
* Ilan Komargodski, NTT Research, Palo Alto, CA, 94303, USA
* Wei-Kai Lin, Cornell University, Ithaca, NY, 14850, USA
* Elaine Shi, Cornell University, Ithaca, NY, 14850, USA
* Kartik Nayak, Duke University, Durham, NC, 27708, USA
* Enoch Peserico, Università degli Studi di Padova, Padova, PD, Italy
### 摘要
> 混淆式随机访问内存（ORAM）最早由Goldreich和Ostrovsky的开创性工作（STOC’87和J. ACM’96）引入，是一种可证明混淆程序访问模式的技术，使访问模式不泄漏有关程序秘密输入的任何信息。将一般程序编译为相应的混淆版本，众所周知，必须进行\(\varOmega (\log N)\)的平摊增长，其中N是逻辑内存的大小。这在Goldreich和Ostrovsky最初的ORAM工作中已经证明对于统计安全性和某种受限模型（所谓的球与箱模型），并且最近由Larsen和Nielsen（CRYPTO’18）证明了对于计算安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_14](https://doi.org/10.1007/978-3-030-45724-2_14)
## On the Streaming Indistinguishability of a Random Permutation and a Random Function.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#on-the-streaming-indistinguishability-of-a-random-permutation-and-a-random-function) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#on-the-streaming-indistinguishability-of-a-random-permutation-and-a-random-function)**
### 作者
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
### 摘要
> 对手使用S位内存获得了一个由Q个元素组成的流，这些元素从集合\(\{1,2,\ldots ,N\}\)中均匀地抽取，可以选择有放回或无放回地采样。这相当于使用随机函数或随机排列来抽取Q个元素。对手的目标是区分这两种情况。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_15](https://doi.org/10.1007/978-3-030-45724-2_15)
## He Gives C-Sieves on the CSIDH.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#he-gives-c-sieves-on-the-csidh) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#he-gives-c-sieves-on-the-csidh)**
### 作者
* Chris Peikert, University of Michigan, Ann Arbor, USA
### 摘要
> 最近，Castryck、Lange、Martindale、Panny和Renes提出了CSIDH（发音为“海滩”），作为候选的“交换群作用”之后的量子后密码学。它引起了广泛的关注和兴趣，部分原因是它能够以较小的通信实现非交互式Diffie-Hellman式密钥交换。随后，CSIDH也被用作数字签名的基础。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_16](https://doi.org/10.1007/978-3-030-45724-2_16)
## Quantum Security Analysis of CSIDH.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#quantum-security-analysis-of-csidh) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#quantum-security-analysis-of-csidh)**
### 作者
* Xavier Bonnetain, Sorbonne Université, Collège Doctoral, 75005, Paris, France
* Xavier Bonnetain, Inria, Paris, France
* André Schrottenloher, Inria, Paris, France
### 摘要
> CSIDH 是基于超奇异椭圆曲线同构的后量子非交互密钥交换的最新提议。它在设计上与Couveignes、Rostovtsev和Stolbunov之前的方案相似，但旨在在效率和安全性之间实现更好的平衡。在这个提议中，作者建议具体的参数，以满足某些期望的量子安全级别。这些参数基于使用Childs、Jao和Soukharev的量子次指数算法恢复两个椭圆曲线之间的隐藏同构的难度。这个算法结合了两个基本组件：首先，一个量子算法用于恢复交换群中的隐藏偏移。其次，一个在给定曲线产生的所有同构的叠加计算，该算法称之为黑盒。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_17](https://doi.org/10.1007/978-3-030-45724-2_17)
## Rational Isogenies from Irrational Endomorphisms.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#rational-isogenies-from-irrational-endomorphisms) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#rational-isogenies-from-irrational-endomorphisms)**
### 作者
* Wouter Castryck, imec-COSIC, KU Leuven, Leuven, Belgium
* Frederik Vercauteren, imec-COSIC, KU Leuven, Leuven, Belgium
* Lorenz Panny, Department of Mathematics and Computer Science, Technische Universiteit Eindhoven, Eindhoven, The Netherlands
### 摘要
> 在本文中，我们介绍了一种多项式时间算法，用于在具有公共\(\mathbb {F}_p\)-同态环\(\mathcal {O}\)的两个超奇异椭圆曲线之间计算一个连接的\(\mathcal {O}\)-理想，给定它们完整同态环的描述。该算法将CSIDH加密系统的安全性降低到计算超奇异椭圆曲线的同态环的问题上。SIDH的类似约化在Asiacrypt 2016中出现，但依赖于完全不同的技术。此外，我们还证明了使用复数乘法方法构造的任何超奇异椭圆曲线都可以通过明确导出到已知基准曲线的路径，准确地定位在超奇异同构图中。该结果禁止将这样的曲线用作散列函数进入超奇异同构图的构建块。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_18](https://doi.org/10.1007/978-3-030-45724-2_18)
## Hardness of LWE on General Entropic Distributions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#hardness-of-lwe-on-general-entropic-distributions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#hardness-of-lwe-on-general-entropic-distributions)**
### 作者
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 学习误差（LWE）问题的困难性已经成为密码学领域的基石。在许多应用中，所谓的“LWE秘密”并不是均匀采样的，而是来自具有一定最小熵的分布。这个变种被称为“熵 LWE”，已经在一些研究中进行了探讨，最早由Goldwasser等人在2010年的ICS会议上提出。然而，到目前为止，我们只知道如何证明支持小半径球内秘密分布的熵 LWE 的困难性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_19](https://doi.org/10.1007/978-3-030-45724-2_19)
## Key-Homomorphic Pseudorandom Functions from LWE with Small Modulus.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#key-homomorphic-pseudorandom-functions-from-lwe-with-small-modulus) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#key-homomorphic-pseudorandom-functions-from-lwe-with-small-modulus)**
### 作者
* Sam Kim, Stanford University, Stanford, USA
### 摘要
> 伪随机函数（PRFs）是密码学中的基本对象，在对称密钥密码学中起着重要作用。虽然PRFs可以从单向函数进行通用构造，但这些黑盒构造通常效率低下，需要深入电路进行评估，相对而言直接PRF构造更依赖于特定的代数假设。通过格子，可以直接使用学习误差（LWE）假设（或其环变种）以Banerjee、Peikert和Rosen的结果（Eurocrypt 2012）及其后续工作来构造PRFs。然而，这一工作线上所有现有的PRFs都依赖于与安全参数超多项式相关的LWE问题的难度。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_20](https://doi.org/10.1007/978-3-030-45724-2_20)
## Integral Matrix Gram Root and Lattice Gaussian Sampling Without Floats.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#integral-matrix-gram-root-and-lattice-gaussian-sampling-without-floats) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#integral-matrix-gram-root-and-lattice-gaussian-sampling-without-floats)**
### 作者
* Léo Ducas, Centrum Wiskunde en Informatica, Amsterdam, The Netherlands
* Steven Galbraith, Mathematics Department, University of Auckland, Auckland, New Zealand
* Thomas Prest, PQShield Ltd, Oxford, UK
* Yang Yu, Univ Rennes, CNRS, IRISA, Rennes, France
### 摘要
> 许多先进的基于格的加密系统需要从高斯分布中采样格点。对于这个任务的一个挑战是，目前所有的算法都在某个时刻使用浮点算术（FPA），这在实践中有许多缺点：需要进行数值稳定性分析，需要额外存储高精度计算所需空间，需要懒惰/回溯技术提高效率，并且可能遭受弱决定性问题，完全破坏某些方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_21](https://doi.org/10.1007/978-3-030-45724-2_21)
## TNT: How to Tweak a Block Cipher.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#tnt-how-to-tweak-a-block-cipher) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#tnt-how-to-tweak-a-block-cipher)**
### 作者
* Zhenzhen Bao, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Jian Guo, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Chun Guo, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, China
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Ling Song, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Ling Song, Jinan University, Guangzhou, China
### 摘要
> 在本论文中，我们提出了Tweak-aNd-Tweak（简称\(\mathsf{TNT}\)）模式，它通过三个独立的分组密码构建一个可调整的分组密码。\(\mathsf{TNT}\)通过将未经修改的调整因子与两个分组密码的内部状态进行简单的异或运算来处理调整输入。由于其简单性，\(\mathsf{TNT}\)也可以被看作是通过将分组密码分割成三块，并仅在两个切点处添加调整因子的方式将分组密码转换为可调整的分组密码。在假设三块是独立安全的n位密钥伪随机函数（SPRP）的前提下，\(\mathsf{TNT}\)被证明具有超过生日界限 \(2^{2n/3}\) 的安全性。它明显对软件和硬件实施都带来最小的额外开销。为了证明这一点，我们提出了一种名为TNT-AES的实例，其中使用AES的6轮作为底层分组密码。除了\(\mathsf{TNT}\)模式固有的安全界限和与调整因子无关的重新密钥特性外，TNT-AES的性能与通过模块化方法设计的所有现有可调整的分组密码相当。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_22](https://doi.org/10.1007/978-3-030-45724-2_22)
## On a Generalization of Substitution-Permutation Networks: The HADES Design Strategy.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#on-a-generalization-of-substitution-permutation-networks-the-hades-design-strategy) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#on-a-generalization-of-substitution-permutation-networks-the-hades-design-strategy)**
### 作者
* Lorenzo Grassi, IAIK, Graz University of Technology, Graz, Austria
* Reinhard Lüftenegger, IAIK, Graz University of Technology, Graz, Austria
* Christian Rechberger, IAIK, Graz University of Technology, Graz, Austria
* Markus Schofnegger, IAIK, Graz University of Technology, Graz, Austria
* Dragos Rotaru, University of Bristol, Bristol, UK
* Lorenzo Grassi, Know-Center, TU Graz, Graz, Austria
* Dragos Rotaru, imec-Cosic, Department of Electrical Engineering, KU Leuven, Leuven, Belgium
### 摘要
> 你好！以下是您要求的研究论文摘要的简体中文翻译：
> 
> 密钥和非密钥密码置换经常迭代简单的轮函数。自1990年代中期以来，替代-置换网络 (SPNs) 是一种流行的方法。在设计这些轮函数的新方向之一是将替代（S-Box）层从完整层减少为部分层，并均匀分布在所有轮数上。LowMC 和 Zorro 就是采用这种方法的示例。
> 
> 希望对您有所帮助！如果您有任何其他问题，请随时告诉我。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_23](https://doi.org/10.1007/978-3-030-45724-2_23)
## Lightweight Authenticated Encryption Mode Suitable for Threshold Implementation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#lightweight-authenticated-encryption-mode-suitable-for-threshold-implementation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#lightweight-authenticated-encryption-mode-suitable-for-threshold-implementation)**
### 作者
* Yusuke Naito, Mitsubishi Electric Corporation, Kamakura, Kanagawa, Japan
* Yu Sasaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takeshi Sugawara, The University of Electro-Communications, Tokyo, Japan
### 摘要
> 本文提出了基于可调整的分组密码（TBC）的模式\(\mathsf{PFB\_Plus}\)和\(\mathsf{PFB}\omega\)，这些模式在阈值实现（TI）中具有高效性。假设t是目标函数的代数度，例如，\(t=1\)（对于线性函数）或者\(t>1\)（对于非线性函数）。第d阶的TI将内部状态编码为\(d t + 1\)份共享。因此，面积大小与份额的数量成正比增加。这意味着在TI中，TBC基于的模式可以比基于分组密码（BC）的模式更小，因为TBC需要s位块来确保s位安全性，例如PFB和Romulus，而BC需要2s位块。然而，即使使用这些TBC基于的模式，我们最多只能在\(t=2\)和一阶TI（\(d=1\)）下达到3份s位状态的最小值。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_24](https://doi.org/10.1007/978-3-030-45724-2_24)
## PSI from PaXoS: Fast, Malicious Private Set Intersection.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#psi-from-paxos-fast-malicious-private-set-intersection) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#psi-from-paxos-fast-malicious-private-set-intersection)**
### 作者
* Benny Pinkas, Bar-Ilan University, Ramat Gan, Israel
* Mike Rosulek, Oregon State University, Corvallis, USA
* Ni Trieu, Oregon State University, Corvallis, USA
* Avishay Yanai, VMware Research, Herzliya, Israel
### 摘要
> 我们提出了一个双方私有集合交集（PSI）协议，它能够对恶意参与者提供安全保障，同时速度几乎接近于Kolesnikov等人（CCS 2016）所知的最快良性PSI协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_25](https://doi.org/10.1007/978-3-030-45724-2_25)
## Two-Round Oblivious Transfer from CDH or LPN.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#two-round-oblivious-transfer-from-cdh-or-lpn) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#two-round-oblivious-transfer-from-cdh-or-lpn)**
### 作者
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Sanjam Garg, UC Berkeley, Berkeley, USA
* Mohammad Hajiabadi, UC Berkeley, Berkeley, USA
* Daniel Masny, VISA Research, Palo Alto, USA
* Daniel Wichs, Northeastern University, Boston, USA
### 摘要
> 我们提出一种构建恶意安全的两轮遗忘传输（OT）的新通用方法。具体地，我们提供了一系列通用的转换步骤，将基本概念的两轮OT，也称为初等OT，升级为UC安全的OT。然后我们给出了在计算Diffie-Hellman（CDH）假设或学习带噪声的奇偶校验（LPN）假设下的初等OT的简单构造方法，从而得到了这些假设下的第一个恶意（UC安全的）两轮OT的构造方法。由于两轮OT对于恶意环境下的两轮双方和多方计算是完备的，因此我们还实现了在这些假设下后者的第一个构造方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_26](https://doi.org/10.1007/978-3-030-45724-2_26)
## Private Aggregation from Fewer Anonymous Messages.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#private-aggregation-from-fewer-anonymous-messages) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#private-aggregation-from-fewer-anonymous-messages)**
### 作者
* Badih Ghazi, Google Research, Mountain View, CA, 94043, USA
* Pasin Manurangsi, Google Research, Mountain View, CA, 94043, USA
* Rasmus Pagh, Google Research, Mountain View, CA, 94043, USA
* Ameya Velingker, Google Research, Mountain View, CA, 94043, USA
* Rasmus Pagh, IT University of Copenhagen, Copenhagen, Denmark
### 摘要
> 考虑这样一个设置，其中有 n 个参与方，每个参与方在有限域 \(\mathbb {F}_q\) 中都被赋予一个元素 \(x_i\)，目标是以安全的方式并尽可能少的通信来计算和 \(\sum _i x_i\)。我们在 Ishai 等人的匿名模型（FOCS 2006）中研究了这个问题，在该模型中，每个参与方可以在一个不安全的信道上广播匿名消息。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_27](https://doi.org/10.1007/978-3-030-45724-2_27)
## Broadcast-Optimal Two-Round MPC.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2020-2].md#broadcast-optimal-two-round-mpc) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2020-2].md#broadcast-optimal-two-round-mpc)**
### 作者
* Ran Cohen, Northeastern University, Boston, USA
* Juan Garay, Texas A&M University, College Station, USA
* Vassilis Zikas, School of Informatics, University of Edinburgh & IOHK, Edinburgh, UK
### 摘要
> 密码学界为了最小化安全多方计算（MPC）的轮复杂度进行了密集的努力，最近从最小化的假设中得出了最优的两轮协议。然而，大部分提出的解决方案在每一轮都使用了广播通道，目前尚不清楚广播通道能否以保持轮数的方式被标准的点对点通信替代，如果能替代的话，这将对最终的安全性造成何种代价。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-45724-2_28](https://doi.org/10.1007/978-3-030-45724-2_28)
