# Eurocrypt[2024-4]
## The NISQ Complexity of Collision Finding.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#the-nisq-complexity-of-collision-finding) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#the-nisq-complexity-of-collision-finding)**
### 作者
* Yassine Hamoudi, Université de Bordeaux, CNRS, LaBRI, Talence, France
* Qipeng Liu, University of California at San Diego, La Jolla, USA
* Makrand Sinha, University of Illinois, Urbana-Champaign, Champaign, USA
### 摘要
> 抗碰撞哈希是现代密码学中的基本原语，确保没有高效的方法找到产生相同哈希值的不同输入。这个特性支撑了各种密码应用的安全性，因此了解它的复杂性非常重要。在经典环境下，这个问题的复杂性已经被深入理解，需要\(\varTheta (N^{1/2})\)查询才能找到碰撞。然而，量子计算机的出现引入了新的挑战，因为量子对手——具备量子查询能力——可以更有效地找到碰撞。Brassard、Høyer和Tapp [15]以及Aaronson和Shi [3]证明了全规模量子对手需要\(\varTheta (N^{1/3})\)查询才能找到碰撞，这促使我们需要更长的哈希输出，这会影响安全所需的密钥长度的效率。
> 
> 本文研究了噪声中间规模量子（NISQ）时代中量子攻击的影响。在本文中，我们研究了三种不同的NISQ算法模型，并为它们都取得了严格的界限：
> 
> 1. 一种混合算法，可以进行自适应量子或经典查询，但量子查询预算有限，或者
> 
> 2. 一种具有访问噪声oracle的量子算法，受限于退相干或去极化通道，或者
> 
> 3. 一种混合算法，具有其最大量子深度的上限；即通过低深度量子电路协助的经典算法。
> 
> 事实上，我们的结果处理了NISQ和全规模量子计算机之间的所有区域。以前，这些模型的预像搜索问题已经有了结果（由Sun和Zheng [50]、Rosmanis [45, 46]、Chen、Cotler、黄和李[17]），但是对于碰撞查找问题没有任何研究。
> 
> 除了我们的主要结果外，我们还开发了一个信息理论框架来记录量子-经典算法的查询记录。该框架的主要特点是它允许我们在两个不兼容的基础上记录查询——标准基础下的经典查询和在傅里叶基础下的量子查询。我们将框架称为混合压缩oracle，因为它自然地插值了经典记录查询和记录量子查询的压缩oracle框架。我们通过给出NISQ预像搜索的最优下界的简单证明，以及证明NISQ碰撞查找的最优下界，来展示其适用性。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_1](https://doi.org/10.1007/978-3-031-58737-5_1)
## Non-malleable Codes with Optimal Rate for Poly-Size Circuits.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#non-malleable-codes-with-optimal-rate-for-poly-size-circuits) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#non-malleable-codes-with-optimal-rate-for-poly-size-circuits)**
### 作者
* Marshall Ball, New York University, New York, USA
* Ronen Shaltiel, University of Haifa, Haifa, Israel
* Jad Silbak, Northeastern University, Boston, USA
### 摘要
> 我们给出了一种明确的构造，用于多项式级别电路的篡改类别的非可塑编码，速率为\(1-o(1)\)。这个速率是最优的，并且改善了之前Ball，Dachman-Soled和Loss [9]的明确构造，该构造实现的速率小于\(\frac{1}{n}\)。我们的编码基于Ball，Dachman-Soled和Loss使用的相同难度假设，即存在问题\(\text {E}=\text {DTIME}(2^{O(n)})\)，需要大小为\(2^{\varOmega (n)}\)的非确定电路。这是一种标准的复杂性理论假设，被用于复杂性理论和密码学中的许多文章，并可以看作广泛认为的假设的缩放，即\(\text {EXP} \not \subseteq \text {NP}\)。我们的结果与Ball，Dachman-Soled和Loss的结果不可比，因为我们仅实现计算安全（而不是统计安全）。[12，26]获得了计算安全的非可塑代码（比我们的误差更小），在强密码学假设下。我们表明，如果一定的伪随机对象的明确构造可以得到改进，我们的方法可能会产生统计安全。
> 
> 通过将我们的新型非可塑代码与标准的（信息理论的）纠错代码（可以从p个错误中恢复）合成，我们实现了最佳的两种世界。即，我们实现了恢复p比例的错误并具有与已知的最佳显式信息理论代码相同的速率的显式代码，同时也是多项式级别电路的非可塑的。
> 
> 此外，如果我们将注意力集中在由多项式级别电路引入的错误上，我们可以实现速率为\(1-H(p)\)的最佳两个世界的代码。这优于标准的（信息理论的）纠错代码实现的速率，并且这个结果是通过将我们的新型非可塑代码与Shaltiel和Silbak [55]的最近代码组合而获得的。
> 
> 我们的技术结合了非可塑代码和伪随机性的思想。我们展示了如何将低速率的“小集合非可塑代码”（这是由Shaltiel和Silbak [54]引入的具有不同安全概念的非可塑代码变体）编译成（标准的）高速率非可塑代码。使用小集合不可塑代码（以及种子扩展PRG）可以避免分析标准不可塑代码时遇到的困难，并允许我们使用简单的构造。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_2](https://doi.org/10.1007/978-3-031-58737-5_2)
## Approximate Lower Bound Arguments.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#approximate-lower-bound-arguments) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#approximate-lower-bound-arguments)**
### 作者
* Pyrros Chaidos, National and Kapodistrian University of Athens, Athens, Greece
* Aggelos Kiayias, University of Edinburgh, Edinburgh, UK
* Leonid Reyzin, Boston University, Boston, USA
* Anatoliy Zinovyev, Boston University, Boston, USA
* Pyrros Chaidos, IOG, Athens, Greece
* Aggelos Kiayias, IOG, Edinburgh, UK
### 摘要
> 假设一个证明者拥有大量有价值证据，希望能通过展示其中一小部分证据快速地说服验证者。我们定义了近似下界论证（Approximate Lower Bound Argument，ALBA），使得证明者能够简明地证明对谓词的大量元素的知识（或者更一般地，当谓词被概括为权值函数时，知识的元素权值）。该论证是近似的，因为证明者实际知道和验证者确信证明者知道之间存在着一小差距。这个差距使得方案非常高效。
> 
> 我们在随机预言器和均匀随机串模型中提出了ALBA的非交互式构造，并展示了我们的证明大小几乎是最优的。我们还展示了当证据分散在多个共同工作的证明者之间时，我们的构造如何特别通信高效，这在ALBA应用于去中心化设置时非常重要。
> 
> 我们展示了ALBA的两个非常不同的应用：用于大规模去中心化签名和用于一般目的简明证明系统（SNARKs）的实现普遍可组合性。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_3](https://doi.org/10.1007/978-3-031-58737-5_3)
## Software with Certified Deletion.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#software-with-certified-deletion) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#software-with-certified-deletion)**
### 作者
* James Bartusek, UC Berkeley, Berkeley, CA, USA
* Bhaskar Roberts, UC Berkeley, Berkeley, CA, USA
* Vipul Goyal, CMU, Pittsburgh, PA, USA
* Justin Raizes, CMU, Pittsburgh, PA, USA
* Vipul Goyal, NTT Research, Sunnyvale, CA, USA
* Dakshita Khurana, UIUC, Champaign, IL, USA
* Giulio Malavolta, Bocconi University, Milan, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 能否证明执行计算机程序后删除它？虽然使用经典信息显然不可能完成这项任务，但量子力学的定律可能会为此问题提供解决方案。在这项工作中，我们提出了一种新的方法来回答这个问题，使用量子信息。在交互设置中，我们提供了第一个完全安全的具有认证删除的盲目委托解决方案，假设学习带误差（LWE）问题的后量子难度。在非交互设置中，我们提出了一种具有认证删除的模糊化构造，假设后量子iO和单向函数。
> 
> 我们的主要技术贡献是子空间余域状态的新删除定理[Vidick和Zhang，EUROCRYPT’21，Coladangelo等人，CRYPTO’21]，这使得通用编译器可以向各种加密基元添加经过认证的删除保证。除了我们的主要结果外，这还使我们可以获得许多新的基元，例如具有认证删除的功能加密和针对一类有趣程序的安全软件租赁。事实上，我们首次能够实现更强的安全软件租赁概念，即即使不诚实的评估器也不能在返回后评估程序。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_4](https://doi.org/10.1007/978-3-031-58737-5_4)
## Public-Coin, Complexity-Preserving, Succinct Arguments of Knowledge for NP from Collision-Resistance.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#public-coin-complexity-preserving-succinct-arguments-of-knowledge-for-np-from-collision-resistance) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#public-coin-complexity-preserving-succinct-arguments-of-knowledge-for-np-from-collision-resistance)**
### 作者
* Cody Freitag, Northeastern University, Boston, USA
* Omer Paneth, Tel Aviv University, Tel Aviv, Israel
* Rafael Pass, Tel Aviv University & Cornell Tech, Tel Aviv, Israel
### 摘要
> 简洁的论证允许一个强大（但多项式时间）的证明者以极少的通信说服一个弱验证者某个NP语句的有效性。部署这种证明的一个主要障碍是与待证明语句的复杂性相比，证明者的繁重开销。在这项工作中，我们专注于保留复杂性的论证，即证明一个非确定性时间t和空间s的RAM计算需要时间\(\tilde{O}(t)\)和空间\(\tilde{O}(s)\)。
> 
> 目前，所有已知的保留复杂性的论证要么是私有硬币，依赖于非标准假设，要么只提供弱的简洁性。在这项工作中，我们仅基于抗碰撞哈希函数构建了保留复杂性的简洁论证，从而与Kilian（STOC’92）的经典简洁论证相匹配。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_5](https://doi.org/10.1007/978-3-031-58737-5_5)
## Unbiasable Verifiable Random Functions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#unbiasable-verifiable-random-functions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#unbiasable-verifiable-random-functions)**
### 作者
* Emanuele Giunta, Web3 Foundation, Zug, Switzerland
* Alistair Stewart, Web3 Foundation, Zug, Switzerland
* Emanuele Giunta, IMDEA Software Institute, Madrid, Spain
* Emanuele Giunta, Universidad Politecnica de Madrid, Madrid, Spain
### 摘要
> 可验证随机函数(VRFs)由于在积分型权益证明(PoS)区块链中的应用，对于秘密领导者选举协议具有关键作用。然而, Goldreich、Goldwasser和Micali的原始定义本身对于这些应用不足。主要问题是对手可能使用偏斜输出分布制作VRF密钥对，使他们不公平地增加获胜机会。
> 
> 为了解决这个问题，David, Gaži, Kiayias和Russel在通用可组合框架中提出了更强的定义(2017/573)，而Esgin等人在FC'21上提出了更弱的游戏理论定义。然而，他们提出的概念存在一些限制。前者似乎过于强大，似乎无法在没有可编程随机预言机的情况下实现。后者不足以证明基于VRF的秘密领导者选举方案的安全性。
> 
> 本工作通过提出一种我们称之为无偏差性的新的VRF安全属性来弥合上述差距。一方面，我们的概念足以暗示VRF-based leader elections协议的公平性。另一方面，我们在平面模型（没有CRS）中提供了一个高效的编译器，将任何VRF转换为标准假设下的无偏差性。此外，我们展示了在ROM中的流传的VRF构造达到了我们的概念，而不需要编写预言机。作为一个小贡献，我们还提供了一个通用且高效的1到1 VRF的认证构造，以从任何VRF构造中获得认证。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_6](https://doi.org/10.1007/978-3-031-58737-5_6)
## Monotone-Policy Aggregate Signatures.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#monotone-policy-aggregate-signatures) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#monotone-policy-aggregate-signatures)**
### 作者
* Maya Farber Brodsky, Tel Aviv University, Tel Aviv, Israel
* Omer Paneth, Tel Aviv University, Tel Aviv, Israel
* Arka Rai Choudhuri, NTT Research, Sunnyvale, USA
* Abhishek Jain, NTT Research, Sunnyvale, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
### 摘要
> “统计签名”的概念允许将来自不同方的签名组合成一个简短的证书，以证明所有方都签署了一条消息。在这项工作中，我们提升了这个概念，以捕捉不同、更具表现力的签署政策。例如，我们可以证明某条消息是由（加权）签署者的门槛签署的。
> 
> 我们提出了基于标准多项式时间密码学假设的单调政策的统计签名的第一种构造。我们方案中的统计签名是简洁的，即其大小与签署者的数量无关。此外，如果所有方都签署相同的消息（或者消息具有简洁的表示），验证也是简洁的。而之前的所有工作都要求各方之间的互动或者非标准假设（暗示对NP的SNARK）。
> 
> 我们的签名方案基于单调政策的非交互式批次证据（BARGs）[Brakerski-Brodsky-Kalai-Lombardi-Paneth, Crypto’23]。与以前的构造相比，我们的BARGs满足一种新的适应性安全性概念，这对我们的应用十分重要。我们针对单调政策的新BARGs可以从标准BARGs和其他标准假设构建。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_7](https://doi.org/10.1007/978-3-031-58737-5_7)
## Leakage-Tolerant Circuits.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#leakage-tolerant-circuits) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#leakage-tolerant-circuits)**
### 作者
* Yuval Ishai, Technion, Haifa, Israel
* Yifan Song, Institute for Theoretical Computer Science, Institute for Interdisciplinary Information Sciences, Tsinghua University, Beijing, People’s Republic of China
* Yifan Song, Shanghai Qi Zhi Institute, Shanghai, People’s Republic of China
### 摘要
> 一个\(f:\{0,1\}^n\rightarrow \{0,1\}^m\)的抗泄漏电路是一个随机布尔电路C，将输入x的随机编码映射到\(y=f(x)\)的编码，以便对C的线路施加任何泄漏函数\(L\in \mathcal L\)都基本不会泄露关于x的信息。一个泄漏容忍电路实现了更强的保证，即使x和y没有受到任何编码的保护，L的输出也可以通过对x和y单独施加一些\(L'\in \mathcal L\)来模拟。因此，对于来自\(\mathcal L\)的泄漏，C与对于f的理想硬件实现一样安全。
> 
> 针对低复杂度类\(\mathcal L\)构建了抗泄漏电路，包括（长度为t的输出）\(\mathcal{AC}0\)函数、奇偶校验和具有有界通信复杂度的函数。相反，仅知道针对简单的探测泄漏情况构建了泄漏容忍电路，其中L输出C中t根导线的值。
> 
> 我们开始系统研究全局泄漏函数\(\mathcal L\)的泄漏容忍电路，得到以下主要结果。
> 
> 深度1泄漏的泄漏容忍电路。对于f的每个电路\(C_f\)都可以有效地转换为f的\(\mathcal L\)-容忍电路C，其中\(\mathcal L\)包括所有输出t奇偶校验或t析取（或连结）的泄漏函数L，可以输出任意数量的导线或其否定。在奇偶校验的情况下，我们的模拟器运行时间为\(2^{O(t)}\)。我们提供了部分证据表明这可能是固有的。
> 
> 应用于有状态泄漏抵抗电路。使用泄漏容忍电路的一般转换，我们首次构建了耐受连续奇偶校验泄漏的有状态t-泄漏抵抗电路，并且针对或/和泄漏的构建使电路大小与t的增长呈二次子线性关系。有趣的是，在奇偶校验的情况下，我们甚至可以获得\(\text{poly}(t)\)时间的模拟。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_8](https://doi.org/10.1007/978-3-031-58737-5_8)
## Pseudorandom Isometries.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#pseudorandom-isometries) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#pseudorandom-isometries)**
### 作者
* Prabhanjan Ananth, UCSB, Santa Barbara, USA
* Aditya Gulati, UCSB, Santa Barbara, USA
* Fatih Kaleoglu, UCSB, Santa Barbara, USA
* Yao-Ting Lin, UCSB, Santa Barbara, USA
### 摘要
> 我们介绍了一个新概念，称为\({\mathcal {Q}}\)安全伪随机等距映射（PRI）。伪随机等距映射是一种有效的量子电路，以等距方式将 n 量子比特状态映射到一个 \((n+m)\) 量子比特状态。在安全性方面，我们要求对于任意多项式 q 和 \(\rho \in {\mathcal {Q}}\)，\(\rho \) 上的 q 次 PRI 的输出应该在计算上无法区分于 \(\rho \) 上的 q 次 Haar 等距映射的输出。
> 
> 通过微调\({\mathcal {Q}}\)，我们恢复了许多现有的伪随机性概念。我们提出了 PRI 的构造，并假设后量子单向函数，证明了不同有趣设置下\({\mathcal {Q}}\)安全伪随机等距映射（PRI）的安全性。
> 
> 我们还展示了许多 PRIs 的密码应用，包括，用于量子伪随机性概念的长度扩展定理、用于量子状态的消息认证方案、多副本安全的公共和私人加密方案，以及简洁的量子承诺。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_9](https://doi.org/10.1007/978-3-031-58737-5_9)
## New Limits of Provable Security and Applications to ElGamal Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#new-limits-of-provable-security-and-applications-to-elgamal-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#new-limits-of-provable-security-and-applications-to-elgamal-encryption)**
### 作者
* Sven Schäge, Eindhoven University of Technology, Eindhoven, Netherlands
### 摘要
> 我们提供了新的结果，证明了ElGamal加密无法被证明为CCA1安全——这是密码学中一个长期存在的未解决问题。我们的结果基于一个非常广泛的、基于元组缩减的关于随机自加可重排证人关系不可能性的结果。我们开发的技术首次允许提供对非常弱的安全概念的不可能性结果，其中质疑者在安全游戏结束时输出新的质疑声明。这可以用于最终解决过去一直存在的加密类型定义中不可预测的问题。我们展示了我们的结果具有广泛的适用性，将几个已知的密码学设置视为随机自加可重排关系的实例。这些设置包括一般的半同态PKE和大量的认证同态单向双射。因此，我们也获得了对Paillier和Damgård-Jurik的PKE的IND-CCA1安全性以及许多一次反演的假设（如一次DLOG或一次RSA假设）的新的不可能性结果。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_10](https://doi.org/10.1007/978-3-031-58737-5_10)
## Constructing Leakage-Resilient Shamir's Secret Sharing: Over Composite Order Fields.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#constructing-leakage-resilient-shamirs-secret-sharing-over-composite-order-fields) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#constructing-leakage-resilient-shamirs-secret-sharing-over-composite-order-fields)**
### 作者
* Hemanta K. Maji, Department of Computer Science, Purdue University, West Lafayette, USA
* Xiuyu Ye, Department of Computer Science, Purdue University, West Lafayette, USA
* Hai H. Nguyen, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Anat Paskin-Cherniavsky, Department of Computer Science, Ariel University, Ariel, Israel
### 摘要
> 探测硬件中的物理位已经破坏了加密系统。本研究调查如何实现Shamir秘密共享，以使对其份额的物理探针揭示出的秘密信息在统计上是不显著的。在素数域上，Maji、Nguyen、Paskin-Cherniavsky、Suad和Wang (EUROCRYPT 2021) 证明，选择随机评估位置可以在高概率下实现这一目标。本研究将他们的随机构造扩展到复合序数域，特别是针对特征为2的领域。接下来，本研究提出了一种算法，以分类评估位置为某些特定情况下的安全或易受物理位探针攻击。
> 
> 我们随机构造的安全性分析是傅里叶分析的，而分类技术是组合的。我们的分析依赖于(1)对复合序数域上多项式方程组的同时零点数量进行约束的当代Bézout定理型代数复杂度结果和(2)一个适当的广义Vandermonde行列式的零点的特征。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_11](https://doi.org/10.1007/978-3-031-58737-5_11)
## Connecting Leakage-Resilient Secret Sharing to Practice: Scaling Trends and Physical Dependencies of Prime Field Masking.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#connecting-leakage-resilient-secret-sharing-to-practice-scaling-trends-and-physical-dependencies-of-prime-field-masking) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#connecting-leakage-resilient-secret-sharing-to-practice-scaling-trends-and-physical-dependencies-of-prime-field-masking)**
### 作者
* Sebastian Faust, Department of Computer Science, Technical University of Darmstadt, Darmstadt, Germany
* Elena Micheli, Department of Computer Science, Technical University of Darmstadt, Darmstadt, Germany
* Maximilian Orlt, Department of Computer Science, Technical University of Darmstadt, Darmstadt, Germany
* Loïc Masure, LIRMM, Univ. Montpellier, CNRS, Montpellier, France
* François-Xavier Standaert, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
### 摘要
> 对称密码在（小型或中型）素域中的操作已被证明是维持安全性对抗低噪声（或甚至无噪声）副信道泄漏的有前途的候选项。为了设计最佳平衡物理安全和实施效率的素数密码，理解副信道安全性如何随着场大小的演化（即缩放趋势）是必不可少的。不幸的是，也已经表明这种缩放趋势取决于泄漏函数，并且无法通过用于分析含有噪声的布尔蒙版的标准指标来解释。因此，在这项工作中，我们开始对两个经典泄漏函数进行素域蒙版的正式研究：位泄漏和海明重量泄漏。通过利用泄漏耐用秘密共享文献中的理论结果，我们正式解释了为什么（1）位泄漏对应于最坏情况，不鼓励在较大的场中操作，和（2）关于海明重量泄漏则存在相反的结论，其中增加素数域模数p可以促进安全放大，这在股票数量呈指数增长时体现出来，其中\(\log (p)\)被视为类似于布尔蒙版中的噪声方差的安全参数。我们将这些理论结果与模拟实验相结合，并展示了对于稍微偏离海明重量抽象的泄漏函数，感兴趣的蒙版在更大的素数域中可以逐渐降级，这促使进一步研究以表征（理想情况下宽广的）泄漏函数类，提供这样的保证。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_12](https://doi.org/10.1007/978-3-031-58737-5_12)
## From Random Probing to Noisy Leakages Without Field-Size Dependence.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#from-random-probing-to-noisy-leakages-without-field-size-dependence) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#from-random-probing-to-noisy-leakages-without-field-size-dependence)**
### 作者
* Gianluca Brian, ETH Zurich, Zurich, Switzerland
* Stefan Dziembowski, University of Warsaw and IDEAS NCBR, Warsaw, Poland
* Sebastian Faust, Technical University of Darmstadt, Darmstadt, Germany
### 摘要
> 侧信道攻击是瞄准密码实现的毁灭性攻击。为了防范这些攻击，提出了各种对抗措施 - 特别是所谓的掩蔽方案。掩蔽方案通过在加密实现评估过程中发生的所有中间值上进行秘密共享来隐藏敏感信息。在过去的十年里，设计和正式分析这样的方案引起了广泛关注。随机探测模型考虑泄漏，在该模型中，每个线路上的值以概率 \(\epsilon \) 泄露。该模型很重要，因为它通过 Duc 等人 (Eurocrypt 2014) 的简化暗示了在嘈杂泄漏模型中的安全性。嘈杂泄漏被视为分析掩蔽方案的“黄金标准”，因为它们准确地模拟了许多真实世界的物理泄漏。不幸的是，Duc 等人的简化并不紧密，并且特别要求噪声量按照 \(|\mathbb {F} |\) 的因子增加，其中 \(|\mathbb {F} |\) 表示在 \(\mathbb {F} \) 上运行的电路（其中 \(\mathbb {F} \) 是有限域）。在这项工作中，我们提供了从 \(\varepsilon \)-随机探测到 \(\delta \)-平均探测的通用转换，其中 \(\delta \approx \varepsilon ^2\)，避免了这种损失 \(|\mathbb {F} |\)。由于平均探测与嘈杂泄漏模型（Eurocrypt 2014）相同，这首次为遮蔽电路的安全性分析提供了一个无关于 \(|\mathbb {F} |\) 的噪声参数的模型。后者对于在大字段上运行的密码方案特别重要，例如 AES 或最近标准化的后量子方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_13](https://doi.org/10.1007/978-3-031-58737-5_13)
## A Direct PRF Construction from Kolmogorov Complexity.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-4].md#a-direct-prf-construction-from-kolmogorov-complexity) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-4].md#a-direct-prf-construction-from-kolmogorov-complexity)**
### 作者
* Yanyi Liu, Cornell Tech, New York, USA
* Rafael Pass, Cornell Tech, New York, USA
* Rafael Pass, Tel-Aviv University, Tel Aviv, Israel
### 摘要
> 尽管上世纪80年代的经典研究表明单向函数（OWF）意味着伪随机生成器（PRG）的存在，这又意味着伪随机函数（PRF）的存在，但各种构建方式（尤其是从OWFs到PRGs）都很复杂而低效。因此，研究人员从各种不同的具体难度假设中开发了直接构建PRFs的替代方案。在这项工作中，我们继续这一研究方向，展示第一个直接从时间有限 Kolmogorov 复杂度问题的平均情况难度假设\(\textsf{MK}^t\textsf{P}[s]\)构建PRFs的方案，其中给出阈值值\(s(\cdot )\)和多项式时间限制\(t(\cdot )\)，\(\textsf{MK}^t\textsf{P}[s]\)表示由 t 限定的 Kolmogorov 复杂度 \(K^t(x)\)对称限制为 s（|x|）的字符串x 所组成的语言。
> 
> 更具体地说，我们展示了一个从轻微的avg-case难度的\(\textsf{MK}^t\textsf{P}[2^{O(\sqrt{\log n})}]\) 到均匀分布的准多项式安全性的直接PRF构建。我们指出，在早期的研究中，已知这种假设等同于拥有准多项式安全的OWFs的存在。因此，我们的结果提供了第一个从已知与（准多项式安全的）PRFs相关的自然难度假设直接构建（准多项式安全的）PRFs的方案。
> 
> 也许令人惊讶的是，我们展示了如何利用Nisan-Wigderson PRG构建密码学PRG，而不是基于复杂理论的PRG。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58737-5_14](https://doi.org/10.1007/978-3-031-58737-5_14)
