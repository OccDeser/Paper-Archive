# Crypto[2019-2]
## The Communication Complexity of Threshold Private Set Intersection.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#the-communication-complexity-of-threshold-private-set-intersection) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#the-communication-complexity-of-threshold-private-set-intersection)**
### 作者
* Satrajit Ghosh, Aarhus University, Aarhus, Denmark
* Mark Simkin, Aarhus University, Aarhus, Denmark
### 摘要
> 阈值私有集交集使持有大小为n的集合\(S_{\mathsf {A}}\)和\(S_{\mathsf {B}}\)的Alice和Bob能够计算交集\(S_{\mathsf {A}} \cap S_{\mathsf {B}} \)，如果这两个集合的差异不超过某个阈值参数\(t\)。在这项工作中，我们研究了这个问题的通信复杂性，并且确定了首个上限和下限。我们证明任何协议都必须具有\(\varOmega (t)\)的通信复杂性。我们证明可以通过全同态加密获得几乎相匹配的上限，即\(\tilde{\mathcal {O}}(t)\)。我们提供了一个基于较弱假设的计算上更高效的协议，即加性同态加密，其通信复杂性为\(\tilde{\mathcal {O}}(t ^2)\)。对于生物特征认证等应用，在这些应用中，给定的指纹必须与数据库中的一个指纹有大量交集，我们的协议可能会导致显著的通信节省。
> 
> 在这项工作之前，所有以前的协议都具有\(\varOmega (n)\)的通信复杂性。我们的协议是第一批通信复杂性主要依赖阈值

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_1](https://doi.org/10.1007/978-3-030-26951-7_1)
## Adaptively Secure MPC with Sublinear Communication Complexity.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#adaptively-secure-mpc-with-sublinear-communication-complexity) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#adaptively-secure-mpc-with-sublinear-communication-complexity)**
### 作者
* Ran Cohen, Boston University, Boston, USA
* Ran Cohen, Northeastern University, Boston, USA
* Abhi Shelat, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
### 摘要
> 在多方计算（MPC）的研究中，一个重要的挑战是在安全保证、难度假设和协议所需资源之间取得平衡。在这项工作中，我们研究了在不同腐败门限下容忍自适应腐败的MPC协议的成本。在最强的设置中，我们考虑到任意数量的方（可能是全部方）的自适应腐败，并取得了以下结果：在CRS模型中，我们假设了LWE和不可区分性混淆（iO），实现了一个在两轮内安全的功能计算（SFE）协议。通信、CRS大小和在线计算与函数大小成线性关系。iO假设可以用安全抹除替换。先前的研究要求通信或CRS大小在函数大小上是多项式的。
> 
> 在相同的假设下，我们构建了一个“Bob优化”的双方计算（2PC）协议（其中Alice先说话，Bob后说话，Alice获得输出）。也就是说，通信复杂度和Bob的总计算量与函数大小和Alice的输入大小成线性关系。我们证明了“Alice优化”协议的不可能性。
> 
> 假设LWE，我们将可自适应安全的NIZK证明大小缩小到NP关系电路大小的子线性。在技术层面上，我们的结果基于简洁功能计算（LFE）（Quach，Wee和Wichs，FOCS'18），并揭示了LFE和FHE之间有趣的二元性。
> 
> 接下来，我们分析了除一方以外的方的自适应腐败，并在门限PKI模型中（门限FHE方案的密钥预先共享在各方之间），展示了一个通信复杂度与电路大小成线性关系的两轮SFE协议，假设LWE和NIZK。最后，我们考虑到了诚实多数的设置，并展示了一个在相同约束条件下能够保证输出交付的两轮SFE协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_2](https://doi.org/10.1007/978-3-030-26951-7_2)
## Communication Lower Bounds for Statistically Secure MPC, With or Without Preprocessing.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#communication-lower-bounds-for-statistically-secure-mpc-with-or-without-preprocessing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#communication-lower-bounds-for-statistically-secure-mpc-with-or-without-preprocessing)**
### 作者
* Ivan Damgård, Computer Science, Aarhus University, Aarhus, Denmark
* Kasper Green Larsen, Computer Science, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Computer Science, Aarhus University, Aarhus, Denmark
### 摘要
> 我们证明了无条件安全多方计算的通信复杂性下界，既包括标准模型中当 \(n=2t+1\) 个参与方且其中 t 个被损坏，也包括预处理模型中当 \(n=t+1\) 个参与方。在两种情况下，我们证明对于任意的 \(g \in \mathbb {N}\)，存在一个具有 g 个门的布尔电路 C，其中任何实施 C 的安全协议都必须传输 \(\varOmega (n g)\) 比特，即使仅需要被动和统计上的安全。这些结果很容易扩展到在任何固定有限域上构建类似的电路。这表明对于所有电路大小而言，在 t 达到最大值时，所有已知协议的 O(n) 开销是固有的。这也表明安全性需要付出代价：我们考虑的电路如果不需要安全性，可以在 n 个参与方之间仅通过 O(g) 比特进行计算。我们的结果还适用于阈值 t 不是最优的情况。对于诚实多数的情况，这表明通过打包秘密分享获得的已知优化只有在接受阈值 \(t= (1/2 - c)n\)（其中 c 是常数）时才能获得。对于诚实多数的情况，我们还展示了一个与下界相匹配的上界，只相差一个常数因子（现有的上界对于布尔电路的结果偏离了一个 \(\lg n\) 因子）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_3](https://doi.org/10.1007/978-3-030-26951-7_3)
## Communication-Efficient Unconditional MPC with Guaranteed Output Delivery.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#communication-efficient-unconditional-mpc-with-guaranteed-output-delivery) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#communication-efficient-unconditional-mpc-with-guaranteed-output-delivery)**
### 作者
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Yanyi Liu, Tsinghua University, Beijing, China
### 摘要
> 我们研究了基于点对点通道的拥有保证输出传递和不受条件限制的安全多方计算（MPC）的通信复杂性，其中腐败阈值 \(t < n/3\)。我们提出了以下问题：“在这种情况下，是否可能构建一个每个乘法门的通信复杂度与参与方数量呈线性关系的 MPC？”尽管一些工作集中于减少这种情况下的通信复杂度，但是上述问题的答案在过去十年中仍然难以捉摸。
> 
> 我们肯定地回答了上述问题，并提供了一个通信复杂度为 \(O(Cn\kappa + n^3\kappa )\) 的 MPC，其中 \(\kappa\) 是域中元素的大小，C 是（算术）电路的大小，而 n 是参与方的数量。这相比之前已知的通信复杂度 \(O(Cn\kappa +D_Mn^2\kappa +n^3\kappa )\) 有明显的改进，其中 \(D_M\) 是电路的乘法深度。为了得到这个结果，我们引入了一种称为“4-一致分享元组”的新技术，我们认为它是独立有趣的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_4](https://doi.org/10.1007/978-3-030-26951-7_4)
## Efficient Collision Attack Frameworks for RIPEMD-160.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#efficient-collision-attack-frameworks-for-ripemd-160) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#efficient-collision-attack-frameworks-for-ripemd-160)**
### 作者
* Fukang Liu, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Gaoli Wang, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Zhenfu Cao, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Christoph Dobraunig, Graz University of Technology, Graz, Austria
* Christoph Dobraunig, Radboud University, Nijmegen, The Netherlands
* Florian Mendel, Infineon Technologies AG, Ludwigsburg, Germany
* Takanori Isobe, National Institute of Information and Communications Technology, Tokyo, Japan
* Fukang Liu, University of Hyogo, Kobe, Japan
* Takanori Isobe, University of Hyogo, Kobe, Japan
### 摘要
> RIPEMD-160是ISO/IEC的标准，已被应用于使用SHA-256生成比特币地址。由于其复杂的双流结构，Liu、Mendel和Wang在Asiacrypt 2017上提出的第一个针对简化的RIPEMD-160的碰撞攻击仅达到了30步，时间复杂度为\(2^{70}\)。除此之外，还有几个使用从中间开始方法的简化RIPEMD-160的半自由启动碰撞攻击已经发表。受到这样的从中间开始结构的启发，我们提出了两种新颖的高效碰撞攻击框架，利用了其消息扩展的弱点。这两个框架分别称为密集左稀疏右（DLSR）框架和稀疏左密集右（SLDR）框架。事实证明，DLSR框架比SLDR框架更高效，因为它可以完全控制多一步，尽管需要额外的\(2^{32}\)内存复杂度。为了构造DLSR框架的最佳微分特性，我们精心构建了特性的线性化部分，然后使用猜测和确定的方法解决相应的非线性部分。基于新发现的微分特性，我们提供了第一个实际碰撞攻击30步和31步（80步中的一部分）RIPEMD-160的碰撞消息对，时间复杂度分别为\(2^{35.9}\)和\(2^{41.5}\)。此外，由于部分计算的好处，我们可以对RIPEMD-160的33步和34步（80步中的一部分）进行攻击，时间复杂度分别为\(2^{67.1}\)和\(2^{74.3}\)。当将SLDR框架应用于Asiacrypt 2017论文中使用的微分特性时，我们将时间复杂度显著提高了\(2^{13}\)倍。然而，它仍无法与从DLSR框架获得的结果竞争。据我们所知，这些是关于步数的简化RIPEMD-160的最佳碰撞攻击，包括30步和31步RIPEMD-160的第一个碰撞消息对。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_5](https://doi.org/10.1007/978-3-030-26951-7_5)
## Improving Attacks on Round-Reduced Speck32/64 Using Deep Learning.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#improving-attacks-on-round-reduced-speck32-64-using-deep-learning) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#improving-attacks-on-round-reduced-speck32-64-using-deep-learning)**
### 作者
* Aron Gohr, Bundesamt für Sicherheit in der Informationstechnik (BSI), Bonn, Germany
### 摘要
> 该论文有四个主要贡献。首先，我们完全基于马尔可夫假设计算了Speck32/64在一个特定输入差分下的预测差分分布，通过验证发现这在八轮之内可以得到Speck32/64的全局相当好的差分分布模型。其次，我们展示了与常规智慧相反，机器学习能够产生非常强大的密码辨别器：例如，在对Speck九轮进行简单的少量数据、选择明文攻击时，我们提出了基于深度残差神经网络的辨别器，其平均密钥等级大约比使用完整差分分布表的类似经典辨别器低五倍。第三，我们基于贝叶斯优化的变体开发了一种高度选择性的密钥搜索策略，结合我们的神经辨别器，可以将剩余11轮Speck32/64的安全性降低到大约38位，这是对以往文献的重要改进。最后，我们展示了我们的神经辨别器成功地利用了密文对分布的特征，这些特征在纯差分辨别器中即使有无限数据也是不可见的。
> 
> 虽然我们的攻击是基于文献中已知的输入差分，但我们还展示了神经网络可以在不使用先前人类密码分析的情况下快速（在我们的机器上几分钟内）找到良好的输入差异。本文的补充代码和数据可在https://github.com/agohr/deep_speck上找到。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_6](https://doi.org/10.1007/978-3-030-26951-7_6)
## Correlation of Quadratic Boolean Functions: Cryptanalysis of All Versions of Full \mathsf MORUS.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#correlation-of-quadratic-boolean-functions-cryptanalysis-of-all-versions-of-full-mathsf-morus) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#correlation-of-quadratic-boolean-functions-cryptanalysis-of-all-versions-of-full-mathsf-morus)**
### 作者
* Danping Shi, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Lei Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Danping Shi, Data Assurance and Communication Security Research Center, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, Data Assurance and Communication Security Research Center, Chinese Academy of Sciences, Beijing, China
* Lei Hu, Data Assurance and Communication Security Research Center, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Lei Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yu Sasaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Chaoyun Li, imec-COSIC, Department Electrical Engineering (ESAT), KU Leuven, Leuven, Belgium
### 摘要
> 我们表明，任何二次布尔函数的相关性可以从其所谓的不交二次形式中读取出来。我们进一步提出了一个多项式时间算法，可以将任意二次布尔函数转换为其不交二次形式。利用这个算法，可以高效地计算二次布尔函数的确切相关性。
> 
> 我们将这种方法应用于分析MORUS（CAESAR比赛的七个决赛选手之一）的线性轨迹，这些轨迹是通过对MORUS样式密钥流生成器的线性轨迹的通用模型进行辅助发现的。在我们的模型中，任何用于查找分组密码线性轨迹的工具都可以用来搜索MORUS样式密钥流生成器的轨迹。结果是，对于所有版本的完整MORUS，发现了一组相关性为2^{-38}的轨迹，而先前发表的MORUS-640和MORUS-1280最佳轨迹的相关性分别为2^{-73}和2^{-76}（ASIACRYPT 2018）。这显著改善了对MORUS-1280-256的攻击复杂度，从2^{152}降低到2^{76}。这些新的轨迹还导致了对MORUS-640-128和MORUS-1280-128进行首次区分和消息恢复攻击，其复杂度令人惊讶地约为2^{76}。
> 
> 此外，我们观察到，利用这些轨迹进行攻击的条件可以比先前认为的更宽松，这表明新的轨迹在相关性和所涉及的密文块数量方面优于先前发表的轨迹。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_7](https://doi.org/10.1007/978-3-030-26951-7_7)
## Low-Memory Attacks Against Two-Round Even-Mansour Using the 3-XOR Problem.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#low-memory-attacks-against-two-round-even-mansour-using-the-3-xor-problem) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#low-memory-attacks-against-two-round-even-mansour-using-the-3-xor-problem)**
### 作者
* Gaëtan Leurent, Inria, Paris, France
* Ferdinand Sibleyras, Inria, Paris, France
### 摘要
> 迭代Even-Mansour构造是一种优雅的构造方法，它以高级加密标准（AES）为例来理想化分组密码的设计。在这项研究中，我们专注于最简单的变体，即只使用一个密钥的2轮Even-Mansour构造。这是提供超出生日攻击界限安全性保证的最基本的构造方法：对底层置换和加密进行的评估可以达到\(2^{2n/3}\)，而已知的最好攻击复杂度约为\(2^n/n\)次运算。
> 
> 我们表明，对具有块大小为n的该方案进行攻击与具有元素大小\(\ell = 2n\)的3-XOR问题相关，这是一个自九十年代以来一直被研究的重要算法问题。具体来说，已知3-XOR问题需要至少\(2^{\ell /3}\)个查询，并且已知的最佳算法需要大约\(2^{\ell /2}/\ell \)次运算：这与2轮Even-Mansour方案的已知界限大致吻合。
> 
> 利用这个联系，我们描述了反对2轮Even-Mansour方案的新攻击方法。特别地，我们获得了首个数据复杂度和内存复杂度均显著低于\(2^{n}\)的算法。从实际角度来看，具有接近\(2^n\)的数据和/或内存复杂度的先前研究很难比简单的暴力搜索更高效。我们的最佳算法仅需要\(\lambda n\)个已知明文/密文对，其中\(\lambda\)是一个小于1的常数，时间复杂度为\(2^n/\lambda n\)，而空间复杂度为\(2^{\lambda n}\)。例如，当\(n=64\)且\(\lambda = 1/2\)时，内存需求是合理的，并且相比于暴力搜索，我们提高了32倍。我们还描述了一种具有渐进复杂度\(\mathcal {O}(2^{n} \ln ^2 n/n^2)\)的算法，改进了先前渐进复杂度为\(\mathcal {O}(2^n/n)\)的算法，这使用了Baran、Demaine和Pǎtraşcu的3-SUM算法的变种。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_8](https://doi.org/10.1007/978-3-030-26951-7_8)
## How to Record Quantum Queries, and Applications to Quantum Indifferentiability.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#how-to-record-quantum-queries-and-applications-to-quantum-indifferentiability) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#how-to-record-quantum-queries-and-applications-to-quantum-indifferentiability)**
### 作者
* Mark Zhandry, Princeton University & NTT Research, Princeton, USA
### 摘要
> 量子随机神谕模型（QROM）已成为证明基于随机神谕构造的后量子安全的标准模型。不幸的是，已知的证明技术都无法在关于对手查询的记录信息中进行归约，这是许多经典ROM证明（包括哈希函数域扩展的所有不可区分性证明）的一个关键特性。
> 
> 在这项工作中，我们提出了一个克服了这个“记录障碍”的新的QROM证明技术。我们通过提供一个新的“压缩神谕”，可以对随机神谕进行高效的即时模拟，类似于通常的经典模拟。然后，我们使用这种新技术为Merkle-Damgård域扩展的哈希函数首次证明了量子不可区分性。我们还针对Fujisaki-Okamoto变换提供了一个安全性证明；以前的证明需要修改方案以包括额外的哈希项。鉴于量子计算机的威胁和对后量子抗性密码系统的推动，我们的工作代表了有效的后量子密码系统的重要工具。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_9](https://doi.org/10.1007/978-3-030-26951-7_9)
## Quantum Security Proofs Using Semi-classical Oracles.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#quantum-security-proofs-using-semi-classical-oracles) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#quantum-security-proofs-using-semi-classical-oracles)**
### 作者
* Andris Ambainis, University of Latvia, Riga, Latvia
* Mike Hamburg, Rambus Security Division, San Francisco, USA
* Dominique Unruh, University of Tartu, Tartu, Estonia
### 摘要
> 我们提出了一种改进版的单向隐藏（O2H）定理，该定理是根据Unruh于2015年在《ACM》杂志中提出的。我们的新O2H定理提供了更高的灵活性（允许任意的oracle和输入的联合分布，多个重新编程点），以及更紧密的界限（去除了平方根因子，并考虑到并行性）。改进的O2H定理利用了一种新型的量子oracle变体，半经典oracle，其中查询部分进行了测量。新的O2H定理使我们能够在几个公钥加密方案中获得更好的安全界限。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_10](https://doi.org/10.1007/978-3-030-26951-7_10)
## Quantum Indistinguishability of Random Sponges.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#quantum-indistinguishability-of-random-sponges) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#quantum-indistinguishability-of-random-sponges)**
### 作者
* Jan Czajkowski, QuSoft, University of Amsterdam, Amsterdam, The Netherlands
* Christian Schaffner, QuSoft, University of Amsterdam, Amsterdam, The Netherlands
* Andreas Hülsing, TU Eindhoven, Eindhoven, The Netherlands
### 摘要
> 在这项工作中，我们展示了海绵构造可以用来构建量子安全的伪随机函数。作为我们的主要结果，我们证明了随机海绵在量子上不可区分于随机函数。在这个设置中，对手可以对构造的输入-输出行为进行叠加访问，但无法访问内部函数。我们的证明建立在内部函数是随机函数或置换的假设下。然后，我们利用这一结果得到了安德里娅、达门、门尼克和范阿什（FSE’15）的一个结果的量子安全版本，该结果表明使用安全的PRP或PRF作为内部函数的海绵是安全的PRF。这一结果还证明了卡普兰、勒尔特、列维里尔和纳亚-普拉森西亚（Crypto’16）以及桑托利和夏夫纳（QIC’16）在量子访问模型下针对CBC-MAC的最近攻击可以通过引入具有非平凡内部部分的状态来防止。我们的主要结果的证明是通过分析任意q输入输出对的联合分布来得出的。我们的方法详细分析了考虑的构造的统计行为。所使用的技术可能在将来对考虑量子对手的不同密码原语的分析中证明有用。利用Zhandry的PRF/PRP切换引理，我们得出了量子不可区分性也成立，如果内部区块函数是随机置换的话。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_11](https://doi.org/10.1007/978-3-030-26951-7_11)
## Revisiting Post-quantum Fiat-Shamir.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#revisiting-post-quantum-fiat-shamir) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#revisiting-post-quantum-fiat-shamir)**
### 作者
* Qipeng Liu, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University & NTT Research, Princeton, USA
### 摘要
> “费亚-沙米尔转换”是在随机神谕模型中构建非交互式知识论证的一种有用方法。不幸的是，现有的证明技术无法证明费亚-沙米尔在量子环境中的安全性。问题在于：（1）量子退相干的困难，以及（2）当前技术在量子环境中无法适应性地编程随机神谕。在本文中，我们展示了如何在许多场景中克服上述限制。特别地，我们给出了一些温和的条件下，费亚-沙米尔在量子环境中是安全的。作为一个应用，我们展示了基于费亚-沙米尔的现有格签名在不进行任何修改的情况下是安全的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_12](https://doi.org/10.1007/978-3-030-26951-7_12)
## Security of the Fiat-Shamir Transformation in the Quantum Random-Oracle Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#security-of-the-fiat-shamir-transformation-in-the-quantum-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#security-of-the-fiat-shamir-transformation-in-the-quantum-random-oracle-model)**
### 作者
* Jelle Don, Centrum Wiskunde & Informatica (CWI), Amsterdam, Netherlands
* Serge Fehr, Centrum Wiskunde & Informatica (CWI), Amsterdam, Netherlands
* Jelle Don, Institute for Logic, Language and Computation, University of Amsterdam, Amsterdam, Netherlands
* Christian Majenz, Institute for Logic, Language and Computation, University of Amsterdam, Amsterdam, Netherlands
* Christian Schaffner, Institute for Logic, Language and Computation, University of Amsterdam, Amsterdam, Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, Netherlands
* Serge Fehr, QuSoft, Amsterdam, Netherlands
* Christian Majenz, QuSoft, Amsterdam, Netherlands
* Christian Schaffner, QuSoft, Amsterdam, Netherlands
### 摘要
> 著名的Fiat-Shamir转换将任何公共硬币三轮互动证明，即所谓的Σ协议转化为随机神谕模型中的非交互证明。我们在量子对手的情况下研究了这个转换，特别是量子对手可能以量子叠加的方式查询随机神谕。
> 
> 我们的主要结果是一种通用约简，将任何在量子随机神谕模型中攻击Fiat-Shamir转换的量子不诚实证明者转化为同样成功地攻击底层Σ协议的量子不诚实证明者（在标准模型中）。应用于标准完备性和知识证明定义，我们的约简意味着在允许量子攻击的情况下，Fiat-Shamir转换保持了这两种安全属性的性质，无论是在计算模型还是在统计模型中。我们的结果改进并完善了迄今为止已知的部分结果，但也证明了文献中某些主张是错误的。
> 
> 在后量子安全的签名方案的背景下，我们的结果意味着对于任何是抵御量子不诚实证明者的Σ协议（并且满足一些额外的自然属性），相应的Fiat-Shamir签名方案在量子随机神谕模型中是安全的。例如，我们可以得出结论：Fish的非优化版本，即NIST候选方案Picnic的裸Fiat-Shamir变种在量子随机神谕模型中是安全的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_13](https://doi.org/10.1007/978-3-030-26951-7_13)
## Unconditionally Secure Computation Against Low-Complexity Leakage.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#unconditionally-secure-computation-against-low-complexity-leakage) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#unconditionally-secure-computation-against-low-complexity-leakage)**
### 作者
* Andrej Bogdanov, Chinese University of Hong Kong, Shatin, Hong Kong
* Yuval Ishai, Technion, Haifa, Israel
* Akshayaram Srinivasan, University of California, Berkeley, USA
### 摘要
> 我们考虑构造有泄漏弹性的电路编译器，它们对输出长度有限制的全局泄漏函数是安全的。 全局意味着泄漏可以取决于所有电路线，并产生应用于这些线的低复杂度函数（表示为多输出布尔电路）。 在这项工作中，我们设计了在无状态（也称为一次性泄漏）和有状态（连续泄漏）环境下均能对\(\mathsf {AC}^0\)泄漏和类似低复杂度类别无条件安全的编译器。
> 
> 在无状态情况下，我们表明Ishai、Sahai和Wagner的原始私有电路构建实际上可以抵御\(\mathsf {AC}^0\)泄漏攻击。 在有状态情况下，我们修改了Rothblum的构建方法，得到了一个简单构造具有无条件安全性的方法。早期的针对\(\mathsf {AC}^0\)泄漏开发的电路编译器要么依赖于安全硬件组件(Faust et al.， Eurocrypt 2010，Miles-Viola，STOC 2013)，要么依赖于（未经证实的）复杂理论假设(Rothblum， Crypto 2012)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_14](https://doi.org/10.1007/978-3-030-26951-7_14)
## Tight Leakage-Resilient CCA-Security from Quasi-Adaptive Hash Proof System.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#tight-leakage-resilient-cca-security-from-quasi-adaptive-hash-proof-system) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#tight-leakage-resilient-cca-security-from-quasi-adaptive-hash-proof-system)**
### 作者
* Shuai Han, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Lin Lyu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Dawu Gu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, Westone Cryptologic Research Center, Beijing, 100070, China
* Shuai Han, Ant Financial, Hangzhou, 310012, China
### 摘要
> 我们提出了准自适应哈希证明系统（QAHPS）的概念，其中允许投影密钥依赖于计算哈希值的特定语言。我们通过定义两个统计属性，包括LR-\(\langle \mathscr {L}_0, \mathscr {L}_1 \rangle \) -通用和LR-\(\langle \mathscr {L}_0, \mathscr {L}_1 \rangle \) -密钥切换，形式化了QAHPS的泄漏鲁棒性（LR-ardency）。
> 
> 我们提供了一种通用方法，从LR-ardent QAHPS实现紧密泄漏鲁棒CCA（LR-CCA）安全的公钥加密（PKE）。我们的方法类似于Cramer和Shoup的开创性工作（Eurocrypt’02），并采用三种QAHPS方案，其中一种用于生成隐藏明文的均匀字符串，另外两种用于证明密文的格式正确。QAHPS的LR-ardency使得紧密的LR-CCA安全成为可能。我们基于不对称和对称配对群上的标准k-线性（k-LIN）假设，分别获取完全紧凑且具有LR-CCA安全性的PKE。安全性损失为\({{O}} (\log {Q_{{e}}})\)，其中\({Q_{{e}}}\)表示加密查询次数。具体来说，我们从SXDH实现了具有公钥中的4个群元素和密文中的7个群元素的紧密LR-CCA安全PKE，因此是效率最高的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_15](https://doi.org/10.1007/978-3-030-26951-7_15)
## Non-malleable Secret Sharing in the Computational Setting: Adaptive Tampering, Noisy-Leakage Resilience, and Improved Rate.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#non-malleable-secret-sharing-in-the-computational-setting-adaptive-tampering-noisy-leakage-resilience-and-improved-rate) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#non-malleable-secret-sharing-in-the-computational-setting-adaptive-tampering-noisy-leakage-resilience-and-improved-rate)**
### 作者
* Antonio Faonio, IMDEA Software Institute, Madrid, Spain
* Daniele Venturi, Department of Computer Science, Sapienza University of Rome, Rome, Italy
### 摘要
> 本文重新考虑了非可塑秘密共享的概念（高雅尔和库马尔，STOC 2018年）在计算环境中。特别是，在假设一对一单向函数的条件下，我们展示了一个计算上的私有、门限秘密共享方案，满足以下所有属性。
> 
> 连续非可塑性：没有计算受限的敌对者可以独立篡改所有份额，使其可以重建出与原秘密相关的被破坏的份额。即使对手可以连续地篡改，使用无限多次的多项式次数，对同一个目标秘密共享进行篡改，下一系列的篡改函数以及用于重建的份额子集可以根据先前重建的结果自适应地选择。
> 
> 对噪声泄露的弹性：即使对手可以额外从所有份额独立地泄露信息，非可塑性也是成立的。没有泄露信息的长度限制，只要总的泄露不会使每个份额的最小熵减少太多。
> 
> 改进的速率：我们最终方案的信息速率，定义为消息大小与最大份额大小的比值，在消息长度趋近无穷大时渐近地接近1。
> 
> 先前的构造通常在至少以下一种限制条件下实现了信息理论安全性，有时甚至实现了对任意访问结构的限制：（i）只对一次篡改攻击具有非可塑性；（ii）对有限次篡改攻击具有非可塑性，但篡改函数的选择和用于重建的集合均不自适应；（iii）信息速率渐近地趋近于零；（iv）在泄露情况下没有安全性保证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_16](https://doi.org/10.1007/978-3-030-26951-7_16)
## Leakage Resilient Secret Sharing and Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#leakage-resilient-secret-sharing-and-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#leakage-resilient-secret-sharing-and-applications)**
### 作者
* Akshayaram Srinivasan, University of California, Berkeley, USA
* Prashant Nalini Vasudevan, University of California, Berkeley, USA
### 摘要
> 一个秘密共享方案允许一个代理在n个参与者中共享一个秘密，使得任何被授权的参与者子集都能够恢复该秘密，而任何未经授权的子集都无法获取秘密的任何信息。泄漏鲁棒的秘密共享方案（由Goyal和Kumar在独立工作中引入，STOC'18，以及Benhamouda、Degwekar、Ishai和Rabin，在CRYPTO'18中引入）要求保密性对每个非授权的参与者集合均成立，即使他们从每个其他份额获得了一定的泄漏信息。如果每个份额的泄漏是独立计算的，则称其为本地泄漏。到目前为止，已知的本地泄漏鲁棒秘密共享方案仅适用于阈值访问结构，并且仅适用于非常低（O（1））或非常高（\(n-o(\log n)\)）的阈值。
> 
> 在这项工作中，我们提供了一个编译器，它接受任何单调访问结构的秘密共享方案，并生成相应的具有本地泄漏鲁棒性的秘密共享方案，其中份额大小只存在一个常数因子的渐近增长。此外，所得到的秘密共享方案具有最佳泄漏鲁棒率，即可以任意接近1的泄漏容忍与每个份额的大小之比。利用这个秘密共享方案作为主要构建单元，我们获得了以下结果：
> 
> 保持率的不可塑性秘密共享。我们提供了一个编译器，它接受任何4-单调访问结构（4-单调访问结构的授权集合的大小至少为4）的秘密共享方案，并将其转换为相同访问结构的不可塑性秘密共享方案，且速率为\(\varOmega (R)\) 。先前的非零速率构造（Badrinarayanan和Srinivasan，EUROCRYPT ’19）实现了一个速率为\(\varTheta (R/{t_{\max }\log ^2 n})\)的构造方法，其中\(t_{\max }\)是访问结构中任何最小集合的最大大小。特殊情况下，对于任何门限值\(t \ge 4\) 和任意\(n \ge t\)，我们获得了首个常速率的t-out-of-n不可塑性秘密共享方案。
> 
> 具有一般交互模式的泄漏容忍多方计算。对于任何函数f，我们提供了从构建一个遵循给定交互模式的泄漏容忍安全的多方计算协议，到构建一个遵循星形交互模式的安全（但不一定是泄漏容忍）协议的降低。结合已知的星形交互模式结果，这可以提供具有统计/计算安全性的任何交互模式的泄漏容忍多方计算。这改进了（Halevi等人，ITCS 2016）的结果，在无泄漏环境中提供了这样的降低方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_17](https://doi.org/10.1007/978-3-030-26951-7_17)
## Stronger Leakage-Resilient and Non-Malleable Secret Sharing Schemes for General Access Structures.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#stronger-leakage-resilient-and-non-malleable-secret-sharing-schemes-for-general-access-structures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#stronger-leakage-resilient-and-non-malleable-secret-sharing-schemes-for-general-access-structures)**
### 作者
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* Mark Simkin, Aarhus University, Aarhus, Denmark
* João Ribeiro, Imperial College London, London, UK
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* Erick Purwanto, National University of Singapore, Singapore, Singapore
### 摘要
> 在这项工作中，我们提出了一系列编译器，这些编译器以任意访问结构的秘密共享方案作为输入，并生成对应访问结构的抗泄漏或非可塑秘密共享方案。抗泄漏的秘密共享方案可以隐藏秘密，即使对手同时从所有其他秘密共享中获得一些大小受限的泄漏。非可塑的秘密共享方案保证从一组被篡改的共享中重构出的秘密要么等于原始秘密，要么完全不相关。据我们所知，我们提出了第一个用于一般访问结构抗泄漏秘密共享的通用编译器。在非可塑的秘密共享方案中，我们加强了先前的定义，提供了它们之间的分离，并构建了一个针对独立分享篡改函数具有最强定义的一般访问结构非可塑秘密共享方案。更具体地说，我们的方案对抗并发篡改是安全的：即使对手可以（非自适应地）多次篡改分享，并且在每次篡改尝试中可以自由选择由重构算法用于重构被篡改秘密的合格分享集。这类似于分离状态非可塑码和提取器的多篡改设置的强模拟。我们展示了如何利用抗泄漏和非可塑的秘密共享方案来构建抗泄漏和非可塑的门限签名方案。传统的门限签名可以将签名方案的秘密密钥分布给一组参与方，以便某些合格的子集可以对消息进行签名。我们构建了门限签名方案，即使对手泄漏或篡改所有秘密分享，也仍然保持安全。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_18](https://doi.org/10.1007/978-3-030-26951-7_18)
## Memory-Hard Functions from Cryptographic Primitives.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#memory-hard-functions-from-cryptographic-primitives) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#memory-hard-functions-from-cryptographic-primitives)**
### 作者
* Binyi Chen, UC Santa Barbara, Santa Barbara, USA
* Stefano Tessaro, University of Washington, Seattle, USA
### 摘要
> 记忆困难函数（MHFs）是一种在时间和内存方面强制执行评估成本的中等难度函数（通常是一种权衡）。它们被用于密码保护、基于密码的密钥派生以及加密货币中，并且在过去几年中已经接受了相当数量的理论审查。然而，分析认为MHFs是某种基础哈希函数\(\mathcal {H}\)的运行模式，该哈希函数被建模为一个整体的随机预言机。然而，这是一个非常强的假设，因为这样的哈希函数是由更简单的原语构建的，遵循某种即席设计范例。
> 
> 本文开始研究如何使用常见的加密原语（如分组密码、压缩函数和置换）在MHF设计中安全地实例化\(\mathcal {H}\)。安全性将在一个模型中，其中对手可以并行地访问基础原语的理想版本。我们将从所有前述的原语中提供可证明的内存困难构造。我们的结果是通用的，因为我们将依赖于在先前的工作中设计的难以石块化的图形来获得我们的构造。
> 
> 我们遇到的一个特别挑战是，通常要求\(\mathcal {H}\)具有较大的输出（以增加内存难度，而不改变MHFs的描述尺寸），而基础原语通常具有较小的输出尺寸。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_19](https://doi.org/10.1007/978-3-030-26951-7_19)
## Data-Independent Memory Hard Functions: New Attacks and Stronger Constructions.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#data-independent-memory-hard-functions-new-attacks-and-stronger-constructions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#data-independent-memory-hard-functions-new-attacks-and-stronger-constructions)**
### 作者
* Jeremiah Blocki, Purdue University, West Lafayette, USA
* Ben Harsha, Purdue University, West Lafayette, USA
* Seunghoon Lee, Purdue University, West Lafayette, USA
* Lu Xing, Purdue University, West Lafayette, USA
* Siteng Kang, Penn State University, State College, USA
* Samson Zhou, Indiana University, Bloomington, USA
### 摘要
> 记忆硬函数（MHFs）是一种关键的密码学基元，用于设计中等复杂的密码哈希算法和平等的工作证明。近年来，已经提出了几个越来越严格的MHF目标，包括要求MHF具有高的顺序空间-时间（ST）复杂度，并行空间-时间复杂度，分摊面积-时间（aAT）复杂度和持续空间复杂度。数据独立性记忆硬函数（iMHFs）在密码哈希的背景下具有特殊的兴趣，因为它们自然地抵抗侧信道攻击。iMHF可以使用具有N=2^n个节点和低入度的有向无环图（DAG）G进行指定，并且iMHF的复杂性可以使用卵石游戏进行分析。最近，Alwen等人[ABH17]构造了一个称为DRSample的DAG，其aAT复杂度至少为\(\varOmega \!\left( N^2/{\text {log}} N\right) \)。从渐近上讲，DRSample在所有以前的iMHF构造方案中表现最好，包括Argon2i，密码哈希竞赛的赢家（aAT成本\({\mathcal {O}} \!\left( N^{1.767}\right) \)），尽管这些限制中的常数的具体含义尚不清楚。我们表明Boneh等人的贪婪卵石策略[BCS16]非常有效，对抗DRSample，例如aAT成本为\({\mathcal {O}} (N^2/{\text {log}} N)\)。实际上，我们的实证分析翻转了Alwen等人的先前结论，即DRSample在实际值N≤2^24的情况下为已知卵石攻击提供了更强的抵抗力。我们通过使用位反转图将DRSample扩展来构造新的iMHF候选者（DRSample + BRG）。然后我们证明了这个构造在每个MHF标准下都是渐近最优的，并且我们经验性地证明了我们的iMHF提供了最好的抵抗已知卵石攻击能力。例如，我们显示任何并行卵石攻击要么具有aAT成本\(\omega (N^2)\)，要么需要至少\(\varOmega (N)\)步，使用带有\(\varOmega (N/{\text {log}} N)\)个卵石的DAG。这使我们的构造成为第一个具有强大的持续空间复杂度保证的实用iMHF，并立即意味着任何并行卵石具有aAT复杂度\(\varOmega (N^2/{\text {log}} N)\)。我们还证明了任何顺序卵石（包括贪婪卵石攻击）具有aAT成本\(\varOmega \!\left( N^2\right) \)，如果一个合理的猜想成立，任何并行卵石都具有aAT成本\(\varOmega (N^2 \log \log N/{\text {log}} N)\)——这是iMHF的最佳限制。我们实现了我们的新iMHF，并证明它的速度与Argon2一样快。在此过程中，我们提出了Argon2轮函数的简单修改，这可以将攻击者的aAT成本增加近一个数量级，而不会增加CPU的运行时间。最后，我们给出了一个卵石缩减，证

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_20](https://doi.org/10.1007/978-3-030-26951-7_20)
## Simultaneous Amplification: The Case of Non-interactive Zero-Knowledge.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#simultaneous-amplification-the-case-of-non-interactive-zero-knowledge) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#simultaneous-amplification-the-case-of-non-interactive-zero-knowledge)**
### 作者
* Vipul Goyal, CMU, Pittsburgh, USA
* Aayush Jain, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
### 摘要
> 这项研究中，我们探讨了对于非交互式零知识证明系统（NIZK）同时隐私和正确性放大的问题。我们展示了满足 \(\delta _s+\delta _z=1-\epsilon \) 的任何 \(\delta _s-\)正确且 \(\delta _z-\)零知识 NIZK 候选，对于任意常数 \(\epsilon >0\)，都可以在额外假设子指数安全的公钥加密的情况下，转换为一个计算上正确且零知识的候选。
> 
> 我们开发了新的技术来利用泄漏模拟引理（Jetchev-Peitzrak TCC 2014）来论证放大。我们结果的一个关键部分是对于秘密分享 \(\mathsf {NP}\) 实例的一个新概念。我们相信这可能是独立感兴趣的。为了实现这一结果，我们分析了以下两种转换：
> 
> 并行重复：我们展示了使用并行重复，任何 \(\delta _s-\)正确和 \(\delta _z-\)零知识的 \(\mathsf {NIZK}\) 候选可以转化为（大致上） \(\delta ^n_s-\)正确和 \(1-(1-\delta _{z})^n-\)零知识的候选。这里 n 是重复参数。
> 
> 基于MPC的重复：我们提出了一种新的转换，放大零知识，就像并行重复放大正确性一样。我们展示了使用这个新方法，任何 \(\delta _s-\)正确和 \(\delta _z-\)零知识的 \(\mathsf {NIZK}\) 候选可以在（大致上）转化为 \(1-(1-\delta _s)^n-\)正确和 \(2\cdot \delta ^n_{z}-\)零知识的候选。
> 
> 然后我们展示了使用这些转换按照之字形的方式我们可以得到我们的结果。最后，我们还呈现了一个简单的转换，可以直接将任何满足 \(\delta _s,\delta _z<1/3 -1/\mathsf {poly}(\lambda )\) 的 \(\mathsf {NIZK}\) 候选转化为一个安全的候选。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_21](https://doi.org/10.1007/978-3-030-26951-7_21)
## The Privacy Blanket of the Shuffle Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#the-privacy-blanket-of-the-shuffle-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#the-privacy-blanket-of-the-shuffle-model)**
### 作者
* Borja Balle, The Alan Turing Institute, London, UK
* James Bell, The Alan Turing Institute, London, UK
* Adrià Gascón, The Alan Turing Institute, London, UK
* Borja Balle, University of Warwick, Coventry, UK
* Adrià Gascón, University of Warwick, Coventry, UK
* Borja Balle, Georgetown University, Washington, D.C., USA
* Kobbi Nissim, Georgetown University, Washington, D.C., USA
### 摘要
> 这项工作研究了最近提出的混洗模型中的差分隐私。与在本地模型中不同，用户在混洗模型中将其隐私化输入匿名提交给服务器，服务器无法追溯到特定用户的输入。这种设置在差分隐私的经典策展和本地模型之间提供了一种信任模型。混洗模型是Bittau等人（SOPS 2017）提出的Encode, Shuffle, Analyze（ESA）模型的核心思想。Cheu等人（EUROCRYPT 2019）的最新工作分析了混洗模型的差分隐私特性，并显示在某些情况下，混洗协议提供的准确性严格优于本地协议。此外，Erlingsson等人（SODA 2019）给出了一个隐私放大界限，量化了混洗模型中由每个用户使用的随机器实现的策展差分隐私的水平。
> 
> 在这种背景下，我们做出了三个贡献。首先，我们在混洗模型中提供了一个最优的实数求和单消息协议。我们的协议非常简单，并且比Cheu等人提出的相同问题的协议具有更高的准确性和通信效率。这个协议的最优性源于我们的第二个贡献，即一个新的下界，用于衡量混洗模型中实数求和的私有协议的准确性。第三个贡献是一种新的放大界限，用于分析混洗模型中协议的隐私性，其依赖于相应本地随机器的提供的隐私性。我们的放大界限推广了Erlingsson等人的结果，适用于更广泛的参数范围，并提供了一整套方法来分析混洗模型中的隐私放大。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_22](https://doi.org/10.1007/978-3-030-26951-7_22)
## Realizing Chosen Ciphertext Security Generically in Attribute-Based Encryption and Predicate Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#realizing-chosen-ciphertext-security-generically-in-attribute-based-encryption-and-predicate-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#realizing-chosen-ciphertext-security-generically-in-attribute-based-encryption-and-predicate-encryption)**
### 作者
* Venkata Koppula, Weizmann Institute of Science, Rehovot, Israel
* Brent Waters, University of Texas at Austin and NTT Research, Austin, USA
### 摘要
> 我们提供了从任何选择明文安全的属性基加密 (ABE) 或一边谓词加密系统转换为选择密文安全系统的通用和黑盒转换方法。我们的转换仅需要原始 ABE 方案的 IND-CPA 安全性以及具有特殊安全属性的伪随机生成器 (PRG)。
> 
> 尤其是，我们考虑一个具有 n 位输入 \(s \in \{0,1\}^n\) 和 \(n \cdot \ell\) 位输出 \(y_1, \ldots , y_n\) 的 PRG，其中每个 \(y_i\) 是一个 \(\ell\) 位字符串。然后对于随机选择的 s，以下两个分布应该在计算上无法区分。在第一个分布中，\(r_{s_i, i} = y_i\)，并且对于 \(i \in [n]\)，\(r_{\bar{s}_i, i}\) 是随机选择的。在第二个分布中，所有的 \(r_{b, i}\) 都是对于 \(i \in [n], b \in \{0,1\}\) 随机选择的。
> 
> 我们展示了这样的 PRGs 可以通过计算 Diffie-Hellman 假设 (在非双线性群中) 或学习与误差 (LWE) 假设 (以及其他可能的假设) 构建。因此，通过添加任一假设，可以将任何 IND-CPA 安全系统转换为选择密文安全系统 (或者简单地假设现有的 PRG 是提示安全的)。此外，我们的工作提供了在公钥加密的基本情况下获得选择密文安全性的新方法和视角。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_23](https://doi.org/10.1007/978-3-030-26951-7_23)
## Match Me if You Can: Matchmaking Encryption and Its Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#match-me-if-you-can-matchmaking-encryption-and-its-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#match-me-if-you-can-matchmaking-encryption-and-its-applications)**
### 作者
* Giuseppe Ateniese, Stevens Institute of Technology, Hoboken, NJ, USA
* Danilo Francati, Stevens Institute of Technology, Hoboken, NJ, USA
* David Nuñez, NuCypher, San Francisco, CA, USA
* Daniele Venturi, Department of Computer Science, Sapienza University of Rome, Rome, Italy
### 摘要
> 我们引入了一种称为配对加密（ME）的新型加密形式。使用ME，发送者S和接收者R（每个都有自己的属性）都可以指定对方必须满足的策略，以便使消息可见。主要的安全保证是保护隐私的策略匹配：在解密过程中，除了匹配/不匹配的事实外，不会泄露任何信息。
> 
> ME开辟了秘密通信的新途径，并且实现了几种新的应用程序，其中参与者都可以为加密数据指定细粒度的访问策略。例如，在社交配对中，S可以加密一个包含他/她个人详细信息的文件，并指定一个策略，以便该文件只能由他/她理想的伴侣解密。另一方面，接收者R只有在S符合通过策略定义的他/她理想的伴侣时才能解密该文件。
> 
> 在理论方面，我们为ME定义了安全性，并提供了从功能加密构建ME的通用框架。
> 
> 这些构建需要解决S和R选择的策略同时进行检查的技术挑战，以避免任何泄漏。
> 
> 在实际方面，我们构建了一个高效的基于身份的相等策略方案，在标准BDH假设下具有可证明的随机预言机模型安全性。我们实施和评估了我们的方案，并提供实验证据证明我们的构建是可行的。我们还将基于身份的ME应用于一个具体的用例，特别是在Tor网络上创建匿名公告板。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_24](https://doi.org/10.1007/978-3-030-26951-7_24)
## ABE for DFA from k-Lin.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#abe-for-dfa-from-k-lin) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#abe-for-dfa-from-k-lin)**
### 作者
* Junqing Gong, CNRS, ENS and PSL, Paris, France
* Hoeteck Wee, CNRS, ENS and PSL, Paris, France
* Brent Waters, University of Texas at Austin, Austin, USA
* Hoeteck Wee, Algorand, Boston, USA
* Brent Waters, NTT Research, Palo Alto, USA
### 摘要
> 我们提出了第一个基于静态假设的双线性群上确定性有限自动机（DFA）的属性加密（ABE）方案；这解决了Waters（CRYPTO 2012）提出的一个未解决问题。我们的主要构建实现了对标准K线性假设下无限碰撞的选择性安全性，而之前的构建都依赖于Q型假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_25](https://doi.org/10.1007/978-3-030-26951-7_25)
## Attribute Based Encryption (and more) for Nondeterministic Finite Automata from LWE.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#attribute-based-encryption-and-more-for-nondeterministic-finite-automata-from-lwe) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#attribute-based-encryption-and-more-for-nondeterministic-finite-automata-from-lwe)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Monosij Maitra, IIT Madras, Chennai, India
* Shota Yamada, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### 摘要
> 从标准假设构建均匀计算模型的属性基加密（ABE）[56]，是一个重要的问题，关于这个问题我们所知甚少。在此设置中，唯一已知的ABE方案避免了多线性映射或不可区分性模糊化的依赖，支持无边界长度输入，并允许对手在安全游戏中发出无边界密钥请求，这些方案由Waters在Crypto 2012 [57]中提供。Waters提供了第一个满足上述属性的确定有限自动机（DFA）的ABE方案，其基于双线性映射的参数化或“q型”假设。该工作中将这种构造推广到非确定有限自动机（NFA）作为一个明确的开放问题，并且至今没有取得任何进展。使用其他假设（如更常见的配对基假设或基于格的假设）构建方案也十分困难。
> 
> 在本研究中，我们首次通过学习困难（LWE）假设构建了非确定有限自动机（NFA）的对称密钥属性基加密方案。我们的方案支持无边界长度的输入和无边界长度的机器。更详细地说，我们构造中的秘密密钥与无边界长度的NFA M相关联，密文与一个元组\((\mathbf {x}, m)\)相关联，其中\(\mathbf {x}\)是一个无边界长度的公共属性，m是一个秘密信息位，解密仅在\(M(\mathbf {x})=1\)时恢复m。
> 
> 此外，我们利用我们的ABE实现了与电路设置类似的（受限的）属性隐藏，并从LWE中获得了第一个谓词加密和有界密钥功能加密方案。我们在单一/有界密钥设置中实现了机器隐藏，从而从标准假设中获得了第一个可重用的混淆NFA。在较低限制方面，我们证明了对于具有对抗无边界密钥请求安全性的DFA，秘密密钥功能加密暗示了电路的不可区分性模糊化(\(\mathsf {iO}\))；这表明在实现NFA的全面功能加密方面存在一道障碍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_26](https://doi.org/10.1007/978-3-030-26951-7_26)
## The Distinction Between Fixed and Random Generators in Group-Based Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#the-distinction-between-fixed-and-random-generators-in-group-based-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#the-distinction-between-fixed-and-random-generators-in-group-based-assumptions)**
### 作者
* James Bartusek, Princeton University, Princeton, USA
* Fermi Ma, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University & NTT Research, Princeton, USA
### 摘要
> 有关群论假设（如DDH）中生成器g的确切作用，惊人地缺乏一致性。一些工作认为g是群描述的固定部分，而另一些则将其视为随机选择的。我们从多个角度研究了这个微妙的区别。
> 
> 在通用群模型中，我们展示了在某些群中，随机生成器的DDH问题（或CDH问题）很难，但固定生成器的DDH问题（或CDH问题）很容易。我们观察到这样的群具有有趣的密码学应用。
> 
> 我们发现，在预处理下计算离散对数和CDH问题的似乎非常紧密的通用下界（Corrigan-Gibbs和Kogan，Eurocrypt 2018），在生成器是随机的情况下，并不适用于亚常数的成功概率阶段。我们通过证明随机生成器变体的紧密下界来解决这个问题；我们的结果形式化了使用随机生成器会减少预处理攻击有效性的直觉。
> 
> 我们观察到，在指数来自低熵分布的类似DDH的假设中，固定生成器与随机生成器之间的区别尤为敏感。特别值得注意的是，我们发现Komargodski和Yogev（Komargodski和Yogev，Eurocrypt 2018）提出的Strong Power DDH假设用于非可塑点模糊化实际上是错误的，因为它需要一个固定生成器。作为回应，我们提出了一个替代的固定生成器假设，适用于新的非可塑点模糊化构造，并且我们证明了该假设在通用群模型中成立。我们还给出了固定生成器、低熵DDH安全性的通用群证明（Canetti，Crypto 1997）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_27](https://doi.org/10.1007/978-3-030-26951-7_27)
## Unifying Computational Entropies via Kullback-Leibler Divergence.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-2].md#unifying-computational-entropies-via-kullback-leibler-divergence) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-2].md#unifying-computational-entropies-via-kullback-leibler-divergence)**
### 作者
* Rohit Agrawal, John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA, 02138, USA
* Yi-Hsiu Chen, John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA, 02138, USA
* Thibaut Horel, John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA, 02138, USA
* Salil Vadhan, John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA, 02138, USA
### 摘要
> 我们引入了相对熵的困难度，这是一种新的搜索问题困难度概念，一方面仅适用于所有单向函数，另一方面暗示了下一块伪熵和不可访问熵两种计算熵的形式，这两种形式最近被用于伪随机生成器和统计隐藏承诺方案的构建中。因此，相对熵的困难度统一了这两种计算熵的概念，并阐明了它们之间的表观“二元性”。此外，它还提供了更模块化和启示性的证明，证明单向函数暗示下一块不可访问熵，类似于证明单向函数暗示下一块伪熵（Vadhan和Zheng，STOC‘12）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26951-7_28](https://doi.org/10.1007/978-3-030-26951-7_28)
