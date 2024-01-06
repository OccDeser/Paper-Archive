# Asiacrypt[2019-3]
## Approximate Trapdoors for Lattices and Smaller Hash-and-Sign Signatures.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#approximate-trapdoors-for-lattices-and-smaller-hash-and-sign-signatures) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#approximate-trapdoors-for-lattices-and-smaller-hash-and-sign-signatures)**
### 作者
* Yilei Chen, Visa Research, Palo Alto, USA
* Pratyay Mukherjee, Visa Research, Palo Alto, USA
* Nicholas Genise, University of California, San Diego, USA
### 摘要
> 我们研究了一种松弛的格陷门的概念，称为近似陷门，它定义为能够近似而非精确地反演Ajtai的单向函数。我们研究的主要动机是提高由格陷门构建的加密系统（包括哈希-签名签名）的效率。
> 
> 我们的主要贡献是通过修改Micciancio和Peikert [Eurocrypt 2012]提出的部件陷门来构建近似陷门。特别地，我们展示了如何使用近似部件陷门从可以模拟而不需要知道陷门的分布中抽样短的原像。对分布的分析使用了关于格上离散高斯线性变换的定理（隐含于过去的作品中使用）。
> 
> 我们的近似部件陷门可以与现有的优化技术一起使用，在（环）LWE和（环）SIS假设下，在随机预言机模型中提高哈希-签名签名的具体性能。我们的实现表明，公钥和签名的大小可以从使用精确陷门构建的方案中

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_1](https://doi.org/10.1007/978-3-030-34618-8_1)
## Decisional Second-Preimage Resistance: When Does SPR Imply PRE?
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#decisional-second-preimage-resistance-when-does-spr-imply-pre) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#decisional-second-preimage-resistance-when-does-spr-imply-pre)**
### 作者
* Daniel J. Bernstein, Department of Computer Science, University of Illinois at Chicago, Chicago, IL, 60607-7045, USA
* Daniel J. Bernstein, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Andreas Hülsing, Department of Mathematics and Computer Science, Technische Universiteit Eindhoven, P.O. Box 513, 5600 MB, Eindhoven, The Netherlands
### 摘要
> 众所周知，对于长度保持哈希函数，第二原像抵抗和原像抵抗之间存在着明显的差距。本文引入了一个简单的概念来填补这一差距。这个概念的一个结果是，紧凑规约可以消除多目标长度保持原像问题的交互性，例如在分析基于哈希的签名系统中出现的问题。先前的规约技术只适用于可忽略的一小部分长度保持哈希函数，预计排除了所有现成的哈希函数。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_2](https://doi.org/10.1007/978-3-030-34618-8_2)
## Structure-Preserving Signatures on Equivalence Classes from Standard Assumptions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#structure-preserving-signatures-on-equivalence-classes-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#structure-preserving-signatures-on-equivalence-classes-from-standard-assumptions)**
### 作者
* Mojtaba Khalili, Isfahan University of Technology, Isfahan, Iran
* Mohammad Dakhilalian, Isfahan University of Technology, Isfahan, Iran
* Daniel Slamanig, AIT Austrian Institute of Technology, Vienna, Austria
### 摘要
> ASIACRYPT 2014引入的等价类结构保持签名（SPS-EQ）是SPS的一种变体，其中将消息视为一个投影等价类，并且可以通过将向量乘以标量来获得同一类的新代表。给定一条消息和相应的签名，任何人都可以对来自同一等价类的任意代表产生更新和随机化的签名。SPS-EQ已被证明是许多密码应用的非常通用的构建模块。
> 
> 在本文中，我们提出了第一个在标准假设下具有EUF-CMA安全性的SPS-EQ方案。到目前为止，只有在泛型群模型中已知存在构造。最近一个候选方案是Fuchsbauer和Gay（PKC'18）提出的弱安全等价类签名，它是SPS-EQ的一种变体，仅满足较弱的不可伪造性和适应性概念。Fuchsbauer和Gay表明，这种较弱的不可伪造性概念对于SPS-EQ的许多已知应用是足够的。不幸的是，较弱的适应性概念只适用于半诚实（被动）模型，并且正如我们在本文中所示，使得他们的方案几乎无法在当前的SPS-EQ文献中的几乎所有广告应用程序中使用。
> 
> 然后，我们提出了一种新的具有紧密安全约简的EUF-CMA安全SPS-EQ方案，该方案基于SXDH假设，并提供了完美适应性的概念（在恶意密钥下）。为了实现在恶意密钥下的最强的完美适应性概念，我们需要一个公共参考字符串（CRS），这在标准假设下的构造中似乎是固有的。然而，对于SPS-EQ的大多数已知应用，我们不需要一个可信任的CRS（因为签名者可以在密钥生成期间生成CRS）。从技术上讲，我们的构造受到Gay等人（EUROCRYPT'18）最近的一项工作的启发，他们构造了一个严密安全的消息认证码，并将其转化为一个SPS方案，采用了Bellare和Goldwasser（CRYPTO'89）的技术。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_3](https://doi.org/10.1007/978-3-030-34618-8_3)
## Simple and Efficient KDM-CCA Secure Public Key Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#simple-and-efficient-kdm-cca-secure-public-key-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#simple-and-efficient-kdm-cca-secure-public-key-encryption)**
### 作者
* Fuyuki Kitagawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Takahiro Matsuda, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Keisuke Tanaka, Tokyo Institute of Technology, Tokyo, Japan
### 摘要
> 我们提出了两种高效的公钥加密（PKE）方案，满足密钥相关消息安全抗所选密文攻击（KDM-CCA安全）。第一种方案是与仿射函数相关的KDM-CCA安全。另一种是与多项式函数相关的KDM-CCA安全。我们的两种方案都基于Malkin、Teranishi和Yung（EUROCRYPT 2011）提出的KDM-CPA安全PKE方案。虽然我们的方案满足KDM-CCA安全，但与Malkin等人的方案相比，它们的效率开销非常小。因此，我们的方案相较于现有的KDM-CCA安全方案在效率上有大幅改进。
> 
> 我们通过扩展Kitagawa和Tanaka（ASIACRYPT 2018）的构造技术来实现我们的结果。我们的方案通过使用一个IND-CCA安全的PKE方案作为构建模块，通过半通用构造得到。我们基于决策复合剩余假设（DCR）和构建模块PKE方案的IND-CCA安全性证明了我们方案的KDM-CCA安全性。
> 
> 此外，如果构建模块PKE方案的IND-CCA安全性能够严密地约简到其底层计算假设，我们的安全证明是紧密的。通过使用现有的严密IND-CCA安全的PKE方案来实例化我们的方案，我们得到了首个密文仅由恒定数量的群元素组成的紧密KDM-CCA安全PKE方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_4](https://doi.org/10.1007/978-3-030-34618-8_4)
## Non-Committing Encryption with Quasi-Optimal Ciphertext-Rate Based on the DDH Problem.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#non-committing-encryption-with-quasi-optimal-ciphertext-rate-based-on-the-ddh-problem) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#non-committing-encryption-with-quasi-optimal-ciphertext-rate-based-on-the-ddh-problem)**
### 作者
* Yusuke Yoshida, Tokyo Institute of Technology, Tokyo, Japan
* Keisuke Tanaka, Tokyo Institute of Technology, Tokyo, Japan
* Fuyuki Kitagawa, NTT Secure Platform Laboratories, Tokyo, Japan
### 摘要
> 非承诺加密（NCE）是由Canetti等人（STOC '96）引入的。非正式地说，如果一个加密方案能够生成一个虚假的密文，该密文与真实的密文无法被区分开来，则该加密方案为非承诺加密。后续通过提供一个秘密密钥和一个加密随机硬币来“解释”该虚假密文作为消息加密，从而可以随后打开该虚假密文查看任何消息。Canetti等人证明了NCE在自适应环境下是实现多方计算协议安全的重要工具。NCE的有效性的一个重要衡量标准是密文速率，即密文长度除以消息长度，并且之前研究NCE的工作都集中在构建具有更好的密文速率的NCE方案上。
> 
> 我们提出了一个基于决策性Diffie-Hellman（DDH）问题的NCE方案，其中是安全参数。所提出的构造在无使用公共参考字符串的平均模型中实现了最佳的密文速率。在我们的工作之前，基于DDH问题的具有最佳密文速率的NCE方案是由Choi等人提出的（ASIACRYPT '09），其密文速率为。我们的NCE构造在精神上与Garg和Hajiabadi最近提出的陷门函数的构造（CRYPTO '18）相似。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_5](https://doi.org/10.1007/978-3-030-34618-8_5)
## Structure-Preserving and Re-randomizable RCCA-Secure Public Key Encryption and Its Applications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#structure-preserving-and-re-randomizable-rcca-secure-public-key-encryption-and-its-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#structure-preserving-and-re-randomizable-rcca-secure-public-key-encryption-and-its-applications)**
### 作者
* Antonio Faonio, IMDEA Software Institute, Madrid, Spain
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Javier Herranz, Cybercat and Universitat Politècnica de Catalunya, Barcelona, Spain
* Carla Ràfols, Cybercat and Universitat Pompeu Fabra, Barcelona, Spain
### 摘要
> 可重新随机化的抗选择密文攻击安全的公钥加密（Rand-RCCA PKE）方案将密文的可重新随机化属性与安全性需求相结合。本文提出了一个全新的Rand-RCCA PKE方案构造，该方案具有完全可重新随机化的特性。我们的构造保持了结构特征，可以在Type-3配对群上实例化，并且在计算和通信效率上比现有的完全可重新随机化方案（例如，Prabhakaran和Rosulek，CRYPTO’07）要好。接下来，我们恢复了Rand-RCCA概念，并展示了我们的Rand-RCCA PKE方案在新应用中的基本作用：（1）我们展示了如何将我们的方案转化为公开可验证的Rand-RCCA方案；（2）我们构造了一个具有（变种）模拟可靠性的可变形NIZK，允许进行可重新随机化；（3）我们提出了一个新的在常见参考字符串模型中安全的UC-secure可验证Mix-Net协议。由于结构保持属性，所有这些应用都具有高效性。值得注意的是，我们的Mix-Net协议是最高效的无随机预言的普遍可验证Mix-Net协议，其中CRS是与发送者数量无关的均匀随机字符串。该特性在大规模应用中非常重要。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_6](https://doi.org/10.1007/978-3-030-34618-8_6)
## iUC: Flexible Universal Composability Made Simple.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#iuc-flexible-universal-composability-made-simple) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#iuc-flexible-universal-composability-made-simple)**
### 作者
* Jan Camenisch, Dfinity, Zurich, Switzerland
* Stephan Krenn, AIT Austrian Institute of Technology GmbH, Vienna, Austria
* Ralf Küsters, University of Stuttgart, Stuttgart, Germany
* Daniel Rausch, University of Stuttgart, Stuttgart, Germany
### 摘要
> 证明复杂协议的安全性是一项至关重要且极具挑战性的任务。一种广泛使用的用于以模块化方式推理此类协议的方法是通用合成性。通用合成性的完美模型应为形式化证明提供一个可靠基础，并具备极高的灵活性，以便能够对各种不同的协议进行建模。它还应易于使用，包括有用的设计约定，用于重复性建模方面，如腐败、参与方、会话和子程序关系，使协议设计人员可以专注于其协议的核心逻辑。
> 
> 虽然存在许多用于通用合成性的模型，包括UC、GNUC和IITM模型，但它们中没有一个达到理想目标。因此，协议无法被忠实地建模和/或使用这些模型是一种负担，通常会导致未明确规定的协议和形式上不正确的证明。
> 
> 鉴于当前严峻的局势，本研究的目标是以一种无与伦比的方式结合健全性、灵活性和可用性，为通用合成性提供一个框架。开发这样一个安全框架是一项非常困难且微妙的任务，正如通用合成性框架的漫长历史所展示的那样。
> 
> 我们的框架名为iUC，构建在IITM模型之上，该模型已经具备了健全性和灵活性，但可用性不足。iUC的核心是一个简单的模板，用于以方便、形式准确和灵活的方式指定基本任意的协议。我们通过示例功能和实现来说明我们框架的主要特征。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_7](https://doi.org/10.1007/978-3-030-34618-8_7)
## Leakage Resilience of the Duplex Construction.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#leakage-resilience-of-the-duplex-construction) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#leakage-resilience-of-the-duplex-construction)**
### 作者
* Christoph Dobraunig, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### 摘要
> 侧信道攻击，尤其是差分功率分析（DPA），对于部署在恶意环境中的加密实现构成了严重威胁。对抗侧信道攻击的一种方法是设计能够抵御攻击的加密方案，这个领域主要包括抗泄露密码学。然而，迄今为止，抗泄露密码学主要集中在基于分组密码的设计上，对于基于置换的抗泄露密码学的了解非常有限。
> 
> 在本研究中，我们考虑了密钥双工构造的泄露鲁棒性：我们提出了一个泄露鲁棒双工模型，得出了在该模型中对密钥双工的安全性的细粒度界限，并将其与Taha和Schaumont（HOST 2014）以及Dobraunig等人（ToSC 2017）的观点相结合，以在泄露鲁棒的方式中使用双工构造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_8](https://doi.org/10.1007/978-3-030-34618-8_8)
## A Critical Analysis of ISO 17825 ('Testing Methods for the Mitigation of Non-invasive Attack Classes Against Cryptographic Modules').
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#a-critical-analysis-of-iso-17825-testing-methods-for-the-mitigation-of-non-invasive-attack-classes-against-cryptographic-modules) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#a-critical-analysis-of-iso-17825-testing-methods-for-the-mitigation-of-non-invasive-attack-classes-against-cryptographic-modules)**
### 作者
* Carolyn Whitnall, University of Bristol, Bristol, UK
* Elisabeth Oswald, University of Bristol, Bristol, UK
* Elisabeth Oswald, University of Klagenfurt, Klagenfurt, Austria
### 摘要
> ‘密码模块非侵入式攻击类测试方法的ISO标准化’（ISO/IEC 17825:2016）规定了测试向量泄露评估（TVLA）框架作为唯一的衡量（对称）加密实现是否易受差分侧信道攻击的方法。这是目前唯一公开可用的此类标准，也是首个完全依赖于TVLA实例的侧信道评估制度。
> 
> TVLA主要规定了统计泄露检测测试，旨在减轻测试面对日益增多的攻击向量的负担。它提供了“一致性测试”的诱人前景：如果一个设备通过了TVLA测试，那么人们可以有希望认为该设备在所有（一阶）差分侧信道攻击下是安全的。
> 
> 本文对该标准中TVLA的具体实例进行了统计评估。这个任务使我们开始研究是否可以仅通过泄露检测（TVLA）来评估设备的侧信道安全性。我们发现了一些严重问题，涉及标准及其对原始TVLA指南的改进。我们提出了一些现有方法的创新，并最后给出了最佳实践和负责任的结果报告建议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_9](https://doi.org/10.1007/978-3-030-34618-8_9)
## Location, Location, Location: Revisiting Modeling and Exploitation for Location-Based Side Channel Leakages.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#location-location-location-revisiting-modeling-and-exploitation-for-location-based-side-channel-leakages) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#location-location-location-revisiting-modeling-and-exploitation-for-location-based-side-channel-leakages)**
### 作者
* Christos Andrikos, National Techical University of Athens, Athens, Greece
* Giorgos Rassias, National Techical University of Athens, Athens, Greece
* Lejla Batina, Radboud University, Nijmegen, The Netherlands
* Lukasz Chmielewski, Radboud University, Nijmegen, The Netherlands
* Kostas Papagiannopoulos, Radboud University, Nijmegen, The Netherlands
* Kostas Papagiannopoulos, NXP Semiconductors, Hamburg, Germany
* Lukasz Chmielewski, Riscure BV, Delft, The Netherlands
* Guilherme Perin, Riscure BV, Delft, The Netherlands
* Liran Lerman, Thales Belgium, Herstal, Belgium
* Vasilios Mavroudis, University College London, London, England
* Alberto Sonnino, University College London, London, England
### 摘要
> 近场微探针具有隔离芯片表面小区域并实现高空间分辨率精确测量的能力。能够区分小区域的活动已经导致了基于位置的侧信道攻击的产生，这些攻击利用密码算法的空间依赖性以恢复秘钥。鉴于此类泄漏的相对未知性，本工作重新审视位置侧信道以扩大我们的建模和利用能力。我们的贡献是三方面的。首先，我们提供了一个简单的空间模型，部分捕捉了基于位置泄漏的影响。我们使用新建立的模型来模拟不同情景/对策的泄漏，并采用信息论方法来评估每种情况下实现的安全级别。其次，我们使用标准技术如均值差和多变量模板攻击，在现代ARM Cortex-M4芯片的SRAM上执行了首次成功的基于位置的攻击。第三，我们提出神经网络作为利用位置侧信道的分类器，并展示其在ARM Cortex-M4上的有效性，特别是在单次攻击和小型存储器区域的情况下。模板攻击和神经网络分类器能够实现高精度的区分，以100%的成功率区分128字节的2个SRAM区域，以32%的成功率甚至分辨256个SRAM字节区域。这种改进的利用能力重新激发了对各种实现中的位置漏洞的兴趣，从具有大内存占用的RSA/ECC到具有较小内存使用量的查找表AES。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_10](https://doi.org/10.1007/978-3-030-34618-8_10)
## Simple Refreshing in the Noisy Leakage Model.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#simple-refreshing-in-the-noisy-leakage-model) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#simple-refreshing-in-the-noisy-leakage-model)**
### 作者
* Stefan Dziembowski, University of Warsaw, Warsaw, Poland
* Karol Żebrowski, University of Warsaw, Warsaw, Poland
* Sebastian Faust, TU Darmstadt, Darmstadt, Germany
### 摘要
> 掩码方案是一种显著的抵御功耗分析的对策，通过在计算过程中随机隐藏生成的值来实现。随机性通常通过所谓的刷新方案注入到掩码算法中，该方案在每个掩码操作后放置，因此是设计高效的掩码方案的主要瓶颈之一。我们工作的主要贡献是调查一个非常简单且高效的刷新方案的安全性，并证明它在嘈杂泄漏模型（EUROCRYPT’13）下的安全性。与早期的构造相比，我们的刷新方案更加高效，仅使用n个随机值和\({<}2n\)个操作，其中n是安全参数。此外，我们展示了在存在噪声泄漏的情况下如何在更复杂的掩码计算中使用我们的刷新方案。我们的研究结果是使用一种分析嘈杂泄漏模型中掩码方案的新方法得出的，这可能具有独立的研究价值。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_11](https://doi.org/10.1007/978-3-030-34618-8_11)
## The Exchange Attack: How to Distinguish Six Rounds of AES with 2^88.2 Chosen Plaintexts.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#the-exchange-attack-how-to-distinguish-six-rounds-of-aes-with-2-88-2-chosen-plaintexts) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#the-exchange-attack-how-to-distinguish-six-rounds-of-aes-with-2-88-2-chosen-plaintexts)**
### 作者
* Navid Ghaedi Bardeh, Department of Informatics, University of Bergen, 5020, Bergen, Norway
* Sondre Rønjom, Department of Informatics, University of Bergen, 5020, Bergen, Norway
### 摘要
> 本文介绍了一种名为交换等效攻击的新的密码分析攻击技术，适用于SPN型分组密码设计。我们的新技术首次提出了适用于6轮AES的秘密密钥选择性明文区分器。该区分器的复杂度在数据、内存和计算复杂度方面约为 2^88.2。对于精简至六轮的AES密码，明文区分攻击实现上完全基于5轮AES的交换攻击的简单扩展，该攻击需要2^30的选择性明文和计算。这也为精简至五轮的AES密码进行了新的记录。本文的主要结果是，在限制在交换不变的明文集合上，至少六轮AES密码会产生偏差。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_12](https://doi.org/10.1007/978-3-030-34618-8_12)
## Algebraic Cryptanalysis of STARK-Friendly Designs: Application to MARVELlous and MiMC.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#algebraic-cryptanalysis-of-stark-friendly-designs-application-to-marvellous-and-mimc) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#algebraic-cryptanalysis-of-stark-friendly-designs-application-to-marvellous-and-mimc)**
### 作者
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London, London, UK
* Carlos Cid, Information Security Group, Royal Holloway, University of London, London, UK
* Carlos Cid, Simula UiB, Bergen, Norway
* Dmitry Khovratovich, Dusk Network, Amsterdam, The Netherlands
* Dmitry Khovratovich, ABDK Consulting, Tallinn, Estonia
* Lorenzo Grassi, IAIK, Graz University of Technology, Graz, Austria
* Reinhard Lüftenegger, IAIK, Graz University of Technology, Graz, Austria
* Christian Rechberger, IAIK, Graz University of Technology, Graz, Austria
* Markus Schofnegger, IAIK, Graz University of Technology, Graz, Austria
* Lorenzo Grassi, Know-Center, Graz, Austria
* Dmitry Khovratovich, Evernym Inc., Salt Lake City, USA
### 摘要
> Jarvis和散列函数Friday都是MARVELlous密码原语家族的成员，是针对设计透明、后量子安全零知识证明系统（如ZK-STARKs）适用的对称密钥算法的首批提议方案。在本文中，我们描述了对Jarvis和Friday的代数密码分析，并显示所提议的轮数不足以提供足够的安全性。在Jarvis中，轮函数是通过有限域求逆、全度数仿射排列多项式和密钥加法相结合得到的。然而，我们发现，即使仿射多项式的高次数可能阻止一些代数攻击（正如设计者所声称的那样），轮函数的特定代数属性使得Jarvis和Friday都容易受到Gröbner基攻击。我们还考虑了MiMC，这是一种类似结构的分组密码。然而，这种密码对我们提出的攻击策略具有抵抗力。尽管如此，我们对Jarvis和Friday的成功密码分析确实说明了针对“代数平台”（如STARKs、FHE或MPC）的分组密码设计可能特别容易受到代数攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_13](https://doi.org/10.1007/978-3-030-34618-8_13)
## MILP-aided Method of Searching Division Property Using Three Subsets and Applications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#milp-aided-method-of-searching-division-property-using-three-subsets-and-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#milp-aided-method-of-searching-division-property-using-three-subsets-and-applications)**
### 作者
* Senpeng Wang, PLA SSF Information Engineering University, Zhengzhou, China
* Bin Hu, PLA SSF Information Engineering University, Zhengzhou, China
* Jie Guan, PLA SSF Information Engineering University, Zhengzhou, China
* Kai Zhang, PLA SSF Information Engineering University, Zhengzhou, China
* Tairong Shi, PLA SSF Information Engineering University, Zhengzhou, China
### 摘要
> 划分属性是由Todo在EUROCRYPT 2015提出的广义积分属性，随后在FSE 2016，Todo和Morii提出了常规基于比特的划分属性（CBDP）和使用三个子集的基于比特的划分属性（BDPT）。最初，这两种基于比特的划分属性由于巨大的时间和内存复杂性而无法应用于具有大块大小的密码。在ASIACRYPT 2016，Xiang等人将混合整数线性规划（MILP）方法扩展到基于CBDP的积分区分器的搜索中。BDPT可以找到比CBDP更准确的积分区分器，但无法高效建模。
> 
> 本文着重于基于BDPT搜索积分区分器的可行性。我们首次提出了BDPT的剪枝技术和快速传播方法。基于这些，提出了一种MILP辅助的BDPT传播方法。然后，我们将这种方法应用于一些分组密码。对于SIMON64，PRESENT和RECTANGLE，我们找到了比以前最长的区分器更平衡的比特。对于LBlock，我们找到了一个更好的16轮积分区分器，活跃比特更少。对于其他分组密码，我们的结果与以前的最长区分器一致。
> 
> 立方攻击是反对对称密码系统的重要密码分析技术，特别针对流密码。而立方攻击中最重要的一步是超多项式恢复。受Todo在CRYPTO 2017提出的基于CBDP的立方攻击的启发，我们提出了一种利用BDPT来恢复立方攻击中的超多项式的方法。我们将这种新方法应用于轮减Trivium。具体而言，CRYPTO 2017中恢复832轮Trivium的超多项式的时间复杂度从\(2^{77}\)降低到了实际水平，而CRYPTO 2018中恢复839轮Trivium的超多项式的时间复杂度从\(2^{79}\)降低到了实际水平。然后，我们提出了一种理论攻击，可以恢复Trivium达到841轮的超多项式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_14](https://doi.org/10.1007/978-3-030-34618-8_14)
## Cryptanalysis of GSM Encryption in 2G/3G Networks Without Rainbow Tables.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#cryptanalysis-of-gsm-encryption-in-2g-3g-networks-without-rainbow-tables) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#cryptanalysis-of-gsm-encryption-in-2g-3g-networks-without-rainbow-tables)**
### 作者
* Bin Zhang, TCA, SKLCS, Institute of Software, Chinese Academy of Sciences, Beijing, China
* Bin Zhang, State Key Laboratory of Cryptology, P.O.Box 5159, Beijing, 100878, China
* Bin Zhang, University of Chinese Academy of Sciences, Beijing, 100049, China
* Bin Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
### 摘要
> ETSI开发的GSM标准用于2G网络，采用A5/1流密码保护手机通信中的无线隐私，并已成为移动通信领域事实上的全球标准，尽管随后出现了3G/4G标准。目前已经有许多密码分析结果可用，其中最值得注意的结果都需要使用大规模的彩虹表或分布式破解网络进行大量的预计算。在本文中，我们提出了一种快速的接近碰撞攻击方法，对2G/3G网络中的GSM加密进行攻击，与以往最佳结果相比，这种攻击方法是全新的且更具威胁性。我们将Eurocrypt 2018中提出的快速接近碰撞攻击方法与A5/1中的具体不规则时钟方式结合起来，以实现低复杂度的状态恢复攻击。结果显示，如果一个密钥流帧的前64位可用，则在约\(2^{31.79}\)次密码周期内，可以可靠地找到A5/1的秘密密钥，前提是拥有约1 MB的内存，并在预计算约\(2^{20.26}\)次密码周期后。我们当前的实施明确证明了建议攻击的有效性。由于A5/3和GPRS与A5/1共享相同的密钥，因此最终可以将这种攻击转化为对任何GSM网络的攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_15](https://doi.org/10.1007/978-3-030-34618-8_15)
## Tightly Secure Inner Product Functional Encryption: Multi-input and Function-Hiding Constructions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#tightly-secure-inner-product-functional-encryption-multi-input-and-function-hiding-constructions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#tightly-secure-inner-product-functional-encryption-multi-input-and-function-hiding-constructions)**
### 作者
* Junichi Tomida, NTT, Tokyo, Japan
### 摘要
> 紧密安全的加密方案在选择明文安全公钥加密、基于身份的加密、签名等领域得到了广泛研究。我们将紧密安全密码学扩展到内积功能加密（IPFE），并提出了与IPFE相关的第一个紧密安全方案。
> 
> 我们首先构建了一个新的IPFE方案，在多用户和多挑战场景中具有紧密的安全性。换句话说，即使对手获取了许多用户生成的密文，我们方案的安全性也不会降低。我们的方案可以在无配对群上构建，并在矩阵决策Diffie-Hellman（MDDH）假设下安全，该假设是对决策Diffie-Hellman（DDH）假设的推广。通过应用Lin（CRYPTO 2017）和Abdalla等人（CRYPTO 2018）提出的已知转换方法，我们可以分别获得第一个具有紧密安全性隐藏功能的IPFE方案和多输入IPFE（MIPFE）方案。
> 
> 我们的第二个主要贡献是提出了一个新的通用转换方法，将隐藏功能的IPFE转换为隐藏功能的MIPFE，这是Abdalla等人（CRYPTO 2018）留下的一个开放问题。通过将我们的转换应用到上述描述的具有紧密安全性的隐藏功能IPFE方案，我们获得了第一个具有紧密安全性隐藏功能的MIPFE方案。
> 
> 最后，我们所有方案的安全性归约是完全紧密的，这意味着我们方案的安全性仅降低到具有恒定安全损失的MDDH假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_16](https://doi.org/10.1007/978-3-030-34618-8_16)
## Public-Key Function-Private Hidden Vector Encryption (and More).
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#public-key-function-private-hidden-vector-encryption-and-more) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#public-key-function-private-hidden-vector-encryption-and-more)**
### 作者
* James Bartusek, UC Berkeley, Berkeley, USA
* Brent Carmer, Galois, Portland, USA
* Alex J. Malozemoff, Galois, Portland, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Zhengzhong Jin, Johns Hopkins University, Baltimore, USA
* Tancrède Lepoint, Google, Mountain View, USA
* Mariana Raykova, Google, Mountain View, USA
* Fermi Ma, Princeton University, Princeton, USA
* Tal Malkin, Columbia University, New York, USA
### 摘要
> 我们构建了一个用于“小超集功能”的公钥函数私有谓词加密方案，这个功能是由Beullens和Wee (PKC 2019)最近引入的。这个功能涵盖了几个重要的谓词类别：
> 
> 点函数。对于点函数谓词，我们的构造等同于公钥函数-私有匿名基于身份的加密。
> 
> 合取。如果谓词计算的是一个合取操作，我们的构造将成为一个公钥函数私有的隐藏向量加密方案。这解决了Boneh、Raghunathan和Segev (ASIACRYPT 2013)提出的一个开放问题。
> 
> d-CNF和常量大小d的一次读取的合取。
> 
> 我们的构造扩展了Bishop等人 (CRYPTO 2018)、Beullens和Wee (PKC 2019)以及Bartusek等人 (EUROCRYPT 2019)的基于群的混淆方案，在公钥函数私有谓词加密的环境下实现。我们实现了平均情况下函数隐私的概念，保证只要f来自具有足够熵的分布，解密密钥\(\mathsf {sk}_f\)不会泄露任何关于f的信息。我们将这个安全概念形式化为Boneh、Raghunathan和Segev (CRYPTO 2013)的（增强的）真实或随机函数隐私定义的概括。我们的构造依赖于双线性群，并在通用双线性群模型中证明其安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_17](https://doi.org/10.1007/978-3-030-34618-8_17)
## Multi-Client Functional Encryption for Linear Functions in the Standard Model from LWE.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#multi-client-functional-encryption-for-linear-functions-in-the-standard-model-from-lwe) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#multi-client-functional-encryption-for-linear-functions-in-the-standard-model-from-lwe)**
### 作者
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, INRIA, UCBL), Lyon, France
* Radu Ţiţiu, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, INRIA, UCBL), Lyon, France
* Radu Ţiţiu, Bitdefender, Bucharest, Romania
### 摘要
> 多客户功能加密（MCFE）允许\(\ell\)个客户端在某个标签下加密密文\((\mathbf {C}_{t,1},\mathbf {C}_{t,2},\ldots ,\mathbf {C}_{t,\ell })\)。每个客户端可以使用由受信任的权威颁发的私人加密密钥\(\mathsf {ek}_i\)，以这样的方式加密他自己的数据\(X_i\)，以便只要所有的\(\mathbf {C}_{t,i}\)共享相同的标签t，具有功能密钥\(\mathsf {dk}_f\)的评估者可以评估\(f(X_1,X_2,\ldots ,X_\ell )\)，而不会对底层明文\(X_i\)了解其他。功能解密密钥可以由中央权威使用主秘密密钥派生。在决策Diffie-Hellman假设下，Chotard等人（Asiacrypt 2018）最近描述了一个适应性安全的MCFE方案，用于对整数进行线性函数的评估。他们还提出了他们方案的分散变体（DMCFE），该方案不依赖于集中式机构，而是允许加密者以分布方式颁发功能秘密密钥。虽然高效，但他们的构造在安全性分析中都依赖于随机神谕。在本文中，我们为相同的功能构建了一个标准模型MCFE方案，并证明它在自适应腐败下是完全安全的。我们的证明依赖于Learning-With-Errors（\(\mathsf {LWE}\)）假设，并且不需要随机神谕模型。我们还提供了我们方案的分散变体，我们证明在静态腐败设置下是安全的（但对于自适应选择的消息）在\(\mathsf {LWE}\)假设下。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_18](https://doi.org/10.1007/978-3-030-34618-8_18)
## From Single-Input to Multi-client Inner-Product Functional Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#from-single-input-to-multi-client-inner-product-functional-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#from-single-input-to-multi-client-inner-product-functional-encryption)**
### 作者
* Michel Abdalla, DIENS, École normale supérieure, CNRS, PSL University, Paris, France
* Michel Abdalla, INRIA, Paris, France
* Fabrice Benhamouda, Algorand Foundation, New York, NY, USA
* Romain Gay, University of California, Berkeley, CA, USA
### 摘要
> 我们提出了一种新的通用构造多客户功能加密（MCFE）的方法，用于内积计算，从单输入功能内积加密和标准伪随机函数。尽管它很简单，新的构造支持标签，在自适应损坏下达到标准模型下的安全性，并且可以从普通DDH，LWE和Paillier假设中实例化。在我们的工作之前，已知的构造都需要基于离散对数的假设和随机预言模型。由于我们的新方案与Abdalla等人（PKC 2019）的编译器不兼容，后者用于去中心化生成功能解密密钥，因此我们还展示了如何修改后一转换以获得我们方案的去中心化版本，具有类似的特性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_19](https://doi.org/10.1007/978-3-030-34618-8_19)
## Rate-1 Trapdoor Functions from the Diffie-Hellman Problem.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#rate-1-trapdoor-functions-from-the-diffie-hellman-problem) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#rate-1-trapdoor-functions-from-the-diffie-hellman-problem)**
### 作者
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Sanjam Garg, University of California, Berkeley, USA
* Mohammad Hajiabadi, University of California, Berkeley, USA
* Kevin Liu, University of California, Berkeley, USA
* Giulio Malavolta, Simons Institute for the Theory of Computing, Berkeley, USA
### 摘要
> 陷门函数（Trapdoor functions，TDFs）是密码学中的基础构件之一。对底层假设和结果实例的效率进行研究，对于理论和实践都具有重要意义。在这项工作中，我们改进了基于Diffie-Hellman问题的TDF的输入到图像比率。具体而言，我们提出：
> 
> (a) 一种基于计算Diffie-Hellman（CDH）假设的1比特率TDF，改进了Garg、Gay和Hajiabadi [EUROCRYPT 2019]的结果，该结果实现了线性大小的输出，但是常数较大。我们的技术结合了非二进制字母表和大型域上的高比特率纠错码。
> 
> (b) 一种满足决策Diffie-Hellman（DDH）假设的1比特率确定性公钥加密，以满足块源安全。虽然这个问题最近由Döttling等人解决了[CRYPTO 2019]，但我们的方案在概念上更简单，具体上更高效。我们通过实现我们的构造来证明这个事实。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_20](https://doi.org/10.1007/978-3-030-34618-8_20)
## The Local Forking Lemma and Its Application to Deterministic Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#the-local-forking-lemma-and-its-application-to-deterministic-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#the-local-forking-lemma-and-its-application-to-deterministic-encryption)**
### 作者
* Mihir Bellare, University of California San Diego, La Jolla, USA
* Wei Dai, University of California San Diego, La Jolla, USA
* Lucy Li, Cornell University, Ithaca, USA
### 摘要
> 您好！以下是研究论文摘要的简体中文翻译：
> 
> 我们绕过了对于依赖于公钥的消息进行确定性加密的不可能性结果。在这种情况下，我们展示了经典的使用哈希进行加密的方案可以在各种消息分布范围内提供消息恢复安全性。证明依赖于一个新的分叉引理变种，在这个变种中，随机预言机仅在一个分叉点上重新编程，而不是在分叉点之后的所有点上重新编程。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_21](https://doi.org/10.1007/978-3-030-34618-8_21)
## Fine-Grained Cryptography Revisited.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#fine-grained-cryptography-revisited) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#fine-grained-cryptography-revisited)**
### 作者
* Shohei Egashira, Tokyo Institute of Technology, Tokyo, Japan
* Keisuke Tanaka, Tokyo Institute of Technology, Tokyo, Japan
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
### 摘要
> 精细化的密码学原语对抗具有有限资源的对手是安全的，并且可以由诚实用户使用比对手更少的资源进行计算。在本文中，我们重新审视了Degwekar、Vaikuntanathan和Vasudevan在2016年的Crypto论文中关于精细化密码学的结果，并展示了三种关键的基本精细化密码学原语的构造：单向置换、哈希证明系统（进而意味着针对已选密码文攻击的公钥加密方案）和陷阱单向函数。我们所有的构造都可以在\(\mathsf {NC^1}\)中计算，并在被广泛认为是最坏情况的假设下，对（非均匀）\(\mathsf {NC^1}\)电路是安全的，即假设\(\mathsf {NC^1}\subsetneq \mathsf{\oplus L/poly}\)成立。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_22](https://doi.org/10.1007/978-3-030-34618-8_22)
## Shorter QA-NIZK and SPS with Tighter Security.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#shorter-qa-nizk-and-sps-with-tighter-security) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#shorter-qa-nizk-and-sps-with-tighter-security)**
### 作者
* Masayuki Abe, NTT Corporation, Tokyo, Japan
* Charanjit S. Jutla, IBM T. J. Watson Research Center, Yorktown Heights, USA
* Miyako Ohkubo, Security Fundamentals Laboratories, CSR, NICT, Tokyo, Japan
* Jiaxin Pan, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Arnab Roy, Fujitsu Laboratories of America, Sunnyvale, USA
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
### 摘要
> “准自适应非交互零知识证明 (QA-NIZK) 系统和结构保全签名 (SPS) 方案是构建实用基于配对的加密方案的两个强大工具。它们的效率直接影响到派生高级协议的效率。
> 
> 我们使用紧密安全降低构造更有效的 QA-NIZK 和 SPS 方案。我们的 QA-NIZK 方案是第一个同时实现紧密模拟声音性和常数证明大小（以群元素数量为单位）的方案，而来自 Abe 等人的最新方案（ASIACRYPT 2018）则实现了紧密安全性，证明大小线性依赖于语言和见证的大小。假设 Symmetric eXternal Diffie-Hellman（SXDH）问题的困难程度，我们的方案在证明中仅包含 14 个元素，并且仍然独立于语言和证人的大小。此外，我们的方案比以前的方案具有更紧密的模拟声音性。
> 
> 技术上，我们从最近的 SPS 方案（Gay 等人，EUROCRYPT 2018）中细化和扩展了分区技术。此外，我们通过使用 OR 语言的 NIZK 证明系统的松弛版本（称为指定证人 NIZK 系统），提高了紧密安全的 SPS 方案的效率。在 SXDH 假设下，我们的 SPS 方案在签名中包含 11 个群元素，这是紧密方案中最短的，并且与早期的非紧密方案（Abe 等人，ASIACRYPT 2012）相同。与已知的最短的非紧密方案（Jutla 和 Roy，PKC 2017）相比，我们的方案在额外增加 5 个元素的代价下实现了紧密安全。
> 
> 本文中的所有方案都根据 Matrix Diffie-Hellman 假设（Escala 等人，CRYPTO 2013）被证明是安全的。这是一类包括众所周知的 SXDH 和 DLIN 假设的假设，并为我们的构造提供了干净的代数洞察力。据我们所知，我们的方案在具有相同功能和安全属性的方案中实现了最佳效率。这自然地导致了基于模拟声音 QA-NIZK 和 SPS 的密码系统效率的提高。”

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_23](https://doi.org/10.1007/978-3-030-34618-8_23)
## Efficient Noninteractive Certification of RSA Moduli and Beyond.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#efficient-noninteractive-certification-of-rsa-moduli-and-beyond) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#efficient-noninteractive-certification-of-rsa-moduli-and-beyond)**
### 作者
* Sharon Goldberg, Boston University, Boston, MA, USA
* Leonid Reyzin, Boston University, Boston, MA, USA
* Omar Sagga, Boston University, Boston, MA, USA
* Foteini Baldimtsi, George Mason University, Fairfax, VA, USA
### 摘要
> 在许多应用中，验证RSA公钥（N，e）是否指定了整个空间\(\mathbb {Z}_N\)上的一个置换是很重要的，以防止由于恶意生成的公钥而引发的攻击。我们设计并实现了一个简单而高效的非交互零知识协议（在随机预言机模型下）来完成这项任务。担心对手密钥生成的应用程序只需将我们的证明附加到RSA公钥中，而不需要对现有代码或密码库进行任何其他修改。用户只需执行一次验证证明的操作，以确保将e的幂次运算作为整数模N的置换。对于典型的参数设置，该证明由九个模N的整数组成；生成和验证证明都需要大约九次模幂运算。
> 
> 我们使我们的结果超越了RSA密钥，并且为N的其他属性提供了高效的非交互零知识证明。这些证明可以用于验证N适用于Paillier加密系统，N是否是两个素数的乘积或者N是否是Blum整数。与Auerbach和Poettering（PKC 2018）最近的相关工作相比，他们为类似的语言提供了两次消息的协议，我们的协议更加高效且不需要交互，这使得可以应用于更广泛的应用领域。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_24](https://doi.org/10.1007/978-3-030-34618-8_24)
## Shorter Pairing-Based Arguments Under Standard Assumptions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#shorter-pairing-based-arguments-under-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#shorter-pairing-based-arguments-under-standard-assumptions)**
### 作者
* Alonso González, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, INRIA, UCBL), Lyon, France
* Carla Ràfols, Universitat Pompeu Fabra and Cybercat, Barcelona, Spain
### 摘要
> 本文构建了一种高效的非交互式论证，用于算术和布尔电路的正确评估，证明大小为O(d)组元，其中d是电路的乘法深度，基于可证伪的假设。这是通过结合来自SNARKs和线性空间成员资格QA-NIZK论证的技术实现的。第一个构造非常高效（证明大小约为4d组元，验证成本约为4d配对和O(n+n'+d)指数运算，其中n是输入的大小，n'为输出的大小），但是一种攻击只能在假设了线性空间成员资格QA-NIZK论证的知识完整性的情况下排除。我们提供了一个替代构造，用双线性群的决策假设替换了这个假设，代价是证明大小近乎翻倍。布尔电路的构造可以通过Groth-Sahai证明实现零知识，从而实现基于双线性群的可证伪假设的电路可满足性的NIZK论证，证明大小为O(n+d)。
> 
> 我们的主要技术工具是我们所称的“知识转移论证”。给定承诺C1和开放x，这样的论证允许证明一些其他承诺C2打开到f(x)，对于某些函数f，即使C2不可提取。我们构建了非常短的，恒定大小的，基于配对的知识传输论证，对于任何线性函数以及Hadamard乘积都可以进行常数时间验证。这些允许将输入的知识传输到电路的更低层。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_25](https://doi.org/10.1007/978-3-030-34618-8_25)
