# Asiacrypt[2021-4]
## NTRU Fatigue: How Stretched is Overstretched?
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#ntru-fatigue-how-stretched-is-overstretched) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#ntru-fatigue-how-stretched-is-overstretched)**
### 作者
* Léo Ducas, Cryptology Group, CWI, Amsterdam, The Netherlands
* Wessel van Woerden, Cryptology Group, CWI, Amsterdam, The Netherlands
### 摘要
> 直到最近，人们普遍认为对NTRU格上的格约简攻击与具有相同参数的（环上的）LWE格有类似的行为。然而，几项研究（Albrecht-Bai-Ducas 2016，Kirchner-Fouque 2017）表明，在大模数q的情况下，即所谓的NTRU的超拉伸区域中，存在显著差距。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_1](https://doi.org/10.1007/978-3-030-92068-5_1)
## Faster Dual Lattice Attacks for Solving LWE with Applications to CRYSTALS.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#faster-dual-lattice-attacks-for-solving-lwe-with-applications-to-crystals) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#faster-dual-lattice-attacks-for-solving-lwe-with-applications-to-crystals)**
### 作者
* Qian Guo, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
* Thomas Johansson, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
### 摘要
> 基于学习差错（LWE）问题的密码系统被赋予与解决LWE问题的通用算法成本相关的安全等级。这包括至少所谓的原始攻击和对偶格攻击。本文中，我们提出了对偶格攻击的改进，该攻击的思想可以追溯到Bleichenbacher的工作。我们提出了一个改进的区分器，结合一个猜测步骤，显示了对所有方案的双重攻击的整体复杂度的降低。我们的第二个贡献是一种新的两步格约简策略，它允许新的对偶格攻击利用格约简算法中的两种最新技术，即“自由维度”技巧和一次筛选中产生多个短向量的技巧。由于这两个技巧的不兼容被认为是双重攻击不太有趣的主要原因，我们的新约简策略允许比原始攻击更高效的对偶方法在重要的密码参数集上使用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_2](https://doi.org/10.1007/978-3-030-92068-5_2)
## Lattice Sieving via Quantum Random Walks.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#lattice-sieving-via-quantum-random-walks) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#lattice-sieving-via-quantum-random-walks)**
### 作者
* André Chailloux, Inria de Paris, EPI COSMIQ, Paris, France
* Johanna Loyer, Inria de Paris, EPI COSMIQ, Paris, France
### 摘要
> 基于格的密码学是后量子密码学中的主要提案之一。最短向量问题（SVP）在格密码学的密码分析中被认为是最重要的问题之一，并且许多基于格的方案的安全性都是基于其困难性提出的。SVP的最佳量子算法是由Laarhoven [Laa16] 提出的，其运行时间为\(2^{0.2653d + o(d)}\)。本文提出了对Laarhoven的结果的改进，并给出了一个算法，其运行时间为\(2^{0.2570 d + o(d)}\)，其中d是格的维度。我们还展示了时间-内存权衡，其中我们量化了我们算法的量子内存和量子随机访问内存的使用量。核心思想是在筛选算法的关键部分中，通过引入局部敏感过滤的量子随机游走取代[Laa16]中使用的Grover算法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_3](https://doi.org/10.1007/978-3-030-92068-5_3)
## A Systematic Approach and Analysis of Key Mismatch Attacks on Lattice-Based NIST Candidate KEMs.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#a-systematic-approach-and-analysis-of-key-mismatch-attacks-on-lattice-based-nist-candidate-kems) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#a-systematic-approach-and-analysis-of-key-mismatch-attacks-on-lattice-based-nist-candidate-kems)**
### 作者
* Yue Qin, China University of Geosciences, Wuhan, 430074, China
* Chi Cheng, China University of Geosciences, Wuhan, 430074, China
* Xiaohan Zhang, China University of Geosciences, Wuhan, 430074, China
* Yue Qin, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Chi Cheng, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Chi Cheng, Guangxi Key Laboratory of Trusted Software, Guilin University of Electronic Technology, Guilin, 541004, China
* Yanbin Pan, Key Laboratory of Mathematics Mechanization, Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing, China
* Lei Hu, State Key Lab of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yue Qin, Ding Lab, Yanqi Lake Beijing Institute of Mathematical Sciences and Applications, Beijing, China
* Jintai Ding, Ding Lab, Yanqi Lake Beijing Institute of Mathematical Sciences and Applications, Beijing, China
* Jintai Ding, Yau Mathematical Sciences Center, Tsinghua University, Beijing, China
### 摘要
> 对基于格的密钥交换机制（KEMs）的密钥不匹配攻击的研究是对正在进行的NIST后量子密码学标准化的密码学评估的重要组成部分。迄今为止已经发现了许多这些攻击。然而，缺乏一种统一的方法来评估这些KEMs在密钥不匹配攻击下的韧性。由于效率的关键指标是成功发动这种攻击所需的查询次数，本文提出并发展了一种系统方法，以找到此类攻击所需的最小平均查询次数的下限。我们的基本思想是将找到查询下限的问题转化为找到最优二进制恢复树（BRT）问题，其中下限的计算实际上是某个香农熵的计算。最优BRT方法还使我们能够理解为什么对于一些基于格的NIST候选KEMs来说，在理论上的下限和实际攻击中观察到的下限之间存在很大差距，以查询次数为衡量。这进一步引导我们提出了一种改进这些现有攻击的通用方法，并通过实验证实了这种改进。此外，我们提出的方法还可以直接用于提高对CCA安全的NIST候选KEMs的侧信道攻击能力。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_4](https://doi.org/10.1007/978-3-030-92068-5_4)
## Gladius: LWR Based Efficient Hybrid Public Key Encryption with Distributed Decryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#gladius-lwr-based-efficient-hybrid-public-key-encryption-with-distributed-decryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#gladius-lwr-based-efficient-hybrid-public-key-encryption-with-distributed-decryption)**
### 作者
* Kelong Cong, imec-COSIC, KU Leuven, Leuven, Belgium
* Daniele Cozzo, imec-COSIC, KU Leuven, Leuven, Belgium
* Nigel P. Smart, imec-COSIC, KU Leuven, Leuven, Belgium
* Varun Maram, ETH Zurich, Zurich, Switzerland
* Nigel P. Smart, University of Bristol, Bristol, UK
### 摘要
> 基于KEM-DEM框架的标准混合加密方案在分布式环境下实现高效性并保持方案的CCA安全属性方面存在困难。这是因为在整个密文被声明有效之前，需要使用KEM封装的密钥解密DEM。本文介绍了一个与Tag-KEM密切相关的KEM-DEM框架的新变体，从而规避了这个问题。然后，我们提出了一个基于Learning-with-Rounding的后量子KEM，该KEM专门设计用于快速分布式解密。我们的组合构造了一个基于Learning-with-Rounding的KEM的混合加密方案，称为Gladius，与NIST Round 3候选方案Saber密切相关。最后，我们给出了一个实现原型的分布式实现，实现了三方解封装时间为4.99秒。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_5](https://doi.org/10.1007/978-3-030-92068-5_5)
## Lattice-Based Group Encryption with Full Dynamicity and Message Filtering Policy.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#lattice-based-group-encryption-with-full-dynamicity-and-message-filtering-policy) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#lattice-based-group-encryption-with-full-dynamicity-and-message-filtering-policy)**
### 作者
* Jing Pan, State Key Laboratory of Integrated Service Networks (ISN), Xidian University, Xi’an, 710071, China
* Xiaofeng Chen, State Key Laboratory of Integrated Service Networks (ISN), Xidian University, Xi’an, 710071, China
* Jing Pan, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Xiaofeng Chen, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Fangguo Zhang, School of Computer Science and Engineering, Sun Yat-sen University, Guangzhou, 510006, China
* Fangguo Zhang, Guangdong Province Key Laboratory of Information Security Technology, Guangzhou, 510006, China
* Willy Susilo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, 2522, Australia
### 摘要
> 群组加密（GE）是一种基本的保护隐私原语，类似于群签名，允许用户在人群中隐藏自己的同时解密特定的密文。自从它首次问世以来，已经提出了众多的构造方法，其中由Libert等人分别在格和由Nguyen等人在编码理论上构建的方案都是后量子安全的。尽管后一个方案首次实现了完全的动态性（允许群组用户轻松加入或离开群组）和信息过滤策略，极大地改善了GE系统的现状，但其实际应用仍然受到设计复杂、低效和安全性较弱（在随机预言模型下安全）的限制。相反，Libert等人的方案具有坚实的安全性（在标准模型下安全），但缺乏之前的功能，并且由于过分使用格陷阱门而仍然存在效率问题。在这项工作中，我们重新形式化了完全动态群组加密（FDGE）的模型和安全定义，这与Nguyen等人的定义本质上是等价的，但更加简洁；然后，我们为证明一个二进制向量在格上非零提供了一种通用且高效的零知识证明方法，其中首次实现了在格模型中禁止性信息过滤策略的证明（以简单的方式）；最后，通过结合适当的密码材料和我们提出的零知识证明，我们以更简洁的方式实现了第一个基于格的FDGE方案，它不需要任何格陷阱门，并且在标准模型下被证明是安全的（假设证明阶段存在交互），在功能、效率和安全性方面超过了现有的后量子安全GE系统。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_6](https://doi.org/10.1007/978-3-030-92068-5_6)
## A New Variant of Unbalanced Oil and Vinegar Using Quotient Ring: QR-UOV.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#a-new-variant-of-unbalanced-oil-and-vinegar-using-quotient-ring-qr-uov) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#a-new-variant-of-unbalanced-oil-and-vinegar-using-quotient-ring-qr-uov)**
### 作者
* Hiroki Furue, The University of Tokyo, Tokyo, Japan
* Tsuyoshi Takagi, The University of Tokyo, Tokyo, Japan
* Yasuhiko Ikematsu, Kyushu University, Fukuoka, Japan
* Yutaro Kiyomura, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 不平衡的油醋签名方案（UOV）是一种多元签名方案，20年来基本上还没有被破解。然而，它需要使用大型公钥，因此提出了各种方法来减小其大小。在本文中，我们提出了一种新的UOV变种，其公钥由分块矩阵表示，其中的组件对应于商环的元素。我们讨论了这种方案对安全性的影响，无论商环是否为域。此外，我们讨论了它们对当前已知和可能的攻击的安全性，并提出了方案的参数。我们证明了我们提出的方案可以在不显著增加签名大小的情况下实现较小的公钥大小，与其他UOV变种相比。例如，我们提出的方案在NIST的后量子密码项目（安全级别3）中，公钥大小为85.8 KB，而压缩Rainbow方案为252.3 KB，其中Rainbow是UOV的一种变种，并且是NIST PQC项目的第三轮决赛选手之一。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_7](https://doi.org/10.1007/978-3-030-92068-5_7)
## Shorter Lattice-Based Group Signatures via "Almost Free" Encryption and Other Optimizations.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#shorter-lattice-based-group-signatures-via-almost-free-encryption-and-other-optimizations) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#shorter-lattice-based-group-signatures-via-almost-free-encryption-and-other-optimizations)**
### 作者
* Vadim Lyubashevsky, IBM Research Europe, Zurich, Switzerland
* Ngoc Khanh Nguyen, IBM Research Europe, Zurich, Switzerland
* Maxime Plancon, IBM Research Europe, Zurich, Switzerland
* Gregor Seiler, IBM Research Europe, Zurich, Switzerland
* Ngoc Khanh Nguyen, ETH Zurich, Zurich, Switzerland
* Maxime Plancon, ETH Zurich, Zurich, Switzerland
* Gregor Seiler, ETH Zurich, Zurich, Switzerland
### 摘要
> 我们提出了一个改进的基于格的群签名方案，其参数大小和运行时间与群的大小无关。在我们的方案中，签名长度约为200KB，相比之前最紧凑的基于任何量子安全假设的类似方案（del Pino等人，CCS 2018），减少了约3倍。这种改进是通过对组签名方案的一些基本密码学组件进行多个优化来实现的，我们认为它们将在基于格密码学的隐私应用中找到其他应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_8](https://doi.org/10.1007/978-3-030-92068-5_8)
## Séta: Supersingular Encryption from Torsion Attacks.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#s-ta-supersingular-encryption-from-torsion-attacks) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#s-ta-supersingular-encryption-from-torsion-attacks)**
### 作者
* Luca De Feo, IBM Research Europe, Zürich, Switzerland
* Cyprien Delpech de Saint Guilhem, imec-COSIC, KU Leuven, Leuven, Belgium
* Tako Boris Fouotsa, Università Degli Studi Roma Tre, Rome, Italy
* Péter Kutas, Eötvös Loránd University, Budapest, Hungary
* Péter Kutas, University of Birmingham, Birmingham, UK
* Christophe Petit, University of Birmingham, Birmingham, UK
* Antonin Leroux, DGA, Paris, France
* Antonin Leroux, LIX, CNRS, Ecole Polytechnique, Institut Polytechnique de Paris, Palaiseau, France
* Christophe Petit, Université Libre de Bruxelles, Brussels, Belgium
* Javier Silva, Universitat Pompeu Fabra, Barcelona, Spain
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, Talence, France
* Luca De Feo, INRIA, Rocquencourt, France
* Antonin Leroux, INRIA, Rocquencourt, France
* Benjamin Wesolowski, INRIA, IMB, Talence, France
### 摘要
> 我们提出了Séta（在匈牙利语中发音为ʃe:tɒ，意为“行走”），这是一种新型的基于超奇异椭圆曲线的等效率密码学方案，具有后量子安全性。它构建于一个新型的陷门单向函数家族上，其中倒置算法使用Petit的所谓SIDH纵断攻击来计算起始曲线的自同态和挠点图像之间的等度数。我们证明了Séta的OW-CPA安全性，并使用后量子OAEP转换提出了一种IND-CCA变体。我们探讨了几种密钥生成变体及其对参数选择的影响，如方案的基质素数。此外，我们还给出了一个名为“uber”的等度数假设框架，旨在推广在包括SIDH、CSDIH、OSIDH和我们方案中遇到的计算等度数问题。最后，我们精选参数以在安全性和运行时间之间取得平衡，并展示了我们实现的实验结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_9](https://doi.org/10.1007/978-3-030-92068-5_9)
## SHealS and HealS: Isogeny-Based PKEs from a Key Validation Method for SIDH.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#sheals-and-heals-isogeny-based-pkes-from-a-key-validation-method-for-sidh) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#sheals-and-heals-isogeny-based-pkes-from-a-key-validation-method-for-sidh)**
### 作者
* Tako Boris Fouotsa, Università Degli Studi Roma Tre, Rome, Italy
* Christophe Petit, Université Libre de Bruxelles, Brussels, Belgium
* Christophe Petit, University of Birmingham’s School of Computer Science, Birmingham, UK
### 摘要
> 在2016年，Galbraith等人提出了对SIDH密钥交换协议的自适应攻击。在SIKE中，我们使用Fujisaki-Okamoto变换的一种变体来强制Bob向Alice透露他的加密密钥，然后Alice用此密钥重新加密Bob的密文并验证其有效性。因此，Bob不能重复使用他的加密密钥。已经提出了另外两种可以实现静态-静态私钥的对策：k-SIDH及其由Jao和Urbanik提出的变体。这些对策相对昂贵，因为它们涉及运行多个并行的SIDH实例。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_10](https://doi.org/10.1007/978-3-030-92068-5_10)
## Adaptive Security via Deletion in Attribute-Based Encryption: Solutions from Search Assumptions in Bilinear Groups.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#adaptive-security-via-deletion-in-attribute-based-encryption-solutions-from-search-assumptions-in-bilinear-groups) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#adaptive-security-via-deletion-in-attribute-based-encryption-solutions-from-search-assumptions-in-bilinear-groups)**
### 作者
* Rishab Goyal, MIT, Cambridge, MA, USA
* Jiahui Liu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### 摘要
> 属性基加密（ABE）领域中的一项主要研究挑战是构建并证明自适应安全的加密系统。迄今为止，在ABE中实现自适应安全的主要范式是双系统加密。然而，几乎所有基于双线性群的解决方案都依赖于复合阶群的子群决策问题或决策线性假设的变体。这两个假设都是决策性的而非搜索性的，且其目标是源或双线性群元素。这与早期的选择性安全ABE系统形成鲜明对比，早期系统可以从决策性或搜索性Bilinear Diffie-Hellman假设中证明其安全性。本研究通过提出一个新的ABE构建方法来解决这一差距，并证明了该方法在搜索性Bilinear Diffie-Hellman假设下的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_11](https://doi.org/10.1007/978-3-030-92068-5_11)
## Public Key Encryption with Flexible Pattern Matching.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#public-key-encryption-with-flexible-pattern-matching) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#public-key-encryption-with-flexible-pattern-matching)**
### 作者
* Élie Bouscatié, Orange Labs, Applied Crypto Group, Cesson-Sévigné, France
* Olivier Sanders, Orange Labs, Applied Crypto Group, Cesson-Sévigné, France
* Élie Bouscatié, Université de Bordeaux, INRIA, CNRS, IMB UMR 5251, 33405, Talence, France
* Guilhem Castagnos, Université de Bordeaux, INRIA, CNRS, IMB UMR 5251, 33405, Talence, France
### 摘要
> 模式匹配的许多有趣应用（例如深度数据包检查或医疗数据分析）都针对非常敏感的数据。特别是，在互联网流量中发现非法行为与合法的隐私要求相冲突，这通常迫使用户（例如儿童、员工）盲目地相信一个完全解密他们流量的实体以维护安全。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_12](https://doi.org/10.1007/978-3-030-92068-5_12)
## Bounded Collusion ABE for TMs from IBE.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#bounded-collusion-abe-for-tms-from-ibe) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#bounded-collusion-abe-for-tms-from-ibe)**
### 作者
* Rishab Goyal, MIT, Cambridge, MA, USA
* Ridwan Syed, University of Texas at Austin, Austin, TX, USA
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### 摘要
> 我们提供了一种基于属性的加密系统，适用于Turing机。在只假设大型身份空间基于身份的加密（IBE）存在的情况下，该系统被证明是安全的。目前，从大多数主流的数论假设中可以实现IBE，这些假设包括因子分解、搜索Diffie-Hellman假设和错误学习假设，这些假设又都暗示了公钥密码学的实现。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_13](https://doi.org/10.1007/978-3-030-92068-5_13)
## Digital Signatures with Memory-Tight Security in the Multi-challenge Setting.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#digital-signatures-with-memory-tight-security-in-the-multi-challenge-setting) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#digital-signatures-with-memory-tight-security-in-the-multi-challenge-setting)**
### 作者
* Denis Diemert, Bergische Universität Wuppertal, Wuppertal, Germany
* Kai Gellert, Bergische Universität Wuppertal, Wuppertal, Germany
* Tibor Jager, Bergische Universität Wuppertal, Wuppertal, Germany
* Lin Lyu, Bergische Universität Wuppertal, Wuppertal, Germany
### 摘要
> 数字签名的标准安全概念是“单挑战”（SC）EUF-CMA安全，在这种安全性定义中，对手输出一对单一的消息-签名，如果这对消息-签名是伪造的，则对手“获胜”。Auerbach等人（CRYPTO 2017）引入了关于约束理论的紧凑度，并认为在这种设置下，正确的安全目标实际上是更强的“多挑战”（MC）定义，其中对手可以输出多对消息-签名，并且如果至少有一对是伪造的，则对手“获胜”。目前还不知道具有时间、成功概率和内存等方面完全紧密性的简单标准假设的构造方法。以前的研究表明，通过某些自然减少类别无法实现内存紧密签名（Auerbach等人，CRYPTO 2017；Wang等人，EUROCRYPT 2018）。这些不可能结果可能会给人一种印象，即内存紧密签名的构造是困难的，甚至是不可能的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_14](https://doi.org/10.1007/978-3-030-92068-5_14)
## (Compact) Adaptively Secure FE for Attribute-Weighted Sums from k-Lin.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#compact-adaptively-secure-fe-for-attribute-weighted-sums-from-k-lin) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#compact-adaptively-secure-fe-for-attribute-weighted-sums-from-k-lin)**
### 作者
* Pratish Datta, NTT Research, Sunnyvale, CA, 94085, USA
* Tapas Pal, NTT Research, Sunnyvale, CA, 94085, USA
* Tapas Pal, Indian Institute of Technology Kharagpur, Kharagpur, 721302, West Bengal, India
### 摘要
> 本文提出了第一种适应性模拟保密功能加密（FE）方案，用于属性加权求和。在这样的FE方案中，加密以N对属性\(\{(x_i, z_i)\}_{i\in [N]}\)作为输入，其中属性\(\{x_i\}_{i\in [N]}\)是公开的，而属性\(\{z_i\}_{i\in [N]}\)是私密的。索引\(i\in [N]\)被称为插槽。秘钥对应于某个权重函数f，解密可恢复加权求和\(\sum _{i=1}^N f(x_i)z_i\)。这是一种具有广泛潜在实际应用的重要功能。在提出的FE方案中，属性被视为向量，权重函数是算术分支程序（ABP）。我们提出了两种具有不同参数和可调性级别的方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_15](https://doi.org/10.1007/978-3-030-92068-5_15)
## Boosting the Security of Blind Signature Schemes.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#boosting-the-security-of-blind-signature-schemes) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#boosting-the-security-of-blind-signature-schemes)**
### 作者
* Jonathan Katz, University of Maryland, College Park, USA
* Michael Rosenberg, University of Maryland, College Park, USA
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 现有的对于具有多项式并发执行签名协议的盲签名方案要么效率低下，要么依赖非标准假设（即使在随机预言机模型中也是如此）。我们展示了首个基于RSA、因子分解或离散对数假设（在随机预言机模型中）能够实现这一安全级别的高效盲签名方案。我们的核心技术涉及扩展和推广了Pointcheval（Eurocrypt’98）的一种转换方法，能够将某些对（同时）发放对数数量签名具有安全性的盲签名方案转化为对（同时）发放多项式数量签名具有安全性的方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_16](https://doi.org/10.1007/978-3-030-92068-5_16)
## PrORAM - Fast P(logn) Authenticated Shares ZK ORAM.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#proram-fast-p-logn-authenticated-shares-zk-oram) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#proram-fast-p-logn-authenticated-shares-zk-oram)**
### 作者
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 我们构建了一个基于算术值的认证共享的具体高效的零知识(Oblivious RAM，ORAM)用于零知识证明(ZKP)系统。每次访问一个算术值，它消耗\(2\log n\)个长度为\(2\sigma \)的秘密的无意义传输(Oblivious Transfers，OTs)，其中\(\sigma \)是统计安全参数，n是数组大小。相比于之前最佳的具体高效的ZK ORAM BubbleRAM(Heath和Kolesnikov，[HK20a]，CCS 2020)，我们的方法是渐近和具体上的改进，其访问成本是\(\frac{1}{2}\log ^2 n\)个长度为\(2\sigma \)的秘密的OTs。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_17](https://doi.org/10.1007/978-3-030-92068-5_17)
## Compressed $\varSigma $-Protocols for Bilinear Group Arithmetic Circuits and Application to Logarithmic Transparent Threshold Signatures.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#compressed-varsigma-protocols-for-bilinear-group-arithmetic-circuits-and-application-to-logarithmic-transparent-threshold-signatures) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#compressed-varsigma-protocols-for-bilinear-group-arithmetic-circuits-and-application-to-logarithmic-transparent-threshold-signatures)**
### 作者
* Thomas Attema, CWI, Cryptology Group, Amsterdam, The Netherlands
* Ronald Cramer, CWI, Cryptology Group, Amsterdam, The Netherlands
* Thomas Attema, Leiden University, Mathematical Institute, Leiden, The Netherlands
* Ronald Cramer, Leiden University, Mathematical Institute, Leiden, The Netherlands
* Matthieu Rambaud, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Thomas Attema, TNO, Cyber Security and Robustness, The Hague, The Netherlands
### 摘要
> Lai等人（CCS 2019）展示了如何将Bulletproof的算术电路零知识协议（Bootle等，EUROCRYPT 2016和Bünz等，S&amp;P 2018）推广到直接适用于双线性群算术电路，即无需将这些电路转化为算术电路。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_18](https://doi.org/10.1007/978-3-030-92068-5_18)
## Promise $\varSigma $-Protocol: How to Construct Efficient Threshold ECDSA from Encryptions Based on Class Groups.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#promise-varsigma-protocol-how-to-construct-efficient-threshold-ecdsa-from-encryptions-based-on-class-groups) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#promise-varsigma-protocol-how-to-construct-efficient-threshold-ecdsa-from-encryptions-based-on-class-groups)**
### 作者
* Yi Deng, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Shunli Ma, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Xinxuan Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Hailong Wang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yi Deng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Shunli Ma, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Xinxuan Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Hailong Wang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Xuyang Song, Shanghai Key Laboratory of Privacy-Preserving Computation, Shanghai, China
* Xiang Xie, Shanghai Key Laboratory of Privacy-Preserving Computation, Shanghai, China
### 摘要
> 门限签名允许n方共享发行数字签名的能力，以便任何至少大小为\(t+1\)的联盟可以签名，而t个或更少的玩家组无法完成。目前已知的基于类群的门限ECDSA构建要么效率低下（需要对具有小挑战空间的底层零知识证明进行并行重复），要么需要相当非标准的低阶假设。本文提出了一种基于类群的加密方案的高效门限ECDSA协议，既不假设低阶假设，也不需要并行重复底层零知识证明，从而在密钥生成方面显著提高了效率，并且胜过了以前的构建方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_19](https://doi.org/10.1007/978-3-030-92068-5_19)
## The One-More Discrete Logarithm Assumption in the Generic Group Model.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#the-one-more-discrete-logarithm-assumption-in-the-generic-group-model) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#the-one-more-discrete-logarithm-assumption-in-the-generic-group-model)**
### 作者
* Balthazar Bauer, Université de Paris, Paris, France
* Georg Fuchsbauer, TU Wien, Vienna, Austria
* Antoine Plouviez, Inria, ENS, CNRS, PSL, Paris, France
### 摘要
> 一个更离散的对数假设（OMDL）是识别协议、盲签名和多签名方案的安全分析的基础，例如盲Schnorr签名和最近的MuSig2多签名。由于这些方案产生标准的Schnorr签名，因此它们与现有系统兼容，例如在区块链的上下文中。此外，OMDL还在许多关于某些安全约简的不可能性结果中被假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_20](https://doi.org/10.1007/978-3-030-92068-5_20)
## Verifiably-Extractable OWFs and Their Applications to Subversion Zero-Knowledge.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#verifiably-extractable-owfs-and-their-applications-to-subversion-zero-knowledge) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#verifiably-extractable-owfs-and-their-applications-to-subversion-zero-knowledge)**
### 作者
* Prastudy Fauzi, Simula UiB, Bergen, Norway
* Helger Lipmaa, Simula UiB, Bergen, Norway
* Arne Tobias Ødegaard, Simula UiB, Bergen, Norway
* Helger Lipmaa, University of Tartu, Tartu, Estonia
* Janno Siim, University of Tartu, Tartu, Estonia
* Michał Zając, Clearmatics, London, UK
### 摘要
> 可提取的单向函数（EOWF）由Canetti和Dakdouk（ICALP 2008）引入并由Bitansky等人进行了概括研究（SIAM Journal on Computing卷45），它是一种允许对函数进行高效提取预像的OWF。我们研究具有公共图像验证算法的（广义）EOWF。我们称这样的OWFs为可验证可提取，并且证明了一些先前已知的构造满足此概念。我们研究了这些OWFs与子版本零知识（Sub-ZK）不可伪造证明（NIZKs）的关系，通过使用它们从满足某些额外属性的NIZKs从基本上构造子版本零知识不可伪造证明（Sub-ZK NIZK），反过来也展示了如何从任何子版本零知识不可伪造证明（Sub-ZK NIZK）获得它们。在我们的工作之前，NIZK的Sub-ZK属性是通过具体的知识假设实现的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_21](https://doi.org/10.1007/978-3-030-92068-5_21)
## Chain Reductions for Multi-signatures and the HBMS Scheme.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#chain-reductions-for-multi-signatures-and-the-hbms-scheme) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#chain-reductions-for-multi-signatures-and-the-hbms-scheme)**
### 作者
* Mihir Bellare, Department of Computer Science and Engineering, University of California, San Diego, USA
* Wei Dai, Department of Computer Science and Engineering, University of California, San Diego, USA
### 摘要
> 现有的基于离散对数（DL）的多签名方案只提供了薄弱的保证，如果这些方案按照实践中使用的方式在256位群中实现，则会存在问题。这是因为底层的约简，在很大程度上都是标准模型和DL之间的宽松关系。我们表明，放宽模型或假设中的任意一个就足以获得严格的约简证明。具体来说，我们提供了(1)代数群模型中基于DL的严格证明，和(2)标准模型下基于与DL不同的良基假设的严格证明。我们首先针对经典的三轮方案，即\(\mathsf {BN} \)和\(\mathsf {MuSig} \)，进行了研究。然后，我们给出了一个新的两轮多签名方案\(\mathsf {HBMS} \)，与之前的方案一样高效，而且也进行了相同的研究。通过链式约简的框架，我们为单一方案创造了多条安全路径，其中一个约简被分解成涉及中间问题的一系列子约简。总体而言，我们的研究改进了在实际实现中基于DL的多签名方案在所在群组中的安全性保证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_22](https://doi.org/10.1007/978-3-030-92068-5_22)
## Symmetric Key Exchange with Full Forward Security and Robust Synchronization.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#symmetric-key-exchange-with-full-forward-security-and-robust-synchronization) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#symmetric-key-exchange-with-full-forward-security-and-robust-synchronization)**
### 作者
* Colin Boyd, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Bor de Kock, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Lise Millerjord, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Gareth T. Davies, Bergische Universität Wuppertal, Wuppertal, Germany
* Kai Gellert, Bergische Universität Wuppertal, Wuppertal, Germany
* Tibor Jager, Bergische Universität Wuppertal, Wuppertal, Germany
### 摘要
> 我们基于预共享密钥构建了轻量级的身份验证密钥交换协议，实现了完整的前向安全，并且仅依赖于简单高效的对称密钥原语。我们所有的协议在强安全模型下都有严格的安全证明，它们的通信复杂度低，特别适用于资源受限的设备。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_23](https://doi.org/10.1007/978-3-030-92068-5_23)
## Security Analysis of CPace.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#security-analysis-of-cpace) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#security-analysis-of-cpace)**
### 作者
* Michel Abdalla, DIENS, École normale supérieure, CNRS, PSL University, Paris, France
* Michel Abdalla, DFINITY, Zürich, Switzerland
* Björn Haase, Endress+Hauser Liquid Analysis, Gerlingen, Germany
* Julia Hesse, IBM Research Europe, Zürich, Switzerland
### 摘要
> 针对有关密码认证密钥交换（PAKE）协议标准化请求的回应，IRTF工作组CFRG于2019年设立了一个PAKE选项过程，导致在平衡场景下选择了CPace协议，即参与方共享一个常用密码。随后在标准化工作中，CPace协议得到进一步发展，形成了一个协议族，但其在实际环境下的安全保证还不够清楚。本文通过通用组合性框架对CPace进行了全面的安全分析。我们的分析是现实的，它捕捉到自适应破坏并避免将CPace的\(\textsf {Map2Pt}\)函数 – 将域元素映射到曲线点 – 建模为理想化函数。为了将我们的证明扩展到为特定椭圆曲线生态系统优化的不同CPace变种，我们采用了一种新的方法，该方法将证明所需的假设表示为由仿真器访问的库。通过允许可替换证明中使用的假设，这种新方法避免了对未更改的协议部分进行重复分析，并使我们能够有效地分析所有不同CPace变体的安全保证。经过我们的分析，所有已调查的实际CPace变体都具有自适应UC安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_24](https://doi.org/10.1007/978-3-030-92068-5_24)
## Modular Design of Role-Symmetric Authenticated Key Exchange Protocols.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-4].md#modular-design-of-role-symmetric-authenticated-key-exchange-protocols) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-4].md#modular-design-of-role-symmetric-authenticated-key-exchange-protocols)**
### 作者
* Yuting Xiao, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Rui Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Hui Ma, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Rui Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 认证密钥交换（AKE）是应用密码学中的一个重要原语。先前引入了几种强大的AKE模型，例如CK、CK+、eCK以及它们的延伸版本，考虑了完美前向保密性（PFS）（以“-PFS”后缀表示）。这些模型提供了不同的安全保证，并且它们是不可比较的。因此，对于安全AKE的先决条件和AKE协议的模块化设计仍然缺乏系统性的理解。在本文中，我们在一回合认证密钥交换（ORKE）的背景下研究了这个问题，ORKE在参与者间是角色对称的，只需要一轮来建立会话密钥。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92068-5_25](https://doi.org/10.1007/978-3-030-92068-5_25)
