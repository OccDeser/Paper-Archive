# IEEE Symposium on Security and Privacy[2021]
## Using Selective Memoization to Defeat Regular Expression Denial of Service (ReDoS).
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#using-selective-memoization-to-defeat-regular-expression-denial-of-service-redos) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#using-selective-memoization-to-defeat-regular-expression-denial-of-service-redos)**
### 作者
* James C. Davis, Electrical & Computer Engineering, Purdue University
* Francisco Servant, Computer Science, Virginia Tech
* Dongyoon Lee, Computer Science, Stony Brook University
### 摘要
> 正则表达式（regexes）是大多数主流编程语言中的一种拒绝服务向量。最近的实证研究表明，在典型的正则表达式引擎中，最坏情况下高达10%的正则表达式呈现超线性的行为。因此，许多网络服务可能容易受到正则表达式拒绝服务（ReDoS）攻击。如果能够透明地降低正则表达式引擎的时间复杂度，就可以在不增加应用程序开发成本的情况下消除ReDoS漏洞。不幸的是，现有的ReDoS防御方法——替换正则表达式引擎、对其进行优化或按部就班地替换正则表达式——都面临着可靠性和兼容性的挑战。全面的记忆化方法具备可靠性和兼容性，但其空间成本太高。迄今为止，还没有有效的ReDoS防御方法被广泛采用。我们提出了一种技术，通过低空间成本可证明地消除典型正则表达式的超线性行为。我们提出了具有不同空间/时间折衷的选择性记忆化方案。然后，我们描述了一种编码方案，利用对正则表达式引擎语义的深入理解进一步降低记忆化的空间成本。我们还考虑了如何安全地处理扩展的正则表达式特性。我们实现了我们的提案，并在一组真实正则表达式上进行了评估。我们发现，选择性记忆化可以将记忆化的空间成本在中位数的正则表达式上降低一个数量级，并且运行长度编码进一步将90%的正则表达式的空间成本降低到常数级别。"那些无法记住过去的人注定要重蹈覆辙。" - 乔治·桑塔亚那

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519427/](https://ieeexplore.ieee.org/document/9519427/)
## Co-Inflow: Coarse-grained Information Flow Control for Java-like Languages.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#co-inflow-coarse-grained-information-flow-control-for-java-like-languages) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#co-inflow-coarse-grained-information-flow-control-for-java-like-languages)**
### 作者
* Jian Xiang, Harvard University
* Stephen Chong, Harvard University
### 摘要
> 粗粒度动态信息流控制（IFC）与面向对象的编程语言（如Java）非常匹配。Java语言的抽象与粗粒度IFC概念相吻合，因此可以在不需要显著不同的设计模式或过多的安全注释的情况下，为Java清晰地扩展粗粒度动态IFC，并且不会造成过多的性能开销。我们提出了Co-Inflow：一个带有粗粒度动态IFC的Java扩展。通过谨慎的设计选择和默认设置，程序员通常只需要在Java程序中添加很少的注释，就可以将其转换为具有相对较好精度的Co-Inflow程序。额外的注释可以提高精度。我们通过为类似Java的环境实例化和特化粗粒度IFC的最新进展，并使用不透明标记值：Co-Inflow运行时自动和安全地创建和使用标记值的限制，实现了精度和注释负担之间的权衡。我们已经在一个中等规模的命令式计算模型中捕获了Co-Inflow的本质，并证明它提供了终止不敏感的非干扰安全保证。我们已经有了Co-Inflow的原型实现，并用它来评估Co-Inflow的精度、可用性和潜在性能。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519397/](https://ieeexplore.ieee.org/document/9519397/)
## When Function Signature Recovery Meets Compiler Optimization.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#when-function-signature-recovery-meets-compiler-optimization) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#when-function-signature-recovery-meets-compiler-optimization)**
### 作者
* Yan Lin, Singapore Management University
* Debin Gao, Singapore Management University
### 摘要
> 使用从二进制可执行文件中恢复的函数签名（包括参数数量和参数类型）来匹配间接函数调用者和被调用者，已被提出用于构建更细粒度的控制流图（CFG），以帮助控制流完整性（CFI）强制实施。然而，各种编译器优化可能违反调用约定，并导致匹配不上的函数签名。在本文中，我们提出了八种编译器优化影响函数签名恢复的场景，并报告了使用不同优化级别的1,344个真实世界应用程序的实验结果。有趣的是，我们的实验表明，编译器优化对函数签名恢复有积极和消极的影响，例如，它通过消除调用者中多余的指令使参数数量的计数更准确，但是它通过在调用者和被调用者中选择最高效（但潜在不同）的类型，损害了参数类型的匹配。为了更好地处理这些编译器优化，我们提出了一组改进的策略，并报告了从1,344个应用程序中构建的更准确的CFG模型。我们还将从二进制可执行文件中恢复的结果与从程序源代码中提取的结果进行了比较，并揭示了编译器优化使准确恢复函数签名的任务无法确定的场景。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519479/](https://ieeexplore.ieee.org/document/9519479/)
## How Did That Get In My Phone? Unwanted App Distribution on Android Devices.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#how-did-that-get-in-my-phone-unwanted-app-distribution-on-android-devices) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#how-did-that-get-in-my-phone-unwanted-app-distribution-on-android-devices)**
### 作者
* Platon Kotzias, NortonLifelock Research Group
* Juan Caballero, IMDEA Software Institute
* Leyla Bilge, NortonLifelock Research Group
### 摘要
> Android是最受欢迎的操作系统，拥有数十亿的活跃设备。不幸的是，它的受欢迎程度和开放性使其成为不受欢迎的应用程序(例如恶意软件和潜在的不受欢迎的程序)的目标。在Android中，应用程序的安装通常是通过官方和其他替代市场进行的，但也可以通过其他较小且不太了解的替代分发途径，例如Web下载、按次安装服务、备份恢复、垃圾软件和即时通讯工具。本研究通过量化和比较不同分发途径上的应用分发情况，对不受欢迎的应用分发进行了彻底调查。我们的测量核心是一家大型安全供应商的声誉日志，其中包括2019年6月至9月之间记录的1200万台设备中观察到的790万个应用程序。作为第一步，我们测量发现10%至24%的用户设备至少遇到一个不受欢迎的应用，并比较恶意软件和不受欢迎的程序的普遍性。通过分析安装程序和子应用之间的安装关系，我们发现Play市场是主要的应用分发途径，负责87%的所有安装和67%的不受欢迎的应用安装，同时也拥有最好的不受欢迎应用的防御机制。相反，替代市场分发5.7%的所有应用程序，但超过10%的不受欢迎的应用程序来自这些市场。垃圾软件也是一个显著的不受欢迎的应用分发途径，占据6%的安装比例。此外，备份恢复是一个无意中的分发途径，可能会导致不受欢迎的应用在用户更换手机后仍然存在。我们估计按次安装服务上的不受欢迎的应用分发要小于Windows平台。最后，我们观察到Web下载很少见，但与替代市场相比，提供了更高的风险。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519429/](https://ieeexplore.ieee.org/document/9519429/)
## Android Custom Permissions Demystified: From Privilege Escalation to Design Shortcomings.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#android-custom-permissions-demystified-from-privilege-escalation-to-design-shortcomings) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#android-custom-permissions-demystified-from-privilege-escalation-to-design-shortcomings)**
### 作者
* Rui Li, School of Cyber Science and Technology, Shandong University; Ministry of Education, Key Laboratory of Cryptologic Technology and Information Security, Shandong University
* Wenrui Diao, School of Cyber Science and Technology, Shandong University; Ministry of Education, Key Laboratory of Cryptologic Technology and Information Security, Shandong University
* Zhou Li, University of California, Irvine
* Jianqi Du, School of Cyber Science and Technology, Shandong University; Ministry of Education, Key Laboratory of Cryptologic Technology and Information Security, Shandong University
* Shanqing Guo, School of Cyber Science and Technology, Shandong University; Ministry of Education, Key Laboratory of Cryptologic Technology and Information Security, Shandong University
### 摘要
> 权限是保护Android用户数据和隐私的基本安全机制。鉴于其重要性，安全研究人员已经从各个方面研究了权限的设计和使用。然而，大多数以前的研究都集中在系统权限的安全问题上。被许多研究人员忽视的是，应用程序可以使用自定义权限与其他应用程序共享其资源和功能。然而，使用自定义权限的安全影响尚未被充分理解。本文系统评估了Android自定义权限的设计和实现。值得注意的是，我们构建了一个名为CuPerFuzzer的自动模糊测试工具，用于检测Android操作系统中存在的与自定义权限相关的漏洞。CuPerFuzzer将权限机制的操作视为黑盒，并执行大量有针对性的测试用例以触发特权提升。在实验中，CuPerFuzzer成功发现了2384个有效案例和30个关键路径。通过调查这些漏洞案例并分析Android操作系统的源代码，我们进一步确定了Android权限框架中存在的一系列严重设计缺陷，包括悬空的自定义权限、不一致的权限组映射、自定义权限提升和不一致的权限定义。利用这些缺陷之一，恶意应用可以在用户未授权的情况下获取危险的系统权限，并进一步访问未经授权的平台资源。基于这些观察结果，我们提出了一些通用的设计准则来保护自定义权限。我们的研究结果得到了Android安全团队的认可，并被评为高风险级别。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519385/](https://ieeexplore.ieee.org/document/9519385/)
## Trust, But Verify: A Longitudinal Analysis Of Android OEM Compliance and Customization.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#trust-but-verify-a-longitudinal-analysis-of-android-oem-compliance-and-customization) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#trust-but-verify-a-longitudinal-analysis-of-android-oem-compliance-and-customization)**
### 作者
* Andrea Possemato, IDEMIA; EURECOM
* Simone Aonzo, EURECOM
* Davide Balzarotti, EURECOM
* Yanick Fratantonio, EURECOM; Cisco Talos
### 摘要
> 如今，超过20亿台移动设备运行着Android操作系统。这一成功的核心在于Android开源项目的开源性质以及供应商对代码基础的定制能力，并将其装载到自己的设备上。然而，尽管定制化的可能性对供应商有利，但也存在兼容性和安全问题。为了预防这些问题，谷歌开发了一系列需求，供应商必须满足这些需求才能将其设备定为“Android”，并且最近推出了Project Treble来分割供应商的定制。这些需求被编码为一份文本文档（称为兼容性定义文档，或CDD）和各种自动化测试。本文对Android OEM的定制化进行了首次的纵向研究。我们首先建立了一个数据集，包含42个不同供应商的2,907个ROM，涵盖了从1.6到9.0的Android版本（年份为2009-2020年）。然后，我们开发了分析框架和流程，提取每个ROM的定制层，并对其进行多种指标评估。例如，我们分析ROMs以确定它们是否符合各种需求，并确定它们的定制是否对整个设备的安全性造成负面影响。在这个过程中，我们关注各个方面，从二进制文件的安全加固、SELinux策略、Android init脚本到内核安全硬化技术。我们的研究结果令人担忧。我们发现超过2,907个ROM中的579个（约20%）违反了与其Android版本相关的CDD中的至少一个规定，令人难以置信的是，其中11个还是谷歌品牌的。我们的一些发现表明，供应商经常设法绕过或“注释掉”Android安全团队添加的安全网。在其他情况下，我们发现ROMs修改了init脚本，以root身份启动过时版本（存在已知的CVE和公开的POC），可以被远程攻击者（例如tcpdump）访问。本文表明谷歌的努力还不够，我们提出了几个关于如何改善合规性检查流程的建议。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519425/](https://ieeexplore.ieee.org/document/9519425/)
## Detecting AI Trojans Using Meta Neural Analysis.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#detecting-ai-trojans-using-meta-neural-analysis) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#detecting-ai-trojans-using-meta-neural-analysis)**
### 作者
* Xiaojun Xu, University of Illinois at Urbana-Champaign
* Qi Wang, University of Illinois at Urbana-Champaign
* Huichen Li, University of Illinois at Urbana-Champaign
* Nikita Borisov, University of Illinois at Urbana-Champaign
* Carl A. Gunter, University of Illinois at Urbana-Champaign
* Bo Li, University of Illinois at Urbana-Champaign
### 摘要
> 在机器学习的特洛伊木马攻击中，对手训练出一个受损模型，在正常数据上表现出色，但在具有特定触发模式的数据样本中表现恶意。已经提出了一些方法来检测此类攻击，但它们对攻击策略做出了不可取的假设或需要对训练模型进行直接访问，这限制了它们在实践中的效用。本文通过引入元神经特洛伊检测（MNTD）流程来解决这些挑战，该流程不对攻击策略做出假设，只需要对模型进行黑盒访问。该策略是训练一个元分类器，预测给定目标模型是否受到特洛伊木马攻击。为了在不了解攻击策略的情况下训练元模型，我们引入了一种称为巨无霸学习的技术，它按照一般分布采样一组受损模型。然后，我们动态优化查询集合和元分类器，以区分受损模型和良性模型。我们通过在视觉、语音、表格数据和自然语言文本数据集上进行实验，评估了MNTD，并对抗不同类型的特洛伊木马攻击，如数据污染攻击、模型篡改攻击和潜在攻击。结果显示，MNTD实现了97%的检测AUC得分，并显著优于现有的检测方法。此外，MNTD具有良好的泛化能力，在面对未预料到的攻击时也能实现高检测性能。我们还提出了一个强大的MNTD流程，即使攻击者完全了解系统并试图逃避检测，仍然可以实现约90%的检测AUC。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519467/](https://ieeexplore.ieee.org/document/9519467/)
## Adversarial Watermarking Transformer: Towards Tracing Text Provenance with Data Hiding.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#adversarial-watermarking-transformer-towards-tracing-text-provenance-with-data-hiding) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#adversarial-watermarking-transformer-towards-tracing-text-provenance-with-data-hiding)**
### 作者
* Sahar Abdelnabi, CISPA Helmholtz Center for Information Security
* Mario Fritz, CISPA Helmholtz Center for Information Security
### 摘要
> 自然语言生成(NLG)的最新进展引入了具有高质量输出文本的强大语言模型。然而，这引发了人们对此类模型可能被恶意使用的担忧。本文研究了自然语言水印技术作为一种防御方法，以帮助更好地标记和追踪文本的来源。我们引入了对抗性水印变换器(AWT)，通过联合训练的编码器-解码器和对抗性训练，给定输入文本和二进制信息，生成一个输出文本，该文本以不引人注意的方式被编码了给定的信息。我们进一步研究了不同的训练和推断策略，以实现对输入文本语义和正确性的最小改变。AWT是第一个端到端模型，可以通过自动学习-无需基本事实-单词替换及其位置来对文本中隐藏数据，以编码信息。我们经验证明，我们的模型在很大程度上保持了文本的实用性，并在隐藏水印的同时对抗攻击者的存在性。此外，我们还证明了我们的方法对各种攻击具有鲁棒性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519400/](https://ieeexplore.ieee.org/document/9519400/)
## Machine Unlearning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#machine-unlearning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#machine-unlearning)**
### 作者
* Lucas Bourtoule, University of Toronto; Vector Institute
* Varun Chandrasekaran, University of Wisconsin-Madison
* Christopher A. Choquette-Choo, University of Toronto; Vector Institute
* Hengrui Jia, University of Toronto; Vector Institute
* Adelin Travers, University of Toronto; Vector Institute
* Baiwu Zhang, University of Toronto; Vector Institute
* David Lie, University of Toronto
* Nicolas Papernot, University of Toronto; Vector Institute
### 摘要
> 一旦用户在线上共享了自己的数据，通常很难撤销访问权并要求删除数据。机器学习（ML）加剧了这个问题，因为使用该数据训练的任何模型都可能记住了这些数据，从而使用户的信息面临成功的隐私攻击的风险。然而，让模型忘记学到的知识通常非常困难。我们提出了SISA训练（Strategically Influential Single-point unlearning for Attributed data），这是一个框架，通过在训练过程中有策略地限制数据点的影响来加快忘记过程。尽管我们的框架适用于任何学习算法，但它旨在为类似随机梯度下降用于深度神经网络的有状态算法实现最大的改进。SISA训练减少了与忘记相关的计算开销，即使在忘记请求均匀分布于训练集的最坏情况下也是如此。在某些情况下，服务提供商可能对用户发出的忘记请求的分布有先验知识。我们可以考虑这个先验知识来相应地划分和排序数据，并进一步减少忘记带来的开销。我们的评估涵盖了来自不同领域的多个数据集，并对忘记的动机进行了相应的分析。在没有分布假设的情况下，对于简单的学习任务，我们观察到SISA训练可以使购买数据集中的数据点的遗忘时间缩短4.63倍，对于SVHN数据集则缩短了2.45倍，相对于从头开始重新训练。SISA训练还可以加速复杂的学习任务（如ImageNet分类）的重新训练1.36倍；结合迁移学习，这导致了精度的轻微下降。我们的工作为机器学习中的实际数据管理做出了贡献。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519428/](https://ieeexplore.ieee.org/document/9519428/)
## Poltergeist: Acoustic Adversarial Machine Learning against Cameras and Computer Vision.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#poltergeist-acoustic-adversarial-machine-learning-against-cameras-and-computer-vision) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#poltergeist-acoustic-adversarial-machine-learning-against-cameras-and-computer-vision)**
### 作者
* Xiaoyu Ji, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Yushi Cheng, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Yuepeng Zhang, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Kai Wang, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Chen Yan, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Wenyuan Xu, Ubiquitous System Security Lab (USSLAB), Zhejiang University
* Kevin Fu, Security and Privacy Research Group (SPQR), University of Michigan
### 摘要
> 自主驾驶汽车越来越多地利用基于计算机视觉的目标检测系统来感知环境并做出关键的驾驶决策。为了提高图像质量，人们在图像稳定器上加装惯性传感器以减轻由于相机抖动而引起的图像模糊。然而，这种趋势也打开了新的攻击面。本文识别了一种系统级的漏洞，该漏洞源自于新兴的图像稳定器硬件易受声音操纵的影响，以及容易受到对抗性样本攻击的目标检测算法。通过发射精心设计的声音信号，攻击者可以控制惯性传感器的输出，从而触发不必要的运动补偿，导致图像模糊，即使相机处于稳定状态。这些模糊的图像可能会导致对象错误分类，影响安全关键的决策。我们对这种声音操纵的可行性进行了建模，并设计了一个攻击框架，可以实现三种类型的攻击，即隐藏、创建和修改对象。评估结果证明了我们对四种学术目标检测器（YOLO V3/V4/V5和Fast R-CNN）以及一种商业检测器（Apollo）的攻击的有效性。我们进一步引入了AMpLe攻击的概念，即一种新的系统级安全漏洞类别，其结果是通过对硬件注入携带信息的物理信号和对抗性机器学习的结合产生的。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519394/](https://ieeexplore.ieee.org/document/9519394/)
## Invisible for both Camera and LiDAR: Security of Multi-Sensor Fusion based Perception in Autonomous Driving Under Physical-World Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#invisible-for-both-camera-and-lidar-security-of-multi-sensor-fusion-based-perception-in-autonomous-driving-under-physical-world-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#invisible-for-both-camera-and-lidar-security-of-multi-sensor-fusion-based-perception-in-autonomous-driving-under-physical-world-attacks)**
### 作者
* Yulong Cao, University of Michigan
* Ningfei Wang, University of California, Irvine
* Chaowei Xiao, NVIDIA Research; Arizona State University
* Dawei Yang, University of Michigan
* Jin Fang, Baidu Research and National Engineering Laboratory of Deep Learning Technology and Application, China
* Ruigang Yang, Arizona State University
* Qi Alfred Chen, University of California, Irvine
* Mingyan Liu, University of Michigan
* Bo Li, University of Illinois at Urbana-Champaign
### 摘要
> 自动驾驶（AD）系统中，感知是安全和安全性关键。尽管之前有许多关于其安全问题的研究，但它们都只考虑了对基于摄像头或激光雷达的AD感知的攻击。然而，目前生产中的AD系统主要采用多传感器融合（MSF）设计，从原则上讲，在不同融合源同时受到攻击的假设下，可以更有效地防御这些攻击。本文首次研究了AD系统中基于MSF的感知的安全问题。我们通过探索同时攻击所有融合源的可能性，直接挑战了上述基本的MSF设计假设。这使我们首次了解到MSF作为一种AD感知的一般防御策略可以提供多少安全保障。我们将攻击形式化为一个优化问题，以生成一个实际可行的对抗性三维打印对象，使AD系统无法检测到并因此闯入它。为了系统地生成这样一个现实世界的攻击，我们提出了一个新颖的攻击流程，解决了两个主要的设计挑战：（1）不可微分的目标摄像头和激光雷达传感系统，（2）在基于激光雷达的AD感知中广泛使用的不可微分的单元级聚合特征。我们在真实驾驶场景中评估了我们的攻击，并在代表性的开源工业级AD系统中包含了MSF算法。我们的结果显示，该攻击在不同的物体类型和MSF算法之间实现了90%以上的成功率。我们的攻击还被发现具有隐秘性，对受害者位置鲁棒，可以在MSF算法之间传递，并且在被3D打印和被激光雷达和摄像头设备捕捉后可以在现实世界中实现。为了具体评估端到端的安全影响，我们进一步进行了模拟评估，并显示它可以导致工业级AD系统的100%车辆碰撞率。我们还评估和讨论了防御策略。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519442/](https://ieeexplore.ieee.org/document/9519442/)
## CANNON: Reliable and Stealthy Remote Shutdown Attacks via Unaltered Automotive Microcontrollers.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cannon-reliable-and-stealthy-remote-shutdown-attacks-via-unaltered-automotive-microcontrollers) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cannon-reliable-and-stealthy-remote-shutdown-attacks-via-unaltered-automotive-microcontrollers)**
### 作者
* Sekar Kulandaivel, Carnegie Mellon University
* Shalabh Jain, Research and Technology Center, Robert Bosch LLC, USA
* Jorge Guajardo, Research and Technology Center, Robert Bosch LLC, USA
* Vyas Sekar, Carnegie Mellon University
### 摘要
> 现代车辆中的电子控制单元（ECU）最近成为了关闭攻击的目标，这些攻击可以禁用安全关键的车辆功能，并可用作启动更危险攻击的手段。现有的攻击方法要么通过物理操纵总线信号，要么通过消息注入来实施。然而，我们认为这些方法无法同时实现远程、隐蔽和可靠。例如，消息注入会被现代入侵检测系统（IDS）提案所检测到，并且需要严格的同步，在远程无法实现。在这项工作中，我们介绍了一种利用现代汽车微控制器单元（MCU）中的外设时钟门控特性的攻击方式。通过利用这种能力，一个仅使用软件控制的远程对手可以可靠地“冻结”被攻击的ECU的输出，以在任意时间点插入任意比特。利用这一洞察力，我们开发了一种名为CANnon的远程关闭攻击。由于CANnon攻击产生的错误模式与自然错误无法区分，并且不需要消息插入，使用当前技术来检测它是困难的。我们在现代乘用车ECU中使用的两个汽车MCU上演示了这种攻击。我们还讨论了潜在的缓解策略和对抗措施。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519391/](https://ieeexplore.ieee.org/document/9519391/)
## SoK: Quantifying Cyber Risk.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-quantifying-cyber-risk) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-quantifying-cyber-risk)**
### 作者
* Daniel W. Woods, University of Innsbruck, Innsbruck, Austria
* Rainer Böhme, University of Innsbruck, Innsbruck, Austria
### 摘要
> 本文介绍了一种受结构方程建模启发的因果模型，通过使用反射性指标来解释潜在因素，从而解释了网络风险结果。首先，我们使用该模型对实证网络危害研究进行分类。我们发现，在典型或极端损失方面，网络危害与其他危害并无特别之处。数据泄露事件的频率增加受到质疑，并且股票市场对网络事件的反应随着时间的推移变得不那么严重。仅关注危害会导致宿命论；因果模型在评估安全干预的有效性方面最有用。我们展示了简单的统计关系如何导致错误的结果，即更高的安全支出或应用更新与更高的妥协率相关。当考虑到威胁和曝光时，安全指标被证明是解释妥协率差异的重要因素，尤其是当研究使用多个安全水平指标时。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519490/](https://ieeexplore.ieee.org/document/9519490/)
## Self-Supervised Euphemism Detection and Identification for Content Moderation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#self-supervised-euphemism-detection-and-identification-for-content-moderation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#self-supervised-euphemism-detection-and-identification-for-content-moderation)**
### 作者
* Wanzheng Zhu, University of Illinois at Urbana-Champaign
* Hongyu Gong, University of Illinois at Urbana-Champaign
* Rohan Bansal, Carnegie Mellon University
* Zachary Weinberg, University of Massachusetts, Amherst; Carnegie Mellon University
* Nicolas Christin, Carnegie Mellon University
* Giulia Fanti, Carnegie Mellon University
* Suma Bhat, University of Illinois at Urbana-Champaign
### 摘要
> 边缘团体和组织一直以来都习惯使用委婉语——听起来普通的词语却暗含特定含义，以便掩盖他们的真实讨论内容。如今，委婉语常常被用于规避社交媒体平台的内容审核政策。现有的政策执行工具通常依赖于对“禁用列表”中的关键词进行搜索，但这些工具不准确：即使仅限于脏话，仍可能导致尴尬的误报[1]。当一个常用的普通词汇获得委婉含义时，简单地将其加入基于关键词的禁用列表是无望的：比如考虑“pot”（储物容器还是大麻？）或者“heater”（家电还是枪支？）。当前一代社交媒体公司会雇佣工作人员进行手动审核，但这种方法既昂贵又不太有效。人工审核员通常能察觉到一个词语被委婉使用，但他们可能不知道其秘密含义，因此也无法确定消息是否违反政策。此外，当一个委婉语被禁用后，使用它的群体只需发明另一个委婉语，使审核员始终处于被动。本文将展示一种无监督算法，通过分析句子级上下文中的词汇，既能检测到被委婉使用的词汇，又能识别出每个词汇的秘密含义。与现有的使用无上下文词语嵌入的技术相比，我们检测委婉语的算法在文本语料库中的未标记委婉语的检测准确率提高了30-400%。就我们所知，我们揭示词汇委婉含义的算法是首创的。在内容审核员和规避政策者之间的较量中，我们的算法可能有助于使审核员的优势增加。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519422/](https://ieeexplore.ieee.org/document/9519422/)
## SoK: Hate, Harassment, and the Changing Landscape of Online Abuse.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-hate-harassment-and-the-changing-landscape-of-online-abuse) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-hate-harassment-and-the-changing-landscape-of-online-abuse)**
### 作者
* Kurt Thomas, Google
* Devdatta Akhawe, Figma, Inc
* Michael Bailey, University of Illinois, Urbana-Champaign
* Dan Boneh, Stanford
* Elie Bursztein, Google
* Sunny Consolvo, Google
* Nicola Dell, Cornell Tech
* Zakir Durumeric, Stanford
* Patrick Gage Kelley, Google
* Deepak Kumar, University of Illinois, Urbana-Champaign
* Damon McCoy, New York University
* Sarah Meiklejohn, University College London; Google
* Thomas Ristenpart, Cornell Tech
* Gianluca Stringhini, Boston University
### 摘要
> 我们认为现有的安全、隐私和反滥用保护措施未能应对日益增长的网络仇恨和骚扰威胁。为了让我们的社区能够理解和解决这个差距，我们提出了一个用于思考网络仇恨和骚扰的分类法。我们的分类法基于超过150篇跨学科研究论文，涵盖了从亲密伴侣暴力到协同暴力团伙的各种威胁。在此过程中，我们确定了七类攻击，如有毒内容和监视，每一类攻击都源于不同的攻击者能力和意图。我们还提供了一项为期三年的调查的纵向证据，证明仇恨和骚扰对于在线用户来说是普遍存在且不断增长的经历，尤其是对于青少年和认同为LGBTQ+的风险社群。应对每一类仇恨和骚扰需要独特的策略，我们重点介绍了5个可能的研究方向，最终赋予个人、社区和平台解决这些问题的能力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519435/](https://ieeexplore.ieee.org/document/9519435/)
## Keep the Dirt: Tainted TreeKEM, Adaptively and Actively Secure Continuous Group Key Agreement.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#keep-the-dirt-tainted-treekem-adaptively-and-actively-secure-continuous-group-key-agreement) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#keep-the-dirt-tainted-treekem-adaptively-and-actively-secure-continuous-group-key-agreement)**
### 作者
* Karen Klein, IST Austria
* Guillermo Pascual-Perez, IST Austria
* Michael Walter, IST Austria
* Chethan Kamath, Universidad Nacional del Rosario
* Margarita Capretto, Wickr Inc.
* Miguel Cueto, IST Austria
* Ilia Markov, IST Austria
* Michelle Yeo, IST Austria
* Joël Alwen, Wickr Inc.
* Krzysztof Pietrzak, IST Austria
### 摘要
> 尽管具备强大安全保证的消息系统在实践中被广泛使用，但设计一个能够高效扩展到大型用户群并享有类似安全保证的协议仍然是一个相对开放的问题。迄今为止，存在两个现有的提案，分别是ART（Cohn-Gordon等人，CCS18）和TreeKEM（IETF，消息层安全协议，草案）。TreeKEM是目前由IETF MLS工作组认可的候选方案，但动态用户组操作（即添加和移除用户）可能导致效率问题。在本文中，我们正式化并分析了TreeKEM的一种变体，称为“Tainted TreeKEM”（简称TTKEM）。TTKEM的基本思想是由Millican（MLS邮件列表，2018年2月）提出的。相对于一些自然分布的组操作，此版本比TreeKEM更高效，我们通过模拟对此进行了量化。我们的第二个贡献是针对TTKEM的两个安全证明，这些证明可以确保在面对适应性攻击者时具备后置泄露保密和前向保密性。在随机预言模型中，安全损失（对底层公钥加密）是多项式因子，而在标准模型中则是准多项式因子。我们的证明也可以适应于TreeKEM。在我们的工作之前，尚未知道任何针对任何类似TreeKEM的协议能够确立针对适应性选择操作序列的紧密安全性的安全证明。我们也是第一个证明（甚至正式化）服务器可以任意偏离协议规范的主动安全性。证明完全主动安全性（用户也可以任意偏离）的问题仍然是一个开放问题。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519462/](https://ieeexplore.ieee.org/document/9519462/)
## Merkle2: A Low-Latency Transparency Log System.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#merkle2-a-low-latency-transparency-log-system) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#merkle2-a-low-latency-transparency-log-system)**
### 作者
* Yuncong Hu, University of California, Berkeley
* Kian Hooshmand, University of California, Berkeley
* Harika Kalidhindi, University of California, Berkeley
* Seung Jin Yang, University of California, Berkeley
* Raluca Ada Popa, University of California, Berkeley
### 摘要
> 透明日志旨在帮助用户审计不受信任的服务器。例如，证书透明度（CT）使用户能够检测到被入侵的证书颁发机构（CA）已经发布了一张伪造的证书。然而，目前实用的透明日志系统在用于低延迟应用程序时会面临高监控成本的问题。为了降低监控成本，这些系统通常要求用户等待一小时或更长时间才能生效更新，从而阻碍了低延迟应用程序的运行。我们提出了Merkle²，一种既支持高效监控又支持低延迟更新的透明日志系统。为了实现这个目标，我们构建了一个新的多维身份认证数据结构，其中嵌套了两种类型的Merkle树，因此我们的系统被称为Merkle²。利用这个数据结构，我们设计了一个透明日志系统，其中包括高效的监控和查找协议，以实现低延迟更新。特别地，Merkle²中的所有操作都与更新间隔无关，并且对于日志中的条目数量来说是（多项）对数级的。相较于之前的工作，Merkle²不仅在渐进方面表现出色，而且在实践中也非常高效。我们的评估表明，Merkle²在1秒内可以传播更新，并且可以支持比现有透明日志系统多100倍的用户数。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519459/](https://ieeexplore.ieee.org/document/9519459/)
## Post-quantum WireGuard.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#post-quantum-wireguard) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#post-quantum-wireguard)**
### 作者
* Andreas Hülsing, Eindhoven University of Technology, The Netherlands
* Kai-Chun Ning, KPN B. V., The Netherlands
* Peter Schwabe, Max Planck Institute for Security and Privacy,, Radboud University, The Netherlands
* Fiona Johanna Weber, Eindhoven University of Technology, The Netherlands
* Philip R. Zimmermann, Delft University of Technology & KPN B. V., The Netherlands
### 摘要
> 在本文中，我们提出了PQ-WireGuard，这是WireGuard VPN协议（NDSS 2017）中握手的后量子变种。与大多数关于实际协议的后量子安全方面的先前工作不同，这个变种不仅考虑了后量子保密性（或前向保密性），还考虑了后量子认证。为了实现这一点，我们通过只使用密钥封装机制（KEMs）的更通用方法替换了基于Diffie-Hellman的握手。我们对PQ-WireGuard的安全性进行了证明，将WireGuard在符号模型和标准模型中的安全性证明适应到我们的构造中。然后，我们使用具体的后量子安全KEMs对这个通用构造进行实例化，我们经过精心选择以实现高安全性和速度。我们通过与广泛部署的VPN解决方案的大量基准测试结果展示了PQ-WireGuard的竞争力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519445/](https://ieeexplore.ieee.org/document/9519445/)
## Invisible Probe: Timing Attacks with PCIe Congestion Side-channel.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#invisible-probe-timing-attacks-with-pcie-congestion-side-channel) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#invisible-probe-timing-attacks-with-pcie-congestion-side-channel)**
### 作者
* Mingtian Tan, School of Computer Science, Fudan University
* Junpeng Wan, School of Computer Science, Fudan University
* Zhe Zhou, School of Computer Science, Fudan University
* Zhou Li, University of California, Irvine
### 摘要
> PCIe（Peripheral Component Interconnect Express）协议是桥接CPU和外围设备（如GPU、NIC和SSD驱动器）的事实上的协议。在单台机器上安装更多外围设备的需求越来越大，但Intel CPU提供的PCIe接口是固定的。为了解决这种争用，可以在机器上安装PCIe交换机、PCH（平台控制器中心）或虚拟化卡，以允许多个设备共享一个PCIe接口。当来自设备的集合PCIe流量超过PCIe链路容量时，会出现拥塞，然后引入传输延迟。在这项工作中，我们发现PCIe延迟不仅影响设备性能，而且泄露了使用机器的用户的敏感信息。特别是，由于用户的活动可能会触发PCIe上的数据传输（例如，在CPU和GPU之间），通过测量PCIe拥塞，可以间接地推断出另一个设备上的对手的秘密。因此，由I/O拥塞引起的延迟可以被作为一个侧信道进行利用。我们通过两种攻击方案和四种受害者设置来展示PCIe拥塞的威胁。具体而言，攻击者可以通过探测共享同一PCIe交换机的RDMA NIC来了解远程服务器上GPU的工作负载，并测量延迟。根据测量结果，攻击者可以了解受害者的击键时间、GPU上呈现的网页以及在GPU上运行的机器学习模型。此外，当受害者使用低速设备（例如以太网NIC）时，攻击者控制NVMe SSD可以在共享PCH或虚拟化卡时发起类似的攻击。评估结果显示我们的攻击可以实现高准确率（例如，对于推断受害者访问的网页，准确率为96.31%）。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519482/](https://ieeexplore.ieee.org/document/9519482/)
## CacheOut: Leaking Data on Intel CPUs via Cache Evictions.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cacheout-leaking-data-on-intel-cpus-via-cache-evictions) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cacheout-leaking-data-on-intel-cpus-via-cache-evictions)**
### 作者
* Stephan van Schaik, University of Michigan
* Marina Minkin, University of Michigan
* Andrew Kwong, University of Michigan
* Daniel Genkin, University of Michigan
* Yuval Yarom, University of Adelaide and Data61
### 摘要
> 近期出现的短暂执行攻击，如RIDL、Fallout和ZombieLoad，证明攻击者可以在信息通过微架构缓冲区时泄露信息。英特尔将这些攻击称为“喝水千里”，因为攻击者无法控制观察到的数据以及数据的来源。由于无法阻止缓冲区泄露，英特尔通过微码更新发布了反制措施，用于在CPU更改安全域时覆盖缓冲区。在这项研究中，我们提出了CacheOut，这是一种新的微架构攻击，能够绕过英特尔的缓冲区覆盖反制措施。我们观察到，当数据从CPU的L1缓存中移除时，它经常被转移回可泄露的CPU缓冲区，攻击者可以从中恢复数据。CacheOut相对于先前的MDS攻击作出了改进，能够允许攻击者选择从CPU的L1缓存泄露哪些数据，以及泄露缓存行的哪个部分。我们证明了CacheOut可以在多个安全边界之间泄露信息，包括进程之间、虚拟机之间、用户空间和内核空间之间以及SGX隔离域中的信息。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519461/](https://ieeexplore.ieee.org/document/9519461/)
## PLATYPUS: Software-based Power Side-Channel Attacks on x86.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#platypus-software-based-power-side-channel-attacks-on-x86) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#platypus-software-based-power-side-channel-attacks-on-x86)**
### 作者
* Moritz Lipp, Graz University of Technology
* Andreas Kogler, Graz University of Technology
* David Oswald, University of Birmingham, UK
* Michael Schwarz, CISPA Helmholtz Center for Information Security
* Catherine Easdon, Graz University of Technology
* Claudio Canella, Graz University of Technology
* Daniel Gruss, Graz University of Technology
### 摘要
> 能量侧信道攻击利用功耗的变化来提取设备中的机密信息，例如密码密钥。先前的攻击通常需要物理接触目标设备和专用设备，如探针和高分辨率示波器。本文介绍了PLATYPUS攻击，这是一种新颖的基于软件的能量侧信道攻击，针对Intel服务器、台式机和笔记本电脑的CPU。我们利用对Intel Running Average Power Limit (RAPL)接口的特权访问，该接口直接公开与功耗相关的数值，形成了一个低分辨率的副信道。通过充分的统计评估，我们展示了可以观察到功耗的变化，这些变化区分了不同的指令和操作数以及内存加载的不同汉明重量。这使我们不仅能够监控应用程序的控制流，还能够推测数据并提取密码密钥。我们演示了一个非特权攻击者如何从Intel SGX和Linux内核中泄露AES-NI密钥，突破内核地址空间布局随机化（KASLR），推断秘密指令流，并建立一种与时序无关的隐蔽信道。我们还介绍了一种特权攻击mbed TLS的方法，利用精确的执行控制从SGX enclave中恢复RSA密钥。我们讨论了对策，并展示了在特权上下文中减轻这些攻击不是一件轻松的事情。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519416/](https://ieeexplore.ieee.org/document/9519416/)
## Defensive Technology Use by Political Activists During the Sudanese Revolution.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#defensive-technology-use-by-political-activists-during-the-sudanese-revolution) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#defensive-technology-use-by-political-activists-during-the-sudanese-revolution)**
### 作者
* Alaa Daffalla, Department of Electrical Engineering & Computer Science and ITTC, University of Kansas
* Lucy Simko, Paul G. Allen School of Computer Science & Engineering, University of Washington
* Tadayoshi Kohno, Paul G. Allen School of Computer Science & Engineering, University of Washington
* Alexandru G. Bardas, Department of Electrical Engineering & Computer Science and ITTC, University of Kansas
### 摘要
> 政治行动是地缘政治变革的一股全球力量，在历史上有助于实现更大的正义、平等和制止人权侵犯。现代革命是一种极端形式的政治行动，将依赖技术进行关键操作任务的活动家与控制他们必须使用的电信网络的资源丰富的政府对抗，从而使他们使用的技术承受极大压力。我们的工作通过对参与2018-2019年苏丹革命的13名政治活动家的访谈，提供了有关活动家技术防御策略的见解。我们发现政治和社会是安全和隐私行为及应用采用的驱动因素。此外，社交媒体封锁可以引发一系列规模化的反审查措施，而完全的互联网封锁则会瘫痪活动家对技术的使用。尽管活动家在面对监视、逮捕和物理设备查封的威胁时采取的技术防御措施相对简单，但对他们的对手来说基本上是足够的。通过这些结果，我们提出了关键的设计原则，但我们观察到，设计建议的普遍化往往会在不同用户群体的安全性和可用性需求之间产生根本性的张力。因此，我们提供了一组有条理的问题，试图将这些张力转化为技术设计师和政策制定者的机会。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519493/](https://ieeexplore.ieee.org/document/9519493/)
## DP-Sniper: Black-Box Discovery of Differential Privacy Violations using Classifiers.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#dp-sniper-black-box-discovery-of-differential-privacy-violations-using-classifiers) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#dp-sniper-black-box-discovery-of-differential-privacy-violations-using-classifiers)**
### 作者
* Benjamin Bichsel, ETH Zurich, Switzerland
* Samuel Steffen, ETH Zurich, Switzerland
* Ilija Bogunovic, ETH Zurich, Switzerland
* Martin Vechev, ETH Zurich, Switzerland
### 摘要
> 我们提出了DP-Sniper，这是一种实用的黑盒方法，可以自动找出违反差分隐私的情况。DP-Sniper基于两个关键思想：(i)训练一个分类器来预测观察到的输出是否很可能是由两个可能输入之一生成的，(ii)将这个分类器转化为对差分隐私的近似最优攻击。我们的实验评估表明，DP-Sniper比最先进的方法可以获得多达12.4倍的更强的保证，同时速度快15.5倍。此外，我们还展示了DP-Sniper在利用天真实现的算法的浮点漏洞方面的有效性：它检测到了一个所谓的0.1-差分隐私实现的拉普拉斯机制实际上甚至未满足0.25-差分隐私。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519405/](https://ieeexplore.ieee.org/document/9519405/)
## Is Private Learning Possible with Instance Encoding?
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#is-private-learning-possible-with-instance-encoding) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#is-private-learning-possible-with-instance-encoding)**
### 作者
* Nicholas Carlini, Google
* Samuel Deng, Columbia University
* Sanjam Garg, UC Berkeley and NTT Research
* Somesh Jha, University of Wisconsin
* Saeed Mahloujifar, Princeton University
* Mohammad Mahmoody, University of Virginia
* Abhradeep Thakurta, Google
* Florian Tramèr, Stanford University
### 摘要
> 一个私有机器学习算法在尽可能保持准确性的同时隐藏其训练数据。在这项研究中，我们研究了通过依靠一个实例编码机制来修改训练输入并交给普通学习器，来使非私有学习算法变得私有的可行性。我们通过提供两个攻击模型来对实例编码的概念以及其隐私性进行形式化。我们首先证明了实现一个（更强的）模型的不可能性结果。接下来，在第二个（较弱的）攻击模型中，我们展示了对InstaHide的实际攻击，这是由Huang、Song、Li和Arora [ICML’20]最近提出的旨在使用实例编码来保护隐私的方案。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519450/](https://ieeexplore.ieee.org/document/9519450/)
## High-Frequency Trading on Decentralized On-Chain Exchanges.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#high-frequency-trading-on-decentralized-on-chain-exchanges) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#high-frequency-trading-on-decentralized-on-chain-exchanges)**
### 作者
* Liyi Zhou, Imperial College, London, United Kingdom
* Kaihua Qin, Imperial College, London, United Kingdom
* Christof Ferreira Torres, University of Luxembourg, Luxembourg
* Duc V Le, Purdue University, United States
* Arthur Gervais, Imperial College, London, United Kingdom
### 摘要
> 去中心化交易所（DEX）允许参与方在保护自己资金的同时参与金融市场。然而，基于区块链的DEX的透明度以及交易处理的延迟，使市场操纵成为可能。例如，敌对方可能进行前期交易-利用可能会改变资产价格以获取利益的（通常非公开的）信息。在这项工作中，我们对前期交易的一种增强变种进行了形式化、解析和经验评估：夹击攻击，这涉及到在基于区块链的DEX上同时进行前期和后期交易。我们通过分析交易在区块链区块中的相对位置来量化敌对交易者能够进行攻击的概率。我们发现，当在一个特定的DEX（Uniswap）上进行夹击攻击时，一个单一的敌对交易者可以每天获得几千美元的收入。到2020年6月，Uniswap的日交易量超过500万美元。除了单一敌对方的情况，我们还模拟了在多个竞争对手争夺的环境下进行夹击攻击的结果，以考虑真实世界的交易环境。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519421/](https://ieeexplore.ieee.org/document/9519421/)
## Red Belly: A Secure, Fair and Scalable Open Blockchain.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#red-belly-a-secure-fair-and-scalable-open-blockchain) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#red-belly-a-secure-fair-and-scalable-open-blockchain)**
### 作者
* Tyler Crain, University of Sydney, Australia
* Christopher Natoli, University of Sydney, Australia
* Vincent Gramoli, University of Sydney and CSIRO, Australia
### 摘要
> 区块链已经找到了用于追踪数字资产所有权的应用。然而，有几种区块链显示出对网络攻击的脆弱性。因此，公司在将其投入生产之前采用安全的区块链至关重要。在本文中，我们介绍了红肚子区块链（RBBC），这是第一个吞吐量可扩展到数百个地理分布的共识参与者的安全区块链。为此，我们对拜占庭容错（BFT）区块链进行了彻底的修订，提出了三个贡献：（i）定义了集拜占庭共识问题，即同意所有提议的超级区块，而不是单个区块；（ii）采用了公平无领导者设计，提供了免受审查的保证，确保正确请求的交易的提交；（iii）引入分片验证，以限制签名验证的数量，而不影响安全性。我们在分布在4个大洲的3种不同类型的多达1000个虚拟机上对RBBC进行了评估，并进行了攻击测试。尽管其性能受到攻击的影响，但RBBC在吞吐量上能够扩展到数百个共识节点，并在1000个虚拟机上实现了30k TPS的吞吐量和3秒的延迟，从而在延迟和吞吐量方面提高了3倍，超过了最接近的竞争对手。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519440/](https://ieeexplore.ieee.org/document/9519440/)
## Diane: Identifying Fuzzing Triggers in Apps to Generate Under-constrained Inputs for IoT Devices.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#diane-identifying-fuzzing-triggers-in-apps-to-generate-under-constrained-inputs-for-iot-devices) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#diane-identifying-fuzzing-triggers-in-apps-to-generate-under-constrained-inputs-for-iot-devices)**
### 作者
* Nilo Redini, UC Santa Barbara
* Andrea Continella, University of Twente
* Dipanjan Das, UC Santa Barbara
* Giulio De Pasquale, UC Santa Barbara
* Noah Spahn, UC Santa Barbara
* Aravind Machiry, Purdue University
* Antonio Bianchi, Purdue University
* Christopher Kruegel, UC Santa Barbara
* Giovanni Vigna, UC Santa Barbara
### 摘要
> 物联网设备（IoT）已经在数十亿人的日常生活中扎根。因此，研究人员已经应用自动化的漏洞发现技术来提高其整体安全性。然而，由于提取和模拟自定义固件的困难，黑盒模糊测试通常是唯一可行的分析选项。不幸的是，这种解决方案主要产生无效输入，这些输入会被目标物联网设备快速丢弃，并且无法渗透其代码。另一个提出的方法是利用伴侣应用程序（即通常用于控制物联网设备的移动应用程序）生成结构良好的模糊测试输入。不幸的是，现有的解决方案会受到应用程序端验证代码的限制，从而显著限制了发现漏洞的范围。在本文中，我们提出了一种克服这些限制的新方法。我们的关键观察是，在伴侣应用程序中存在可以用于生成最佳（即有效但受约束的）模糊测试输入的函数。我们称之为模糊测试触发器的这些函数在任何数据转换函数（例如网络序列化）之前执行，但在输入验证代码之后执行。因此，它们生成的输入不受应用程序端消毒代码的限制，同时也不会因其无效格式而被分析的物联网设备丢弃。我们设计和开发了名为Diane的工具，它结合了静态和动态分析，以在Android伴侣应用程序中找到模糊测试触发器，然后自动用它们来模糊测试物联网设备。我们使用Diane分析了11种流行的物联网设备，并发现了11个漏洞，其中9个是零日漏洞。我们的结果还显示，在不使用模糊测试触发器的情况下，无法为许多设备生成触发漏洞的输入。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519432/](https://ieeexplore.ieee.org/document/9519432/)
## Data Privacy in Trigger-Action Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#data-privacy-in-trigger-action-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#data-privacy-in-trigger-action-systems)**
### 作者
* Yunang Chen, University of Wisconsin, Madison
* Amrita Roy Chowdhury, University of Wisconsin, Madison
* Ruizhe Wang, University of Wisconsin, Madison
* Andrei Sabelfeld, Chalmers University of Technology
* Rahul Chatterjee, University of Wisconsin, Madison
* Earlence Fernandes, University of Wisconsin, Madison
### 摘要
> 触发-动作平台（TAP）允许用户将独立的基于网络或物联网的服务连接起来，实现有用的自动化。它们提供了一个简单的界面，帮助最终用户创建触发-计算-动作规则，以在不同的互联网服务之间传递数据。不幸的是，TAPs引入了一个大规模的安全风险：如果它们被攻击者入侵，攻击者将能够访问数百万用户的敏感数据。为了规避这个风险，我们提出了eTAP，一种增强隐私保护的触发-动作平台，它在执行触发-计算-动作规则时不会访问用户的明文私人数据，也不会得知计算结果的任何信息。我们使用混淆电路作为一种基本原语，并利用触发-计算-动作规则的独特结构使其变得实用。我们正式陈述和证明我们的协议的安全性保证。我们制作了eTAP的原型，支持类似IFTTT和Zapier的热门商业TAP平台上最常用的操作。具体而言，它支持对私人触发数据进行布尔、算术和字符串操作，并且可以运行IFTTT用户的前500个规则的100%以及Zapier上所有公开可用的规则的93.4%。根据十个现有规则，这些规则涉及各种各样的操作，我们展示了eTAP的性能影响较小：平均规则执行延迟增加了70毫秒（55%），吞吐量减少了59%。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519495/](https://ieeexplore.ieee.org/document/9519495/)
## Which Privacy and Security Attributes Most Impact Consumers' Risk Perception and Willingness to Purchase IoT Devices?
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#which-privacy-and-security-attributes-most-impact-consumers-risk-perception-and-willingness-to-purchase-iot-devices) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#which-privacy-and-security-attributes-most-impact-consumers-risk-perception-and-willingness-to-purchase-iot-devices)**
### 作者
* Pardis Emami-Naeini, University of Washington
* Janarth Dheenadhayalan, Carnegie Mellon University
* Yuvraj Agarwal, Carnegie Mellon University
* Lorrie Faith Cranor, Carnegie Mellon University
### 摘要
> 在以前的研究工作中，研究人员根据专家的意见提出了一种类似食品营养标签的物联网（IoT）安全和隐私标签。我们与1,371名Mechanical Turk（MTurk）参与者进行了一项调查，以测试先前工作中提出的每个隐私和安全属性值对消费者的风险传达能力和购买物联网设备意愿的影响。我们发现，参与者普遍认为旨在传达增加风险的值确实具有这样的效果。例如，我们发现当标签传达数据将被出售给第三方时，消费者会感知到更大的风险，而当数据根本不被出售时，消费者则感知到更小的风险。并且当消费者知道他们的数据不会被保留或与他人共享时，他们更愿意购买设备。然而，参与者对风险的感知并不总是与他们的购买意愿一致，有时是由于可用性问题。根据我们的研究结果，我们提出了如何更有效地呈现物联网标签上的隐私和安全属性以更好地传达风险给消费者的建议。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519463/](https://ieeexplore.ieee.org/document/9519463/)
## An Interactive Prover for Protocol Verification in the Computational Model.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#an-interactive-prover-for-protocol-verification-in-the-computational-model) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#an-interactive-prover-for-protocol-verification-in-the-computational-model)**
### 作者
* David Baelde, LMF, ENS Paris-Saclay & CNRS, Université Paris-Saclay, France
* Stéphanie Delaune, CNRS, IRISA, Univ Rennes, France
* Charlie Jacomme, CISPA Helmholtz Center for Information Security, Germany
* Adrien Koutsos, Inria, Paris, France
* Solène Moreau, CNRS, IRISA, Univ Rennes, France
### 摘要
> 鉴于设计安全协议的中心重要性，提供牢固的数学基础和计算机辅助方法来验证其正确性变得至关重要。在这里，我们详细介绍了Bana和Comon在[10]，[11]中引入的正式方法，该方法最初是为分析固定会话数的协议而设计的，并且缺乏对证明机制的支持。在本文中，我们提出了一个框架和一个交互证明器，可以机械化计算模型中任意数量会话的安全协议的证明。具体而言，我们开发了一个元逻辑以及一个用于推导安全性属性的证明系统。我们系统中的证明只处理协议执行的高层符号表示，类似于符号模型中的证明，但能够在计算级别上提供安全性保证。我们在一个新的交互证明器Squirrel prover中实现了我们的方法，该证明器接受以应用π演算规定的协议作为输入，并进行了一些涵盖各种基元（哈希、加密、签名、Diffie-Hellman指数）和安全性属性（认证、强机密性、不可链接性）的案例研究。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519392/](https://ieeexplore.ieee.org/document/9519392/)
## SmartPulse: Automated Checking of Temporal Properties in Smart Contracts.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#smartpulse-automated-checking-of-temporal-properties-in-smart-contracts) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#smartpulse-automated-checking-of-temporal-properties-in-smart-contracts)**
### 作者
* Jon Stephens, The University of Texas, Austin
* Kostas Ferles, The University of Texas, Austin
* Benjamin Mariano, The University of Texas, Austin
* Shuvendu Lahiri, Microsoft Research
* Isil Dillig, The University of Texas, Austin
### 摘要
> 智能合约是在区块链上运行并数字化执行各方之间合约的程序。由于智能合约中的错误可能带来严重的经济后果，确保此类软件的正确性非常重要。本文介绍了一种新颖的技术及其在名为SMARTPULSE的工具中的实现，用于自动验证智能合约中的时态属性。SMARTPULSE是第一个能够检查活性属性的智能合约验证工具，活性属性确保"好事情"最终会发生（例如，"我最终会收到退款"）。我们在一类广泛的智能合约和属性上对SMARTPULSE进行了实验评估，并展示了：（a）SMARTPULSE允许自动验证重要的活性属性，（b）它在安全验证方面与先进工具相比具有竞争力或更好，（c）它能够自动生成针对有漏洞合约的攻击。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519387/](https://ieeexplore.ieee.org/document/9519387/)
## An I/O Separation Model for Formal Verification of Kernel Implementations.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#an-i-o-separation-model-for-formal-verification-of-kernel-implementations) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#an-i-o-separation-model-for-formal-verification-of-kernel-implementations)**
### 作者
* Miao Yu, ECE Department and CyLab, Carnegie Mellon University
* Virgil Gligor, ECE Department and CyLab, Carnegie Mellon University
* Limin Jia, ECE Department and CyLab, Carnegie Mellon University
### 摘要
> 商品I/O硬件通常无法将操作系统和应用程序代码的I/O传输分离开来。即使使用最好的I/O硬件，商品系统有时也会在性能上进行分离保证和性能增加之间进行权衡。值得注意的是，设备固件并非必然恶意。相反，任何恶意驱动程序，即使在其自己的执行域中被隔离，也可以操纵其设备以突破I/O分离。为了高度保证防止这种漏洞，需要一个形式化的I/O分离模型，并在自动生成安全的I/O内核代码时使用该模型。本文提出了一个形式化的I/O分离模型，该模型定义了一个基于I/O传输授权的分离策略，并且与硬件无关。该模型、其细化以及在Dafny中规定和验证的Wimpy内核设计的实例化都得到了明确规定。然后，我们规定了内核实现，并自动生成了经过验证正确的汇编代码，以强制执行I/O分离策略。我们的形式建模使得可以发现以前未知的Wimpy内核设计和实现漏洞。最后，我们概述了如何将该模型应用于其他I/O内核，并总结了所学到的关键教训。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519491/](https://ieeexplore.ieee.org/document/9519491/)
## Diogenes: Lightweight Scalable RSA Modulus Generation with a Dishonest Majority.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#diogenes-lightweight-scalable-rsa-modulus-generation-with-a-dishonest-majority) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#diogenes-lightweight-scalable-rsa-modulus-generation-with-a-dishonest-majority)**
### 作者
* Megan Chen, Northeastern U. & Ligero Inc.
* Carmit Hazay, Bar-Ilan U. & Ligero Inc.
* Yuval Ishai, Technion
* Yuriy Kashnikov, Ligero Inc.
* Daniele Micciancio, UC San Diego
* Tarik Riviere, Ligero Inc.
* Abhi Shelat, Northeastern U. & Ligero Inc.
* Muthu Venkitasubramaniam, U. of Rochester & Ligero Inc.
* Ruihan Wang, Ligero Inc.
### 摘要
> 在这项工作中，我们设计并实施了第一个分布式生成RSA模数的协议，它可以支持数千个参与方，并能够抵抗对任意数量的参与方进行主动篡改的安全攻击。简言之，我们首先设计了一个针对这个规模的高度优化的协议，该协议对被动篡改具有安全性，并使用轻量级的简洁零知识证明来增强其对主动篡改的安全性。我们的协议实现了“可识别的中止”，即每当协议中止时就能识别出受到篡改的参与方，并支持公共可验证性。我们对被动篡改的协议扩展了Chen等人最近的工作（CRYPTO 2020），而这个工作又是基于Boneh-Franklin协议原始工作（CRYPTO 1997，J.ACM，2001）的蓝图。具体而言，我们将抽样模数的任务简化为安全分布式乘法，我们通过基于环-杂乱离散对假设的高效门限附加同态加密方案实现了这一目标。这导致协议的（摊销的）每个参与方通信成本随参与方数量的增加而对数增长。为了最大限度地减少参与方的工作量，我们采用了一个“公开可验证”的协调员，该协调员与所有参与方连接，并且只对公共数据执行计算。我们同时实现了被动和主动变体的协议，并使用2到4,000个参与方进行了实验。这是第一个可以扩展到超过1,000个参与方的任何多方计算协议的实现。对于在1,000个参与方之间生成2048位模数，我们的被动协议执行时间不到6分钟，主动变体的执行时间不到25分钟。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519483/](https://ieeexplore.ieee.org/document/9519483/)
## Refresh When You Wake Up: Proactive Threshold Wallets with Offline Devices.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#refresh-when-you-wake-up-proactive-threshold-wallets-with-offline-devices) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#refresh-when-you-wake-up-proactive-threshold-wallets-with-offline-devices)**
### 作者
* Yashvanth Kondi, Northeastern University
* Bernardo Magri, Concordium Blockchain Research Center, Aarhus University
* Claudio Orlandi, Aarhus University
* Omer Shlomovits, KZen Research
### 摘要
> 主动安全是指在分布式系统中抵御攻击者的概念，攻击者通过其生命周期中的不同设备进行入侵，但在任何给定时间内不超过阈值设备数量。阈值钱包的出现为更安全的加密货币托管提供了理由，需要一个适合这种情景的高效主动化协议。虽然已经在文献中提出和研究了许多主动化协议，但没有一个适合阈值钱包的通信模式。特别是，(t, n)阈值钱包被设计为t个参与方共同签署一个交易（其中只有一个可以是诚实的），而即使是目前最好的主动化协议也需要至少t-1个诚实参与方同时上线刷新系统。在这项工作中，我们提出了离线设备刷新的概念，其中任何t<inf>ρ</inf>个参与方在任何时间都可以主动化系统，剩余的n-t <inf>ρ</inf>离线参与方可以在他们的闲暇时间内被动式地"赶上"。然而，实现这种模式会出现许多微妙的问题。我们确定这个问题分为两种情况：(2, n)和(t, n)，其中t > 2。我们开发了以下处理这两种情况的新技术：•我们展示了(2, n)情况下刷新的紧密t <inf>ρ</inf>协议。具体而言，我们提供了一种高效的t <inf>ρ</inf> = 2协议，将一些标准的(2, n)阈值签名方案升级为带有离线刷新的主动安全。该协议可以增强现有的阈值钱包实现，以供即时使用-我们展示了主动化不会干扰它们的原生操作模式。此技术与Schnorr、EdDSA以及一些复杂的ECDSA协议兼容。通过实施，我们展示了主动化两种不同的近期(2, n)ECDSA协议只会产生14%和24%的计算开销，分别少于200字节，并且没有额外的通信轮。•对于一般的(t, n)情况，我们证明了用t <inf>ρ</inf> < 2(t−1)构建一个离线刷新协议是不可能的，即容忍在线参与方中的不诚实多数。我们的技术在推理主动安全的消息复杂性方面是新颖的，并且可能具有独立的研究意义。我们的结果对于小规模的分权化（例如带有阈值钱包的2FA）是积极的，对于高阈值的大规模分布式系统是消极的。因此，我们开始研究具有离线刷新的主动安全，并对不诚实多数情况进行了全面处理。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519453/](https://ieeexplore.ieee.org/document/9519453/)
## Compact Certificates of Collective Knowledge.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#compact-certificates-of-collective-knowledge) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#compact-certificates-of-collective-knowledge)**
### 作者
* Silvio Micali, Algorand; MIT CSAIL
* Leonid Reyzin, Algorand; Boston University
* Georgios Vlachos, Axelar and University of Waterloo
* Riad S. Wahby, Algorand; Stanford
* Nickolai Zeldovich, Algorand; MIT CSAIL
### 摘要
> 我们介绍了紧凑的证书方案，允许任何一方通过具有不同权重的多个签名者对消息M进行大量的签名，并将它们压缩为一个更短的证书。这个证书可以说服验证者，具有足够总权重的签名者对M进行了签名，尽管验证者将不会看到——更不用说验证——所有的签名。因此，例如，紧凑的证书可以用来证明共同拥有足够总账户余额的参与方已对区块链中的特定区块进行认证。在定义紧凑证书之后，我们演示了一种高效的紧凑证书方案。然后我们展示了如何在分散的不可靠网络环境中以及存在希望破坏证书创建的对抗方的情况下实现这样的方案。我们的评估结果显示，与自然基准方法相比，紧凑证书的大小可以减小50-280倍，验证成本可以降低300-4000倍。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519437/](https://ieeexplore.ieee.org/document/9519437/)
## One Engine to Fuzz 'em All: Generic Language Processor Testing with Semantic Validation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#one-engine-to-fuzz-em-all-generic-language-processor-testing-with-semantic-validation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#one-engine-to-fuzz-em-all-generic-language-processor-testing-with-semantic-validation)**
### 作者
* Yongheng Chen, Georgia Institute of Technology, Pennsylvania State University
* Rui Zhong, Georgia Institute of Technology, Pennsylvania State University; UESTC
* Hong Hu, Georgia Institute of Technology, Pennsylvania State University; UESTC
* Hangfan Zhang, Georgia Institute of Technology, Pennsylvania State University; UESTC
* Yupeng Yang, UESTC
* Dinghao Wu, Georgia Institute of Technology, Pennsylvania State University; UESTC
* Wenke Lee, Georgia Institute of Technology, Pennsylvania State University
### 摘要
> 语言处理器，如编译器和解释器，在构建现代软件中不可或缺。语言处理器中的错误可能导致严重后果，如功能不正确甚至恶意攻击。然而，自动测试语言处理器以找出错误并非易事。现有的测试方法（或模糊测试工具）要么无法生成高质量（即语义正确）的测试用例，要么只支持有限的编程语言。在本文中，我们提出了一种名为POLYGLOT的通用模糊测试框架，用于生成不同编程语言处理器的高质量测试用例。为了实现通用适用性，POLYGLOT通过统一的中间表示（IR）来中和编程语言的语法和语义差异。为了改善语言的有效性，POLYGLOT采用约束变异和语义验证来保留语法正确性并修复语义错误。我们已将POLYGLOT应用于9种编程语言的21个流行的语言处理器，并发现了173个新的错误，其中113个已经修复并分配了18个CVE。我们的实验表明，POLYGLOT可以支持多种编程语言，并且在代码覆盖率方面优于现有的模糊测试工具，提高了30倍以上。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519403/](https://ieeexplore.ieee.org/document/9519403/)
## StochFuzz: Sound and Cost-effective Fuzzing of Stripped Binaries by Incremental and Stochastic Rewriting.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#stochfuzz-sound-and-cost-effective-fuzzing-of-stripped-binaries-by-incremental-and-stochastic-rewriting) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#stochfuzz-sound-and-cost-effective-fuzzing-of-stripped-binaries-by-incremental-and-stochastic-rewriting)**
### 作者
* Zhuo Zhang, Purdue University
* Wei You, Renmin University of China
* Guanhong Tao, Purdue University
* Yousra Aafer, University of Waterloo
* Xuwei Liu, Purdue University
* Xiangyu Zhang, Purdue University
### 摘要
> 模糊剥离的二进制文件面临许多困难，因为模糊器需要对二进制文件进行插装，以收集运行时反馈以指导输入的变异。然而，由于缺乏符号信息，在剥离的二进制文件上进行正确的插装是困难的。现有的技术要么依赖于硬件和昂贵的动态二进制翻译引擎（如QEMU），要么进行不可行的假设，例如二进制文件不包含内联数据。我们观察到，模糊是一个高度重复的过程，提供了大量的试错机会。因此，我们提出了一种新的增量和随机重写技术StochFuzz，它依附于模糊过程。它生成了许多不同版本的重写二进制文件，这些文件的有效性可以通过多次模糊运行的批准/否决来确定。通过对样本运行收集的证据进行概率分析，并改进重写。该过程最终在正确重写的二进制文件上收敛。我们在两组真实世界程序上评估了StochFuzz，并与其他五个基线进行了比较。结果表明，StochFuzz在准确性和成本效益方面优于最先进的仅二进制文件的模糊器（例如e9patch，ddisasm和RetroWrite），并且与基于源代码的模糊器的性能相当。StochFuzz已经公开发布[1]。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519407/](https://ieeexplore.ieee.org/document/9519407/)
## NtFuzz: Enabling Type-Aware Kernel Fuzzing on Windows with Static Binary Analysis.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#ntfuzz-enabling-type-aware-kernel-fuzzing-on-windows-with-static-binary-analysis) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#ntfuzz-enabling-type-aware-kernel-fuzzing-on-windows-with-static-binary-analysis)**
### 作者
* Jaeseung Choi, KAIST
* Kangsu Kim, KAIST
* Daejin Lee, KAIST
* Sang Kil Cha, KAIST
### 摘要
> 虽然内核模糊测试工具常常利用系统调用的类型信息，但目前的Windows内核模糊测试工具并未遵循这一实践，因为大多数系统调用是私有的且文档化较少。在本文中，我们提出了一种实用的静态二进制分析器，可以自动推断Windows系统调用的类型。我们将该分析器整合到NtFuzz中，这是一种具有类型感知能力的Windows内核模糊测试框架。据我们所知，这是第一个在商用操作系统上利用可扩展二进制分析的实用模糊测试系统。通过NtFuzz，我们发现了11个以前未知的内核漏洞，并通过微软提供的漏洞赏金计划获得了25000美元的奖励。所有这些结果证实了我们的系统作为内核模糊测试工具的实用性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519448/](https://ieeexplore.ieee.org/document/9519448/)
## Who is Real Bob? Adversarial Attacks on Speaker Recognition Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#who-is-real-bob-adversarial-attacks-on-speaker-recognition-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#who-is-real-bob-adversarial-attacks-on-speaker-recognition-systems)**
### 作者
* Guangke Chen, ShanghaiTech University; Chinese Academy of Sciences, Shanghai Institute of Microsystem and Information Technology; University of Chinese Academy of Sciences
* Sen Chenb, College of Intelligence and Computing, Tianjin University; Nanyang Technological University
* Lingling Fan, Nanyang Technological University
* Xiaoning Du, Nanyang Technological University
* Zhe Zhao, ShanghaiTech University
* Fu Song, ShanghaiTech University; Shanghai Engineering Research Center of Intelligent Vision and Imaging
* Yang Liu, Nanyang Technological University
### 摘要
> 说话者识别（SR）作为生物识别认证或身份验证机制广泛应用于我们的日常生活。SR的普及带来了严重的安全问题，最近的对抗攻击证明了这一点。然而，目前的攻击仅考虑了白盒设置，对于实际的黑盒设置中这类威胁的影响仍然未知。在本文中，我们首次进行全面而系统的研究，以了解对抗攻击对实际黑盒设置中的SR系统（SRSs）的安全弱点。为此，我们提出了一种对抗攻击方法，称为FAKEBOB，用于生成对抗样本。具体来说，我们将对抗样本生成建模为一个优化问题，将对抗样本的置信度和最大失真结合起来，以在对抗声音的强度和不可察觉性之间取得平衡。其中一个关键贡献是提出了一种新的算法来估计分数阈值，这是SRSs中的一个特征，并在优化问题中使用它来解决优化问题。我们证明，FAKEBOB在开源和商业系统上都能够实现99%的目标攻击成功率。我们进一步证明，当在现实世界的空中播放时，FAKEBOB对于开源和商业系统也同样有效。此外，我们进行了一项人类研究，揭示了人类很难区分原始和对抗声音的说话者。最后但并非最不重要的是，我们展示了从语音识别领域得出的四种有希望的对抗攻击防御方法在SRSs面对FAKEBOB时变得无效，这需要更有效的防御方法。我们强调，我们的研究窥视了对SRSs的对抗攻击的安全影响，并真实地促进了提高SRSs的安全鲁棒性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519486/](https://ieeexplore.ieee.org/document/9519486/)
## Hear "No Evil", See "Kenansville"*: Efficient and Transferable Black-Box Attacks on Speech Recognition and Voice Identification Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#hear-no-evil-see-kenansville-efficient-and-transferable-black-box-attacks-on-speech-recognition-and-voice-identification-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#hear-no-evil-see-kenansville-efficient-and-transferable-black-box-attacks-on-speech-recognition-and-voice-identification-systems)**
### 作者
* Hadi Abdullah, University of Florida
* Muhammad Sajidur Rahman, University of Florida
* Washington Garcia, University of Florida
* Kevin Warren, University of Florida
* Anurag Swarnim Yadav, University of Florida
* Tom Shrimpton, University of Florida
* Patrick Traynor, University of Florida
### 摘要
> 自动语音识别和语音识别系统正在广泛应用于各种应用领域，从为缺乏传统界面的设备提供控制机制，到自动转录对话和用户身份认证。这些应用都涉及到重要的安全和隐私考虑。我们开发了一种可以在现有系统中引起错误转录和错误识别的攻击方法，对人类的理解几乎没有影响。现代系统的处理流程包括信号预处理和特征提取步骤，其输出被送入一个机器学习模型。之前的工作主要集中在模型上，利用白盒知识来定制具体模型的攻击。我们关注的是模型之前的处理流程，这些处理流程在不同系统中是相似的（与模型不同）。因此，我们的攻击是黑盒的、可迁移的，可以调整以零查询的方式来实现，并且只修改了少量帧的音频就能达到高达100%的错误转录和错误识别率。我们通过亚马逊 Mechanical Turk 进行了一项研究，结果显示，人类对正常和被扰动的音频的感知没有统计上的显著差异。我们的研究结果表明，模型可能学到了人类主体通常无法感知但对模型准确性至关重要的语音特征。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519472/](https://ieeexplore.ieee.org/document/9519472/)
## SoK: The Faults in our ASRs: An Overview of Attacks against Automatic Speech Recognition and Speaker Identification Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-the-faults-in-our-asrs-an-overview-of-attacks-against-automatic-speech-recognition-and-speaker-identification-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-the-faults-in-our-asrs-an-overview-of-attacks-against-automatic-speech-recognition-and-speaker-identification-systems)**
### 作者
* Hadi Abdullah, University of Florida
* Kevin Warren, University of Florida
* Vincent Bindschaedler, University of Florida
* Nicolas Papernot, University of Toronto
* Patrick Traynor, University of Florida
### 摘要
> 语音和说话者识别系统被应用于多种应用场景，从个人助手到电话监控和生物特征认证。近年来，神经网络的提高准确性使得这些系统能够得到广泛应用。与其他基于神经网络的系统类似，最近的研究表明语音和说话者识别系统容易受到通过操纵输入进行攻击的威胁。然而，我们在本文中证明，语音和说话者系统的端到端架构以及它们的输入特性使得对抗和防御与图像空间中的攻击迥然不同。我们首先通过对该领域现有研究进行系统化，并提供一个分类法，以便社区评估未来的工作。然后，我们通过实验证明，对这些模型的攻击几乎普遍无法转移。通过这样做，我们认为需要大量额外的工作才能提供足够的缓解措施。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519395/](https://ieeexplore.ieee.org/document/9519395/)
## Cross-Domain Access Control Encryption: Arbitrary-policy, Constant-size, Efficient.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cross-domain-access-control-encryption-arbitrary-policy-constant-size-efficient) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cross-domain-access-control-encryption-arbitrary-policy-constant-size-efficient)**
### 作者
* Xiuhua Wang, The Chinese University of Hong Kong, Shatin, N.T., Hong Kong
* Sherman S. M. Chow, The Chinese University of Hong Kong, Shatin, N.T., Hong Kong
### 摘要
> 访问控制是安全领域的基本要素。Damgard、Haagh和Orlandi（TCC 2016）引入了访问控制加密（ACE），它在不透露发送者、接收者或加密流量内容的情况下强制执行无读取和无写入规则。现有的ACE设计用于任意策略（涵盖所有读写关系的可能性）依赖于不可区分混淆或基于格的假设，其密文要么具有指数级大小，要么具有电路实现的策略。此外，它们的设计要求一个私密的清洁器密钥一直在线进行清理。目前唯一支持公共清洁器密钥的现有方案只支持简单策略。总结一下，目前最先进的ACE方案最多只具有以下两个期望属性之一：任意策略、恒定大小（密文）和高效清洁。本文介绍了一种无清洁器密钥的任意策略ACE方案，解决了Kim和Wu（Asiacrypt 2017）提出的开放问题。我们还提出了跨领域ACE的概念，将密钥生成器分为发送者权威和接收者权威。我们的方案需要保持结构的签名、非交互零知识证明和可清洗身份基础广播加密作为构建模块。它可以直接基于配对假设实现，并具有恒定的密文大小。我们还制作了我们的方案原型，并展示了其实际效率。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519503/](https://ieeexplore.ieee.org/document/9519503/)
## Lightweight Techniques for Private Heavy Hitters.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#lightweight-techniques-for-private-heavy-hitters) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#lightweight-techniques-for-private-heavy-hitters)**
### 作者
* Dan Boneh, Stanford
* Elette Boyle, IDC Herzliya
* Henry Corrigan-Gibbs, EPFL and MIT CSAIL
* Niv Gilboa, Ben-Gurion University
* Yuval Ishai, Technion
### 摘要
> 本文提出了一种解决私有重要访问者问题的新协议。在这个问题中，有许多客户端和少量的数据收集服务器。每个客户端都持有一个私有的位串。服务器希望恢复出所有受欢迎的串的集合，而不了解任何客户端串的其他信息。例如，一个网络浏览器供应商可以使用我们的协议来确定哪些主页受欢迎，而不了解任何用户的主页。我们还考虑了更简单的私有子集直方图问题，其中服务器希望计算出持有特定集合中的串的客户端数目，而不向客户端透露此集合。我们的协议使用两个数据收集服务器，并且在协议运行中，每个客户端只发送一条消息给服务器。我们的协议可以保护客户端隐私免受其中一个服务器的任意错误行为，并且我们的方法不需要使用公钥密码术（除了安全通道），也不需要通用多方计算。相反，我们依赖于增量分布式点函数，这是一种新的密码工具，允许客户端简洁地将指数级大型二叉树节点上的标签进行秘密共享，前提是树上只有一条非零路径。在探索过程中，我们还开发了新的一般工具，以提供在分布式点函数应用中的恶意安全性。我们的重要访问者协议的一个限制是，它向服务器透露了比受欢迎的串集合本身稍微多一些的信息。我们准确地定义和量化了这种泄漏，并解释了如何减轻其影响。在与美国两侧的两个服务器的实验评估中，这些服务器可以在54分钟内找到400,000个客户端持有的256位串中的200个最受欢迎的串。我们的协议具有高度可并行化的特点。我们估计，每个逻辑服务器使用20台物理机器，我们的协议可以在一小时多的计算中计算出一千万个客户端的重要访问者。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519492/](https://ieeexplore.ieee.org/document/9519492/)
## SoK: Computer-Aided Cryptography.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-computer-aided-cryptography) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-computer-aided-cryptography)**
### 作者
* Manuel Barbosa, University of Porto (FCUP) and INESC TEC
* Gilles Barthe, Max Planck Institute for Security & Privacy; IMDEA Software Institute
* Karthik Bhargavan, INRIA, Paris
* Bruno Blanchet, INRIA, Paris
* Cas Cremers, CISPA Helmholtz Center for Information Security
* Kevin Liao, Max Planck Institute for Security & Privacy; MIT
* Bryan Parno, Carnegie Mellon University
### 摘要
> 计算机辅助密码学是一个活跃的研究领域，它开发和应用形式化、机器可验证的方法来设计、分析和实施密码学。我们提供了对计算机辅助密码学文献的横向系统化，重点关注三个主要领域：（i）设计层面的安全性（包括符号安全和计算安全），（ii）功能正确性和效率，以及（iii）实施层面的安全性（特别关注数字侧信道抵抗）。在每个领域，我们首先阐明了计算机辅助密码学的作用-它如何帮助解决当前的挑战以及需要注意的问题。我们接下来提出了现有工具的分类法，比较了它们的准确性、范围、可信度和可用性。然后，我们突出了它们的主要成就、权衡和研究挑战。在涵盖了三个主要领域之后，我们提出了两个案例研究。首先，我们研究了将专注于不同领域的工具结合起来以巩固它们可以提供的保证的努力。其次，我们概括了从计算机辅助密码学社区参与TLS 1.3标准化工作中所学到的经验。最后，我们对论文作者、工具开发者和标准化机构做出了推荐。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519449/](https://ieeexplore.ieee.org/document/9519449/)
## ConDySTA: Context-Aware Dynamic Supplement to Static Taint Analysis.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#condysta-context-aware-dynamic-supplement-to-static-taint-analysis) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#condysta-context-aware-dynamic-supplement-to-static-taint-analysis)**
### 作者
* Xueling Zhang, Department of Computer Science, University of Texas, San Antonio, Texas, USA
* Xiaoyin Wang, Department of Computer Science, University of Texas, San Antonio, Texas, USA
* Rocky Slavin, Department of Computer Science, University of Texas, San Antonio, Texas, USA
* Jianwei Niu, Department of Computer Science, University of Texas, San Antonio, Texas, USA
### 摘要
> 静态污点分析是一种广泛应用的技术，用于检测软件系统中的污点流。虽然它们在理论上是保守的，并且旨在检测所有可能的污点流，但由于各种实现限制，静态污点分析几乎总是存在误报的情况。动态编程语言特性、无法访问的代码以及在软件项目中使用多种编程语言等都是主要原因。为了缓解这个问题，我们开发了一种新颖的方法，即DySTA，它使用动态污点分析结果作为静态污点分析的额外来源。然而，简单地添加来源会导致静态分析失去上下文敏感性，从而产生错误的结果。因此，我们开发了一种混合上下文匹配算法和相应的工具ConDySTA，以保持DySTA的上下文敏感性。我们使用了REPRODROID [1]这个用于Android分析工具的综合评估框架来评估ConDySTA。结果显示，在28个应用程序中，ConDySTA能够检测到其中12个污点流，这些污点流在ReproDroid考虑的六种最先进的静态污点分析中都没有被检测到；同时，ConDySTA没有报告任何错误的结果，而DySTA单独报告了9个错误。我们进一步将ConDySTA和FlowDroid应用于来自Google Play的前100个Android应用程序，并且ConDySTA能够检测到额外的39个污点流（除了FlowDroid发现的281个污点流），同时保持了FlowDroid的上下文敏感性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519468/](https://ieeexplore.ieee.org/document/9519468/)
## OSPREY: Recovery of Variable and Data Structure via Probabilistic Analysis for Stripped Binary.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#osprey-recovery-of-variable-and-data-structure-via-probabilistic-analysis-for-stripped-binary) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#osprey-recovery-of-variable-and-data-structure-via-probabilistic-analysis-for-stripped-binary)**
### 作者
* Zhuo Zhang, Purdue University
* Yapeng Ye, Purdue University
* Wei You, Renmin University of China
* Guanhong Tao, Purdue University
* Wen-chuan Lee, Purdue University
* Yonghwi Kwon, University of Virginia
* Yousra Aafer, University of Waterloo
* Xiangyu Zhang, Purdue University
### 摘要
> 从去除二进制文件中恢复变量和数据结构信息是二进制程序分析中的一项重要挑战。虽然现有一些最先进的技术在特定环境中有效，但这种有效性可能无法推广。这主要是因为该问题在编译过程中存在信息损失，从而使得问题的本质具有不确定性。大多数现有技术是确定性的，缺乏一种系统的处理不确定性的方式。我们提出了一种新颖的概率技术来恢复变量和结构。引入随机变量来表示抽象内存位置具有各种类型和结构属性（例如作为某个数据结构的字段）的可能性。这些随机变量通过程序分析得出的概率约束连接在一起。解决这些约束可以产生随机变量的后验概率，这本质上表示了恢复结果。我们的实验证明，我们的技术在性能上明显优于一些最先进的系统，包括IDA、Ghidra、Angr和Howard。我们的案例研究证明，恢复的信息提高了二进制代码加固和二进制反编译的效果。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519451/](https://ieeexplore.ieee.org/document/9519451/)
## SoK: All You Ever Wanted to Know About x86/x64 Binary Disassembly But Were Afraid to Ask.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-all-you-ever-wanted-to-know-about-x86-x64-binary-disassembly-but-were-afraid-to-ask) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-all-you-ever-wanted-to-know-about-x86-x64-binary-disassembly-but-were-afraid-to-ask)**
### 作者
* Chengbin Pang, Stevens Institute of Technology; Nanjing University
* Ruotong Yu, Stevens Institute of Technology
* Yaohui Chen, Facebook Inc
* Eric Koskinen, Stevens Institute of Technology
* Georgios Portokalidis, Stevens Institute of Technology
* Bing Mao, Nanjing University
* Jun Xu, Stevens Institute of Technology
### 摘要
> 二进制代码的反汇编是困难的，但对于提高二进制软件的安全性是必要的。在过去几十年里，二进制反汇编的研究产生了许多工具和框架，这些工具和框架已经提供给研究人员和安全专业人员使用。这些工具采用了多种策略，使它们具有不同的特点。然而，缺乏系统化阻碍了该领域的新研究，并使选择合适的工具变得困难，因为我们不了解现有工具的优缺点。在本文中，我们通过研究九种受欢迎的开源工具，对二进制反汇编进行系统化处理。我们结合对它们代码基础的手动研究，使用至今最全面的实验评估（包括3,788个二进制文件）。我们的研究提供了对反汇编策略的全面描述和组织，将其分类为算法或启发式。与此同时，我们还测量并报告了每个工具的每个算法对结果的影响。我们发现，虽然所有工具都使用了有原则的算法，但它们仍然大量依赖启发式方法来增加代码覆盖率。根据所使用的启发式方法不同，会产生不同的覆盖率与正确性的权衡，导致工具具有不同的优势和劣势。我们预计这些发现将帮助用户选择合适的工具，并协助研究人员改进二进制反汇编。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519438/](https://ieeexplore.ieee.org/document/9519438/)
## Learning Differentially Private Mechanisms.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#learning-differentially-private-mechanisms) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#learning-differentially-private-mechanisms)**
### 作者
* Subhajit Roy, Computer Science and Engineering, Indian Institute of Technology Kanpur
* Justin Hsu, Department of Computer Sciences, University of Wisconsin–Madison
* Aws Albarghouthi, Department of Computer Sciences, University of Wisconsin–Madison
### 摘要
> 差分隐私是对数据隐私的正式、数学定义，在学术界、产业界和政府中得到了广泛关注。正确构建差分隐私算法的任务并非易事，而且在基础算法中也存在错误。目前，尚无自动化支持将现有的非隐私程序转换为差分隐私版本。本文提出了一种技术，用于自动学习给定非隐私程序的准确和差分隐私版本。我们展示了如何通过多种技术解决这个困难的程序合成问题：精选代表性示例输入、将问题简化为连续优化，并将结果映射回符号表达式。我们证明了我们的方法能够从差分隐私文献中学习基础算法，并且在自然程序合成基准测试中明显优于其他方法。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519410/](https://ieeexplore.ieee.org/document/9519410/)
## Adversary Instantiation: Lower Bounds for Differentially Private Machine Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#adversary-instantiation-lower-bounds-for-differentially-private-machine-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#adversary-instantiation-lower-bounds-for-differentially-private-machine-learning)**
### 作者
* Milad Nasr, University of Massachusetts, Amherst
* Shuang Songi, Google Brain
* Abhradeep Thakurta, Google Brain
* Nicolas Papernot, Google Brain
* Nicholas Carlin, Google Brain
### 摘要
> 差分隐私（DP）机器学习允许我们在保护数据隐私的情况下训练模型，限制数据泄露。DP通过一个密码学游戏来形式化数据泄露，该游戏中，对手必须预测模型是在数据集D上训练的还是在只有一个示例不同的数据集D'上训练的。如果观察训练算法并不能实质性地增加对手成功猜测模型所训练数据集的概率，那么该算法被称为差分隐私。因此，隐私分析的目的是将任何对手成功猜测模型所训练数据集的概率上限化为一个值。在我们的论文中，我们构建了这个假设的对手以建立这个可区分游戏能够获胜的概率下限。我们使用这个对手来评估DP训练算法中允许的对手能力在隐私分析中的重要性。对于DP-SGD来说，这是一种使用差分隐私训练神经网络的最常见方法，我们的下限与理论上限相匹配，这意味着为了证明更好的上限，需要额外的假设。幸运的是，我们发现当对对手的能力施加额外（现实）的限制时，我们的攻击变得明显较弱。因此，在许多实际部署的实际情况下，我们的下限与分析提供的上限之间存在差距：差分隐私比较保守，对手可能泄露的信息量不及理论上限所暗示的那么多。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519424/](https://ieeexplore.ieee.org/document/9519424/)
## Manipulation Attacks in Local Differential Privacy.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#manipulation-attacks-in-local-differential-privacy) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#manipulation-attacks-in-local-differential-privacy)**
### 作者
* Albert Cheu, Khoury College of Computer Sciences, Northeastern University, Boston, Massachusetts
* Adam Smith, Department of Computer Science, Boston University, Boston, Massachusetts
* Jonathan Ullman, Khoury College of Computer Sciences, Northeastern University, Boston, Massachusetts
### 摘要
> 本文研究局部差分隐私（Local Differential Privacy）作为一种对分布式算法的广泛研究限制，其收集敏感用户数据的总和，并且现在已在几个大型系统中部署。我们开展了对局部差分隐私协议的一个基本限制的系统研究：它们极易受到恶意操纵的攻击。尽管任何算法都可以通过虚假输入进行恶意操纵，但我们发现任何非交互式的局部差分隐私协议都可以被操纵得更为严重-当隐私水平较高或域大小较大时，协议中的一小部分用户可以完全掩盖诚实用户输入的分布。我们还构建了针对局部差分隐私中多种常见任务的操纵鲁棒性最优的协议。最后，我们进行了简单的实验证实了我们的理论结果，并展示了在没有操纵的情况下，协议的最优性能与对操纵的鲁棒性水平可能截然不同。我们的研究结果提示在部署局部差分隐私时要保持谨慎，并强调了高效的加密技术对于实现集中式差分隐私机制的分布式模拟的重要性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519418/](https://ieeexplore.ieee.org/document/9519418/)
## Bitcoin-Compatible Virtual Channels.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#bitcoin-compatible-virtual-channels) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#bitcoin-compatible-virtual-channels)**
### 作者
* Lukas Aumayr, Department of Computer Science, TU Wien, Wien, Austria
* Matteo Maffei, Department of Computer Science, TU Wien, Wien, Austria
* Oğuzhan Ersoy, Department of Intelligent Systems, TU Delft, Delft, Netherlands
* Andreas Erwig, Department of Computer Science, TU Darmstadt, Darmstadt, Germany
* Sebastian Faust, Department of Computer Science, TU Darmstadt, Darmstadt, Germany
* Siavash Riahi, Department of Computer Science, TU Darmstadt, Darmstadt, Germany
* Kristina Hostáková, Department of Computer Science, ETH Zürich, Zürich, Switzerland
* Pedro Moreno-Sanchez, IMDEA Software Institute, Madrid, Spain
### 摘要
> 目前的无需许可加密货币，如比特币，存在交易速率有限和确认时间慢的问题，这限制了其进一步的采用。支付通道是解决这些问题最有前景的方法之一，因为它们允许通道的各方以点对点的方式执行任意多的支付，同时只在区块链上上传两个交易。该概念已经被推广为支付通道网络，其中使用支付通道路径来在两个没有直接通道的用户之间结算支付。然而，这种方法要求路径上的每个用户积极参与，使系统变得不太可靠（他们可能离线），更昂贵（他们收取每笔支付的费用），并且速度更慢（中介需要积极参与支付）。为了缓解这个问题，最近的工作引入了虚拟通道的概念（IEEE S&P’19），该概念只在支付方和收款方之间的桥接的初始创建中涉及中介，后者可以独立执行任意多的离链交易。不幸的是，现有的构造只适用于以太坊，因为它们依赖于其账户模型和图灵完备的脚本语言。迄今为止，在其他具有有限脚本功能的区块链技术（如比特币）中实现虚拟通道一直被视为一个未解决的挑战。在这项工作中，我们提出了第一个基于UTXO模型构建的虚拟通道协议，并要求该协议支持仅具有数字签名方案和时间锁定功能的脚本语言，从而与几乎所有加密货币（包括比特币）兼容。我们在通用组合性框架中将虚拟通道的安全性属性形式化为理想功能，并证明我们的协议构成了其安全实现。我们在比特币区块链上进行了原型和评估，证明了其高效性：对于n个连续支付，它们需要离链交换9 + 2n个交易或总共3524 + 695n字节，在乐观情况下没有链上痕迹。与在支付通道网络中路由支付相比，这是一个重大的改进，后者需要进行8n个交易，总共交换3026n个字节。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519487/](https://ieeexplore.ieee.org/document/9519487/)
## On the Just-In-Time Discovery of Profit-Generating Transactions in DeFi Protocols.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#on-the-just-in-time-discovery-of-profit-generating-transactions-in-defi-protocols) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#on-the-just-in-time-discovery-of-profit-generating-transactions-in-defi-protocols)**
### 作者
* Liyi Zhou, Imperial College London, United Kingdom
* Kaihua Qin, Imperial College London, United Kingdom
* Antoine Cully, Imperial College London, United Kingdom
* Benjamin Livshits, Imperial College London, United Kingdom
* Arthur Gervais, Imperial College London, United Kingdom
### 摘要
> 去中心化金融（DeFi）是一个区块链资产启用的金融生态系统，每日交易量达数百万美元，锁定的美元金额达数十亿，并涌现了大量新兴协议（用于借贷、质押和交易）。由于DeFi中的所有交易、用户余额和总锁定价值都是公开可读的，自然而然的问题是：我们如何能够自动地在交织在一起的DeFi平台上构建盈利交易？在本文中，我们研究了两种方法，可以让我们自动创建盈利的DeFi交易，一个非常适合套利，另一个适用于更复杂的情况。我们首先采用了Bellman-Ford-Moore算法与DeFiPoser-ARB，然后在DeFiPoser-SMT中为定理证明器创建了逻辑DeFi协议模型。虽然DeFiPoser-ARB专注于形成循环的DeFi交易，并且在套利方面表现非常好，但DeFiPoser-SMT可以检测更复杂的盈利交易。我们估计，DeFiPoser-ARB和DeFiPoser-SMT分别可以生成平均每周191.48个ETH（76,592美元）和72.44个ETH（28,976美元）的收入，其中最高交易收入分别为81.31个ETH（32,524美元）和22.40个ETH（8,960美元）。我们进一步展示了DeFiPoser-SMT如何发现了2020年2月的已知经济攻击bZx，该攻击获得了480,000美元。我们的刑事调查显示，这个机会存在了69天，如果提早一天利用，可能会产生更多收入。我们的评估跨越了150天，涉及了96个DeFi协议操作和25个资产。除了上述的财务收益之外，分叉还会降低区块链共识的安全性，因为它们增加了双花和自私挖矿的风险。我们探讨了DeFiPoser-ARB和DeFiPoser-SMT对区块链共识的影响。具体而言，我们展示了我们的工具识别出的交易超过了以太坊区块奖励高达874倍。在提供了由马尔可夫决策过程（MDP）提供的最优对抗策略的情况下，我们量化了盈利交易被称为挖矿可提取价值（MEV）并激励MEV感知矿工分叉区块链的价值门槛。例如，我们发现在以太坊上，拥有10%哈希率的矿工如果MEV机会超过区块奖励的4倍，就会分叉区块链。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519469/](https://ieeexplore.ieee.org/document/9519469/)
## Lockable Signatures for Blockchains: Scriptless Scripts for All Signatures.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#lockable-signatures-for-blockchains-scriptless-scripts-for-all-signatures) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#lockable-signatures-for-blockchains-scriptless-scripts-for-all-signatures)**
### 作者
* Sri Aravinda Krishnan Thyagarajan, Friedrich Alexander Universität Erlangen-Nürnberg
* Giulio Malavolta, Friedrich Alexander Universität Erlangen-Nürnberg
### 摘要
> 支付通道网络（PCN）极大提高了基于区块链的加密货币的可扩展性：除了提高交易速度外，PCN还实现了低廉的跨币种支付和原子交换。然而，当前的PCN方案要么过度依赖底层区块链的特殊脚本功能（例如哈希时间锁合约），要么专门针对少数几种数字签名方案（如Schnorr或ECDSA签名）进行设计。这使得许多正在积极开发并使用不同签名方案的货币无法享受到PCN的好处，令人不满意。在本文中，我们研究了在任何签名方案下，我们是否可以构建基于最低区块链验证数字签名能力的PCN。在肯定地回答这个问题时，我们引入了可锁定签名的概念，这构成了我们PCN协议的基石。我们的方法是通用的，PCN协议与任何数字签名方案兼容，从而继承了底层方案具有的Schnorr/ECDSA不具备的所有优点（如可聚合签名或后量子安全性）。虽然使用通用密码机制使得我们的通用协议不切实际，但我们认为这是一个重要的可行性结果，因为它可以作为构建针对特定签名方案优化的协议的基础。为了证实这一说法，我们为Boneh-Lynn-Shacham（BLS）签名的特殊情况设计了一个高效的PCN协议。BLS签名具有许多独特特性，使其成为区块链的可行候选，例如短，唯一和可聚合的签名。然而，在我们的工作之前，没有人知道是否有与之兼容的PCN（不需要高级脚本语言）。我们的PCN的成本由少数几次对BLS算法的调用主导。我们对这些基本操作进行的具体评估显示，使用普通硬件的用户可以以最小的开销处理支付。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519419/](https://ieeexplore.ieee.org/document/9519419/)
## Randomized Last-Level Caches Are Still Vulnerable to Cache Side-Channel Attacks! But We Can Fix It.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#randomized-last-level-caches-are-still-vulnerable-to-cache-side-channel-attacks-but-we-can-fix-it) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#randomized-last-level-caches-are-still-vulnerable-to-cache-side-channel-attacks-but-we-can-fix-it)**
### 作者
* Wei Song, State Key Laboratory of Information Security, CAS, Institute of Information Engineering, Beijing, China; School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Boya Li, State Key Laboratory of Information Security, CAS, Institute of Information Engineering, Beijing, China; School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Zihan Xue, State Key Laboratory of Information Security, CAS, Institute of Information Engineering, Beijing, China; School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Zhenzhen Li, State Key Laboratory of Information Security, CAS, Institute of Information Engineering, Beijing, China; School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Wenhao Wang, State Key Laboratory of Information Security, CAS, Institute of Information Engineering, Beijing, China; School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Peng Liu, The Pennsylvania State University, University Park, USA
### 摘要
> 缓存随机化作为抵御基于冲突的缓存侧信道攻击的有希望的防御措施最近重新引起关注。作为最新的两种实现，CEASER-S和ScatterCache都声称通过使用随机偏斜缓存来防御冲突型缓存侧信道攻击。然而，我们的实验表明，攻击者可以很容易地在CEASER-S的选择性重映射期间内找到可用的逐出集合，并且增加分区数量而不进行动态重映射，例如ScatterCache，不能消除这一威胁。通过定量分析LLC中各种攻击留下的访问模式，我们新发现了随机化缓存的假设和实现中的几个问题，这些问题也被冲突型缓存侧信道攻击研究所忽视。然而，缓存随机化并非一种虚假的希望，它是一种应该广泛应用于未来处理器中的有效防御措施。新发现的问题与现有的缓存随机化实现相关，并且可以进行修复。本文提出了几种新的防御思路。我们的实验表明，所有新发现的问题都在当前性能预算内得到修复。我们还认为，随机化的集合关联缓存可以得到足够的加固，并且比其偏斜对应物更有可能被实际采用于商业处理器中，因为它们对现有的缓存结构引入的改进更小。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519409/](https://ieeexplore.ieee.org/document/9519409/)
## Bomberman: Defining and Defeating Hardware Ticking Timebombs at Design-time.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#bomberman-defining-and-defeating-hardware-ticking-timebombs-at-design-time) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#bomberman-defining-and-defeating-hardware-ticking-timebombs-at-design-time)**
### 作者
* Timothy Trippel, Computer Science Ȗ Engineering, University of Michigan, Ann Arbor, MI
* Kang G. Shin, Computer Science Ȗ Engineering, University of Michigan, Ann Arbor, MI
* Kevin B. Bush, Cyber-Physical Systems, MIT Lincoln Laboratory, Lexington, MA
* Matthew Hicks, Computer Science, Virginia Tech, Blacksburg, VA
### 摘要
> 为了应对日益复杂的设计，集成电路设计师扩大了设计团队的规模，并且更加依赖第三方知识产权（IP）。这两者都牺牲了信任：耗费计算资源来详尽验证设计是否不受任何恶意修改（即硬件特洛伊木马）的影响是不可行的。更糟糕的是，与软件不同，硬件修改是永久的，没有硬件的“修补”机制；而且硬件特洛伊木马具有强大的能力，它们可用作颠覆位于其上的软件的立足点。为了应对这个威胁，先前的研究使用了静态和动态分析技术来验证硬件设计是否没有特洛伊木马。不幸的是，研究人员继续发现这些“一刀切”的启发式方法的弱点。我们采用了一种分而治之的方式来应对硬件特洛伊木马威胁：定义和消除“定时炸弹”特洛伊木马（TTTs），迫使攻击者实施更大的特洛伊木马设计，从而可以通过现有的验证和侧通道防御措施进行检测。与许多系统级软件防御（如地址空间随机化（ASLR）和数据执行预防（DEP））类似，我们的目标是系统地限制硬件攻击者的设计空间。首先，我们构建了一种从其功能行为中衍生出的TTTs定义。然后，我们将这个定义转化为实现硬件中TTT行为所需的基本组件。利用这些组件，我们将已知的TTTs扩展为共计六个变体，包括未曾见过的变体。借助我们的定义，我们设计并实现了一个专门针对TTTs的动态验证工具扩展，称为Bomber-man。使用四个真实世界的硬件设计，我们演示了Bomberman在检测所有TTT变体方面的能力，而之前的防御措施则失败，并具有<1.2%的误报率。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519417/](https://ieeexplore.ieee.org/document/9519417/)
## Systematic Analysis of Randomization-based Protected Cache Architectures.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#systematic-analysis-of-randomization-based-protected-cache-architectures) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#systematic-analysis-of-randomization-based-protected-cache-architectures)**
### 作者
* Antoon Purnal, Imec-COSIC, KU Leuven
* Lukas Giner, Graz University of Technology
* Daniel Gruss, Graz University of Technology
* Ingrid Verbauwhede, Imec-COSIC, KU Leuven
### 摘要
> 近期的安全缓存设计旨在通过随机化内存地址到缓存集的映射来减轻侧信道攻击。随着供应商对这些缓存的部署进行调查，了解它们的实际安全性至关重要。本文将现有的基于随机化的安全缓存整合为一个通用的缓存模型，然后通过将它们映射到该模型的实例中来全面分析现有设计的安全性，包括CEASER-S和SCATTERCACHE。我们使用一种新颖的PRIME+PRUNE+PROBE技术为随机化缓存定制缓存攻击，并利用突发访问、自举和多步骤分析进行优化。PRIME+PRUNE+PROBE构建了概率可靠的驱逐集合，使先前被认为是计算难以实现的攻击变得可能。我们还模拟了一种端到端攻击，从一个易受攻击的AES实现中泄露秘密。最后，对CEASER-S进行的案例研究揭示了随机化算法中的加密弱点可能导致完全的安全破坏。我们的系统分析为随机化缓存提供了更具现实性和可比性的安全水平。通过量化设计参数如何影响安全性水平，我们的工作为未来在安全缓存设计上的研究提供了重要结论。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519494/](https://ieeexplore.ieee.org/document/9519494/)
## SiRnn: A Math Library for Secure RNN Inference.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sirnn-a-math-library-for-secure-rnn-inference) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sirnn-a-math-library-for-secure-rnn-inference)**
### 作者
* Deevashwer Rathee, Microsoft Research
* Mayank Rathee, Microsoft Research
* Rahul Kranti Kiran Goli, Microsoft Research
* Divya Gupta, Microsoft Research
* Rahul Sharma, Microsoft Research
* Nishanth Chandran, Microsoft Research
* Aseem Rastogi, Microsoft Research
### 摘要
> 复杂的机器学习（ML）推理算法，例如循环神经网络（RNNs），使用数学库中的标准函数，如指数函数、sigmoid函数、双曲正切函数和平方根的倒数。尽管先前研究对卷积神经网络（CNNs）提供了专用协议，以实现安全的两方推理，但现有的安全实现这些数学运算符依赖于通信较多的通用两方计算（2PC）协议。我们提供了一种新的专用2PC协议，用于数学函数，这些协议关键地依赖于查找表和混合位宽，以解决性能开销问题；与先前的工作相比，我们数学函数的协议通信的数据量最多减少了423倍。此外，我们的数学实现是数值精确的，确保了安全实现保留了明文模型的准确性。我们利用我们的新颖协议构建了SiRnn，这是一个用于端到端安全两方DNN推理的库，它提供了首个对时间序列传感器数据进行推理的RNN的安全实现，对语音数据进行推理的RNN的安全实现，以及结合CNNs和RNNs的最先进ML架构，用于识别图像中所有头部的存在。我们的评估显示，与使用现有的最先进2PC框架对这些模型进行推理相比，SiRnn的性能提升达到了三个数量级。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519413/](https://ieeexplore.ieee.org/document/9519413/)
## CryptGPU: Fast Privacy-Preserving Machine Learning on the GPU.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cryptgpu-fast-privacy-preserving-machine-learning-on-the-gpu) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cryptgpu-fast-privacy-preserving-machine-learning-on-the-gpu)**
### 作者
* Sijun Tan, University of Virginia
* Brian Knott, Facebook AI Research
* Yuan Tian, University of Virginia
* David J. Wu, University of Virginia
### 摘要
> 我们介绍了CryptGPU，这是一个在GPU（图形处理单元）上实现所有操作的隐私保护机器学习系统。就像GPU在现代深度学习的成功中起了关键作用一样，它们对于实现可扩展的隐私保护深度学习也是必不可少的。在这项工作中，我们首先介绍了一种新的接口，可以无损地嵌入加密操作到浮点数操作中，这些操作可以由高度优化的CUDA内核进行线性代数运算。然后，我们确定了一系列“GPU友好”的加密协议，以实现在GPU上进行线性和非线性操作的隐私保护评估。我们的微基准测试表明，基于GPU的私有卷积协议比类似的基于CPU的协议快150倍以上；对于像ReLU激活函数这样的非线性操作，我们的基于GPU的协议比其CPU模拟快10倍左右。通过CryptGPU，我们支持对具有6000万参数的卷积神经网络进行私有推断和训练，以及处理像ImageNet这样的大型数据集。与以往的最先进方法相比，我们的协议在大型网络和数据集的私有推断中提高了2倍至8倍。对于私有训练，我们在之前的最先进方法上提高了6倍至36倍。我们的工作不仅展示了完全在GPU上执行安全多方计算（MPC）以实现快速隐私保护机器学习的可行性，还凸显了设计新的MPC基元，以充分利用GPU的计算能力的重要性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519386/](https://ieeexplore.ieee.org/document/9519386/)
## Proof-of-Learning: Definitions and Practice.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#proof-of-learning-definitions-and-practice) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#proof-of-learning-definitions-and-practice)**
### 作者
* Hengrui Jia, University of Toronto and Vector Institute
* Mohammad Yaghini, University of Toronto and Vector Institute
* Christopher A. Choquette-Choo, University of Toronto and Vector Institute
* Natalie Dullerud, University of Toronto and Vector Institute
* Anvith Thudi, University of Toronto and Vector Institute
* Varun Chandrasekaran, University of Wisconsin-Madison
* Nicolas Papernot, University of Toronto and Vector Institute
### 摘要
> 训练机器学习（ML）模型通常涉及昂贵的迭代优化过程。一旦模型的最终参数发布，目前没有机制能够证明这些参数确实是由这个优化过程得出的结果。这样的机制将以多种方式支持ML应用的安全性。例如，当多方争议某个特定模型的所有权时，它将简化所有权解决。它还将促进对不受信任的工作人员进行分布式训练，而拜占庭式工作人员可能通过返回不正确的模型更新来发起拒绝服务攻击。在本文中，我们通过引入ML中的学习证明的概念来解决这个问题。受到工作证明和验证计算研究的启发，我们观察到一个具有里程碑意义的训练算法，即随机梯度下降，由于其随机性而积累秘密信息。这为学习证明提供了一种自然的构造，证明一方已经花费了所需的计算来正确获得一组模型参数。特别是，我们的分析和实验证明，一个试图非法制造学习证明的对手需要完成至少与梯度下降本身所需工作相同的工作量。我们还在上述两种情况下实例化了一个具体的学习证明机制。在模型所有权解决中，它保护公开发布的模型的知识产权。在分布式训练中，它保留了训练过程的可用性。我们的实证评估验证了我们的学习证明机制对硬件（例如ML加速器）和软件堆栈引起的方差具有鲁棒性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519402/](https://ieeexplore.ieee.org/document/9519402/)
## PEGASUS: Bridging Polynomial and Non-polynomial Evaluations in Homomorphic Encryption.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#pegasus-bridging-polynomial-and-non-polynomial-evaluations-in-homomorphic-encryption) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#pegasus-bridging-polynomial-and-non-polynomial-evaluations-in-homomorphic-encryption)**
### 作者
* Wen-jie Lu, Gemini Lab, Alibaba Group
* Zhicong Huang, Gemini Lab, Alibaba Group
* Cheng Hong, Gemini Lab, Alibaba Group
* Yiping Ma, University of Pennsylvania
* Hunter Qu, Gemini Lab, Alibaba Group
### 摘要
> 同态加密（HE）被认为是隐私保护应用中最重要的基本原语之一。然而，对于在加密数据上评估多项式和非多项式函数的高效方法仍然缺乏，这妨碍了HE在现实应用中的部署。为了解决这个问题，我们提出了一个实用的框架PEGASUS。PEGASUS可以在不解密的情况下，在打包的CKKS密文和FHEW密文之间快速切换，使我们能够在CKKS侧高效评估算术函数，并在FHEW密文上评估查找表。我们的FHEW→CKKS转换算法比现有的方法更实用。我们将计算复杂性从线性减小到亚线性。此外，我们的转换密钥的大小显著减小，例如，从80千兆字节减小到12兆字节。我们对PEGASUS进行了广泛的基准测试，包括sigmoid/ReLU/min/max/division、排序和最大池化。为了进一步展示PEGASUS的能力，我们开发了另外两个应用。第一个应用是私密决策树评估，其通信成本比之前基于HE的方法小两个数量级。第二个应用是安全的K均值聚类，能够在几分钟内在数千个加密样本上运行，性能优于现有最佳系统14倍至20倍。据我们所知，这是第一个支持在单个服务器环境中使用HE实现实用K均值聚类的工作。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519408/](https://ieeexplore.ieee.org/document/9519408/)
## Wolverine: Fast, Scalable, and Communication-Efficient Zero-Knowledge Proofs for Boolean and Arithmetic Circuits.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#wolverine-fast-scalable-and-communication-efficient-zero-knowledge-proofs-for-boolean-and-arithmetic-circuits) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#wolverine-fast-scalable-and-communication-efficient-zero-knowledge-proofs-for-boolean-and-arithmetic-circuits)**
### 作者
* Chenkai Weng, Northwestern University
* Kang Yang, State Key Laboratory of Cryptology
* Jonathan Katz, University of Maryland
* Xiao Wang, Northwestern University
### 摘要
> 高效的零知识证明（ZK）对于任意的布尔电路或算术电路近期受到了广泛关注。现有的解决方案要么在证明者的开销方面存在问题（即内存使用较高），要么在通信复杂度方面较高（至少每个门需要κ比特，其中κ是计算安全参数）。在本文中，我们提出了一种新的常数轮互动ZK证明协议，该协议既允许效率高的证明者并且具有渐进最优的内存使用，又比具有类似内存效率的协议有更低的通信复杂度。具体而言：•我们的ZK协议中的证明者具有线性运行时间，并且更重要的是，内存使用与非加密电路评估所需内存成正比关系。这使得我们的证明系统可以轻松扩展到非常大的电路。•对于统计安全参数ρ = 40，在布尔电路中，我们的ZK协议每个门大约通信9比特，而在算术电路中，每个门需要2-4个域元素，域大小可以是很大的。使用5个线程、400MB的内存和200Mbps的网络来评估具有数百亿个门的电路时，我们的实现（ρ = 40，κ = 128）在布尔电路情况下每个门的速率为0.45微秒/门，在一个61位域上的算术电路中每个门的速率为1.6微秒/门。我们还提出了一种改进的具有恶意安全性的子域向量保密线性评估（sVOLE）协议，该协议具有独立的研究价值。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519498/](https://ieeexplore.ieee.org/document/9519498/)
## SoK: Fully Homomorphic Encryption Compilers.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-fully-homomorphic-encryption-compilers) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-fully-homomorphic-encryption-compilers)**
### 作者
* Alexander Viand, ETH Zurich
* Patrick Jattke, ETH Zurich
* Anwar Hithnawi, ETH Zurich
### 摘要
> 全同态加密（Fully Homomorphic Encryption, FHE）允许第三方对加密数据进行任意计算，既不学习输入信息，也不获得计算结果。因此，在不受信任或可能受到威胁的对方进行计算的情况下，它提供了弹性。这一强大的概念最早由Rivest等人在20世纪70年代提出。然而，直到2009年Craig Gentry提出了第一个可行的FHE方案，这一概念才得以实现。云服务大规模收集敏感数据的出现，加上数据泄露灾害的影响，使高度监管的企业越来越需要保密和安全的计算解决方案。相应地，这种需求已经引发了FHE工具开发的最新浪潮。为了了解最新FHE工具开发的现状，我们进行了广泛的调查和实验评估，探索了现有技术的最新动态，并确定了未来发展的方向。在本文中，我们对FHE工具和编译器进行了调查、评估和系统化。我们进行了实验，评估了这些工具在各种应用程序上的性能和可用性。最后，我们为打算开发基于FHE应用程序的开发人员提供了建议，并讨论了FHE工具开发的未来方向。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519484/](https://ieeexplore.ieee.org/document/9519484/)
## CrawlPhish: Large-scale Analysis of Client-side Cloaking Techniques in Phishing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#crawlphish-large-scale-analysis-of-client-side-cloaking-techniques-in-phishing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#crawlphish-large-scale-analysis-of-client-side-cloaking-techniques-in-phishing)**
### 作者
* Penghui Zhang, Arizona State University
* Adam Oest, Arizona State University; PayPal, Inc.
* Haehyun Cho, Arizona State University
* Zhibo Sun, Arizona State University
* RC Johnson, PayPal, Inc.
* Brad Wardman, PayPal, Inc.
* Shaown Sarker, North Carolina State University
* Alexandros Kapravelos, North Carolina State University
* Tiffany Bao, Arizona State University
* Ruoyu Wang, Arizona State University
* Yan Shoshitaishvili, Arizona State University
* Adam Doupé, Arizona State University
* Gail-Joon Ahn, Arizona State University; Samsung Research
### 摘要
> 网络钓鱼对互联网用户构成严重威胁。尽管存在广泛的生态系统来保护用户，但网络钓鱼网站日益复杂，它们可以利用规避技术绕过生态系统的检测系统，并在现实世界中造成实际损害。复杂的客户端规避技术，也称为隐藏，利用JavaScript实现潜在受害者与网络钓鱼网站之间的复杂交互，因此在减缓或完全防止自动减轻措施方面特别有效。然而，关于客户端隐藏的普遍性和影响力尚未进行研究。在本文中，我们提出了CrawlPhish，这是一个自动检测和分类已知网络钓鱼网站使用的客户端隐藏的框架。我们在2018年至2019年期间的14个月内部署了CrawlPhish，收集并对112,005个野外网络钓鱼网站的数据集进行了彻底分析。通过采用最先进的静态和动态代码分析，我们发现其中35,067个网站存在1,128种不同的客户端隐藏技术实现。此外，我们发现攻击者对隐藏的使用从最初的23.32%增长到数据收集期结束时的33.70%。我们的框架对隐藏的检测表现出1.45%的低误报率和1.75%的低漏报率。我们分析了我们检测到的技术的语义，并提出了三个高级类别下的八种规避类型的分类法：用户交互、指纹识别和机器人行为。通过使用150个人工网络钓鱼网站，我们实证地表明每个规避技术类别都能有效避免基于浏览器的钓鱼检测（这是关键的生态系统防御）。此外，通过用户研究，我们验证了这些技术通常不会阻止受害者访问。因此，我们提出了如何利用我们的方法论不仅改善生态系统对具有客户端隐藏的网络钓鱼网站的减轻能力，而且还连续识别攻击者推出的新兴隐藏技术的方法。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519414/](https://ieeexplore.ieee.org/document/9519414/)
## Black Widow: Blackbox Data-driven Web Scanning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#black-widow-blackbox-data-driven-web-scanning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#black-widow-blackbox-data-driven-web-scanning)**
### 作者
* Benjamin Eriksson, Chalmers University of Technology
* Giancarlo Pellegrino, CISPA Helmholtz Center for Information Security
* Andrei Sabelfeld, Chalmers University of Technology
### 摘要
> 现代Web应用是我们数字生活的重要组成部分。随着我们对Web应用的信任增加，安全需求也越来越迫切。与此同时，由于复杂性、动态性和对第三方组件的依赖性，检测Web应用的漏洞变得越来越困难。特别是黑盒漏洞扫描尤为具有挑战性，因为（i）要深入渗透Web应用程序，扫描器需要模拟用户交互和异步浏览行为，并且（ii）要检测非平凡的注入攻击，如存储型跨站脚本（XSS），扫描器需要发现页面间的数据依赖关系。本文阐明了现代Web爬行和扫描面临的关键挑战。基于这些挑战，我们确定了深层爬行和扫描的三个核心支柱：导航建模、遍历和跟踪状态依赖关系。尽管之前的研究主要局限于这些支柱的单独应用，我们提出了一种利用所有三个支柱的方法。我们开发了一个名为Black Widow的黑盒数据驱动的Web爬行和扫描方法。我们通过与其他爬虫相比，在所有应用程序中提高了代码覆盖率，幅度在63%至280%之间，证明了爬行的有效性。此外，我们通过比以前的方法发现更多的跨站脚本漏洞，同时没有任何误报，证明了Web漏洞扫描的有效性。在之前的研究中使用的旧应用程序中，我们发现了其他方法所错过的漏洞。我们还发现了生产软件中的新漏洞，包括HotCRP、osCommerce、PrestaShop和WordPress。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519452/](https://ieeexplore.ieee.org/document/9519452/)
## Fingerprinting the Fingerprinters: Learning to Detect Browser Fingerprinting Behaviors.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#fingerprinting-the-fingerprinters-learning-to-detect-browser-fingerprinting-behaviors) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#fingerprinting-the-fingerprinters-learning-to-detect-browser-fingerprinting-behaviors)**
### 作者
* Umar Iqbal, The University of Iowa
* Steven Englehardt, Mozilla Corporation
* Zubair Shafiq, University of California, Davis
### 摘要
> 浏览器指纹识别是一种侵入性和不透明的无状态跟踪技术。长期以来，浏览器供应商、学术界和标准机构一直在努力提供准确且不会降低用户体验的浏览器指纹识别保护方法。我们提出了基于机器学习的FP-Inspector，这是一种具有句法-语义方法的准确检测浏览器指纹识别的方法。我们展示了FP-Inspector的良好表现，使我们能够检测出比现有技术水平多26%的指纹识别脚本。我们还展示了一个基于FP-Inspector的API级别的指纹识别对策，帮助减少了网站故障的数量。我们使用FP-Inspector对排名前100,000的网站进行了浏览器指纹识别的测量研究。我们发现浏览器指纹识别现在已经出现在超过10%的前100,000个网站和四分之一的前10,000个网站中。我们还发现了以前未报告过的指纹识别脚本使用JavaScript API，并表明它们正在寻求利用API的新的和意外的方式。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519502/](https://ieeexplore.ieee.org/document/9519502/)
## A Security Model and Fully Verified Implementation for the IETF QUIC Record Layer.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-security-model-and-fully-verified-implementation-for-the-ietf-quic-record-layer) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-security-model-and-fully-verified-implementation-for-the-ietf-quic-record-layer)**
### 作者
* Antoine Delignat-Lavaud, Microsoft Research
* Cédric Fournet, Microsoft Research
* Bryan Parno, Carnegie Mellon University
* Jonathan Protzenko, Microsoft Research
* Tahina Ramananandro, Microsoft Research
* Jay Bosamiya, Carnegie Mellon University
* Joseph Lallemand, INRIA Nancy Grand-Est
* Itsaka Rakotonirina, INRIA Nancy Grand-Est
* Yi Zhou, Carnegie Mellon University
### 摘要
> 在之前的协议验证工作的基础上，我们研究了由IETF在30版草案中标准化的QUIC记录层的安全性。相对于Google的原始协议和早期的IETF草案，这个版本有很大的区别。它作为我们验证方法和工具链的一个有用的测试案例，同时也希望引起对一项鲜为人知但至关重要的新兴标准的关注。我们对QUIC数据包和头部加密进行建模，它使用了一种用于保护隐私的自定义结构。为了捕捉其目标，我们提出了一个基于半隐式nonce的认证加密的安全定义。我们展示了QUIC使用了一个由标准AEAD安全方案和PRF安全密码构成的通用结构的实例。我们在F中形式化验证了这个结构的安全性。该证明揭示了nonce保密性的有趣限制，这是由于短头部的可塑性和可以选择包计数器中包含的最低有效位数。我们提出了简化证明并增加针对强攻击者模型的鲁棒性的改进。除了验证的安全模型外，我们还为记录层提供了一个具体的功能规范，并证明在修复了草案中的更多错误后，它满足重要的功能属性（如正确解密加密数据包）。然后，我们提供了一个高性能的记录层实现，我们证明它在内存安全方面是正确的，并且与我们的具体规范相一致（继承了其功能正确性属性），并且在我们验证的模型下是安全的。为了评估这个组件，我们开发了QUIC协议的经过验证的安全实现。我们的记录层实现的吞吐量接近2 GB/s，而我们的QUIC实现的性能与未经验证的基线相比差异在21%以内。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519466/](https://ieeexplore.ieee.org/document/9519466/)
## Cross Layer Attacks and How to Use Them (for DNS Cache Poisoning, Device Tracking and More).
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cross-layer-attacks-and-how-to-use-them-for-dns-cache-poisoning-device-tracking-and-more) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#cross-layer-attacks-and-how-to-use-them-for-dns-cache-poisoning-device-tracking-and-more)**
### 作者
* Amit Klein, Bar-Ilan University, Israel
### 摘要
> 我们分析了在Linux内核（也是Android的内核）中使用的伪随机数生成器（PRNG），并证明了这个PRNG是脆弱的。prandom PRNG被许多Linux内核中的“使用者”所使用。我们专注于网络层的三个使用者 - UDP源端口生成算法，IPv6流标签生成算法和IPv4 ID生成算法。有缺陷的prandom PRNG被所有这些使用者共享，这使得我们能够对Linux内核进行“跨层攻击”。在这些攻击中，我们可以从一个OSI层中推断出prandom PRNG的内部状态，并将其用于预测其他OSI层中使用的PRNG的值，或将其与从其他协议中推断出的PRNG的内部状态进行关联。使用这种方法，我们可以对Linux进行非常高效的DNS缓存污染攻击。我们收集TCP / IPv6流标签值，或UDP源端口值，或TCP / IPv4 IP ID值，重构内部PRNG状态，然后预测出站DNS查询UDP源端口，从而将攻击加速了3000倍至6000倍。这种攻击可以远程进行，但也可以在Linux用户和容器之间进行本地攻击，并且（根据存根解析器）可以使用任意DNS记录来污染缓存。此外，我们还可以识别和跟踪Linux和Android设备 - 我们收集TCP / IPv6流标签值和/或UDP源端口值和/或TCP / IPv4 ID字段，重构PRNG的内部状态，并将此新状态与先前提取的PRNG状态进行关联以识别同一设备。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519455/](https://ieeexplore.ieee.org/document/9519455/)
## Bookworm Game: Automatic Discovery of LTE Vulnerabilities Through Documentation Analysis.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#bookworm-game-automatic-discovery-of-lte-vulnerabilities-through-documentation-analysis) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#bookworm-game-automatic-discovery-of-lte-vulnerabilities-through-documentation-analysis)**
### 作者
* Yi Chen, Indiana University, Bloomington
* Yepeng Yao, CAS-KLONAT Key Laboratory of Network Assessment Technology, CAS, BKLONSPT Beijing Key Laboratory of Network Security and Protection Technology, SKLOIS State Key Laboratory of Information Security, IIE, CAS, Institute of Information Engineering, CAS; School of Cyber Security, University of Chinese Academy of Sciences
* XiaoFeng Wang, Indiana University, Bloomington
* Dandan Xu, CAS-KLONAT Key Laboratory of Network Assessment Technology, CAS, BKLONSPT Beijing Key Laboratory of Network Security and Protection Technology, SKLOIS State Key Laboratory of Information Security, IIE, CAS, Institute of Information Engineering, CAS; School of Cyber Security, University of Chinese Academy of Sciences
* Chang Yue, CAS-KLONAT Key Laboratory of Network Assessment Technology, CAS, BKLONSPT Beijing Key Laboratory of Network Security and Protection Technology, SKLOIS State Key Laboratory of Information Security, IIE, CAS, Institute of Information Engineering, CAS; School of Cyber Security, University of Chinese Academy of Sciences
* Xiaozhong Liu, Indiana University, Bloomington
* Kai Chen, CAS-KLONAT Key Laboratory of Network Assessment Technology, CAS, BKLONSPT Beijing Key Laboratory of Network Security and Protection Technology, SKLOIS State Key Laboratory of Information Security, IIE, CAS, Institute of Information Engineering, CAS; School of Cyber Security, University of Chinese Academy of Sciences
* Haixu Tang, Indiana University, Bloomington
* Baoxu Liu, CAS-KLONAT Key Laboratory of Network Assessment Technology, CAS, BKLONSPT Beijing Key Laboratory of Network Security and Protection Technology, SKLOIS State Key Laboratory of Information Security, IIE, CAS, Institute of Information Engineering, CAS; School of Cyber Security, University of Chinese Academy of Sciences
### 摘要
> 在过去的十年中，移动网络的安全性受到越来越多的关注，导致发现了许多漏洞，使网络及其用户面临各种安全风险，从服务拒绝到信息泄漏等。然而，大多数这些发现都是通过临时的手动分析进行的，这对于根本上提高一个像移动网络这样复杂系统的安全保证是不足够的。一个重要的观察是，移动网络的大量技术文档可以提供关键见解，了解其所采取的保护措施，并帮助识别潜在的安全缺陷。特别是，我们发现这些文档通常包含危险指标（HIs）-描述在某个状态下某个事件发生时，进行风险操作（例如中止正在进行的过程），这些指标可以指导系统上的测试，以确定未经授权的第三方是否可以触发此操作，以使移动核心或合法用户设备遭受损害。基于这个观察，我们在本文中提出了一个新的框架，迈出了智能和系统化移动网络安全分析的第一步。我们的方法名为Atomic，利用自然语言处理和机器学习技术，扫描大量LTE文档以寻找HIs。然后进一步解析和分析发现的HIs，以恢复状态和事件信息，用于生成测试用例。这些测试用例进一步用于在LTE模拟环境中自动构建测试，运行这些测试以检测LTE中的漏洞，这些漏洞允许风险操作在没有适当保护的情况下发生。在我们的研究中，我们实现了Atomic并在LTE NAS规范上运行，包括549页，有13,598个句子和283,850个单词。在不到5小时的时间内，我们的原型报告了来自192个HIs发现的42个漏洞，其中包括10个以前从未报告过的漏洞，涉及两个威胁模型。所有这些漏洞都经过端到端攻击的确认，导致合法用户设备接收到未经授权的LTE服务中断。我们将我们的发现报告给了授权方，并获得了他们的确认，这些漏洞确实存在于主要商业运营商中，并从谷歌获得了2000美元的奖励。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519388/](https://ieeexplore.ieee.org/document/9519388/)
## SGUARD: Towards Fixing Vulnerable Smart Contracts Automatically.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sguard-towards-fixing-vulnerable-smart-contracts-automatically) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sguard-towards-fixing-vulnerable-smart-contracts-automatically)**
### 作者
* Tai D. Nguyen, Singapore Management University, Singapore
* Long H. Pham, Singapore Management University, Singapore
* Jun Sun, Singapore Management University, Singapore
### 摘要
> 智能合约是分布式的、自我执行的程序，运行在区块链网络之上。它们有潜力彻底改变金融机构和供应链等许多行业。然而，智能合约容易受到基于代码的漏洞的影响，这对其应用造成了影响。由于区块链的不可变性，智能合约无法进行补丁修复，因此确保智能合约没有漏洞是非常重要的。不幸的是，诸如Solidity之类的智能合约语言是图灵完备的，这意味着静态验证是不可行的。因此，必须开发出替代方法来提供这种保证。在这项工作中，我们开发了一种方法，自动转换智能合约，以确保其不受四种常见漏洞的影响。关键思想是以高效且可验证的方式应用运行时验证。通过对5000个智能合约进行实验，结果显示我们的方法在时间上只产生微小的额外开销（即14.79%），并且气体成本也只有0.79%。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519444/](https://ieeexplore.ieee.org/document/9519444/)
## MAD-HTLC: Because HTLC is Crazy-Cheap to Attack.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#mad-htlc-because-htlc-is-crazy-cheap-to-attack) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#mad-htlc-because-htlc-is-crazy-cheap-to-attack)**
### 作者
* Itay Tsabary, Technion, IC3
* Matan Yechieli, Technion, IC3
* Alex Manuskin, ZenGo-X
* Ittay Eyal, Technion, IC3
### 摘要
> 智能合约和交易允许用户在比特币和以太坊等加密货币区块链上实现复杂的构造。其中许多构造，包括操作性支付通道和原子交换，使用了一种称为哈希时间锁定合约（Hashed Time-Locked Contract，HTLC）的基本构件。在本研究中，我们从HTLC中提取了一份规范（HTLC-Spec），并提出了一种名为相互确保毁灭的哈希时间锁定合约（MAD-HTLC）的实现。MAD-HTLC采用了一种新颖的方法，利用现有的区块链操作者（矿工）作为设计的一部分。如果用户行为不端，MAD-HTLC激励矿工没收其所有资金。我们使用UC框架和博弈论分析证明了MAD-HTLC的安全性。我们通过在比特币和以太坊的操作性区块链上实例化MAD-HTLC来展示其有效性并分析其开销。值得注意的是，目前的矿工软件仅在优化收入方面投入了少量的努力，因为优势相对较小。然而，随着需求增长和其他收入组成部分的减少，矿工有更多动力来完全优化资金收入。通过修补标准的比特币客户端，我们展示了这种优化很容易实现，使矿工成为了MAD-HTLC的自然执法者。最后，我们扩展了关于HTLC易受贿攻击的先前结果。攻击者可以通过提供高额的交易费用来激励矿工优先选择她的交易。我们通过修补比特币客户端演示了这种攻击可以很容易地实现，并使用博弈论工具在理性矿工存在的情况下定性地收紧了这类贿赂攻击的已知成本上限。我们发现在比特币和以太坊主网络上存在许多贿赂机会，几美元的贿赂可能带来数万美元的回报（例如，为超过25,000美元提供2美元的贿赂）。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519476/](https://ieeexplore.ieee.org/document/9519476/)
## Compositional Security for Reentrant Applications.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#compositional-security-for-reentrant-applications) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#compositional-security-for-reentrant-applications)**
### 作者
* Ethan Cecchetti, Cornell University
* Siqiu Yao, Cornell University
* Haobin Ni, Cornell University
* Andrew C. Myers, Cornell University
### 摘要
> 智能合约中的灾难性漏洞尖锐地提醒我们，我们对如何编写与恶意代码安全组合的代码一无所知。信息流控制长期被提出作为实现组合安全性的一种方式，在不同信任域中合并软件时能提供强有力的保证。不幸的是，在存在重入攻击的情况下，这个吸引人的故事会崩溃。我们将重新进入性的概念进行了正式定义，并引入了一个安全条件，允许智能合约等软件模块保护其关键不变量，同时保留安全重入的表达能力。我们提出了一个安全类型系统，可以证明强制执行安全信息流；结合运行时机制，即使存在未知代码，它也可以强制执行安全重入；并有助于定位和纠正最近的高调漏洞。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519436/](https://ieeexplore.ieee.org/document/9519436/)
## HackEd: A Pedagogical Analysis of Online Vulnerability Discovery Exercises.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#hacked-a-pedagogical-analysis-of-online-vulnerability-discovery-exercises) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#hacked-a-pedagogical-analysis-of-online-vulnerability-discovery-exercises)**
### 作者
* Daniel Votipka, Tufts University
* Eric Zhang, University of Maryland
* Michelle L. Mazurek, University of Maryland
### 摘要
> 黑客攻击练习是安全教育中常用的工具，但对它们如何教授安全概念以及是否遵循教育最佳实践的研究有限。本文列举了31个受欢迎的在线黑客攻击练习的教育实践。具体来说，我们从学习科学和教育文献中推导出一组适用于黑客攻击练习的教育维度，并审查每个练习是否以及如何实施每个教育维度。此外，我们还采访了15个练习的组织者，以了解在选择是否以及如何实施每个维度时可能会出现的挑战和权衡。我们发现黑客攻击练习通常根据学生以往的安全经验进行调整，并通过限制无关负荷和建立有帮助的在线社区来支持学习。相反，很少有练习明确提供总体概念结构或直接支持元认知，帮助学生将学到的知识转移到新的情境中。即时和个性化的反馈以及安全开发实践也不常见。此外，我们观察到在提供逼真挑战和给学生增加无关认知负荷之间存在权衡，该轴线上的任何一点都存在利弊。根据我们的结果，我们提出了对练习改进和未来工作支持组织者的建议。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519464/](https://ieeexplore.ieee.org/document/9519464/)
## DifuzzRTL: Differential Fuzz Testing to Find CPU Bugs.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#difuzzrtl-differential-fuzz-testing-to-find-cpu-bugs) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#difuzzrtl-differential-fuzz-testing-to-find-cpu-bugs)**
### 作者
* Jaewon Hur, Department of Electrical and Computer Engineering, Seoul National University
* Suhwan Song, Department of Electrical and Computer Engineering, Seoul National University
* Dongup Kwon, Department of Electrical and Computer Engineering, Seoul National University
* Eunjin Baek, Department of Electrical and Computer Engineering, Seoul National University
* Jangwoo Kim, Department of Electrical and Computer Engineering, Seoul National University
* Byoungyoung Lee, Department of Electrical and Computer Engineering, Seoul National University
### 摘要
> CPU中的安全漏洞对于与计算相关的硬件和软件组件具有重大安全影响，因为它是计算的核心。尽管架构和安全社区已经探索了大量的静态或动态分析技术来自动识别这些漏洞，但由于CPU RTL设计的复杂性，该问题仍然未解决且具有挑战性。本文提出了DIFUZZRTL，一种RTL模糊测试工具，可自动发现CPU RTL中的未知漏洞。DIFUZZRTL开发了一种寄存器覆盖引导模糊测试技术，能够高效而正确地识别RTL设计中的状态转换。DIFUZZRTL还根据独特的RTL设计特点开发了几种新技术，包括循环敏感的寄存器覆盖引导、异步中断事件处理、具有Tilelink协议的统一CPU输入格式以及可替换设计以支持各种CPU RTL。我们实现了DIFUZZRTL，并使用三个真实世界的开源CPU RTL进行了评估: OpenRISC Mor1kx Cappuccino、RISC-V Rocket Core和RISC-V Boom Core。在评估过程中，DIFUZZRTL从这些CPU RTL中发现了16个新漏洞，所有漏洞均得到了相应的开发社区和厂商的确认。其中有6个被分配了CVE编号，并且据我们所知，我们报告了RISC-V核心的第一个和唯一的CVE，证明其对安全社区具有强大的实际影响力。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519470/](https://ieeexplore.ieee.org/document/9519470/)
## When LoRa Meets EMR: Electromagnetic Covert Channels Can Be Super Resilient.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#when-lora-meets-emr-electromagnetic-covert-channels-can-be-super-resilient) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#when-lora-meets-emr-electromagnetic-covert-channels-can-be-super-resilient)**
### 作者
* Cheng Shen, Peking University
* Tian Liu, Peking University
* Jun Huang, Massachusetts Institute of Technology
* Rui Tan, Nanyang Technological University
### 摘要
> 由于电磁辐射（EMR）功率低，EM转换通道被广泛认为是一种短程攻击，可以通过屏蔽轻松地进行缓解。本文通过展示从典型笔记本电脑、台式计算机和服务器泄露的隐蔽EM信号如何从数百米外解码，或穿透曾经被认为足以确保发射安全的攻击性屏蔽来推翻了这种普遍观念。我们通过设计EMLoRa，一种利用内存作为类似LoRa无线电的超强韧性EM隐蔽通道来实现这一目标。EMLoRa代表了利用最先进的扩频技术设计EM隐蔽通道的首次尝试。它解决了一系列独特的挑战，如处理EMR的复杂谱特性，容忍由CPU争用引起的信号失真，并防止对手检测器解调隐蔽信号。实验结果表明，在与以前的EM隐蔽通道相比的相同比特率下，EMLoRa将通信范围提升了20倍，并将衰减韧性提高了最多53 dB。通过达到这个目标，EMLoRa允许攻击者绕过安全范围，突破法拉第笼，并仅使用少量廉价传感器在广阔区域内定位隔空设备。为了对抗EMLoRa，我们进一步探索了使用基于能量和CNN的检测器揭示EMLoRa信号的可行性。实验显示，这两种检测器的范围有限，使EMLoRa获得了显著的范围优势。我们的结果呼吁进一步研究对抗基于扩频技术的EM隐蔽通道的对策。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519447/](https://ieeexplore.ieee.org/document/9519447/)
## Linking Bluetooth LE & Classic and Implications for Privacy-Preserving Bluetooth-Based Protocols.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#linking-bluetooth-le-classic-and-implications-for-privacy-preserving-bluetooth-based-protocols) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#linking-bluetooth-le-classic-and-implications-for-privacy-preserving-bluetooth-based-protocols)**
### 作者
* Norbert Ludant, Northeastern University, Boston, USA
* Tien D. Vo-Huu, Northeastern University, Boston, USA
* Sashank Narain, University of Massachusetts Lowell, Lowell, USA
* Guevara Noubir, Northeastern University, Boston, USA
### 摘要
> 蓝牙低功耗广告越来越多地用于近距离隐私保护协议。我们研究了蓝牙低功耗广告中的信息泄漏问题。我们的分析揭示，当今蓝牙芯片的设计使得能够将蓝牙低功耗广告与蓝牙经典（BTC）帧以及全球唯一标识符（BDADDR）相关联。我们证明通过蓝牙低功耗广告推断出BDADDR的可靠性达到90%以上，适用于各种应用、移动设备、设备密度以及距离受害者数十米之遥。我们讨论了当前芯片集成脆弱性对隐私保护协议的影响。例如，这种攻击可以揭示感染接触追踪应用程序的设备的BDADDR。我们还讨论了这种脆弱性如何导致受害者非匿名化。此外，目前的移动设备不允许独立禁用蓝牙经典而保持蓝牙低功耗，这使得简单的对策变得不切实际。我们为Android操作系统和蓝牙协议栈开发了几种缓解措施，并证明了它们的有效性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519441/](https://ieeexplore.ieee.org/document/9519441/)
## Method Confusion Attack on Bluetooth Pairing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#method-confusion-attack-on-bluetooth-pairing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#method-confusion-attack-on-bluetooth-pairing)**
### 作者
* Maximilian von Tschirschnitz, Technical University of Munich
* Ludwig Peuckert, Technical University of Munich
* Fabian Franzen, Technical University of Munich
* Jens Grossklags, Technical University of Munich
### 摘要
> 蓝牙提供了对其连接的加密、身份验证和完整性保护。这些保护机制要求蓝牙设备通过一种称为配对的过程在初次使用时建立信任。在整个过程中，支持多种备选的配对方法。本文描述了蓝牙配对机制中的一个设计缺陷。该缺陷允许两个设备使用不同的方法进行配对。虽然设备之间成功交互，但它们对方法混淆并不知情。我们解释了攻击者如何利用这种方法混淆来发动方法混淆攻击。与针对配对方法的其他攻击不同，我们的攻击即使在蓝牙的最高安全模式下也适用，并且无法在协议中进行缓解。通过方法混淆攻击，敌对方可以渗透到受害者之间的安全连接并截获所有流量。我们的攻击在实际相关场景中是成功的。我们将其实现为蓝牙低功耗的端对端概念验证，并在市售智能手机、智能手表和银行设备上进行了测试。此外，我们进行了一项用户研究，其中40名参与者中没有一个注意到正在进行的攻击，而37名用户（92.5%）完成了配对过程。最后，我们提出了对蓝牙规范的更改，使其免受我们的攻击。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519477/](https://ieeexplore.ieee.org/document/9519477/)
## CanDID: Can-Do Decentralized Identity with Legacy Compatibility, Sybil-Resistance, and Accountability.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#candid-can-do-decentralized-identity-with-legacy-compatibility-sybil-resistance-and-accountability) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#candid-can-do-decentralized-identity-with-legacy-compatibility-sybil-resistance-and-accountability)**
### 作者
* Deepak Maram, Cornell Tech; IC3, The Initiative for CryptoCurrencies & Contracts
* Harjasleen Malvai, Cornell University; IC3, The Initiative for CryptoCurrencies & Contracts
* Fan Zhang, Cornell Tech; IC3, The Initiative for CryptoCurrencies & Contracts
* Nerla Jean-Louis, UIUC; IC3, The Initiative for CryptoCurrencies & Contracts
* Alexander Frolov, Cornell University; IC3, The Initiative for CryptoCurrencies & Contracts
* Tyler Kell, Cornell Tech; IC3, The Initiative for CryptoCurrencies & Contracts
* Tyrone Lobban, J. P. Morgan
* Christine Moy, J. P. Morgan
* Ari Juels, Cornell Tech; IC3, The Initiative for CryptoCurrencies & Contracts
* Andrew Miller, UIUC; IC3, The Initiative for CryptoCurrencies & Contracts
### 摘要
> 我们介绍了CanDID，一个可实施、用户友好的去中心化身份实现平台，旨在赋予用户对其凭证的管理控制权。尽管去中心化身份承诺给予用户更大的对私人数据的控制能力，但这同时也给用户带来了私钥的管理负担，从而产生了私钥遗失的重大风险。现有和拟议的方法也假设凭证发放生态系统能够自动提供，从而产生了一个自给自足的问题。它们还忽略了关键功能，比如抵御伪造者攻击和检测行为不端或被制裁用户的能力，同时保护用户隐私。CanDID通过以用户友好的方式颁发凭证，安全地、私密地利用现有的、未经修改的网络服务提供商的数据来解决这些挑战。这种遗留兼容性同样使得CanDID用户可以利用他们现有的在线账户恢复丢失的密钥。通过使用一个去中心化的节点委员会，CanDID为用户的密钥、真实身份和数据提供了强大的机密性，同时防止用户生成多个身份，并允许识别（和列入黑名单）被制裁的用户。我们提出了CanDID的架构，并报告了展示其实际性能的实验结果。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519473/](https://ieeexplore.ieee.org/document/9519473/)
## They Would do Better if They Worked Together: The Case of Interaction Problems Between Password Managers and Websites.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#they-would-do-better-if-they-worked-together-the-case-of-interaction-problems-between-password-managers-and-websites) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#they-would-do-better-if-they-worked-together-the-case-of-interaction-problems-between-password-managers-and-websites)**
### 作者
* Nicolas Huaman, CISPA Helmholtz Center for Information Security; Leibniz University Hannover
* Sabrina Amft, Leibniz University Hannover
* Marten Oltrogge, CISPA Helmholtz Center for Information Security
* Yasemin Acar, Max Planck Institute for Security and Privacy; Leibniz University Hannover
* Sascha Fahl, CISPA Helmholtz Center for Information Security; Leibniz University Hannover
### 摘要
> 密码管理器是一种工具，用于支持用户安全生成和存储在线账户中使用的凭据和登录信息。以往的研究表明，构建密码管理器意味着面临各种安全性和可用性挑战。为了实现强大的安全性和良好的可用性，密码管理器与网站之间的交互需要流畅和轻松。然而，对于一些网站，用户对流行密码管理器的评论表明存在交互问题。因此，据我们所知，本研究是首次系统地识别这些交互问题，并调查了包括最受欢迎的十个密码管理器在内的15个桌面密码管理器受到的影响。我们采用定性分析方法，从2,947个用户评论和30个密码管理器的372个GitHub问题中识别出39个交互问题。接下来，我们为发现的所有交互问题实施了最小工作示例（MWE），并对所有密码管理器进行了585个测试案例的评估。我们的研究结果表明，a) 密码管理器在正确实现HTTP基本身份验证和自动填充属性等现代标准的身份验证功能方面存在困难；b) 网站在实现干净和良好结构的身份验证表单方面存在问题。我们得出结论，一些发现可以通过密码管理器提供商或Web开发者遵循现有的标准、建议和最佳实践来解决，而其他情况目前几乎不可能实现安全，并需要进一步研究。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519389/](https://ieeexplore.ieee.org/document/9519389/)
## Improving Password Guessing via Representation Learning.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#improving-password-guessing-via-representation-learning) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#improving-password-guessing-via-representation-learning)**
### 作者
* Dario Pasquini, Stevens Institute of Technology; Sapienza University of Rome; Institute of Applied Computing CNR
* Ankit Gangwal, Stevens Institute of Technology; University of Padua
* Giuseppe Ateniese, Stevens Institute of Technology
* Massimo Bernaschi, Institute of Applied Computing CNR
* Mauro Conti, University of Padua
### 摘要
> 从非结构化数据中学习有用的表示是当今数据驱动方法的核心挑战之一，也是推动力之一。深度学习已经展示了学习和利用这些表示的广泛优势。在这篇论文中，我们引入了一种深度生成模型表示学习方法来进行密码猜测。我们展示了抽象密码表示自然地具有引人注目和多功能的特性，为广泛研究且目前仍然活跃的密码猜测领域开辟了新的方向。这些特性可以建立起新颖的密码生成技术，这些技术在现有的概率性和非概率性方法中既不可行也不实际。基于这些特性，我们引入了：（1）一个一般的条件密码猜测框架，可以生成具有任意偏差的密码；以及（2）一种期望最大化启发式框架，可以动态地调整估计的密码分布以匹配攻击密码集的分布。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519399/](https://ieeexplore.ieee.org/document/9519399/)
## ARBITRAR: User-Guided API Misuse Detection.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#arbitrar-user-guided-api-misuse-detection) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#arbitrar-user-guided-api-misuse-detection)**
### 作者
* Ziyang Li, University of Pennsylvania
* Aravind Machiry, Purdue University
* Binghong Chen, Georgia Institute of Technology
* Mayur Naik, University of Pennsylvania
* Ke Wang, Visa Research
* Le Song, Georgia Institute of Technology
### 摘要
> 软件API表现出丰富的多样性和复杂性，不仅使它们成为程序错误的常见来源，还阻碍了程序分析工具对其进行检查。这类工具要么需要精确的API规范，需要程序分析专业知识，要么假设正确的API使用遵循可以从代码中自动挖掘的简单习惯用法，但这样会导致准确度不高的问题。我们提出了一种新方法，允许普通程序员找到API误用。我们的方法与用户进行交互，对每个目标API方法的有效和无效使用进行分类。它通过使用主动学习算法对API使用进行排名，从而最大程度地减轻用户的负担。我们在名为ARBITRAR的C/C++程序工具中实现了我们的方法，并将其应用于检查21个大型真实世界程序中18个API方法的使用情况，包括OpenSSL和Linux内核。平均每个API方法只需3轮用户交互，ARBITRAR就发现了40个新错误，并为其中的18个错误接受了修补程序。此外，ARBITRAR还以仅为51.5%的虚警率，找出了包含92个错误的基准套件中由最先进的工具APISAN报告的所有已知错误，而该工具的虚警率为87.9%。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519443/](https://ieeexplore.ieee.org/document/9519443/)
## Compositional Non-Interference for Fine-Grained Concurrent Programs.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#compositional-non-interference-for-fine-grained-concurrent-programs) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#compositional-non-interference-for-fine-grained-concurrent-programs)**
### 作者
* Dan Frumin, Radboud University
* Robbert Krebbers, Delft University of Technology
* Lars Birkedal, Aarhus University
### 摘要
> 非干扰是一个确保信息泄漏不存在的程序属性。在编程语言的背景下，确立非干扰性存在两种常见的方法：类型系统和程序逻辑。类型系统通过类型检查提供强大的自动化能力，但在它们支持的程序类型上具有固有的限制性。程序逻辑支持具有挑战性的程序，但通常需要显著的人工辅助，并且无法处理模块或高阶程序。为了连接这两种方法，我们提出了SeLoC——一种用于非干扰性的分离逻辑，我们在其之上构建了一种使用逻辑关系技术的类型系统。通过在分离逻辑上构建类型系统，我们可以组合验证包含有类型和无类型部分的程序。前者通过类型检查进行验证，而后者通过手动证明进行验证。SeLoC的核心技术贡献是一种能够使用分离逻辑资源跟踪信息流的最弱前置条件的关系形式。SeLoC是完全机器检查的，并基于Coq中的并发分离逻辑框架Iris构建而成。与Iris的集成为精细粒度并发提供了无缝支持，这是之前的类型系统和程序逻辑无法达到的。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519454/](https://ieeexplore.ieee.org/document/9519454/)
## SoK: Security and Privacy in the Age of Commercial Drones.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-security-and-privacy-in-the-age-of-commercial-drones) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#sok-security-and-privacy-in-the-age-of-commercial-drones)**
### 作者
* Ben Nassi, Software and Information Systems Engineering, Ben-Gurion University of the Negev
* Ron Bitton, Software and Information Systems Engineering, Ben-Gurion University of the Negev
* Ryusuke Masuoka, Fujitsu System Integration Laboratories
* Asaf Shabtai, Software and Information Systems Engineering, Ben-Gurion University of the Negev
* Yuval Elovici, Software and Information Systems Engineering, Ben-Gurion University of the Negev
### 摘要
> 随着无人机数量的增加和它们开始填充天空的时代的临近，一个重要的问题亟待回答：从安全与隐私的角度来看，社会和无人机是否真正准备好应对大规模飞行带来的挑战？本文研究商用无人机时代的安全与隐私问题。首先，我们关注研究问题：无人机及其生态系统是否能够防范恶意实体的攻击？我们列举了无人机的目标，提出攻击和对策方法的评估方法，进行了全面的审查，分析科学上的差距，得出结论，并讨论未来的研究方向。然后，我们关注研究问题：社会是否受到使用无人机进行攻击的保护？我们列举了社会中的目标，对对手进行了概述，审查了威胁，提出了评估对策方法的方法，进行了全面的审查，分析科学上的差距，得出结论，并讨论未来的研究方向。最后，我们关注主要的研究问题：从安全与隐私的角度来看，社会和无人机是否准备好推进它们的关系？我们的分析表明，保护无人机和社会免受彼此伤害所需的技术手段尚未开发出来，并且在无人机的安全与隐私以及社会的安全与隐私之间存在权衡。也就是说，无人机和社会的安全和隐私水平无法同时优化，因为无法在降低社会的安全与隐私水平的同时优化无人机的安全与隐私水平，反之亦然。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519393/](https://ieeexplore.ieee.org/document/9519393/)
## A First Look at Zoombombing.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-first-look-at-zoombombing) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-first-look-at-zoombombing)**
### 作者
* Chen Ling, Boston University
* Utkucan Balcı, Binghamton University
* Jeremy Blackburn, Binghamton University
* Gianluca Stringhini, Boston University
### 摘要
> 在线会议工具如Zoom和Google Meet已经成为我们职业、教育和个人生活的核心。这也为大规模骚扰带来了新的机会。特别是，一种被称为zoombombing的现象出现了，攻击者加入在线会议，目的是打乱会议并骚扰参与者。在本文中，我们进行了第一次基于数据的分析，研究了社交媒体上关于zoombombing攻击的呼吁。我们确定了十种流行的在线会议工具，并从主流社交网络Twitter和组织对在线用户进行协调攻击的边缘社区4chan中提取包含会议邀请的帖子。然后我们对这些帖子进行手动标注，以识别呼吁进行zoombombing攻击的帖子，并应用主题分析以制定一个代码簿，以更好地描述与zoombombing攻击呼吁相关的讨论。在2020年的前七个月，我们在Twitter和4chan之间发现了200多次zoombombing攻击的呼吁，并对这些呼吁进行定量和定性分析。我们的研究结果表明，绝大多数zoombombing攻击的呼吁并不是由偶然发现会议邀请或通过穷举会议ID的攻击者发出的，而是由内部人员发出的，这些内部人员合法访问这些会议，尤其是高中和大学课堂上的学生。这对安全性有重要影响，因为它使得常见的zoombombing防护措施（如密码保护）失效。我们还发现内部人员指示攻击者采用课堂上合法参与者的名字以避免被检测，使得设置等待室和审核参与者等对策变得不太有效。基于这些观察，我们认为针对zoombombing的唯一有效防御是为每个参与者创建独特的加入链接。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519457/](https://ieeexplore.ieee.org/document/9519457/)
## Revealer: Detecting and Exploiting Regular Expression Denial-of-Service Vulnerabilities.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#revealer-detecting-and-exploiting-regular-expression-denial-of-service-vulnerabilities) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#revealer-detecting-and-exploiting-regular-expression-denial-of-service-vulnerabilities)**
### 作者
* Yinxi Liu, Chinese University of Hong Kong
* Mingxue Zhang, Chinese University of Hong Kong
* Wei Meng, Chinese University of Hong Kong
### 摘要
> 正则表达式拒绝服务（ReDoS）是一类算法复杂性攻击。攻击者可以构造特定的字符串以触发一些容易受到常见编程语言支持的扩展特性的正则表达式（regex）的最坏情况超线性匹配时间。ReDoS攻击可以严重降低网络应用程序的性能，这些应用程序在其服务器端逻辑中广泛使用正则表达式。然而，具有扩展特性的易受攻击的正则表达式的特征仍然鲜为人知，这使得难以缓解甚至检测到此类漏洞。在本文中，我们旨在建立由流行的正则表达式引擎生成的易受攻击的正则表达式模式，并相应地构造攻击字符串。我们的特征建模完全支持对任何扩展特性正则表达式的分析。我们开发了Revealer来检测给定正则表达式中显示的易受攻击结构，并生成可以利用相应漏洞的攻击字符串。Revealer采用混合方法。它首先静态定位正则表达式的潜在易受攻击结构，然后动态验证漏洞是否可以触发，最后生成可以导致递归回溯的攻击字符串。通过结合静态分析和动态分析，Revealer能够在有限的时间内准确高效地生成利用。它还可以根据其识别出的结构信息提供缓解建议。我们为Java实现了Revealer的原型。我们在一个包含29,088个正则表达式的数据集上评估了Revealer，并与三个最先进的工具进行了比较。评估结果显示，Revealer在性能上远远优于所有现有工具- Revealer可以检测到任何其他工具可以检测到的237个漏洞，找到213个新漏洞，并击败最好的工具140.64%。我们进一步证明了Revealer成功地检测到了流行的真实世界应用程序中的45个易受攻击的正则表达式。我们的评估证明Revealer在检测和利用ReDoS漏洞方面既有效又高效。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519406/](https://ieeexplore.ieee.org/document/9519406/)
## Breaking the Specification: PDF Certification.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#breaking-the-specification-pdf-certification) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#breaking-the-specification-pdf-certification)**
### 作者
* Simon Rohlmann, Ruhr University Bochum
* Vladislav Mladenov, Ruhr University Bochum
* Christian Mainka, Ruhr University Bochum
* Jörg Schwenk, Ruhr University Bochum
### 摘要
> 便携式文件格式（PDF）是文件交换的事实标准。PDF规范定义了两种不同类型的数字签名，以保证文档的真实性和完整性：批准签名和认证签名。批准签名证明PDF文档的特定状态。它们的安全性已经在CCS'19进行了调查。认证签名更强大和灵活。它们涵盖了更复杂的工作流程，例如多方签署合同。为了实现这个目标，用户可以对签署的文档进行特定的更改，而不会使签名无效。本文首次对PDF中的认证签名进行了全面的安全评估。我们描述了两种新型攻击类型 - 恶意注释和隐蔽签名攻击，它们滥用了当前PDF规范中的缺陷。这两种攻击类型都允许攻击者在不引起任何警告的情况下显着改变经认证的文档的可见内容。我们的实际评估显示，使用恶意注释攻击可以在26个查看器应用程序中的15个应用程序中更改可见内容，并且使用PDF规范合规的漏洞可以在8个应用程序中使用隐蔽签名攻击。我们通过应用程序的实现问题改进了这两种攻击的隐蔽性，并且只有两个应用程序对所有攻击都安全。此外，我们展示了如何在Adobe中获得高权限的JavaScript执行。我们负责地披露了这些问题并支持供应商修复漏洞。我们还提出具体的对策和改进当前规范以修复这些问题。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519390/](https://ieeexplore.ieee.org/document/9519390/)
## Response-Hiding Encrypted Ranges: Revisiting Security via Parametrized Leakage-Abuse Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#response-hiding-encrypted-ranges-revisiting-security-via-parametrized-leakage-abuse-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#response-hiding-encrypted-ranges-revisiting-security-via-parametrized-leakage-abuse-attacks)**
### 作者
* Evgenios M. Kornaropoulos, UC Berkeley
* Charalampos Papamanthou, University of Maryland
* Roberto Tamassia, Brown University
### 摘要
> 尽管有关加密数据库泄露滥用攻击的相关研究逐渐增加，但对实用的响应隐藏构造的攻击尚未出现。响应隐藏构造在于通过仅透露每个查询的搜索令牌和结果大小来使基于访问模式的攻击无效。响应隐藏方案容易受到现有容量攻击的影响，然而这些攻击基于一些强假设，如均匀查询假设或密集数据库假设。更为关键的是，这些攻击仅适用于无法在实践中部署的方案（具有二次存储和增加泄漏）而实用的响应隐藏方案（Demertzis等，[SIGMOD'16]和Faber等，[ESORICS'15]）具有线性存储和更小泄漏。由于这些缺点，现有的对响应隐藏方案的容量攻击的价值尚不清楚。在这项工作中，我们通过引入一个可参数化的泄漏滥用攻击来填补上述差距，该攻击适用于实用的响应隐藏结构化加密方案。我们使用非参数估计技术使我们的攻击对数据和查询分布都无关。在我们技术的核心是一个以范围方案计数函数为基础的新定义概念。我们提出了一个两阶段的框架来逼近任何范围方案的计数函数。通过简单地切换一个计数函数，即我们模块化攻击的所谓“参数”，攻击者可以攻击不同的加密范围方案。我们为基于计数函数的攻击算法提出了一个受限优化公式。我们在各种场景下展示了我们的泄漏滥用攻击对合成数据和真实世界数据的有效性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519465/](https://ieeexplore.ieee.org/document/9519465/)
## A Decentralized and Encrypted National Gun Registry.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-decentralized-and-encrypted-national-gun-registry) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-decentralized-and-encrypted-national-gun-registry)**
### 作者
* Seny Kamara, Brown University, Providence, USA
* Tarik Moataz, Aroki Systems, Providence, USA
* Andrew Park, Brown University, Providence, USA
* Lucy Qin, Brown University, Providence, USA
### 摘要
> 枪支暴力导致美国发生大量死亡。自20世纪60年代起，美国国会通过了一系列枪支管控法律来规范枪支的销售和使用。其中最重要但政治上充满争议的枪支管控措施之一是建立全国枪支登记制度。美国参议院办公室目前正在起草一项立法，提议建立一个自愿加入的全国枪支登记系统。从高层次上看，该法案设想了一个分散的系统，地方县级官员将控制和管理其选民的登记数据。其他官员和执法机构可以通过查询这些地方数据库来追踪枪支。然而，由于数据的敏感性质，这些数据库应保证数据的保密性。在这项工作中，我们将该提议法案的高层次设想转化为技术要求，并设计了一个满足这些要求的密码协议。大致上说，该协议可以被看作是一个由本地管理的端到端加密数据库的分散系统。我们的设计依赖于各种密码学构建模块，包括结构化加密、安全多方计算和秘密共享。我们提出了一个正式的安全定义，并证明我们的设计符合该定义。我们实现了我们的协议，并在如果在美国部署的话，按照它的规模进行了实证性能评估。我们的结果表明，一个分散的、端到端加密的全国枪支登记制度不仅在理论上是可能的，而且在实践中也是可行的。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519474/](https://ieeexplore.ieee.org/document/9519474/)
## Zero Knowledge for Everything and Everyone: Fast ZK Processor with Cached ORAM for ANSI C Programs.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#zero-knowledge-for-everything-and-everyone-fast-zk-processor-with-cached-oram-for-ansi-c-programs) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#zero-knowledge-for-everything-and-everyone-fast-zk-processor-with-cached-oram-for-ansi-c-programs)**
### 作者
* David Heath, Georgia Institute of Technology
* Yibin Yang, Georgia Institute of Technology
* David Devecsery, Georgia Institute of Technology
* Vladimir Kolesnikov, Georgia Institute of Technology
### 摘要
> 我们构建了一个完整高效的零知识（ZK）工具链，用于处理以任意ANSI C程序编码的证明陈述。零知识证明在密码学中具有基础性的作用。最近的零知识研究主要关注于非交互式证明小陈述的方法，在区块链场景中非常有用。而我们的目标是大陈述，例如用于证明程序属性。最近的研究（Heath和Kolesnikov，CCS 2020 [HK20a]）设计了一个高效的概念验证ZK机器（ZKM）。他们的机器在最小指令集上执行任意程序，并验证程序执行过程中的零知识性。在这项工作中，我们在效率和广泛性方面都大幅扩展了这一研究方向。我们的贡献包括：• 一个用于表示任意ZK证明的丰富且性能导向的架构。• 一个完整的编译工具链，提供对ANSI C95程序的全面支持。我们运行了Linux程序sed和gzip的现成有漏洞的版本，并在ZK中证明了每个程序都有一个漏洞。据我们所知，这是第一个能够执行标准Linux程序的ZK系统。• 改进的零知识忽略RAM（ORAM）。[HK20a]引入了一种高效的ZK专用ORAM BubbleRAM，每次访问消耗O(log <sup>2</sup>  n)的通信。我们通过多级缓存改进了BubbleRAM，将通信减少到每次访问O(log n)。这引入了缓存未命中的可能性，我们以低成本处理这种情况。我们的实验证明缓存未命中很少发生；就隔离情况而言，即忽略其他处理器成本，BubbleCache改善了比BubbleRAM多8倍以上的通信。使用BubbleCache可以将处理器的总通信（包括缓存未命中的成本）改善约25-30%。• 多项底层优化，使CPU更富有表现力，速度比[HK20a]快约5.5倍。• 关注用户体验。我们面向工程师的ZK工具和扩展设计简洁易用。总之，我们的系统既高效又通用，可以运行许多标准的Linux程序。得到的机器在1Gbps LAN上以最高11KHz运行，并支持MB级的RAM。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519401/](https://ieeexplore.ieee.org/document/9519401/)
## Survivalism: Systematic Analysis of Windows Malware Living-Off-The-Land.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#survivalism-systematic-analysis-of-windows-malware-living-off-the-land) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#survivalism-systematic-analysis-of-windows-malware-living-off-the-land)**
### 作者
* Frederick Barr-Smith, Oxford University
* Xabier Ugarte-Pedrero, Cisco Systems
* Mariano Graziano, Cisco Systems
* Riccardo Spolaor, Oxford University
* Ivan Martinovic, Oxford University
### 摘要
> 随着恶意软件检测算法和方法变得越来越复杂，恶意软件的作者采取同样复杂的逃避机制来击败它们。一些个别证据声称Living-Off-The-Land（LotL）技术是许多恶意软件攻击中使用的主要逃避技术之一。这些技术利用已经存在于系统中的二进制文件进行恶意操作。我们首次对恶意软件在Windows系统上使用这些技术进行了大规模系统调查。在本文中，我们分析了这些本地系统二进制文件在多个恶意软件数据集中的普遍使用情况，总计包含31,805,549个样本。我们发现了平均9.41%的普遍性。我们的结果显示，LotL技术的使用非常普遍，尤其是在高级持续性威胁(APT)恶意软件样本中，其普遍性为26.26%，是普通恶意软件的两倍以上。为了说明LotL技术的逃避潜力，我们在一个本地隔离环境中对装有最新补丁的Windows系统进行了LotL技术的使用测试，并显示了在10个最受欢迎的杀毒软件产品中普遍存在检测漏洞。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519480/](https://ieeexplore.ieee.org/document/9519480/)
## Runtime Recovery of Web Applications under Zero-Day ReDoS Attacks.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#runtime-recovery-of-web-applications-under-zero-day-redos-attacks) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#runtime-recovery-of-web-applications-under-zero-day-redos-attacks)**
### 作者
* Zhihao Bai, Johns Hopkins University
* Ke Wang, Peking University
* Hang Zhu, Johns Hopkins University
* Yinzhi Cao, Johns Hopkins University
* Xin Jin, Peking University
### 摘要
> 常规表达式拒绝服务（ReDoS）利用精心构造的输入利用正在运行的超线性时间匹配正则表达式，是一种针对Web服务的新兴DoS攻击类型。受到ReDoS攻击的受害Web服务面临的一个具有挑战性的问题是，在ReDoS攻击之后如何快速恢复正常运行，尤其是那些利用以前未知漏洞的零日攻击。本文介绍了RegexNet，这是一个用于Web服务的基于载荷、自动化、反应式的ReDoS恢复系统。RegexNet采用学习模型，在运行时通过反馈循环不断更新，对即将到来的请求的载荷进行分类，包括请求内容和数据库查询响应。如果被检测为导致ReDoS的原因，RegexNet会将这些请求迁移到一个沙盒中，并将其执行隔离以实现快速的初步恢复措施。我们已经实现了RegexNet原型，并将其与HAProxy和Node.js集成。评估结果表明，RegexNet可以有效恢复Web服务对零日ReDoS攻击的性能，能够在次分钟内对攻击做出响应，对包括有意规避RegexNet的自适应攻击在内的不同ReDoS攻击类型具有弹性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519496/](https://ieeexplore.ieee.org/document/9519496/)
## Good Bot, Bad Bot: Characterizing Automated Browsing Activity.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#good-bot-bad-bot-characterizing-automated-browsing-activity) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#good-bot-bad-bot-characterizing-automated-browsing-activity)**
### 作者
* Xigao Li, Stony Brook University
* Babak Amin Azad, Stony Brook University
* Amir Rahmati, Stony Brook University
* Nick Nikiforakis, Stony Brook University
### 摘要
> 随着互联网规模不断扩大，易受攻击且管理不善的网站数量相应增加。攻击者依靠恶意机器人来发现这些易受攻击的网站，侵入其服务器并窃取敏感用户数据。因此，为了保护互联网的安全，了解恶意机器人的数量和行为非常重要。在本文中，我们报告了Aristaeus的设计、实施和结果，这是一个部署大量“蜜罐网站”的系统，即专门用于吸引和记录机器人流量的网站。通过对100个专用蜜罐网站进行持续七个月的实验，Aristaeus记录了超过287K个独特IP地址发送的2640万次请求，其中76396个明显是恶意机器人。通过分析这些机器人发送的请求和载荷类型，我们发现平均每个蜜罐网站每月收到超过37K个请求，其中超过50%的请求试图破解凭据、指纹识别部署的Web应用程序并利用各种不同漏洞。通过将这些机器人的声明身份与其TLS握手和HTTP头进行比较，我们发现超过86.2%的机器人声称是Mozilla Firefox和Google Chrome，但实际上它们是基于简单的HTTP库和命令行工具构建的。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519384/](https://ieeexplore.ieee.org/document/9519384/)
## Trouble Over-The-Air: An Analysis of FOTA Apps in the Android Ecosystem.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#trouble-over-the-air-an-analysis-of-fota-apps-in-the-android-ecosystem) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#trouble-over-the-air-an-analysis-of-fota-apps-in-the-android-ecosystem)**
### 作者
* Eduardo Blázquez, Universidad Carlos III de Madrid
* Sergio Pastrana, Universidad Carlos III de Madrid
* Álvaro Feal, IMDEA Networks Institute; Universidad Carlos III de Madrid
* Julien Gamba, IMDEA Networks Institute; Universidad Carlos III de Madrid
* Platon Kotzias, NortonLifelock Research Group
* Narseo Vallina-Rodriguez, IMDEA Networks Institute; ICSI
* Juan Tapiador, Universidad Carlos III de Madrid
### 摘要
> Android固件更新通常由所谓的FOTA（Firmware Over-the-Air）应用程序来管理。这些应用程序具有高度特权，并在设备的安全和更新维护中发挥着关键作用。Android操作系统提供了标准机制，供原始设备制造商（OEMs）实现自己的FOTA应用程序，但由于软件工程实践不佳，这些特定于供应商的实现可能成为安全和隐私问题的源头。本文通过一个针对此目的设计的工具检测到的2,013个FOTA应用程序数据集，对FOTA生态系统进行了首次的大规模和系统化分析，这些应用程序是在422,121个预装的应用程序中检测到的。我们对参与Android更新生态系统中FOTA应用程序开发和部署的不同利益相关者进行了分类，结果表明43%的FOTA应用程序由第三方开发。我们报告了一些设备可能存在5个或更多实现FOTA功能的应用程序。通过对FOTA应用程序代码的静态分析，我们发现某些应用程序的行为可能被视为侵犯隐私，比如收集敏感用户数据（例如与唯一硬件标识符相关的地理位置），以及存在大量第三方追踪器。我们还发现了一些实施问题，导致出现关键漏洞，比如使用公共AOSP测试密钥同时对FOTA应用程序进行签名和更新验证，从而允许安装使用相同密钥签名的任何更新。最后，我们研究了商业安全工具收集的来自真实设备的遥测数据。我们证明了FOTA应用程序负责安装非系统应用程序（如娱乐应用程序和游戏），包括恶意软件和潜在的不受欢迎的程序（PUP）。我们的研究结果表明，FOTA开发实践与Google的建议不一致。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519485/](https://ieeexplore.ieee.org/document/9519485/)
## Doing good by fighting fraud: Ethical anti-fraud systems for mobile payments.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#doing-good-by-fighting-fraud-ethical-anti-fraud-systems-for-mobile-payments) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#doing-good-by-fighting-fraud-ethical-anti-fraud-systems-for-mobile-payments)**
### 作者
* Zainul Abi Din, University of California, Davis
* Hari Venugopalan, University of California, Davis
* Henry Lin, Bouncer Technologies
* Adam Wushensky, Bouncer Technologies
* Steven Liu, Bouncer Technologies
* Samuel T. King, University of California, Davis; Bouncer Technologies
### 摘要
> 应用程序构建者通常使用安全挑战，一种逐步身份认证的形式，为其应用程序增加安全性。然而，这种类型架构的伦理影响尚未进行研究。本文介绍了对现有反欺诈安全挑战系统Boxer在真实运行于移动设备的应用程序上的大规模测量研究。我们发现，尽管Boxer整体效果不错，但在运行机器学习模型每秒帧数低于1的设备上无法有效进行扫描，从而阻止使用廉价设备的用户。根据我们研究的洞察，我们设计了一种新的反欺诈系统Daredevil，用于扫描付款卡，在现代移动设备上具有广泛的性能特征和硬件配置。与Boxer相比，Daredevil将低于每秒1帧的设备数量减少了一个数量级，为打击欺诈提供了更公平的系统。总共，我们收集了来自5085444个真实设备的数据，这些设备分布在496个运行生产软件并与实际用户进行交互的真实应用程序中。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519475/](https://ieeexplore.ieee.org/document/9519475/)
## Happer: Unpacking Android Apps via a Hardware-Assisted Approach.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#happer-unpacking-android-apps-via-a-hardware-assisted-approach) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#happer-unpacking-android-apps-via-a-hardware-assisted-approach)**
### 作者
* Lei Xue, The Hong Kong Polytechnic University
* Hao Zhou, The Hong Kong Polytechnic University
* Xiapu Luo, The Hong Kong Polytechnic University
* Yajin Zhou, Zhejiang University
* Yang Shi, Tongji University
* Guofei Gu, Texas A&M University
* Fengwei Zhang, Southern University of Science and Technology
* Man Ho Au, The University of Hong Kong
### 摘要
> 恶意软件作者正在滥用壳（或基于运行时的混淆器）来保护恶意应用免受分析。尽管已经提出了许多静态解壳工具，但它们很容易被壳采用的反分析方法阻碍，并且由于壳的保护策略不断演进，这些工具无法有效地收集隐藏的Dex数据。因此，许多壳行为对分析人员来说都是未知的，打包的恶意软件可以规避检查。为弥补这一空白，本文提出了一种新颖的硬件辅助方法，首先监视壳行为，然后选择合适的方法来解包打包的应用程序。此外，我们开发了一个名为Happer的原型系统，并使用一种名为行为描述语言（BDL）的领域特定语言来简化Happer的扩展。在解决了几个技术挑战之后，我们对12个商业Android壳和超过24k个Android应用进行了大量实验证明了Happer的有效性。实验结果表明，Happer观察到了27种壳行为，其中有17种是以前研究没有详细探讨过的。基于观察到的壳行为，Happer采取了适当的方法来收集所有隐藏的Dex数据，并将其组装成有效的Dex文件。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519458/](https://ieeexplore.ieee.org/document/9519458/)
## The Provable Security of Ed25519: Theory and Practice.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#the-provable-security-of-ed25519-theory-and-practice) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#the-provable-security-of-ed25519-theory-and-practice)**
### 作者
* Jacqueline Brendel, CISPA Helmholtz Center for Information Security
* Cas Cremers, CISPA Helmholtz Center for Information Security
* Dennis Jackson, Department of Computer Science, ETH Zurich
* Mang Zhao, CISPA Helmholtz Center for Information Security
### 摘要
> 一个签名方案的标准要求是在选定消息攻击下不可伪造（EUF-CMA），以及其他感兴趣的属性，如强不可伪造性（SUF-CMA）和对密钥替换攻击的抵抗力。令人惊讶的是，对于EdDSA以及其Ed25519实现的这些安全性质从未给出详细的证明。Ed25519是最高效且广泛使用的签名方案之一，Ed25519的不同实例被用于TLS 1.3、SSH、Tor、ZCash和WhatsApp/Signal等协议中。这些实例之间的差异微妙，并且只有非正式的论证支持，许多研究假设结果可以直接从Schnorr签名中传递。同样，在一些协议安全的证明中，简单地假设Ed25519满足EUF-CMA或SUF-CMA这样的性质。本文首次对Ed25519签名方案进行了详细的分析和安全性证明。虽然方案的设计遵循了着名的Fiat-Shamir范式，该范式应该能够保证存在性不可伪造性，但是有许多特殊案例和编码细节使得证明复杂，所有其他安全性质都需要独立证明。我们的工作为选择多个Ed25519变体并理解它们的属性提供了科学的基础，填补了现代协议证明中使用这些签名的证明空白，并支持进一步的标准化工作。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519456/](https://ieeexplore.ieee.org/document/9519456/)
## Epochal Signatures for Deniable Group Chats.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#epochal-signatures-for-deniable-group-chats) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#epochal-signatures-for-deniable-group-chats)**
### 作者
* Andreas Hülsing, TU Eindhoven
* Fiona Johanna Weber, TU Eindhoven
### 摘要
> 在这项工作中，我们对群聊应用程序中的不可否认性进行了正式的研究，并引入了“时代签名”概念，可以将许多安全群聊协议转变为可否认的协议。直观地说，该转换适用于使用签名进行身份验证并在删除签名后变得可否认的协议。与先前使用签名进行实体认证的提议（如mpOTR（CCS’09））不同，我们的构造不需要参与者进行成对密钥建立，并且允许在不需要重新初始化聊天的情况下添加和删除参与者。这些特性允许在设计为适用于非常大的群体的协议中使用。最后，我们从通用原语构造了一个实用的时代签名方案，并证明其安全性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519499/](https://ieeexplore.ieee.org/document/9519499/)
## BUFFing signature schemes beyond unforgeability and the case of post-quantum signatures.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#buffing-signature-schemes-beyond-unforgeability-and-the-case-of-post-quantum-signatures) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#buffing-signature-schemes-beyond-unforgeability-and-the-case-of-post-quantum-signatures)**
### 作者
* Cas Cremers, CISPA Helmholtz Center for Information Security, Germany
* Samed Düzlü, QPC, Technische Universität Darmstadt, Germany
* Rune Fiedler, Cryptoplexity, Technische Universität Darmstadt, Germany
* Marc Fischlin, Cryptoplexity, Technische Universität Darmstadt, Germany
* Christian Janson, Cryptoplexity, Technische Universität Darmstadt, Germany
### 摘要
> 现代数字签名方案可以提供比（强）防伪性更多的保证，例如在恶意生成的密钥的存在下仍能够提供安全性，或者要求知道一条消息才能为其生成签名。之前使用缺乏这些属性的签名方案已经为真实世界的协议带来了攻击可能性。在这项研究中，我们重新审视了超越防伪性的几个概念，并建立了它们之间的联系，提供了对不可再签名性的首个形式定义，以及一个可以以可证明和高效的方式为给定的签名方案提供这些属性的转换方法。我们的研究结果不仅对已建立的方案具有相关性：例如，正在进行的NIST PQC竞赛旨在标准化后量子时代的签名方案，在第三轮中有六个入围者。我们对这些候选方案进行了深入分析，针对它们的安全属性超越防伪性进行了评估。我们发现其中许多候选方案目前还没有提供这些更强的保证，这意味着这些后量子方案的安全保证与传统签名方案不是严格意义上的更强，而是不可比较的。我们展示了如何有效地应用我们的转换方法来解决这个问题，为标准化方案提供这些额外的保证，并使它们更难被滥用。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519420/](https://ieeexplore.ieee.org/document/9519420/)
## Detecting Filter List Evasion with Event-Loop-Turn Granularity JavaScript Signatures.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#detecting-filter-list-evasion-with-event-loop-turn-granularity-javascript-signatures) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#detecting-filter-list-evasion-with-event-loop-turn-granularity-javascript-signatures)**
### 作者
* Quan Chen, North Carolina State University
* Peter Snyder, Brave Software
* Ben Livshits, Brave Software
* Alexandros Kapravelos, North Carolina State University
### 摘要
> 内容阻断是一个性能卓越、用户服务、尊重隐私的网络的重要组成部分。目前的内容阻断器通过在URL上建立信任标签来工作。虽然有用，但这种方法有许多已经很好理解的缺点。攻击者可以通过更改URL或域名、将非法代码与良性代码捆绑在一起或将代码内嵌在页面中来避免被检测到。现有方法的共同缺陷在于他们基于代码的传递机制而评估代码，而不是基于代码本身的行为。在这项工作中，我们通过建立一个系统来生成已执行JavaScript的与隐私和安全相关行为的签名来解决这个问题。我们的系统使用每个脚本在JavaScript事件循环的每个转换期间的行为作为分析单元。专注于事件循环转换可以使我们构建出针对JavaScript代码的高度识别签名，这些签名能够抵御代码混淆、代码捆绑、URL修改和其他常见的逃避手段，并处理网络应用程序的独特方面。这项工作对于衡量和改进网络上的内容阻断问题提出了以下贡献：首先，我们设计和实施了一种新颖的系统，通过对Blink和V8运行时进行深度仪器化，来构建每个事件循环转换的JavaScript行为的签名。其次，我们应用这些签名来测量当前内容阻断器错过了多少威胁隐私和安全的代码，通过使用EasyList和EasyPrivacy作为基准真理，找到具有相同隐私和安全威胁模式的脚本。我们构建了1,995,444个与隐私和安全相关行为相关的签名，这些签名来自于被过滤列表阻止的11,212个唯一脚本，并找到了3,589个已知有害代码被过滤列表忽略的唯一脚本，影响了测量网站的12.48%。第三，我们提供了脚本逃避检测的分类方法，并量化了每种方法的发生情况。最后，我们提出了对这些逃避手段的防御措施，一种是可能的情况下添加到过滤列表中，另一种是通过一种提议的基于签名的系统。作为这项工作的一部分，我们分享了我们的签名生成系统的实现，以及将该系统应用于Alexa 100K的数据和586个AdBlock Plus兼容的过滤列表规则，以阻止当前被阻断的代码实例移动到新的URL。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519497/](https://ieeexplore.ieee.org/document/9519497/)
## Reading Between the Lines: An Extensive Evaluation of the Security and Privacy Implications of EPUB Reading Systems.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#reading-between-the-lines-an-extensive-evaluation-of-the-security-and-privacy-implications-of-epub-reading-systems) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#reading-between-the-lines-an-extensive-evaluation-of-the-security-and-privacy-implications-of-epub-reading-systems)**
### 作者
* Gertjan Franken, imec-DistriNet, KU Leuven, Leuven, Belgium
* Tom Van Goethem, imec-DistriNet, KU Leuven, Leuven, Belgium
* Wouter Joosen, imec-DistriNet, KU Leuven, Leuven, Belgium
### 摘要
> 近年来，电子书已被证明是实体书非常有吸引力的替代品；如今，几乎每一本书都以电子格式出版，与其实体副本一同发行。为了促进共识并提供一种替代新兴专有电子书格式的选择，引入了开放电子书格式，现在被称为EPUB格式。在现有网络功能基础上构建，这种开放格式主要依赖XHTML和CSS来构建电子书。因此，浏览器引擎通常用于呈现EPUB的内容。然而，这意味着阅读系统可能面临与Web浏览器类似的漏洞。本文报告了对EPUB阅读系统安全和隐私方面的半自动评估。这个评估在七个平台和五个物理阅读设备上对97个EPUB阅读系统进行了测试，结果显示几乎没有任何支持JavaScript的阅读系统符合EPUB规范的安全建议。此外，我们的结果表明，16个阅读系统甚至允许EPUB泄露用户文件系统的信息，并在八个案例中提取文件内容。除了半自动评估，我们还展示了攻击者可以利用使用数百万用户的阅读系统实现的特定方面，发起更多具有更强攻击性的攻击，可能导致用户系统完全被攻破。最后，我们调查了确定的安全和隐私问题的根本原因，揭示了EPUB阅读系统实现的几个缺陷，以及EPUB规范的不足之处。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519412/](https://ieeexplore.ieee.org/document/9519412/)
## Did you mix me? Formally Verifying Verifiable Mix Nets in Electronic Voting.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#did-you-mix-me-formally-verifying-verifiable-mix-nets-in-electronic-voting) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#did-you-mix-me-formally-verifying-verifiable-mix-nets-in-electronic-voting)**
### 作者
* Thomas Haines, Dept of Mathematical Sciences, Norwegian University of Science and Technology
* Rajeev Goré, Research School of Computer Science, The Australian National University
* Bhavesh Sharma, Research School of Computer Science, The Australian National University
### 摘要
> 可验证的混合网络，特别是正确的洗牌证明，是许多应用程序中的基本构建块：这些零知识证明允许证明者生成一个公共记录，并由验证者查看以确认所声称的洗牌。它们对于可验证的电子投票尤为重要，因为它们支持几乎所有带有非平凡计数方法的投票方案。这些复杂的密码学部分很容易出现错误，可能导致结果被未检测到地修改。防止这些错误的最佳解决方案是对混合网络的设计和实现的密码学属性进行机器验证。对于结果的完整性特别重要的是验证者（软件）的设计和实现的合理性。不幸的是，许多不同的加密方案在许多不同的细微变化中被使用，这使得机器验证每种情况都变得不可行。然而，特里利乌斯-维克斯特伦混合网络的一种优化变体已经广泛部署在包括挪威、爱沙尼亚和瑞士的全国选举中，尽管有许多细微变化和几种不同的加密方案。
> 
> 在这项工作中，我们开发了逻辑理论和形式化方法工具，对特里利乌斯-维克斯特伦混合网络的所有这些变体进行机器验证设计和实现，涵盖了所有使用的不同加密方案，并得出了所有这些不同变体的可证明正确的混合网络。我们以谨慎的方式进行，以确保我们能够提取一个与特里利乌斯-维克斯特伦混合网络的现有部署实现兼容的经过形式验证的验证者（软件）实现。这使我们能够获得对使用可验证混合网络的超过一半国家选举的验证者的可证明正确的实现。
> 
> 我们的正确洗牌证明实现是第一个经过机器验证的具有密码学正确性并能够验证来自国家选举的证明记录的实现。我们通过验证瑞士的Verificatum混合网络系统和CHVote电子投票系统生成的记录来证明我们实现的实用性。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519460/](https://ieeexplore.ieee.org/document/9519460/)
## The EMV Standard: Break, Fix, Verify.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#the-emv-standard-break-fix-verify) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#the-emv-standard-break-fix-verify)**
### 作者
* David Basin, Department of Computer Science, ETH Zurich
* Ralf Sasse, Department of Computer Science, ETH Zurich
* Jorge Toro-Pozo, Department of Computer Science, ETH Zurich
### 摘要
> EMV是智能卡支付的国际协议标准，在全球范围内使用超过90亿张卡。尽管该标准宣称具有安全性，但之前已经发现了一些问题，这些问题源自EMV规范的逻辑缺陷，在超过2000页的复杂规范中很难发现。我们在Tamarin中构建了EMV的综合符号模型，Tamarin是一种先进的协议验证工具。我们的模型是第一个支持对EMV所提供的所有相关安全保证进行精细分析的模型。我们利用该模型自动识别出导致两个关键攻击的缺陷：一个欺诈持卡人的攻击和一个欺诈商家的攻击。首先，犯罪分子可以使用受害者的Visa非接触式卡进行需要持卡人验证的付款，而不需要知道卡片的PIN码。我们构建了一个概念验证的Android应用程序，并成功在真实的支付终端上演示了这种攻击。其次，犯罪分子可以欺骗终端接受一个非真实的离线交易，而发卡银行应该在犯罪分子拿到商品后拒绝该交易。尽管出于道德原因我们没有在实际终端上测试这种攻击，但这种攻击对于遵循标准的实现是可能的。最后，我们提出并验证了对标准的改进，以防止这些攻击以及违反考虑的安全属性的任何其他攻击。这些改进可以在终端中轻松实现，而不会影响流通中的卡片。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519404/](https://ieeexplore.ieee.org/document/9519404/)
## A Secure and Formally Verified Linux KVM Hypervisor.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-secure-and-formally-verified-linux-kvm-hypervisor) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-secure-and-formally-verified-linux-kvm-hypervisor)**
### 作者
* Shih-Wei Li, Department of Computer Science, Columbia University
* Xupeng Li, Department of Computer Science, Columbia University
* Ronghui Gu, Department of Computer Science, Columbia University
* Jason Nieh, Department of Computer Science, Columbia University
* John Zhuang Hui, Department of Computer Science, Columbia University
### 摘要
> 商品虚拟机管理程序广泛使用于支持多处理器硬件上的虚拟机（VM）。由于它们日益复杂化，存在安全风险。为了能够对如此庞大的代码库进行形式化验证，我们引入了微验证（microverification）的新方法，将商品虚拟机管理程序分解为一个小核心和一组不可信服务，从而我们可以通过验证核心来证明整个虚拟机管理程序的安全属性。为了验证多处理器虚拟机管理程序的核心，我们引入了安全保护层以模块化证明，并且不隐藏信息泄露，以便我们可以证明每个层次的实现都符合其规范，而顶层规范又由核心实现的所有层次精化。为了验证需要动态改变信息流的商品虚拟机管理程序特性，我们引入了数据预言机以掩盖有意的信息流。然后，我们可以证明顶层规范上的非干扰性，并保证结果的安全属性适用于整个虚拟机管理程序实现。使用微验证，我们对Linux KVM虚拟机管理程序进行了小幅修改。通过Coq，我们证明了虚拟机管理程序能够保护虚拟机数据的机密性和完整性，同时保持KVM的功能和性能。我们的工作是用于商品多处理器虚拟机管理程序的第一个机器验证安全证明。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519433/](https://ieeexplore.ieee.org/document/9519433/)
## Many-out-of-Many Proofs and Applications to Anonymous Zether.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#many-out-of-many-proofs-and-applications-to-anonymous-zether) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#many-out-of-many-proofs-and-applications-to-anonymous-zether)**
### 作者
* Benjamin E. Diamond, J.P. Morgan AI Research, New York, United States
### 摘要
> 匿名Zether是Bünz、Agrawal、Zamani和Boneh（FC'20）提出的一种私密支付设计，其钱包需求带宽较小，无需保持在线；这一独特属性使其成为资源受限设备的一个引人注目的选择。在这项工作中，我们描述了一种高效的匿名Zether构造。我们的协议中的证明仅在使用的“匿名集合”大小上呈对数增长，相比之前的努力，这一改进是一个富有竞争力的事实（大约为3千字节）。我们的主要工具是对Groth和Kohlweiss的一对多证明（Eurocrypt 2015）的新扩展系列，该系列高效地证明了关于一列表中许多消息的陈述。这些扩展证明了对于一个公共列表的一个秘密子集的知识，并断言子集中的承诺满足某些属性（表达为线性方程）。值得注意的是，我们的通信保持对数级增长；我们的计算只增加了一个对数乘法因子。这种技术可能具有独立的兴趣。我们介绍了我们匿名Zether构造的基于以太坊的开源实现。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519471/](https://ieeexplore.ieee.org/document/9519471/)
## On the Anonymity Guarantees of Anonymous Proof-of-Stake Protocols.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#on-the-anonymity-guarantees-of-anonymous-proof-of-stake-protocols) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#on-the-anonymity-guarantees-of-anonymous-proof-of-stake-protocols)**
### 作者
* Markulf Kohlweiss, University of Edinburgh
* Varun Madathil, North Carolina State University
* Kartik Nayak, Duke University
* Alessandra Scafuro, North Carolina State University
### 摘要
> 在权益证明（PoS）区块链中，扩展链的利益相关者根据其拥有的权益数量进行选择。在S&amp;P 2019年的Kerber等人的"Ouroboros Crypsinous"系统中（同时还在EUROCRYPT 2019年中的Ganesh等人），提出了一种在向区块链添加区块时隐藏利益相关者身份的机制，从而在Ouroboros区块链中保持利益相关者在付款和挖矿期间的匿名性。他们关注的是区块链协议的消息匿名化，但是建议通过使用匿名广播信道来消除来自网络层的潜在身份泄露。在这项工作中，我们展示这种直觉是有缺陷的。即使是理想的匿名广播信道也不能足以保护建议提出一个区块的利益相关者的身份。我们做出以下贡献。首先，我们展示了对Ouroboros Crypsinous的正式网络攻击，其中对手可以利用网络延迟来区分谁是在区块链上添加了一个区块的利益相关者。其次，我们将上述攻击进行了抽象，并展示了无论何时对手在同步界限之内控制网络延迟时，任何能够提供活跃性保证的协议都会丧失匿名性。我们首先证明了不可能设计一种（确定性的）状态机复制协议，既可以实现基本的活跃性保证，又可以实现大于（1-2f）的匿名性（其中f是被损坏的参与方的比例）。然后，我们通过介绍标签和反向标签攻击，将这一结果与PoS设置相连接，允许对手在PoS协议的多个执行过程中通过简单地延迟目标节点的消息来了解目标节点的份额。我们通过描述我们的攻击如何在Zcash区块链网络上进行（即使使用了Tor），证明了我们对于对手延迟能力的假设是现实的。最后，我们提出了可以减轻此类攻击的方法。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519415/](https://ieeexplore.ieee.org/document/9519415/)
## A2L: Anonymous Atomic Locks for Scalability in Payment Channel Hubs.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a2l-anonymous-atomic-locks-for-scalability-in-payment-channel-hubs) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a2l-anonymous-atomic-locks-for-scalability-in-payment-channel-hubs)**
### 作者
* Erkan Tairi, TU Wien
* Pedro Moreno-Sanchez, IMDEA Software Institute
* Matteo Maffei, TU Wien
### 摘要
> 支付通道中心（PCH）构成了区块链技术固有可扩展性问题的一个有前途的解决方案，允许发送方和接收方通过中间人（称为搅拌器）进行链下支付。尽管最先进的PCH在防止恶意搅拌器方面提供了安全性和隐私保证，但它们依赖于仅在少数加密货币中可用的基于脚本的功能，因此无法满足基本属性，如向后兼容性和效率。在这项工作中，我们提出了第一个能够实现所有前述属性的PCH协议。我们的PCH基于一种新的密码学原语A <sup>2</sup> L构建，它实现了一种用于条件交易的三方协议，其中搅拌器只有在接收方在发送方的帮助下解决了一个密码挑战时才向接收方付款，这意味着发送方已向搅拌器付款。我们证明了在通用组合框架中A <sup>2</sup> L（它承载到我们的PCH构造）的安全性和隐私保证，并提出了一种基于适配器签名和随机化谜题的可证明安全实例。我们实施了A <sup>2</sup> L并将其与TumbleBit进行了比较，后者是最先进的与比特币兼容的PCH。从渐进上看，A <sup>2</sup> L的通信复杂度是恒定的，而不像TumbleBit那样与安全参数成线性关系。在实践中，A <sup>2</sup> L所需的带宽比TumbleBit少约33倍，同时保持计算成本（或通过预处理技术提供2倍加速）。这证明了A <sup>2</sup> L（以及我们的PCH构造）已经可以在今天部署。从理论上讲，我们首次证明，只需要底层脚本语言提供数字签名和时间锁功能，就可以设计出安全和隐私保护的PCH。在实践中，这个结果使我们的PCH与几乎所有当今可用的加密货币向后兼容，即使是那些提供高度限制形式的脚本语言，如瑞波币或恒星币。我们构建的实践吸引力已经在COMIT网络中进行了概念验证实现，该网络是专注于跨货币支付的区块链技术。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519431/](https://ieeexplore.ieee.org/document/9519431/)
## CrossTalk: Speculative Data Leaks Across Cores Are Real.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#crosstalk-speculative-data-leaks-across-cores-are-real) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#crosstalk-speculative-data-leaks-across-cores-are-real)**
### 作者
* Hany Ragab, Department of Computer Science, Vrije Universiteit, Amsterdam, The Netherlands
* Alyssa Milburn, Department of Computer Science, Vrije Universiteit, Amsterdam, The Netherlands
* Kaveh Razavi, D-ITET ETH Zurich, Switzerland
* Herbert Bos, Department of Computer Science, Vrije Universiteit, Amsterdam, The Netherlands
* Cristiano Giuffrida, Department of Computer Science, Vrije Universiteit, Amsterdam, The Netherlands
### 摘要
> 最近的瞬态执行攻击表明，攻击者可能会在共享CPU核心上跨安全边界泄漏敏感信息。迄今为止，通过将潜在受害者和攻击者隔离在不同的核心上，似乎可以防止这种情况发生。在本文中，我们展示了这种情况更加严重，因为许多现代英特尔CPU上的瞬态执行攻击可以在不同的核心之间泄漏数据。我们通过调查x86指令的行为，特别是关注执行跳转请求的复杂微码指令，来展示这一点。结合瞬态执行漏洞（如微架构数据采样 - MDS），这些操作可以揭示内部CPU状态。使用性能计数器，我们构建了一个名为CROSSTALK的分析工具，以检查许多x86指令的这些操作的数量和性质，并发现一些指令从一个在所有CPU核心之间共享的缓冲区中读取数据。为了展示这种行为对安全性的影响，我们提出了第一种使用瞬态执行进行跨核攻击的示例，展示了即使是看似无害的CPUID指令也可以被攻击者用来获取包含敏感数据（尤其是来自硬件随机数生成器 - RNG的输出）的整个缓冲区样本。我们展示了这在实践中可以被利用来攻击在完全不同的核心上运行的SGX enclave，攻击者可以使用实际性能降低攻击来控制信息泄漏，并成功确定出enclave的私钥。由于现有的依赖于空间或时间分隔的缓解措施在防止我们提出的攻击方面效果不大，我们还讨论了潜在的新缓解技术。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519489/](https://ieeexplore.ieee.org/document/9519489/)
## Hardware-Software Contracts for Secure Speculation.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#hardware-software-contracts-for-secure-speculation) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#hardware-software-contracts-for-secure-speculation)**
### 作者
* Marco Guarnieri, IMDEA Software Institute
* Boris Köpf, Microsoft Research
* Jan Reineke, Saarland University
* Pepe Vila, IMDEA Software Institute
### 摘要
> 自从发现“幽灵”（Spectre）以来，已经提出了大量用于安全推测的硬件机制。直观地说，更多的防御机制效率较低，但可以安全地执行更多类别的程序，而更宽松的机制可能提供更高的性能，但需要更多的防御性编程。不幸的是，目前没有硬件-软件的合同可以将此直觉转化为基于原则的共同设计基础。在本文中，我们提出了一个框架来指定这种合同，并展示了其表达性和灵活性。在硬件方面，我们使用该框架对一类代表性的安全推测机制提供了首次形式化和比较提供的安全保证。在软件方面，我们使用该框架来描述保证两种传统上独立调查的场景中的安全共同设计的程序属性：（1）确保良性程序在计算机密数据时不会泄露信息，和（2）确保潜在恶意程序无法读取其指定沙盒之外的内容。最后，我们展示了如何基于现有的软件验证工具检查与这两种情景对应的属性，并使用它们验证了我们关于可执行代码的发现。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519500/](https://ieeexplore.ieee.org/document/9519500/)
## High-Assurance Cryptography in the Spectre Era.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#high-assurance-cryptography-in-the-spectre-era) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#high-assurance-cryptography-in-the-spectre-era)**
### 作者
* Gilles Barthe, MPI-SP; IMDEA Software Institute
* Sunjay Cauligi, UC San Diego
* Benjamin Grégoire, INRIA Sophia Antipolis
* Adrien Koutsos, MPI-SP; INRIA Paris
* Kevin Liao, MPI-SP; MIT
* Tiago Oliveira, University of Porto (FCUP) and INESC TEC
* Swarn Priya, Purdue University
* Tamara Rezk, INRIA Sophia Antipolis
* Peter Schwabe, MPI-SP
### 摘要
> 高保障密码学利用程序验证和密码学工程的方法，提供具有机器检查的内存安全证明、功能正确性证明、可证安全性和无时序泄露的高效密码软件。传统上，这些保证是在顺序执行语义下建立的。然而，这种语义与现代处理器的行为不一致，现代处理器利用推测执行来提高性能。这种不匹配以及高调的Spectre风格攻击利用推测执行，自然地对高保障密码学保证的健壮性产生了质疑。在本文中，我们通过展示高保障密码学在推测执行下的益处，并且只带来较小的性能开销，来消除这些疑虑。我们在Jasmin验证框架之上构建了一个端到端的方法，用于在推测执行下证明密码软件的属性，并通过ChaCha20和Poly1305的高效、功能正确的汇编实现进行了实验验证，这些实现对传统的时序攻击和推测执行攻击都是安全的。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519434/](https://ieeexplore.ieee.org/document/9519434/)
## A Novel Dynamic Analysis Infrastructure to Instrument Untrusted Execution Flow Across User-Kernel Spaces.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-novel-dynamic-analysis-infrastructure-to-instrument-untrusted-execution-flow-across-user-kernel-spaces) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#a-novel-dynamic-analysis-infrastructure-to-instrument-untrusted-execution-flow-across-user-kernel-spaces)**
### 作者
* Jiaqi Hong, School of Information Systems, Singapore Management University
* Xuhua Ding, School of Information Systems, Singapore Management University
### 摘要
> 代码插桩和基于硬件的事件捕获是动态恶意软件分析系统中使用的两种主要方法。在本文中，我们提出了一种新的方法，称为执行流程插装（EFI），其中分析器的执行流程与用户和内核模式下的目标流程交错，由分析器在运行时灵活选择交叉点。我们还提出了OASIS作为实现EFI的系统基础设施，具有当前两种方法的优点，但没有它们的缺点。尽管与目标安全和透明隔离，但分析器可以以与插装代码相同的本地方式内省和控制目标。我们已经实现了OASIS的原型，并通过包括性能和反分析基准测试在内的各种实验进行了严格评估。我们还进行了两个EFI案例研究。第一个是跨空间控制流追踪器，第二个包括两个EFI工具与Google Syzkaller协同工作。一个工具根据内核崩溃报告进行动态的事后分析；另一个工具探索了一个恶意的内核空间设备驱动程序的行为，该驱动程序规避了Syzkaller日志记录。研究表明，EFI分析器非常适合对用户模式或内核模式下的恶意线程进行精细的按需动态分析。开发敏捷的EFI工具很容易，因为它们是用户空间程序。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519439/](https://ieeexplore.ieee.org/document/9519439/)
## DynPTA: Combining Static and Dynamic Analysis for Practical Selective Data Protection.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#dynpta-combining-static-and-dynamic-analysis-for-practical-selective-data-protection) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#dynpta-combining-static-and-dynamic-analysis-for-practical-selective-data-protection)**
### 作者
* Tapti Palit, Stony Brook University
* Jarin Firose Moon, Stony Brook University
* Fabian Monrose, UNC Chapel Hill
* Michalis Polychronakis, Stony Brook University
### 摘要
> 随着各种利用缓解技术的部署，控制流劫持攻击变得更具挑战性，通过利用内存泄露漏洞泄露敏感进程数据成为越来越重要的威胁。更糟糕的是，最近引入的瞬态执行攻击为泄露机密进程数据提供了新途径。作为应对，提出了各种方法来有选择地保护关键内存数据的子集，然而这些方法要么需要进行大量的代码重构工作，要么对于大型应用程序缩放性不强。本文介绍了DynPTA，一种结合静态分析和有范围的动态数据流跟踪（DFT）的选择性数据保护方法，以保持一部分手动注释的敏感数据在内存中始终加密。DynPTA通过依赖轻量级标签查找来消除指针分析的固有过度近似问题，这是一个重要的挑战，阻碍了以前的方法支持大型应用程序。标记的对象仅在可能携带潜在敏感数据的值流子集中进行跟踪，只需要对程序的一小部分代码进行DFT的插桩。我们通过实际应用程序对DynPTA进行了实验评估，并证明它可以防止内存泄露（Heartbleed）和瞬态执行（Spectre）攻击泄露受保护的数据，同时运行时开销较小，最高可达19.2%，用于保护Nginx与OpenSSL的私有TLS密钥。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519446/](https://ieeexplore.ieee.org/document/9519446/)
## DICE: Automatic Emulation of DMA Input Channels for Dynamic Firmware Analysis.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#dice-automatic-emulation-of-dma-input-channels-for-dynamic-firmware-analysis) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#dice-automatic-emulation-of-dma-input-channels-for-dynamic-firmware-analysis)**
### 作者
* Alejandro Mera, Khoury College of Computer Sciences, Northeastern University, Boston, USA
* Bo Feng, Khoury College of Computer Sciences, Northeastern University, Boston, USA
* Long Lu, Khoury College of Computer Sciences, Northeastern University, Boston, USA
* Engin Kirda, Khoury College of Computer Sciences, Northeastern University, Boston, USA
### 摘要
> 基于微控制器的嵌入式设备是物联网（IoT）和网络物理系统（CPS）的核心。这些设备的安全性至关重要。在保护嵌入式设备的方法中，动态固件分析（例如，漏洞检测）最近引起了极大关注，得益于其离线性质和低误报率。然而，无论使用何种分析和仿真技术，现有的动态固件分析器都存在一个重要限制，即不能处理使用直接存储器访问（DMA）的固件。这严重限制了支持的设备类型和固件代码覆盖范围。我们提出了DICE，这是一个插入式解决方案，用于模拟DMA输入通道并生成或操作DMA输入（从外设到固件）。DICE被设计为与硬件无关（即不需要实际外设或DMA控制器）并与常见的MCU固件（即不假设固件特定的DMA用法）和嵌入式架构兼容。DICE的高级思想是识别和仿真抽象的DMA输入通道，而不是高度多样化的外设和控制器。当固件将源和目标DMA传输指针写入DMA控制器时，DICE将识别DMA输入通道。然后，DICE代表固件分析器操作通过DMA传输的输入。DICE不需要固件源代码或固件分析器的附加功能。我们将DICE集成到最近提出的用于ARM Cortex-M架构的固件分析器P <sup>2</sup> IM和用于MIPS M4K/M-Class架构的PIC32仿真器中。我们在83个基准测试和示例固件上进行了评估，代表了来自5个不同厂商的9种不同DMA控制器。DICE检测到了37个DMA输入通道的33个，没有误报。它正确地为22个固件实际使用的DMA缓冲区提供了DMA输入，而以前的固件分析器由于缺乏DMA仿真而无法实现。DICE的开销相当低，平均增加了3.4%的P <sup>2</sup> IM的执行时间。我们还使用DICE对7个现实世界的固件进行了模糊测试，并将结果与原始的P <sup>2</sup> IM进行了对比。DICE揭示了更多的执行路径（高达79倍），并发现了5个以前未知且无法通过DMA仿真达到的唯一漏洞。我们的所有源代码和数据集都是公开可用的。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519398/](https://ieeexplore.ieee.org/document/9519398/)
## Real-World Snapshots vs. Theory: Questioning the t-Probing Security Model.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#real-world-snapshots-vs-theory-questioning-the-t-probing-security-model) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#real-world-snapshots-vs-theory-questioning-the-t-probing-security-model)**
### 作者
* Thilo Krachenfels, Chair of Security in Telecommunications, Technische Universität Berlin, Germany
* Fatemeh Ganji, Department of Electrical and Computer Engineering, Worcester Polytechnic Institute, USA
* Amir Moradi, Horst Görtz Institute for IT-Security, Ruhr-Universität Bochum, Germany
* Shahin Tajik, Department of Electrical and Computer Engineering, Worcester Polytechnic Institute, USA
* Jean-Pierre Seifert, Chair of Security in Telecommunications, Technische Universität Berlin, Germany
### 摘要
> 由于其良好的理论基础和实用高效性，掩码技术已成为保护密码实现免受物理侧信道攻击（SCAs）的最主要反制措施。掩码的核心思想是在计算过程中随机分割每个敏感中间变量，将其划分为至少t+1份共享，其中t表示敌手被允许观察的最大份额，而不会获得任何敏感信息。换句话说，假设敌手的范围要么受到拥有的探针数量（例如微探针针）的限制，要么受到高阶SCA攻击（如差分功率分析）时的统计分析的顺序限制。这些有界模型被用来证明相应实现的SCA安全性。因此，人们相信在给定足够数量的份额的情况下，大部分已知的SCA攻击都可以得到缓解。
> 
> 在这项工作中，我们提出了一种新的激光辅助SCA技术，称为激光逻辑状态成像（LLSI）。该技术提供了无限数量的非接触式探针，因此违反了探测安全模型的假设。该技术使我们能够拍摄硬件实现的快照，即在任意时钟周期中用一次测量提取所有寄存器的逻辑状态。为了验证这一点，我们将攻击针对掩码AES硬件实现，并在两个不同的情景下实际演示了提取完整密钥的过程。首先，我们假设寄存器（密钥和/或状态）的位置已知，因此可以通过单个快照直接读取其内容。其次，我们考虑一个具有未知寄存器位置的实现，我们利用多个快照和一个SAT求解器来揭示其中的秘密。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519478/](https://ieeexplore.ieee.org/document/9519478/)
## CRYLOGGER: Detecting Crypto Misuses Dynamically.
🌍 [English](../../../docs/en/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#crylogger-detecting-crypto-misuses-dynamically) | **[简体中文](../../../docs/zh-CN/IEEE%20Symposium%20on%20Security%20and%20Privacy/IEEE%20Symposium%20on%20Security%20and%20Privacy[2021].md#crylogger-detecting-crypto-misuses-dynamically)**
### 作者
* Luca Piccolboni, Columbia University, New York, NY, USA
* Giuseppe Di Guglielmo, Columbia University, New York, NY, USA
* Luca P. Carloni, Columbia University, New York, NY, USA
* Simha Sethumadhavan, Columbia University, New York, NY, USA
### 摘要
> 密码学（加密）算法是所有安全系统的基本组成部分：例如，加密哈希函数和加密算法可以保证完整性和机密性等属性。然而，开发人员可能会错误使用此类算法的应用程序编程接口（API），例如使用恒定密钥和弱密码。本文介绍了CRYLOGGER，第一个用于动态检测密码学错误的开源工具。CRYLOGGER在执行过程中记录传递给密码学API的参数，并使用密码学规则列表离线检查其合法性。我们将CRYLOGGER与CryptoGuard进行了比较，CryptoGuard是最有效的静态工具之一，用于检测密码学错误。我们表明我们的工具可以补充CryptoGuard的结果，为结合静态和动态方法提供了支持。我们分析了从Google Play商店下载的1780个热门Android应用程序，以证明CRYLOGGER可以动态和自动地检测数千个应用程序中的密码学错误。我们还逆向工程了28个Android应用程序，并确认了CRYLOGGER标记的问题。我们还向应用程序开发人员披露了最严重的漏洞，并收集了他们的反馈。

### 链接
- **URL:** [https://ieeexplore.ieee.org/document/9519501/](https://ieeexplore.ieee.org/document/9519501/)
